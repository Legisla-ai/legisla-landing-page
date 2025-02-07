"use client";

import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { Benefits } from "@/components/benefits";
import { Footer } from "@/components/footer";
import Contact from "@/components/contact";
import { FloatButton } from "@/components/float-button";
import { WhatsAppIcon } from "@/components/whatsapp-icon";

export default function Home() {
  const phoneNumber = "5547988724280";
  const message = encodeURIComponent(
    "Olá, gostaria de saber mais sobre o Legisla.AI!",
  );

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <main className="gradient-background">
      <Header />
      <Hero />
      <Features />
      <Benefits />
      <Contact />
      <Footer />
      <FloatButton
        icon={<WhatsAppIcon />}
        onClick={() => window.open(whatsappLink, "_blank")}
      />
    </main>
  );
}
