import MapPin from "lucide-react";
export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 p-2 flex flex-col items-center justify-center text-center"
    >
      <div>
        <div className="mb-8 text-xl  sm:text-3xl md:text-4xl font-bold ">
          <h1 className=" flex  sm:text-2xl justify-center items-center md:text-4xl scroll-mt-24 text-3xl font-bold text-[var(--color-yellow)]">
            Entre Em Contato
          </h1>
          <p className="mt-4 text-white max-w-2xl mx-auto text-xl sm:text-2xl md:text-2xl font-normal">
            Agende seu serviço hoje mesmo
          </p>
        </div>
        <div className="mb-8 ">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </section>
  );
}
