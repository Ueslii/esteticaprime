import { siteInfo } from "@/data/site";
import ServiceCard from "../ui/ServiceCard";

const services = [
  {
    title: "Polimento Técnico",
    description: "Polimento longo",
    price: "R$40,99",
    image: "/polimento.jpg",
    includes: ["Item 1", "Item 2", "Item 3"],
  },
  {
    title: "Polimento Técnico1",
    description: "Polimento longo2",
    price: "R$40,99",
    image: "/polimento.jpg",
    includes: ["Item 1", "Item 2", "Item 3"],
  },
  {
    title: "Polimento Técnico1",
    description: "Polimento longo2",
    price: "R$40,99",
    image: "/polimento.jpg",
    includes: ["Item 1", "Item 2", "Item 3"],
  },
  {
    title: "Polimento Técnico1",
    description: "Polimento longo2",
    price: "R$40,99",
    image: "/polimento.jpg",
    includes: ["Item 1", "Item 2", "Item 3"],
  },
];

export default function Services() {
  const whatsappUrl = `https://wa.me/${
    siteInfo.whatsapp
  }?text=${encodeURIComponent("Olá! Gostaria de agendar um serviço.")}`;

  return (
    <section
      id="services"
      className="py-20 p-2 flex flex-col items-center justify-center text-center"
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
      {/* Mobile Scroll */}
      <div className="md:hidden relative flex overflow-x-auto snap-x snap-mandatory space-x-6 px-6 pb-8 scrollbar-none">
        {services.map((service, i) => (
          <div
            key={i}
            className="snap-center shrink-0 w-[85%] relative"
            style={{
              transform: `translateX(${i * -10}px) scale(${1 - i * 0.05})`,
              filter: i === 0 ? "none" : "blur(3px)",
              zIndex: services.length - i,
            }}
          >
            <ServiceCard
              key={service.title}
              {...service}
              whatsappUrl={whatsappUrl}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
