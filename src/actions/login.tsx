"use server";
import * as z from "zod";
import { LoginSchema } from "@/schemas";

export const login = async (request: z.infer<typeof LoginSchema>) => {
  const validatedSchema = LoginSchema.safeParse(request);
  if (!validatedSchema.success) {
    return {
      error: "Invalid schema.",
    };
  }

  return {
    success: "Login successful.",
  };
};
