webpackJsonp([15], {
  691: function(l, n, u) {
    'use strict';
    Object.defineProperty(n, '__esModule', { value: !0 }),
      u.d(n, 'SearchPopoverModuleNgFactory', function() {
        return P;
      });
    var a = u(1),
      t = u(728),
      e = u(381),
      i = u(382),
      o = u(383),
      _ = u(384),
      c = u(385),
      r = u(386),
      s = u(387),
      d = u(388),
      g = u(389),
      b = u(732),
      f = u(18),
      m = u(28),
      p = u(86),
      v = u(87),
      C = u(89),
      h = u(88),
      Y = u(39),
      k = u(126),
      j = u(191),
      Z = u(50),
      z = u(703),
      M = u(59),
      O = u(723),
      P = a.W(t.a, [], function(l) {
        return a._10([
          a._11(512, a.i, a.S, [[8, [e.a, i.a, o.a, _.a, c.a, r.a, s.a, d.a, g.a, b.a]], [3, a.i], a.s]),
          a._11(4608, f.l, f.k, [a.r, [2, f.t]]),
          a._11(4608, m.r, m.r, []),
          a._11(4608, m.d, m.d, []),
          a._11(4608, p.b, p.a, []),
          a._11(4608, v.a, v.b, []),
          a._11(4608, C.b, C.a, []),
          a._11(4608, h.b, h.a, []),
          a._11(4608, Y.a, Y.a, [k.a, p.b, v.a, C.b, h.b, Y.b, Y.c]),
          a._11(512, f.b, f.b, []),
          a._11(512, m.p, m.p, []),
          a._11(512, m.g, m.g, []),
          a._11(512, m.n, m.n, []),
          a._11(512, j.a, j.a, []),
          a._11(512, j.b, j.b, []),
          a._11(512, Z.a, Z.a, []),
          a._11(512, z.a, z.a, []),
          a._11(512, z.f, z.f, []),
          a._11(512, z.c, z.c, []),
          a._11(512, z.b, z.b, []),
          a._11(512, z.d, z.d, []),
          a._11(512, z.e, z.e, []),
          a._11(512, t.a, t.a, []),
          a._11(256, M.a, O.a, []),
          a._11(256, Y.c, void 0, []),
          a._11(256, Y.b, void 0, []),
        ]);
      });
  },
  703: function(l, n, u) {
    'use strict';
    function a(l) {
      return void 0 === l;
    }
    function t(l) {
      return 'string' == typeof l;
    }
    function e(l, n) {
      var u = n.split('.'),
        t = u.shift();
      return u.reduce(function(l, n) {
        return a(l) || a(l[n]) ? void 0 : l[n];
      }, l[t || '']);
    }
    u.d(n, 'e', function() {
      return b;
    }),
      u.d(n, 'a', function() {
        return _;
      }),
      u.d(n, 'g', function() {
        return o;
      }),
      u.d(n, 'd', function() {
        return c;
      }),
      u.d(n, 'f', function() {
        return s;
      }),
      u.d(n, 'h', function() {
        return r;
      }),
      u.d(n, 'c', function() {
        return d;
      }),
      u.d(n, 'b', function() {
        return g;
      });
    var i = u(0),
      o = (function() {
        function l() {}
        return (
          (l.prototype.transform = function(n, u) {
            if (!Array.isArray(n)) return n;
            var a = Object(i.__spread)(n);
            if (Array.isArray(u))
              return a.sort(function(n, a) {
                for (var t = u.length, e = 0; e < t; ++e) {
                  var o = Object(i.__read)(l.extractFromConfig(u[e]), 2),
                    _ = l.orderCompare(o[0], o[1], n, a);
                  if (0 !== _) return _;
                }
                return 0;
              });
            if (t(u)) {
              var e = Object(i.__read)(l.extractFromConfig(u), 3),
                o = e[0],
                _ = e[1];
              if (1 === u.length)
                switch (e[2]) {
                  case '+':
                    return a.sort(l.simpleSort.bind(this));
                  case '-':
                    return a.sort(l.simpleSort.bind(this)).reverse();
                }
              return a.sort(l.orderCompare.bind(this, o, _));
            }
            return a.sort(l.simpleSort.bind(this));
          }),
          (l.simpleSort = function(l, n) {
            return t(l) && t(n) ? l.toLowerCase().localeCompare(n.toLowerCase()) : l - n;
          }),
          (l.orderCompare = function(l, n, u, i) {
            var o = e(u, l),
              _ = e(i, l);
            if (o === _) return 0;
            if (a(o) || '' === o) return 1;
            if (a(_) || '' === _) return -1;
            if (t(o) && t(_)) {
              var c = o.toLowerCase().localeCompare(_.toLowerCase());
              return n ? c : -c;
            }
            return n ? o - _ : _ - o;
          }),
          (l.extractFromConfig = function(l) {
            var n = l.substr(0, 1);
            return [l.replace(/^[-+]/, ''), '-' !== n, n];
          }),
          l
        );
      })(),
      _ = (function() {
        return function() {};
      })(),
      c = (function() {
        return function() {};
      })(),
      r = (function() {
        function l() {}
        return (
          (l.prototype.transform = function(l, n, u) {
            if ((void 0 === n && (n = 1), void 0 === u && (u = ''), n <= 0)) throw new RangeError();
            return 1 === n ? l : this.repeat(l, n - 1, u);
          }),
          (l.prototype.repeat = function(l, n, u) {
            return t(l) ? (0 === n ? l : l + u + this.repeat(l, n - 1, u)) : l;
          }),
          l
        );
      })(),
      s = (function() {
        return function() {};
      })(),
      d = (function() {
        return function() {};
      })(),
      g = (function() {
        return function() {};
      })(),
      b = (function() {
        return function() {};
      })();
  },
  723: function(l, n, u) {
    'use strict';
    u.d(n, 'a', function() {
      return a;
    });
    u(0), u(57), u(68);
    var a = (function() {
      function l(l, n, u) {
        var a = this;
        (this.viewCtrl = n),
          (this.g = u),
          (this.options = l.get('options')),
          this.g.onReady().then(function() {
            a.categories = a.g.getCategories();
          });
      }
      return (
        (l.prototype.save = function() {
          this.viewCtrl.dismiss(!0);
        }),
        (l.prototype.changeDefaultSort = function() {
          (this.options.sort = this.options.astags ? 'views' : ''), (this.options.category = this.options.astags ? '' : []);
        }),
        l
      );
    })();
  },
  728: function(l, n, u) {
    'use strict';
    u.d(n, 'a', function() {
      return a;
    });
    u(0), u(57), u(50);
    var a = (function() {
      return function() {};
    })();
  },
  732: function(l, n, u) {
    'use strict';
    function a(l) {
      return d._22(
        0,
        [
          (l()(), d.Z(0, 0, null, null, 1, 'div', [['class', 'checkbox-icon']], [[2, 'checkbox-checked', null]], null, null, null, null)),
          (l()(), d.Z(1, 0, null, null, 0, 'div', [['class', 'checkbox-inner']], null, null, null, null, null)),
          (l()(),
          d.Z(
            2,
            0,
            null,
            null,
            2,
            'button',
            [['class', 'item-cover'], ['ion-button', 'item-cover'], ['role', 'checkbox'], ['type', 'button']],
            [[8, 'id', 0], [1, 'aria-checked', 0], [1, 'aria-labelledby', 0], [1, 'aria-disabled', 0]],
            null,
            null,
            A.b,
            A.a,
          )),
          d.Y(3, 1097728, null, 0, R.a, [[8, 'item-cover'], m.a, d.j, d.z], null, null),
          (l()(), d._20(-1, 0, [' '])),
        ],
        null,
        function(l, n) {
          var u = n.component;
          l(n, 0, 0, u._value);
          l(n, 2, 0, u.id, u._value, u._labelId, u._disabled);
        },
      );
    }
    function t(l) {
      return d._22(
        0,
        [
          (l()(), d.Z(0, 0, null, null, 1, 'div', [['class', 'select-placeholder select-text']], null, null, null, null, null)),
          (l()(), d._20(1, null, ['', ''])),
        ],
        null,
        function(l, n) {
          l(n, 1, 0, n.component.placeholder);
        },
      );
    }
    function e(l) {
      return d._22(
        0,
        [
          (l()(), d.Z(0, 0, null, null, 1, 'div', [['class', 'select-text']], null, null, null, null, null)),
          (l()(), d._20(1, null, ['', ''])),
        ],
        null,
        function(l, n) {
          var u = n.component;
          l(n, 1, 0, u.selectedText || u._text);
        },
      );
    }
    function i(l) {
      return d._22(
        0,
        [
          (l()(), d.U(16777216, null, null, 1, null, t)),
          d.Y(1, 16384, null, 0, L.j, [d.I, d.F], { ngIf: [0, 'ngIf'] }, null),
          (l()(), d.U(16777216, null, null, 1, null, e)),
          d.Y(3, 16384, null, 0, L.j, [d.I, d.F], { ngIf: [0, 'ngIf'] }, null),
          (l()(), d.Z(4, 0, null, null, 1, 'div', [['class', 'select-icon']], null, null, null, null, null)),
          (l()(), d.Z(5, 0, null, null, 0, 'div', [['class', 'select-icon-inner']], null, null, null, null, null)),
          (l()(),
          d.Z(
            6,
            0,
            null,
            null,
            1,
            'button',
            [['aria-haspopup', 'true'], ['class', 'item-cover'], ['ion-button', 'item-cover'], ['type', 'button']],
            [[8, 'id', 0], [1, 'aria-labelledby', 0], [1, 'aria-disabled', 0]],
            null,
            null,
            A.b,
            A.a,
          )),
          d.Y(7, 1097728, null, 0, R.a, [[8, 'item-cover'], m.a, d.j, d.z], null, null),
        ],
        function(l, n) {
          var u = n.component;
          l(n, 1, 0, !u._text);
          l(n, 3, 0, u._text);
        },
        function(l, n) {
          var u = n.component;
          l(n, 6, 0, u.id, u._labelId, u._disabled);
        },
      );
    }
    function o(l) {
      return d._22(
        0,
        [
          (l()(), d.Z(0, 0, null, null, 81, null, null, null, null, null, null, null)),
          (l()(), d._20(-1, null, ['\n        '])),
          (l()(), d.Z(2, 0, null, null, 14, 'ion-item', [['class', 'item item-block']], null, null, null, g.b, g.a)),
          d.Y(3, 1097728, null, 3, b.a, [f.a, m.a, d.j, d.z, [2, p.a]], null, null),
          d._18(335544320, 5, { contentLabel: 0 }),
          d._18(603979776, 6, { _buttons: 1 }),
          d._18(603979776, 7, { _icons: 1 }),
          d.Y(7, 16384, null, 0, v.a, [], null, null),
          (l()(), d._20(-1, 2, ['\n          '])),
          (l()(), d.Z(9, 0, null, 1, 3, 'ion-label', [], null, null, null, null, null)),
          d.Y(10, 16384, [[5, 4]], 0, C.a, [m.a, d.j, d.z, [8, null], [8, null], [8, null], [8, null]], null, null),
          (l()(), d._20(11, null, ['', ''])),
          d._14(131072, h.a, [Y.a, d.g]),
          (l()(), d._20(-1, 2, ['\n          '])),
          (l()(),
          d.Z(
            14,
            0,
            null,
            4,
            1,
            'ion-radio',
            [['value', '']],
            [[2, 'radio-disabled', null]],
            [[null, 'click']],
            function(l, n, u) {
              var a = !0;
              if ('click' === n) {
                a = !1 !== d._13(l, 15)._click(u) && a;
              }
              return a;
            },
            k.b,
            k.a,
          )),
          d.Y(15, 245760, null, 0, j.a, [f.a, m.a, d.j, d.z, [2, b.a], [2, Z.a]], { value: [0, 'value'] }, null),
          (l()(), d._20(-1, 2, ['\n        '])),
          (l()(), d._20(-1, null, ['\n        '])),
          (l()(), d.Z(18, 0, null, null, 14, 'ion-item', [['class', 'item item-block']], null, null, null, g.b, g.a)),
          d.Y(19, 1097728, null, 3, b.a, [f.a, m.a, d.j, d.z, [2, p.a]], null, null),
          d._18(335544320, 8, { contentLabel: 0 }),
          d._18(603979776, 9, { _buttons: 1 }),
          d._18(603979776, 10, { _icons: 1 }),
          d.Y(23, 16384, null, 0, v.a, [], null, null),
          (l()(), d._20(-1, 2, ['\n          '])),
          (l()(), d.Z(25, 0, null, 1, 3, 'ion-label', [], null, null, null, null, null)),
          d.Y(26, 16384, [[8, 4]], 0, C.a, [m.a, d.j, d.z, [8, null], [8, null], [8, null], [8, null]], null, null),
          (l()(), d._20(27, null, ['', ''])),
          d._14(131072, h.a, [Y.a, d.g]),
          (l()(), d._20(-1, 2, ['\n          '])),
          (l()(),
          d.Z(
            30,
            0,
            null,
            4,
            1,
            'ion-radio',
            [['value', 'date']],
            [[2, 'radio-disabled', null]],
            [[null, 'click']],
            function(l, n, u) {
              var a = !0;
              if ('click' === n) {
                a = !1 !== d._13(l, 31)._click(u) && a;
              }
              return a;
            },
            k.b,
            k.a,
          )),
          d.Y(31, 245760, null, 0, j.a, [f.a, m.a, d.j, d.z, [2, b.a], [2, Z.a]], { value: [0, 'value'] }, null),
          (l()(), d._20(-1, 2, ['\n        '])),
          (l()(), d._20(-1, null, ['\n        '])),
          (l()(), d.Z(34, 0, null, null, 14, 'ion-item', [['class', 'item item-block']], null, null, null, g.b, g.a)),
          d.Y(35, 1097728, null, 3, b.a, [f.a, m.a, d.j, d.z, [2, p.a]], null, null),
          d._18(335544320, 11, { contentLabel: 0 }),
          d._18(603979776, 12, { _buttons: 1 }),
          d._18(603979776, 13, { _icons: 1 }),
          d.Y(39, 16384, null, 0, v.a, [], null, null),
          (l()(), d._20(-1, 2, ['\n          '])),
          (l()(), d.Z(41, 0, null, 1, 3, 'ion-label', [], null, null, null, null, null)),
          d.Y(42, 16384, [[11, 4]], 0, C.a, [m.a, d.j, d.z, [8, null], [8, null], [8, null], [8, null]], null, null),
          (l()(), d._20(43, null, ['', ''])),
          d._14(131072, h.a, [Y.a, d.g]),
          (l()(), d._20(-1, 2, ['\n          '])),
          (l()(),
          d.Z(
            46,
            0,
            null,
            4,
            1,
            'ion-radio',
            [['value', 'date asc']],
            [[2, 'radio-disabled', null]],
            [[null, 'click']],
            function(l, n, u) {
              var a = !0;
              if ('click' === n) {
                a = !1 !== d._13(l, 47)._click(u) && a;
              }
              return a;
            },
            k.b,
            k.a,
          )),
          d.Y(47, 245760, null, 0, j.a, [f.a, m.a, d.j, d.z, [2, b.a], [2, Z.a]], { value: [0, 'value'] }, null),
          (l()(), d._20(-1, 2, ['\n        '])),
          (l()(), d._20(-1, null, ['\n        '])),
          (l()(), d.Z(50, 0, null, null, 14, 'ion-item', [['class', 'item item-block']], null, null, null, g.b, g.a)),
          d.Y(51, 1097728, null, 3, b.a, [f.a, m.a, d.j, d.z, [2, p.a]], null, null),
          d._18(335544320, 14, { contentLabel: 0 }),
          d._18(603979776, 15, { _buttons: 1 }),
          d._18(603979776, 16, { _icons: 1 }),
          d.Y(55, 16384, null, 0, v.a, [], null, null),
          (l()(), d._20(-1, 2, ['\n          '])),
          (l()(), d.Z(57, 0, null, 1, 3, 'ion-label', [], null, null, null, null, null)),
          d.Y(58, 16384, [[14, 4]], 0, C.a, [m.a, d.j, d.z, [8, null], [8, null], [8, null], [8, null]], null, null),
          (l()(), d._20(59, null, ['', ''])),
          d._14(131072, h.a, [Y.a, d.g]),
          (l()(), d._20(-1, 2, ['\n          '])),
          (l()(),
          d.Z(
            62,
            0,
            null,
            4,
            1,
            'ion-radio',
            [['value', 'vote']],
            [[2, 'radio-disabled', null]],
            [[null, 'click']],
            function(l, n, u) {
              var a = !0;
              if ('click' === n) {
                a = !1 !== d._13(l, 63)._click(u) && a;
              }
              return a;
            },
            k.b,
            k.a,
          )),
          d.Y(63, 245760, null, 0, j.a, [f.a, m.a, d.j, d.z, [2, b.a], [2, Z.a]], { value: [0, 'value'] }, null),
          (l()(), d._20(-1, 2, ['\n        '])),
          (l()(), d._20(-1, null, ['\n        '])),
          (l()(), d.Z(66, 0, null, null, 14, 'ion-item', [['class', 'item item-block']], null, null, null, g.b, g.a)),
          d.Y(67, 1097728, null, 3, b.a, [f.a, m.a, d.j, d.z, [2, p.a]], null, null),
          d._18(335544320, 17, { contentLabel: 0 }),
          d._18(603979776, 18, { _buttons: 1 }),
          d._18(603979776, 19, { _icons: 1 }),
          d.Y(71, 16384, null, 0, v.a, [], null, null),
          (l()(), d._20(-1, 2, ['\n          '])),
          (l()(), d.Z(73, 0, null, 1, 3, 'ion-label', [], null, null, null, null, null)),
          d.Y(74, 16384, [[17, 4]], 0, C.a, [m.a, d.j, d.z, [8, null], [8, null], [8, null], [8, null]], null, null),
          (l()(), d._20(75, null, ['', ''])),
          d._14(131072, h.a, [Y.a, d.g]),
          (l()(), d._20(-1, 2, ['\n          '])),
          (l()(),
          d.Z(
            78,
            0,
            null,
            4,
            1,
            'ion-radio',
            [['value', 'comments']],
            [[2, 'radio-disabled', null]],
            [[null, 'click']],
            function(l, n, u) {
              var a = !0;
              if ('click' === n) {
                a = !1 !== d._13(l, 79)._click(u) && a;
              }
              return a;
            },
            k.b,
            k.a,
          )),
          d.Y(79, 245760, null, 0, j.a, [f.a, m.a, d.j, d.z, [2, b.a], [2, Z.a]], { value: [0, 'value'] }, null),
          (l()(), d._20(-1, 2, ['\n        '])),
          (l()(), d._20(-1, null, ['\n      '])),
        ],
        function(l, n) {
          l(n, 15, 0, '');
          l(n, 31, 0, 'date');
          l(n, 47, 0, 'date asc');
          l(n, 63, 0, 'vote');
          l(n, 79, 0, 'comments');
        },
        function(l, n) {
          l(n, 11, 0, d._21(n, 11, 0, d._13(n, 12).transform('RELEVANCY')));
          l(n, 14, 0, d._13(n, 15)._disabled);
          l(n, 27, 0, d._21(n, 27, 0, d._13(n, 28).transform('NEWEST')));
          l(n, 30, 0, d._13(n, 31)._disabled);
          l(n, 43, 0, d._21(n, 43, 0, d._13(n, 44).transform('OLDEST')));
          l(n, 46, 0, d._13(n, 47)._disabled);
          l(n, 59, 0, d._21(n, 59, 0, d._13(n, 60).transform('RATING')));
          l(n, 62, 0, d._13(n, 63)._disabled);
          l(n, 75, 0, d._21(n, 75, 0, d._13(n, 76).transform('NUMBEROFCOMMENTS')));
          l(n, 78, 0, d._13(n, 79)._disabled);
        },
      );
    }
    function _(l) {
      return d._22(
        0,
        [
          (l()(), d._20(-1, null, ['\n        '])),
          (l()(), d.Z(1, 0, null, null, 14, 'ion-item', [['class', 'item item-block']], null, null, null, g.b, g.a)),
          d.Y(2, 1097728, null, 3, b.a, [f.a, m.a, d.j, d.z, [2, p.a]], null, null),
          d._18(335544320, 20, { contentLabel: 0 }),
          d._18(603979776, 21, { _buttons: 1 }),
          d._18(603979776, 22, { _icons: 1 }),
          d.Y(6, 16384, null, 0, v.a, [], null, null),
          (l()(), d._20(-1, 2, ['\n          '])),
          (l()(), d.Z(8, 0, null, 1, 3, 'ion-label', [], null, null, null, null, null)),
          d.Y(9, 16384, [[20, 4]], 0, C.a, [m.a, d.j, d.z, [8, null], [8, null], [8, null], [8, null]], null, null),
          (l()(), d._20(10, null, ['', ''])),
          d._14(131072, h.a, [Y.a, d.g]),
          (l()(), d._20(-1, 2, ['\n          '])),
          (l()(),
          d.Z(
            13,
            0,
            null,
            4,
            1,
            'ion-radio',
            [['value', 'views']],
            [[2, 'radio-disabled', null]],
            [[null, 'click']],
            function(l, n, u) {
              var a = !0;
              if ('click' === n) {
                a = !1 !== d._13(l, 14)._click(u) && a;
              }
              return a;
            },
            k.b,
            k.a,
          )),
          d.Y(14, 245760, null, 0, j.a, [f.a, m.a, d.j, d.z, [2, b.a], [2, Z.a]], { value: [0, 'value'] }, null),
          (l()(), d._20(-1, 2, ['\n        '])),
          (l()(), d._20(-1, null, ['\n        '])),
          (l()(), d.Z(17, 0, null, null, 14, 'ion-item', [['class', 'item item-block']], null, null, null, g.b, g.a)),
          d.Y(18, 1097728, null, 3, b.a, [f.a, m.a, d.j, d.z, [2, p.a]], null, null),
          d._18(335544320, 23, { contentLabel: 0 }),
          d._18(603979776, 24, { _buttons: 1 }),
          d._18(603979776, 25, { _icons: 1 }),
          d.Y(22, 16384, null, 0, v.a, [], null, null),
          (l()(), d._20(-1, 2, ['\n          '])),
          (l()(), d.Z(24, 0, null, 1, 3, 'ion-label', [], null, null, null, null, null)),
          d.Y(25, 16384, [[23, 4]], 0, C.a, [m.a, d.j, d.z, [8, null], [8, null], [8, null], [8, null]], null, null),
          (l()(), d._20(26, null, ['', ''])),
          d._14(131072, h.a, [Y.a, d.g]),
          (l()(), d._20(-1, 2, ['\n          '])),
          (l()(),
          d.Z(
            29,
            0,
            null,
            4,
            1,
            'ion-radio',
            [['value', 'rating']],
            [[2, 'radio-disabled', null]],
            [[null, 'click']],
            function(l, n, u) {
              var a = !0;
              if ('click' === n) {
                a = !1 !== d._13(l, 30)._click(u) && a;
              }
              return a;
            },
            k.b,
            k.a,
          )),
          d.Y(30, 245760, null, 0, j.a, [f.a, m.a, d.j, d.z, [2, b.a], [2, Z.a]], { value: [0, 'value'] }, null),
          (l()(), d._20(-1, 2, ['\n        '])),
          (l()(), d._20(-1, null, ['\n        '])),
          (l()(), d.Z(33, 0, null, null, 14, 'ion-item', [['class', 'item item-block']], null, null, null, g.b, g.a)),
          d.Y(34, 1097728, null, 3, b.a, [f.a, m.a, d.j, d.z, [2, p.a]], null, null),
          d._18(335544320, 26, { contentLabel: 0 }),
          d._18(603979776, 27, { _buttons: 1 }),
          d._18(603979776, 28, { _icons: 1 }),
          d.Y(38, 16384, null, 0, v.a, [], null, null),
          (l()(), d._20(-1, 2, ['\n          '])),
          (l()(), d.Z(40, 0, null, 1, 3, 'ion-label', [], null, null, null, null, null)),
          d.Y(41, 16384, [[26, 4]], 0, C.a, [m.a, d.j, d.z, [8, null], [8, null], [8, null], [8, null]], null, null),
          (l()(), d._20(42, null, ['', ''])),
          d._14(131072, h.a, [Y.a, d.g]),
          (l()(), d._20(-1, 2, ['\n          '])),
          (l()(),
          d.Z(
            45,
            0,
            null,
            4,
            1,
            'ion-radio',
            [['value', 'favorite']],
            [[2, 'radio-disabled', null]],
            [[null, 'click']],
            function(l, n, u) {
              var a = !0;
              if ('click' === n) {
                a = !1 !== d._13(l, 46)._click(u) && a;
              }
              return a;
            },
            k.b,
            k.a,
          )),
          d.Y(46, 245760, null, 0, j.a, [f.a, m.a, d.j, d.z, [2, b.a], [2, Z.a]], { value: [0, 'value'] }, null),
          (l()(), d._20(-1, 2, ['\n        '])),
          (l()(), d._20(-1, null, ['\n        '])),
          (l()(), d.Z(49, 0, null, null, 14, 'ion-item', [['class', 'item item-block']], null, null, null, g.b, g.a)),
          d.Y(50, 1097728, null, 3, b.a, [f.a, m.a, d.j, d.z, [2, p.a]], null, null),
          d._18(335544320, 29, { contentLabel: 0 }),
          d._18(603979776, 30, { _buttons: 1 }),
          d._18(603979776, 31, { _icons: 1 }),
          d.Y(54, 16384, null, 0, v.a, [], null, null),
          (l()(), d._20(-1, 2, ['\n          '])),
          (l()(), d.Z(56, 0, null, 1, 3, 'ion-label', [], null, null, null, null, null)),
          d.Y(57, 16384, [[29, 4]], 0, C.a, [m.a, d.j, d.z, [8, null], [8, null], [8, null], [8, null]], null, null),
          (l()(), d._20(58, null, ['', ''])),
          d._14(131072, h.a, [Y.a, d.g]),
          (l()(), d._20(-1, 2, ['\n          '])),
          (l()(),
          d.Z(
            61,
            0,
            null,
            4,
            1,
            'ion-radio',
            [['value', 'newest']],
            [[2, 'radio-disabled', null]],
            [[null, 'click']],
            function(l, n, u) {
              var a = !0;
              if ('click' === n) {
                a = !1 !== d._13(l, 62)._click(u) && a;
              }
              return a;
            },
            k.b,
            k.a,
          )),
          d.Y(62, 245760, null, 0, j.a, [f.a, m.a, d.j, d.z, [2, b.a], [2, Z.a]], { value: [0, 'value'] }, null),
          (l()(), d._20(-1, 2, ['\n        '])),
          (l()(), d._20(-1, null, ['\n        '])),
          (l()(), d.Z(65, 0, null, null, 14, 'ion-item', [['class', 'item item-block']], null, null, null, g.b, g.a)),
          d.Y(66, 1097728, null, 3, b.a, [f.a, m.a, d.j, d.z, [2, p.a]], null, null),
          d._18(335544320, 32, { contentLabel: 0 }),
          d._18(603979776, 33, { _buttons: 1 }),
          d._18(603979776, 34, { _icons: 1 }),
          d.Y(70, 16384, null, 0, v.a, [], null, null),
          (l()(), d._20(-1, 2, ['\n          '])),
          (l()(), d.Z(72, 0, null, 1, 3, 'ion-label', [], null, null, null, null, null)),
          d.Y(73, 16384, [[32, 4]], 0, C.a, [m.a, d.j, d.z, [8, null], [8, null], [8, null], [8, null]], null, null),
          (l()(), d._20(74, null, ['', ''])),
          d._14(131072, h.a, [Y.a, d.g]),
          (l()(), d._20(-1, 2, ['\n          '])),
          (l()(),
          d.Z(
            77,
            0,
            null,
            4,
            1,
            'ion-radio',
            [['value', '']],
            [[2, 'radio-disabled', null]],
            [[null, 'click']],
            function(l, n, u) {
              var a = !0;
              if ('click' === n) {
                a = !1 !== d._13(l, 78)._click(u) && a;
              }
              return a;
            },
            k.b,
            k.a,
          )),
          d.Y(78, 245760, null, 0, j.a, [f.a, m.a, d.j, d.z, [2, b.a], [2, Z.a]], { value: [0, 'value'] }, null),
          (l()(), d._20(-1, 2, ['\n        '])),
          (l()(), d._20(-1, null, ['\n      '])),
        ],
        function(l, n) {
          l(n, 14, 0, 'views');
          l(n, 30, 0, 'rating');
          l(n, 46, 0, 'favorite');
          l(n, 62, 0, 'newest');
          l(n, 78, 0, '');
        },
        function(l, n) {
          l(n, 10, 0, d._21(n, 10, 0, d._13(n, 11).transform('VIEWCOUNT')));
          l(n, 13, 0, d._13(n, 14)._disabled);
          l(n, 26, 0, d._21(n, 26, 0, d._13(n, 27).transform('RATING')));
          l(n, 29, 0, d._13(n, 30)._disabled);
          l(n, 42, 0, d._21(n, 42, 0, d._13(n, 43).transform('NUMBEROFFAVORITES')));
          l(n, 45, 0, d._13(n, 46)._disabled);
          l(n, 58, 0, d._21(n, 58, 0, d._13(n, 59).transform('NEWEST')));
          l(n, 61, 0, d._13(n, 62)._disabled);
          l(n, 74, 0, d._21(n, 74, 0, d._13(n, 75).transform('OLDEST')));
          l(n, 77, 0, d._13(n, 78)._disabled);
        },
      );
    }
    function c(l) {
      return d._22(
        0,
        [
          (l()(), d.Z(0, 0, null, null, 3, 'ion-option', [['value', '']], null, null, null, null, null)),
          d.Y(1, 16384, [[50, 4]], 0, z.a, [d.j], { value: [0, 'value'] }, null),
          (l()(), d._20(2, null, ['', ''])),
          d._14(131072, h.a, [Y.a, d.g]),
        ],
        function(l, n) {
          l(n, 1, 0, '');
        },
        function(l, n) {
          l(n, 2, 0, d._21(n, 2, 0, d._13(n, 3).transform('SEARCH_ANYCAT')));
        },
      );
    }
    function r(l) {
      return d._22(
        0,
        [
          (l()(), d.Z(0, 0, null, null, 2, 'ion-option', [], null, null, null, null, null)),
          d.Y(1, 16384, [[50, 4]], 0, z.a, [d.j], { value: [0, 'value'] }, null),
          (l()(), d._20(2, null, ['', ''])),
        ],
        function(l, n) {
          l(n, 1, 0, n.context.$implicit.id);
        },
        function(l, n) {
          l(n, 2, 0, n.context.$implicit.name);
        },
      );
    }
    function s(l) {
      return d._22(
        0,
        [
          d._14(0, M.g, []),
          (l()(), d._20(-1, null, ['\n    '])),
          (l()(), d._20(-1, null, ['\n\n    '])),
          (l()(),
          d.Z(
            3,
            0,
            null,
            null,
            22,
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
            function(l, n, u) {
              var a = !0;
              if ('ngModelChange' === n) {
                a = !1 !== (l.component.options.sort = u) && a;
              }
              return a;
            },
            null,
            null,
          )),
          d.Y(4, 1064960, null, 1, Z.a, [d.z, d.j, d.g], null, null),
          d._18(335544320, 1, { _header: 0 }),
          d._17(
            1024,
            null,
            O.h,
            function(l) {
              return [l];
            },
            [Z.a],
          ),
          d.Y(7, 671744, null, 0, O.m, [[8, null], [8, null], [8, null], [2, O.h]], { model: [0, 'model'] }, { update: 'ngModelChange' }),
          d._17(2048, null, O.i, null, [O.m]),
          d.Y(9, 16384, null, 0, O.j, [O.i], null, null),
          d.Y(10, 16384, null, 0, P.a, [m.a, d.j, d.z, x.a, y.l, I.a], null, null),
          (l()(), d._20(-1, null, ['\n      '])),
          (l()(), d.Z(12, 0, null, null, 7, 'ion-list-header', [['class', 'item']], null, null, null, g.b, g.a)),
          d.Y(13, 1097728, null, 3, b.a, [f.a, m.a, d.j, d.z, [2, p.a]], null, null),
          d._18(335544320, 2, { contentLabel: 0 }),
          d._18(603979776, 3, { _buttons: 1 }),
          d._18(603979776, 4, { _icons: 1 }),
          d.Y(17, 16384, [[1, 4]], 0, E.a, [m.a, d.z, d.j, [8, null]], null, null),
          (l()(), d._20(18, 2, ['', ''])),
          d._14(131072, h.a, [Y.a, d.g]),
          (l()(), d._20(-1, null, ['\n\n      '])),
          (l()(), d.U(16777216, null, null, 1, null, o)),
          d.Y(22, 16384, null, 0, L.j, [d.I, d.F], { ngIf: [0, 'ngIf'], ngIfElse: [1, 'ngIfElse'] }, null),
          (l()(), d._20(-1, null, ['\n\n      '])),
          (l()(), d.U(0, [['tagsSort', 2]], null, 0, null, _)),
          (l()(), d._20(-1, null, ['\n    '])),
          (l()(), d._20(-1, null, ['\n\n    '])),
          (l()(), d.Z(27, 0, null, null, 7, 'ion-list-header', [['class', 'item']], null, null, null, g.b, g.a)),
          d.Y(28, 1097728, null, 3, b.a, [f.a, m.a, d.j, d.z, [2, p.a]], null, null),
          d._18(335544320, 35, { contentLabel: 0 }),
          d._18(603979776, 36, { _buttons: 1 }),
          d._18(603979776, 37, { _icons: 1 }),
          d.Y(32, 16384, null, 0, E.a, [m.a, d.z, d.j, [8, null]], null, null),
          (l()(), d._20(33, 2, ['', ''])),
          d._14(131072, h.a, [Y.a, d.g]),
          (l()(), d._20(-1, null, ['\n\n    '])),
          (l()(), d.Z(36, 0, null, null, 78, 'ion-grid', [['class', 'grid']], null, null, null, null, null)),
          d.Y(37, 16384, null, 0, w.a, [], null, null),
          (l()(), d._20(-1, null, ['\n      '])),
          (l()(), d.Z(39, 0, null, null, 74, 'ion-row', [['class', 'row']], null, null, null, null, null)),
          d.Y(40, 16384, null, 0, T.a, [], null, null),
          (l()(), d._20(-1, null, ['\n        '])),
          (l()(), d.Z(42, 0, null, null, 22, 'ion-col', [['class', 'col'], ['col-auto', '']], null, null, null, null, null)),
          d.Y(43, 16384, null, 0, S.a, [], null, null),
          (l()(), d._20(-1, null, ['\n          '])),
          (l()(), d.Z(45, 0, null, null, 18, 'ion-item', [['class', 'item item-block']], null, null, null, g.b, g.a)),
          d.Y(46, 1097728, null, 3, b.a, [f.a, m.a, d.j, d.z, [2, p.a]], null, null),
          d._18(335544320, 38, { contentLabel: 0 }),
          d._18(603979776, 39, { _buttons: 1 }),
          d._18(603979776, 40, { _icons: 1 }),
          d.Y(50, 16384, null, 0, v.a, [], null, null),
          (l()(), d._20(-1, 2, ['\n            '])),
          (l()(),
          d.Z(
            52,
            0,
            null,
            0,
            5,
            'ion-checkbox',
            [],
            [
              [2, 'checkbox-disabled', null],
              [2, 'ng-untouched', null],
              [2, 'ng-touched', null],
              [2, 'ng-pristine', null],
              [2, 'ng-dirty', null],
              [2, 'ng-valid', null],
              [2, 'ng-invalid', null],
              [2, 'ng-pending', null],
            ],
            [[null, 'ngModelChange'], [null, 'click']],
            function(l, n, u) {
              var a = !0,
                t = l.component;
              if ('click' === n) {
                a = !1 !== d._13(l, 53)._click(u) && a;
              }
              if ('ngModelChange' === n) {
                a = !1 !== (t.options.popular = u) && a;
              }
              return a;
            },
            a,
            F,
          )),
          d.Y(53, 1228800, null, 0, U.a, [m.a, f.a, [2, b.a], d.j, d.z], null, null),
          d._17(
            1024,
            null,
            O.h,
            function(l) {
              return [l];
            },
            [U.a],
          ),
          d.Y(55, 671744, null, 0, O.m, [[8, null], [8, null], [8, null], [2, O.h]], { model: [0, 'model'] }, { update: 'ngModelChange' }),
          d._17(2048, null, O.i, null, [O.m]),
          d.Y(57, 16384, null, 0, O.j, [O.i], null, null),
          (l()(), d._20(-1, 2, ['\n            '])),
          (l()(), d.Z(59, 0, null, 1, 3, 'ion-label', [], null, null, null, null, null)),
          d.Y(60, 16384, [[38, 4]], 0, C.a, [m.a, d.j, d.z, [8, null], [8, null], [8, null], [8, null]], null, null),
          (l()(), d._20(61, null, ['', ''])),
          d._14(131072, h.a, [Y.a, d.g]),
          (l()(), d._20(-1, 2, ['\n          '])),
          (l()(), d._20(-1, null, ['\n        '])),
          (l()(), d._20(-1, null, ['\n        '])),
          (l()(), d.Z(66, 0, null, null, 22, 'ion-col', [['class', 'col'], ['col-auto', '']], null, null, null, null, null)),
          d.Y(67, 16384, null, 0, S.a, [], null, null),
          (l()(), d._20(-1, null, ['\n          '])),
          (l()(), d.Z(69, 0, null, null, 18, 'ion-item', [['class', 'item item-block']], null, null, null, g.b, g.a)),
          d.Y(70, 1097728, null, 3, b.a, [f.a, m.a, d.j, d.z, [2, p.a]], null, null),
          d._18(335544320, 41, { contentLabel: 0 }),
          d._18(603979776, 42, { _buttons: 1 }),
          d._18(603979776, 43, { _icons: 1 }),
          d.Y(74, 16384, null, 0, v.a, [], null, null),
          (l()(), d._20(-1, 2, ['\n            '])),
          (l()(),
          d.Z(
            76,
            0,
            null,
            0,
            5,
            'ion-checkbox',
            [],
            [
              [2, 'checkbox-disabled', null],
              [2, 'ng-untouched', null],
              [2, 'ng-touched', null],
              [2, 'ng-pristine', null],
              [2, 'ng-dirty', null],
              [2, 'ng-valid', null],
              [2, 'ng-invalid', null],
              [2, 'ng-pending', null],
            ],
            [[null, 'ngModelChange'], [null, 'click']],
            function(l, n, u) {
              var a = !0,
                t = l.component;
              if ('click' === n) {
                a = !1 !== d._13(l, 77)._click(u) && a;
              }
              if ('ngModelChange' === n) {
                a = !1 !== (t.options.editorsChoice = u) && a;
              }
              return a;
            },
            a,
            F,
          )),
          d.Y(77, 1228800, null, 0, U.a, [m.a, f.a, [2, b.a], d.j, d.z], null, null),
          d._17(
            1024,
            null,
            O.h,
            function(l) {
              return [l];
            },
            [U.a],
          ),
          d.Y(79, 671744, null, 0, O.m, [[8, null], [8, null], [8, null], [2, O.h]], { model: [0, 'model'] }, { update: 'ngModelChange' }),
          d._17(2048, null, O.i, null, [O.m]),
          d.Y(81, 16384, null, 0, O.j, [O.i], null, null),
          (l()(), d._20(-1, 2, ['\n            '])),
          (l()(), d.Z(83, 0, null, 1, 3, 'ion-label', [], null, null, null, null, null)),
          d.Y(84, 16384, [[41, 4]], 0, C.a, [m.a, d.j, d.z, [8, null], [8, null], [8, null], [8, null]], null, null),
          (l()(), d._20(85, null, ['', ''])),
          d._14(131072, h.a, [Y.a, d.g]),
          (l()(), d._20(-1, 2, ['\n          '])),
          (l()(), d._20(-1, null, ['\n        '])),
          (l()(), d._20(-1, null, ['\n        '])),
          (l()(), d.Z(90, 0, null, null, 22, 'ion-col', [['class', 'col'], ['col-auto', '']], null, null, null, null, null)),
          d.Y(91, 16384, null, 0, S.a, [], null, null),
          (l()(), d._20(-1, null, ['\n          '])),
          (l()(), d.Z(93, 0, null, null, 18, 'ion-item', [['class', 'item item-block']], null, null, null, g.b, g.a)),
          d.Y(94, 1097728, null, 3, b.a, [f.a, m.a, d.j, d.z, [2, p.a]], null, null),
          d._18(335544320, 44, { contentLabel: 0 }),
          d._18(603979776, 45, { _buttons: 1 }),
          d._18(603979776, 46, { _icons: 1 }),
          d.Y(98, 16384, null, 0, v.a, [], null, null),
          (l()(), d._20(-1, 2, ['\n            '])),
          (l()(),
          d.Z(
            100,
            0,
            null,
            0,
            5,
            'ion-checkbox',
            [],
            [
              [2, 'checkbox-disabled', null],
              [2, 'ng-untouched', null],
              [2, 'ng-touched', null],
              [2, 'ng-pristine', null],
              [2, 'ng-dirty', null],
              [2, 'ng-valid', null],
              [2, 'ng-invalid', null],
              [2, 'ng-pending', null],
            ],
            [[null, 'ngModelChange'], [null, 'click']],
            function(l, n, u) {
              var a = !0,
                t = l.component;
              if ('click' === n) {
                a = !1 !== d._13(l, 101)._click(u) && a;
              }
              if ('ngModelChange' === n) {
                a = !1 !== (t.options.winner = u) && a;
              }
              return a;
            },
            a,
            F,
          )),
          d.Y(101, 1228800, null, 0, U.a, [m.a, f.a, [2, b.a], d.j, d.z], null, null),
          d._17(
            1024,
            null,
            O.h,
            function(l) {
              return [l];
            },
            [U.a],
          ),
          d.Y(103, 671744, null, 0, O.m, [[8, null], [8, null], [8, null], [2, O.h]], { model: [0, 'model'] }, { update: 'ngModelChange' }),
          d._17(2048, null, O.i, null, [O.m]),
          d.Y(105, 16384, null, 0, O.j, [O.i], null, null),
          (l()(), d._20(-1, 2, ['\n            '])),
          (l()(), d.Z(107, 0, null, 1, 3, 'ion-label', [], null, null, null, null, null)),
          d.Y(108, 16384, [[44, 4]], 0, C.a, [m.a, d.j, d.z, [8, null], [8, null], [8, null], [8, null]], null, null),
          (l()(), d._20(109, null, ['', ''])),
          d._14(131072, h.a, [Y.a, d.g]),
          (l()(), d._20(-1, 2, ['\n          '])),
          (l()(), d._20(-1, null, ['\n        '])),
          (l()(), d._20(-1, null, ['\n      '])),
          (l()(), d._20(-1, null, ['\n    '])),
          (l()(), d._20(-1, null, ['\n\n    '])),
          (l()(), d.Z(116, 0, null, null, 27, 'ion-item', [['class', 'item item-block']], null, null, null, g.b, g.a)),
          d.Y(117, 1097728, null, 3, b.a, [f.a, m.a, d.j, d.z, [2, p.a]], null, null),
          d._18(335544320, 47, { contentLabel: 0 }),
          d._18(603979776, 48, { _buttons: 1 }),
          d._18(603979776, 49, { _icons: 1 }),
          d.Y(121, 16384, null, 0, v.a, [], null, null),
          (l()(), d._20(-1, 2, ['\n      '])),
          (l()(), d.Z(123, 0, null, 1, 3, 'ion-label', [], null, null, null, null, null)),
          d.Y(124, 16384, [[47, 4]], 0, C.a, [m.a, d.j, d.z, [8, null], [8, null], [8, null], [8, null]], null, null),
          (l()(), d._20(125, null, ['', ''])),
          d._14(131072, h.a, [Y.a, d.g]),
          (l()(), d._20(-1, 2, ['\n      '])),
          (l()(),
          d.Z(
            128,
            0,
            null,
            3,
            14,
            'ion-select',
            [],
            [
              [2, 'select-disabled', null],
              [2, 'ng-untouched', null],
              [2, 'ng-touched', null],
              [2, 'ng-pristine', null],
              [2, 'ng-dirty', null],
              [2, 'ng-valid', null],
              [2, 'ng-invalid', null],
              [2, 'ng-pending', null],
            ],
            [[null, 'ngModelChange'], [null, 'click'], [null, 'keyup.space']],
            function(l, n, u) {
              var a = !0,
                t = l.component;
              if ('click' === n) {
                a = !1 !== d._13(l, 129)._click(u) && a;
              }
              if ('keyup.space' === n) {
                a = !1 !== d._13(l, 129)._keyup() && a;
              }
              if ('ngModelChange' === n) {
                a = !1 !== (t.options.category = u) && a;
              }
              return a;
            },
            i,
            G,
          )),
          d.Y(129, 1228800, null, 1, N.a, [D.a, f.a, m.a, d.j, d.z, [2, b.a], V.a], { multiple: [0, 'multiple'] }, null),
          d._18(603979776, 50, { options: 1 }),
          d._17(
            1024,
            null,
            O.h,
            function(l) {
              return [l];
            },
            [N.a],
          ),
          d.Y(132, 671744, null, 0, O.m, [[8, null], [8, null], [8, null], [2, O.h]], { model: [0, 'model'] }, { update: 'ngModelChange' }),
          d._17(2048, null, O.i, null, [O.m]),
          d.Y(134, 16384, null, 0, O.j, [O.i], null, null),
          (l()(), d._20(-1, null, ['\n        '])),
          (l()(), d.U(16777216, null, null, 1, null, c)),
          d.Y(137, 16384, null, 0, L.j, [d.I, d.F], { ngIf: [0, 'ngIf'] }, null),
          (l()(), d._20(-1, null, ['\n        '])),
          (l()(), d.U(16777216, null, null, 2, null, r)),
          d.Y(140, 802816, null, 0, L.i, [d.I, d.F, d.p], { ngForOf: [0, 'ngForOf'] }, null),
          d._16(141, 2),
          (l()(), d._20(-1, null, ['\n      '])),
          (l()(), d._20(-1, 2, ['\n    '])),
          (l()(), d._20(-1, null, ['\n\n    '])),
          (l()(), d.Z(145, 0, null, null, 18, 'ion-item', [['class', 'item item-block']], null, null, null, g.b, g.a)),
          d.Y(146, 1097728, null, 3, b.a, [f.a, m.a, d.j, d.z, [2, p.a]], null, null),
          d._18(335544320, 51, { contentLabel: 0 }),
          d._18(603979776, 52, { _buttons: 1 }),
          d._18(603979776, 53, { _icons: 1 }),
          d.Y(150, 16384, null, 0, v.a, [], null, null),
          (l()(), d._20(-1, 2, ['\n      '])),
          (l()(),
          d.Z(
            152,
            0,
            null,
            0,
            5,
            'ion-checkbox',
            [],
            [
              [2, 'checkbox-disabled', null],
              [2, 'ng-untouched', null],
              [2, 'ng-touched', null],
              [2, 'ng-pristine', null],
              [2, 'ng-dirty', null],
              [2, 'ng-valid', null],
              [2, 'ng-invalid', null],
              [2, 'ng-pending', null],
            ],
            [[null, 'ngModelChange'], [null, 'click']],
            function(l, n, u) {
              var a = !0,
                t = l.component;
              if ('click' === n) {
                a = !1 !== d._13(l, 153)._click(u) && a;
              }
              if ('ngModelChange' === n) {
                a = !1 !== (t.options.astags = u) && a;
              }
              if ('click' === n) {
                a = !1 !== t.changeDefaultSort() && a;
              }
              return a;
            },
            a,
            F,
          )),
          d.Y(153, 1228800, null, 0, U.a, [m.a, f.a, [2, b.a], d.j, d.z], null, null),
          d._17(
            1024,
            null,
            O.h,
            function(l) {
              return [l];
            },
            [U.a],
          ),
          d.Y(155, 671744, null, 0, O.m, [[8, null], [8, null], [8, null], [2, O.h]], { model: [0, 'model'] }, { update: 'ngModelChange' }),
          d._17(2048, null, O.i, null, [O.m]),
          d.Y(157, 16384, null, 0, O.j, [O.i], null, null),
          (l()(), d._20(-1, 2, ['\n      '])),
          (l()(), d.Z(159, 0, null, 1, 3, 'ion-label', [], null, null, null, null, null)),
          d.Y(160, 16384, [[51, 4]], 0, C.a, [m.a, d.j, d.z, [8, null], [8, null], [8, null], [8, null]], null, null),
          (l()(), d._20(161, null, ['', ''])),
          d._14(131072, h.a, [Y.a, d.g]),
          (l()(), d._20(-1, 2, ['\n    '])),
          (l()(), d._20(-1, null, ['\n\n    '])),
          (l()(),
          d.Z(
            165,
            0,
            null,
            null,
            3,
            'button',
            [['ion-button', '']],
            null,
            [[null, 'click']],
            function(l, n, u) {
              var a = !0;
              if ('click' === n) {
                a = !1 !== l.component.save() && a;
              }
              return a;
            },
            A.b,
            A.a,
          )),
          d.Y(166, 1097728, null, 0, R.a, [[8, ''], m.a, d.j, d.z], null, null),
          (l()(), d._20(167, 0, ['', ''])),
          d._14(131072, h.a, [Y.a, d.g]),
          (l()(), d._20(-1, null, ['\n  '])),
        ],
        function(l, n) {
          var u = n.component;
          l(n, 7, 0, u.options.sort);
          l(n, 22, 0, !u.options.astags, d._13(n, 24));
          l(n, 55, 0, u.options.popular);
          l(n, 79, 0, u.options.editorsChoice);
          l(n, 103, 0, u.options.winner);
          l(n, 129, 0, !u.options.astags);
          l(n, 132, 0, u.options.category);
          l(n, 137, 0, u.options.astags);
          l(n, 140, 0, d._21(n, 140, 0, l(n, 141, 0, d._13(n, 0), u.categories, 'name')));
          l(n, 155, 0, u.options.astags);
        },
        function(l, n) {
          l(
            n,
            3,
            0,
            d._13(n, 9).ngClassUntouched,
            d._13(n, 9).ngClassTouched,
            d._13(n, 9).ngClassPristine,
            d._13(n, 9).ngClassDirty,
            d._13(n, 9).ngClassValid,
            d._13(n, 9).ngClassInvalid,
            d._13(n, 9).ngClassPending,
          );
          l(n, 18, 0, d._21(n, 18, 0, d._13(n, 19).transform('SEARCH_SORT')));
          l(n, 33, 0, d._21(n, 33, 0, d._13(n, 34).transform('SEARCH_ONLYSPECIAL')));
          l(
            n,
            52,
            0,
            d._13(n, 53)._disabled,
            d._13(n, 57).ngClassUntouched,
            d._13(n, 57).ngClassTouched,
            d._13(n, 57).ngClassPristine,
            d._13(n, 57).ngClassDirty,
            d._13(n, 57).ngClassValid,
            d._13(n, 57).ngClassInvalid,
            d._13(n, 57).ngClassPending,
          );
          l(n, 61, 0, d._21(n, 61, 0, d._13(n, 62).transform('HOT_TAG')));
          l(
            n,
            76,
            0,
            d._13(n, 77)._disabled,
            d._13(n, 81).ngClassUntouched,
            d._13(n, 81).ngClassTouched,
            d._13(n, 81).ngClassPristine,
            d._13(n, 81).ngClassDirty,
            d._13(n, 81).ngClassValid,
            d._13(n, 81).ngClassInvalid,
            d._13(n, 81).ngClassPending,
          );
          l(n, 85, 0, d._21(n, 85, 0, d._13(n, 86).transform('WRITER_TAG')));
          l(
            n,
            100,
            0,
            d._13(n, 101)._disabled,
            d._13(n, 105).ngClassUntouched,
            d._13(n, 105).ngClassTouched,
            d._13(n, 105).ngClassPristine,
            d._13(n, 105).ngClassDirty,
            d._13(n, 105).ngClassValid,
            d._13(n, 105).ngClassInvalid,
            d._13(n, 105).ngClassPending,
          );
          l(n, 109, 0, d._21(n, 109, 0, d._13(n, 110).transform('WINNER_TAG')));
          l(n, 125, 0, d._21(n, 125, 0, d._13(n, 126).transform('SEARCH_CATEGORY')));
          l(
            n,
            128,
            0,
            d._13(n, 129)._disabled,
            d._13(n, 134).ngClassUntouched,
            d._13(n, 134).ngClassTouched,
            d._13(n, 134).ngClassPristine,
            d._13(n, 134).ngClassDirty,
            d._13(n, 134).ngClassValid,
            d._13(n, 134).ngClassInvalid,
            d._13(n, 134).ngClassPending,
          );
          l(
            n,
            152,
            0,
            d._13(n, 153)._disabled,
            d._13(n, 157).ngClassUntouched,
            d._13(n, 157).ngClassTouched,
            d._13(n, 157).ngClassPristine,
            d._13(n, 157).ngClassDirty,
            d._13(n, 157).ngClassValid,
            d._13(n, 157).ngClassInvalid,
            d._13(n, 157).ngClassPending,
          );
          l(n, 161, 0, d._21(n, 161, 0, d._13(n, 162).transform('SEARCH_TAGS')));
          l(n, 167, 0, d._21(n, 167, 0, d._13(n, 168).transform('SEARCH')));
        },
      );
    }
    var d = u(1),
      g = u(189),
      b = u(25),
      f = u(22),
      m = u(3),
      p = u(58),
      v = u(85),
      C = u(65),
      h = u(125),
      Y = u(39),
      k = u(394),
      j = u(92),
      Z = u(67),
      z = u(142),
      M = u(703),
      O = u(28),
      P = u(64),
      x = u(6),
      y = u(10),
      I = u(12),
      E = u(130),
      L = u(18),
      w = u(217),
      T = u(207),
      S = u(206),
      A = u(62),
      R = u(29),
      U = u(205),
      F = d.X({ encapsulation: 2, styles: [], data: {} }),
      N = u(212),
      D = u(13),
      V = u(23),
      G = d.X({ encapsulation: 2, styles: [], data: {} }),
      H = u(723),
      W = u(16),
      X = u(7),
      B = u(68);
    u.d(n, 'a', function() {
      return J;
    });
    var $ = d.X({
        encapsulation: 0,
        styles: [
          'h5[_ngcontent-%COMP%] {\n        margin: 15px 15px 5px 15px;\n      }\n\n      .list-header-md[_ngcontent-%COMP%] {\n        border: none;\n      }\n\n      .list[_ngcontent-%COMP%] {\n        margin-bottom: 10px;\n        overflow-x: hidden;\n      }\n\n        search-popover .item-inner {\n        border: none !important;\n      }\n\n      .list-md[_ngcontent-%COMP%]   .item-block[_ngcontent-%COMP%]   .item-inner[_ngcontent-%COMP%] {\n        border-color: #666;\n      }\n\n      .item-checkbox[_ngcontent-%COMP%] {\n        padding-left: 10px;\n      }\n\n      .checkbox[_ngcontent-%COMP%] {\n        margin-right: 8px !important;\n      }\n\n      .tags[_ngcontent-%COMP%] {\n        overflow-x: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis;\n      }\n\n      .list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n        white-space: normal;\n      }\n\n      .grid[_ngcontent-%COMP%] {\n        padding: 0 15px 0 15px;\n        font-size: 0.8em;\n      }\n\n      .grid[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n        padding: 0;\n      }\n\n      .grid[_ngcontent-%COMP%]   .item-md[_ngcontent-%COMP%] {\n        padding-left: 0;\n      }\n\n      .grid[_ngcontent-%COMP%]   .item-md[_ngcontent-%COMP%]   .item-inner[_ngcontent-%COMP%] {\n        padding-right: 0;\n      }\n\n      .grid[_ngcontent-%COMP%]   .item-md[_ngcontent-%COMP%]   .checkbox-md[_ngcontent-%COMP%] {\n        margin: 0 5px 0 0;\n      }\n\n      .grid[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n        font-size: 0.8em;\n      }\n\n      .select[_ngcontent-%COMP%] {\n        margin: 10px 0;\n      }\n\n      .button[_ngcontent-%COMP%] {\n        margin: 15px 10px;\n      }',
        ],
        data: {},
      }),
      J = d.V(
        'search-popover',
        H.a,
        function(l) {
          return d._22(
            0,
            [
              (l()(), d.Z(0, 0, null, null, 1, 'search-popover', [], null, null, null, s, $)),
              d.Y(1, 49152, null, 0, H.a, [W.a, X.a, B.a], null, null),
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
