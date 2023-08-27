import $ from "jquery";
import { useEffect } from "react";

export default function Index() {

  useEffect(() => {

    function NioAppMin(i, w) {
      var t = w(window),
        o = w("body"),
        s = "nio-theme",
        e = "lite-dash";
      function r(t, s) {
        return (
          Object.keys(s).forEach(function (e) {
            t[e] = s[e];
          }),
          t
        );
      }
      return (
        (w.fn.exists = function () {
          return 0 < this.length;
        }),
        (w.fn.csskey = function (e, t) {
          for (
            var s = t ? t + "-" : "", a = e ? e.split(" ") : "", o = 0;
            o < a.length;
            o++
          )
            a[o] = s + a[o];
          return a.toString().replace(",", " ");
        }),
        (i.BS = {}),
        (i.TGL = {}),
        (i.Ani = {}),
        (i.Addons = {}),
        (i.Slider = {}),
        (i.Picker = {}),
        (i.Custom = {}),
        (i.Win = { height: t.height(), width: t.outerWidth() }),
        (i.Break = {
          mb: 420,
          sm: 576,
          md: 768,
          lg: 992,
          xl: 1200,
          xxl: 1540,
          any: 1 / 0,
        }),
        (i.Host = {
          name: window.location.hostname,
          locat: e.slice(-4) + e.slice(0, 4),
        }),
        (i.isDark = !(!o.hasClass("dark-mode") && "dark" !== o.data("theme"))),
        (i.State = {
          isRTL: !(!o.hasClass("has-rtl") && "rtl" !== o.attr("dir")),
          isTouch: "ontouchstart" in document.documentElement,
          isMobile: !!navigator.userAgent.match(
            /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Windows Phone|/i
          ),
          asMobile: i.Win.width < i.Break.md,
          asServe: i.Host.name.split(".").indexOf(i.Host.locat),
        }),
        (i.hexRGB = function (e, t) {
          t = t || 1;
          if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(e))
            return (
              (e = [
                ((e =
                  "0x" +
                  (e =
                    3 === (e = e.substring(1).split("")).length
                      ? [e[0], e[0], e[1], e[1], e[2], e[2]]
                      : e).join("")) >>
                  16) &
                  255,
                (e >> 8) & 255,
                255 & e,
              ].join(",")),
              1 <= t ? "rgba(" + e + ")" : "rgba(" + e + "," + t + ")"
            );
          throw new Error("bad hex");
        }),
        (i.StateUpdate = function () {
          (i.Win = { height: t.height(), width: t.outerWidth() }),
            (i.State.asMobile = i.Win.width < i.Break.md);
        }),
        (i.ClassInit = function () {
          function e() {
            !0 === i.State.asMobile
              ? o.addClass("as-mobile")
              : o.removeClass("as-mobile");
          }
          !0 === i.State.isTouch ? o.addClass("has-touch") : o.addClass("no-touch"),
            e(),
            !0 === i.State.isRTL && o.addClass("has-rtl"),
            o.addClass("nk-" + s),
            t.on("resize", e);
        }),
        (i.ColorBG = function () {
          function e(e, t) {
            var e = w(e),
              t = t || "bg",
              s = e.data(t);
            "" !== s &&
              ("bg-color" === t
                ? e.css("background-color", s)
                : "bg-image" === t
                ? e.css("background-image", 'url("' + s + '")')
                : e.css("background", s));
          }
          w("[data-bg]").each(function () {
            e(this, "bg");
          }),
            w("[data-bg-color]").each(function () {
              e(this, "bg-color");
            }),
            w("[data-bg-image]").each(function () {
              e(this, "bg-image");
            });
        }),
        (i.ColorTXT = function () {
          w("[data-color]").each(function () {
            var e, t;
            (t = "color"),
              (e = w((e = this))),
              "" !== (t = e.data(t || "color")) && e.css("color", t);
          });
        }),
        (i.BreakClass = function (e, t, s) {
          var a = e || ".header-menu",
            o = t || i.Break.md,
            e = { timeOut: 1e3, classAdd: "mobile-menu" },
            n = s ? r(e, s) : e,
            t = n.ignore || !1;
          if (t && w(a).hasClass(t)) return !1;
          i.Win.width < o
            ? setTimeout(function () {
                i.Win.width < o && w(a).addClass(n.classAdd);
              }, n.timeOut)
            : w(a).removeClass(n.classAdd);
        }),
        (i.Passcode = function (e, t) {
          var s = { showClass: "is-shown", hideClass: "is-hidden" },
            a = t ? r(s, t) : s;
          w(e).exists() &&
            w(e).on("click", function (e) {
              var t = w(this),
                s = t.data("target"),
                s = w("#" + s);
              e.preventDefault(),
                s.hasClass(a.showClass)
                  ? (t.add(s).addClass(a.hideClass).removeClass(a.showClass),
                    s.attr("type", "password"))
                  : (t.add(s).addClass(a.showClass).removeClass(a.hideClass),
                    s.attr("type", "text"));
            });
        }),
        (i.LinkOff = function (e) {
          w(e).on("click", function (e) {
            e.preventDefault();
          });
        }),
        (i.SetHW = function (e, t) {
          (t = "height" == t || "h" == t ? "height" : "width"),
            (e = e || "[data-" + t + "]");
          w(e).exists() &&
            w(e).each(function () {
              w(this).css(t, w(this).data(t));
            });
        }),
        (i.AddInBody = function (e, t) {
          var s = { prefix: "nk-", class: "", has: "has" },
            t = t ? r(s, t) : s,
            s = e.replace(".", "").replace(t.prefix, ""),
            e = s;
          (t.prefix = !1 !== t.prefix ? t.prefix : ""),
            (t.has = "" !== t.has ? t.has + "-" : ""),
            (e = "" !== t.class ? t.class : t.has + e),
            w("." + t.prefix + s).exists() && !o.hasClass(e) && o.addClass(e);
        }),
        (i.Toggle = {
          trigger: function (e, t) {
            var s = {
                self: e,
                active: "active",
                content: "expanded",
                data: "content",
                olay: "toggle-overlay",
                speed: 400,
              },
              t = t ? r(s, t) : s,
              s = w("[data-target=" + e + "]"),
              e = w("[data-" + t.data + "=" + e + "]"),
              a = e.data("toggle-body");
            e.data("toggle-overlay") && (t.overlay = t.olay),
              a && (t.body = "toggle-shown"),
              e.hasClass(t.content)
                ? (s.removeClass(t.active),
                  (1 == t.toggle ? e.slideUp(t.speed) : e).removeClass(t.content))
                : (s.addClass(t.active),
                  (1 == t.toggle ? e.slideDown(t.speed) : e).addClass(t.content)),
              t.body && o.toggleClass(t.body),
              t.overlay && this.overlay(e, t.overlay, t);
          },
          removed: function (e, t) {
            var s = {
                self: e,
                active: "active",
                content: "expanded",
                body: "",
                data: "content",
                olay: "toggle-overlay",
              },
              t = t ? r(s, t) : s,
              s = w("[data-target=" + e + "]"),
              e = w("[data-" + t.data + "=" + e + "]"),
              a = e.data("toggle-body");
            e.data("toggle-overlay") && (t.overlay = t.olay),
              a && (t.body = "toggle-shown"),
              (s.hasClass(t.active) || e.hasClass(t.content)) &&
                (s.removeClass(t.active),
                e.removeClass(t.content),
                !0 === t.toggle && e.slideUp(t.speed)),
              t.body && o.hasClass(t.body) && o.removeClass(t.body),
              t.close &&
                (!0 === t.close.profile && this.closeProfile(e),
                !0 === t.close.menu && this.closeMenu(e)),
              t.overlay && this.overlayRemove(t.overlay);
          },
          overlay: function (e, t, s) {
            var a;
            !0 === s.break &&
              ((a = w(e).data("toggle-screen")), (s.break = i.Break[a])),
              w(e).hasClass(s.content) && i.Win.width < s.break
                ? w(e).after(
                    '<div class="' + t + '" data-target="' + s.self + '"></div>'
                  )
                : this.overlayRemove(t);
          },
          overlayRemove: function (e) {
            w("." + e)
              .fadeOut(300)
              .remove();
          },
          dropMenu: function (e, t) {
            var s = {
                active: "active",
                self: "link-toggle",
                child: "menu-sub",
                speed: 400,
              },
              t = t ? r(s, t) : s,
              s = w(e).parent(),
              e = s.children("." + t.child);
            (t.speed =
              5 < e.children().length
                ? t.speed + 20 * e.children().length
                : t.speed),
              e
                .slideToggle(t.speed)
                .find("." + t.child)
                .slideUp(t.speed),
              s
                .toggleClass(t.active)
                .siblings()
                .removeClass(t.active)
                .find("." + t.child)
                .slideUp(t.speed);
          },
          closeProfile: function (e) {
            var t = w(e).find(".nk-profile-toggle.active"),
              e = w(e).find(".nk-profile-content.expanded");
            t.exists() &&
              (t.removeClass("active"), e.slideUp().removeClass("expanded"));
          },
          closeMenu: function (e) {
            e = w(e).find(".nk-menu-item.active");
            e.exists() && e.removeClass("active").find(".nk-menu-sub").slideUp();
          },
        }),
        (i.BS.tooltip = function (e, t) {
          var s = { boundary: "window", trigger: "hover" },
            a = t ? r(s, t) : s;
          w(e).exists() &&
            [].slice
              .call(document.querySelectorAll(e || '[data-bs-toggle="tooltip"]'))
              .map(function (e) {
                return null;
                // return new bootstrap.Tooltip(e, a);
              });
        }),
        (i.BS.menutip = function (e) {
          i.BS.tooltip(e, { boundary: "window", placement: "right" });
        }),
        (i.BS.popover = function (e) {
          [].slice
            .call(document.querySelectorAll(e || '[data-bs-toggle="popover"]'))
            .map(function (e) {
              return null
              // return new bootstrap.Popover(e);
            });
        }),
        (i.BS.progress = function (e) {
          w(e).exists() &&
            w(e).each(function () {
              w(this).css("width", w(this).data("progress") + "%");
            });
        }),
        (i.BS.modalfix = function (e) {
          e = e || ".modal";
          w(e).exists() &&
            "function" == typeof w.fn.modal &&
            w(e).on("shown.bs.modal", function () {
              o.hasClass("modal-open") || o.addClass("modal-open");
            });
        }),
        (i.BS.fileinput = function (e) {
          w(e).exists() &&
            w(e).each(function () {
              var t = w(this).next().text(),
                s = [];
              w(this).on("change", function () {
                for (var e = 0; e < this.files.length; e++)
                  s[e] = this.files[e].name;
                (t = s ? s.join(", ") : t), w(this).next().html(t);
              });
            });
        }),
        (i.Picker.date = function (e, t) {
          w(e).exists() &&
            "function" == typeof w.fn.datepicker &&
            w(e).each(function () {
              var e = w(this).data("date-format"),
                e = {
                  format: "" !== e ? e : "mm/dd/yyyy",
                  maxViewMode: 2,
                  clearBtn: !0,
                  autoclose: !0,
                  todayHighlight: !0,
                  rtl: i.State.isRTL,
                },
                e = t ? r(e, t) : e;
              w(this)
                .datepicker(e)
                .on("changeDate", function (e) {
                  0 !== e.dates.length
                    ? w(this).parent().addClass("focused")
                    : w(this).parent().removeClass("focused");
                });
            });
        }),
        (i.Picker.dob = function (e, t) {
          var s = { startView: 2, todayHighlight: !1 },
            t = t ? r(s, t) : s;
          i.Picker.date(e, t);
        }),
        (i.Picker.time = function (e, s) {
          w(e).exists() &&
            "function" == typeof w.fn.timepicker &&
            w(e).each(function () {
              w(this).parent().addClass("has-timepicker");
              var e = w(this).data("time-format"),
                t = w(this).data("time-interval"),
                e = {
                  timeFormat: "" !== e ? e : "HH:mm",
                  interval: "" !== t ? t : 15,
                  change: function (e) {
                    !1 !== e
                      ? w(this).parent().addClass("focused")
                      : w(this).parent().removeClass("focused");
                  },
                },
                t = s ? r(e, s) : e;
              w(this).timepicker(t);
            });
        }),
        (i.Select2 = function (e, s) {
          w(e).exists() &&
            "function" == typeof w.fn.select2 &&
            w(e).each(function () {
              var e = w(this),
                t = {
                  placeholder: e.data("placeholder"),
                  clear: e.data("clear"),
                  search: e.data("search"),
                  width: e.data("width"),
                  theme: e.data("theme"),
                  ui: e.data("ui"),
                },
                e =
                  ((t.ui = t.ui ? " " + e.csskey(t.ui, "select2") : ""),
                  {
                    theme: t.theme ? t.theme + " " + t.ui : "default" + t.ui,
                    allowClear: t.clear || !1,
                    placeholder: t.placeholder || "",
                    dropdownAutoWidth: !(!t.width || "auto" !== t.width),
                    minimumResultsForSearch: t.search && "on" === t.search ? 1 : -1,
                    dir: i.State.isRTL ? "rtl" : "ltr",
                  }),
                t = s ? r(e, s) : e;
              w(this).select2(t);
            });
        }),
        (i.Custom.Stepper = function (s, e) {
          var t =
              !(!s.dataset.stepInit || isNaN(s.dataset.stepInit)) &&
              parseInt(s.dataset.stepInit),
            t = {
              selectors: {
                nav: e.selectors.nav || "stepper-nav",
                progress: e.selectors.progress || "stepper-progress",
                content: e.selectors.content || "stepper-steps",
                prev: e.selectors.prev || "step-prev",
                next: e.selectors.next || "step-next",
                submit: e.selectors.submit || "step-submit",
              },
              classes: {
                nav_current: e.classes.nav_current || "current",
                nav_done: e.classes.nav_done || "done",
                step_active: e.classes.step_active || "active",
                step_done: e.classes.step_done || "done",
              },
              current_step: t || parseInt(e.current_step),
            };
          let a = s.querySelectorAll(`.${t.selectors.nav} > *`),
            o = s.querySelectorAll(`.${t.selectors.content} > *`),
            n =
              (s.querySelector("." + t.selectors.progress),
              s.querySelector(`.${t.selectors.progress}-count`)),
            i = s.querySelector(`.${t.selectors.progress}-bar`),
            r = s.querySelector("." + t.selectors.prev),
            l = s.querySelector("." + t.selectors.next),
            c = s.querySelector("." + t.selectors.submit),
            d = t.classes.nav_current,
            u = t.classes.nav_done,
            h = t.classes.step_active,
            p = t.classes.step_done,
            f = t.current_step || 1,
            v = f,
            m = a.length,
            g = o.length,
            y = 0 < s.querySelectorAll("." + t.selectors.nav).length,
            b = 0 < s.querySelectorAll("." + t.selectors.progress).length;
          function C(e) {
            var t = e - 1,
              t =
                ((s.style.display = "block"),
                y &&
                  (a.forEach(function (e, t) {
                    e.classList.remove(d);
                  }),
                  a[t].classList.add(d)),
                o.forEach(function (e, t) {
                  e.classList.remove(h);
                }),
                o[t].classList.add(h),
                e);
            1 === t &&
              ((l.style.display = "block"),
              (r.style.display = "none"),
              (c.style.display = "none"),
              s.setAttribute("data-step-current", "first")),
              (g !== t) & (1 !== t) &&
                ((r.style.display = "block"),
                (l.style.display = "block"),
                (c.style.display = "none"),
                s.setAttribute("data-step-current", t)),
              g === t &&
                ((r.style.display = "block"),
                (c.style.display = "block"),
                (l.style.display = "none"),
                s.setAttribute("data-step-current", "last")),
              b &&
                ((n.innerHTML = e + " of " + g),
                (i.style.width = (100 / g) * e + "%"));
          }
          m !== g && y
            ? console.error(
                "Stepper nav should have same amount of child element as Stepper steps"
              )
            : C(f);
          let k = w("#" + s.id).validate({
            errorElement: "span",
            errorClass: "invalid",
            onfocusout: !1,
            errorPlacement: function (e, t) {
              t.parents().hasClass("input-group")
                ? e.appendTo(t.parent().parent())
                : e.appendTo(t.parent());
            },
          });
          r.querySelector("button").addEventListener("click", function (e) {
            e.preventDefault();
            var e = k.form(),
              t = v - 1;
            e
              ? g !== v && (y && a[t].classList.add(u), o[t].classList.add(p))
              : (y && a[t].classList.remove(u), o[t].classList.remove(p)),
              C(--v);
          }),
            l.querySelector("button").addEventListener("click", function (e) {
              e.preventDefault(),
                k.form() &&
                  ((e = v - 1),
                  y && a[e].classList.add(u),
                  o[e].classList.add(p),
                  C(++v));
            }),
            c.querySelector("button").addEventListener("click", function (e) {
              e.preventDefault(), k.form();
            });
        }),
        (i.coreInit = function () {
          i.coms.onResize.push(i.StateUpdate), i.coms.docReady.push(i.ClassInit);
        }),
        i.coreInit(),
        i
      );
    }

    function NioAppFunc(e, t, s) {
      var a = {
          AppInfo: { name: "NioApp", version: "1.0.8", author: "Softnio" },
          Package: { name: "spacelabs", version: "2.3" },
        },
        o = {
          docReady: [],
          docReadyDefer: [],
          winLoad: [],
          winLoadDefer: [],
          onResize: [],
          onResizeDefer: [],
        };
      function n(t) {
        (t = void 0 === t ? e : t),
          o.docReady.concat(o.docReadyDefer).forEach(function (e) {
            null != e && e(t);
          });
      }
      function i(t) {
        (t = "object" == typeof t ? e : t),
          o.winLoad.concat(o.winLoadDefer).forEach(function (e) {
            null != e && e(t);
          });
      }
      function r(t) {
        (t = "object" == typeof t ? e : t),
          o.onResize.concat(o.onResizeDefer).forEach(function (e) {
            null != e && e(t);
          });
      }
      return (
        e(s).ready(n),
        e(t).on("load", i),
        e(t).on("resize", r),
        (a.coms = o),
        (a.docReady = n),
        (a.winLoad = i),
        (a.onResize = r),
        a
      );
    }

    const NioApp = NioAppMin(NioAppFunc($, window, document), $);

    $("body").addClass("nk-body bg-lighter npc-general dark-mode");
    NioApp.Package.name = "spacelabs";
    NioApp.Package.version = "2.3";
    var $win = $(window),
      $body = $("body"),
      $doc = $(document),
      //class names
      _body_theme = "nio-theme",
      _menu = "nk-menu",
      _mobile_nav = "mobile-menu",
      _header = "nk-header",
      _header_menu = "nk-header-menu",
      _sidebar = "nk-sidebar",
      _sidebar_mob = "nk-sidebar-mobile",
      //breakpoints
      _break = NioApp.Break;
    function extend(obj, ext) {
      Object.keys(ext).forEach(function (key) {
        obj[key] = ext[key];
      });
      return obj;
    }
    // ClassInit @v1.0
    NioApp.ClassBody = function () {
      NioApp.AddInBody(_sidebar);
    };

    // ClassInit @v1.0
    NioApp.ClassNavMenu = function () {
      NioApp.BreakClass("." + _header_menu, _break.lg, {
        timeOut: 0,
      });
      NioApp.BreakClass("." + _sidebar, _break.lg, {
        timeOut: 0,
        classAdd: _sidebar_mob,
      });
      $win.on("resize", function () {
        NioApp.BreakClass("." + _header_menu, _break.lg);
        NioApp.BreakClass("." + _sidebar, _break.lg, {
          classAdd: _sidebar_mob,
        });
      });
    };

    // Code Prettify @v1.0
    NioApp.Prettify = function () {};

    // Copied @v1.0
    NioApp.Copied = function () {};

    // CurrentLink Detect @v1.0
    NioApp.CurrentLink = function () {
      var _link = ".nk-menu-link, .menu-link, .nav-link",
        _currentURL = window.location.href,
        fileName = _currentURL.substring(
          0,
          _currentURL.indexOf("#") == -1
            ? _currentURL.length
            : _currentURL.indexOf("#")
        ),
        fileName = fileName.substring(
          0,
          fileName.indexOf("?") == -1 ? fileName.length : fileName.indexOf("?")
        );
      $(_link).each(function () {
        var self = $(this),
          _self_link = self.attr("href");
        if (fileName.match(_self_link)) {
          self
            .closest("li")
            .addClass("active current-page")
            .parents()
            .closest("li")
            .addClass("active current-page");
          self.closest("li").children(".nk-menu-sub").css("display", "block");
          self
            .parents()
            .closest("li")
            .children(".nk-menu-sub")
            .css("display", "block");
          this.scrollIntoView({
            block: "start",
          });
        } else {
          self
            .closest("li")
            .removeClass("active current-page")
            .parents()
            .closest("li:not(.current-page)")
            .removeClass("active");
        }
      });
    };

    // PasswordSwitch @v1.0
    NioApp.PassSwitch = function () {
      NioApp.Passcode(".passcode-switch");
    };

    // Toastr Message @v1.0
    NioApp.Toast = function (msg, ttype, opt) {
      var ttype = ttype ? ttype : "info",
        msi = "",
        ticon =
          ttype === "info"
            ? "ni ni-info-fill"
            : ttype === "success"
            ? "ni ni-check-circle-fill"
            : ttype === "error"
            ? "ni ni-cross-circle-fill"
            : ttype === "warning"
            ? "ni ni-alert-fill"
            : "",
        def = {
          position: "bottom-right",
          ui: "",
          icon: "auto",
          clear: false,
        },
        attr = opt ? extend(def, opt) : def;
      attr.position = attr.position
        ? "toast-" + attr.position
        : "toast-bottom-right";
      attr.icon = attr.icon === "auto" ? ticon : attr.icon ? attr.icon : "";
      attr.ui = attr.ui ? " " + attr.ui : "";
      (msi =
        attr.icon !== ""
          ? '<span class="toastr-icon"><em class="icon ' +
            attr.icon +
            '"></em></span>'
          : ""),
        (msg =
          msg !== "" ? msi + '<div class="toastr-text">' + msg + "</div>" : "");
      if (msg !== "") {
        if (attr.clear === true) {
          toastr.clear();
        }
        var option = {
          closeButton: true,
          debug: false,
          newestOnTop: false,
          progressBar: false,
          positionClass: attr.position + attr.ui,
          closeHtml: '<span class="btn-trigger">Close</span>',
          preventDuplicates: true,
          showDuration: "1500",
          hideDuration: "1500",
          timeOut: "2000",
          toastClass: "toastr",
          extendedTimeOut: "3000",
        };
        toastr.options = extend(option, attr);
        toastr[ttype](msg);
      }
    };

    // Toggle Screen @v1.0
    NioApp.TGL.screen = function (elm) {
      if ($(elm).exists()) {
        $(elm).each(function () {
          var ssize = $(this).data("toggle-screen");
          if (ssize) {
            $(this).addClass("toggle-screen-" + ssize);
          }
        });
      }
    };

    // Toggle Content @v1.0
    NioApp.TGL.content = function (elm, opt) {
      var toggle = elm ? elm : ".toggle",
        $toggle = $(toggle),
        $contentD = $("[data-content]"),
        toggleBreak = true,
        toggleCurrent = false,
        def = {
          active: "active",
          content: "content-active",
          break: toggleBreak,
        },
        attr = opt ? extend(def, opt) : def;
      NioApp.TGL.screen($contentD);
      $toggle.on("click", function (e) {
        toggleCurrent = this;
        NioApp.Toggle.trigger($(this).data("target"), attr);
        e.preventDefault();
      });
      $doc.on("mouseup", function (e) {
        if (toggleCurrent) {
          var $toggleCurrent = $(toggleCurrent),
            currentTarget = $(toggleCurrent).data("target"),
            $contentCurrent = $('[data-content="'.concat(currentTarget, '"]')),
            $s2c = $(".select2-container"),
            $dpd = $(".datepicker-dropdown"),
            $tpc = $(".ui-timepicker-container"),
            $mdl = $(".modal");
          if (
            !$toggleCurrent.is(e.target) &&
            $toggleCurrent.has(e.target).length === 0 &&
            !$contentCurrent.is(e.target) &&
            $contentCurrent.has(e.target).length === 0 &&
            !$s2c.is(e.target) &&
            $s2c.has(e.target).length === 0 &&
            !$dpd.is(e.target) &&
            $dpd.has(e.target).length === 0 &&
            !$tpc.is(e.target) &&
            $tpc.has(e.target).length === 0 &&
            !$mdl.is(e.target) &&
            $mdl.has(e.target).length === 0
          ) {
            NioApp.Toggle.removed($toggleCurrent.data("target"), attr);
            toggleCurrent = false;
          }
        }
      });
      $win.on("resize", function () {
        $contentD.each(function () {
          var content = $(this).data("content"),
            ssize = $(this).data("toggle-screen"),
            toggleBreak = _break[ssize];
          if (NioApp.Win.width > toggleBreak) {
            NioApp.Toggle.removed(content, attr);
          }
        });
      });
    };

    // ToggleExpand @v1.0
    NioApp.TGL.expand = function (elm, opt) {
      var toggle = elm ? elm : ".expand",
        def = {
          toggle: true,
        },
        attr = opt ? extend(def, opt) : def;
      $(toggle).on("click", function (e) {
        NioApp.Toggle.trigger($(this).data("target"), attr);
        e.preventDefault();
      });
    };

    // Dropdown Menu @v1.0
    NioApp.TGL.ddmenu = function (elm, opt) {
      var imenu = elm ? elm : ".nk-menu-toggle",
        def = {
          active: "active",
          self: "nk-menu-toggle",
          child: "nk-menu-sub",
        },
        attr = opt ? extend(def, opt) : def;
      $(imenu).on("click", function (e) {
        if (
          NioApp.Win.width < _break.lg ||
          $(this).parents().hasClass(_sidebar)
        ) {
          NioApp.Toggle.dropMenu($(this), attr);
        }
        e.preventDefault();
      });
    };

    // Show Menu @v1.0
    NioApp.TGL.showmenu = function (elm, opt) {
      var toggle = elm ? elm : ".nk-nav-toggle",
        $toggle = $(toggle),
        $contentD = $("[data-content]"),
        toggleBreak = $contentD.hasClass(_header_menu) ? _break.lg : _break.xl,
        toggleOlay = _sidebar + "-overlay",
        toggleClose = {
          profile: true,
          menu: false,
        },
        def = {
          active: "toggle-active",
          content: _sidebar + "-active",
          body: "nav-shown",
          overlay: toggleOlay,
          break: toggleBreak,
          close: toggleClose,
        },
        attr = opt ? extend(def, opt) : def;
      $toggle.on("click", function (e) {
        NioApp.Toggle.trigger($(this).data("target"), attr);
        e.preventDefault();
      });
      $doc.on("mouseup", function (e) {
        if (
          !$toggle.is(e.target) &&
          $toggle.has(e.target).length === 0 &&
          !$contentD.is(e.target) &&
          $contentD.has(e.target).length === 0 &&
          NioApp.Win.width < toggleBreak
        ) {
          NioApp.Toggle.removed($toggle.data("target"), attr);
        }
      });
      $win.on("resize", function () {
        if (
          (NioApp.Win.width < _break.xl || NioApp.Win.width < toggleBreak) &&
          !NioApp.State.isMobile
        ) {
          NioApp.Toggle.removed($toggle.data("target"), attr);
        }
      });
    };

    // Compact Sidebar @v1.0
    NioApp.sbCompact = function () {
      var toggle = ".nk-nav-compact",
        $toggle = $(toggle),
        $content = $("[data-content]"),
        $sidebar = $("." + _sidebar),
        $sidebar_body = $("." + _sidebar + "-body");
      $toggle.on("click", function (e) {
        e.preventDefault();
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
    };

    // Animate FormSearch @v1.0
    NioApp.Ani.formSearch = function (elm, opt) {
      var def = {
          active: "active",
          timeout: 400,
          target: "[data-search]",
        },
        attr = opt ? extend(def, opt) : def;
      var $elem = $(elm),
        $target = $(attr.target);
      if ($elem.exists()) {
        $elem.on("click", function (e) {
          e.preventDefault();
          var $self = $(this),
            the_target = $self.data("target"),
            $self_st = $("[data-search=" + the_target + "]"),
            $self_tg = $("[data-target=" + the_target + "]");
          if (!$self_st.hasClass(attr.active)) {
            $self_tg.add($self_st).addClass(attr.active);
            $self_st.find("input").focus();
          } else {
            $self_tg.add($self_st).removeClass(attr.active);
            setTimeout(function () {
              $self_st.find("input").val("");
            }, attr.timeout);
          }
        });
        $doc.on({
          keyup: function keyup(e) {
            if (e.key === "Escape") {
              $elem.add($target).removeClass(attr.active);
            }
          },
          mouseup: function mouseup(e) {
            if (
              !$target.find("input").val() &&
              !$target.is(e.target) &&
              $target.has(e.target).length === 0 &&
              !$elem.is(e.target) &&
              $elem.has(e.target).length === 0
            ) {
              $elem.add($target).removeClass(attr.active);
            }
          },
        });
      }
    };

    // Animate FormElement @v1.0
    NioApp.Ani.formElm = function (elm, opt) {
      var def = {
          focus: "focused",
        },
        attr = opt ? extend(def, opt) : def;
      if ($(elm).exists()) {
        $(elm).each(function () {
          var $self = $(this);
          if ($self.val()) {
            $self.parent().addClass(attr.focus);
          }
          $self.on({
            focus: function focus() {
              $self.parent().addClass(attr.focus);
            },
            blur: function blur() {
              if (!$self.val()) {
                $self.parent().removeClass(attr.focus);
              }
            },
          });
        });
      }
    };

    // Form Validate @v1.0
    NioApp.Validate = function (elm, opt) {
      if ($(elm).exists()) {
        $(elm).each(function () {
          var def = {
              errorElement: "span",
            },
            attr = opt ? extend(def, opt) : def;
          $(this).validate(attr);
          NioApp.Validate.OnChange(".js-select2");
          NioApp.Validate.OnChange(".date-picker");
          NioApp.Validate.OnChange(".js-tagify");
        });
      }
    };

    //On change validation for third party plugins
    NioApp.Validate.OnChange = function (elm) {
      $(elm).on("change", function () {
        $(this).valid();
      });
    };
    NioApp.Validate.init = function () {
      NioApp.Validate(".form-validate", {
        errorElement: "span",
        errorClass: "invalid",
        errorPlacement: function errorPlacement(error, element) {
          if (element.parents().hasClass("input-group")) {
            error.appendTo(element.parent().parent());
          } else {
            error.appendTo(element.parent());
          }
        },
      });
    };

    // Dropzone @v1.1
    NioApp.Dropzone = function (elm, opt) {
      if ($(elm).exists()) {
        $(elm).each(function () {
          var maxFiles = $(elm).data("max-files"),
            maxFiles = maxFiles ? maxFiles : null;
          var maxFileSize = $(elm).data("max-file-size"),
            maxFileSize = maxFileSize ? maxFileSize : 256;
          var acceptedFiles = $(elm).data("accepted-files"),
            acceptedFiles = acceptedFiles ? acceptedFiles : null;
          var def = {
              autoDiscover: false,
              maxFiles: maxFiles,
              maxFilesize: maxFileSize,
              acceptedFiles: acceptedFiles,
            },
            attr = opt ? extend(def, opt) : def;
          $(this).addClass("dropzone").dropzone(attr);
        });
      }
    };

    // Dropzone Init @v1.0
    NioApp.Dropzone.init = function () {
      NioApp.Dropzone(".upload-zone", {
        url: "/images",
      });
    };

    // Wizard @v1.0
    NioApp.Wizard = function () {
      var $wizard = $(".nk-wizard");
      if ($wizard.exists()) {
        $wizard.each(function () {
          var $self = $(this),
            _self_id = $self.attr("id"),
            $self_id = $("#" + _self_id).show();
          $self_id
            .steps({
              headerTag: ".nk-wizard-head",
              bodyTag: ".nk-wizard-content",
              labels: {
                finish: "Submit",
                next: "Next",
                previous: "Prev",
                loading: "Loading ...",
              },
              titleTemplate: '<span class="number">0#index#</span> #title#',
              onStepChanging: function onStepChanging(
                event,
                currentIndex,
                newIndex
              ) {
                // Allways allow previous action even if the current form is not valid!
                if (currentIndex > newIndex) {
                  return true;
                }
                // Needed in some cases if the user went back (clean up)
                if (currentIndex < newIndex) {
                  // To remove error styles
                  $self_id
                    .find(".body:eq(" + newIndex + ") label.error")
                    .remove();
                  $self_id
                    .find(".body:eq(" + newIndex + ") .error")
                    .removeClass("error");
                }
                $self_id.validate().settings.ignore = ":disabled,:hidden";
                return $self_id.valid();
              },
              onFinishing: function onFinishing(event, currentIndex) {
                $self_id.validate().settings.ignore = ":disabled";
                return $self_id.valid();
              },
              onFinished: function onFinished(event, currentIndex) {
                window.location.href = "#";
              },
            })
            .validate({
              errorElement: "span",
              errorClass: "invalid",
              errorPlacement: function errorPlacement(error, element) {
                error.appendTo(element.parent());
              },
            });
        });
      }
    };

    // DataTable @1.1
    NioApp.DataTable = function (elm, opt) {
      if ($(elm).exists()) {
        $(elm).each(function () {
          var auto_responsive = $(this).data("auto-responsive"),
            has_export =
              typeof opt.buttons !== "undefined" && opt.buttons ? true : false;
          var export_title = $(this).data("export-title")
            ? $(this).data("export-title")
            : "Export";
          var btn = has_export
              ? '<"dt-export-buttons d-flex align-center"<"dt-export-title d-none d-md-inline-block">B>'
              : "",
            btn_cls = has_export ? " with-export" : "";
          var dom_normal =
            '<"row justify-between g-2' +
            btn_cls +
            '"<"col-7 col-sm-4 text-start"f><"col-5 col-sm-8 text-end"<"datatable-filter"<"d-flex justify-content-end g-2"' +
            btn +
            'l>>>><"datatable-wrap my-3"t><"row align-items-center"<"col-7 col-sm-12 col-md-9"p><"col-5 col-sm-12 col-md-3 text-start text-md-end"i>>';
          var dom_separate =
            '<"row justify-between g-2' +
            btn_cls +
            '"<"col-7 col-sm-4 text-start"f><"col-5 col-sm-8 text-end"<"datatable-filter"<"d-flex justify-content-end g-2"' +
            btn +
            'l>>>><"my-3"t><"row align-items-center"<"col-7 col-sm-12 col-md-9"p><"col-5 col-sm-12 col-md-3 text-start text-md-end"i>>';
          var dom = $(this).hasClass("is-separate") ? dom_separate : dom_normal;
          var def = {
              responsive: true,
              autoWidth: false,
              dom: dom,
              language: {
                search: "",
                searchPlaceholder: "Type in to Search",
                lengthMenu:
                  "<span class='d-none d-sm-inline-block'>Show</span><div class='form-control-select'> _MENU_ </div>",
                info: "_START_ -_END_ of _TOTAL_",
                infoEmpty: "0",
                infoFiltered: "( Total _MAX_  )",
                paginate: {
                  first: "First",
                  last: "Last",
                  next: "Next",
                  previous: "Prev",
                },
              },
            },
            attr = opt ? extend(def, opt) : def;
          attr =
            auto_responsive === false
              ? extend(attr, {
                  responsive: false,
                })
              : attr;
          $(this).DataTable(attr);
          $(".dt-export-title").text(export_title);
        });
      }
    };

    // DataTable Init @v1.0
    NioApp.DataTable.init = function () {
      NioApp.DataTable(".datatable-init", {
        responsive: {
          details: true,
        },
      });
      NioApp.DataTable(".datatable-init-export", {
        responsive: {
          details: true,
        },
        buttons: ["copy", "excel", "csv", "pdf", "colvis"],
      });
      $.fn.DataTable.ext.pager.numbers_length = 7;
    };

    // BootStrap Extended
    NioApp.BS.ddfix = function (elm, exc) {
      var dd = elm ? elm : ".dropdown-menu",
        ex = exc
          ? exc
          : "a:not(.clickable), button:not(.clickable), a:not(.clickable) *, button:not(.clickable) *";
      $(dd).on("click", function (e) {
        if (!$(e.target).is(ex)) {
          e.stopPropagation();
          return;
        }
      });
      if (NioApp.State.isRTL) {
        var $dMenu = $(".dropdown-menu");
        $dMenu.each(function () {
          var $self = $(this);
          if (
            $self.hasClass("dropdown-menu-right") &&
            !$self.hasClass("dropdown-menu-center")
          ) {
            $self.prev('[data-toggle="dropdown"]').dropdown({
              popperConfig: {
                placement: "bottom-start",
              },
            });
          } else if (
            !$self.hasClass("dropdown-menu-right") &&
            !$self.hasClass("dropdown-menu-center")
          ) {
            $self.prev('[data-toggle="dropdown"]').dropdown({
              popperConfig: {
                placement: "bottom-end",
              },
            });
          }
        });
      }
    };

    // BootStrap Specific Tab Open
    NioApp.BS.tabfix = function (elm) {
      var tab = elm ? elm : '[data-toggle="modal"]';
      $(tab).on("click", function () {
        var _this = $(this),
          target = _this.data("target"),
          target_href = _this.attr("href"),
          tg_tab = _this.data("tab-target");
        var modal = target ? $body.find(target) : $body.find(target_href);
        if (tg_tab && tg_tab !== "#" && modal) {
          modal.find('[href="' + tg_tab + '"]').tab("show");
        } else if (modal) {
          var tabdef = modal.find(".nk-nav.nav-tabs");
          var link = $(tabdef[0]).find('[data-toggle="tab"]');
          $(link[0]).tab("show");
        }
      });
    };

    // Dark Mode Switch @since v2.0

    // Knob @v1.0
    NioApp.Knob = function (elm, opt) {
      if ($(elm).exists() && typeof $.fn.knob === "function") {
        var def = {
            min: 0,
          },
          attr = opt ? extend(def, opt) : def;
        $(elm).each(function () {
          $(this).knob(attr);
        });
      }
    };
    // Knob Init @v1.0
    NioApp.Knob.init = function () {
      var knob = {
        default: {
          readOnly: true,
          lineCap: "round",
        },
        half: {
          angleOffset: -90,
          angleArc: 180,
          readOnly: true,
          lineCap: "round",
        },
      };
      NioApp.Knob(".knob", knob["default"]);
      NioApp.Knob(".knob-half", knob.half);
    };

    // Range @v1.0.1
    NioApp.Range = function (elm, opt) {
      if ($(elm).exists() && typeof noUiSlider !== "undefined") {
        $(elm).each(function () {
          var $self = $(this),
            self_id = $self.attr("id");
          var _start = $self.data("start"),
            _start = /\s/g.test(_start) ? _start.split(" ") : _start,
            _start = _start ? _start : 0,
            _connect = $self.data("connect"),
            _connect = /\s/g.test(_connect) ? _connect.split(" ") : _connect,
            _connect = typeof _connect == "undefined" ? "lower" : _connect,
            _min = $self.data("min"),
            _min = _min ? _min : 0,
            _max = $self.data("max"),
            _max = _max ? _max : 100,
            _min_distance = $self.data("min-distance"),
            _min_distance = _min_distance ? _min_distance : null,
            _max_distance = $self.data("max-distance"),
            _max_distance = _max_distance ? _max_distance : null,
            _step = $self.data("step"),
            _step = _step ? _step : 1,
            _orientation = $self.data("orientation"),
            _orientation = _orientation ? _orientation : "horizontal",
            _tooltip = $self.data("tooltip"),
            _tooltip = _tooltip ? _tooltip : false;
          console.log(_tooltip);
          var target = document.getElementById(self_id);
          var def = {
              start: _start,
              connect: _connect,
              direction: NioApp.State.isRTL ? "rtl" : "ltr",
              range: {
                min: _min,
                max: _max,
              },
              margin: _min_distance,
              limit: _max_distance,
              step: _step,
              orientation: _orientation,
              tooltips: _tooltip,
            },
            attr = opt ? extend(def, opt) : def;
          noUiSlider.create(target, attr);
        });
      }
    };

    // Range Init @v1.0
    NioApp.Range.init = function () {
      NioApp.Range(".form-control-slider");
      NioApp.Range(".form-range-slider");
    };
    NioApp.Select2.init = function () {
      // NioApp.Select2('.select');
      NioApp.Select2(".js-select2");
    };

    // Slick Slider @v1.0.1
    NioApp.Slick = function (elm, opt) {
      if ($(elm).exists() && typeof $.fn.slick === "function") {
        $(elm).each(function () {
          var def = {
              prevArrow:
                '<div class="slick-arrow-prev"><a href="javascript:void(0);" class="slick-prev"><em class="icon ni ni-chevron-left"></em></a></div>',
              nextArrow:
                '<div class="slick-arrow-next"><a href="javascript:void(0);" class="slick-next"><em class="icon ni ni-chevron-right"></em></a></div>',
              rtl: NioApp.State.isRTL,
            },
            attr = opt ? extend(def, opt) : def;
          $(this).slick(attr);
        });
      }
    };

    // Slick Init @v1.0
    NioApp.Slider.init = function () {
      NioApp.Slick(".slider-init");
    };

    // Magnific Popup @v1.0.0
    NioApp.Lightbox = function (elm, type, opt) {
      if ($(elm).exists()) {
        $(elm).each(function () {
          var def = {};
          if (type == "video" || type == "iframe") {
            def = {
              type: "iframe",
              removalDelay: 160,
              preloader: true,
              fixedContentPos: false,
              callbacks: {
                beforeOpen: function beforeOpen() {
                  this.st.image.markup = this.st.image.markup.replace(
                    "mfp-figure",
                    "mfp-figure mfp-with-anim"
                  );
                  this.st.mainClass = this.st.el.attr("data-effect");
                },
              },
            };
          } else if (type == "content") {
            def = {
              type: "inline",
              preloader: true,
              removalDelay: 400,
              mainClass: "mfp-fade content-popup",
            };
          } else {
            def = {
              type: "image",
              mainClass: "mfp-fade image-popup",
            };
          }
          var attr = opt ? extend(def, opt) : def;
          $(this).magnificPopup(attr);
        });
      }
    };

    // Controls @v1.0.0
    NioApp.Control = function (elm) {
      var control = document.querySelectorAll(elm);
      control.forEach(function (item, index, arr) {
        item.checked ? item.parentNode.classList.add("checked") : null;
        item.addEventListener("change", function () {
          if (item.type == "checkbox") {
            item.checked
              ? item.parentNode.classList.add("checked")
              : item.parentNode.classList.remove("checked");
          }
          if (item.type == "radio") {
            document
              .querySelectorAll('input[name="' + item.name + '"]')
              .forEach(function (item, index, arr) {
                item.parentNode.classList.remove("checked");
              });
            item.checked ? item.parentNode.classList.add("checked") : null;
          }
        });
      });
    };

    // Number Spinner @v1.0
    NioApp.NumberSpinner = function (elm, opt) {
      var plus = document.querySelectorAll("[data-number='plus']");
      var minus = document.querySelectorAll("[data-number='minus']");
      plus.forEach(function (item, index, arr) {
        var parent = plus[index].parentNode;
        plus[index].addEventListener("click", function () {
          var child = plus[index].parentNode.children;
          child.forEach(function (item, index, arr) {
            if (child[index].classList.contains("number-spinner")) {
              var value =
                !child[index].value == "" ? parseInt(child[index].value) : 0;
              var step =
                !child[index].step == "" ? parseInt(child[index].step) : 1;
              var max =
                !child[index].max == "" ? parseInt(child[index].max) : Infinity;
              if (max + 1 > value + step) {
                child[index].value = value + step;
              } else {
                child[index].value = value;
              }
            }
          });
        });
      });
      minus.forEach(function (item, index, arr) {
        var parent = minus[index].parentNode;
        minus[index].addEventListener("click", function () {
          var child = minus[index].parentNode.children;
          child.forEach(function (item, index, arr) {
            if (child[index].classList.contains("number-spinner")) {
              var value =
                !child[index].value == "" ? parseInt(child[index].value) : 0;
              var step =
                !child[index].step == "" ? parseInt(child[index].step) : 1;
              var min =
                !child[index].min == "" ? parseInt(child[index].min) : 0;
              if (min - 1 < value - step) {
                child[index].value = value - step;
              } else {
                child[index].value = value;
              }
            }
          });
        });
      });
    };

    // Stepper @v1.0
    NioApp.Stepper = function (elm, opt) {
      var element = document.querySelectorAll(elm);
      if (element.length > 0) {
        element.forEach(function (item, index) {
          var def = {
              selectors: {
                nav: "stepper-nav",
                progress: "stepper-progress",
                content: "stepper-steps",
                prev: "step-prev",
                next: "step-next",
                submit: "step-submit",
              },
              classes: {
                nav_current: "current",
                nav_done: "done",
                step_active: "active",
                step_done: "done",
                active_step: "active",
              },
              current_step: 1,
            },
            attr = opt ? extend(def, opt) : def;
          NioApp.Custom.Stepper(item, attr);
          NioApp.Validate.OnChange(".js-select2");
          NioApp.Validate.OnChange(".date-picker");
          NioApp.Validate.OnChange(".js-tagify");
        });
      }
    };
    // Stepper Init @v1.0
    NioApp.Stepper.init = function () {
      NioApp.Stepper(".stepper-init");
    };

    // Tagify @v1.0.1
    NioApp.Tagify = function (elm, opt) {
      if ($(elm).exists() && typeof $.fn.tagify === "function") {
        var def,
          attr = opt ? extend(def, opt) : def;
        $(elm).tagify(attr);
      }
    };
    // Tagify Init @v1.0
    NioApp.Tagify.init = function () {
      NioApp.Tagify(".js-tagify");
    };

    // Extra @v1.1
    NioApp.OtherInit = function () {
      NioApp.ClassBody();
      NioApp.PassSwitch();
      NioApp.CurrentLink();
      NioApp.LinkOff(".is-disable");
      NioApp.ClassNavMenu();
      NioApp.SetHW("[data-height]", "height");
      NioApp.SetHW("[data-width]", "width");
      NioApp.NumberSpinner();
      NioApp.Lightbox(".popup-video", "video");
      NioApp.Lightbox(".popup-iframe", "iframe");
      NioApp.Lightbox(".popup-image", "image");
      NioApp.Lightbox(".popup-content", "content");
      NioApp.Control(".custom-control-input");
    };

    // Animate Init @v1.0
    NioApp.Ani.init = function () {
      NioApp.Ani.formElm(".form-control-outlined");
      NioApp.Ani.formSearch(".toggle-search");
    };

    // BootstrapExtend Init @v1.0
    NioApp.BS.init = function () {
      NioApp.BS.menutip("a.nk-menu-link");
      NioApp.BS.tooltip(".nk-tooltip");
      NioApp.BS.tooltip(".btn-tooltip", {
        placement: "top",
      });
      NioApp.BS.tooltip('[data-toggle="tooltip"]');
      NioApp.BS.tooltip('[data-bs-toggle="tooltip"]');
      NioApp.BS.tooltip(".tipinfo,.nk-menu-tooltip", {
        placement: "right",
      });
      NioApp.BS.popover('[data-toggle="popover"]');
      NioApp.BS.popover('[data-bs-toggle="popover"]');
      NioApp.BS.progress("[data-progress]");
      NioApp.BS.fileinput(".form-file-input");
      NioApp.BS.modalfix();
      NioApp.BS.ddfix();
      NioApp.BS.tabfix();
    };

    // Picker Init @v1.0
    NioApp.Picker.init = function () {
      NioApp.Picker.date(".date-picker");
      NioApp.Picker.dob(".date-picker-alt");
      NioApp.Picker.time(".time-picker");
      NioApp.Picker.date(".date-picker-range", {
        todayHighlight: false,
        autoclose: false,
      });
    };

    // Addons @v1
    NioApp.Addons.Init = function () {
      NioApp.Knob.init();
      NioApp.Range.init();
      NioApp.Select2.init();
      NioApp.Dropzone.init();
      NioApp.Slider.init();
      // NioApp.DataTable.init();
      // NioApp.Tagify.init();
    };

    // Toggler @v1
    NioApp.TGL.init = function () {
      NioApp.TGL.content(".toggle");
      NioApp.TGL.expand(".toggle-expand");
      NioApp.TGL.expand(".toggle-opt", {
        toggle: false,
      });
      NioApp.TGL.showmenu(".nk-nav-toggle");
      NioApp.TGL.ddmenu("." + _menu + "-toggle", {
        self: _menu + "-toggle",
        child: _menu + "-sub",
      });
    };
    NioApp.BS.modalOnInit = function () {
      $(".modal").on("shown.bs.modal", function () {
        NioApp.Select2.init();
        NioApp.Validate.init();
      });
    };

    // Initial by default
    /////////////////////////////
    NioApp.init = function () {
      NioApp.coms.docReady.push(NioApp.OtherInit);
      NioApp.coms.docReady.push(NioApp.Prettify);
      NioApp.coms.docReady.push(NioApp.ColorBG);
      NioApp.coms.docReady.push(NioApp.ColorTXT);
      NioApp.coms.docReady.push(NioApp.Copied);
      NioApp.coms.docReady.push(NioApp.Ani.init);
      NioApp.coms.docReady.push(NioApp.TGL.init);
      NioApp.coms.docReady.push(NioApp.BS.init);
      NioApp.coms.docReady.push(NioApp.Validate.init);
      NioApp.coms.docReady.push(NioApp.Picker.init);
      NioApp.coms.docReady.push(NioApp.Addons.Init);
      NioApp.coms.docReady.push(NioApp.Wizard);
      NioApp.coms.docReady.push(NioApp.sbCompact);
      NioApp.coms.docReady.push(NioApp.Stepper.init);
      NioApp.coms.winLoad.push(NioApp.ModeSwitch);
    };
    NioApp.init();
  });
}
