import Layout from "../components/Layout";
import Image from "next/image";

export default function Home() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative h-[470px] flex items-center justify-center text-center text-white">
        {/* Image de fond */}
        <Image
          src="/factory.webp" // mets ici l'image d'origine récupérée
          alt="Dody Plast"
          fill
          className="object-cover brightness-60 background-image"
          priority
        />
         {/* OVERLAY GRADIENT */}
  <div className="absolute inset-0 bg-gradient-to-tr from-[#0058aa] to-[#009cff] opacity-60 transition-all duration-300 rounded-none" />
        {/* Texte et bouton */}
        <div className="relative z-10 px-4">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow">
          Solutions d'emballages personnalisées
          </h2>
          <p className="max-w-2xl mx-auto text-lg md:text-xl mb-6">
          Fabricant français d’emballages depuis 1959, nous mettons toute notre expérience à votre disposition pour vous offrir un service sur mesure adapté à vos contraintes
          </p>
          <a
            href="/contact"
            className="inline-block bg-red-700 hover:bg-red-800 text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition"
          >
            Demander un devis
          </a>
        </div>
      </section>

      {/* SECTION TEXTE (Nos engagements / Nos produits...) */}
      <section className="py-20 px-6 max-w-6xl mx-auto text-center">
        <h3 className="text-3xl font-bold text-green-700 mb-8">Nos Produits</h3>
        <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
          Nous concevons et fabriquons une gamme complète de solutions plastiques
          de qualité, adaptées à vos besoins industriels et respectueuses de
          l’environnement.
        </p>
      </section>
    </Layout>
  );
}
