import { useState } from "react";
import Layout from "../components/Layout";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message envoyé ! (à relier à une API email plus tard)");
  };

  return (
    <Layout>
      <section className="max-w-2xl mx-auto py-12">
        <h2 className="text-2xl font-bold mb-6">Contactez-nous</h2>
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow p-6 rounded-lg space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Votre nom"
            value={form.name}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Votre email"
            value={form.email}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
          <textarea
            name="message"
            placeholder="Votre message"
            value={form.message}
            onChange={handleChange}
            className="w-full border p-2 rounded h-32"
            required
          />
          <button
            type="submit"
            className="bg-green-700 text-white px-4 py-2 rounded"
          >
            Envoyer
          </button>
        </form>
      </section>
    </Layout>
  );
}
