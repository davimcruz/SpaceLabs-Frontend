import $ from "jquery";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Index() {
  const router = useRouter();

  function loadScripts(url) {
    const script = document.createElement("script");

    script.src = url;
    script.async = true;

    return script;
  }

  useEffect(() => {
    $("body").addClass("nk-body bg-lighter npc-general dark-mode");

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

    document.body.appendChild(bundle);
    document.body.appendChild(scripts);
    // document.body.appendChild(gdDefault);
    // document.body.appendChild(messages);

    return () => {
      document.body.removeChild(bundle);
      document.body.removeChild(scripts);
    //   document.body.removeChild(gdDefault);
    //   document.body.removeChild(messages);
    };
  }, [router]);
}
