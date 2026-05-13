import Image from "next/image";
import Container from "./ui/Container";
import Button from "./ui/Button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-[640px] items-center overflow-hidden lg:min-h-[82vh]">
      <Image
        src="/hero.jpg"
        alt="Línea de producción de cartón corrugado — planta Mogasa"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/85 to-primary/40 lg:hidden" />
      <div className="absolute inset-0 hidden bg-[linear-gradient(to_right,#0B1F3A_0%,#0B1F3A_38%,rgba(11,31,58,0.78)_62%,rgba(11,31,58,0.18)_100%)] lg:block" />

      <Container>
        <div className="relative z-10 max-w-3xl pt-28 pb-20 lg:pt-32 lg:pb-24">
          <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.28em] text-accent lg:text-xs">
            <span className="inline-block h-[2px] w-7 bg-accent" />
            Fabricación de Cartón Corrugado
          </p>

          <h1 className="text-[2.2rem] font-extrabold leading-[1.05] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[3.6rem]">
            Soluciones de embalaje{" "}
            <span className="text-accent">
              industrial para la fruticultura
            </span>{" "}
            patagónica.
          </h1>

          <p className="mt-6 max-w-xl text-sm leading-relaxed text-white/80 sm:text-base md:text-lg lg:mt-7">
            Producimos envases de alta calidad con la capacidad industrial
            y logística que tu operación necesita.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:mt-10">
            <Button href="#planta">
              Conocé nuestra planta
              <ArrowRight size={16} strokeWidth={2.4} />
            </Button>
            <Button href="#productos" variant="outline-light">
              Ver productos
              <ArrowRight size={16} strokeWidth={2.4} />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
