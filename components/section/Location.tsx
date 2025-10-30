export default function Location() {
  return (
    <section
      id="location"
      className="py-6 bg-[#0B1320] rounded-xl p-8 text-center"
    >
      <h2 className="text-3xl font-bold text-yellow-400 mb-6">Localização</h2>
      <div className="flex justify-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.3463672015746!2d-39.605144599999996!3d-13.0136013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x73fdd002b555b3f%3A0x54933c2e852f1d61!2sEst%C3%A9tica%20Prime!5e0!3m2!1spt-BR!2sbr!4v1761779781854!5m2!1spt-BR!2sbr"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-xl max-w-5xl shadow-lg"
        ></iframe>
      </div>
    </section>
  );
}
