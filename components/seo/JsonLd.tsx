interface JsonLdProps {
  data: Record<string, any>;
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AutoRepair",
          name: "Prime Estética Automotiva",
          image: "https://seusite.com.br/logo.png",
          address: {
            "@type": "PostalAddress",
            streetAddress: "R. Aristídes de Jesus, 131",
            addressLocality: "Amargosa",
            addressRegion: "BA",
            postalCode: "45300-000",
            addressCountry: "BR",
          },
          telephone: "+5575988919901",
          openingHours: "Mo 12:00-17:00 Tu-Fr 08:00-17:00 Sa-Su 07:00-17:00",
        }),
      }}
    />
  );
}
