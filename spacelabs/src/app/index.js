import $ from 'jquery';
import {useEffect} from "react";
import { useRouter } from "next/router";

export default function Index() {
    const router = useRouter();
    function loadScripts(url) {
        $("body").append(`<script src=${url} async><script/>`);
    }

    useEffect(() => {

        $("body").addClass("nk-body bg-lighter npc-general dark-mode");
        loadScripts("https://spacelabs.vercel.app/assets/js/bundle.js?ver=3.1.0");
        loadScripts("https://spacelabs.vercel.app/assets/js/scripts.js?ver=3.1.0");
        loadScripts("https://spacelabs.vercel.app/assets/js/charts/gd-default.js?ver=3.1.0");
        loadScripts("https://spacelabs.vercel.app/assets/js/apps/messages.js?ver=3.1.0");

    });

}
