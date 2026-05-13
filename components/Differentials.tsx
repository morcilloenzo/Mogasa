import Container from "./ui/Container";
import { Factory, Truck, Headset, ShieldCheck } from "lucide-react";

const items = [
  {
    title: "Producción Industrial",
    body: "Planta propia y maquinaria de última generación.",
    Icon: Factory
  },
  {
    title: "Entrega Rápida",
    body: "Respuesta ágil en Alto Valle, Valle Medio, Neuquén y Río Negro.",
    Icon: Truck
  },
  {
    title: "Atención Directa",
    body: "Asesoramiento técnico y acompañamiento en todo el proceso.",
    Icon: Headset
  },
  {
    title: "Calidad Garantizada",
    body: "Materiales de primera línea y procesos de control continuo.",
    Icon: ShieldCheck
  }
];

export default function Differentials() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <Container>
        <div className="grid gap-x-10 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
          {items.map(({ title, body, Icon }) => (
            <div key={title} className="flex items-start gap-4">
              <span className="shrink-0 text-primary">
                <Icon size={36} strokeWidth={1.5} />
              </span>
              <div>
                <h3 className="text-base font-extrabold uppercase tracking-wide text-primary">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
