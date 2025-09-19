import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* HEADER FIXE */}
      <header className="fixed top-0 left-0 w-full h-[98px] bg-green-700 text-white flex items-center justify-between px-8 shadow z-50">
        <h1 className="font-bold text-2xl">Dody Plast</h1>
        <nav className="space-x-6 text-lg font-medium">
          <Link href="/">Accueil</Link>
          <Link href="/about">À propos</Link>
          <Link href="/products">Produits</Link>
          <Link href="/commitments">Engagements</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>

      {/* MARGE POUR NE PAS CACHER LE CONTENU SOUS LE HEADER */}
      <main className="flex-grow pt-[98px]">{children}</main>

      {/* FOOTER */}
      <footer className="bg-gray-800 text-white p-4 text-center text-sm">
        © {new Date().getFullYear()} Dody Plast - Tous droits réservés
      </footer>
    </div>
  );
}
