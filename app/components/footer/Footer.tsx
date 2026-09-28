export default function Footer() {
  return (
    <footer className="bg-ink-black text-lighter-text font-montserrat text-sm flex flex-wrap items-center justify-between gap-2 px-4 py-4 md:px-10 border-t border-lighter-text/10">
      <p>© 2026 Moneta</p>
      <a
        href="https://github.com/visionas9"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-pumpkin-spice transition"
      >
        GitHub →
      </a>
    </footer>
  );
}
