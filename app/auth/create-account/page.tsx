import RegisterForm from "@/src/features/auth/components/RegisterForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meeti - Crear una Cuenta",
};

export default function CreateAccountPage() {
  return (
    <>
      <h1  className="text-4xl font-bold text-center"> Crear una Cuenta</h1>
      <RegisterForm/>
    </>
  );
}
