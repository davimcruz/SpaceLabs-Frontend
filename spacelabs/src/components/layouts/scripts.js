import React from 'react';
import Script from 'next/script';

const LayoutScripts = ({ children }) => {
  return (
    <div>
      <Script strategy="lazyOnload" src="https://spacelabs.vercel.app/assets/js/bundle.js?ver=3.1.0"/>
      <Script strategy="lazyOnload" src="https://spacelabs.vercel.app/assets/js/scripts.js?ver=3.1.0"/>      
      <Script strategy="lazyOnload" src="https://spacelabs.vercel.app/assets/js/charts/gd-default.js?ver=3.1.0"/>
      <Script strategy="lazyOnload" src="https://spacelabs.vercel.app/assets/js/apps/messages.js?ver=3.1.0"/>
      {children}
    </div>
  );
};

export default LayoutScripts;
