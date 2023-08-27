import { useEffect } from "react";

import $ from "jquery";

export default function Index() {

  useEffect(() => {
    $("body").addClass("nk-body bg-lighter npc-general dark-mode");

    var $content = $("[data-content]"),
      $sidebar = $("." + "nk-sidebar"),
      $sidebar_body = $("." + "nk-sidebar" + "-body");

    $(".nk-nav-compact").on("click", function (e) {
      e.preventDefault();
      alert("Funcionando")
      var $self = $(this),
        get_target = $self.data("target"),
        $self_content = $("[data-content=" + get_target + "]");
      $self.toggleClass("compact-active");
      $self_content.toggleClass("is-compact");
      if (!$self_content.hasClass("is-compact")) {
        $self_content.removeClass("has-hover");
      }
    });

    $sidebar_body.on("mouseenter", function (e) {
      if ($sidebar.hasClass("is-compact")) {
        $sidebar.addClass("has-hover");
      }
    });

    $sidebar_body.on("mouseleave", function (e) {
      if ($sidebar.hasClass("is-compact")) {
        $sidebar.removeClass("has-hover");
      }
    });

  });
}
