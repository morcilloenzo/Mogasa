"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "./ui/Container";
import Button from "./ui/Button";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Inicio", href: "#" },
  { label: "Productos", href: "#productos" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Planta", href: "#planta" },
  { label: "Logística", href: "#logistica" },
  { label: "Contacto", href: "#contacto" }
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-primary/95 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between gap-4 lg:h-20 lg:gap-6">
          <a href="#" aria-label="Mogasa S.R.L." className="flex shrink-0 items-center">
            <Image
              src="/logo.png"
              alt="Mogasa S.R.L. — Fábrica de Cartón Corrugado"
              width={180}
              height={56}
              priority
              className="h-9 w-auto lg:h-12"
            />
          </a>

          <nav className="hidden flex-1 justify-center gap-7 lg:flex">
            {navItems.map((it) => (
              <a
                key={it.label}
                href={it.href}
                className="text-xs font-semibold uppercase tracking-[0.14em] text-white/75 transition-colors hover:text-accent"
              >
                {it.label}
              </a>
            ))}
          </nav>

          <div className="hidden shrink-0 items-center gap-3 lg:flex">
            <Button href="https://wa.me/5492984601686">
              Solicitar Cotización
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-10 items-center justify-center rounded-md text-white transition-colors hover:bg-white/10 lg:hidden"
          >
            {open ? <X size={22} strokeWidth={2.2} /> : <Menu size={22} strokeWidth={2.2} />}
          </button>
        </div>
      </Container>

      {/* Mobile drawer */}
      {open && (
        <div className="border-t border-white/10 bg-primary lg:hidden">
          <Container>
            <nav className="flex flex-col py-2">
              {navItems.map((it) => (
                <a
                  key={it.label}
                  href={it.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-white/10 py-3.5 text-sm font-semibold uppercase tracking-[0.18em] text-white last:border-0 hover:text-accent"
                >
                  {it.label}
                </a>
              ))}
            </nav>
            <a
              href="https://wa.me/5492984601686"
              onClick={() => setOpen(false)}
              className="my-4 inline-flex w-full items-center justify-center gap-2 rounded-md bg-accent px-5 py-3.5 text-sm font-bold uppercase tracking-[0.15em] text-white transition-colors hover:bg-accent-dark"
            >
              Solicitar Cotización
            </a>
          </Container>
        </div>
      )}
    </header>
  );
}
