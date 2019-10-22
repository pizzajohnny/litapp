webpackJsonp([14], {
  697: function(n, l, t) {
    'use strict';
    Object.defineProperty(l, '__esModule', { value: !0 }),
      t.d(l, 'StoryPopoverModuleNgFactory', function() {
        return k;
      });
    var o = t(1),
      u = t(729),
      e = t(381),
      i = t(382),
      a = t(383),
      c = t(384),
      r = t(385),
      s = t(386),
      g = t(387),
      _ = t(388),
      p = t(389),
      d = t(734),
      b = t(18),
      f = t(28),
      h = t(191),
      v = t(59),
      m = t(724),
      k = o.W(u.a, [], function(n) {
        return o._10([
          o._11(512, o.i, o.S, [[8, [e.a, i.a, a.a, c.a, r.a, s.a, g.a, _.a, p.a, d.a]], [3, o.i], o.s]),
          o._11(4608, b.l, b.k, [o.r, [2, b.t]]),
          o._11(4608, f.r, f.r, []),
          o._11(4608, f.d, f.d, []),
          o._11(512, b.b, b.b, []),
          o._11(512, f.p, f.p, []),
          o._11(512, f.g, f.g, []),
          o._11(512, f.n, f.n, []),
          o._11(512, h.a, h.a, []),
          o._11(512, h.b, h.b, []),
          o._11(512, u.a, u.a, []),
          o._11(256, v.a, m.a, []),
        ]);
      });
  },
  724: function(n, l, t) {
    'use strict';
    t.d(l, 'a', function() {
      return o;
    });
    t(0), t(57);
    var o = (function() {
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
    function o(n) {
      return u._22(
        0,
        [
          (n()(), u.Z(0, 0, null, null, 1, 'div', [['class', 'toggle-icon']], null, null, null, null, null)),
          (n()(), u.Z(1, 0, null, null, 0, 'div', [['class', 'toggle-inner']], null, null, null, null, null)),
          (n()(),
          u.Z(
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
            e.b,
            e.a,
          )),
          u.Y(3, 1097728, null, 0, i.a, [[8, 'item-cover'], a.a, u.j, u.z], null, null),
        ],
        null,
        function(n, l) {
          var t = l.component;
          n(l, 2, 0, t.id, t._value, t._labelId, t._disabled);
        },
      );
    }
    t.d(l, 'a', function() {
      return c;
    }),
      (l.b = o);
    var u = t(1),
      e = t(62),
      i = t(29),
      a = t(3),
      c = (t(22), t(6), t(40), t(10), t(12), u.X({ encapsulation: 2, styles: [], data: {} }));
  },
  729: function(n, l, t) {
    'use strict';
    t.d(l, 'a', function() {
      return o;
    });
    t(0), t(57);
    var o = (function() {
      return function() {};
    })();
  },
  734: function(n, l, t) {
    'use strict';
    function o(n) {
      return u._22(
        0,
        [
          (n()(), u._20(-1, null, ['\n    '])),
          (n()(),
          u.Z(
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
              var o = !0;
              if ('ngModelChange' === l) {
                o = !1 !== (n.component.settings.font = t) && o;
              }
              return o;
            },
            null,
            null,
          )),
          u.Y(2, 1064960, null, 1, e.a, [u.z, u.j, u.g], null, null),
          u._18(335544320, 1, { _header: 0 }),
          u._17(
            1024,
            null,
            i.h,
            function(n) {
              return [n];
            },
            [e.a],
          ),
          u.Y(5, 671744, null, 0, i.m, [[8, null], [8, null], [8, null], [2, i.h]], { model: [0, 'model'] }, { update: 'ngModelChange' }),
          u._17(2048, null, i.i, null, [i.m]),
          u.Y(7, 16384, null, 0, i.j, [i.i], null, null),
          u.Y(8, 16384, null, 0, a.a, [c.a, u.j, u.z, r.a, s.l, g.a], null, null),
          (n()(), u._20(-1, null, ['\n      '])),
          (n()(), u.Z(10, 0, null, null, 56, 'ion-row', [['class', 'row']], null, null, null, null, null)),
          u.Y(11, 16384, null, 0, _.a, [], null, null),
          (n()(), u._20(-1, null, ['\n        '])),
          (n()(), u.Z(13, 0, null, null, 10, 'ion-col', [['class', 'col']], null, null, null, null, null)),
          u.Y(14, 16384, null, 0, p.a, [], null, null),
          (n()(), u._20(-1, null, ['\n          '])),
          (n()(),
          u.Z(
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
              var o = !0;
              if ('click' === l) {
                o = !1 !== n.component.changeFontSize('smaller') && o;
              }
              return o;
            },
            d.b,
            d.a,
          )),
          u.Y(17, 1097728, null, 3, b.a, [f.a, c.a, u.j, u.z, [2, h.a]], null, null),
          u._18(335544320, 2, { contentLabel: 0 }),
          u._18(603979776, 3, { _buttons: 1 }),
          u._18(603979776, 4, { _icons: 1 }),
          u.Y(21, 16384, null, 0, v.a, [], null, null),
          (n()(), u._20(-1, 2, ['A'])),
          (n()(), u._20(-1, null, ['\n        '])),
          (n()(), u._20(-1, null, ['\n        '])),
          (n()(), u.Z(25, 0, null, null, 10, 'ion-col', [['class', 'col']], null, null, null, null, null)),
          u.Y(26, 16384, null, 0, p.a, [], null, null),
          (n()(), u._20(-1, null, ['\n          '])),
          (n()(),
          u.Z(
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
              var o = !0;
              if ('click' === l) {
                o = !1 !== n.component.changeFontSize('larger') && o;
              }
              return o;
            },
            d.b,
            d.a,
          )),
          u.Y(29, 1097728, null, 3, b.a, [f.a, c.a, u.j, u.z, [2, h.a]], null, null),
          u._18(335544320, 5, { contentLabel: 0 }),
          u._18(603979776, 6, { _buttons: 1 }),
          u._18(603979776, 7, { _icons: 1 }),
          u.Y(33, 16384, null, 0, v.a, [], null, null),
          (n()(), u._20(-1, 2, ['A'])),
          (n()(), u._20(-1, null, ['\n        '])),
          (n()(), u._20(-1, null, ['\n        '])),
          (n()(), u.Z(37, 0, null, null, 13, 'ion-col', [['class', 'col']], null, null, null, null, null)),
          u.Y(38, 16384, null, 0, p.a, [], null, null),
          (n()(), u._20(-1, null, ['\n          '])),
          (n()(),
          u.Z(
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
              var o = !0;
              if ('click' === l) {
                o = !1 !== n.component.changeLineHeight('smaller') && o;
              }
              return o;
            },
            d.b,
            d.a,
          )),
          u.Y(41, 1097728, null, 3, b.a, [f.a, c.a, u.j, u.z, [2, h.a]], null, null),
          u._18(335544320, 8, { contentLabel: 0 }),
          u._18(603979776, 9, { _buttons: 1 }),
          u._18(603979776, 10, { _icons: 1 }),
          u.Y(45, 16384, null, 0, v.a, [], null, null),
          (n()(), u._20(-1, 2, ['\n            '])),
          (n()(), u.Z(47, 0, null, 2, 1, 'ion-icon', [['name', 'list'], ['role', 'img']], [[2, 'hide', null]], null, null, null, null)),
          u.Y(48, 147456, [[10, 4]], 0, m.a, [c.a, u.j, u.z], { name: [0, 'name'] }, null),
          (n()(), u._20(-1, 2, ['\n          '])),
          (n()(), u._20(-1, null, ['\n        '])),
          (n()(), u._20(-1, null, ['\n        '])),
          (n()(), u.Z(52, 0, null, null, 13, 'ion-col', [['class', 'col']], null, null, null, null, null)),
          u.Y(53, 16384, null, 0, p.a, [], null, null),
          (n()(), u._20(-1, null, ['\n          '])),
          (n()(),
          u.Z(
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
              var o = !0;
              if ('click' === l) {
                o = !1 !== n.component.changeLineHeight('larger') && o;
              }
              return o;
            },
            d.b,
            d.a,
          )),
          u.Y(56, 1097728, null, 3, b.a, [f.a, c.a, u.j, u.z, [2, h.a]], null, null),
          u._18(335544320, 11, { contentLabel: 0 }),
          u._18(603979776, 12, { _buttons: 1 }),
          u._18(603979776, 13, { _icons: 1 }),
          u.Y(60, 16384, null, 0, v.a, [], null, null),
          (n()(), u._20(-1, 2, ['\n            '])),
          (n()(), u.Z(62, 0, null, 2, 1, 'ion-icon', [['name', 'list'], ['role', 'img']], [[2, 'hide', null]], null, null, null, null)),
          u.Y(63, 147456, [[13, 4]], 0, m.a, [c.a, u.j, u.z], { name: [0, 'name'] }, null),
          (n()(), u._20(-1, 2, ['\n          '])),
          (n()(), u._20(-1, null, ['\n        '])),
          (n()(), u._20(-1, null, ['\n      '])),
          (n()(), u._20(-1, null, ['\n      '])),
          (n()(), u.Z(68, 0, null, null, 14, 'ion-row', [['class', 'popover-row-align row']], null, null, null, null, null)),
          u.Y(69, 16384, null, 0, _.a, [], null, null),
          (n()(), u._20(-1, null, ['\n        '])),
          (n()(),
          u.Z(
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
              var o = !0;
              if ('click' === l) {
                o = !1 !== n.component.changeAlign('side') && o;
              }
              return o;
            },
            k.b,
            k.a,
          )),
          u.Y(72, 1097728, null, 0, C.a, [[8, ''], c.a, u.j, u.z], { color: [0, 'color'], outline: [1, 'outline'] }, null),
          (n()(), u._20(-1, 0, ['Side'])),
          (n()(), u._20(-1, null, ['\n        '])),
          (n()(),
          u.Z(
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
              var o = !0;
              if ('click' === l) {
                o = !1 !== n.component.changeAlign('center') && o;
              }
              return o;
            },
            k.b,
            k.a,
          )),
          u.Y(76, 1097728, null, 0, C.a, [[8, ''], c.a, u.j, u.z], { color: [0, 'color'], outline: [1, 'outline'] }, null),
          (n()(), u._20(-1, 0, ['Center'])),
          (n()(), u._20(-1, null, ['\n        '])),
          (n()(),
          u.Z(
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
              var o = !0;
              if ('click' === l) {
                o = !1 !== n.component.changeAlign('justify') && o;
              }
              return o;
            },
            k.b,
            k.a,
          )),
          u.Y(80, 1097728, null, 0, C.a, [[8, ''], c.a, u.j, u.z], { color: [0, 'color'], outline: [1, 'outline'] }, null),
          (n()(), u._20(-1, 0, ['Justify'])),
          (n()(), u._20(-1, null, ['\n      '])),
          (n()(), u._20(-1, null, ['\n      '])),
          (n()(), u.Z(84, 0, null, null, 30, 'ion-row', [['class', 'popover-row-dots row']], null, null, null, null, null)),
          u.Y(85, 16384, null, 0, _.a, [], null, null),
          (n()(), u._20(-1, null, ['\n        '])),
          (n()(), u.Z(87, 0, null, null, 5, 'ion-col', [['class', 'col']], null, null, null, null, null)),
          u.Y(88, 16384, null, 0, p.a, [], null, null),
          (n()(), u._20(-1, null, ['\n          '])),
          (n()(),
          u.Z(
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
              var o = !0;
              if ('click' === l) {
                o = !1 !== n.component.changeBackground('white') && o;
              }
              return o;
            },
            k.b,
            k.a,
          )),
          u.Y(91, 1097728, null, 0, C.a, [[8, 'popover-dot'], c.a, u.j, u.z], null, null),
          (n()(), u._20(-1, null, ['\n        '])),
          (n()(), u._20(-1, null, ['\n        '])),
          (n()(), u.Z(94, 0, null, null, 5, 'ion-col', [['class', 'col']], null, null, null, null, null)),
          u.Y(95, 16384, null, 0, p.a, [], null, null),
          (n()(), u._20(-1, null, ['\n          '])),
          (n()(),
          u.Z(
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
              var o = !0;
              if ('click' === l) {
                o = !1 !== n.component.changeBackground('tan') && o;
              }
              return o;
            },
            k.b,
            k.a,
          )),
          u.Y(98, 1097728, null, 0, C.a, [[8, 'popover-dot'], c.a, u.j, u.z], null, null),
          (n()(), u._20(-1, null, ['\n        '])),
          (n()(), u._20(-1, null, ['\n        '])),
          (n()(), u.Z(101, 0, null, null, 5, 'ion-col', [['class', 'col']], null, null, null, null, null)),
          u.Y(102, 16384, null, 0, p.a, [], null, null),
          (n()(), u._20(-1, null, ['\n          '])),
          (n()(),
          u.Z(
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
              var o = !0;
              if ('click' === l) {
                o = !1 !== n.component.changeBackground('grey') && o;
              }
              return o;
            },
            k.b,
            k.a,
          )),
          u.Y(105, 1097728, null, 0, C.a, [[8, 'popover-dot'], c.a, u.j, u.z], null, null),
          (n()(), u._20(-1, null, ['\n        '])),
          (n()(), u._20(-1, null, ['\n        '])),
          (n()(), u.Z(108, 0, null, null, 5, 'ion-col', [['class', 'col']], null, null, null, null, null)),
          u.Y(109, 16384, null, 0, p.a, [], null, null),
          (n()(), u._20(-1, null, ['\n          '])),
          (n()(),
          u.Z(
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
              var o = !0;
              if ('click' === l) {
                o = !1 !== n.component.changeBackground('black') && o;
              }
              return o;
            },
            k.b,
            k.a,
          )),
          u.Y(112, 1097728, null, 0, C.a, [[8, 'popover-dot'], c.a, u.j, u.z], null, null),
          (n()(), u._20(-1, null, ['\n        '])),
          (n()(), u._20(-1, null, ['\n      '])),
          (n()(), u._20(-1, null, ['\n      '])),
          (n()(),
          u.Z(116, 0, null, null, 14, 'ion-item', [['class', 'popover-contrast-toggle item item-block']], null, null, null, d.b, d.a)),
          u.Y(117, 1097728, null, 3, b.a, [f.a, c.a, u.j, u.z, [2, h.a]], null, null),
          u._18(335544320, 14, { contentLabel: 0 }),
          u._18(603979776, 15, { _buttons: 1 }),
          u._18(603979776, 16, { _icons: 1 }),
          u.Y(121, 16384, null, 0, v.a, [], null, null),
          (n()(), u._20(-1, 2, ['\n        '])),
          (n()(), u.Z(123, 0, null, 1, 2, 'ion-label', [], null, null, null, null, null)),
          u.Y(124, 16384, [[14, 4]], 0, M.a, [c.a, u.j, u.z, [8, null], [8, null], [8, null], [8, null]], null, null),
          (n()(), u._20(-1, null, ['Low contrast: '])),
          (n()(), u._20(-1, 2, ['\n        '])),
          (n()(),
          u.Z(
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
              var o = !0,
                e = n.component;
              if ('keyup' === l) {
                o = !1 !== u._13(n, 129)._keyup(t) && o;
              }
              if ('ionChange' === l) {
                o = !1 !== e.toggleLowContrast(t) && o;
              }
              return o;
            },
            P.b,
            P.a,
          )),
          u._17(
            5120,
            null,
            i.h,
            function(n) {
              return [n];
            },
            [O.a],
          ),
          u.Y(
            129,
            1228800,
            null,
            0,
            O.a,
            [f.a, c.a, r.a, u.j, u.z, Y.a, [2, b.a], s.l, g.a, u.u],
            { checked: [0, 'checked'] },
            { ionChange: 'ionChange' },
          ),
          (n()(), u._20(-1, 2, ['\n      '])),
          (n()(), u._20(-1, null, ['\n      '])),
          (n()(),
          u.Z(132, 0, null, null, 13, 'ion-item', [['class', 'popover-text-sans-serif item item-block']], null, null, null, d.b, d.a)),
          u.Y(133, 1097728, null, 3, b.a, [f.a, c.a, u.j, u.z, [2, h.a]], null, null),
          u._18(335544320, 17, { contentLabel: 0 }),
          u._18(603979776, 18, { _buttons: 1 }),
          u._18(603979776, 19, { _icons: 1 }),
          u.Y(137, 16384, null, 0, v.a, [], null, null),
          (n()(), u._20(-1, 2, ['\n        '])),
          (n()(), u.Z(139, 0, null, 1, 2, 'ion-label', [], null, null, null, null, null)),
          u.Y(140, 16384, [[17, 4]], 0, M.a, [c.a, u.j, u.z, [8, null], [8, null], [8, null], [8, null]], null, null),
          (n()(), u._20(-1, null, ['Sans-serif'])),
          (n()(), u._20(-1, 2, ['\n        '])),
          (n()(),
          u.Z(
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
              var o = !0;
              if ('click' === l) {
                o = !1 !== u._13(n, 144)._click(t) && o;
              }
              return o;
            },
            x.b,
            x.a,
          )),
          u.Y(144, 245760, null, 0, w.a, [f.a, c.a, u.j, u.z, [2, b.a], [2, e.a]], { value: [0, 'value'] }, null),
          (n()(), u._20(-1, 2, ['\n      '])),
          (n()(), u._20(-1, null, ['\n      '])),
          (n()(), u.Z(147, 0, null, null, 13, 'ion-item', [['class', 'popover-text-serif item item-block']], null, null, null, d.b, d.a)),
          u.Y(148, 1097728, null, 3, b.a, [f.a, c.a, u.j, u.z, [2, h.a]], null, null),
          u._18(335544320, 20, { contentLabel: 0 }),
          u._18(603979776, 21, { _buttons: 1 }),
          u._18(603979776, 22, { _icons: 1 }),
          u.Y(152, 16384, null, 0, v.a, [], null, null),
          (n()(), u._20(-1, 2, ['\n        '])),
          (n()(), u.Z(154, 0, null, 1, 2, 'ion-label', [], null, null, null, null, null)),
          u.Y(155, 16384, [[20, 4]], 0, M.a, [c.a, u.j, u.z, [8, null], [8, null], [8, null], [8, null]], null, null),
          (n()(), u._20(-1, null, ['Serif'])),
          (n()(), u._20(-1, 2, ['\n        '])),
          (n()(),
          u.Z(
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
              var o = !0;
              if ('click' === l) {
                o = !1 !== u._13(n, 159)._click(t) && o;
              }
              return o;
            },
            x.b,
            x.a,
          )),
          u.Y(159, 245760, null, 0, w.a, [f.a, c.a, u.j, u.z, [2, b.a], [2, e.a]], { value: [0, 'value'] }, null),
          (n()(), u._20(-1, 2, ['\n      '])),
          (n()(), u._20(-1, null, ['\n    '])),
          (n()(), u._20(-1, null, ['\n  '])),
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
            u._13(l, 7).ngClassUntouched,
            u._13(l, 7).ngClassTouched,
            u._13(l, 7).ngClassPristine,
            u._13(l, 7).ngClassDirty,
            u._13(l, 7).ngClassValid,
            u._13(l, 7).ngClassInvalid,
            u._13(l, 7).ngClassPending,
          );
          n(l, 47, 0, u._13(l, 48)._hidden);
          n(l, 62, 0, u._13(l, 63)._hidden);
          n(l, 127, 0, u._13(l, 129)._disabled, u._13(l, 129)._value, u._13(l, 129)._activated);
          n(l, 143, 0, u._13(l, 144)._disabled);
          n(l, 158, 0, u._13(l, 159)._disabled);
        },
      );
    }
    t.d(l, 'a', function() {
      return j;
    });
    var u = t(1),
      e = t(67),
      i = t(28),
      a = t(64),
      c = t(3),
      r = t(6),
      s = t(10),
      g = t(12),
      _ = t(207),
      p = t(206),
      d = t(189),
      b = t(25),
      f = t(22),
      h = t(58),
      v = t(85),
      m = t(63),
      k = t(62),
      C = t(29),
      M = t(65),
      P = t(727),
      O = t(202),
      Y = t(40),
      x = t(394),
      w = t(92),
      z = t(724),
      Z = t(16),
      y = u.X({
        encapsulation: 0,
        styles: [
          "story-popover[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%], story-popover[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%] {\n        padding: 0;\n      }\n\n      .popover-text-button[_ngcontent-%COMP%] {\n        padding-left: 0;\n        text-align: center;\n        min-height: 20px;\n        line-height: 20px;\n      }\n\n      .popover-text-button[_ngcontent-%COMP%]   .item-inner[_ngcontent-%COMP%] {\n        padding-right: 0;\n      }\n\n      .popover-text-smaller[_ngcontent-%COMP%] {\n        font-size: 11px;\n      }\n\n      .popover-text-larger[_ngcontent-%COMP%] {\n        font-size: 18px;\n      }\n\n      popover-row-align[_ngcontent-%COMP%] {\n        text-align: center;\n      }\n\n      .popover-align[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n        font-size: 10px;\n      }\n\n      .popover-row-dots[_ngcontent-%COMP%] {\n        text-align: center;\n      }\n\n      .popover-dot[_ngcontent-%COMP%] {\n        height: 30px;\n        width: 30px;\n        border-radius: 50%;\n        margin: 10px auto;\n        position: relative;\n      }\n\n      .popover-dot-white[_ngcontent-%COMP%] {\n        background-color: rgb(255, 255, 255);\n      }\n\n      .popover-dot-tan[_ngcontent-%COMP%] {\n        background-color: rgb(249, 241, 228);\n      }\n\n      .popover-dot-grey[_ngcontent-%COMP%] {\n        background-color: rgb(76, 75, 80);\n      }\n\n      .popover-dot-black[_ngcontent-%COMP%] {\n        background-color: rgb(0, 0, 0);\n      }\n\n      .ios[_ngcontent-%COMP%]   .popover-dot.selected[_ngcontent-%COMP%], .md[_ngcontent-%COMP%]   .popover-dot.selected[_ngcontent-%COMP%], .wp[_ngcontent-%COMP%]   .popover-dot.selected[_ngcontent-%COMP%] {\n        border-width: 2px;\n        border-color: #327eff;\n      }\n\n      .popover-text-sans-serid[_ngcontent-%COMP%] {\n        font-family: sans-serif;\n      }\n\n      .popover-text-serif[_ngcontent-%COMP%] {\n        font-family: 'Times New Roman', serif;\n      }\n\n      \n\n      .ios[_ngcontent-%COMP%]   .popover-text-smaller[_ngcontent-%COMP%] {\n        border-right: 1px solid #c8c7cc;\n      }\n\n      .ios[_ngcontent-%COMP%]   .popover-row-dots[_ngcontent-%COMP%] {\n        border-bottom: 1px solid #c8c7cc;\n      }\n\n      .ios[_ngcontent-%COMP%]   .popover-dot[_ngcontent-%COMP%] {\n        border: 1px solid #c8c7cc;\n      }\n\n      .hairlines[_ngcontent-%COMP%]   .popover-text-smaller[_ngcontent-%COMP%], .hairlines[_ngcontent-%COMP%]   .popover-row-dots[_ngcontent-%COMP%], .hairlines[_ngcontent-%COMP%]   .popover-dot[_ngcontent-%COMP%] {\n        border-width: 0.55px;\n      }\n\n      \n\n      .md[_ngcontent-%COMP%]   .popover-text-smaller[_ngcontent-%COMP%] {\n        border-right: 1px solid #dedede;\n      }\n\n      .md[_ngcontent-%COMP%]   .popover-row-dots[_ngcontent-%COMP%] {\n        border-bottom: 1px solid #dedede;\n      }\n\n      .md[_ngcontent-%COMP%]   .popover-dot[_ngcontent-%COMP%] {\n        border: 1px solid #dedede;\n      }\n\n      \n\n      .wp[_ngcontent-%COMP%]   .popover-dot[_ngcontent-%COMP%] {\n        border: 2px solid #ccc;\n      }",
        ],
        data: {},
      }),
      j = u.V(
        'story-popover',
        z.a,
        function(n) {
          return u._22(
            0,
            [
              (n()(), u.Z(0, 0, null, null, 1, 'story-popover', [], null, null, null, o, y)),
              u.Y(1, 49152, null, 0, z.a, [Z.a, r.a], null, null),
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
