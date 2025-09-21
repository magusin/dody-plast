import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 py-8 text-sm flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} Dody Plast — Tous droits réservés | Fabricant français depuis 1959
        </p>
        <nav className="flex gap-4">
          <Link
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            href="/mentions-legales"
          >
            Mentions légales
          </Link>
          <Link
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            href="/politique-confidentialite"
          >
            Confidentialité
          </Link>
        </nav>
      </div>
    </footer>
  );
}
