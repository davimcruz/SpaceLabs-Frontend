import "../public/assets/css/theme.css";
import "../public/assets/css/spacelabs.min.css";
import "../public/assets/css/spacelabs.css";

import scripts from  "../public/assets/js/scripts";

import { useEffect } from "react";

import Head from "next/head";
import Script from "next/script";
import IndexJS from "../src/app";

function MyApp({ Component, pageProps }) {
  IndexJS();

  useEffect(() => {
    scripts();
  })

  return (
    <>
      <Head>
        <meta name="author" content="SpaceLabs" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="description" content="best platform" />
        <link rel="shortcut icon" href="/assets/images/spacelabs.png" />
        <title>SpaceLabs</title>
      </Head>
      <Component {...pageProps} />
      <Script src="https://spacelabs.vercel.app/assets/js/bundle.js?ver=3.1.0" strategy="beforeInteractive" />
      <Script src="https://spacelabs.vercel.app/assets/js/scripts.js?ver=3.1.0" strategy="beforeInteractive" />
      <Script
        src="https://spacelabs.vercel.app/assets/js/charts/gd-default.js?ver=3.1.0"
        strategy="beforeInteractive"
      />
      <Script
        src="https://spacelabs.vercel.app/assets/js/apps/messages.js?ver=3.1.0"
        strategy="beforeInteractive"
      />
    </>
  );
}

export default MyApp;
