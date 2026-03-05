import { z } from "zod";

/**
 * Esquema de validación compartido para el formulario de contacto.
 * Se usa tanto en el cliente (ContactSection) como en el servidor (API Route /api/send).
 * Esto garantiza una seguridad de tipos de extremo a extremo.
 */
export const contactSchema = z.object({
  name: z
    .string()
    .min(2, { message: "El nombre debe tener al menos 2 caracteres." })
    .max(100, { message: "El nombre no puede superar los 100 caracteres." }),

  email: z
    .string()
    .email({ message: "Por favor, ingresa un email válido." }),

  company: z
    .string()
    .max(100, { message: "El nombre de la empresa no puede superar los 100 caracteres." })
    .optional(),

  phone: z
    .string()
    .max(20, { message: "El teléfono no puede superar los 20 caracteres." })
    .optional(),

  service: z
    .enum([
      "growth-marketing",
      "performance-ads",
      "social-media",
      "seo-sem",
      "analytics-data",
      "ai-agents",
      "otro",
      "",
    ])
    .optional(),

  message: z
    .string()
    .min(10, { message: "El mensaje debe tener al menos 10 caracteres." })
    .max(2000, { message: "El mensaje no puede superar los 2000 caracteres." }),
});

export type ContactFormData = z.infer<typeof contactSchema>;
