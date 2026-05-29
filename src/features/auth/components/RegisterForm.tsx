"use client";
import { Form, FormInput, FormLabel, FormSubmit } from "@/components/forms";

export default function RegisterForm() {
  return (
    <Form className="mt-10 space-y-3 ">
      <FormLabel htmlFor="name">Nombre</FormLabel>
      <FormInput id="name" type="text" placeholder="Ingresa tu nombre" />
      <FormLabel htmlFor="email">Correo Electrónico</FormLabel>
      <FormInput
        type="email"
        id="email"
        placeholder="Ingresa tu correo electrónico"
      />

      <FormLabel htmlFor="password">Contraseña</FormLabel>
      <FormInput
        id="password"
        type="password"
        placeholder="Ingresa contraseña"
      ></FormInput>
      <FormLabel htmlFor="password_confirmation">Repite Contraseña</FormLabel>
      <FormInput
        type="password"
        id="password_confirmation"
        placeholder="Repite contraseña"
      />

      <FormSubmit type="submit" value="Crear Cuenta" />
    </Form>
  );
}
