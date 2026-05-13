import Container from "./ui/Container";
import { ShieldCheck, Cog, Headset, MapPin, Leaf } from "lucide-react";

const items = [
  {
    title: "Calidad Garantizada",
    body: "Procesos certificados y control permanente en cada etapa.",
    Icon: ShieldCheck
  },
  {
    title: "Tecnología Avanzada",
    body: "Equipos de última generación para máxima eficiencia y precisión.",
    Icon: Cog
  },
  {
    title: "Atención Personalizada",
    body: "Acompañamos tu operación con soluciones a medida.",
    Icon: Headset
  },
  {
    title: "Cobertura Regional",
    body: "Logística propia y red de distribución en toda la Patagonia.",
    Icon: MapPin
  },
  {
    title: "Compromiso Sostenible",
    body: "Producción responsable con el medio ambiente.",
    Icon: Leaf
  }
];

export default function Differentials() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <Container>
        <div className="grid gap-x-6 gap-y-10 md:grid-cols-3 lg:grid-cols-5">
          {items.map(({ title, body, Icon }) => (
            <div key={title} className="flex flex-col items-center text-center">
              <span className="mb-4 flex size-12 items-center justify-center rounded-full bg-accent/10 text-accent">
                <Icon size={26} strokeWidth={1.8} />
              </span>
              <h3 className="text-sm font-extrabold uppercase tracking-wide text-primary">
                {title}
              </h3>
              <p className="mt-2 max-w-[220px] text-sm leading-relaxed text-gray-600">
                {body}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
