import Image from "next/image";
import Container from "./ui/Container";
import Button from "./ui/Button";
import { ClipboardList, MapPin, Mail, Phone, Clock, Instagram, Facebook, Linkedin, ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section id="contacto" className="bg-primary py-16 text-white lg:py-20">
      <Container>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-12">
          {/* CTA box */}
          <div className="sm:col-span-2 lg:col-span-4">
            <div className="flex items-start gap-4">
              <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-lg bg-accent/20 text-accent">
                <ClipboardList size={22} strokeWidth={1.8} />
              </span>
              <div>
                <h2 className="text-2xl font-extrabold leading-tight md:text-3xl">
                  ¿NECESITÁS UNA COTIZACIÓN?
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  Contanos tu necesidad y te respondemos a la brevedad.
                </p>
              </div>
            </div>

            <div className="mt-6 pl-16">
              <Button href="https://wa.me/5492984601686">
                Solicitar Cotización
                <ArrowRight size={16} strokeWidth={2.4} />
              </Button>
            </div>
          </div>

          {/* Productos */}
          <div className="lg:col-span-2">
            <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-white/60">
              Productos
            </h4>
            <ul className="space-y-2.5 text-sm text-white/85">
              <li>Papel Sulfito / Seda</li>
              <li>Papel Corrugado Ecopack</li>
              <li>Rollos de Corrugado</li>
              <li>Esquineros de Cartón</li>
              <li>Film Stretch</li>
            </ul>
          </div>

          {/* Empresa */}
          <div className="lg:col-span-2">
            <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-white/60">
              Empresa
            </h4>
            <ul className="space-y-2.5 text-sm text-white/85">
              <li><a href="#nosotros" className="transition-colors hover:text-accent">Nosotros</a></li>
              <li><a href="#planta" className="transition-colors hover:text-accent">Planta</a></li>
              <li><a href="#logistica" className="transition-colors hover:text-accent">Logística</a></li>
            </ul>
          </div>

          {/* Contacto */}
          <div className="lg:col-span-2">
            <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-white/60">
              Contacto
            </h4>
            <ul className="space-y-3 text-sm text-white/85">
              <li className="flex items-start gap-2">
                <MapPin size={14} strokeWidth={2} className="mt-0.5 shrink-0 text-accent" />
                <span>Río Negro, Argentina</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone size={14} strokeWidth={2} className="mt-0.5 shrink-0 text-accent" />
                <span>+54 9 2984 60-1686</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={14} strokeWidth={2} className="mt-0.5 shrink-0 text-accent" />
                <span>info@mogasa.com.ar</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock size={14} strokeWidth={2} className="mt-0.5 shrink-0 text-accent" />
                <span>Lun a Vie · 8:00 — 18:00</span>
              </li>
            </ul>
          </div>

          {/* Seguinos */}
          <div className="lg:col-span-2">
            <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-white/60">
              Seguinos
            </h4>
            <div className="flex gap-2.5">
              <Social href="#" Icon={Instagram} label="Instagram" />
              <Social href="#" Icon={Facebook} label="Facebook" />
              <Social href="#" Icon={Linkedin} label="LinkedIn" />
            </div>

            <div className="mt-6 inline-flex h-12 items-center rounded-md bg-white/95 px-3 py-1.5">
              <Image
                src="/logo.png"
                alt="Mogasa S.R.L."
                width={130}
                height={42}
                className="h-9 w-auto"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Social({ href, Icon, label }: { href: string; Icon: typeof Instagram; label: string }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="inline-flex size-9 items-center justify-center rounded-md border border-white/15 bg-white/5 text-white/80 transition-colors hover:border-accent hover:bg-accent hover:text-white"
    >
      <Icon size={16} strokeWidth={1.8} />
    </a>
  );
}
