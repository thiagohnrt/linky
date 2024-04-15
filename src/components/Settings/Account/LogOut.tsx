"use client";

import { Button } from "@/components/ui/button";
import { ReloadIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function AccountLogOut() {
  const router = useRouter();
  const [isLoading, setLoading] = useState(false);
  const handleLogOut = async () => {
    setLoading(true);
    await fetch("/api/logout", { method: "DELETE" });
    router.replace("/auth");
  };

  return (
    <Button onClick={handleLogOut} disabled={isLoading}>
      {isLoading ? <ReloadIcon className="animate-spin" /> : "Log Out"}
    </Button>
  );
}
