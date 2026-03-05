import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";
import { contactSchema } from "@/lib/schemas/contact";
import { ZodError } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY || "re_dummy_key");

export async function POST(request: NextRequest) {
  try {
    const rawBody = await request.json();

    // Validación con Zod: garantiza tipos correctos y mensajes de error descriptivos
    const body = contactSchema.parse(rawBody);

    // Enviar email al equipo de Elefante
    const adminEmailResult = await resend.emails.send({
      from: "contacto@elefante.com.co",
      to: "hola@elefante.com.co",
      subject: `Nuevo mensaje de contacto de ${body.name}`,
      html: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        ${body.company ? `<p><strong>Empresa:</strong> ${body.company}</p>` : ""}
        ${body.phone ? `<p><strong>Teléfono:</strong> ${body.phone}</p>` : ""}
        ${body.service ? `<p><strong>Servicio de interés:</strong> ${body.service}</p>` : ""}
        <p><strong>Mensaje:</strong></p>
        <p>${body.message.replace(/\n/g, "<br>")}</p>
      `,
    });

    if (adminEmailResult.error) {
      console.error("Error enviando email al admin:", adminEmailResult.error);
      return NextResponse.json(
        { error: "Error al enviar el mensaje. Intenta de nuevo." },
        { status: 500 }
      );
    }

    // Enviar email de confirmación al usuario (no crítico)
    const userEmailResult = await resend.emails.send({
      from: "contacto@elefante.com.co",
      to: body.email,
      subject: "Hemos recibido tu mensaje - Elefante",
      html: `
        <h2>¡Gracias por contactarnos!</h2>
        <p>Hola ${body.name},</p>
        <p>Hemos recibido tu mensaje y nos pondremos en contacto contigo pronto.</p>
        <p>En Elefante estamos comprometidos a responder en menos de 24 horas.</p>
        <br>
        <p>Saludos,<br>El equipo de Elefante</p>
      `,
    });

    if (userEmailResult.error) {
      // No interrumpir el flujo si el email de confirmación falla
      console.error("Error enviando confirmación al usuario:", userEmailResult.error);
    }

    return NextResponse.json(
      { success: true, message: "Mensaje enviado correctamente." },
      { status: 200 }
    );
  } catch (error) {
    // Error de validación Zod: devuelve los mensajes de error al cliente
    if (error instanceof ZodError) {
      return NextResponse.json(
        {
          error: "Datos del formulario inválidos.",
          details: error.issues.map((e) => ({
            field: e.path.join("."),
            message: e.message,
          })),
        },
        { status: 422 }
      );
    }

    console.error("Error inesperado en /api/send:", error);
    return NextResponse.json(
      { error: "Error interno del servidor." },
      { status: 500 }
    );
  }
}
