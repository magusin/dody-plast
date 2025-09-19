import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 w-full h-[98px] bg-white text-gray-900 shadow-md z-50">
  <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <img src="/logo.webp" alt="Dody Plast" className="h-12 w-auto" />
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/" className="hover:text-brand-green">Accueil</Link>
          <Link href="/about" className="hover:text-brand-green">Entreprise</Link>
          <Link href="/savoir-faire" className="hover:text-brand-green">Savoir-faire</Link>
          <Link href="/produits" className="hover:text-brand-green">Produits</Link>
          <Link href="/parc-machines" className="hover:text-brand-green">Parc machines</Link>
          <Link href="/engagements" className="hover:text-brand-green">Engagements</Link>
          <Link href="/contact" className="hover:text-brand-green">Contact</Link>
                  <Link
                      href="/contact"
                      className="ml-2 inline-flex items-center justify-center rounded-lg px-4 py-2
             font-semibold text-white bg-red-600 hover:bg-red-700
             focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600
             transition"
                  >
            Demander un devis
          </Link>
        </nav>
      </div>
    </header>
  );
}
