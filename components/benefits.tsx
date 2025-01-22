import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Benefits() {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-[#051B2C] to-[#0A2847] rounded-[40px] mx-4 my-16">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-32 items-start">
          <div className="space-y-4">
            {[
              "Economize tempo com Inteligência artificial para advogados",
              "Escreva peças de alta qualidade em minutos",
              "Pesquise Jurisprudências Reais em minutos",
              "Resuma petições para seus clientes de forma simples",
            ].map((text, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/15 transition-all duration-300 hover:transform hover:translate-x-1"
              >
                <div className="rounded-full p-0.5 bg-gradient-to-r from-[#3CDFFF] to-[#3CDFFF]/50 group-hover:from-[#3CDFFF] group-hover:to-[#3CDFFF]">
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
              A IA da Legisla.AI é treinada com Jurisprudências reais e com a legislação Brasileira, trazendo o
              conhecimento e qualidade de milhares de processos e leis.
            </p>
            <Button
              variant="outline"
              className="border border-white/20 text-white hover:bg-white/10 rounded-lg px-8 py-6 h-auto text-base bg-white/5 transition-all duration-300 hover:border-white/40 hover:text-white"
            >
              Fale com um especialista
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

