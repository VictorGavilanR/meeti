import { Metadata } from "next";
import Link from "next/link";

import Hero from "@/components/ui/Hero";

export const metadata: Metadata = {
  title: "Meeti - Inicio",
};

export default function Home() {
  return (
    <>
      <Hero />
      <Link href="/nosotros">Ir a nosotros</Link>
    </>
  );
}
