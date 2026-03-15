import Link from "next/link";

const links = [
  { label: "Collection", href: "#collection" },
  { label: "Craft", href: "#craft" },
  { label: "Interiors", href: "#interiors" },
  { label: "Journal", href: "#journal" }
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-glow/60 bg-base/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="#top"
          className="font-display text-lg tracking-[0.3em] text-plum"
        >
          VELUNE
        </Link>
        <nav className="hidden items-center gap-8 text-sm uppercase tracking-[0.2em] text-muted md:flex">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="transition-colors hover:text-plum"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="#collection"
          className="rounded-full border border-plum/20 bg-plum px-5 py-2 text-sm font-medium text-white shadow-soft transition-all hover:-translate-y-0.5 hover:bg-charcoal"
        >
          Explore Collection
        </Link>
      </div>
    </header>
  );
}
