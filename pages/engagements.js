import Layout from "../components/Layout";
import Image from "next/image";
import Link from "next/link";

/* eslint-disable react/no-unescaped-entities */

export default function Engagements() {
  const engagements = [
    {
      title: "Certifié FSC®",
      text: "L'obtention de ce label garantit la traçabilité parfaite et la gestion durable des matières premières utilisées pour la fabrication de nos produits papier.",
      image: "/images/fsc.webp",
    },
    {
      title: "Médaillée Argent par EcoVadis",
      text: "DODYPLAST a reçu la médaille d’ARGENT par EcoVadis, système de notation RSE reconnu internationalement. Avec un score de 71/100, DODY PLAST SAS fait partie du top 8% des entreprises évaluées par EcoVadis dans le secteur d’activité Fabrication d’articles en matières plastiques : https://ecovadis.com/fr/.",
      image: "/images/ecovadis.webp",
    },
    {
      title: "Acteur de l'économie circulaire",
      text: "Dody Plast limite le gaspillage des ressources et l’impact environnemental. Vos produits peuvent être fabriqués à partir de matériaux recyclés.",
      image: "/images/circulaire.png",
    },
    {
      title: "Label MORE",
      text: "Dody Plast s’est vu décerner en 2019 la label MORE (MObilisés pour REcycler), le premier label européen qui valorise l’action des plasturgistes pour l’économie circulaire et l’intégration de matières recyclés dans la production. Ce label a depuis été confirmé chaque année.",
      image: "/images/more.webp",
    },
    {
      title: "Entreprise socialement responsable",
      text: "Engagée dans une démarche de RSE à travers le renseignement du guide CREPI « Entrepreneur responsable, pourquoi pas moi ? »",
      image: "/images/responsable.webp",
    },
    {
      title: "Respect des dernières évolutions législatives",
      text: "Conformité à la legislation en vigueur (Directive 94/62/CE du 20/12/94 relative aux emballages et aux déchets d'emballages, LOI n° 2015-992 du 17 août 2015 relative à la transition énergétique pour la croissance verte).",
      image: "/images/législative.webp",
    },
    {
      title: "DODY PLAST s'engage contre les pertes de granulés dans l'environnement",
      text: (
        <>
          Soucieux de son impact environnemental, Dody Plast a été audité suivant
          le décret n°2021-461 du 16 avril 2021 relatif à la prévention des pertes
          de granulés de plastiques industriels dans l'environnement.{" "}
          <Link
            href="/images/attestation.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
          >
            Visualiser l’attestation
          </Link>
          .
        </>
      ),
      image: "/images/granulés.webp",
    },
  ];

  return (
    <Layout
      title="Nos Engagements"
      description="Découvrez les engagements de Dody Plast en matière de qualité, d’environnement, d’innovation et de service."
    >
      {/* Hero */}
      <section className="relative h-[320px] flex items-center justify-center text-center">
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(220deg, #0058aa 30%, #009cff 30%)",
          }}
        />
        <div className="absolute inset-0 dark:bg-gray-900/90" />
        <h1 className="relative z-10 text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg">
          Nos Engagements
        </h1>
      </section>

      {/* Engagements */}
      <section className="max-w-6xl mx-auto px-6 py-16 space-y-16">
        {engagements.map((item, idx) => (
          <div
            key={idx}
            className={`flex flex-col md:flex-row items-center gap-10 ${
              idx % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <div className="relative w-full md:w-1/2 h-64 rounded-xl overflow-hidden shadow-lg">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-contain"
              />
            </div>

            {/* Texte */}
            <div className="md:w-1/2 text-center md:text-left">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                {item.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </section>
    </Layout>
  );
}
