
import ForgotPassword from "@/src/features/auth/components/ForgotPassword";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meeti - Restablecer Contraseña"
};

export default function ForgotPasswordPage() {
  return (

    <>
    <h1 className="text-4xl font-bold text-center">Recupera tu acceso a Meet</h1>
    <ForgotPassword/>
    </>
)
}
