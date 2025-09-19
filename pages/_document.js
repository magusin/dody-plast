import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="fr">
      <Head>
        {/* Ex: <link rel="preconnect" href="https://fonts.googleapis.com" /> */}
      </Head>
      <body className="text-gray-900 bg-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
