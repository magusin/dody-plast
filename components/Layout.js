import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children, title, description }) {
  return (
    <>
      {/* SEO minimal */}
      <head>
        <title>{title ? `${title} — Dody Plast` : "Dody Plast"}</title>
        {description && <meta name="description" content={description} />}
        <meta property="og:site_name" content="Dody Plast" />
      </head>

      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pt-[98px]">{children}</main>
        <Footer />
      </div>
    </>
  );
}
