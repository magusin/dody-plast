import Image from "next/image";
import Link from "next/link";

export default function Hero({ title, subtitle, ctaLabel="Demander un devis", ctaHref="/contact", image="/images/hero.jpg" }) {
  return (
    <section className="relative h-[470px] flex items-center justify-center text-center text-white">
      <Image src={image} alt={title || "Dody Plast"} fill className="object-cover" priority />
      <div className="absolute inset-0 hero-overlay" />
      <div className="relative z-10 px-6">
        {title && <h1 className="text-4xl md:text-6xl font-extrabold mb-3 drop-shadow">{title}</h1>}
        {subtitle && <p className="max-w-2xl mx-auto text-lg md:text-xl mb-6">{subtitle}</p>}
        {ctaLabel && (
          <Link
          href="/contact"
          className="ml-2 inline-flex items-center justify-center rounded-lg px-4 py-2
                     font-semibold text-white bg-red-600 hover:bg-red-700
                     focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600
                     transition"
        >
            {ctaLabel}
          </Link>
        )}
      </div>
    </section>
  );
}
