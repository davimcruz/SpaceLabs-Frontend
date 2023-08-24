
import "../public/assets/css/theme.css"
import "../public/assets/css/spacelabs.css"
import "../public/assets/css/spacelabs.min.css"
import "../public/assets/css/spacelabs.rtl.css"

import Head from 'next/head'
import IndexJS from "../src/app";

function MyApp({ Component, pageProps }) {

  IndexJS();

  return (
    <>
    <Head>
      <meta name="author" content="SpaceLabs"/>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
      <meta name="description" content="best platform"/>
      <link rel="shortcut icon" href="/assets/images/spacelabs.png"/>
      <title>SpaceLabs</title>
      <script src="/assets/js/bundle.js?ver=3.1.0" async />
      <script src="/assets/js/scripts.js?ver=3.1.0" async />
      <script src="/assets/js/charts/gd-default.js?ver=3.1.0" async />
    </Head>
    <Component {...pageProps} />
    </>
    );
}

export default MyApp
