webpackJsonp([8], {
  698: function(n, l, t) {
    'use strict';
    function e(n) {
      return h._22(
        2,
        [
          h._18(402653184, 1, { barXRef: 0 }),
          h._18(402653184, 2, { barYRef: 0 }),
          h._18(402653184, 3, { thumbXRef: 0 }),
          h._18(402653184, 4, { thumbYRef: 0 }),
          h._18(402653184, 5, { viewRef: 0 }),
          (n()(),
          h.Z(
            5,
            0,
            null,
            null,
            6,
            'div',
            [['class', 'ng-scrollbar-container']],
            [[2, 'ng-scrollbar-autohide', null]],
            null,
            null,
            null,
            null,
          )),
          (n()(),
          h.Z(
            6,
            0,
            [[1, 0], ['barX', 1]],
            null,
            1,
            'div',
            [],
            [[8, 'className', 0], [2, 'ng-scrollbar-disabled', null]],
            null,
            null,
            null,
            null,
          )),
          (n()(), h.Z(7, 0, [[3, 0], ['thumbX', 1]], null, 0, 'div', [], [[8, 'className', 0]], null, null, null, null)),
          (n()(),
          h.Z(
            8,
            0,
            [[2, 0], ['barY', 1]],
            null,
            1,
            'div',
            [],
            [[8, 'className', 0], [2, 'ng-scrollbar-disabled', null]],
            null,
            null,
            null,
            null,
          )),
          (n()(), h.Z(9, 0, [[4, 0], ['thumbY', 1]], null, 0, 'div', [], [[8, 'className', 0]], null, null, null, null)),
          (n()(), h.Z(10, 0, [[5, 0], ['view', 1]], null, 1, 'div', [], [[8, 'className', 0]], null, null, null, null)),
          h._12(null, 0),
        ],
        null,
        function(n, l) {
          var t = l.component;
          n(l, 5, 0, t.autoHide);
          n(l, 6, 0, h._2(1, 'ng-scrollbar -horizontal ', t.barClass, ''), !t.trackX);
          n(l, 7, 0, h._2(1, 'ng-scrollbar-thumb ', t.thumbClass, ''));
          n(l, 8, 0, h._2(1, 'ng-scrollbar -vertical ', t.barClass, ''), !t.trackY);
          n(l, 9, 0, h._2(1, 'ng-scrollbar-thumb ', t.thumbClass, ''));
          n(l, 10, 0, h._2(1, 'ng-scrollbar-view ', t.viewClass, ''));
        },
      );
    }
    function o(n) {
      return h._22(
        2,
        [(n()(), h.Z(0, 0, null, null, 1, 'div', [['class', 'slide-zoom']], null, null, null, null, null)), h._12(null, 0)],
        null,
        null,
      );
    }
    function i(n) {
      return h._22(
        2,
        [
          (n()(), h.Z(0, 0, null, null, 3, 'div', [['class', 'swiper-container']], [[1, 'dir', 0]], null, null, null, null)),
          (n()(), h.Z(1, 0, null, null, 1, 'div', [['class', 'swiper-wrapper']], null, null, null, null, null)),
          h._12(null, 0),
          (n()(), h.Z(3, 0, null, null, 0, 'div', [['class', 'swiper-pagination']], [[2, 'hide', null]], null, null, null, null)),
        ],
        null,
        function(n, l) {
          var t = l.component;
          n(l, 0, 0, t._rtl ? 'rtl' : null);
          n(l, 3, 0, !t.pager);
        },
      );
    }
    function u(n) {
      return h._22(
        0,
        [
          (n()(),
          h.Z(
            0,
            0,
            null,
            null,
            7,
            'button',
            [['event', 'press'], ['icon-only', ''], ['ion-button', ''], ['navTooltip', '']],
            null,
            [[null, 'click'], [null, 'press'], [null, 'mouseenter'], [null, 'mouseleave']],
            function(n, l, t) {
              var e = !0,
                o = n.component;
              if ('click' === l) {
                e = !1 !== h._13(n, 2).onClick() && e;
              }
              if ('press' === l) {
                e = !1 !== h._13(n, 2).onPress() && e;
              }
              if ('mouseenter' === l) {
                e = !1 !== h._13(n, 2).onMouseEnter() && e;
              }
              if ('mouseleave' === l) {
                e = !1 !== h._13(n, 2).onMouseLeave() && e;
              }
              if ('click' === l) {
                e = !1 !== o.openListPicker(t) && e;
              }
              return e;
            },
            R.b,
            R.a,
          )),
          h.Y(1, 1097728, [[3, 4]], 0, A.a, [[8, ''], W.a, h.j, h.z], null, null),
          h.Y(
            2,
            4210688,
            null,
            0,
            N.a,
            [h.j, h.f, B.a, h.i],
            { tooltip: [0, 'tooltip'], event: [1, 'event'], navTooltip: [2, 'navTooltip'] },
            null,
          ),
          h._14(131072, H.a, [V.a, h.g]),
          (n()(), h._20(-1, 0, ['\n        '])),
          (n()(),
          h.Z(
            5,
            0,
            null,
            0,
            1,
            'ion-icon',
            [['name', 'bookmark'], ['role', 'img']],
            [[4, 'color', null], [2, 'hide', null]],
            null,
            null,
            null,
            null,
          )),
          h.Y(6, 147456, null, 0, U.a, [W.a, h.j, h.z], { name: [0, 'name'] }, null),
          (n()(), h._20(-1, 0, ['\n      '])),
        ],
        function(n, l) {
          n(l, 2, 0, h._21(l, 2, 0, h._13(l, 3).transform('BOOKMARK_BUTTON')), 'press', '');
          n(l, 6, 0, 'bookmark');
        },
        function(n, l) {
          n(l, 5, 0, l.component.settings.color, h._13(l, 6)._hidden);
        },
      );
    }
    function r(n) {
      return h._22(
        0,
        [
          (n()(),
          h.Z(
            0,
            0,
            null,
            null,
            7,
            'button',
            [['event', 'press'], ['icon-only', ''], ['ion-button', ''], ['navTooltip', '']],
            null,
            [[null, 'click'], [null, 'press'], [null, 'mouseenter'], [null, 'mouseleave']],
            function(n, l, t) {
              var e = !0,
                o = n.component;
              if ('click' === l) {
                e = !1 !== h._13(n, 2).onClick() && e;
              }
              if ('press' === l) {
                e = !1 !== h._13(n, 2).onPress() && e;
              }
              if ('mouseenter' === l) {
                e = !1 !== h._13(n, 2).onMouseEnter() && e;
              }
              if ('mouseleave' === l) {
                e = !1 !== h._13(n, 2).onMouseLeave() && e;
              }
              if ('click' === l) {
                e = !1 !== o.showSeries(o.story) && e;
              }
              return e;
            },
            R.b,
            R.a,
          )),
          h.Y(1, 1097728, [[3, 4]], 0, A.a, [[8, ''], W.a, h.j, h.z], null, null),
          h.Y(
            2,
            4210688,
            null,
            0,
            N.a,
            [h.j, h.f, B.a, h.i],
            { tooltip: [0, 'tooltip'], event: [1, 'event'], navTooltip: [2, 'navTooltip'] },
            null,
          ),
          h._14(131072, H.a, [V.a, h.g]),
          (n()(), h._20(-1, 0, ['\n        '])),
          (n()(),
          h.Z(
            5,
            0,
            null,
            0,
            1,
            'ion-icon',
            [['name', 'albums'], ['role', 'img']],
            [[4, 'color', null], [2, 'hide', null]],
            null,
            null,
            null,
            null,
          )),
          h.Y(6, 147456, null, 0, U.a, [W.a, h.j, h.z], { name: [0, 'name'] }, null),
          (n()(), h._20(-1, 0, ['\n      '])),
        ],
        function(n, l) {
          n(l, 2, 0, h._21(l, 2, 0, h._13(l, 3).transform('STORYDETAIL_SERIES')), 'press', '');
          n(l, 6, 0, 'albums');
        },
        function(n, l) {
          n(l, 5, 0, l.component.settings.color, h._13(l, 6)._hidden);
        },
      );
    }
    function s(n) {
      return h._22(
        0,
        [
          (n()(), h.Z(0, 0, null, null, 7, null, null, null, null, null, null, null)),
          (n()(), h._20(-1, null, ['\n        '])),
          (n()(), h.Z(2, 0, null, null, 4, 'ng-scrollbar', [['autoHide', 'true']], null, null, null, e, $)),
          h.Y(3, 4374528, null, 0, v, [h.u, h.A, f.c], { autoHide: [0, 'autoHide'], thumbClass: [1, 'thumbClass'] }, null),
          (n()(), h._20(-1, 0, ['\n          '])),
          (n()(), h.Z(5, 0, null, 0, 0, 'p', [], [[8, 'innerHTML', 1]], null, null, null, null)),
          (n()(), h._20(-1, 0, ['\n        '])),
          (n()(), h._20(-1, null, ['\n      '])),
        ],
        function(n, l) {
          n(l, 3, 0, 'true', l.component.settings.theme);
        },
        function(n, l) {
          n(l, 5, 0, l.parent.context.$implicit.content);
        },
      );
    }
    function a(n) {
      return h._22(
        0,
        [
          (n()(), h.Z(0, 0, null, null, 5, 'ion-slide', [], null, null, null, o, K)),
          h.Y(1, 180224, null, 0, D.a, [h.j, h.z, q.a], null, null),
          (n()(), h._20(-1, 0, ['\n      '])),
          (n()(), h.U(16777216, null, 0, 1, null, s)),
          h.Y(4, 16384, null, 0, f.j, [h.I, h.F], { ngIf: [0, 'ngIf'] }, null),
          (n()(), h._20(-1, 0, ['\n    '])),
        ],
        function(n, l) {
          n(l, 4, 0, l.component.Math.abs(h._13(l.parent, 38).getActiveIndex() - l.context.index) < 5);
        },
        null,
      );
    }
    function c(n) {
      return h._22(
        0,
        [
          (n()(),
          h.Z(
            0,
            0,
            null,
            null,
            2,
            'ion-range',
            [['min', '1'], ['pin', 'true'], ['step', '1']],
            [[2, 'range-disabled', null], [2, 'range-pressed', null], [2, 'range-has-pin', null]],
            [[null, 'ionChange']],
            function(n, l, t) {
              var e = !0;
              if ('ionChange' === l) {
                e = !1 !== h._13(n.parent, 38).slideTo(t.value - 1) && e;
              }
              return e;
            },
            J.b,
            J.a,
          )),
          h._17(
            5120,
            null,
            G.h,
            function(n) {
              return [n];
            },
            [Q.a],
          ),
          h.Y(
            2,
            1228800,
            [[2, 4], ['range', 4]],
            0,
            Q.a,
            [nn.a, ln.a, [2, tn.a], W.a, B.a, h.j, h.z, en.a, h.g],
            { min: [0, 'min'], max: [1, 'max'], step: [2, 'step'], snaps: [3, 'snaps'], pin: [4, 'pin'] },
            { ionChange: 'ionChange' },
          ),
        ],
        function(n, l) {
          var t = l.component;
          n(l, 2, 0, '1', t.slides.length, '1', t.slides.length < 15, 'true');
        },
        function(n, l) {
          n(l, 0, 0, h._13(l, 2)._disabled, h._13(l, 2)._pressed, h._13(l, 2)._pin);
        },
      );
    }
    function p(n) {
      return h._22(
        0,
        [
          h._18(402653184, 1, { slidesElement: 0 }),
          h._18(671088640, 2, { range: 0 }),
          (n()(), h.Z(2, 0, null, null, 30, 'ion-header', [['no-border', '']], [[8, 'className', 0]], null, null, null, null)),
          h.Y(3, 16384, null, 0, on.a, [W.a, h.j, h.z, [2, un.a]], null, null),
          (n()(), h._20(-1, null, ['\n  '])),
          (n()(),
          h.Z(
            5,
            0,
            null,
            null,
            26,
            'ion-navbar',
            [['class', 'toolbar']],
            [[4, 'color', null], [4, 'background', null], [8, 'hidden', 0], [2, 'statusbar-padding', null]],
            null,
            null,
            rn.b,
            rn.a,
          )),
          h.Y(6, 49152, null, 0, sn.a, [an.a, [2, un.a], [2, cn.a], W.a, h.j, h.z], null, null),
          (n()(), h._20(-1, 3, ['\n    '])),
          (n()(), h.Z(8, 0, null, 3, 2, 'ion-title', [], null, null, null, pn.b, pn.a)),
          h.Y(9, 49152, null, 0, hn.a, [W.a, h.j, h.z, [2, dn.a], [2, sn.a]], null, null),
          (n()(), h._20(10, 0, ['\n        ', '\n    '])),
          (n()(), h._20(-1, 3, ['\n    '])),
          (n()(), h.Z(12, 0, null, 2, 18, 'ion-buttons', [['end', '']], null, null, null, null, null)),
          h.Y(13, 16384, null, 1, fn.a, [W.a, h.j, h.z, [2, dn.a], [2, sn.a]], null, null),
          h._18(603979776, 3, { _buttons: 1 }),
          (n()(), h._20(-1, null, ['\n\n      '])),
          (n()(), h.U(16777216, null, null, 1, null, u)),
          h.Y(17, 16384, null, 0, f.j, [h.I, h.F], { ngIf: [0, 'ngIf'] }, null),
          (n()(), h._20(-1, null, ['\n      \n      '])),
          (n()(), h.U(16777216, null, null, 1, null, r)),
          h.Y(20, 16384, null, 0, f.j, [h.I, h.F], { ngIf: [0, 'ngIf'] }, null),
          (n()(), h._20(-1, null, ['\n\n      '])),
          (n()(),
          h.Z(
            22,
            0,
            null,
            null,
            7,
            'button',
            [['event', 'press'], ['icon-only', ''], ['ion-button', ''], ['navTooltip', '']],
            null,
            [[null, 'click'], [null, 'press'], [null, 'mouseenter'], [null, 'mouseleave']],
            function(n, l, t) {
              var e = !0,
                o = n.component;
              if ('click' === l) {
                e = !1 !== h._13(n, 24).onClick() && e;
              }
              if ('press' === l) {
                e = !1 !== h._13(n, 24).onPress() && e;
              }
              if ('mouseenter' === l) {
                e = !1 !== h._13(n, 24).onMouseEnter() && e;
              }
              if ('mouseleave' === l) {
                e = !1 !== h._13(n, 24).onMouseLeave() && e;
              }
              if ('click' === l) {
                e = !1 !== o.showInfo(o.story) && e;
              }
              return e;
            },
            R.b,
            R.a,
          )),
          h.Y(23, 1097728, [[3, 4]], 0, A.a, [[8, ''], W.a, h.j, h.z], null, null),
          h.Y(
            24,
            4210688,
            null,
            0,
            N.a,
            [h.j, h.f, B.a, h.i],
            { tooltip: [0, 'tooltip'], event: [1, 'event'], navTooltip: [2, 'navTooltip'] },
            null,
          ),
          h._14(131072, H.a, [V.a, h.g]),
          (n()(), h._20(-1, 0, ['\n        '])),
          (n()(),
          h.Z(
            27,
            0,
            null,
            0,
            1,
            'ion-icon',
            [['name', 'information-circle'], ['role', 'img']],
            [[4, 'color', null], [2, 'hide', null]],
            null,
            null,
            null,
            null,
          )),
          h.Y(28, 147456, null, 0, U.a, [W.a, h.j, h.z], { name: [0, 'name'] }, null),
          (n()(), h._20(-1, 0, ['\n      '])),
          (n()(), h._20(-1, null, ['\n\n    '])),
          (n()(), h._20(-1, 3, ['\n  '])),
          (n()(), h._20(-1, null, ['\n'])),
          (n()(), h._20(-1, null, ['\n\n'])),
          (n()(),
          h.Z(
            34,
            0,
            null,
            null,
            9,
            'ion-content',
            [['fullscreen', 'true']],
            [[2, 'statusbar-padding', null], [2, 'has-refresher', null]],
            null,
            null,
            bn.b,
            bn.a,
          )),
          h.Y(
            35,
            4374528,
            null,
            0,
            _n.a,
            [W.a, B.a, en.a, h.j, h.z, an.a, gn.a, h.u, [2, un.a], [2, cn.a]],
            { fullscreen: [0, 'fullscreen'] },
            null,
          ),
          (n()(), h._20(-1, 1, ['\n\n  '])),
          (n()(),
          h.Z(
            37,
            0,
            null,
            0,
            5,
            'ion-slides',
            [['ion-fixed', '']],
            [
              [4, 'fontSize', null],
              [4, 'lineHeight', null],
              [4, 'fontFamily', null],
              [4, 'textAlign', null],
              [4, 'background', null],
              [4, 'color', null],
            ],
            [[null, 'ionSlideDidChange'], [null, 'click']],
            function(n, l, t) {
              var e = !0,
                o = n.component;
              if ('ionSlideDidChange' === l) {
                e = !1 !== o.slideChanged() && e;
              }
              if ('click' === l) {
                e = !1 !== o.clickSlides(t) && e;
              }
              return e;
            },
            i,
            mn,
          )),
          h.Y(
            38,
            1228800,
            [[1, 4], ['slidesElement', 4]],
            0,
            q.a,
            [W.a, B.a, h.u, [2, un.a], h.j, h.z],
            { dir: [0, 'dir'], slidesPerView: [1, 'slidesPerView'] },
            { ionSlideDidChange: 'ionSlideDidChange' },
          ),
          (n()(), h._20(-1, 0, ['\n\n    '])),
          (n()(), h.U(16777216, null, 0, 1, null, a)),
          h.Y(41, 802816, null, 0, f.i, [h.I, h.F, h.p], { ngForOf: [0, 'ngForOf'] }, null),
          (n()(), h._20(-1, 0, ['\n  '])),
          (n()(), h._20(-1, 1, ['\n\n'])),
          (n()(), h._20(-1, null, ['\n\n'])),
          (n()(),
          h.Z(
            45,
            0,
            null,
            null,
            14,
            'div',
            [],
            [[8, 'className', 0], [4, 'background', null], [4, 'color', null]],
            null,
            null,
            null,
            null,
          )),
          (n()(), h._20(-1, null, ['\n\n  '])),
          (n()(),
          h.Z(
            47,
            0,
            null,
            null,
            5,
            'button',
            [['clear', ''], ['icon-only', ''], ['ion-button', '']],
            null,
            [[null, 'click']],
            function(n, l, t) {
              var e = !0;
              if ('click' === l) {
                e = !1 !== n.component.showPopover(t) && e;
              }
              return e;
            },
            R.b,
            R.a,
          )),
          h.Y(48, 1097728, null, 0, A.a, [[8, ''], W.a, h.j, h.z], { clear: [0, 'clear'] }, null),
          (n()(), h._20(-1, 0, ['\n    '])),
          (n()(),
          h.Z(
            50,
            0,
            null,
            0,
            1,
            'ion-icon',
            [['name', 'settings'], ['role', 'img']],
            [[4, 'color', null], [2, 'hide', null]],
            null,
            null,
            null,
            null,
          )),
          h.Y(51, 147456, null, 0, U.a, [W.a, h.j, h.z], { name: [0, 'name'] }, null),
          (n()(), h._20(-1, 0, ['\n  '])),
          (n()(), h._20(-1, null, ['\n\n  '])),
          (n()(), h.U(16777216, null, null, 1, null, c)),
          h.Y(55, 16384, null, 0, f.j, [h.I, h.F], { ngIf: [0, 'ngIf'] }, null),
          (n()(), h._20(-1, null, ['\n\n  '])),
          (n()(), h.Z(57, 0, null, null, 1, 'span', [['class', 'count']], null, null, null, null, null)),
          (n()(), h._20(58, null, ['', ' / ', ''])),
          (n()(), h._20(-1, null, ['\n'])),
          (n()(), h._20(-1, null, ['\n'])),
        ],
        function(n, l) {
          var t = l.component;
          n(l, 17, 0, t.user.isLoggedIn());
          n(l, 20, 0, (null == t.story ? null : t.story.series) && !t.appSettings.allSettings.offlineMode);
          n(l, 24, 0, h._21(l, 24, 0, h._13(l, 25).transform('STORY_TOOLTIP_SHOWINFO')), 'press', '');
          n(l, 28, 0, 'information-circle');
          n(l, 35, 0, 'true');
          n(l, 38, 0, t.dir, t.slidesPerView);
          n(l, 41, 0, t.slides);
          n(l, 48, 0, '');
          n(l, 51, 0, 'settings');
          n(l, 55, 0, t.slides.length > 1);
        },
        function(n, l) {
          var t = l.component;
          n(l, 2, 0, t.fullscreen ? 'fullscreen' : '');
          n(l, 5, 0, t.settings.color, t.settings.background, h._13(l, 6)._hidden, h._13(l, 6)._sbPadding);
          n(l, 10, 0, t.story.title);
          n(l, 27, 0, t.settings.color, h._13(l, 28)._hidden);
          n(l, 34, 0, h._13(l, 35).statusbarPadding, h._13(l, 35)._hasRefresher);
          n(
            l,
            37,
            0,
            t.settings.fontsize + 'px',
            t.settings.lineheight + 'px',
            t.settings.font + ', sans-serif',
            t.settings.textalign,
            t.settings.background,
            t.settings.color,
          );
          n(l, 45, 0, h._2(1, 'pagination ', t.fullscreen ? 'fullscreen' : '', ''), t.settings.background, t.settings.color);
          n(l, 50, 0, t.settings.color, h._13(l, 51)._hidden);
          n(l, 58, 0, t.Math.min(t.slides.length, h._13(l, 38).getActiveIndex() + 1), t.slides.length);
        },
      );
    }
    Object.defineProperty(l, '__esModule', { value: !0 });
    var h = t(1),
      d = (t(0), t(57), t(50)),
      f = (t(706), t(18)),
      b = t(145),
      _ = t(396),
      g = t(397),
      m = t(398),
      v = (function() {
        function n(n, l, t) {
          (this.zone = n),
            (this.renderer = l),
            (this.document = t),
            (this._thumbSizeY = 0),
            (this._thumbSizeX = 0),
            (this._trackTopMax = 0),
            (this._trackLeftMax = 0),
            (this._scrollLeftMax = 0),
            (this._scrollTopMax = 0),
            (this._naturalThumbSizeY = 0),
            (this._naturalThumbSizeX = 0),
            (this._prevPageY = 0),
            (this._prevPageX = 0),
            (this._currXPos = 0),
            (this._currYPos = 0),
            (this._minThumbSize = 20),
            (this.autoUpdate = !0),
            (this.autoHide = !1),
            (this.trackX = !1),
            (this.trackY = !0),
            (this.scrollState = new h.l());
        }
        return (
          (n.prototype.ngAfterViewInit = function() {
            var n = this;
            this.zone.runOutsideAngular(function() {
              (n.barX = n.barXRef.nativeElement),
                (n.barY = n.barYRef.nativeElement),
                (n.thumbX = n.thumbXRef.nativeElement),
                (n.thumbY = n.thumbYRef.nativeElement),
                (n.view = n.viewRef.nativeElement),
                n.hideNativeScrollbars(),
                n.scrollWorker(null),
                (n._scrollSub$ = Object(_.fromEvent)(n.view, 'scroll', function(l) {
                  return n.scrollWorker(l);
                }).subscribe()),
                n.trackX &&
                  ((n._barXSub$ = Object(_.fromEvent)(n.barX, 'mousedown', function(l) {
                    return n.barXWorker(l);
                  }).subscribe()),
                  (n._thumbXSub$ = Object(_.fromEvent)(n.thumbX, 'mousedown', function(l) {
                    return n.thumbXWorker(l);
                  }).subscribe())),
                n.trackY &&
                  ((n._barYSub$ = Object(_.fromEvent)(n.barY, 'mousedown', function(l) {
                    return n.barYWorker(l);
                  }).subscribe()),
                  (n._thumbYSub$ = Object(_.fromEvent)(n.thumbY, 'mousedown', function(l) {
                    return n.thumbYWorker(l);
                  }).subscribe())),
                n.autoUpdate &&
                  ((n._observer = new MutationObserver(function() {
                    return n.update();
                  })),
                  n._observer.observe(n.view, { subtree: !0, childList: !0 }));
            });
          }),
          (n.prototype.ngOnDestroy = function() {
            this._scrollSub$ && this._scrollSub$.unsubscribe(),
              this.trackX && (this._barXSub$.unsubscribe(), this._thumbXSub$.unsubscribe()),
              this.trackY && (this._barYSub$.unsubscribe(), this._thumbYSub$.unsubscribe()),
              this._observer && this._observer.disconnect();
          }),
          (n.prototype.scrollXTo = function(n, l) {
            var t = this;
            void 0 === l && (l = 200),
              this.zone.runOutsideAngular(function() {
                Object(b.of)(l)
                  .pipe(
                    Object(m.takeWhile)(function() {
                      return l > 0;
                    }),
                    Object(m.expand)(function(e) {
                      if (e > 0) {
                        return (
                          t.renderer.setProperty(t.view, 'scrollLeft', t.view.scrollLeft + ((n - t.view.scrollLeft) / e) * 10),
                          Object(b.of)(e - 10).pipe(Object(m.delay)(10))
                        );
                      }
                      return (l = e), Object(g.empty)();
                    }),
                  )
                  .subscribe();
              });
          }),
          (n.prototype.scrollYTo = function(n, l) {
            var t = this;
            void 0 === l && (l = 200),
              this.zone.runOutsideAngular(function() {
                Object(b.of)(l)
                  .pipe(
                    Object(m.takeWhile)(function() {
                      return l > 0;
                    }),
                    Object(m.expand)(function(e) {
                      if (e > 0) {
                        return (
                          t.renderer.setProperty(t.view, 'scrollTop', t.view.scrollTop + ((n - t.view.scrollTop) / e) * 10),
                          Object(b.of)(e - 10).pipe(Object(m.delay)(10))
                        );
                      }
                      return (l = e), Object(g.empty)();
                    }),
                  )
                  .subscribe();
              });
          }),
          (n.prototype.update = function() {
            this.setThumbXPosition(this._currXPos, this.calculateThumbXSize()),
              this.setThumbYPosition(this._currYPos, this.calculateThumbYSize());
          }),
          (n.prototype.scrollWorker = function(n) {
            (this._thumbSizeX = this.thumbX.clientWidth),
              (this._thumbSizeY = this.thumbY.clientHeight),
              (this._trackLeftMax = this.barX.clientWidth - this._thumbSizeX),
              (this._trackTopMax = this.barY.clientHeight - this._thumbSizeY);
            var l = (this.view.scrollTop * this._trackTopMax) / this._scrollTopMax;
            this.setThumbXPosition((this.view.scrollLeft * this._trackLeftMax) / this._scrollLeftMax, this.calculateThumbXSize()),
              this.setThumbYPosition(l, this.calculateThumbYSize()),
              this.scrollState.emit(n);
          }),
          (n.prototype.barXWorker = function(n) {
            if (n.target === n.currentTarget) {
              this.renderer.setProperty(
                this.view,
                'scrollLeft',
                (((100 * (n.offsetX - 0.5 * this._naturalThumbSizeX)) / this.barX.clientWidth) * this.view.scrollWidth) / 100,
              );
            }
          }),
          (n.prototype.barYWorker = function(n) {
            if (n.target === n.currentTarget) {
              this.renderer.setProperty(
                this.view,
                'scrollTop',
                (((100 * (n.offsetY - 0.5 * this._naturalThumbSizeY)) / this.barY.clientHeight) * this.view.scrollHeight) / 100,
              );
            }
          }),
          (n.prototype.thumbXWorker = function(n) {
            var l = this;
            this.document.onselectstart = function() {
              return !1;
            };
            var t = Object(_.fromEvent)(this.document.body, 'mousemove', function(t) {
                l._prevPageX = l._thumbSizeX - n.offsetX;
                var e = t.clientX - l.barX.getBoundingClientRect().left;
                l.renderer.setProperty(l.view, 'scrollLeft', (l._scrollLeftMax * (e - (l._thumbSizeX - l._prevPageX))) / l._trackLeftMax);
              }).subscribe(),
              e = Object(_.fromEvent)(this.document.body, 'mouseup', function() {
                (l.document.onselectstart = null), t.unsubscribe(), e.unsubscribe(), (l._prevPageX = 0);
              }).subscribe();
          }),
          (n.prototype.thumbYWorker = function(n) {
            var l = this;
            this.document.onselectstart = function() {
              return !1;
            };
            var t = Object(_.fromEvent)(this.document.body, 'mousemove', function(t) {
                l._prevPageY = l._thumbSizeY - n.offsetY;
                var e = t.clientY - l.barY.getBoundingClientRect().top;
                l.renderer.setProperty(l.view, 'scrollTop', (l._scrollTopMax * (e - (l._thumbSizeY - l._prevPageY))) / l._trackTopMax);
              }).subscribe(),
              e = Object(_.fromEvent)(this.document.body, 'mouseup', function() {
                (l.document.onselectstart = null), t.unsubscribe(), e.unsubscribe(), (l._prevPageY = 0);
              }).subscribe();
          }),
          (n.prototype.calculateThumbXSize = function() {
            return (
              (this._naturalThumbSizeX = (this.barX.clientWidth / this.view.scrollWidth) * this.barX.clientWidth),
              (this._scrollLeftMax = this.view.scrollWidth - this.view.clientWidth),
              this.scrollBoundaries(this._naturalThumbSizeX, this._scrollLeftMax)
            );
          }),
          (n.prototype.calculateThumbYSize = function() {
            return (
              (this._naturalThumbSizeY = (this.barY.clientHeight / this.view.scrollHeight) * this.barY.clientHeight),
              (this._scrollTopMax = this.view.scrollHeight - this.view.clientHeight),
              this.scrollBoundaries(this._naturalThumbSizeY, this._scrollTopMax)
            );
          }),
          (n.prototype.scrollBoundaries = function(n, l) {
            return n < this._minThumbSize ? this._minThumbSize : l ? n : 0;
          }),
          (n.prototype.setThumbXPosition = function(n, l) {
            var t = 'translate3d(' + n + 'px, 0, 0)';
            this.renderer.setStyle(this.thumbX, 'webkitTransform', t),
              this.renderer.setStyle(this.thumbX, 'transform', t),
              this.renderer.setStyle(this.thumbX, 'width', l + 'px'),
              (this._currXPos = n);
          }),
          (n.prototype.setThumbYPosition = function(n, l) {
            var t = 'translate3d(0, ' + n + 'px, 0)';
            this.renderer.setStyle(this.thumbY, 'webkitTransform', t),
              this.renderer.setStyle(this.thumbY, 'transform', t),
              this.renderer.setStyle(this.thumbY, 'height', l + 'px'),
              (this._currYPos = n);
          }),
          (n.prototype.hideNativeScrollbars = function() {
            var n = 'calc(100% + ' + this.getNativeScrollbarWidth() + 'px)';
            this.renderer.setStyle(this.view, 'width', n), this.renderer.setStyle(this.view, 'height', n);
          }),
          (n.prototype.getNativeScrollbarWidth = function() {
            var n = this.document.createElement('div');
            (n.style.position = 'absolute'),
              (n.style.top = '-9999px'),
              (n.style.width = '100px'),
              (n.style.height = '100px'),
              (n.style.overflow = 'scroll'),
              (n.style.msOverflowStyle = 'scrollbar'),
              this.document.body.appendChild(n);
            var l = n.offsetWidth - n.clientWidth;
            return this.document.body.removeChild(n), l;
          }),
          n
        );
      })(),
      y = (function() {
        return function() {};
      })(),
      k = (t(41), t(213)),
      w = t(69),
      x =
        (t(190),
        (function() {
          function n(n, l, t, e, o, i, u, r, s, a, c, p) {
            var h = this;
            (this.navCtrl = n),
              (this.platform = l),
              (this.storage = t),
              (this.appSettings = e),
              (this.user = o),
              (this.stories = i),
              (this.analytics = u),
              (this.popoverCtrl = r),
              (this.toastCtrl = s),
              (this.androidFullScreen = a),
              (this.Math = Math),
              (this.slides = []),
              (this.dir = 'ltr'),
              (this.slidesPerView = 1),
              (this.fullscreen = !1),
              (this.firstTimeNextPage = !0),
              (this.settings = {
                fontsize: 15,
                lineheight: 21.5,
                theme: 'black',
                color: 'rgb(255,255,255)',
                background: 'rgb(0,0,0)',
                font: 'sans-serif',
                textalign: 'justify',
                lowcontrast: !1,
              }),
              (this.dir = l.dir()),
              (this.story = p.get('story')),
              (this.fullscreen = p.get('fullscreen') || this.fullscreen);
            var d = p.get('loader');
            d && d.dismiss(),
              c.get(['STORY_ENDOFSERIES', 'CLOSE_BUTTON']).subscribe(function(n) {
                h.translations = n;
              }),
              this.storage.get(w.g).then(function(n) {
                n && (h.settings = n);
              }),
              this.story.cached
                ? this.addSlides()
                : this.stories.getById(this.story.id).subscribe(function(n) {
                    n
                      ? ((h.story.series = n.series),
                        (h.story.length = n.length),
                        (h.story.tags = n.tags),
                        (h.story.content = n.content),
                        (h.story.cached = !0),
                        h.stories.cache(h.story),
                        h.addSlides())
                      : h.navCtrl.pop();
                  }),
              this.storage.get(w.c).then(function(n) {
                n || (n = []), n.indexOf(h.story.id) > -1 && n.splice(n.indexOf(h.story.id), 1), n.push(h.story.id), h.storage.set(w.c, n);
              });
          }
          return (
            (n.prototype.addSlides = function() {
              var n = this;
              this.story.content.forEach(function(l, t) {
                return n.slides.push({ content: l, page: t, desktoppage: t });
              });
            }),
            (n.prototype.ionViewWillEnter = function() {
              this.story.currentpage > 0 && this.slidesElement && this.slidesElement.slideTo(this.story.currentpage, 0);
            }),
            (n.prototype.ionViewDidEnter = function() {
              var n = this;
              setTimeout(function() {
                n.fullscreen ? n.androidFullScreen.immersiveMode() : n.androidFullScreen.showUnderSystemUI();
              }, 10),
                this.analytics.track('StoryView');
            }),
            (n.prototype.ionViewWillLeave = function() {
              this.androidFullScreen.showSystemUI();
            }),
            (n.prototype.clickSlides = function(n) {
              n.clientX < this.platform.width() / 4
                ? this.slidesElement.slidePrev()
                : n.clientX > (3 * this.platform.width()) / 4
                ? (this.firstTimeNextPage && !this.fullscreen && this.immersive(),
                  this.slidesElement.slideNext(),
                  (this.firstTimeNextPage = !1))
                : this.immersive();
            }),
            (n.prototype.immersive = function() {
              this.fullscreen
                ? (this.androidFullScreen.showSystemUI(), this.androidFullScreen.showUnderSystemUI())
                : this.androidFullScreen.immersiveMode(),
                (this.fullscreen = !this.fullscreen);
            }),
            (n.prototype.showPopover = function(n) {
              var l = this,
                t = this.popoverCtrl.create('StoryPopover', { settings: this.settings });
              t.present({ ev: n }),
                t.onDidDismiss(function() {
                  l.storage.set(w.g, l.settings);
                });
            }),
            (n.prototype.showInfo = function(n) {
              this.navCtrl.push('StoryDetailPage', { story: n });
            }),
            (n.prototype.showSeries = function(n) {
              this.navCtrl.push('StorySeriesPage', { story: n });
            }),
            (n.prototype.openListPicker = function(n) {
              this.popoverCtrl.create('BookmarkPopover', { story: this.story }).present({ ev: n });
            }),
            (n.prototype.slideChanged = function() {
              var n = this,
                l = this.slidesElement.getActiveIndex();
              l >= this.slides.length && this.story.series
                ? this.stories.getSeries(this.story.series).subscribe(function(l) {
                    for (var t = 0; t < l[0].length - 1; t += 1)
                      if (l[0][t].id === n.story.id)
                        return (
                          n.navCtrl.push('StoryViewPage', { story: l[0][t + 1], fullscreen: n.fullscreen }),
                          void n.navCtrl.remove(n.navCtrl.indexOf(n.navCtrl.last()), 1)
                        );
                    n.toastCtrl
                      .create({
                        message: n.translations.STORY_ENDOFSERIES,
                        showCloseButton: !0,
                        closeButtonText: n.translations.CLOSE_BUTTON,
                        duration: 2e3,
                        cssClass: 'overui',
                      })
                      .present();
                  })
                : ((this.story.currentpage = l), this.stories.cache(this.story), this.range.setValue(l + 1));
            }),
            n
          );
        })()),
      Y = t(729),
      C = t(708),
      S = (function() {
        return function() {};
      })(),
      O = t(381),
      T = t(382),
      P = t(383),
      j = t(384),
      z = t(385),
      M = t(386),
      Z = t(387),
      I = t(388),
      X = t(389),
      E = t(712),
      L = t(734),
      F = t(716),
      R = t(62),
      A = t(29),
      W = t(3),
      N = t(704),
      B = t(6),
      H = t(125),
      V = t(39),
      U = t(63),
      $ = h.X({
        encapsulation: 2,
        styles: [
          'ng-scrollbar{display:block;position:relative;height:100%;overflow:hidden!important}.ng-scrollbar-container{position:relative;overflow:hidden!important;width:100%;height:100%}.ng-scrollbar-autohide>.ng-scrollbar{opacity:0;-webkit-transition:opacity 120ms ease-out;transition:opacity 120ms ease-out}.ng-scrollbar-autohide:active>.ng-scrollbar,.ng-scrollbar-autohide:focus>.ng-scrollbar,.ng-scrollbar-autohide:hover>.ng-scrollbar{opacity:1;-webkit-transition:opacity 340ms ease-out;transition:opacity 340ms ease-out}.ng-scrollbar{position:absolute;right:2px;bottom:2px;z-index:1;border-radius:3px}.-vertical{width:6px;top:2px}.-vertical .ng-scrollbar-thumb{width:100%}.-horizontal{height:6px;left:2px}.-horizontal .ng-scrollbar-thumb{height:100%}.ng-scrollbar-disabled{display:none}.ng-scrollbar-thumb{position:relative;display:block;width:0;height:0;border-radius:inherit;background-color:rgba(0,0,0,.2);-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.ng-scrollbar-thumb:active,.ng-scrollbar-thumb:hover{background-color:rgba(0,0,0,.3)}.ng-scrollbar-view{width:100%;height:100%;overflow:scroll;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);-webkit-overflow-scrolling:touch}',
        ],
        data: {},
      }),
      D = t(219),
      q = t(138),
      K = h.X({ encapsulation: 2, styles: [], data: {} }),
      J = t(733),
      G = t(28),
      Q = t(209),
      nn = t(22),
      ln = t(40),
      tn = t(25),
      en = t(12),
      on = t(128),
      un = t(7),
      rn = t(709),
      sn = t(51),
      an = t(13),
      cn = t(30),
      pn = t(390),
      hn = t(90),
      dn = t(53),
      fn = t(195),
      bn = t(391),
      _n = t(31),
      gn = t(36),
      mn = h.X({ encapsulation: 2, styles: [], data: {} }),
      vn = t(203),
      yn = t(54),
      kn = t(52),
      wn = t(66),
      xn = t(140),
      Yn = t(127),
      Cn = t(95),
      Sn = t(16),
      On = h.X({ encapsulation: 2, styles: [], data: {} }),
      Tn = h.V(
        'page-story-view',
        x,
        function(n) {
          return h._22(
            0,
            [
              (n()(), h.Z(0, 0, null, null, 1, 'page-story-view', [], null, null, null, p, On)),
              h.Y(1, 49152, null, 0, x, [cn.a, B.a, vn.a, yn.a, kn.a, wn.a, xn.a, Yn.a, Cn.a, k.a, V.a, Sn.a], null, null),
            ],
            null,
            null,
          );
        },
        {},
        {},
        [],
      ),
      Pn = t(86),
      jn = t(87),
      zn = t(89),
      Mn = t(88),
      Zn = t(126),
      In = t(191),
      Xn = t(707),
      En = t(703),
      Ln = t(59);
    t.d(l, 'StoryViewPageModuleNgFactory', function() {
      return Fn;
    });
    var Fn = h.W(S, [], function(n) {
      return h._10([
        h._11(512, h.i, h.S, [[8, [O.a, T.a, P.a, j.a, z.a, M.a, Z.a, I.a, X.a, E.a, L.a, F.a, Tn]], [3, h.i], h.s]),
        h._11(4608, f.l, f.k, [h.r, [2, f.t]]),
        h._11(4608, G.r, G.r, []),
        h._11(4608, G.d, G.d, []),
        h._11(4608, Pn.b, Pn.a, []),
        h._11(4608, jn.a, jn.b, []),
        h._11(4608, zn.b, zn.a, []),
        h._11(4608, Mn.b, Mn.a, []),
        h._11(4608, V.a, V.a, [Zn.a, Pn.b, jn.a, zn.b, Mn.b, V.b, V.c]),
        h._11(512, f.b, f.b, []),
        h._11(512, G.p, G.p, []),
        h._11(512, G.g, G.g, []),
        h._11(512, G.n, G.n, []),
        h._11(512, In.a, In.a, []),
        h._11(512, In.b, In.b, []),
        h._11(512, d.a, d.a, []),
        h._11(512, Xn.a, Xn.a, []),
        h._11(512, y, y, []),
        h._11(512, Y.a, Y.a, []),
        h._11(512, En.a, En.a, []),
        h._11(512, En.f, En.f, []),
        h._11(512, En.c, En.c, []),
        h._11(512, En.b, En.b, []),
        h._11(512, En.d, En.d, []),
        h._11(512, En.e, En.e, []),
        h._11(512, C.a, C.a, []),
        h._11(512, S, S, []),
        h._11(256, Ln.a, x, []),
        h._11(256, V.c, void 0, []),
        h._11(256, V.b, void 0, []),
      ]);
    });
  },
  703: function(n, l, t) {
    'use strict';
    function e(n) {
      return void 0 === n;
    }
    function o(n) {
      return 'string' == typeof n;
    }
    function i(n, l) {
      var t = l.split('.'),
        o = t.shift();
      return t.reduce(function(n, l) {
        return e(n) || e(n[l]) ? void 0 : n[l];
      }, n[o || '']);
    }
    t.d(l, 'e', function() {
      return f;
    }),
      t.d(l, 'a', function() {
        return s;
      }),
      t.d(l, 'g', function() {
        return r;
      }),
      t.d(l, 'd', function() {
        return a;
      }),
      t.d(l, 'f', function() {
        return p;
      }),
      t.d(l, 'h', function() {
        return c;
      }),
      t.d(l, 'c', function() {
        return h;
      }),
      t.d(l, 'b', function() {
        return d;
      });
    var u = t(0),
      r = (function() {
        function n() {}
        return (
          (n.prototype.transform = function(l, t) {
            if (!Array.isArray(l)) return l;
            var e = Object(u.__spread)(l);
            if (Array.isArray(t))
              return e.sort(function(l, e) {
                for (var o = t.length, i = 0; i < o; ++i) {
                  var r = Object(u.__read)(n.extractFromConfig(t[i]), 2),
                    s = n.orderCompare(r[0], r[1], l, e);
                  if (0 !== s) return s;
                }
                return 0;
              });
            if (o(t)) {
              var i = Object(u.__read)(n.extractFromConfig(t), 3),
                r = i[0],
                s = i[1];
              if (1 === t.length)
                switch (i[2]) {
                  case '+':
                    return e.sort(n.simpleSort.bind(this));
                  case '-':
                    return e.sort(n.simpleSort.bind(this)).reverse();
                }
              return e.sort(n.orderCompare.bind(this, r, s));
            }
            return e.sort(n.simpleSort.bind(this));
          }),
          (n.simpleSort = function(n, l) {
            return o(n) && o(l) ? n.toLowerCase().localeCompare(l.toLowerCase()) : n - l;
          }),
          (n.orderCompare = function(n, l, t, u) {
            var r = i(t, n),
              s = i(u, n);
            if (r === s) return 0;
            if (e(r) || '' === r) return 1;
            if (e(s) || '' === s) return -1;
            if (o(r) && o(s)) {
              var a = r.toLowerCase().localeCompare(s.toLowerCase());
              return l ? a : -a;
            }
            return l ? r - s : s - r;
          }),
          (n.extractFromConfig = function(n) {
            var l = n.substr(0, 1);
            return [n.replace(/^[-+]/, ''), '-' !== l, l];
          }),
          n
        );
      })(),
      s = (function() {
        return function() {};
      })(),
      a = (function() {
        return function() {};
      })(),
      c = (function() {
        function n() {}
        return (
          (n.prototype.transform = function(n, l, t) {
            if ((void 0 === l && (l = 1), void 0 === t && (t = ''), l <= 0)) throw new RangeError();
            return 1 === l ? n : this.repeat(n, l - 1, t);
          }),
          (n.prototype.repeat = function(n, l, t) {
            return o(n) ? (0 === l ? n : n + t + this.repeat(n, l - 1, t)) : n;
          }),
          n
        );
      })(),
      p = (function() {
        return function() {};
      })(),
      h = (function() {
        return function() {};
      })(),
      d = (function() {
        return function() {};
      })(),
      f = (function() {
        return function() {};
      })();
  },
  704: function(n, l, t) {
    'use strict';
    t.d(l, 'a', function() {
      return o;
    });
    t(57);
    var e = t(705),
      o = (function() {
        function n(n, l, t, e) {
          (this.el = n),
            (this.appRef = l),
            (this.platform = t),
            (this._componentFactoryResolver = e),
            (this.event = 'click'),
            (this.duration = 3e3),
            (this._arrow = !1),
            (this._navTooltip = !1),
            (this._canShow = !0),
            (this._active = !1);
        }
        return (
          Object.defineProperty(n.prototype, 'navTooltip', {
            get: function() {
              return this._navTooltip;
            },
            set: function(n) {
              this._navTooltip = 'boolean' != typeof n || !1 !== n;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(n.prototype, 'arrow', {
            get: function() {
              return this._arrow;
            },
            set: function(n) {
              this._arrow = 'boolean' != typeof n || !1 !== n;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(n.prototype, 'active', {
            get: function() {
              return this._active;
            },
            set: function(n) {
              (this._active = 'boolean' != typeof n || !1 !== n), this._active ? this.canShow && this.showTooltip() : this._removeTooltip();
            },
            enumerable: !0,
            configurable: !0,
          }),
          (n.prototype.ngAfterViewInit = function() {
            this._active && this.trigger();
          }),
          Object.defineProperty(n.prototype, 'canShow', {
            get: function() {
              return this._canShow && '' !== this.tooltip;
            },
            set: function(n) {
              this._canShow = n;
            },
            enumerable: !0,
            configurable: !0,
          }),
          (n.prototype.trigger = function() {
            this.canShow && (this.tooltipElement ? this._resetTimer() : this.showTooltip());
          }),
          (n.prototype.showTooltip = function() {
            var n = this;
            this._createTooltipComponent();
            var l = this.tooltipElement.instance;
            (l.text = this.tooltip),
              l.init.then(function() {
                var t = n._getTooltipPosition();
                if (((l.posLeft = t.left), (l.posTop = t.top), (l.fadeState = 'visible'), n.arrow)) {
                  l.arrow = 'top' === n.positionV ? 'bottom' : 'bottom' === n.positionV ? 'top' : 'left' === n.positionH ? 'right' : 'left';
                }
                n._active || (n.tooltipTimeout = setTimeout(n._removeTooltip.bind(n), n.duration));
              });
          }),
          (n.prototype.onClick = function() {
            'click' === this.event && this.trigger();
          }),
          (n.prototype.onPress = function() {
            'press' === this.event && this.trigger();
          }),
          (n.prototype.onMouseEnter = function() {
            'hover' === this.event && (this.active = !0);
          }),
          (n.prototype.onMouseLeave = function() {
            'hover' === this.event && (this.active = !1);
          }),
          (n.prototype._createTooltipComponent = function() {
            var n = this.appRef.components[0]._component._viewport,
              l = this._componentFactoryResolver.resolveComponentFactory(e.a);
            this.tooltipElement = n.createComponent(l);
          }),
          (n.prototype._getTooltipPosition = function() {
            var n,
              l,
              t = this.tooltipElement.instance.getNativeElement(),
              e = this.el.nativeElement,
              o = e.getBoundingClientRect(),
              i = 10;
            return (
              this.navTooltip && ((this.positionV = 'bottom'), (this.arrow = !1), (i = 20)),
              (n =
                'right' === this.positionH
                  ? o.right + i
                  : 'left' === this.positionH
                  ? o.left - i - t.offsetWidth
                  : this.navTooltip
                  ? o.left + e.offsetWidth / 2
                  : o.left),
              (l =
                'top' === this.positionV
                  ? o.top - i - t.offsetHeight
                  : 'bottom' === this.positionV
                  ? o.bottom + i
                  : o.top + e.offsetHeight / 2 - t.offsetHeight / 2),
              n + t.offsetWidth + i > this.platform.width()
                ? (n = this.platform.width() - t.offsetWidth - i)
                : n + t.offsetWidth - i < 0 && (n = i),
              { left: n, top: l }
            );
          }),
          (n.prototype._removeTooltip = function() {
            var n = this;
            if (!this.tooltipElement) return (this.tooltipElement = void 0), void (this.tooltipTimeout = void 0);
            (this.tooltipElement.instance.fadeState = 'invisible'),
              (this.canShow = !1),
              setTimeout(function() {
                n.tooltipElement && 'function' == typeof n.tooltipElement.destroy && n.tooltipElement.destroy(),
                  (n.tooltipElement = n.tooltipTimeout = void 0),
                  (n.canShow = !0);
              }, 300);
          }),
          (n.prototype._resetTimer = function() {
            (this.active = !1),
              clearTimeout(this.tooltipTimeout),
              (this.tooltipTimeout = setTimeout(this._removeTooltip.bind(this), this.duration));
          }),
          n
        );
      })();
  },
  705: function(n, l, t) {
    'use strict';
    t.d(l, 'a', function() {
      return e;
    });
    t(132);
    var e = (function() {
      function n(n, l) {
        var t = this;
        (this.elementRef = n),
          (this.rnd = l),
          (this.fadeState = 'invisible'),
          (this.init = new Promise(function(n) {
            t.initResolve = n;
          }));
      }
      return (
        Object.defineProperty(n.prototype, 'arrow', {
          set: function(n) {
            this.rnd.setAttribute(this.getNativeElement(), 'class', 'has-arrow arrow-' + n);
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(n.prototype, 'posTop', {
          set: function(n) {
            this.rnd.setStyle(this.getNativeElement(), 'top', n + 'px');
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(n.prototype, 'posLeft', {
          set: function(n) {
            this.rnd.setStyle(this.getNativeElement(), 'left', n + 'px');
          },
          enumerable: !0,
          configurable: !0,
        }),
        (n.prototype.getNativeElement = function() {
          return this.elementRef.nativeElement;
        }),
        (n.prototype.ngAfterViewInit = function() {
          this.initResolve();
        }),
        n
      );
    })();
  },
  706: function(n, l, t) {
    'use strict';
    t(704), t(707);
  },
  707: function(n, l, t) {
    'use strict';
    t.d(l, 'a', function() {
      return e;
    });
    t(57), t(704);
    var e = (function() {
      return function() {};
    })();
  },
  708: function(n, l, t) {
    'use strict';
    t.d(l, 'a', function() {
      return e;
    });
    t(0), t(57), t(50), t(706);
    var e = (function() {
      return function() {};
    })();
  },
  709: function(n, l, t) {
    'use strict';
    function e(n) {
      return o._22(
        0,
        [
          (n()(), o.Z(0, 0, null, null, 1, 'div', [['class', 'toolbar-background']], null, null, null, null, null)),
          o.Y(1, 278528, null, 0, i.h, [o.p, o.q, o.j, o.A], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
          (n()(),
          o.Z(
            2,
            0,
            null,
            null,
            8,
            'button',
            [['class', 'back-button'], ['ion-button', 'bar-button']],
            [[8, 'hidden', 0]],
            [[null, 'click']],
            function(n, l, t) {
              var e = !0;
              if ('click' === l) {
                e = !1 !== n.component.backButtonClick(t) && e;
              }
              return e;
            },
            u.b,
            u.a,
          )),
          o.Y(3, 278528, null, 0, i.h, [o.p, o.q, o.j, o.A], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
          o.Y(4, 1097728, null, 0, r.a, [[8, 'bar-button'], s.a, o.j, o.z], null, null),
          (n()(),
          o.Z(5, 0, null, 0, 2, 'ion-icon', [['class', 'back-button-icon'], ['role', 'img']], [[2, 'hide', null]], null, null, null, null)),
          o.Y(6, 278528, null, 0, i.h, [o.p, o.q, o.j, o.A], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
          o.Y(7, 147456, null, 0, a.a, [s.a, o.j, o.z], { name: [0, 'name'] }, null),
          (n()(), o.Z(8, 0, null, 0, 2, 'span', [['class', 'back-button-text']], null, null, null, null, null)),
          o.Y(9, 278528, null, 0, i.h, [o.p, o.q, o.j, o.A], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
          (n()(), o._20(10, null, ['', ''])),
          o._12(null, 0),
          o._12(null, 1),
          o._12(null, 2),
          (n()(), o.Z(14, 0, null, null, 2, 'div', [['class', 'toolbar-content']], null, null, null, null, null)),
          o.Y(15, 278528, null, 0, i.h, [o.p, o.q, o.j, o.A], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
          o._12(null, 3),
        ],
        function(n, l) {
          var t = l.component;
          n(l, 1, 0, 'toolbar-background', 'toolbar-background-' + t._mode);
          n(l, 3, 0, 'back-button', 'back-button-' + t._mode);
          n(l, 6, 0, 'back-button-icon', 'back-button-icon-' + t._mode);
          n(l, 7, 0, t._bbIcon);
          n(l, 9, 0, 'back-button-text', 'back-button-text-' + t._mode);
          n(l, 15, 0, 'toolbar-content', 'toolbar-content-' + t._mode);
        },
        function(n, l) {
          var t = l.component;
          n(l, 2, 0, t._hideBb);
          n(l, 5, 0, o._13(l, 7)._hidden);
          n(l, 10, 0, t._backText);
        },
      );
    }
    t.d(l, 'a', function() {
      return c;
    }),
      (l.b = e);
    var o = t(1),
      i = t(18),
      u = t(62),
      r = t(29),
      s = t(3),
      a = t(63),
      c = (t(7), t(30), o.X({ encapsulation: 2, styles: [], data: {} }));
  },
  710: function(n, l, t) {
    'use strict';
    t.d(l, 'a', function() {
      return e;
    });
    t(0), t(57), t(190);
    var e = (function() {
      function n(n, l, t, e) {
        var o = this;
        (this.platform = l),
          (this.viewCtrl = t),
          (this.l = e),
          (this.story = n.get('story')),
          this.l.onReady().then(function() {
            o.l.query().subscribe(function(n) {
              n && (o.alllists = n);
            });
          });
      }
      return (
        (n.prototype.ionViewDidEnter = function() {
          var n = this;
          this.unregister = this.platform.registerBackButtonAction(function() {
            n.viewCtrl.dismiss(), n.unregister();
          });
        }),
        (n.prototype.ionViewDidLeave = function() {
          this.unregister();
        }),
        (n.prototype.toggleFromList = function(n) {
          n.stories
            ? n.stories.indexOf(this.story) > -1
              ? this.l.removeStory(n, this.story)
              : this.l.addStory(n, this.story)
            : this.l.getById(n.urlname).subscribe();
        }),
        n
      );
    })();
  },
  712: function(n, l, t) {
    'use strict';
    function e(n) {
      return o._22(2, [(n()(), o._20(0, null, ['', '']))], null, function(n, l) {
        n(l, 0, 0, l.component.text);
      });
    }
    t.d(l, 'a', function() {
      return r;
    });
    var o = t(1),
      i = t(705),
      u = o.X({
        encapsulation: 0,
        styles: [
          '[_nghost-%COMP%] {\n              background-color: rgba(0,0,0,0.8);\n              color: white;\n              display: inline-block;\n              position: fixed;\n              padding: 15px 25px;\n              font-size: 15px;\n          }',
          ".has-arrow[_nghost-%COMP%]:before {\n              content: '';\n              border: 5px solid transparent;\n              position: absolute;\n              width: 0;\n              height: 0;\n          }",
          '.has-arrow.arrow-top[_nghost-%COMP%]:before { border-bottom: 5px solid rgba(0,0,0,0.8); top: -10px; }',
          '.has-arrow.arrow-left[_nghost-%COMP%]:before { border-right: 5px solid rgba(0,0,0,0.8); left: -10px; }',
          '.has-arrow.arrow-right[_nghost-%COMP%]:before { border-left: 5px solid rgba(0,0,0,0.8); right: -10px; }',
          '.has-arrow.arrow-bottom[_nghost-%COMP%]:before { border-top: 5px solid rgba(0,0,0,0.8); bottom: -10px; }',
        ],
        data: {
          animation: [
            {
              type: 7,
              name: 'fade',
              definitions: [
                { type: 0, name: 'visible', styles: { type: 6, styles: { opacity: 1 }, offset: null }, options: void 0 },
                { type: 0, name: 'invisible', styles: { type: 6, styles: { opacity: 0 }, offset: null }, options: void 0 },
                { type: 1, expr: 'visible <=> invisible', animation: { type: 4, styles: null, timings: '300ms linear' }, options: null },
              ],
              options: {},
            },
          ],
        },
      }),
      r = o.V(
        'tooltip-box',
        i.a,
        function(n) {
          return o._22(
            0,
            [
              (n()(), o.Z(0, 0, null, null, 1, 'tooltip-box', [], [[40, '@fade', 0]], null, null, e, u)),
              o.Y(1, 4243456, null, 0, i.a, [o.j, o.A], null, null),
            ],
            null,
            function(n, l) {
              n(l, 0, 0, o._13(l, 1).fadeState);
            },
          );
        },
        { text: 'text', arrow: 'arrow', posTop: 'posTop', posLeft: 'posLeft' },
        {},
        [],
      );
  },
  716: function(n, l, t) {
    'use strict';
    function e(n) {
      return r._22(
        0,
        [
          (n()(), r.Z(0, 0, null, null, 1, 'ion-icon', [['name', 'lock'], ['role', 'img']], [[2, 'hide', null]], null, null, null, null)),
          r.Y(1, 147456, [[6, 4]], 0, s.a, [a.a, r.j, r.z], { name: [0, 'name'] }, null),
        ],
        function(n, l) {
          n(l, 1, 0, 'lock');
        },
        function(n, l) {
          n(l, 0, 0, r._13(l, 1)._hidden);
        },
      );
    }
    function o(n) {
      return r._22(
        0,
        [
          (n()(), r.Z(0, 0, null, null, 4, null, null, null, null, null, null, null)),
          (n()(), r._20(-1, null, ['\n          '])),
          (n()(), r.Z(2, 0, null, null, 1, 'ion-icon', [['role', 'img']], [[2, 'hide', null]], null, null, null, null)),
          r.Y(3, 147456, null, 0, s.a, [a.a, r.j, r.z], { name: [0, 'name'] }, null),
          (n()(), r._20(-1, null, ['\n        '])),
        ],
        function(n, l) {
          n(
            l,
            3,
            0,
            (null == l.parent.context.$implicit
              ? null
              : null == l.parent.context.$implicit.stories
              ? null
              : l.parent.context.$implicit.stories.indexOf(l.component.story)) > -1
              ? 'star'
              : 'star-outline',
          );
        },
        function(n, l) {
          n(l, 2, 0, r._13(l, 3)._hidden);
        },
      );
    }
    function i(n) {
      return r._22(
        0,
        [
          (n()(),
          r.Z(
            0,
            0,
            null,
            null,
            24,
            'ion-item',
            [['class', 'item item-block']],
            null,
            [[null, 'click']],
            function(n, l, t) {
              var e = !0;
              if ('click' === l) {
                e = !1 !== n.component.toggleFromList(n.context.$implicit) && e;
              }
              return e;
            },
            c.b,
            c.a,
          )),
          r.Y(1, 1097728, null, 3, p.a, [h.a, a.a, r.j, r.z, [2, d.a]], null, null),
          r._18(335544320, 4, { contentLabel: 0 }),
          r._18(603979776, 5, { _buttons: 1 }),
          r._18(603979776, 6, { _icons: 1 }),
          r.Y(5, 16384, null, 0, f.a, [], null, null),
          (n()(), r._20(-1, 2, ['\n    '])),
          (n()(), r.Z(7, 0, null, 2, 3, 'h2', [], null, null, null, null, null)),
          (n()(), r.U(16777216, null, null, 1, null, e)),
          r.Y(9, 16384, null, 0, b.j, [r.I, r.F], { ngIf: [0, 'ngIf'] }, null),
          (n()(), r._20(10, null, [' ', ''])),
          (n()(), r._20(-1, 2, ['\n    '])),
          (n()(), r.Z(12, 0, null, 4, 11, 'ion-note', [['item-end', '']], null, null, null, null, null)),
          r.Y(13, 16384, null, 0, _.a, [a.a, r.j, r.z], null, null),
          (n()(), r._20(-1, null, ['\n      '])),
          (n()(),
          r.Z(
            15,
            0,
            null,
            null,
            7,
            'button',
            [['clear', 'true'], ['event', 'press'], ['icon-only', ''], ['ion-button', ''], ['navTooltip', '']],
            null,
            [[null, 'click'], [null, 'press'], [null, 'mouseenter'], [null, 'mouseleave']],
            function(n, l, t) {
              var e = !0;
              if ('click' === l) {
                e = !1 !== r._13(n, 17).onClick() && e;
              }
              if ('press' === l) {
                e = !1 !== r._13(n, 17).onPress() && e;
              }
              if ('mouseenter' === l) {
                e = !1 !== r._13(n, 17).onMouseEnter() && e;
              }
              if ('mouseleave' === l) {
                e = !1 !== r._13(n, 17).onMouseLeave() && e;
              }
              return e;
            },
            g.b,
            g.a,
          )),
          r.Y(16, 1097728, null, 0, m.a, [[8, ''], a.a, r.j, r.z], { clear: [0, 'clear'] }, null),
          r.Y(
            17,
            4210688,
            null,
            0,
            v.a,
            [r.j, r.f, y.a, r.i],
            { tooltip: [0, 'tooltip'], event: [1, 'event'], navTooltip: [2, 'navTooltip'] },
            null,
          ),
          r._14(131072, k.a, [w.a, r.g]),
          (n()(), r._20(-1, 0, ['\n        '])),
          (n()(), r.U(16777216, null, 0, 1, null, o)),
          r.Y(21, 16384, null, 0, b.j, [r.I, r.F], { ngIf: [0, 'ngIf'] }, null),
          (n()(), r._20(-1, 0, ['\n      '])),
          (n()(), r._20(-1, null, ['\n    '])),
          (n()(), r._20(-1, 2, ['\n  '])),
        ],
        function(n, l) {
          n(l, 9, 0, !(null != l.context.$implicit && l.context.$implicit.visibility));
          n(l, 16, 0, 'true');
          n(l, 17, 0, r._21(l, 17, 0, r._13(l, 18).transform('BOOKMARK_BUTTON')), 'press', '');
          n(l, 21, 0, null == l.context.$implicit ? null : l.context.$implicit.stories);
        },
        function(n, l) {
          n(l, 10, 0, null == l.context.$implicit ? null : l.context.$implicit.name);
        },
      );
    }
    function u(n) {
      return r._22(
        0,
        [
          r._14(0, x.g, []),
          (n()(), r._20(-1, null, ['\n'])),
          (n()(), r.Z(2, 0, null, null, 15, 'ion-list', [['class', 'bookmarks']], null, null, null, null, null)),
          r.Y(3, 16384, null, 0, Y.a, [a.a, r.j, r.z, y.a, C.l, S.a], null, null),
          (n()(), r._20(-1, null, ['\n  '])),
          (n()(), r.Z(5, 0, null, null, 7, 'ion-list-header', [['class', 'item']], null, null, null, c.b, c.a)),
          r.Y(6, 1097728, null, 3, p.a, [h.a, a.a, r.j, r.z, [2, d.a]], null, null),
          r._18(335544320, 1, { contentLabel: 0 }),
          r._18(603979776, 2, { _buttons: 1 }),
          r._18(603979776, 3, { _icons: 1 }),
          r.Y(10, 16384, null, 0, O.a, [a.a, r.z, r.j, [8, null]], null, null),
          (n()(), r._20(11, 2, ['', ''])),
          r._14(131072, k.a, [w.a, r.g]),
          (n()(), r._20(-1, null, ['\n  '])),
          (n()(), r.U(16777216, null, null, 2, null, i)),
          r.Y(15, 802816, null, 0, b.i, [r.I, r.F, r.p], { ngForOf: [0, 'ngForOf'] }, null),
          r._16(16, 2),
          (n()(), r._20(-1, null, ['\n'])),
          (n()(), r._20(-1, null, ['\n'])),
        ],
        function(n, l) {
          var t = l.component;
          n(l, 15, 0, r._21(l, 15, 0, n(l, 16, 0, r._13(l, 0), t.alllists, 'id')));
        },
        function(n, l) {
          n(l, 11, 0, r._21(l, 11, 0, r._13(l, 12).transform('LISTLIST_TITLE')));
        },
      );
    }
    t.d(l, 'a', function() {
      return Z;
    });
    var r = t(1),
      s = t(63),
      a = t(3),
      c = t(189),
      p = t(25),
      h = t(22),
      d = t(58),
      f = t(85),
      b = t(18),
      _ = t(192),
      g = t(62),
      m = t(29),
      v = t(704),
      y = t(6),
      k = t(125),
      w = t(39),
      x = t(703),
      Y = t(64),
      C = t(10),
      S = t(12),
      O = t(130),
      T = t(710),
      P = t(16),
      j = t(7),
      z = t(133),
      M = r.X({ encapsulation: 2, styles: [], data: {} }),
      Z = r.V(
        'bookmark-popover',
        T.a,
        function(n) {
          return r._22(
            0,
            [
              (n()(), r.Z(0, 0, null, null, 1, 'bookmark-popover', [], null, null, null, u, M)),
              r.Y(1, 49152, null, 0, T.a, [P.a, y.a, j.a, z.a], null, null),
            ],
            null,
            null,
          );
        },
        {},
        {},
        [],
      );
  },
  724: function(n, l, t) {
    'use strict';
    t.d(l, 'a', function() {
      return e;
    });
    t(0), t(57);
    var e = (function() {
      function n(n, l) {
        (this.platform = l),
          (this.colors = {
            white: { bg: 'rgb(255, 255, 255)', fg: 'rgb(0, 0, 0)', fglow: 'rgb(128, 128, 128)' },
            tan: { bg: 'rgb(249, 241, 228)', fg: 'rgb(0, 0, 0)', fglow: 'rgb(92, 92, 92)' },
            grey: { bg: 'rgb(76, 75, 80)', fg: 'rgb(255, 255, 255)', fglow: 'rgb(160, 160, 160)' },
            black: { bg: 'rgb(0, 0, 0)', fg: 'rgb(255, 255, 255)', fglow: 'rgb(128, 128, 128)' },
          }),
          (this.settings = n.get('settings'));
      }
      return (
        (n.prototype.changeBackground = function(n) {
          (this.settings.theme = n),
            (this.settings.background = this.colors[n].bg),
            (this.settings.color = this.settings.lowcontrast ? this.colors[n].fglow : this.colors[n].fg);
        }),
        (n.prototype.changeFontSize = function(n) {
          this.settings.fontsize < 5 ||
            this.settings.fontsize > 30 ||
            ('larger' === n ? (this.settings.fontsize += 1) : (this.settings.fontsize -= 1),
            (this.settings.lineheight = 1.42857 * this.settings.fontsize));
        }),
        (n.prototype.changeLineHeight = function(n) {
          this.settings.lineheight < this.settings.fontsize ||
            this.settings.lineheight > 3 * this.settings.fontsize ||
            ('larger' === n ? (this.settings.lineheight += 1) : (this.settings.lineheight = -1));
        }),
        (n.prototype.changeAlign = function(n) {
          'side' === n && (n = 'rtl' === this.platform.dir() ? 'right' : 'left'), (this.settings.textalign = n);
        }),
        (n.prototype.toggleLowContrast = function(n) {
          (this.settings.lowcontrast = n.checked),
            (this.settings.color = n.checked ? this.colors[this.settings.theme].fglow : this.colors[this.settings.theme].fg);
        }),
        n
      );
    })();
  },
  727: function(n, l, t) {
    'use strict';
    function e(n) {
      return o._22(
        0,
        [
          (n()(), o.Z(0, 0, null, null, 1, 'div', [['class', 'toggle-icon']], null, null, null, null, null)),
          (n()(), o.Z(1, 0, null, null, 0, 'div', [['class', 'toggle-inner']], null, null, null, null, null)),
          (n()(),
          o.Z(
            2,
            0,
            null,
            null,
            1,
            'button',
            [['class', 'item-cover'], ['disable-activated', ''], ['ion-button', 'item-cover'], ['role', 'checkbox'], ['type', 'button']],
            [[8, 'id', 0], [1, 'aria-checked', 0], [1, 'aria-labelledby', 0], [1, 'aria-disabled', 0]],
            null,
            null,
            i.b,
            i.a,
          )),
          o.Y(3, 1097728, null, 0, u.a, [[8, 'item-cover'], r.a, o.j, o.z], null, null),
        ],
        null,
        function(n, l) {
          var t = l.component;
          n(l, 2, 0, t.id, t._value, t._labelId, t._disabled);
        },
      );
    }
    t.d(l, 'a', function() {
      return s;
    }),
      (l.b = e);
    var o = t(1),
      i = t(62),
      u = t(29),
      r = t(3),
      s = (t(22), t(6), t(40), t(10), t(12), o.X({ encapsulation: 2, styles: [], data: {} }));
  },
  729: function(n, l, t) {
    'use strict';
    t.d(l, 'a', function() {
      return e;
    });
    t(0), t(57);
    var e = (function() {
      return function() {};
    })();
  },
  733: function(n, l, t) {
    'use strict';
    function e(n) {
      return s._22(
        0,
        [
          (n()(), s.Z(0, 0, null, null, 1, 'div', [['class', 'range-pin'], ['role', 'presentation']], null, null, null, null, null)),
          (n()(), s._20(1, null, ['', ''])),
        ],
        null,
        function(n, l) {
          n(l, 1, 0, l.component.val);
        },
      );
    }
    function o(n) {
      return s._22(
        0,
        [
          (n()(), s.U(16777216, null, null, 1, null, e)),
          s.Y(1, 16384, null, 0, a.j, [s.I, s.F], { ngIf: [0, 'ngIf'] }, null),
          (n()(), s.Z(2, 0, null, null, 0, 'div', [['class', 'range-knob'], ['role', 'presentation']], null, null, null, null, null)),
        ],
        function(n, l) {
          n(l, 1, 0, l.component.pin);
        },
        null,
      );
    }
    function i(n) {
      return s._22(
        0,
        [
          (n()(),
          s.Z(
            0,
            0,
            null,
            null,
            0,
            'div',
            [['class', 'range-tick'], ['role', 'presentation']],
            [[4, 'left', null], [2, 'range-tick-active', null]],
            null,
            null,
            null,
            null,
          )),
        ],
        null,
        function(n, l) {
          n(l, 0, 0, l.context.$implicit.left, l.context.$implicit.active);
        },
      );
    }
    function u(n) {
      return s._22(
        0,
        [
          (n()(),
          s.Z(
            0,
            0,
            null,
            null,
            1,
            'div',
            [['class', 'range-knob-handle'], ['role', 'slider']],
            [
              [2, 'range-knob-pressed', null],
              [2, 'range-knob-min', null],
              [2, 'range-knob-max', null],
              [4, 'left', null],
              [1, 'aria-valuenow', 0],
              [1, 'aria-valuemin', 0],
              [1, 'aria-valuemax', 0],
              [1, 'aria-disabled', 0],
              [1, 'aria-labelledby', 0],
              [8, 'tabIndex', 0],
            ],
            [[null, 'ionIncrease'], [null, 'ionDecrease'], [null, 'keydown']],
            function(n, l, t) {
              var e = !0,
                o = n.component;
              if ('keydown' === l) {
                e = !1 !== s._13(n, 1)._keyup(t) && e;
              }
              if ('ionIncrease' === l) {
                e = !1 !== o._keyChg(!0, !0) && e;
              }
              if ('ionDecrease' === l) {
                e = !1 !== o._keyChg(!1, !0) && e;
              }
              return e;
            },
            o,
            p,
          )),
          s.Y(
            1,
            49152,
            null,
            0,
            c.a,
            [],
            {
              ratio: [0, 'ratio'],
              pressed: [1, 'pressed'],
              pin: [2, 'pin'],
              min: [3, 'min'],
              max: [4, 'max'],
              val: [5, 'val'],
              disabled: [6, 'disabled'],
              labelId: [7, 'labelId'],
            },
            { ionIncrease: 'ionIncrease', ionDecrease: 'ionDecrease' },
          ),
        ],
        function(n, l) {
          var t = l.component;
          n(l, 1, 0, t._ratioB, t._pressedB, t._pin, t._min, t._max, t._valB, t._disabled, t._labelId);
        },
        function(n, l) {
          n(
            l,
            0,
            0,
            s._13(l, 1).pressed,
            s._13(l, 1).val === s._13(l, 1).min || void 0 === s._13(l, 1).val,
            s._13(l, 1).val === s._13(l, 1).max,
            s._13(l, 1)._x,
            s._13(l, 1).val,
            s._13(l, 1).min,
            s._13(l, 1).max,
            s._13(l, 1).disabled,
            s._13(l, 1).labelId,
            s._13(l, 1).disabled ? -1 : 0,
          );
        },
      );
    }
    function r(n) {
      return s._22(
        0,
        [
          s._18(402653184, 1, { _slider: 0 }),
          s._12(null, 0),
          (n()(), s.Z(2, 0, [[1, 0], ['slider', 1]], null, 8, 'div', [['class', 'range-slider']], null, null, null, null, null)),
          (n()(), s.U(16777216, null, null, 1, null, i)),
          s.Y(4, 802816, null, 0, a.i, [s.I, s.F, s.p], { ngForOf: [0, 'ngForOf'] }, null),
          (n()(), s.Z(5, 0, null, null, 0, 'div', [['class', 'range-bar'], ['role', 'presentation']], null, null, null, null, null)),
          (n()(),
          s.Z(
            6,
            0,
            [['bar', 1]],
            null,
            0,
            'div',
            [['class', 'range-bar range-bar-active'], ['role', 'presentation']],
            [[4, 'left', null], [4, 'right', null]],
            null,
            null,
            null,
            null,
          )),
          (n()(),
          s.Z(
            7,
            0,
            null,
            null,
            1,
            'div',
            [['class', 'range-knob-handle'], ['role', 'slider']],
            [
              [2, 'range-knob-pressed', null],
              [2, 'range-knob-min', null],
              [2, 'range-knob-max', null],
              [4, 'left', null],
              [1, 'aria-valuenow', 0],
              [1, 'aria-valuemin', 0],
              [1, 'aria-valuemax', 0],
              [1, 'aria-disabled', 0],
              [1, 'aria-labelledby', 0],
              [8, 'tabIndex', 0],
            ],
            [[null, 'ionIncrease'], [null, 'ionDecrease'], [null, 'keydown']],
            function(n, l, t) {
              var e = !0,
                o = n.component;
              if ('keydown' === l) {
                e = !1 !== s._13(n, 8)._keyup(t) && e;
              }
              if ('ionIncrease' === l) {
                e = !1 !== o._keyChg(!0, !1) && e;
              }
              if ('ionDecrease' === l) {
                e = !1 !== o._keyChg(!1, !1) && e;
              }
              return e;
            },
            o,
            p,
          )),
          s.Y(
            8,
            49152,
            null,
            0,
            c.a,
            [],
            {
              ratio: [0, 'ratio'],
              pressed: [1, 'pressed'],
              pin: [2, 'pin'],
              min: [3, 'min'],
              max: [4, 'max'],
              val: [5, 'val'],
              disabled: [6, 'disabled'],
              labelId: [7, 'labelId'],
            },
            { ionIncrease: 'ionIncrease', ionDecrease: 'ionDecrease' },
          ),
          (n()(), s.U(16777216, null, null, 1, null, u)),
          s.Y(10, 16384, null, 0, a.j, [s.I, s.F], { ngIf: [0, 'ngIf'] }, null),
          s._12(null, 1),
        ],
        function(n, l) {
          var t = l.component;
          n(l, 4, 0, t._ticks);
          n(l, 8, 0, t._ratioA, t._pressedA, t._pin, t._min, t._max, t._valA, t._disabled, t._labelId);
          n(l, 10, 0, t._dual);
        },
        function(n, l) {
          var t = l.component;
          n(l, 6, 0, t._barL, t._barR);
          n(
            l,
            7,
            0,
            s._13(l, 8).pressed,
            s._13(l, 8).val === s._13(l, 8).min || void 0 === s._13(l, 8).val,
            s._13(l, 8).val === s._13(l, 8).max,
            s._13(l, 8)._x,
            s._13(l, 8).val,
            s._13(l, 8).min,
            s._13(l, 8).max,
            s._13(l, 8).disabled,
            s._13(l, 8).labelId,
            s._13(l, 8).disabled ? -1 : 0,
          );
        },
      );
    }
    var s = t(1),
      a = t(18),
      c = t(210),
      p = s.X({ encapsulation: 2, styles: [], data: {} });
    t(28), t(209), t(22), t(40), t(25), t(3), t(6), t(12);
    t.d(l, 'a', function() {
      return h;
    }),
      (l.b = r);
    var h = s.X({ encapsulation: 2, styles: [], data: {} });
  },
  734: function(n, l, t) {
    'use strict';
    function e(n) {
      return o._22(
        0,
        [
          (n()(), o._20(-1, null, ['\n    '])),
          (n()(),
          o.Z(
            1,
            0,
            null,
            null,
            160,
            'ion-list',
            [['radio-group', ''], ['role', 'radiogroup']],
            [
              [2, 'ng-untouched', null],
              [2, 'ng-touched', null],
              [2, 'ng-pristine', null],
              [2, 'ng-dirty', null],
              [2, 'ng-valid', null],
              [2, 'ng-invalid', null],
              [2, 'ng-pending', null],
            ],
            [[null, 'ngModelChange']],
            function(n, l, t) {
              var e = !0;
              if ('ngModelChange' === l) {
                e = !1 !== (n.component.settings.font = t) && e;
              }
              return e;
            },
            null,
            null,
          )),
          o.Y(2, 1064960, null, 1, i.a, [o.z, o.j, o.g], null, null),
          o._18(335544320, 1, { _header: 0 }),
          o._17(
            1024,
            null,
            u.h,
            function(n) {
              return [n];
            },
            [i.a],
          ),
          o.Y(5, 671744, null, 0, u.m, [[8, null], [8, null], [8, null], [2, u.h]], { model: [0, 'model'] }, { update: 'ngModelChange' }),
          o._17(2048, null, u.i, null, [u.m]),
          o.Y(7, 16384, null, 0, u.j, [u.i], null, null),
          o.Y(8, 16384, null, 0, r.a, [s.a, o.j, o.z, a.a, c.l, p.a], null, null),
          (n()(), o._20(-1, null, ['\n      '])),
          (n()(), o.Z(10, 0, null, null, 56, 'ion-row', [['class', 'row']], null, null, null, null, null)),
          o.Y(11, 16384, null, 0, h.a, [], null, null),
          (n()(), o._20(-1, null, ['\n        '])),
          (n()(), o.Z(13, 0, null, null, 10, 'ion-col', [['class', 'col']], null, null, null, null, null)),
          o.Y(14, 16384, null, 0, d.a, [], null, null),
          (n()(), o._20(-1, null, ['\n          '])),
          (n()(),
          o.Z(
            16,
            0,
            null,
            null,
            6,
            'button',
            [['class', 'popover-text-button popover-text-smaller item item-block'], ['detail-none', ''], ['ion-item', '']],
            null,
            [[null, 'click']],
            function(n, l, t) {
              var e = !0;
              if ('click' === l) {
                e = !1 !== n.component.changeFontSize('smaller') && e;
              }
              return e;
            },
            f.b,
            f.a,
          )),
          o.Y(17, 1097728, null, 3, b.a, [_.a, s.a, o.j, o.z, [2, g.a]], null, null),
          o._18(335544320, 2, { contentLabel: 0 }),
          o._18(603979776, 3, { _buttons: 1 }),
          o._18(603979776, 4, { _icons: 1 }),
          o.Y(21, 16384, null, 0, m.a, [], null, null),
          (n()(), o._20(-1, 2, ['A'])),
          (n()(), o._20(-1, null, ['\n        '])),
          (n()(), o._20(-1, null, ['\n        '])),
          (n()(), o.Z(25, 0, null, null, 10, 'ion-col', [['class', 'col']], null, null, null, null, null)),
          o.Y(26, 16384, null, 0, d.a, [], null, null),
          (n()(), o._20(-1, null, ['\n          '])),
          (n()(),
          o.Z(
            28,
            0,
            null,
            null,
            6,
            'button',
            [['class', 'popover-text-button popover-text-larger item item-block'], ['detail-none', ''], ['ion-item', '']],
            null,
            [[null, 'click']],
            function(n, l, t) {
              var e = !0;
              if ('click' === l) {
                e = !1 !== n.component.changeFontSize('larger') && e;
              }
              return e;
            },
            f.b,
            f.a,
          )),
          o.Y(29, 1097728, null, 3, b.a, [_.a, s.a, o.j, o.z, [2, g.a]], null, null),
          o._18(335544320, 5, { contentLabel: 0 }),
          o._18(603979776, 6, { _buttons: 1 }),
          o._18(603979776, 7, { _icons: 1 }),
          o.Y(33, 16384, null, 0, m.a, [], null, null),
          (n()(), o._20(-1, 2, ['A'])),
          (n()(), o._20(-1, null, ['\n        '])),
          (n()(), o._20(-1, null, ['\n        '])),
          (n()(), o.Z(37, 0, null, null, 13, 'ion-col', [['class', 'col']], null, null, null, null, null)),
          o.Y(38, 16384, null, 0, d.a, [], null, null),
          (n()(), o._20(-1, null, ['\n          '])),
          (n()(),
          o.Z(
            40,
            0,
            null,
            null,
            9,
            'button',
            [['class', 'popover-text-button popover-text-smaller item item-block'], ['detail-none', ''], ['ion-item', '']],
            null,
            [[null, 'click']],
            function(n, l, t) {
              var e = !0;
              if ('click' === l) {
                e = !1 !== n.component.changeLineHeight('smaller') && e;
              }
              return e;
            },
            f.b,
            f.a,
          )),
          o.Y(41, 1097728, null, 3, b.a, [_.a, s.a, o.j, o.z, [2, g.a]], null, null),
          o._18(335544320, 8, { contentLabel: 0 }),
          o._18(603979776, 9, { _buttons: 1 }),
          o._18(603979776, 10, { _icons: 1 }),
          o.Y(45, 16384, null, 0, m.a, [], null, null),
          (n()(), o._20(-1, 2, ['\n            '])),
          (n()(), o.Z(47, 0, null, 2, 1, 'ion-icon', [['name', 'list'], ['role', 'img']], [[2, 'hide', null]], null, null, null, null)),
          o.Y(48, 147456, [[10, 4]], 0, v.a, [s.a, o.j, o.z], { name: [0, 'name'] }, null),
          (n()(), o._20(-1, 2, ['\n          '])),
          (n()(), o._20(-1, null, ['\n        '])),
          (n()(), o._20(-1, null, ['\n        '])),
          (n()(), o.Z(52, 0, null, null, 13, 'ion-col', [['class', 'col']], null, null, null, null, null)),
          o.Y(53, 16384, null, 0, d.a, [], null, null),
          (n()(), o._20(-1, null, ['\n          '])),
          (n()(),
          o.Z(
            55,
            0,
            null,
            null,
            9,
            'button',
            [['class', 'popover-text-button popover-text-larger item item-block'], ['detail-none', ''], ['ion-item', '']],
            null,
            [[null, 'click']],
            function(n, l, t) {
              var e = !0;
              if ('click' === l) {
                e = !1 !== n.component.changeLineHeight('larger') && e;
              }
              return e;
            },
            f.b,
            f.a,
          )),
          o.Y(56, 1097728, null, 3, b.a, [_.a, s.a, o.j, o.z, [2, g.a]], null, null),
          o._18(335544320, 11, { contentLabel: 0 }),
          o._18(603979776, 12, { _buttons: 1 }),
          o._18(603979776, 13, { _icons: 1 }),
          o.Y(60, 16384, null, 0, m.a, [], null, null),
          (n()(), o._20(-1, 2, ['\n            '])),
          (n()(), o.Z(62, 0, null, 2, 1, 'ion-icon', [['name', 'list'], ['role', 'img']], [[2, 'hide', null]], null, null, null, null)),
          o.Y(63, 147456, [[13, 4]], 0, v.a, [s.a, o.j, o.z], { name: [0, 'name'] }, null),
          (n()(), o._20(-1, 2, ['\n          '])),
          (n()(), o._20(-1, null, ['\n        '])),
          (n()(), o._20(-1, null, ['\n      '])),
          (n()(), o._20(-1, null, ['\n      '])),
          (n()(), o.Z(68, 0, null, null, 14, 'ion-row', [['class', 'popover-row-align row']], null, null, null, null, null)),
          o.Y(69, 16384, null, 0, h.a, [], null, null),
          (n()(), o._20(-1, null, ['\n        '])),
          (n()(),
          o.Z(
            71,
            0,
            null,
            null,
            2,
            'button',
            [['color', 'dark'], ['ion-button', ''], ['outline', '']],
            null,
            [[null, 'click']],
            function(n, l, t) {
              var e = !0;
              if ('click' === l) {
                e = !1 !== n.component.changeAlign('side') && e;
              }
              return e;
            },
            y.b,
            y.a,
          )),
          o.Y(72, 1097728, null, 0, k.a, [[8, ''], s.a, o.j, o.z], { color: [0, 'color'], outline: [1, 'outline'] }, null),
          (n()(), o._20(-1, 0, ['Side'])),
          (n()(), o._20(-1, null, ['\n        '])),
          (n()(),
          o.Z(
            75,
            0,
            null,
            null,
            2,
            'button',
            [['color', 'dark'], ['ion-button', ''], ['outline', '']],
            null,
            [[null, 'click']],
            function(n, l, t) {
              var e = !0;
              if ('click' === l) {
                e = !1 !== n.component.changeAlign('center') && e;
              }
              return e;
            },
            y.b,
            y.a,
          )),
          o.Y(76, 1097728, null, 0, k.a, [[8, ''], s.a, o.j, o.z], { color: [0, 'color'], outline: [1, 'outline'] }, null),
          (n()(), o._20(-1, 0, ['Center'])),
          (n()(), o._20(-1, null, ['\n        '])),
          (n()(),
          o.Z(
            79,
            0,
            null,
            null,
            2,
            'button',
            [['color', 'dark'], ['ion-button', ''], ['outline', '']],
            null,
            [[null, 'click']],
            function(n, l, t) {
              var e = !0;
              if ('click' === l) {
                e = !1 !== n.component.changeAlign('justify') && e;
              }
              return e;
            },
            y.b,
            y.a,
          )),
          o.Y(80, 1097728, null, 0, k.a, [[8, ''], s.a, o.j, o.z], { color: [0, 'color'], outline: [1, 'outline'] }, null),
          (n()(), o._20(-1, 0, ['Justify'])),
          (n()(), o._20(-1, null, ['\n      '])),
          (n()(), o._20(-1, null, ['\n      '])),
          (n()(), o.Z(84, 0, null, null, 30, 'ion-row', [['class', 'popover-row-dots row']], null, null, null, null, null)),
          o.Y(85, 16384, null, 0, h.a, [], null, null),
          (n()(), o._20(-1, null, ['\n        '])),
          (n()(), o.Z(87, 0, null, null, 5, 'ion-col', [['class', 'col']], null, null, null, null, null)),
          o.Y(88, 16384, null, 0, d.a, [], null, null),
          (n()(), o._20(-1, null, ['\n          '])),
          (n()(),
          o.Z(
            90,
            0,
            null,
            null,
            1,
            'button',
            [['class', 'popover-dot-white'], ['ion-button', 'popover-dot']],
            null,
            [[null, 'click']],
            function(n, l, t) {
              var e = !0;
              if ('click' === l) {
                e = !1 !== n.component.changeBackground('white') && e;
              }
              return e;
            },
            y.b,
            y.a,
          )),
          o.Y(91, 1097728, null, 0, k.a, [[8, 'popover-dot'], s.a, o.j, o.z], null, null),
          (n()(), o._20(-1, null, ['\n        '])),
          (n()(), o._20(-1, null, ['\n        '])),
          (n()(), o.Z(94, 0, null, null, 5, 'ion-col', [['class', 'col']], null, null, null, null, null)),
          o.Y(95, 16384, null, 0, d.a, [], null, null),
          (n()(), o._20(-1, null, ['\n          '])),
          (n()(),
          o.Z(
            97,
            0,
            null,
            null,
            1,
            'button',
            [['class', 'popover-dot-tan'], ['ion-button', 'popover-dot']],
            null,
            [[null, 'click']],
            function(n, l, t) {
              var e = !0;
              if ('click' === l) {
                e = !1 !== n.component.changeBackground('tan') && e;
              }
              return e;
            },
            y.b,
            y.a,
          )),
          o.Y(98, 1097728, null, 0, k.a, [[8, 'popover-dot'], s.a, o.j, o.z], null, null),
          (n()(), o._20(-1, null, ['\n        '])),
          (n()(), o._20(-1, null, ['\n        '])),
          (n()(), o.Z(101, 0, null, null, 5, 'ion-col', [['class', 'col']], null, null, null, null, null)),
          o.Y(102, 16384, null, 0, d.a, [], null, null),
          (n()(), o._20(-1, null, ['\n          '])),
          (n()(),
          o.Z(
            104,
            0,
            null,
            null,
            1,
            'button',
            [['class', 'popover-dot-grey'], ['ion-button', 'popover-dot']],
            null,
            [[null, 'click']],
            function(n, l, t) {
              var e = !0;
              if ('click' === l) {
                e = !1 !== n.component.changeBackground('grey') && e;
              }
              return e;
            },
            y.b,
            y.a,
          )),
          o.Y(105, 1097728, null, 0, k.a, [[8, 'popover-dot'], s.a, o.j, o.z], null, null),
          (n()(), o._20(-1, null, ['\n        '])),
          (n()(), o._20(-1, null, ['\n        '])),
          (n()(), o.Z(108, 0, null, null, 5, 'ion-col', [['class', 'col']], null, null, null, null, null)),
          o.Y(109, 16384, null, 0, d.a, [], null, null),
          (n()(), o._20(-1, null, ['\n          '])),
          (n()(),
          o.Z(
            111,
            0,
            null,
            null,
            1,
            'button',
            [['class', 'popover-dot-black'], ['ion-button', 'popover-dot']],
            null,
            [[null, 'click']],
            function(n, l, t) {
              var e = !0;
              if ('click' === l) {
                e = !1 !== n.component.changeBackground('black') && e;
              }
              return e;
            },
            y.b,
            y.a,
          )),
          o.Y(112, 1097728, null, 0, k.a, [[8, 'popover-dot'], s.a, o.j, o.z], null, null),
          (n()(), o._20(-1, null, ['\n        '])),
          (n()(), o._20(-1, null, ['\n      '])),
          (n()(), o._20(-1, null, ['\n      '])),
          (n()(),
          o.Z(116, 0, null, null, 14, 'ion-item', [['class', 'popover-contrast-toggle item item-block']], null, null, null, f.b, f.a)),
          o.Y(117, 1097728, null, 3, b.a, [_.a, s.a, o.j, o.z, [2, g.a]], null, null),
          o._18(335544320, 14, { contentLabel: 0 }),
          o._18(603979776, 15, { _buttons: 1 }),
          o._18(603979776, 16, { _icons: 1 }),
          o.Y(121, 16384, null, 0, m.a, [], null, null),
          (n()(), o._20(-1, 2, ['\n        '])),
          (n()(), o.Z(123, 0, null, 1, 2, 'ion-label', [], null, null, null, null, null)),
          o.Y(124, 16384, [[14, 4]], 0, w.a, [s.a, o.j, o.z, [8, null], [8, null], [8, null], [8, null]], null, null),
          (n()(), o._20(-1, null, ['Low contrast: '])),
          (n()(), o._20(-1, 2, ['\n        '])),
          (n()(),
          o.Z(
            127,
            0,
            null,
            4,
            2,
            'ion-toggle',
            [],
            [[2, 'toggle-disabled', null], [2, 'toggle-checked', null], [2, 'toggle-activated', null]],
            [[null, 'ionChange'], [null, 'keyup']],
            function(n, l, t) {
              var e = !0,
                i = n.component;
              if ('keyup' === l) {
                e = !1 !== o._13(n, 129)._keyup(t) && e;
              }
              if ('ionChange' === l) {
                e = !1 !== i.toggleLowContrast(t) && e;
              }
              return e;
            },
            x.b,
            x.a,
          )),
          o._17(
            5120,
            null,
            u.h,
            function(n) {
              return [n];
            },
            [Y.a],
          ),
          o.Y(
            129,
            1228800,
            null,
            0,
            Y.a,
            [_.a, s.a, a.a, o.j, o.z, C.a, [2, b.a], c.l, p.a, o.u],
            { checked: [0, 'checked'] },
            { ionChange: 'ionChange' },
          ),
          (n()(), o._20(-1, 2, ['\n      '])),
          (n()(), o._20(-1, null, ['\n      '])),
          (n()(),
          o.Z(132, 0, null, null, 13, 'ion-item', [['class', 'popover-text-sans-serif item item-block']], null, null, null, f.b, f.a)),
          o.Y(133, 1097728, null, 3, b.a, [_.a, s.a, o.j, o.z, [2, g.a]], null, null),
          o._18(335544320, 17, { contentLabel: 0 }),
          o._18(603979776, 18, { _buttons: 1 }),
          o._18(603979776, 19, { _icons: 1 }),
          o.Y(137, 16384, null, 0, m.a, [], null, null),
          (n()(), o._20(-1, 2, ['\n        '])),
          (n()(), o.Z(139, 0, null, 1, 2, 'ion-label', [], null, null, null, null, null)),
          o.Y(140, 16384, [[17, 4]], 0, w.a, [s.a, o.j, o.z, [8, null], [8, null], [8, null], [8, null]], null, null),
          (n()(), o._20(-1, null, ['Sans-serif'])),
          (n()(), o._20(-1, 2, ['\n        '])),
          (n()(),
          o.Z(
            143,
            0,
            null,
            4,
            1,
            'ion-radio',
            [['value', 'sans-serif']],
            [[2, 'radio-disabled', null]],
            [[null, 'click']],
            function(n, l, t) {
              var e = !0;
              if ('click' === l) {
                e = !1 !== o._13(n, 144)._click(t) && e;
              }
              return e;
            },
            S.b,
            S.a,
          )),
          o.Y(144, 245760, null, 0, O.a, [_.a, s.a, o.j, o.z, [2, b.a], [2, i.a]], { value: [0, 'value'] }, null),
          (n()(), o._20(-1, 2, ['\n      '])),
          (n()(), o._20(-1, null, ['\n      '])),
          (n()(), o.Z(147, 0, null, null, 13, 'ion-item', [['class', 'popover-text-serif item item-block']], null, null, null, f.b, f.a)),
          o.Y(148, 1097728, null, 3, b.a, [_.a, s.a, o.j, o.z, [2, g.a]], null, null),
          o._18(335544320, 20, { contentLabel: 0 }),
          o._18(603979776, 21, { _buttons: 1 }),
          o._18(603979776, 22, { _icons: 1 }),
          o.Y(152, 16384, null, 0, m.a, [], null, null),
          (n()(), o._20(-1, 2, ['\n        '])),
          (n()(), o.Z(154, 0, null, 1, 2, 'ion-label', [], null, null, null, null, null)),
          o.Y(155, 16384, [[20, 4]], 0, w.a, [s.a, o.j, o.z, [8, null], [8, null], [8, null], [8, null]], null, null),
          (n()(), o._20(-1, null, ['Serif'])),
          (n()(), o._20(-1, 2, ['\n        '])),
          (n()(),
          o.Z(
            158,
            0,
            null,
            4,
            1,
            'ion-radio',
            [['value', "'Times New Roman', serif"]],
            [[2, 'radio-disabled', null]],
            [[null, 'click']],
            function(n, l, t) {
              var e = !0;
              if ('click' === l) {
                e = !1 !== o._13(n, 159)._click(t) && e;
              }
              return e;
            },
            S.b,
            S.a,
          )),
          o.Y(159, 245760, null, 0, O.a, [_.a, s.a, o.j, o.z, [2, b.a], [2, i.a]], { value: [0, 'value'] }, null),
          (n()(), o._20(-1, 2, ['\n      '])),
          (n()(), o._20(-1, null, ['\n    '])),
          (n()(), o._20(-1, null, ['\n  '])),
        ],
        function(n, l) {
          var t = l.component;
          n(l, 5, 0, t.settings.font);
          n(l, 48, 0, 'list');
          n(l, 63, 0, 'list');
          n(l, 72, 0, 'dark', '');
          n(l, 76, 0, 'dark', '');
          n(l, 80, 0, 'dark', '');
          n(l, 129, 0, t.settings.lowcontrast);
          n(l, 144, 0, 'sans-serif');
          n(l, 159, 0, "'Times New Roman', serif");
        },
        function(n, l) {
          n(
            l,
            1,
            0,
            o._13(l, 7).ngClassUntouched,
            o._13(l, 7).ngClassTouched,
            o._13(l, 7).ngClassPristine,
            o._13(l, 7).ngClassDirty,
            o._13(l, 7).ngClassValid,
            o._13(l, 7).ngClassInvalid,
            o._13(l, 7).ngClassPending,
          );
          n(l, 47, 0, o._13(l, 48)._hidden);
          n(l, 62, 0, o._13(l, 63)._hidden);
          n(l, 127, 0, o._13(l, 129)._disabled, o._13(l, 129)._value, o._13(l, 129)._activated);
          n(l, 143, 0, o._13(l, 144)._disabled);
          n(l, 158, 0, o._13(l, 159)._disabled);
        },
      );
    }
    t.d(l, 'a', function() {
      return z;
    });
    var o = t(1),
      i = t(67),
      u = t(28),
      r = t(64),
      s = t(3),
      a = t(6),
      c = t(10),
      p = t(12),
      h = t(207),
      d = t(206),
      f = t(189),
      b = t(25),
      _ = t(22),
      g = t(58),
      m = t(85),
      v = t(63),
      y = t(62),
      k = t(29),
      w = t(65),
      x = t(727),
      Y = t(202),
      C = t(40),
      S = t(394),
      O = t(92),
      T = t(724),
      P = t(16),
      j = o.X({
        encapsulation: 0,
        styles: [
          "story-popover[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%], story-popover[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%] {\n        padding: 0;\n      }\n\n      .popover-text-button[_ngcontent-%COMP%] {\n        padding-left: 0;\n        text-align: center;\n        min-height: 20px;\n        line-height: 20px;\n      }\n\n      .popover-text-button[_ngcontent-%COMP%]   .item-inner[_ngcontent-%COMP%] {\n        padding-right: 0;\n      }\n\n      .popover-text-smaller[_ngcontent-%COMP%] {\n        font-size: 11px;\n      }\n\n      .popover-text-larger[_ngcontent-%COMP%] {\n        font-size: 18px;\n      }\n\n      popover-row-align[_ngcontent-%COMP%] {\n        text-align: center;\n      }\n\n      .popover-align[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n        font-size: 10px;\n      }\n\n      .popover-row-dots[_ngcontent-%COMP%] {\n        text-align: center;\n      }\n\n      .popover-dot[_ngcontent-%COMP%] {\n        height: 30px;\n        width: 30px;\n        border-radius: 50%;\n        margin: 10px auto;\n        position: relative;\n      }\n\n      .popover-dot-white[_ngcontent-%COMP%] {\n        background-color: rgb(255, 255, 255);\n      }\n\n      .popover-dot-tan[_ngcontent-%COMP%] {\n        background-color: rgb(249, 241, 228);\n      }\n\n      .popover-dot-grey[_ngcontent-%COMP%] {\n        background-color: rgb(76, 75, 80);\n      }\n\n      .popover-dot-black[_ngcontent-%COMP%] {\n        background-color: rgb(0, 0, 0);\n      }\n\n      .ios[_ngcontent-%COMP%]   .popover-dot.selected[_ngcontent-%COMP%], .md[_ngcontent-%COMP%]   .popover-dot.selected[_ngcontent-%COMP%], .wp[_ngcontent-%COMP%]   .popover-dot.selected[_ngcontent-%COMP%] {\n        border-width: 2px;\n        border-color: #327eff;\n      }\n\n      .popover-text-sans-serid[_ngcontent-%COMP%] {\n        font-family: sans-serif;\n      }\n\n      .popover-text-serif[_ngcontent-%COMP%] {\n        font-family: 'Times New Roman', serif;\n      }\n\n      \n\n      .ios[_ngcontent-%COMP%]   .popover-text-smaller[_ngcontent-%COMP%] {\n        border-right: 1px solid #c8c7cc;\n      }\n\n      .ios[_ngcontent-%COMP%]   .popover-row-dots[_ngcontent-%COMP%] {\n        border-bottom: 1px solid #c8c7cc;\n      }\n\n      .ios[_ngcontent-%COMP%]   .popover-dot[_ngcontent-%COMP%] {\n        border: 1px solid #c8c7cc;\n      }\n\n      .hairlines[_ngcontent-%COMP%]   .popover-text-smaller[_ngcontent-%COMP%], .hairlines[_ngcontent-%COMP%]   .popover-row-dots[_ngcontent-%COMP%], .hairlines[_ngcontent-%COMP%]   .popover-dot[_ngcontent-%COMP%] {\n        border-width: 0.55px;\n      }\n\n      \n\n      .md[_ngcontent-%COMP%]   .popover-text-smaller[_ngcontent-%COMP%] {\n        border-right: 1px solid #dedede;\n      }\n\n      .md[_ngcontent-%COMP%]   .popover-row-dots[_ngcontent-%COMP%] {\n        border-bottom: 1px solid #dedede;\n      }\n\n      .md[_ngcontent-%COMP%]   .popover-dot[_ngcontent-%COMP%] {\n        border: 1px solid #dedede;\n      }\n\n      \n\n      .wp[_ngcontent-%COMP%]   .popover-dot[_ngcontent-%COMP%] {\n        border: 2px solid #ccc;\n      }",
        ],
        data: {},
      }),
      z = o.V(
        'story-popover',
        T.a,
        function(n) {
          return o._22(
            0,
            [
              (n()(), o.Z(0, 0, null, null, 1, 'story-popover', [], null, null, null, e, j)),
              o.Y(1, 49152, null, 0, T.a, [P.a, a.a], null, null),
            ],
            null,
            null,
          );
        },
        {},
        {},
        [],
      );
  },
});
