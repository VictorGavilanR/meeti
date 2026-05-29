"use client";
import { Form, FormInput, FormLabel, FormSubmit } from "@/components/forms";

export default function LoginForm() {
  return (
    <Form className="mt-10 space-y-3 ">
      <FormLabel htmlFor="email">Correo Electrónico</FormLabel>
      <FormInput
        type="email"
        id="email"
        placeholder="Ingresa tu correo electrónico"
      />
      <FormLabel htmlFor="password">Contraseña</FormLabel>
      <FormInput
        type="password"
        id="password"
        placeholder="Ingresa contraseña"
      />
      
      <FormSubmit type="submit" value="Iniciar Sesión" />
    </Form>
  );
}
