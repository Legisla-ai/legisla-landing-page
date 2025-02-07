// src/pages/LandingPage.jsx
"use client";

import { useEffect } from "react";
import { Instagram } from "lucide-react";
import { LegislaLogo } from "./legisla-logo";
import Link from "next/link";

declare global {
  interface Window {
    hbspt: {
      forms: {
        create: (config: {
          portalId: string;
          formId: string;
          target?: string;
        }) => void;
      };
    };
  }
}

export function HubSpotForm() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//js.hsforms.net/forms/embed/v2.js";
    script.charset = "utf-8";
    script.type = "text/javascript";
    document.body.appendChild(script);

    script.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: "48908208",
          formId: "23a0ca43-6997-47fb-a2d6-ff86f97168a9",
          target: "#hubspot-form-container",
        });
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      id="hubspot-form-container"
      className="w-full max-w-xl bg-white rounded-lg p-6"
    />
  );
}

export default function Contact() {
  return (
    <div
      id="contact-section"
      className="bg-black text-white flex flex-col items-center px-4"
    >
      {/* Header */}
      <header className="text-center max-w-2xl mx-auto mt-16 mb-8">
        <h1 className="text-3xl md:text-4xl font-medium mb-4">
          Fale agora com a Legisla.ai e{" "}
          <span className="text-cyan-400">não perca mais tempo</span> em seu
          escritório.
        </h1>
        <p className="text-gray-400 text-sm md:text-base">
          Seus concorrentes já estão utilizando a inteligência artificial em
          seus escritórios, aproveite essa tecnologia você também.
        </p>
      </header>

      {/* HubSpot Form */}
      <HubSpotForm />
    </div>
  );
}
