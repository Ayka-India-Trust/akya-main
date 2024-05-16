import RegisterForm from "@/components/register-form.tsx/form";
import React from "react";

export default function RegisterPage() {
  return (
    <div className="bg-white">
      <h1 className="text-4xl font-bold text-center mt-8">Ayka India Trust</h1>
      <h2 className="text-2xl font-bold text-center mt-4">Registration form</h2>

      <RegisterForm />
    </div>
  );
}
