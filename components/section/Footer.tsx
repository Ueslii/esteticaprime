export default function Footer() {
  return (
    <footer className="w-full bg-[var(--color-dark)] text-[var(--color-light)] py-6 flex flex-col items-center justify-center">
      <p className="text-sm md:text-base">
        &copy; {new Date().getFullYear()} Estética Prime. Todos os direitos
        reservados. Desenvolvido por{" Weslley "}
      </p>
    </footer>
  );
}
