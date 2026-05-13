import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";
import Container from "@/components/ui/Container";
import ProductCard from "@/components/ui/ProductCard";
import { products, categories } from "@/data/products";
import { ChevronLeft } from "lucide-react";

export const metadata = {
  title: "Catálogo de Productos | Mogasa S.R.L.",
  description:
    "Catálogo completo de productos Mogasa: cartón corrugado, papel sulfito/seda, film stretch, esquineros, bandejas para cereza y soluciones a medida."
};

export default function ProductosPage() {
  return (
    <>
      <Header />
      <main>
        {/* Page hero */}
        <section className="bg-primary pt-32 pb-16 text-white lg:pt-36 lg:pb-20">
          <Container>
            <Link
              href="/"
              className="mb-8 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white/65 transition-colors hover:text-white"
            >
              <ChevronLeft size={14} strokeWidth={2.5} />
              Volver al inicio
            </Link>

            <div className="grid items-end gap-8 md:grid-cols-12">
              <div className="md:col-span-8">
                <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
                  CATÁLOGO
                  <br />
                  <span className="text-white/80">DE PRODUCTOS</span>
                </h1>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
                  Soluciones industriales para empaque y logística. Fabricamos
                  a medida y abastecemos en volumen para empaques frutícolas
                  del Alto Valle.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 md:col-span-4 md:justify-end">
                {categories.map((c) => (
                  <a
                    key={c}
                    href={`#${slug(c)}`}
                    className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-3.5 py-1.5 text-xs font-semibold text-white/85 transition-colors hover:border-accent hover:bg-accent hover:text-white"
                  >
                    {c}
                  </a>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Catálogo por categoría */}
        <section className="bg-light py-20 lg:py-24">
          <Container>
            <div className="space-y-20">
              {categories.map((cat) => {
                const items = products.filter((p) => p.category === cat);
                return (
                  <div key={cat} id={slug(cat)} className="scroll-mt-28">
                    <div className="mb-8 flex items-end justify-between gap-6 border-b border-border pb-5">
                      <h2 className="text-2xl font-extrabold uppercase tracking-tight text-primary md:text-3xl">
                        {cat}
                      </h2>
                      <span className="font-mono text-xs text-gray-500">
                        {String(items.length).padStart(2, "0")} {items.length === 1 ? "producto" : "productos"}
                      </span>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                      {items.map((p) => (
                        <ProductCard
                          key={p.title}
                          title={p.title}
                          image={p.image}
                          description={p.description}
                        />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

function slug(s: string) {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/\s+/g, "-");
}
