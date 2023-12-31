import jQuery from "jquery";

export default function NioApp(i, w) {
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
            return new bootstrap.Tooltip(e, a);
          });
    }),
    (i.BS.menutip = function (e) {
      i.BS.tooltip(e, { boundary: "window", placement: "right" });
    }),
    (i.BS.popover = function (e) {
      [].slice
        .call(document.querySelectorAll(e || '[data-bs-toggle="popover"]'))
        .map(function (e) {
          return new bootstrap.Popover(e);
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
