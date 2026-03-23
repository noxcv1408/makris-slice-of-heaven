export default function Footer() {
  return (
    <footer className="bg-card py-8 text-center">
      <p className="text-foreground/60 text-sm">
        © {new Date().getFullYear()} Makris Pizza & Love. Tutti i diritti riservati.
      </p>
    </footer>
  );
}
