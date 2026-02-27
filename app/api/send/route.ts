import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY || "re_dummy_key");

interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  service?: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Send email to admin
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
        ${body.service ? `<p><strong>Servicio:</strong> ${body.service}</p>` : ""}
        <p><strong>Mensaje:</strong></p>
        <p>${body.message.replace(/\n/g, "<br>")}</p>
      `,
    });

    if (adminEmailResult.error) {
      return NextResponse.json(
        { error: "Failed to send email to admin" },
        { status: 500 }
      );
    }

    // Send confirmation email to user
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
      console.error("Failed to send confirmation email:", userEmailResult.error);
      // Don't fail the request if confirmation email fails
    }

    return NextResponse.json(
      { success: true, message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
