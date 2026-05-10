import { z } from "zod";

export const registerSchema = z.object({
  name: z
    .string()
    .min(3, "Nama minimal harus 3 karakter")
    .max(50, "Nama maksimal 50 karakter"),
  email: z.string().email("Format email tidak valid"),
  password: z
    .string()
    .min(8, "Password minimal 8 karakter")
    .regex(/[A-Z]/, "Password harus mengandung minimal satu huruf kapital")
    .regex(/[0-9]/, "Password harus mengandung minimal satu angka"),
});

export type TRegisterSchema = z.infer<typeof registerSchema>;

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, "Email harus diisi")
    .email("Format email tidak valid"),
  password: z.string().min(1, "Password harus diisi"),
});
