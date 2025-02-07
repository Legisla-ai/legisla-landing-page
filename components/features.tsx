// src/components/Features.jsx
import { Search, FileText, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Features() {
  return (
    <section className="pt-16 px-4 gradient-background-bottom">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center">
          Escrita de peças e{" "}
          <span className="bg-gradient-to-r from-[#036490] to-[#00D3D4] text-transparent bg-clip-text">
            pesquisa de Jurisprudência
          </span>
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Veja como a Legisla.ai resolve problemas que te tiram tempo no dia a
          dia utilizando inteligência artificial
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Search className="h-6 w-6" />}
            title="Pesquisa de Jurisprudência"
            description="Encontre precedentes relevantes rapidamente com nossa inteligência artificial"
          />
          <FeatureCard
            icon={<FileText className="h-6 w-6" />}
            title="Criação Automática de Documentos"
            description="Gere contratos, petições e recursos em minutos com nossa IA treinada em milhares de documentos jurídicos"
          />
          <FeatureCard
            icon={<Shield className="h-6 w-6" />}
            title="Preze pela segurança dos seus clientes"
            description="Não exponha seus dados e os dados dos seus clientes em IAs Gratuitas, utilize uma IA de confiança"
          />
        </div>
        <div className="mt-12 flex justify-center">
          <Link href="/trial">
            <Button
              variant="default"
              className="bg-[#036490] hover:bg-[#025d77] text-white flex items-center gap-2 transition-all duration-200 hover:shadow-lg"
            >
              Experimente Gratis
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="p-6 rounded-lg border bg-white shadow hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
      <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-200 group-hover:text-blue-700 transition-colors mb-4">
        {icon}
      </div>
      <h3 className="font-semibold text-xl mb-2 group-hover:text-blue-600 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
        {description}
      </p>
    </div>
  );
}
