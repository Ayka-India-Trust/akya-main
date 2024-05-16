"use server";
import * as z from "zod";
import { RegisterSchema } from "@/schemas";

type Inputs = z.infer<typeof RegisterSchema>;

export const registerAction = async (request: Inputs) => {
  const validatedSchema = RegisterSchema.safeParse(request);
  if (!validatedSchema.success) {
    return {
      error: "Invalid schema.",
    };
  }

  console.log("Registering user with data:", request);
  return {
    success: "Signup successful.",
  };
};
