// src/components/Benefits.jsx
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Benefits() {
  const scrollToForm = () => {
    const formElement = document.getElementById("contact-section");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-12 px-12 bg-gradient-to-br from-[#051B2C] to-[#0A2847] rounded-[40px] mx-4 my-16">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-6">
            {[
              "Economize tempo com Inteligência artificial para advogados",
              "Escreva peças de alta qualidade em minutos",
              "Pesquise Jurisprudências Reais em minutos",
              "Resuma petições para seus clientes de forma simples",
            ].map((text, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-6 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/15 transition-all duration-300 hover:translate-x-1"
              >
                <div className="rounded-full p-0.5 bg-gradient-to-r from-[#3CDFFF] to-[#3CDFFF]/50">
                  <Check className="h-4 w-4 text-[#051B2C]" />
                </div>
                <span className="text-white text-sm">{text}</span>
              </div>
            ))}
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-white leading-tight hover:text-cyan-400 transition-colors">
              Otimize rotinas, reduza tempo de processo e atrasos
            </h2>
            <p className="text-gray-300 text-lg hover:text-white transition-colors">
              A IA da Legisla.ai é treinada com Jurisprudências reais e com a
              legislação Brasileira, trazendo o conhecimento e qualidade de
              milhares de processos e leis.
            </p>
            <div className="flex justify-start max-[900px]:justify-center">
              <Button
                onClick={scrollToForm}
                variant="outline"
                className="border border-white/20 text-white hover:bg-white/10 rounded-lg px-8 py-6 mt-8 h-auto text-base bg-white/5 transition-all duration-300 hover:border-white/40 hover:text-white"
              >
                Fale com um especialista
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
