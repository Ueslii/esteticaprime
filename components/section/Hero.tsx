import Image from "next/image";
import { siteInfo } from "@/data/site";
import { Phone, CarFront } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="h-[90vh] flex flex-col items-center justify-center text-centeroverflow-hidden"
    >
      <header>
        <Image
          src="/header.jpg"
          alt="BMW preto polido"
          fill
          className="object-cover object-[center_30%] -z-10 brightness-[0.6]"
          priority
        />
      </header>

      <div className="z-10 max-w-4xl px-6 sm:px-8 pt-10">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight text-center ">
          <span className="text-[var(--color-yellow)]">ESTÉTICA</span>{" "}
          <span className="text-white block sm:inline">PRIME</span>
        </h1>
        <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-2xl text-gray-200 leading-snug sm:leading-relaxed">
          Dedicados a realçar a beleza e longevidade de carros e motocicletas
          com serviços estéticos excepcionais
        </p>
      </div>

      <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center">
        <a
          href="#services"
          className="flex items-center justify-center gap-2 bg-yellow-400 text-black font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-lg hover:bg-yellow-300active:scale-110 hover:scale-105 transition-transform duration-150 ease-out "
        >
          <CarFront size={20} />
          AGENDAR SERVIÇO
        </a>

        <a
          href={`tel:+${siteInfo.whatsapp}`}
          className="flex items-center justify-center gap-2 text-yellow-400 font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-yellow-400 hover:text-black transition"
        >
          <Phone size={20} />
          LIGUE AGORA
        </a>
      </div>
    </section>
  );
}
