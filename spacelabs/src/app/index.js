import $ from "jquery";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Index() {
  const router = useRouter();

  function loadScripts(url) {
    const script = document.createElement("script");

    script.type = "module";
    script.src = url;
    script.async = true;

    return script;
  }

  useEffect(() => {
    $("body").addClass("nk-body bg-lighter npc-general dark-mode");

    const jqueryMin = loadScripts(
      "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"
    );

    const jqueryLazyload = loadScripts(
      "https://cdnjs.cloudflare.com/ajax/libs/jquery_lazyload/1.9.7/jquery.lazyload.min.js"
    );

    const codeJQuery = loadScripts("https://code.jquery.com/jquery-3.6.0.js");

    const nioapp = loadScripts(
      "https://spacelabs.vercel.app/vendors/js/nioapp.min.js?ver=3.1.0"
    );
    const bundle = loadScripts(
      "https://spacelabs.vercel.app/assets/js/bundle.js?ver=3.1.0"
    );
    const scripts = loadScripts(
      "https://spacelabs.vercel.app/assets/js/scripts.js?ver=3.1.0"
    );
    const gdDefault = loadScripts(
      "https://spacelabs.vercel.app/assets/js/charts/gd-default.js?ver=3.1.0"
    );
    const messages = loadScripts(
      "https://spacelabs.vercel.app/assets/js/apps/messages.js?ver=3.1.0"
    );

    document.body.appendChild(jqueryMin);
    document.body.appendChild(jqueryLazyload);
    document.body.appendChild(codeJQuery);
    document.body.appendChild(nioapp);
    document.body.appendChild(scripts);
    document.body.appendChild(bundle);
    document.body.appendChild(gdDefault);
    document.body.appendChild(messages);

    return () => {
      document.body.removeChild(jqueryMin);
      document.body.removeChild(jqueryLazyload);
      document.body.removeChild(codeJQuery);
      document.body.removeChild(nioapp);
      document.body.removeChild(scripts);
      document.body.removeChild(bundle);
      document.body.removeChild(gdDefault);
      document.body.removeChild(messages);
    };
  }, [router.pathname]);
}
