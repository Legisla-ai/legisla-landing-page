// src/components/Footer.jsx
import { Instagram } from "lucide-react";
import { LegislaLogo } from "./legisla-logo";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-black text-white py-12 text-center px-4">
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center gap-2">
          <LegislaLogo className="h-8 w-auto" />
          <span className="text-xl font-bold">Legisla.AI</span>
        </div>
        <Link
          href="https://www.instagram.com/oficiallegisla.ai/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram className="h-5 w-5" />
        </Link>
        <p className="text-sm text-gray-400">
          Copyright 2025 Legisla.AI | Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
}
