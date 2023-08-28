import "../styles/globals.css"

import "../public/assets/css/theme.css";
import "../public/assets/css/spacelabs.min.css";
import "../public/assets/css/spacelabs.css";

import LayoutScripts from "../src/components/layouts/scripts";

import Head from "next/head";
import IndexJS from "../src/app";

import NProgress from "nprogress";
import Router from "next/router";

Router.events.on("routeChangeStart", (url) => {
  NProgress.start();
});

NProgress.configure({
  template: `<div class="bar" role="bar"><div class="peg"></div></div>`
});

Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {

  IndexJS();

  return (
    <LayoutScripts>
      <Head>
        <meta name="author" content="SpaceLabs" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="description" content="best platform" />
        <link rel="shortcut icon" href="/assets/images/spacelabs.png" />
        <title>SpaceLabs</title>
        <script async src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js" type="4cacbb56e603bf040218f90d-text/javascript"/>
        <script async src="https://cdnjs.cloudflare.com/ajax/libs/jquery_lazyload/1.9.7/jquery.lazyload.min.js" type="4cacbb56e603bf040218f90d-text/javascript"/>
        <script async src="https://code.jquery.com/jquery-3.6.0.js"/>
        <script async src="/assets/js/bundle.js"/>
      </Head>
      <Component {...pageProps} />
    </LayoutScripts>
  );
}

export default MyApp;
