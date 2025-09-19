import Layout from "../../components/Layout";
import Hero from "../../components/Hero";
import Link from "next/link";
import Image from "next/image";

// Exemple de data locale (tu peux remplacer par un CMS plus tard)
const produits = [
  { slug: "piece-technique", title: "Pièces techniques", image: "/images/prod-tech.jpg", excerpt: "..." },
  { slug: "emballages",     title: "Emballages",        image: "/images/prod-emb.jpg",  excerpt: "..." },
  // Ajoute toutes les catégories réelles du site
];

export default function Produits() {
  return (
    <Layout title="Produits" description="Découvrez nos gammes de produits">
      <Hero title="Nos produits" subtitle="Gamme complète adaptée à vos besoins" image="/images/produits-hero.jpg" />
      <section className="max-w-7xl mx-auto px-6 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {produits.map((p) => (
          <Link key={p.slug} href={`/produits/${p.slug}`} className="group bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
            <div className="relative h-48">
              <Image src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-[1.02] transition" />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-brand-green">{p.title}</h3>
              <p className="text-gray-700 mt-2">{p.excerpt}</p>
              <span className="inline-block mt-4 text-brand-green font-semibold link-underline">Voir la catégorie</span>
            </div>
          </Link>
        ))}
      </section>
    </Layout>
  );
}
