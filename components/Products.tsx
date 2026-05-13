import Container from "./ui/Container";
import ProductCard from "./ui/ProductCard";
import Button from "./ui/Button";
import { featuredProducts } from "@/data/products";
import { ArrowRight } from "lucide-react";

export default function Products() {
  return (
    <section id="productos" className="bg-light py-20 lg:py-24">
      <Container>
        <h2 className="mb-12 text-center text-3xl font-extrabold tracking-tight text-primary md:text-4xl">
          NUESTROS PRODUCTOS
        </h2>

        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.title}
              title={product.title}
              image={product.image}
              description={product.description}
            />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button href="/productos">
            Ver todos los productos
            <ArrowRight size={16} strokeWidth={2.4} />
          </Button>
        </div>
      </Container>
    </section>
  );
}
