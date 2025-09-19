export default function Footer() {
    return (
      <footer className="bg-gray-100 border-t">
        <div className="max-w-7xl mx-auto px-6 py-8 text-sm text-gray-600 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Dody Plast — Tous droits réservés</p>
          <nav className="flex gap-4">
            <a className="link-underline" href="/mentions-legales">Mentions légales</a>
            <a className="link-underline" href="/politique-confidentialite">Confidentialité</a>
          </nav>
        </div>
      </footer>
    );
  }
  