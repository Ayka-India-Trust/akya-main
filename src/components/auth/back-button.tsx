"use client";

import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

interface BacButtonProps {
  label: string;
  href: string;
}

export function BackButton({ label, href }: BacButtonProps) {
  return (
    <Button variant={"link"} className="font-normal w-full" size={"sm"} asChild>
      <Link href={href}>{label}</Link>
    </Button>
  );
}
