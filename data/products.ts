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
    image:
      "https://images.unsplash.com/photo-1597411081937-5f3c10c47cd4?w=900&q=80&auto=format&fit=crop",
    description:
      "Ideal para protección, separación y presentación de frutas.",
    featured: true
  },
  {
    title: "Papel Kraft",
    category: "Papeles",
    image:
      "https://images.unsplash.com/photo-1530021232320-687d8e3dba54?w=900&q=80&auto=format&fit=crop",
    description:
      "Papel resistente para envoltura y separación en pallets de exportación."
  },
  {
    title: "Papel Corrugado Ecopack",
    category: "Cartón Corrugado",
    image:
      "https://images.unsplash.com/photo-1607349913338-fca6f7fc42d0?w=900&q=80&auto=format&fit=crop",
    description:
      "Resistente, liviano y sustentable. Protección eficiente para cada etapa de la cadena.",
    featured: true
  },
  {
    title: "Rollos de Corrugado",
    category: "Cartón Corrugado",
    image:
      "https://images.unsplash.com/photo-1601599561213-832382fd07ba?w=900&q=80&auto=format&fit=crop",
    description:
      "Distintas medidas y gramajes para adaptarse a tu proceso productivo.",
    featured: true
  },
  {
    title: "Planchas de Cartón",
    category: "Cartón Corrugado",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?w=900&q=80&auto=format&fit=crop",
    description:
      "Láminas en simple, doble y triple onda. Cortes a medida según especificación."
  },
  {
    title: "Cartón Microcorrugado",
    category: "Cartón Corrugado",
    image:
      "https://images.unsplash.com/photo-1601379329542-31c59ed85e1f?w=900&q=80&auto=format&fit=crop",
    description:
      "Onda fina para empaque primario, displays y formatos delicados."
  },
  {
    title: "Cajas para Manzana y Pera",
    category: "Cartón Corrugado",
    image:
      "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=900&q=80&auto=format&fit=crop",
    description:
      "Formatos de 18 y 20 kg, bins de campo y cajas exhibidoras para retail."
  },
  {
    title: "Bandejas para Cereza",
    category: "Cartón Corrugado",
    image:
      "https://images.unsplash.com/photo-1528821128474-27f963b062bf?w=900&q=80&auto=format&fit=crop",
    description:
      "Clamshells y cajas de 1, 2 y 5 kg con ventilación calibrada para exportación."
  },
  {
    title: "Esquineros de Cartón",
    category: "Embalaje Secundario",
    image:
      "https://images.unsplash.com/photo-1601599561213-832382fd07ba?w=900&q=80&auto=format&fit=crop",
    description:
      "Protección y refuerzo para mercadería en pallets y transporte.",
    featured: true
  },
  {
    title: "Film Stretch",
    category: "Embalaje Secundario",
    image:
      "https://images.unsplash.com/photo-1620766165457-a8064ac34e5b?w=900&q=80&auto=format&fit=crop",
    description:
      "Asegurá tu carga con la mejor calidad y rendimiento. Múltiples micrajes.",
    featured: true
  },
  {
    title: "Cajas Exhibidoras",
    category: "Embalaje Secundario",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=900&q=80&auto=format&fit=crop",
    description:
      "Cajas con frente abierto para góndola y punto de venta."
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
