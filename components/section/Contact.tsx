import { MapPin, Phone, Clock9 } from "lucide-react";
import Location from "./Location";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 p-2 flex flex-col items-center justify-center text-center"
    >
      {/* Cabeçalho */}
      <div className="mb-8 text-xl sm:text-3xl md:text-4xl font-bold">
        <h1 className="flex justify-center items-center text-3xl md:text-4xl font-bold text-yellow-400">
          Entre Em Contato
        </h1>
        <p className="mt-4 text-white max-w-2xl mx-auto text-xl sm:text-2xl font-normal">
          Agende seu serviço hoje mesmo
        </p>
      </div>

      {/* Grid principal */}
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 justify-center items-start w-full max-w-6xl">
        {/* Coluna Esquerda */}
        <div className="flex flex-col space-y-8 text-left w-full lg:w-1/2">
          {/* Localização */}
          <div className="flex items-start space-x-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-yellow-400 text-black shadow-md flex-shrink-0">
              <MapPin size={24} strokeWidth={2.5} />
            </div>
            <div>
              <h3 className="text-yellow-400 font-semibold text-lg">
                Localização
              </h3>
              <p className="text-gray-200 text-sm leading-relaxed">
                R. Aristídes de Jesus - Amargosa, BA, 45300-000, Nº 131 <br />
                (Rodagem da Urbis 2)
              </p>
            </div>
          </div>

          {/* Telefone */}
          <div className="flex items-start space-x-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-yellow-400 text-black shadow-md flex-shrink-0">
              <Phone size={24} strokeWidth={2.5} />
            </div>
            <div>
              <h3 className="text-yellow-400 font-semibold text-lg">
                Telefone
              </h3>
              <p className="text-gray-200 text-sm">(75) 98891-9901</p>
            </div>
          </div>

          {/* Horários */}
          <div className="flex items-start space-x-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-yellow-400 text-black shadow-md flex-shrink-0">
              <Clock9 size={24} strokeWidth={2.5} />
            </div>
            <div>
              <h3 className="text-yellow-400 font-semibold text-lg">
                Horários
              </h3>
              <p className="text-gray-200 text-sm leading-relaxed">
                Segunda: 12:00 - 17:00 <br />
                Terça a Sexta: 08:00 - 17:00 <br />
                Sábado e Domingo: 07:00 - 17:00
              </p>
            </div>
          </div>
          {/* Redes Sociais */}
          <div className="flex items-start space-x-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-yellow-400 text-black shadow-md flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-instagram"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.5" y1="6.5" y2="6.5" />
              </svg>
            </div>
            <div>
              <h3 className="text-yellow-400 font-semibold text-lg">
                Instagram
              </h3>
              <p className="text-gray-200 text-sm">@estetica_pr1me</p>
            </div>
          </div>
        </div>

        {/* Coluna Direita */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="w-full max-w-md bg-[#0B1320] rounded-2xl border border-yellow-400/20 shadow-lg p-4">
            <Location />
          </div>
        </div>
      </div>
    </section>
  );
}
