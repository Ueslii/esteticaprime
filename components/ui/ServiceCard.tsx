"use client";
import Image from "next/image";
import { useState } from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  image: string;
  whatsappUrl: string;
  includes?: string[]; // 👈 itens inclusos
}

export default function ServiceCard({
  title,
  description,
  price,
  image,
  whatsappUrl,
  includes = [],
}: ServiceCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`group relative flex flex-col bg-[#0B1320] rounded-xl border border-yellow-500/20 overflow-hidden shadow-lg transition-all duration-500 hover:shadow-yellow-400/20 hover:scale-[1.03] min-h-[480px]`}
    >
      {/* Imagem */}
      <div className="relative w-full h-[260px] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-3 right-3 bg-yellow-400 text-black font-bold text-sm px-4 py-1 rounded-full shadow-md">
          {price}
        </div>
      </div>

      {/* Conteúdo */}
      <div className="flex flex-col justify-between flex-1 bg-[#0B1320] px-8 py-6">
        <div>
          <h3 className="text-xl font-bold text-yellow-400 mb-2">
            {title.toUpperCase()}
          </h3>
          <p className="text-gray-300 text-base leading-relaxed">
            {description}
          </p>
        </div>

        {/* Botão */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-6 text-center bg-yellow-400 text-black font-semibold rounded-full py-3 w-full transition-all hover:bg-yellow-300 hover:scale-[1.05] hover:animate-[pulse-yellow_1.2s_ease-in-out_infinite]"
        >
          {expanded ? "FECHAR DETALHES" : "AGENDAR ESTE SERVIÇO"}
        </button>

        {/* Expansão suave */}
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            expanded ? "max-h-48 mt-4" : "max-h-0"
          }`}
        >
          {expanded && (
            <ul className="list-disc list-inside text-gray-300 text-sm space-y-1 mt-2 mb-2">
              {includes.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
              <li>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 gap-2 text-center bg-yellow-400 text-black font-semibold rounded-full w-full transition-all hover:bg-yellow-300 hover:scale-[1.05] hover:animate-[pulse-yellow_1.2s_ease-in-out_infinite]"
                >
                  Confirmar agendamento via WhatsApp
                </a>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
