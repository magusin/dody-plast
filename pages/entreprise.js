import Layout from "../components/Layout";
import Image from "next/image";
import { Building2 } from "lucide-react"; // icône AFD
import Link from "next/link";

/* eslint-disable react/no-unescaped-entities */

export default function Entreprise() {
  return (
    <Layout
      title="Notre Entreprise"
      description="Découvrez l’histoire, l’usine et le groupe AFD auquel appartient Dody Plast."
    >
      {/* Hero */}
      <section className="relative h-[320px] flex items-center justify-center text-center">
        {/* Fond clair/dark */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(220deg, #0058aa 30%, #009cff 30%)",
          }}
        />
        <div className="absolute inset-0 dark:bg-gray-900/90" />
        <h1 className="relative z-10 text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg">
          Notre Entreprise
        </h1>
      </section>

      {/* Notre Usine */}
      <section className="max-w-5xl mx-auto px-6 py-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">
          Notre Usine
        </h2>

        {/* Vidéo */}
        <div className="relative w-full rounded-xl overflow-hidden shadow-lg mb-8">
          <video
            src="/video/entreprise.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Texte */}
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
          Notre usine située à Montmorillon (50 km de Poitiers) est équipée des machines les plus performantes dans son domaine d’activité, afin de maîtriser toutes les étapes de la production
        </p>
      </section>

      {/* Groupe AFD */}
      <section className="bg-gray-50 dark:bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100">
              Le Groupe AFD
            </h2>

            {/* Logo Groupe AFD centré */}
            <div className="relative w-56 h-56 mx-auto mt-6">
              <Image
                src="/images/groupe-afd.webp"
                alt="Groupe AFD"
                fill
                className="object-contain"
              />
            </div>

            <p className="mt-6 text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              Le groupe AFD regroupe DODY PLAST, STTP EMBALLAGE, RIVER PACK et
              BOUTAUX PACKAGING.
              <br />
              La garantie d’une assise solide, pour ces trois sociétés
              complémentaires dans leur savoir-faire packaging.
            </p>
          </div>

          {/* 3 présentations */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-12">
            <Link href="https://sttp-emballage.com/" target="_blank" rel="noopener noreferrer">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition">
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                  STTP EMBALLAGE
                </h3>
                <div className="relative w-46 h-46 mx-auto my-6">
                  <Image
                    src="/images/sttp-emballage.webp"
                    alt="STTP EMBALLAGE"
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Fabrication de film pour l'emballage agro-alimentaire
                </p>
              </div>
            </Link>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition">
              <Link href="https://www.riverpack.fr/" target="_blank" rel="noopener noreferrer">
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                  RIVER PACK
                </h3>
                <div className="relative w-46 h-46 mx-auto my-6">
                  <Image
                    src="/images/river-pack.webp"
                    alt="RIVER PACK"
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Fabrication manuelle de sacs papier, boîtes et coffrets de luxe
                </p>
              </Link>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition">
              <Link href="https://www.boutaux.com/" target="_blank" rel="noopener noreferrer">
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                  BOUTAUX PACKAGING
                </h3>
                <div className="relative w-46 h-46 mx-auto my-6">
                  <Image
                    src="/images/boutaux.webp"
                    alt="BOUTAUX PACKAGING"
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Cartonnages promotionnels haut de gamme.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 text-center">
          Nous trouver
        </h2>
        <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg mb-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5499.616318817699!2d0.8908483766482252!3d46.43268186830115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47fc3c21b26f8ca3%3A0xf656824730159d95!2sDody%20Plast%20SA!5e0!3m2!1sfr!2sfr!4v1758468165810!5m2!1sfr!2sfr"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full border-0"
          ></iframe>
        </div>
        <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.386140021936!2d2.3997725767556464!3d48.85084670123697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67279909df17b%3A0xc318d5371ac2fef5!2s36%20Rue%20des%20Grands%20Champs%2C%2075020%20Paris!5e0!3m2!1sfr!2sfr!4v1758468344820!5m2!1sfr!2sfr"
            allowfullscreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className="w-full h-full border-0"
          ></iframe>
        </div>
      </section>

    </Layout>
  );
}
