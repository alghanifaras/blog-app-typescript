"use server";

import { prisma } from "@/lib/prisma";
import { registerSchema, TRegisterSchema } from "@/schemas/auth";
import bcrypt from "bcrypt";

export const registerUser = async (values: TRegisterSchema) => {
  const validateFields = registerSchema.safeParse(values);

  if (!validateFields.success) {
    return { error: "Data tidak valid!" };
  }

  const { name, email, password } = validateFields.data;

  try {
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return { error: "Email sudah terdaftar!" };
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    return {
      success: "Akun anda berhasil dibuat! silahkan login",
    };
  } catch (error) {
    console.error("Register Error:", error);

    return {
      error: "Terjadi kesalahan pada server!",
    };
  }
};
