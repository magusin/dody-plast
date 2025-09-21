import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";

export default function Produits() {
  const produits = [
    {
      title: "Sacs papier automatiques",
      description:
        "Fabrication de pièces plastiques de haute précision pour l’industrie automobile, électronique et médicale.",
      image: "/images/sac-papier.webp",
    },
    {
      title: "Sacs plastique poignées découpées",
      description:
        "Extrusion et co-extrusion. Polyéthylène haute, moyenne ou basse densité. Impression en flexographie 1 à 8 couleurs et quadrichromie. Sacs poignées découpées avec ou sans renfort.",
      image: "/images/sac-plastique.webp",
    },
    {
      title: "Enveloppes rabat adhésif",
      description:
        "Pour courrier, e-commerce, etc. En polyéthylène recyclé ou en papier kraft. Adhésif inviolable, trait de colle simple ou double pour traitement des retours, prédécoupe simple ou double, porte-documents, avec ou sans poignée.",
      image: "/images/enveloppe.webp",
    },
    {
      title: "Sacs PP tissés",
      description:
        "Sacs en polypropylène tissé ou non tissé. Poignées simples ou doubles. Impression en flexographie 1 à 8 couleurs et quadrichromie.",
      image: "/images/sac-pp.webp",
    },
    {
      title: "Film emballage",
      description:
        "Film pour conditionnement automatique : e-commerce, terreau, industries diverses.",
      image: "/images/film-emballage.webp",
    },
    {
      title: "Sacs plastique poignées souples",
      description:
        "Extrusion et co-extrusion. Polyéthylène haute, moyenne ou basse densité. Impression en flexographie 1 à 8 couleurs et quadrichromie.",
      image: "/images/sac.webp",
    },
  ];

  return (
    <Layout>
      <Head>
        <title>Nos Produits — Dody Plast</title>
        <meta
          name="description"
          content="Découvrez les produits fabriqués par Dody Plast : sacs papier, sacs plastique, enveloppes, sacs polypropylène, films d’emballage et plus."
        />
      </Head>

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
        <h1 className="relative z-10 text-4xl md:text-6xl font-extrabold drop-shadow-lg text-white dark:text-gray-100">
          Nos Produits
        </h1>
      </section>

      {/* Produits en cartes */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {produits.map((p, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition flex flex-col items-center text-center"
          >
            {/* Image centrée */}
            <div className="relative w-56 h-56 mt-6">
              <Image
                src={p.image}
                alt={p.title}
                fill
                className="object-contain"
              />
            </div>

            {/* Texte */}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-3">
                {p.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm flex-grow">
                {p.description}
              </p>
            </div>
          </div>
        ))}
      </section>
    </Layout>
  );
}
