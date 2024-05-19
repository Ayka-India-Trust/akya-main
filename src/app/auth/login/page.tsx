import React from "react";
import { LoginForm } from "@/components/auth/login-form";

export default function LoginPage() {
  return (
    <div className="flex flex-row justify-center items-center ">
      <div className="hidden sm:block bg-red-800 w-[400px] h-[430px] border rounded-lg">
        ...
      </div>
      <LoginForm />
    </div>
  );
}
