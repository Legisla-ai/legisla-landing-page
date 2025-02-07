// src/components/Header.jsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LegislaLogo } from "@/components/legisla-logo";
import { satoshi } from "@/lib/fonts";
import { whatsappLink } from "@/lib/utils";
import { WhatsAppIcon } from "./whatsapp-icon";

export function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-3 group">
          <LegislaLogo className="h-8 w-auto transition-transform duration-300 group-hover:scale-110" />
          <span
            className={`${satoshi.className} text-xl font-bold text-[#1A1A1A] group-hover:text-blue-600 transition-colors`}
          >
            Legisla.ai
          </span>
        </Link>
        <div className="flex items-center space-x-4">
          <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button
              variant="default"
              className="bg-[#00A651] hover:bg-[#009548] text-white flex items-center gap-2 transition-all duration-200 hover:shadow-lg"
            >
              <WhatsAppIcon className="h-6 w-6" />
              <span className="hidden md:inline">Fale com um especialista</span>
            </Button>
          </Link>
          <Link href="/trial" className="hidden md:block">
            <Button
              variant="default"
              className="bg-[#036490] hover:bg-[#025d77] text-white flex items-center gap-2 transition-all duration-200 hover:shadow-lg"
            >
              <span>Experimente Gratis</span>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
