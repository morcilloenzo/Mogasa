"use client";

import { useState } from "react";
import Container from "./ui/Container";

type Client = { name: string; logo: string };

const clients: Client[] = [
  { name: "PAI", logo: "/clients/pai.jpg" },
  { name: "Moño Azul", logo: "/clients/mono-azul.png" },
  { name: "Tres Ases", logo: "/clients/tres-ases.png" },
  { name: "Boschi", logo: "/clients/boschi.png" },
  { name: "Cervi", logo: "/clients/cervi.gif" },
  { name: "Battaglio", logo: "/clients/battaglio.png" },
  { name: "Vicente", logo: "/clients/vicente.jpg" },
  { name: "Frutas Joselia", logo: "/clients/frutas-joselia.jpg" }
];

function ClientLogo({ client }: { client: Client }) {
  const [hasImage, setHasImage] = useState(true);

  return (
    <div
      title={client.name}
      className="flex h-20 min-w-[200px] items-center justify-center rounded-xl border border-border bg-white px-8 transition-all duration-300 hover:border-accent hover:shadow-md"
    >
      {hasImage ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={client.logo}
          alt={client.name}
          loading="lazy"
          onError={() => setHasImage(false)}
          className="max-h-12 max-w-[140px] object-contain"
        />
      ) : (
        <span className="text-base font-extrabold uppercase tracking-wide text-primary">
          {client.name}
        </span>
      )}
    </div>
  );
}

export default function Clients() {
  const stream = [...clients, ...clients];

  return (
    <section className="overflow-hidden bg-white py-16 lg:py-20">
      <Container>
        <div className="mb-10 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-accent">
            Trabajan con nosotros
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight text-primary md:text-4xl">
            EMPRESAS QUE CONFÍAN EN MOGASA
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-gray-600">
            Acompañamos a productores y empaques frutícolas del Alto Valle,
            Valle Medio y la región patagónica.
          </p>
        </div>
      </Container>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent md:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent md:w-32" />

        <div className="marquee-track flex w-max gap-4 py-3">
          {stream.map((c, i) => (
            <ClientLogo key={`${c.logo}-${i}`} client={c} />
          ))}
        </div>
      </div>
    </section>
  );
}
