interface Props {
  n: string;
  label?: string;
  className?: string;
}

export default function SectionLabel({ n, label, className = "" }: Props) {
  return (
    <div className={`flex items-baseline gap-4 ${className}`}>
      <span className="text-lg font-bold tracking-tight text-primary">{n}</span>
      {label && (
        <span className="text-xs font-bold uppercase tracking-[0.22em] text-primary">
          {label}
        </span>
      )}
    </div>
  );
}
