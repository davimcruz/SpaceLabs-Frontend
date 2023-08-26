import $ from 'jquery';
import {useEffect} from "react";
import { useRouter } from "next/router";
const router = useRouter();

export default function Index() {

    function loadScripts(url) {
        const script = document.createElement('script');

        script.src = url;
        script.async = true;

        $("body").append(script);
    }

    useEffect(() => {

        $("body").addClass("nk-body bg-lighter npc-general dark-mode");
        loadScripts("https://spacelabs.vercel.app/assets/js/bundle.js?ver=3.1.0");
        loadScripts("https://spacelabs.vercel.app/assets/js/scripts.js?ver=3.1.0");
        loadScripts("https://spacelabs.vercel.app/assets/js/charts/gd-default.js?ver=3.1.0");
        loadScripts("https://spacelabs.vercel.app/assets/js/apps/messages.js?ver=3.1.0");

    });

}
