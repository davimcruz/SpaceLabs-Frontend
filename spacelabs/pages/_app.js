import "../public/assets/css/spacelabs.css"

import Head from 'next/head'
import Script from 'next/script';

function MyApp({ Component, pageProps }) {

  return (
    <>
    <Head>
      <meta name="author" content="SpaceLabs"/>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
      <meta name="description" content="best platform"/>
      <link rel="shortcut icon" href="/assets/images/spacelabs.png"/>
      <title>SpaceLabs</title>
      <Script src="/assets/js/bundle.js?ver=3.1.0" />
      <Script src="/assets/js/scripts.js?ver=3.1.0" />
      <Script src="/assets/js/charts/gd-default.js?ver=3.1.0"/>
    </Head>
    <Component {...pageProps} />
    </>
    );
}

export default MyApp
