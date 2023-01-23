import pageMeta from "@/content/meta";

export default function Head() {
  return (
    <>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
      />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="description"
        content={pageMeta.about.description || "Nikhil Ravi"}
      />
      <title>{`${pageMeta.about.title || ""} Nikhil Ravi`}</title>
      <meta name="theme-color" content="#000" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="manifest" href="/manifest.json" />
      <link rel="apple-touch-icon" href="/icons/icon-192x192.png"></link>
      <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta name="author" content="Nikhil Ravi"></meta>
      <meta name="robots" content="index,follow" />
      <meta
        name="keywords"
        content={`${
          pageMeta.about.keywords || ""
        } Nikhil, Nikhil Ravi, nikhil--ravi, nikhil-ravi`}
      />
      {/* Og */}
      <meta
        property="og:title"
        content={`${pageMeta.about.title || ""} Nikhil Ravi`}
      />
      <meta
        property="og:description"
        content={pageMeta.about.description || "Nikhil Ravi"}
      />
      <meta property="og:site_name" content="Nikhil Ravi" />
      <meta property="og:url" content="/" key="ogurl" />
      <meta property="og:image" content={pageMeta.about.previewImage || ""} />
      {/* Barlow */}
      <link
        rel="preload"
        href="/fonts/Barlow/Barlow-400.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/fonts/Barlow/Barlow-500.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/fonts/Barlow/Barlow-600.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/fonts/Barlow/Barlow-700.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/fonts/Barlow/Barlow-800.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      {/* Inter */}
      <link
        rel="preload"
        href="/fonts/Inter-var.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      {/* Sarina */}
      <link
        rel="preload"
        href="/fonts/Sarina/Sarina-400.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
    </>
  );
}
