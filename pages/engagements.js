import Layout from "../components/Layout";
import Hero from "../components/Hero";

export default function Engagements() {
  return (
    <Layout title="Engagements" description="Démarche environnementale et certifications">
      <Hero title="Nos engagements" subtitle="Qualité, environnement, responsabilité" image="/images/engagements.jpg" />
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-8">
        {/* Coller textes (qualité/RSE/certifs) */}
        <div className="bg-white rounded-xl shadow p-8">
          <h3 className="text-xl font-bold text-brand-green mb-2">Qualité</h3>
          <p className="text-gray-700">...</p>
        </div>
        <div className="bg-white rounded-xl shadow p-8">
          <h3 className="text-xl font-bold text-brand-green mb-2">Environnement</h3>
          <p className="text-gray-700">...</p>
        </div>
        <div className="bg-white rounded-xl shadow p-8">
          <h3 className="text-xl font-bold text-brand-green mb-2">Certifications</h3>
          <p className="text-gray-700">...</p>
        </div>
      </section>
    </Layout>
  );
}
