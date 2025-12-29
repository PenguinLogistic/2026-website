import { z } from "zod";

export const contactSchema = z.object({
  subject: z.string().min(2, "Title must be at least 2 characters"),
  email: z.email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
