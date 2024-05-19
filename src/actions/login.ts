"use server";
import * as z from "zod";
import { LoginSchema } from "@/schemas";
import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { AuthError } from "next-auth";

export const login = async (request: z.infer<typeof LoginSchema>) => {
  const validatedSchema = LoginSchema.safeParse(request);
  if (!validatedSchema.success) {
    return {
      error: "Invalid schema.",
    };
  }

  const { email, password } = validatedSchema.data;

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return {
            error: "Invalid credentials.",
          };
        default:
          return {
            error: "An unknown error occurred.",
          };
      }
    }

    throw error;

    //todo
  }
};
