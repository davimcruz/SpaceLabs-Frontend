import { useLayoutEffect } from "react";

import $ from "jquery";

export default function Messages() {
  useLayoutEffect(() => {
    var $win = $(window),
      $body = $("body");

    // Messages Variable
    var flat_break = 992,
      info_break = $body.hasClass("has-apps-sidebar") ? 1280 : 1540,
      olay_profile = "nk-msg-profile-overlay",
      shown_profile = "profile-shown",
      hide_aside = "hide-aside",
      show_msg = "show-message";

    $(function () {
      function msg_autohide() {
        if ($win.outerWidth() >= flat_break) {
          if (!$body.hasClass("msg-profile-autohide"))
            $body.addClass("msg-profile-autohide");
        } else {
          if ($body.hasClass("msg-profile-autohide"))
            $body.removeClass("msg-profile-autohide");
        }
      }
      function profile_show(inbody) {
        $(".profile-toggle").addClass("active");
        $(".nk-msg-profile").addClass("visible");
        $(".nk-msg-body").addClass(shown_profile);
        if (inbody === true) $body.addClass("msg-" + shown_profile);
      }
      function profile_hide(inbody) {
        $(".profile-toggle").removeClass("active");
        $(".nk-msg-profile").removeClass("visible");
        $(".nk-msg-body").removeClass(shown_profile);
        if (inbody === true) $body.removeClass("msg-" + shown_profile);
      }
      function profile_overlay() {
        var overlay = "." + olay_profile;
        if (
          $win.outerWidth() < info_break &&
          $(".nk-msg-profile").hasClass("visible")
        ) {
          !$(".nk-msg-profile").next().hasClass(olay_profile)
            ? $(".nk-msg-profile").after('<div class="' + olay_profile + '"></div>')
            : null;
        } else {
          $(overlay).remove();
        }
        $("body").on("click", overlay, function () {
          $(this).remove();
          profile_hide(true);
          msg_autohide();
        });
      }
      function msg_show() {
        $body.on("click", ".nk-msg-item", function (e) {
          $(".nk-msg-item").removeClass("current");
          $(".nk-msg-aside").addClass(hide_aside);
          $(".nk-msg-body").addClass(show_msg);
          $(this).addClass("current");
          e.preventDefault();
        });
      }
      msg_show();
      function msg_hide() {
        $body.on("click", ".nk-msg-hide", function () {
          $(".nk-msg-aside").removeClass(hide_aside);
          $(".nk-msg-body").removeClass(show_msg);
        });
      }
      msg_hide();
      function profile_trigger() {
        $body.on("click", ".profile-toggle", function (e) {
          $(".profile-toggle").toggleClass("active");
          $(".nk-msg-profile").toggleClass("visible");
          $(".nk-msg-body").toggleClass(shown_profile);
          if (
            $(this).hasClass("active") &&
            !$body.hasClass("msg-" + shown_profile)
          ) {
            $body.addClass("msg-" + shown_profile);
          } else {
            $body.removeClass("msg-" + shown_profile);
          }
          if ($win.outerWidth() >= flat_break) {
            if ($body.hasClass("msg-profile-autohide")) {
              $body.removeClass("msg-profile-autohide");
            } else if (
              $win.outerWidth() < info_break &&
              !$(this).hasClass("active")
            ) {
              $body.addClass("msg-profile-autohide");
            }
          }
          profile_overlay();
          e.preventDefault();
        });
      }
      profile_trigger();
      function msg_on_init() {
        if ($win.outerWidth() >= info_break) {
          profile_show();
        } else {
          profile_hide();
        }
        msg_autohide();
      }
      msg_on_init();
      function msg_on_resize() {
        if ($body.hasClass("msg-profile-autohide")) {
          if ($win.outerWidth() >= info_break) {
            profile_show();
          } else {
            profile_hide();
          }
        }
        if ($win.outerWidth() >= flat_break && $win.outerWidth() < info_break) {
          if ($body.hasClass("msg-" + shown_profile)) {
            $body.removeClass("msg-" + shown_profile);
            profile_hide();
          }
        }
      }
      $win.on("resize", function () {
        msg_on_resize();
        profile_overlay();
      });
    });
  }, []);
}
