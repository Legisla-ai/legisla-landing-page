// src/components/Hero.jsx
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { whatsappLink } from "@/lib/utils";

export function Hero() {
  const scrollToForm = () => {
    const formElement = document.getElementById("contact-section");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="pt-32 pb-4 px-4 gradient-background-top">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Transforme 8 horas de trabalho{" "}
            <span className="text-cyan-400 hover:text-cyan-500 transition-colors">
              em 8 minutos
            </span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Escreva contratos, peças Jurídicas e pesquise Jurisprudências reais
            em minutos com Inteligência Artificial especializada em Advogados
          </p>
          <div className="flex items-center justify-center space-x-4">
            <Button
              onClick={scrollToForm}
              variant="outline"
              className="bg-white text-blue-600 border-none shadow-sm hover:bg-gray-50 hover:text-blue-700 transition-all duration-200 px-6 hover:shadow-md"
            >
              Falar com um especialista
            </Button>
            {/* Remover este botão por enquanto
            <Link href="/trial" className="hidden md:block">
              <Button
                variant="default"
                className="bg-[#036490] hover:bg-[#025d77] text-white flex items-center gap-2 transition-all duration-200 hover:shadow-lg"
              >
                Experimente Gratis
              </Button>
            </Link>
            */}
          </div>
        </div>
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-lg overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300">
            <Image
              src="/images/app_home.png"
              alt="Interface do Legisla.AI mostrando as principais funcionalidades"
              width={1200}
              height={675}
              className="w-full"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
