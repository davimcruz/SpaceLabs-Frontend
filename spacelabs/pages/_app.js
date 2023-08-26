import "../public/assets/css/theme.css";
import "../public/assets/css/spacelabs.min.css";
import "../public/assets/css/spacelabs.css";

import { useRouter } from "next/router";

import Head from "next/head";
import IndexJS from "../src/app";

function MyApp({ Component, pageProps }) {

  IndexJS(pageProps);

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
        {/* <script
          src="https://spacelabs.vercel.app/assets/js/bundle.js?ver=3.1.0"
          async
        />
        <script
          src="https://spacelabs.vercel.app/assets/js/scripts.js?ver=3.1.0"
          async
        />
        <script
          src="https://spacelabs.vercel.app/assets/js/charts/gd-default.js?ver=3.1.0"
          async
        />
        <script
          src="https://spacelabs.vercel.app/assets/js/apps/messages.js?ver=3.1.0"
          async
        /> */}
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
