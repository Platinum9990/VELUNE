import Link from "next/link";

const links = [
  { label: "Collection", href: "#collection" },
  { label: "Craft", href: "#craft" },
  { label: "Interiors", href: "#interiors" },
  { label: "Journal", href: "#journal" }
];

export function Footer() {
  return (
    <footer className="border-t border-glow/60 bg-base">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-lg tracking-[0.3em] text-plum">
            VELUNE
          </p>
          <p className="mt-2 text-sm text-muted">
            Sculptural interiors, composed with quiet confidence.
          </p>
        </div>
        <nav className="flex flex-wrap gap-6 text-xs uppercase tracking-[0.3em] text-muted">
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
        <p className="text-xs uppercase tracking-[0.3em] text-muted">
          © 2026 VELUNE. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
