import { AuthForm } from "@/components/Auth/AuthForm";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function Auth() {
  const cookieStore = cookies();
  const hasUserAuth = cookieStore.has("user-auth");

  if (hasUserAuth) {
    redirect("/");
  }

  return <AuthForm />;
}
