import Link from "next/link";

interface Props {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "outline-light";
  className?: string;
}

const styles: Record<NonNullable<Props["variant"]>, string> = {
  primary: "bg-accent text-white hover:bg-accent-dark",
  outline:
    "border border-primary text-primary hover:bg-primary hover:text-white",
  "outline-light":
    "border border-white text-white hover:bg-white hover:text-primary"
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = ""
}: Props) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-semibold transition-all duration-300 ${styles[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
