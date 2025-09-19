import Layout from "../components/Layout";
import Hero from "../components/Hero";

export default function ParcMachines() {
  return (
    <Layout title="Parc machines" description="Nos presses et équipements">
      <Hero title="Parc machines" subtitle="Presses d’injection et équipements" image="/images/parc.jpg" />
      <section className="max-w-6xl mx-auto px-6 py-16">
        {/* Remplir avec les specs du site (liste des presses, tonnages, etc.) */}
        <ul className="grid md:grid-cols-2 gap-6 text-gray-800">
          <li className="bg-white rounded-lg shadow p-6">Presse 1 — 120T — ...</li>
          <li className="bg-white rounded-lg shadow p-6">Presse 2 — 220T — ...</li>
        </ul>
      </section>
    </Layout>
  );
}
