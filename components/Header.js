import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 w-full h-[98px]
      bg-white dark:bg-gray-900
      text-gray-900 dark:text-gray-100
      shadow-md z-50 transition-colors duration-500">
      <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
  {/* Logo clair */}
  <Image
    src="/logo.webp"
    alt="Dody Plast"
    width={200}
    height={120}
    className="h-20 w-auto block dark:hidden transition-opacity hover:opacity-80"
    priority
  />
  {/* Logo pour dark mode */}
  <Image
    src="/logo-dark.webp"
    alt="Dody Plast"
    width={200}
    height={120}
    className="h-20 w-auto hidden dark:block transition-opacity hover:opacity-80"
    priority
  />
</Link>

        {/* Nav desktop */}
        <nav className="hidden md:flex items-center gap-8 text-base font-medium">
          {[
            ["Accueil", "/"],
            ["Notre Entreprise", "/entreprise"],
            ["Nos Produits", "/produits"],
            ["Engagements", "/engagements"],
            ["Contact", "/contact"],
          ].map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="transition-colors hover:text-blue-500"
            >
              {label}
            </Link>
          ))}

          {/* Toggle Dark/Light */}
          <ThemeToggle className="ml-1" />
        </nav>

        {/* Burger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md
            text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800
            focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-600">
          {open ? (
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/></svg>
          ) : (
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/></svg>
          )}
        </button>
      </div>

      {/* Menu mobile */}
      {open && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-md border-t dark:border-gray-700 transition-colors">
          <nav className="px-6 py-4 flex flex-col gap-4 text-base font-medium">
            {[
              ["Accueil", "/"],
              ["Notre Entreprise", "/entreprise"],
              ["Nos Produits", "/produits"],
              ["Engagements", "/engagements"],
              ["Contact", "/contact"],
            ].map(([label, href]) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="transition-colors hover:text-blue-500"
              >
                {label}
              </Link>
            ))}

            {/* CTA mobile */}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-lg px-5 py-2
               font-semibold text-white bg-red-600 hover:bg-red-700
               focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600
               transition"
            >
              Demander un devis
            </Link>

            {/* Toggle mobile */}
            <ThemeToggle />
          </nav>
        </div>
      )}
    </header>
  );
}
