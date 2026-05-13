import Container from "./ui/Container";
import { Award, Factory, Truck, ShieldCheck } from "lucide-react";

const stats = [
  {
    n: "+38",
    label: "Años de experiencia",
    Icon: Award
  },
  {
    n: "Miles",
    label: "De toneladas producidas anualmente",
    Icon: Factory
  },
  {
    n: "Entrega",
    label: "Rápida y confiable en toda la región",
    Icon: Truck
  },
  {
    n: "Calidad",
    label: "Certificada en cada proceso",
    Icon: ShieldCheck
  }
];

export default function StatsBar() {
  return (
    <section className="bg-secondary text-white">
      <Container>
        <div className="grid divide-y divide-white/10 py-2 md:grid-cols-2 md:divide-y-0 md:divide-x lg:grid-cols-4">
          {stats.map(({ n, label, Icon }) => (
            <div
              key={label}
              className="flex items-center gap-4 px-4 py-5 lg:px-6 lg:py-7"
            >
              <span className="flex size-12 shrink-0 items-center justify-center rounded-md bg-white/5 text-accent">
                <Icon size={24} strokeWidth={1.8} />
              </span>
              <div className="min-w-0">
                <p className="text-xl font-extrabold leading-none tracking-tight text-white lg:text-2xl">
                  {n}
                </p>
                <p className="mt-1.5 text-[10px] font-bold uppercase leading-tight tracking-[0.16em] text-white/65 lg:text-[11px]">
                  {label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
