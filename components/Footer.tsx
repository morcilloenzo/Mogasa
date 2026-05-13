import Container from "./ui/Container";

export default function Footer() {
  return (
    <div className="border-t border-white/10 bg-primary py-5 text-xs text-white/55">
      <Container>
        <p>© {new Date().getFullYear()} Mogasa S.R.L. — Todos los derechos reservados.</p>
      </Container>
    </div>
  );
}
