import { useState } from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [ok, setOk] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    // À brancher sur un service (Email via SMTP/SendGrid/Formspree) :
    console.log("Form:", form);
    setOk(true);
  };

  return (
    <Layout title="Contact & devis" description="Demandez un devis ou contactez-nous">
      <Hero title="Demander un devis" subtitle="Parlez-nous de votre besoin" image="/images/contact-hero.jpg" />
      <section className="max-w-3xl mx-auto px-6 py-16">
        {ok ? (
          <div className="bg-green-50 border border-green-200 text-green-800 p-6 rounded-lg">
            Merci ! Votre demande a bien été prise en compte.
          </div>
        ) : (
          <form onSubmit={onSubmit} className="bg-white shadow rounded-xl p-6 space-y-4">
            <input className="w-full border rounded p-3" name="name" placeholder="Nom" value={form.name} onChange={onChange} required />
            <div className="grid md:grid-cols-2 gap-4">
              <input className="w-full border rounded p-3" name="email" type="email" placeholder="Email" value={form.email} onChange={onChange} required />
              <input className="w-full border rounded p-3" name="phone" placeholder="Téléphone" value={form.phone} onChange={onChange} />
            </div>
            <textarea className="w-full border rounded p-3 h-40" name="message" placeholder="Votre message" value={form.message} onChange={onChange} required />
            <button className="bg-brand-green hover:bg-brand-greenDark text-white font-semibold px-6 py-3 rounded-lg">
              Envoyer la demande de devis
            </button>
          </form>
        )}
      </section>
    </Layout>
  );
}
