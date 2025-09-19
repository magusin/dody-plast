import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <Layout
      title="Injection plastique au service de vos besoins"
      description="Fabricant de solutions plastiques responsables : produits, savoir-faire, engagements, parc machines."
    >
      <Hero
        title="L’INJECTION PLASTIQUE AU SERVICE DE VOS BESOINS"
        subtitle="Solutions plastiques innovantes et responsables"
        image="/hero.webp"
      />

      {/* Sections d’accueil : adapte les textes depuis le site d’origine */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-8">
        <div className="bg-white rounded-xl shadow p-8">
          <h3 className="text-xl font-bold text-brand-green mb-2">Nos produits</h3>
          <p className="text-gray-700">
            {/* COLLER TEXTE D’ORIGINE PRODUITS */}
            Une gamme de pièces plastiques adaptées à vos besoins.
          </p>
          <Link href="/produits" className="text-brand-green font-semibold mt-4 inline-block link-underline">
            Découvrir
          </Link>
        </div>
        <div className="bg-white rounded-xl shadow p-8">
          <h3 className="text-xl font-bold text-brand-green mb-2">Notre savoir-faire</h3>
          <p className="text-gray-700">
            {/* COLLER TEXTE D’ORIGINE SAVOIR-FAIRE */}
            Conception, injection, contrôle qualité.
          </p>
          <Link href="/savoir-faire" className="text-brand-green font-semibold mt-4 inline-block link-underline">
            En savoir plus
          </Link>
        </div>
        <div className="bg-white rounded-xl shadow p-8">
          <h3 className="text-xl font-bold text-brand-green mb-2">Engagements</h3>
          <p className="text-gray-700">
            {/* COLLER TEXTE D’ORIGINE ENGAGEMENTS / CERTIFICATIONS */}
            Démarche environnementale et certifications.
          </p>
          <Link href="/engagements" className="text-brand-green font-semibold mt-4 inline-block link-underline">
            Voir nos engagements
          </Link>
        </div>
      </section>

      {/* Bloc certifications / logos */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <h3 className="text-2xl font-bold text-center mb-8">Nos certifications & labels</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {/* Remplacer par les logos du site original */}
            <Image src="/images/certif1.png" alt="Certification 1" className="h-14 mx-auto" />
            <Image src="/images/certif2.png" alt="Certification 2" className="h-14 mx-auto" />
            <Image src="/images/certif3.png" alt="Certification 3" className="h-14 mx-auto" />
            <Image src="/images/certif4.png" alt="Certification 4" className="h-14 mx-auto" />
          </div>
        </div>
      </section>
    </Layout>
  );
}
