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
  const buildWhatsappUrl = (title: string) =>
    `https://wa.me/${siteInfo.whatsapp}?text=${encodeURIComponent(
      `Olá! Gostaria de agendar um serviço de ${title}.`
    )}`;
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="services"
      className="py-20 p-2 flex flex-col items-center justify-center text-center hover:shadow-yellow-400/20 hover:z-50"
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
            whatsappUrl={buildWhatsappUrl(service.title)}
          />
        ))}
      </div>
      {/* Mobile Carousel */}
      <div
        id="services-carousel"
        className="md:hidden  flex justify-center items-center w-full h-[520px] overflow-visible relative py-8 touch-pan-y"
        onTouchStart={(e) =>
          (e.currentTarget.dataset.startX = e.touches[0].clientX.toString())
        }
        onTouchEnd={(e) => {
          const startX = parseFloat(e.currentTarget.dataset.startX || "0");
          const endX = e.changedTouches[0].clientX;
          const delta = endX - startX;

          if (Math.abs(delta) > 50) {
            setActiveIndex((prev) =>
              delta > 0
                ? (prev - 1 + services.length) % services.length
                : (prev + 1) % services.length
            );
          }
        }}
      >
        {services.map((service, i) => {
          const offset = i - activeIndex;
          const isActive = offset === 0;

          const transform = `
      translateX(${offset * 75}%) 
      scale(${isActive ? 1 : 0.9}) 
      rotateY(${offset * -4}deg)
    `;
          const blur = isActive ? "blur(0px)" : "blur(3px)";
          const zIndex = 10 - Math.abs(offset);
          const opacity = Math.abs(offset) > 2 ? 0 : 1;

          return (
            <div
              key={i}
              className="absolute transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] flex justify-center items-center"
              style={{
                transform,
                zIndex,
                opacity,
                filter: blur,
                top: "50%",
                left: "50%",
                transformOrigin: "center",
                translate: "-50% -50%",
              }}
            >
              <div className="w-[85vw] max-w-[400px] min-h-[480px]">
                <ServiceCard
                  {...service}
                  whatsappUrl={buildWhatsappUrl(service.title)}
                />
              </div>
            </div>
          );
        })}

        {/* Botões */}
        <button
          onClick={() =>
            setActiveIndex((prev) =>
              prev === 0 ? services.length - 1 : prev - 1
            )
          }
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-yellow-400 p-3 rounded-full text-lg font-bold z-30"
        >
          ‹
        </button>
        <button
          onClick={() => setActiveIndex((prev) => (prev + 1) % services.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-yellow-400 p-3 rounded-full text-lg font-bold z-30"
        >
          ›
        </button>
      </div>
      {/* Contato Personalizado */}
      <div className="mt-12 mx-auto">
        <div className="bg-yellow-400/20 border  rounded-xl border-yellow-100/20 items-center justify-center p-6 shadow-lg">
          <h1 className="text-2xl font-bold py-4 text-yellow-400">
            Não encontrou o serviço que procurava?
          </h1>
          <p className="text-lg text-white gap-2 py-2 ">
            Entre em contato conosco para serviços personalizado.
          </p>
          <a
            href={`https://wa.me/${siteInfo.whatsapp}?text=${encodeURIComponent(
              "Olá! Gostaria de solicitar um orçamento personalizado."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="py-3 gap-2 text-center justify-center flex bg-yellow-400 text-black font-semibold rounded-full w-full transition-all hover:bg-yellow-300 hover:scale-[1.05]"
          >
            Solicite um orçamento personalizado
          </a>
        </div>
      </div>
    </section>
  );
}
