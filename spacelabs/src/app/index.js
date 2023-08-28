import { useLayoutEffect, useEffect } from "react";

import NProgress from "nprogress";
import { useRouter } from "next/router";

import $ from "jquery";

export default function Index() {
  const router = useRouter();

  router.events.on("routeChangeComplete", () => {
    if ($("body").hasClass("nav-shown")) $("body").addClass("has-hover");
  });

  useEffect(() => {
    $(window).on("load", function () {
      NProgress.start();

      NProgress.configure({
        template: `<div class="bar" role="bar"><div class="peg"></div></div>`,
      });

      NProgress.done();
    });
  }, []);

  useLayoutEffect(() => {
    function setCookie(isNavbarCompact) {
      const date = new Date();
      date.setDate(date.getDate() + 30);
      document.cookie = `navbar=${isNavbarCompact}; expires=${date.toUTCString()}; path=/;`;
    }

    $(function () {
      const body = $("body");

      body.addClass("nk-body bg-lighter npc-general dark-mode");

      if (/Mobi|Android/i.test(navigator.userAgent)) {
        body.ready(function () {
          $(".nk-sidebar").ready(function () {
            $(".nk-sidebar").addClass("nk-sidebar-mobile");
          });
        });
      }

      body.on("click", ".nk-nav-toggle", function (e) {
        $(".nk-sidebar").toggleClass("nk-sidebar-active");
        $(".nk-sidebar").toggleClass("toggle-active");
        body.toggleClass("nav-shown");
      });

      body.on("click", ".nk-nav-compact", function (e) {
        e.preventDefault();
        console.log("Funcionando");
        var $self = $(this),
          get_target = $self.data("target"),
          $self_content = $("[data-content=" + get_target + "]");
        $self.toggleClass("compact-active");
        $self_content.toggleClass("is-compact");

        if (!$self_content.hasClass("is-compact")) {
          setCookie(false);
          $self_content.removeClass("has-hover");
        } else {
          setCookie(true);
        }
      });

      body.on("mouseenter", ".nk-sidebar-body", function (e) {
        if ($(".nk-sidebar").hasClass("is-compact")) {
          $(".nk-sidebar").addClass("has-hover");
        }
      });

      body.on("mouseleave", ".nk-sidebar-body", function (e) {
        if ($(".nk-sidebar").hasClass("is-compact")) {
          $(".nk-sidebar").removeClass("has-hover");
        }
      });
    });
  }, []);
}
