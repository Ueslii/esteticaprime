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
      <div
        className="md:hidden flex overflow-x-auto overflow-y-visible w-full px-6 py-4 space-x-4 snap-x snap-mandatory scroll-smooth scrollbar-none"
        onScroll={(e) => {
          const scrollLeft = e.currentTarget.scrollLeft;
          const width = e.currentTarget.offsetWidth;
          const index = Math.round(scrollLeft / (width * 0.8)); // detecta o card central
          if (index !== activeIndex) setActiveIndex(index);
        }}
        onTouchEnd={(e) => {
          const container = e.currentTarget;
          const width = container.offsetWidth;
          const targetScroll = activeIndex * (width * 0.8);
          container.scrollTo({
            left: targetScroll,
            behavior: "smooth",
          });
        }}
      >
        {services.map((service, i) => {
          const isActive = i === activeIndex;

          return (
            <div
              key={i}
              className={`snap-center transition-all duration-500 ease-in-out transform ${
                isActive
                  ? "scale-100 opacity-100 blur-0 z-20"
                  : "scale-90 opacity-60 blur-sm z-10"
              }`}
              style={{
                flex: "0 0 80%",
                scrollSnapAlign: "center",
              }}
            >
              <ServiceCard {...service} whatsappUrl={whatsappUrl} />
            </div>
          );
        })}
      </div>

      {/* Indicadores */}
      <div className="flex justify-center mt-4 space-x-2">
        {services.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              i === activeIndex ? "bg-yellow-400 w-4" : "bg-gray-500/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
