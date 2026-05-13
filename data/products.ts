export type Product = {
  title: string;
  category: "Papeles" | "Cartón Corrugado" | "Embalaje Secundario" | "A Medida";
  image: string;
  description: string;
  featured?: boolean;
};

export const products: Product[] = [
  {
    title: "Papel Sulfito / Seda",
    category: "Papeles",
    image: "/products/sulfito.jpg",
    description:
      "Ideal para protección, separación y presentación de frutas.",
    featured: true
  },
  {
    title: "Papel Corrugado Ecopack",
    category: "Cartón Corrugado",
    image: "/products/papel-corrugado-ecopack.jpg",
    description:
      "Resistente, liviano y sustentable. Protección eficiente para cada etapa de la cadena.",
    featured: true
  },
  {
    title: "Rollos de Corrugado",
    category: "Cartón Corrugado",
    image: "/products/rollos-corrugado.png",
    description:
      "Distintas medidas y gramajes para adaptarse a tu proceso productivo.",
    featured: true
  },
  {
    title: "Esquineros de Cartón",
    category: "Embalaje Secundario",
    image: "/products/esquineros.jpg",
    description:
      "Protección y refuerzo para mercadería en pallets y transporte.",
    featured: true
  },
  {
    title: "Film Stretch",
    category: "Embalaje Secundario",
    image: "/products/film-stretch.jpg",
    description:
      "Asegurá tu carga con la mejor calidad y rendimiento. Múltiples micrajes.",
    featured: true
  },
  {
    title: "Embalaje a Medida",
    category: "A Medida",
    image:
      "https://images.unsplash.com/photo-1565363887715-8884629e09ee?w=900&q=80&auto=format&fit=crop",
    description:
      "Desarrollo de troqueles, impresiones a varios colores y formatos custom según tu operación."
  }
];

export const featuredProducts = products.filter((p) => p.featured);

export const categories: Product["category"][] = [
  "Papeles",
  "Cartón Corrugado",
  "Embalaje Secundario",
  "A Medida"
];
