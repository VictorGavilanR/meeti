"use client"

import { Form, FormInput, FormLabel, FormSubmit } from "@/src/shared/components/forms"

export default function ForgotPassword() {
  return (
    <Form>
        <FormLabel>Correo electrónico</FormLabel>
        <FormInput
        type="email"
        id="email"
        placeholder="Ingresa tu correo electrónicos"
        />

        <FormSubmit type="submit" value="Recuperar contraseña"/>
    </Form>
  )
}
