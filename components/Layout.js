import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";

export default function Layout({ children, title, description }) {
  return (
    <>
      {/* SEO minimal */}
      <Head>
        <title>{title ? `${title} — Dody Plast` : "Dody Plast"}</title>
        {description && <meta name="description" content={description} />}
        <meta property="og:site_name" content="Dody Plast" />
      </Head>

      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pt-[98px]">{children}</main>
        <Footer />
      </div>
    </>
  );
}
