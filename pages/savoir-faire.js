import Layout from "../components/Layout";
import Hero from "../components/Hero";

export default function SavoirFaire() {
  return (
    <Layout title="Savoir-faire" description="Conception, injection, contrôle qualité">
      <Hero title="Savoir-faire" subtitle="Conception, injection, finitions, contrôle" image="/images/savoir-faire.jpg" />
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">
        {/* COLLER LES BLOCS/ÉTAPES DU SAVOIR-FAIRE */}
        <div>
          <h3 className="text-xl font-bold text-brand-green mb-2">Conception</h3>
          <p className="text-gray-700">...</p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-brand-green mb-2">Injection</h3>
          <p className="text-gray-700">...</p>
        </div>
        {/* + autres étapes */}
      </section>
    </Layout>
  );
}
