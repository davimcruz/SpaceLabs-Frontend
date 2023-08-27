import { useEffect } from "react";

import $ from "jquery";

export default function Index() {
  useEffect(() => {
    $(function () {
      $("body").addClass("nk-body bg-lighter npc-general dark-mode");

      $("body").on("click", ".nk-nav-compact", function (e) {
        e.preventDefault();
        alert("Funcionando");
        var $self = $(this),
          get_target = $self.data("target"),
          $self_content = $("[data-content=" + get_target + "]");
        $self.toggleClass("compact-active");
        $self_content.toggleClass("is-compact");
        if (!$self_content.hasClass("is-compact")) {
          $self_content.removeClass("has-hover");
        }
      });

      $(".nk-sidebar-body").on("mouseenter", function (e) {
        if ($(".nk-sidebar").hasClass("is-compact")) {
          $(".nk-sidebar").addClass("has-hover");
        }
      });

      $(".nk-sidebar-body").on("mouseleave", function (e) {
        if ($(".nk-sidebar").hasClass("is-compact")) {
          $(".nk-sidebar").removeClass("has-hover");
        }
      });
    });
  });
}
