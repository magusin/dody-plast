import { Factory, Boxes, BarChart3, HeartHandshake } from "lucide-react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";

export default function Home() {
  const atouts = [
    {
      icon: Factory,
      title: "Fabrication et impression",
      text: "Notre usine située à Montmorillon (50 km de Poitiers) est équipée des machines les plus performantes dans son domaine d'activité, afin de maîtriser toutes les étapes de la production.",
    },
    {
      icon: Boxes,
      title: "Stockage et logistique",
      text: "Gestion de stock, picking et expéditions directes magasin; livraisons en France métropolitaine et pays de l'Union Européenne.",
    },
    {
      icon: BarChart3,
      title: "Analyse et reporting",
      text: "Gestion de retroplannings, statistiques, prévisions et reportings personnalisés sur demande.",
    },
    {
      icon: HeartHandshake,
      title: "Passionné.e.s !",
      text: "60 ans d'expérience et de passion, recherche et développement des nouvelles matières en accord avec les futures orientations de développement durable.",
    },
  ];

  return (
    <Layout
      title="Injection plastique au service de vos besoins"
      description="Fabricant de solutions plastiques responsables : produits, savoir-faire, engagements, parc machines."
    >
      <Hero
        title="L’INJECTION PLASTIQUE AU SERVICE DE VOS BESOINS"
        subtitle="Fabricant français d’emballages depuis 1959, nous mettons toute notre expérience à votre disposition pour vous offrir un service sur mesure adapté à vos contraintes"
        image="/hero.webp"
      />

      {/* Section Nos atouts */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-gray-100 mb-12">
          Nos Atouts
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {atouts.map((atout, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-xl transition"
            >
              {/* Cercle autour de l’icône */}
              <div className="flex items-center justify-center w-20 h-20 rounded-full bg-blue-600 dark:bg-white dark:border-2 dark:border-white">
                <atout.icon className="w-10 h-10 text-white dark:text-blue-500" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mt-6 mb-2">
                {atout.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                {atout.text}
              </p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
