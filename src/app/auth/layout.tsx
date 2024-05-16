import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full min-h-screen flex justify-center items-center bg-white">
      {children}
    </div>
  );
}
