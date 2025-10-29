"use client";
import { Menu } from "lucide-react";
import { useState } from "react";
import { siteInfo } from "@/data/site";

export default function Navbar() {
  const whatsappUrl = `https://wa.me/${
    siteInfo.whatsapp
  }?text=${encodeURIComponent(siteInfo.defaultMessage)}`;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="w-full backdrop-blur px-5 bg-black/80 flex justify-between font-[inter] items-center py-4 border-b border-b border-yellow-500/20 sticky top-0 z-50 px-8 ">
        <h1 className=" flex text-2xl sm:text-2xl md:text-4xl font-bold text-[var(--color-yellow)]">
          ESTÉTICA PRIME
        </h1>
        {/*<img src="./image/logo.jpg" alt="Logo" width={60} height={10} />*/}
        <div className=" items-center justify-center gap-8 text-lg hidden md:flex">
          <a className="flex items-center " href="#hero">
            Inicio
          </a>
          <a className="flex  items-center " href="#services">
            Serviços
          </a>
          <a className="flex  items-center " href="#sobre">
            Sobre
          </a>
          <a className="flex  items-center " href="#contact">
            Contato
          </a>
        </div>
        <div className="flex text-xl justify-end hidden md:flex">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-yellow-400 text-black font-bold px-6 sm:px-4 py-2 sm:py-2 rounded-full shadow-lg hover:bg-yellow-300active:scale-110 hover:scale-105 transition-transform duration-150 ease-out "
          >
            AGENDAR SERVIÇO
          </a>
        </div>
        <div className="block md:hidden transition-all duration-300">
          <button onClick={() => setIsOpen(!isOpen)}>
            <Menu className="text-white" />
          </button>
        </div>
        {isOpen && (
          <div className="absolute top-full left-0 w-full z-[60] bg-black/90 backdrop-blur md:hidden flex flex-col">
            <a
              className="px-8 py-4 border-b border-yellow-400/20"
              href="#hero"
              onClick={() => setIsOpen(false)}
            >
              Inicio
            </a>
            <a
              className="px-8 py-4 border-b border-yellow-400/20"
              href="#services"
              onClick={() => setIsOpen(false)}
            >
              Serviços
            </a>
            <a
              className="px-8 py-4 border-b border-yellow-400/20"
              href="#sobre"
              onClick={() => setIsOpen(false)}
            >
              Sobre
            </a>
            <a
              className="px-8 py-4"
              href="#contact"
              onClick={() => setIsOpen(false)}
            >
              Contato
            </a>
            <div className="px-8 py-4 ">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-yellow-400 text-black font-bold px-6 sm:px-4 py-2 sm:py-2 rounded-full shadow-lg hover:bg-yellow-300active:scale-110 hover:scale-105 transition-transform duration-150 ease-out "
              >
                AGENDAR SERVIÇO
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
