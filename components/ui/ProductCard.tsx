import Image from "next/image";

interface Props {
  title: string;
  image: string;
  description: string;
}

export default function ProductCard({
  title,
  image,
  description
}: Props) {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative aspect-[4/3] overflow-hidden bg-light">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 33vw, 20vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-sm font-extrabold uppercase tracking-wide text-primary">
          {title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">
          {description}
        </p>
      </div>
    </div>
  );
}
