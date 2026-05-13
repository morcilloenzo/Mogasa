import Image from "next/image";
import Container from "./ui/Container";
import Button from "./ui/Button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-[680px] items-center overflow-hidden lg:min-h-[88vh]">
      <Image
        src="/hero.jpg"
        alt="Línea de producción de cartón corrugado — planta Mogasa"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Overlay mobile: vertical (texto arriba sobre navy, foto se asoma abajo) */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/85 to-primary/40 lg:hidden" />

      {/* Overlay desktop: horizontal (más azul al inicio) */}
      <div className="absolute inset-0 hidden bg-[linear-gradient(to_right,#0B1F3A_0%,#0B1F3A_32%,rgba(11,31,58,0.75)_58%,rgba(11,31,58,0.15)_100%)] lg:block" />

      <Container>
        <div className="relative z-10 max-w-3xl pt-24 pb-16 lg:pt-28 lg:pb-12">
          <h1 className="text-[2.1rem] font-extrabold leading-[1.05] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[3.4rem]">
            SOLUCIONES DE
            <br />
            EMBALAJE INDUSTRIAL
            <span className="mt-3 block text-lg font-bold text-white/85 sm:text-xl md:text-2xl lg:text-3xl">
              para la fruticultura patagónica
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-sm leading-relaxed text-white/80 sm:text-base md:text-lg lg:mt-7">
            Fabricamos papel corrugado y papel sulfito/seda a medida, con
            entrega rápida y atención directa. Abastecimiento confiable
            para productores que no pueden detenerse.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:mt-9">
            <Button href="https://wa.me/5492984601686">
              Solicitar Cotización
              <ArrowRight size={16} strokeWidth={2.4} />
            </Button>
            <Button href="#productos" variant="outline-light">
              Conocé nuestros productos
              <ArrowRight size={16} strokeWidth={2.4} />
            </Button>
          </div>

          <div className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-white/15 pt-6 sm:gap-6 lg:mt-12 lg:pt-7">
            <Stat n="38" l="años en el rubro" />
            <Stat n="Alta" l="capacidad productiva" />
            <Stat n="24h" l="entrega en el Valle" />
          </div>
        </div>
      </Container>
    </section>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div>
      <p className="text-xl font-extrabold text-white sm:text-2xl md:text-3xl">{n}</p>
      <p className="mt-1 text-[9px] font-bold uppercase leading-tight tracking-[0.15em] text-white/60 sm:text-[10px] sm:tracking-[0.18em]">
        {l}
      </p>
    </div>
  );
}
