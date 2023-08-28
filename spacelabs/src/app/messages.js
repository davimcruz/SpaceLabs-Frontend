import { useLayoutEffect } from "react";

import $ from "jquery";

export default function Messages() {
  useLayoutEffect(() => {
    var $win = $(window),
      $body = $("body");

    // Messages Variable
    var $toggle_info = $(".profile-toggle"),
      $msg_profile = $(".nk-msg-profile"),
      $msg_body = $(".nk-msg-body"),
      $msg_aside = $(".nk-msg-aside"),
      $msg_item = $(".nk-msg-item"),
      $msg_hide = $(".nk-msg-hide"),
      flat_break = 992,
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
        $toggle_info.addClass("active");
        $msg_profile.addClass("visible");
        $msg_body.addClass(shown_profile);
        if (inbody === true) $body.addClass("msg-" + shown_profile);
      }
      function profile_hide(inbody) {
        $toggle_info.removeClass("active");
        $msg_profile.removeClass("visible");
        $msg_body.removeClass(shown_profile);
        if (inbody === true) $body.removeClass("msg-" + shown_profile);
      }
      function profile_overlay() {
        var overlay = "." + olay_profile;
        if (
          $win.outerWidth() < info_break &&
          $msg_profile.hasClass("visible")
        ) {
          !$msg_profile.next().hasClass(olay_profile)
            ? $msg_profile.after('<div class="' + olay_profile + '"></div>')
            : null;
        } else {
          $(overlay).remove();
        }
        $(overlay).on("click", function () {
          $(this).remove();
          profile_hide(true);
          msg_autohide();
        });
      }
      function msg_show() {
        $body.on("click", $msg_item, function (e) {
          $msg_item.removeClass("current");
          $msg_aside.addClass(hide_aside);
          $msg_body.addClass(show_msg);
          $(this).addClass("current");
          e.preventDefault();
        });
      }
      msg_show();
      function msg_hide() {
        $body.on("click", $msg_hide, function () {
          $msg_aside.removeClass(hide_aside);
          $msg_body.removeClass(show_msg);
        });
      }
      msg_hide();
      function profile_trigger() {
        $body.on("click", $toggle_info, function (e) {
          $toggle_info.toggleClass("active");
          $msg_profile.toggleClass("visible");
          $msg_body.toggleClass(shown_profile);
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
