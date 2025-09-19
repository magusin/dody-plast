import Layout from "../components/Layout";
import Hero from "../components/Hero";

export default function About() {
  return (
    <Layout title="Entreprise" description="Présentation de Dody Plast">
      <Hero title="Entreprise" subtitle="Notre histoire, nos valeurs" image="/images/about-hero.jpg" />
      <section className="max-w-4xl mx-auto px-6 py-16 prose prose-lg">
        {/* COLLER TEXTES D’ORIGINE (présentation, historique, valeurs) */}
        <p>...</p>
      </section>
    </Layout>
  );
}
