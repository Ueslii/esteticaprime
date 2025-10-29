"use client";
import { useState } from "react";
import { siteInfo } from "@/data/site";
import ServiceCard from "../ui/ServiceCard";

const services = [
  {
    title: "Lavagem de Carros Básica",
    description: "Lavagem rápida e eficiente para manter seu carro limpo.",
    price: "R$30,00",
    image: "/polimento.jpg",
    includes: ["Lavagem externa", "Secagem manual", "Limpeza de vidros"],
  },
  {
    title: "Lavagem de Caminhonetes Básica",
    description: "Polimento longo2",
    price: "R$40,00",
    image: "/polimento.jpg",
    includes: ["Lavagem externa", "Secagem manual", "Limpeza de vidros"],
  },
  {
    title: "Lavagem de Motos Básica Pop/Biz/Jet",
    description: "lavagem para motos pequenas",
    price: "R$ 15,00",
    image: "/polimento.jpg",
    includes: ["Item 1"],
  },
  {
    title: "Lavagem de Motos Básica Outras",
    description: "Outras motos",
    price: "R$ 20,00",
    image: "/polimento.jpg",
    includes: ["Item 1"],
  },
  {
    title: "Lavagem Detalhada",
    description:
      "Lavagem detalhada para Carros, Motos e Caminhonetes apenas com avaliacão, entre em contato.",
    price: "Entre em contato",
    image: "/polimento.jpg",
    includes: ["Entre em contato para mais detalhes"],
  },
  {
    title: "Restauração de Motor",
    description:
      "Cansado de ver seu motor sujo? Deixe-nos restaurá-lo para você.",
    price: "Faça um orçamento",
    image: "/polimento.jpg",
    includes: ["Item 1"],
  },
];

export default function Services() {
  const whatsappUrl = `https://wa.me/${
    siteInfo.whatsapp
  }?text=${encodeURIComponent("Olá! Gostaria de agendar um serviço.")}`;
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="services"
      className="py-20 p-2 flex flex-col items-center justify-center text-center hover:scale-[1.05] hover:shadow-yellow-400/20 hover:z-50"
    >
      <div className="mb-8 text-xl sm:text-3xl md:text-4xl font-bold text-yellow-400">
        <h1>Nossos Serviços</h1>
        <p className="mt-4 text-white max-w-2xl mx-auto text-xl sm:text-2xl md:text-2xl font-normal">
          Oferecemos uma gama completa de serviços de estética automotiva com
          qualidade premium
        </p>
      </div>
      <div className="hidden md:grid md:grid-cols-2 gap-10 max-w-7xl mx-auto px-6">
        {services.map((service) => (
          <ServiceCard
            key={service.title}
            {...service}
            whatsappUrl={whatsappUrl}
          />
        ))}
      </div>
      {/* Mobile Carousel */}
      <div className="md:hidden relative flex justify-start items-stretch snap-x snap-mandatory overflow-x-auto overflow-y-visible w-full min-h-[500px] px-4 space-x-6 scrollbar-none">
        {services.map((service, i) => {
          const offset = i - activeIndex;
          const isActive = offset === 0;

          return (
            <div
              key={i}
              className={`absolute transition-all duration-500 ease-in-out ${
                isActive
                  ? "z-20 scale-100 blur-0 opacity-100"
                  : "z-10 scale-90 blur-sm opacity-60"
              }`}
              style={{
                transform: `translateX(${offset * 70}%)`,
              }}
              onClick={() => setActiveIndex(i)}
            >
              <div className="w-[80vw] max-w-[400px] mx-auto">
                <ServiceCard {...service} whatsappUrl={whatsappUrl} />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
