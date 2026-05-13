import Container from "./ui/Container";
import { Truck, ArrowRight } from "lucide-react";

const zones = ["Alto Valle", "Neuquén", "Valle Medio", "Río Negro"];

const localities = [
  "San Patricio del Chañar",
  "Villa Manzano",
  "Barda del Medio",
  "Cinco Saltos",
  "Cipolletti",
  "Neuquén",
  "Fernández Oro",
  "Allen",
  "Cervantes",
  "Mainqué",
  "Ing. Huergo",
  "Godoy",
  "Villa Regina",
  "Chichinales"
];

export default function LogisticsCoverage() {
  return (
    <section id="logistica" className="bg-light py-20 lg:py-24">
      <Container>
        <p className="mb-6 text-xs font-bold uppercase tracking-[0.22em] text-primary">
          Cobertura Logística
        </p>

        <div className="mb-12 max-w-2xl">
          <h2 className="text-3xl font-extrabold leading-[1.1] tracking-tight text-primary md:text-4xl lg:text-5xl">
            CERCA DE QUIENES
            <br />
            NOS NECESITAN
          </h2>
          <p className="mt-5 text-base leading-relaxed text-gray-600 md:text-lg">
            Llegamos rápido a las principales zonas productivas de la
            Patagonia.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-12">
          {/* Zonas + Localidades */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-2 gap-3">
              {zones.map((z) => (
                <div
                  key={z}
                  className="flex items-center gap-2.5 rounded-lg border border-border bg-white px-4 py-3"
                >
                  <span className="size-2 rounded-full bg-accent" />
                  <span className="text-sm font-semibold text-primary">{z}</span>
                </div>
              ))}
            </div>

            <p className="mt-6 mb-3 text-[10px] font-bold uppercase tracking-[0.22em] text-gray-500">
              Localidades que servimos
            </p>
            <div className="flex flex-wrap gap-1.5">
              {localities.map((loc) => (
                <span
                  key={loc}
                  className="inline-flex items-center rounded-full border border-border bg-white px-2.5 py-1 text-xs font-medium text-primary transition-colors hover:border-accent hover:bg-accent/10"
                >
                  {loc}
                </span>
              ))}
            </div>
          </div>

          {/* Mapa */}
          <div className="lg:col-span-6">
            <div className="relative overflow-hidden rounded-2xl border border-border bg-white">
              <RegionMap />
            </div>
          </div>

          {/* CTA card verde */}
          <div className="lg:col-span-3">
            <div className="flex h-full flex-col justify-between rounded-2xl bg-accent p-6 text-white shadow-md">
              <div>
                <span className="inline-flex size-12 items-center justify-center rounded-lg bg-white/15">
                  <Truck size={22} strokeWidth={1.8} />
                </span>
                <h3 className="mt-5 text-2xl font-extrabold leading-tight">
                  ENTREGA RÁPIDA
                  <br />
                  Y CONFIABLE
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/90">
                  Logística propia para cumplir con tus tiempos y los de tu
                  producción.
                </p>
              </div>

              <a
                href="https://wa.me/5492984601686"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-md bg-white px-5 py-3 text-xs font-bold uppercase tracking-[0.15em] text-primary transition-colors hover:bg-light"
              >
                Solicitar Cotización
                <ArrowRight size={14} strokeWidth={2.5} />
              </a>
            </div>
          </div>
        </div>

      </Container>
    </section>
  );
}

type City = {
  x: number;
  y: number;
  name: string;
  big?: boolean;
  pos: "above" | "below" | "right" | "left" | "above-left";
};

function RegionMap() {
  const cities: City[] = [
    { x: 195, y: 75, name: "S. P. del Chañar", pos: "right" },
    { x: 235, y: 155, name: "Barda del Medio", pos: "right" },
    { x: 280, y: 230, name: "Centenario", pos: "left" },
    { x: 315, y: 215, name: "Cinco Saltos", pos: "right" },
    { x: 240, y: 295, name: "Plottier", pos: "below" },
    { x: 295, y: 285, name: "Neuquén", big: true, pos: "above-left" },
    { x: 340, y: 305, name: "Cipolletti", big: true, pos: "below" },
    { x: 395, y: 308, name: "Gral. F. Oro", pos: "above" },
    { x: 445, y: 312, name: "Allen", pos: "below" },
    { x: 540, y: 318, name: "Gral. Roca", big: true, pos: "below" },
    { x: 615, y: 322, name: "Cervantes", pos: "above" },
    { x: 660, y: 325, name: "Huergo", pos: "below" },
    { x: 700, y: 327, name: "Godoy", pos: "above" },
    { x: 740, y: 330, name: "V. Regina", big: true, pos: "below" },
    { x: 780, y: 332, name: "Chichinales", pos: "above" }
  ];

  function labelProps(c: City) {
    const fontSize = c.big ? 12 : 9;
    let x = c.x;
    let y = c.y;
    let anchor: "start" | "middle" | "end" = "middle";

    switch (c.pos) {
      case "above":
        y = c.y - (c.big ? 11 : 8);
        break;
      case "below":
        y = c.y + (c.big ? 18 : 14);
        break;
      case "right":
        x = c.x + 9;
        y = c.y + 3;
        anchor = "start";
        break;
      case "left":
        x = c.x - 9;
        y = c.y + 3;
        anchor = "end";
        break;
      case "above-left":
        x = c.x - 9;
        y = c.y - 8;
        anchor = "end";
        break;
    }

    return { x, y, anchor, fontSize };
  }

  return (
    <svg viewBox="0 0 820 400" className="block size-full">
      <defs>
        <pattern id="grid-l" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#E5E7EB" strokeWidth="0.5" />
        </pattern>
      </defs>

      <rect width="820" height="400" fill="#FAF8F2" />
      <rect width="820" height="400" fill="url(#grid-l)" />

      <path
        d="M 30 290 Q 250 270, 540 312 T 810 340 L 810 360 Q 540 332, 250 295 T 30 320 Z"
        fill="#22A652"
        opacity="0.12"
      />
      <path
        d="M 200 60 Q 240 145, 295 235 T 325 295 L 295 305 Q 245 230, 180 75 Z"
        fill="#22A652"
        opacity="0.10"
      />

      <ellipse cx="375" cy="180" rx="46" ry="20" fill="#BFDDF3" stroke="#7FAFD0" strokeWidth="0.8" />
      <text x="375" y="183" fontSize="9" fill="#3B6E91" fontStyle="italic" textAnchor="middle" fontFamily="Inter, system-ui, sans-serif">
        Lago Pellegrini
      </text>

      <path
        d="M 20 340 Q 90 320, 170 310 T 290 295"
        fill="none"
        stroke="#5A8BB0"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M 185 55 Q 220 135, 270 215 T 305 295"
        fill="none"
        stroke="#5A8BB0"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M 295 295 Q 460 308, 600 322 T 810 345"
        fill="none"
        stroke="#3D6F95"
        strokeWidth="3.5"
        strokeLinecap="round"
      />

      {cities.map((c) => {
        const lp = labelProps(c);
        return (
          <g key={c.name}>
            <circle
              cx={c.x}
              cy={c.y}
              r={c.big ? 5 : 3}
              fill={c.big ? "#22A652" : "#0B1F3A"}
              stroke="#FFFFFF"
              strokeWidth={c.big ? 2 : 1.2}
            />
            <text
              x={lp.x}
              y={lp.y}
              textAnchor={lp.anchor}
              fontSize={lp.fontSize}
              fontWeight={c.big ? 700 : 600}
              fill={c.big ? "#0B1F3A" : "#3F4A5C"}
              fontFamily="Inter, system-ui, sans-serif"
            >
              {c.name}
            </text>
          </g>
        );
      })}

      {/* Sede Mogasa en Gral. Roca */}
      <g transform="translate(540, 318)">
        <circle r="30" fill="none" stroke="#22A652" strokeWidth="1.5" opacity="0.45">
          <animate attributeName="r" values="22;38;22" dur="2.6s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.55;0;0.55" dur="2.6s" repeatCount="indefinite" />
        </circle>
        <circle r="24" fill="#FFFFFF" stroke="#22A652" strokeWidth="2.5" />
        <image
          href="/logo.png"
          x="-19"
          y="-14"
          width="38"
          height="28"
          preserveAspectRatio="xMidYMid meet"
        />
      </g>
      <rect x="510" y="358" width="60" height="16" rx="2" fill="#0B1F3A" />
      <text x="540" y="370" fontSize="9" fontWeight="700" fill="#FFFFFF" textAnchor="middle" letterSpacing="1.5" fontFamily="Inter, system-ui, sans-serif">
        SEDE MOGASA
      </text>

      <g transform="translate(770, 50)">
        <circle r="20" fill="#FFFFFF" stroke="#0B1F3A" strokeWidth="1" />
        <path d="M 0 -12 L 6 8 L 0 4 L -6 8 Z" fill="#0B1F3A" />
        <text y="22" fontSize="9" fontWeight="700" fill="#0B1F3A" textAnchor="middle" fontFamily="Inter, system-ui, sans-serif">N</text>
      </g>

      <text x="50" y="335" fontSize="10" fill="#3D6F95" fontFamily="Inter, system-ui, sans-serif" fontStyle="italic">
        Río Limay
      </text>
      <text x="125" y="85" fontSize="10" fill="#3D6F95" fontFamily="Inter, system-ui, sans-serif" fontStyle="italic">
        Río Neuquén
      </text>
      <text x="680" y="370" fontSize="11" fill="#3D6F95" fontFamily="Inter, system-ui, sans-serif" fontStyle="italic" fontWeight="600">
        Río Negro
      </text>
    </svg>
  );
}
