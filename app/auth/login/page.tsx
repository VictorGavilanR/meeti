import LoginForm from "@/src/features/auth/components/LoginForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meeti - Iniciar Sesión",
};

export default function LoginPage() {
  return (
    <>
      <h1 className="text-4xl font-bold text-center">Iniciar Sesión</h1>
      <LoginForm />
    </>
  );
}
