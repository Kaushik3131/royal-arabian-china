import { z } from "zod";

export const enquirySchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long" })
    .max(100, { message: "Name must be under 100 characters" })
    .trim(),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Please enter a valid email address" })
    .trim(),
  phone: z.string().trim().optional(),
  package_name: z
    .string()
    .min(1, { message: "Please select a package" })
    .trim(),
  message: z.string().trim().optional(),
});

export type EnquiryInput = z.infer<typeof enquirySchema>;
