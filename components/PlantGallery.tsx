import Image from "next/image";
import Container from "./ui/Container";
import Button from "./ui/Button";
import { ArrowRight } from "lucide-react";

export default function PlantGallery() {
  return (
    <section id="planta" className="bg-white py-20 lg:py-24">
      <Container>
        <p className="mb-6 text-xs font-bold uppercase tracking-[0.22em] text-primary">
          Nuestra Planta
        </p>

        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <h2 className="text-3xl font-extrabold leading-[1.1] tracking-tight text-primary md:text-4xl lg:text-5xl">
              CAPACIDAD INDUSTRIAL
              <br />
              <span className="text-primary/85">
                PARA GRANDES DEMANDAS
              </span>
            </h2>

            <p className="mt-6 max-w-md text-base leading-relaxed text-gray-600 md:text-lg">
              Contamos con tecnología, infraestructura y equipo humano para
              garantizar producción constante y entregas en cada temporada
              crítica.
            </p>

            <div className="mt-8">
              <Button href="#contacto" variant="outline">
                Conocé nuestra planta
                <ArrowRight size={16} strokeWidth={2.4} />
              </Button>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-border pt-8">
              <Stat n="4" l="Líneas" />
              <Stat n="Alta" l="capacidad productiva" />
              <Stat n="24/7" l="En pico" />
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-3">
              <div className="relative col-span-2 aspect-[16/9] overflow-hidden rounded-2xl bg-light shadow-md">
                <Image
                  src="https://images.unsplash.com/photo-1565363887715-8884629e09ee?w=1800&q=80&auto=format&fit=crop"
                  alt="Línea de producción Mogasa"
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-light shadow-md">
                <Image
                  src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200&q=80&auto=format&fit=crop"
                  alt="Depósito de cartón terminado"
                  fill
                  sizes="(max-width: 1024px) 50vw, 30vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-light shadow-md">
                <Image
                  src="https://images.unsplash.com/photo-1601599561213-832382fd07ba?w=1200&q=80&auto=format&fit=crop"
                  alt="Sector logístico"
                  fill
                  sizes="(max-width: 1024px) 50vw, 30vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div>
      <p className="text-2xl font-extrabold text-primary md:text-3xl">{n}</p>
      <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-gray-500">
        {l}
      </p>
    </div>
  );
}
