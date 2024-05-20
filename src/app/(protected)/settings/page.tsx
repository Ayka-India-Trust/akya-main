import React from "react";
import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";

export default async function SettingsPage() {
  const session = await auth();
  return (
    <div className="overflow-x-auto text-wrap">
      {JSON.stringify(session)}
      <form
        action={async () => {
          "use server";

          await signOut({
            redirectTo: "/",
          });
        }}
      >
        <Button type="submit">SignOut</Button>
      </form>
    </div>
  );
}
