webpackJsonp([5], {
  686: function(n, l, t) {
    'use strict';
    function o(n) {
      return e._22(
        0,
        [
          (n()(),
          e.Z(
            0,
            0,
            null,
            null,
            7,
            'button',
            [['end', ''], ['event', 'press'], ['icon-only', ''], ['ion-button', ''], ['navTooltip', '']],
            null,
            [[null, 'click'], [null, 'press'], [null, 'mouseenter'], [null, 'mouseleave']],
            function(n, l, t) {
              var o = !0,
                u = n.component;
              if ('click' === l) {
                o = !1 !== e._13(n, 2).onClick() && o;
              }
              if ('press' === l) {
                o = !1 !== e._13(n, 2).onPress() && o;
              }
              if ('mouseenter' === l) {
                o = !1 !== e._13(n, 2).onMouseEnter() && o;
              }
              if ('mouseleave' === l) {
                o = !1 !== e._13(n, 2).onMouseLeave() && o;
              }
              if ('click' === l) {
                o = !1 !== u.clearAll() && o;
              }
              return o;
            },
            Y.b,
            Y.a,
          )),
          e.Y(1, 1097728, [[2, 4]], 0, j.a, [[8, ''], S.a, e.j, e.z], null, null),
          e.Y(
            2,
            4210688,
            null,
            0,
            k.a,
            [e.j, e.f, Z.a, e.i],
            { tooltip: [0, 'tooltip'], event: [1, 'event'], navTooltip: [2, 'navTooltip'] },
            null,
          ),
          e._14(131072, C.a, [O.a, e.g]),
          (n()(), e._20(-1, 0, ['\n        '])),
          (n()(), e.Z(5, 0, null, 0, 1, 'ion-icon', [['name', 'trash'], ['role', 'img']], [[2, 'hide', null]], null, null, null, null)),
          e.Y(6, 147456, null, 0, D.a, [S.a, e.j, e.z], { name: [0, 'name'] }, null),
          (n()(), e._20(-1, 0, ['\n      '])),
        ],
        function(n, l) {
          n(l, 2, 0, e._21(l, 2, 0, e._13(l, 3).transform('HISTORY_TOOLTIP_CLEAR')), 'press', '');
          n(l, 6, 0, 'trash');
        },
        function(n, l) {
          n(l, 5, 0, e._13(l, 6)._hidden);
        },
      );
    }
    function u(n) {
      return e._22(
        0,
        [
          (n()(), e.Z(0, 0, null, null, 38, 'ion-header', [], null, null, null, null, null)),
          e.Y(1, 16384, null, 0, x.a, [S.a, e.j, e.z, [2, B.a]], null, null),
          (n()(), e._20(-1, null, ['\n\n  '])),
          (n()(),
          e.Z(
            3,
            0,
            null,
            null,
            34,
            'ion-navbar',
            [['class', 'toolbar']],
            [[8, 'hidden', 0], [2, 'statusbar-padding', null]],
            null,
            null,
            E.b,
            E.a,
          )),
          e.Y(4, 49152, null, 0, z.a, [F.a, [2, B.a], [2, L.a], S.a, e.j, e.z], null, null),
          (n()(), e._20(-1, 3, ['\n  \t'])),
          (n()(),
          e.Z(
            6,
            0,
            null,
            0,
            8,
            'button',
            [['icon-only', ''], ['ion-button', ''], ['menuToggle', '']],
            [[8, 'hidden', 0]],
            [[null, 'click']],
            function(n, l, t) {
              var o = !0;
              if ('click' === l) {
                o = !1 !== e._13(n, 8).toggle() && o;
              }
              return o;
            },
            Y.b,
            Y.a,
          )),
          e.Y(7, 1097728, [[1, 4]], 0, j.a, [[8, ''], S.a, e.j, e.z], null, null),
          e.Y(8, 1064960, null, 0, P.a, [M.a, [2, B.a], [2, j.a], [2, z.a]], { menuToggle: [0, 'menuToggle'] }, null),
          e.Y(9, 16384, null, 1, A.a, [S.a, e.j, e.z, [2, R.a], [2, z.a]], null, null),
          e._18(603979776, 1, { _buttons: 1 }),
          (n()(), e._20(-1, 0, ['\n      '])),
          (n()(), e.Z(12, 0, null, 0, 1, 'ion-icon', [['name', 'menu'], ['role', 'img']], [[2, 'hide', null]], null, null, null, null)),
          e.Y(13, 147456, null, 0, D.a, [S.a, e.j, e.z], { name: [0, 'name'] }, null),
          (n()(), e._20(-1, 0, ['\n    '])),
          (n()(), e._20(-1, 3, ['\n    '])),
          (n()(), e.Z(16, 0, null, 3, 3, 'ion-title', [], null, null, null, U.b, U.a)),
          e.Y(17, 49152, null, 0, N.a, [S.a, e.j, e.z, [2, R.a], [2, z.a]], null, null),
          (n()(), e._20(18, 0, ['', ''])),
          e._14(131072, C.a, [O.a, e.g]),
          (n()(), e._20(-1, 3, ['\n    '])),
          (n()(), e.Z(21, 0, null, 2, 15, 'ion-buttons', [['end', '']], null, null, null, null, null)),
          e.Y(22, 16384, null, 1, A.a, [S.a, e.j, e.z, [2, R.a], [2, z.a]], null, null),
          e._18(603979776, 2, { _buttons: 1 }),
          (n()(), e._20(-1, null, ['\n      '])),
          (n()(), e.U(16777216, null, null, 1, null, o)),
          e.Y(26, 16384, null, 0, H.j, [e.I, e.F], { ngIf: [0, 'ngIf'] }, null),
          (n()(), e._20(-1, null, ['\n\n      '])),
          (n()(),
          e.Z(
            28,
            0,
            null,
            null,
            7,
            'button',
            [['end', ''], ['event', 'press'], ['icon-only', ''], ['ion-button', ''], ['navTooltip', '']],
            null,
            [[null, 'click'], [null, 'press'], [null, 'mouseenter'], [null, 'mouseleave']],
            function(n, l, t) {
              var o = !0,
                u = n.component;
              if ('click' === l) {
                o = !1 !== e._13(n, 30).onClick() && o;
              }
              if ('press' === l) {
                o = !1 !== e._13(n, 30).onPress() && o;
              }
              if ('mouseenter' === l) {
                o = !1 !== e._13(n, 30).onMouseEnter() && o;
              }
              if ('mouseleave' === l) {
                o = !1 !== e._13(n, 30).onMouseLeave() && o;
              }
              if ('click' === l) {
                o = !1 !== u.toggleDownloaded() && o;
              }
              return o;
            },
            Y.b,
            Y.a,
          )),
          e.Y(29, 1097728, [[2, 4]], 0, j.a, [[8, ''], S.a, e.j, e.z], null, null),
          e.Y(
            30,
            4210688,
            null,
            0,
            k.a,
            [e.j, e.f, Z.a, e.i],
            { tooltip: [0, 'tooltip'], event: [1, 'event'], navTooltip: [2, 'navTooltip'] },
            null,
          ),
          e._14(131072, C.a, [O.a, e.g]),
          (n()(), e._20(-1, 0, ['\n        '])),
          (n()(), e.Z(33, 0, null, 0, 1, 'ion-icon', [['role', 'img']], [[2, 'hide', null]], null, null, null, null)),
          e.Y(34, 147456, null, 0, D.a, [S.a, e.j, e.z], { name: [0, 'name'] }, null),
          (n()(), e._20(-1, 0, ['\n      '])),
          (n()(), e._20(-1, null, ['\n\t  '])),
          (n()(), e._20(-1, 3, ['\n  '])),
          (n()(), e._20(-1, null, ['\n\n'])),
          (n()(), e._20(-1, null, ['\n\n\n'])),
          (n()(),
          e.Z(
            40,
            0,
            null,
            null,
            6,
            'ion-content',
            [['padding', '']],
            [[2, 'statusbar-padding', null], [2, 'has-refresher', null]],
            null,
            null,
            V.b,
            V.a,
          )),
          e.Y(41, 4374528, null, 0, $.a, [S.a, Z.a, W.a, e.j, e.z, F.a, X.a, e.u, [2, B.a], [2, L.a]], null, null),
          (n()(), e._20(-1, 1, ['\n  '])),
          (n()(),
          e.Z(
            43,
            0,
            null,
            1,
            2,
            'story-list',
            [['ishistory', 'true']],
            null,
            [[null, 'onDeleteBySwiping'], [null, 'onDownloadBySwiping']],
            function(n, l, t) {
              var o = !0,
                u = n.component;
              if ('onDeleteBySwiping' === l) {
                o = !1 !== u.delete(t) && o;
              }
              if ('onDownloadBySwiping' === l) {
                o = !1 !== u.download(t) && o;
              }
              return o;
            },
            I.c,
            I.a,
          )),
          e.Y(
            44,
            49152,
            null,
            0,
            q.a,
            [L.a],
            { stories: [0, 'stories'], ishistory: [1, 'ishistory'] },
            { onDeleteBySwiping: 'onDeleteBySwiping', onDownloadBySwiping: 'onDownloadBySwiping' },
          ),
          (n()(), e._20(-1, null, ['\n  '])),
          (n()(), e._20(-1, 1, ['\n'])),
          (n()(), e._20(-1, null, ['\n'])),
        ],
        function(n, l) {
          var t = l.component;
          n(l, 8, 0, '');
          n(l, 13, 0, 'menu');
          n(l, 26, 0, !t.onlyDownloaded && t.stories.length > 0);
          n(l, 30, 0, e._21(l, 30, 0, e._13(l, 31).transform('HISTORY_TOOLTIP_DOWNLOADS')), 'press', '');
          n(l, 34, 0, t.onlyDownloaded ? 'cloud' : 'cloud-download');
          n(l, 44, 0, t.filteredStories, 'true');
        },
        function(n, l) {
          var t = l.component;
          n(l, 3, 0, e._13(l, 4)._hidden, e._13(l, 4)._sbPadding);
          n(l, 6, 0, e._13(l, 8).isHidden);
          n(l, 12, 0, e._13(l, 13)._hidden);
          n(l, 18, 0, e._21(l, 18, 0, e._13(l, 19).transform(t.onlyDownloaded ? 'HISTORY_TITLE_DOWNLOADED' : 'HISTORY_TITLE')));
          n(l, 33, 0, e._13(l, 34)._hidden);
          n(l, 40, 0, e._13(l, 41).statusbarPadding, e._13(l, 41)._hasRefresher);
        },
      );
    }
    Object.defineProperty(l, '__esModule', { value: !0 });
    var e = t(1),
      i = (t(0), t(57), t(50)),
      r = (t(706), t(41), t(69)),
      a =
        (t(190),
        (function() {
          function n(n, l, t, o, u) {
            var e = this;
            (this.translate = n),
              (this.navCtrl = l),
              (this.alertCtrl = t),
              (this.storage = o),
              (this.s = u),
              (this.stories = []),
              (this.filteredStories = []),
              (this.onlyDownloaded = !1),
              this.translate.get(['HISTORY_TOOLTIP_CLEAR', 'CONFIRM', 'OK_BUTTON', 'CANCEL_BUTTON']).subscribe(function(n) {
                e.translations = n;
              });
          }
          return (
            (n.prototype.ionViewWillEnter = function() {
              var n = this;
              this.s.onReady().then(function() {
                n.storage.get(r.c).then(function(l) {
                  var t = 0;
                  l &&
                    l.forEach(function(o, u) {
                      n.s.getById(o).subscribe(function(o) {
                        o && (n.stories[l.length - u - 1] = o), (t += 1) === l.length && n.loadingFinished();
                      });
                    });
                });
              });
            }),
            (n.prototype.toggleDownloaded = function() {
              (this.onlyDownloaded = !this.onlyDownloaded), this.updateFilter();
            }),
            (n.prototype.loadingFinished = function() {
              var n = this;
              this.stories
                .filter(function(n, l) {
                  if (l > 29) return n;
                })
                .forEach(function(l) {
                  l.downloaded || n.delete(l);
                }),
                this.updateFilter();
            }),
            (n.prototype.updateFilter = function() {
              var n = this;
              if (this.onlyDownloaded) {
                this.filteredStories = [];
                var l = [];
                this.storage.forEach(function(t, o, u) {
                  0 === o.indexOf(r.h) &&
                    t.downloaded &&
                    n.s.getById(t.id).subscribe(function(n) {
                      l.push(n);
                    });
                }),
                  l.sort(function(n) {
                    return n.downloadtimestamp;
                  }),
                  (this.filteredStories = l);
              } else this.filteredStories = this.stories;
            }),
            (n.prototype.clearAll = function() {
              var n = this;
              this.alertCtrl
                .create({
                  title: this.translations.HISTORY_TOOLTIP_CLEAR,
                  message: this.translations.CONFIRM,
                  buttons: [
                    {
                      text: this.translations.OK_BUTTON,
                      handler: function() {
                        (n.onlyDownloaded = !1),
                          n.stories.forEach(function(l) {
                            l.downloaded || n.s.uncache(l);
                          }),
                          (n.stories = []),
                          n.storage.remove(r.c),
                          n.updateFilter();
                      },
                    },
                    { text: this.translations.CANCEL_BUTTON },
                  ],
                })
                .present();
            }),
            (n.prototype.delete = function(n) {
              var l = this;
              this.s.uncache(n),
                this.storage.get(r.c).then(function(t) {
                  t &&
                    (t.forEach(function(l, o) {
                      l === n.id && t.splice(o, 1);
                    }),
                    l.storage.set(r.c, t));
                }),
                this.stories.forEach(function(t, o) {
                  t === n && (l.stories.splice(o, 1), l.updateFilter());
                });
            }),
            (n.prototype.download = function(n) {
              this.s.download(n);
            }),
            n
          );
        })()),
      s = t(718),
      c = (function() {
        return function() {};
      })(),
      f = t(381),
      p = t(382),
      _ = t(383),
      d = t(384),
      h = t(385),
      m = t(386),
      g = t(387),
      y = t(388),
      b = t(389),
      v = t(712),
      w = t(716),
      T = t(714),
      I = t(719),
      Y = t(62),
      j = t(29),
      S = t(3),
      k = t(704),
      Z = t(6),
      C = t(125),
      O = t(39),
      D = t(63),
      x = t(128),
      B = t(7),
      E = t(709),
      z = t(51),
      F = t(13),
      L = t(30),
      P = t(200),
      M = t(33),
      A = t(195),
      R = t(53),
      U = t(390),
      N = t(90),
      H = t(18),
      V = t(391),
      $ = t(31),
      W = t(12),
      X = t(36),
      q = t(715),
      K = t(93),
      G = t(203),
      J = t(66),
      Q = e.X({ encapsulation: 2, styles: [], data: {} }),
      nn = e.V(
        'page-history',
        a,
        function(n) {
          return e._22(
            0,
            [
              (n()(), e.Z(0, 0, null, null, 1, 'page-history', [], null, null, null, u, Q)),
              e.Y(1, 49152, null, 0, a, [O.a, L.a, K.a, G.a, J.a], null, null),
            ],
            null,
            null,
          );
        },
        {},
        {},
        [],
      ),
      ln = t(28),
      tn = t(86),
      on = t(87),
      un = t(89),
      en = t(88),
      rn = t(126),
      an = t(191),
      sn = t(707),
      cn = t(703),
      fn = t(708),
      pn = t(713),
      _n = t(59);
    t.d(l, 'HistoryPageModuleNgFactory', function() {
      return dn;
    });
    var dn = e.W(c, [], function(n) {
      return e._10([
        e._11(512, e.i, e.S, [[8, [f.a, p.a, _.a, d.a, h.a, m.a, g.a, y.a, b.a, v.a, w.a, T.b, I.b, nn]], [3, e.i], e.s]),
        e._11(4608, H.l, H.k, [e.r, [2, H.t]]),
        e._11(4608, ln.r, ln.r, []),
        e._11(4608, ln.d, ln.d, []),
        e._11(4608, tn.b, tn.a, []),
        e._11(4608, on.a, on.b, []),
        e._11(4608, un.b, un.a, []),
        e._11(4608, en.b, en.a, []),
        e._11(4608, O.a, O.a, [rn.a, tn.b, on.a, un.b, en.b, O.b, O.c]),
        e._11(512, H.b, H.b, []),
        e._11(512, ln.p, ln.p, []),
        e._11(512, ln.g, ln.g, []),
        e._11(512, ln.n, ln.n, []),
        e._11(512, an.a, an.a, []),
        e._11(512, an.b, an.b, []),
        e._11(512, i.a, i.a, []),
        e._11(512, sn.a, sn.a, []),
        e._11(512, cn.a, cn.a, []),
        e._11(512, cn.f, cn.f, []),
        e._11(512, cn.c, cn.c, []),
        e._11(512, cn.b, cn.b, []),
        e._11(512, cn.d, cn.d, []),
        e._11(512, cn.e, cn.e, []),
        e._11(512, fn.a, fn.a, []),
        e._11(512, pn.a, pn.a, []),
        e._11(512, s.a, s.a, []),
        e._11(512, c, c, []),
        e._11(256, _n.a, a, []),
        e._11(256, O.c, void 0, []),
        e._11(256, O.b, void 0, []),
      ]);
    });
  },
  703: function(n, l, t) {
    'use strict';
    function o(n) {
      return void 0 === n;
    }
    function u(n) {
      return 'string' == typeof n;
    }
    function e(n, l) {
      var t = l.split('.'),
        u = t.shift();
      return t.reduce(function(n, l) {
        return o(n) || o(n[l]) ? void 0 : n[l];
      }, n[u || '']);
    }
    t.d(l, 'e', function() {
      return d;
    }),
      t.d(l, 'a', function() {
        return a;
      }),
      t.d(l, 'g', function() {
        return r;
      }),
      t.d(l, 'd', function() {
        return s;
      }),
      t.d(l, 'f', function() {
        return f;
      }),
      t.d(l, 'h', function() {
        return c;
      }),
      t.d(l, 'c', function() {
        return p;
      }),
      t.d(l, 'b', function() {
        return _;
      });
    var i = t(0),
      r = (function() {
        function n() {}
        return (
          (n.prototype.transform = function(l, t) {
            if (!Array.isArray(l)) return l;
            var o = Object(i.__spread)(l);
            if (Array.isArray(t))
              return o.sort(function(l, o) {
                for (var u = t.length, e = 0; e < u; ++e) {
                  var r = Object(i.__read)(n.extractFromConfig(t[e]), 2),
                    a = n.orderCompare(r[0], r[1], l, o);
                  if (0 !== a) return a;
                }
                return 0;
              });
            if (u(t)) {
              var e = Object(i.__read)(n.extractFromConfig(t), 3),
                r = e[0],
                a = e[1];
              if (1 === t.length)
                switch (e[2]) {
                  case '+':
                    return o.sort(n.simpleSort.bind(this));
                  case '-':
                    return o.sort(n.simpleSort.bind(this)).reverse();
                }
              return o.sort(n.orderCompare.bind(this, r, a));
            }
            return o.sort(n.simpleSort.bind(this));
          }),
          (n.simpleSort = function(n, l) {
            return u(n) && u(l) ? n.toLowerCase().localeCompare(l.toLowerCase()) : n - l;
          }),
          (n.orderCompare = function(n, l, t, i) {
            var r = e(t, n),
              a = e(i, n);
            if (r === a) return 0;
            if (o(r) || '' === r) return 1;
            if (o(a) || '' === a) return -1;
            if (u(r) && u(a)) {
              var s = r.toLowerCase().localeCompare(a.toLowerCase());
              return l ? s : -s;
            }
            return l ? r - a : a - r;
          }),
          (n.extractFromConfig = function(n) {
            var l = n.substr(0, 1);
            return [n.replace(/^[-+]/, ''), '-' !== l, l];
          }),
          n
        );
      })(),
      a = (function() {
        return function() {};
      })(),
      s = (function() {
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
            return u(n) ? (0 === l ? n : n + t + this.repeat(n, l - 1, t)) : n;
          }),
          n
        );
      })(),
      f = (function() {
        return function() {};
      })(),
      p = (function() {
        return function() {};
      })(),
      _ = (function() {
        return function() {};
      })(),
      d = (function() {
        return function() {};
      })();
  },
  704: function(n, l, t) {
    'use strict';
    t.d(l, 'a', function() {
      return u;
    });
    t(57);
    var o = t(705),
      u = (function() {
        function n(n, l, t, o) {
          (this.el = n),
            (this.appRef = l),
            (this.platform = t),
            (this._componentFactoryResolver = o),
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
              l = this._componentFactoryResolver.resolveComponentFactory(o.a);
            this.tooltipElement = n.createComponent(l);
          }),
          (n.prototype._getTooltipPosition = function() {
            var n,
              l,
              t = this.tooltipElement.instance.getNativeElement(),
              o = this.el.nativeElement,
              u = o.getBoundingClientRect(),
              e = 10;
            return (
              this.navTooltip && ((this.positionV = 'bottom'), (this.arrow = !1), (e = 20)),
              (n =
                'right' === this.positionH
                  ? u.right + e
                  : 'left' === this.positionH
                  ? u.left - e - t.offsetWidth
                  : this.navTooltip
                  ? u.left + o.offsetWidth / 2
                  : u.left),
              (l =
                'top' === this.positionV
                  ? u.top - e - t.offsetHeight
                  : 'bottom' === this.positionV
                  ? u.bottom + e
                  : u.top + o.offsetHeight / 2 - t.offsetHeight / 2),
              n + t.offsetWidth + e > this.platform.width()
                ? (n = this.platform.width() - t.offsetWidth - e)
                : n + t.offsetWidth - e < 0 && (n = e),
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
      return o;
    });
    t(132);
    var o = (function() {
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
      return o;
    });
    t(57), t(704);
    var o = (function() {
      return function() {};
    })();
  },
  708: function(n, l, t) {
    'use strict';
    t.d(l, 'a', function() {
      return o;
    });
    t(0), t(57), t(50), t(706);
    var o = (function() {
      return function() {};
    })();
  },
  709: function(n, l, t) {
    'use strict';
    function o(n) {
      return u._22(
        0,
        [
          (n()(), u.Z(0, 0, null, null, 1, 'div', [['class', 'toolbar-background']], null, null, null, null, null)),
          u.Y(1, 278528, null, 0, e.h, [u.p, u.q, u.j, u.A], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
          (n()(),
          u.Z(
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
              var o = !0;
              if ('click' === l) {
                o = !1 !== n.component.backButtonClick(t) && o;
              }
              return o;
            },
            i.b,
            i.a,
          )),
          u.Y(3, 278528, null, 0, e.h, [u.p, u.q, u.j, u.A], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
          u.Y(4, 1097728, null, 0, r.a, [[8, 'bar-button'], a.a, u.j, u.z], null, null),
          (n()(),
          u.Z(5, 0, null, 0, 2, 'ion-icon', [['class', 'back-button-icon'], ['role', 'img']], [[2, 'hide', null]], null, null, null, null)),
          u.Y(6, 278528, null, 0, e.h, [u.p, u.q, u.j, u.A], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
          u.Y(7, 147456, null, 0, s.a, [a.a, u.j, u.z], { name: [0, 'name'] }, null),
          (n()(), u.Z(8, 0, null, 0, 2, 'span', [['class', 'back-button-text']], null, null, null, null, null)),
          u.Y(9, 278528, null, 0, e.h, [u.p, u.q, u.j, u.A], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
          (n()(), u._20(10, null, ['', ''])),
          u._12(null, 0),
          u._12(null, 1),
          u._12(null, 2),
          (n()(), u.Z(14, 0, null, null, 2, 'div', [['class', 'toolbar-content']], null, null, null, null, null)),
          u.Y(15, 278528, null, 0, e.h, [u.p, u.q, u.j, u.A], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
          u._12(null, 3),
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
          n(l, 5, 0, u._13(l, 7)._hidden);
          n(l, 10, 0, t._backText);
        },
      );
    }
    t.d(l, 'a', function() {
      return c;
    }),
      (l.b = o);
    var u = t(1),
      e = t(18),
      i = t(62),
      r = t(29),
      a = t(3),
      s = t(63),
      c = (t(7), t(30), u.X({ encapsulation: 2, styles: [], data: {} }));
  },
  710: function(n, l, t) {
    'use strict';
    t.d(l, 'a', function() {
      return o;
    });
    t(0), t(57), t(190);
    var o = (function() {
      function n(n, l, t, o) {
        var u = this;
        (this.platform = l),
          (this.viewCtrl = t),
          (this.l = o),
          (this.story = n.get('story')),
          this.l.onReady().then(function() {
            u.l.query().subscribe(function(n) {
              n && (u.alllists = n);
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
  711: function(n, l, t) {
    'use strict';
    t.d(l, 'a', function() {
      return u;
    });
    t(0);
    var o = t(1),
      u =
        (t(57),
        t(190),
        t(393),
        (function() {
          function n(n, l, t, u) {
            (this.navCtrl = n),
              (this.popoverCtrl = l),
              (this.loadingCtrl = t),
              (this.user = u),
              (this.Math = Math),
              (this.ishistory = !1),
              (this.onDeleteBySwiping = new o.l()),
              (this.onDownloadBySwiping = new o.l());
          }
          return (
            (n.prototype.handlePress = function(n, l) {
              var t = this;
              clearTimeout(this.pressTimer),
                (this.pressTimer = setTimeout(function() {
                  t.openStoryDetail(n);
                }, 750));
            }),
            (n.prototype.handleClick = function(n, l) {
              clearTimeout(this.pressTimer), this.openStory(n);
            }),
            (n.prototype.openStory = function(n) {
              var l,
                t = this;
              n.length > 35 && (l = this.loadingCtrl.create({ spinner: 'crescent' })).present(),
                setTimeout(
                  function() {
                    t.navCtrl.push('StoryViewPage', { story: n, loader: l });
                  },
                  n.length > 35 ? 100 : 0,
                );
            }),
            (n.prototype.openStoryDetail = function(n) {
              this.navCtrl.push('StoryDetailPage', { story: n });
            }),
            (n.prototype.showAuthor = function(n, l) {
              l.stopPropagation(), this.navCtrl.push('AuthorPage', { author: n });
            }),
            (n.prototype.openListPicker = function(n, l) {
              l.stopPropagation();
              this.popoverCtrl.create('BookmarkPopover', { story: n }).present({ ev: l });
            }),
            (n.prototype.delete = function(n, l) {
              l.close(), this.onDeleteBySwiping.emit(n);
            }),
            (n.prototype.download = function(n, l) {
              l.close(), this.onDownloadBySwiping.emit(n);
            }),
            n
          );
        })());
  },
  712: function(n, l, t) {
    'use strict';
    function o(n) {
      return u._22(2, [(n()(), u._20(0, null, ['', '']))], null, function(n, l) {
        n(l, 0, 0, l.component.text);
      });
    }
    t.d(l, 'a', function() {
      return r;
    });
    var u = t(1),
      e = t(705),
      i = u.X({
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
      r = u.V(
        'tooltip-box',
        e.a,
        function(n) {
          return u._22(
            0,
            [
              (n()(), u.Z(0, 0, null, null, 1, 'tooltip-box', [], [[40, '@fade', 0]], null, null, o, i)),
              u.Y(1, 4243456, null, 0, e.a, [u.j, u.A], null, null),
            ],
            null,
            function(n, l) {
              n(l, 0, 0, u._13(l, 1).fadeState);
            },
          );
        },
        { text: 'text', arrow: 'arrow', posTop: 'posTop', posLeft: 'posLeft' },
        {},
        [],
      );
  },
  713: function(n, l, t) {
    'use strict';
    t.d(l, 'a', function() {
      return o;
    });
    t(0), t(57), t(50), t(706), t(708);
    var o = (function() {
      return function() {};
    })();
  },
  714: function(n, l, t) {
    'use strict';
    function o(n) {
      return d._22(
        0,
        [
          (n()(), d.Z(0, 0, null, null, 1, 'ion-icon', [['name', 'eye'], ['role', 'img']], [[2, 'hide', null]], null, null, null, null)),
          d.Y(1, 147456, [[5, 4]], 0, h.a, [m.a, d.j, d.z], { name: [0, 'name'] }, null),
        ],
        function(n, l) {
          n(l, 1, 0, 'eye');
        },
        function(n, l) {
          n(l, 0, 0, d._13(l, 1)._hidden);
        },
      );
    }
    function u(n) {
      return d._22(
        0,
        [
          (n()(),
          d.Z(0, 0, null, null, 1, 'ion-icon', [['name', 'download'], ['role', 'img']], [[2, 'hide', null]], null, null, null, null)),
          d.Y(1, 147456, [[5, 4]], 0, h.a, [m.a, d.j, d.z], { name: [0, 'name'] }, null),
        ],
        function(n, l) {
          n(l, 1, 0, 'download');
        },
        function(n, l) {
          n(l, 0, 0, d._13(l, 1)._hidden);
        },
      );
    }
    function e(n) {
      return d._22(
        0,
        [
          (n()(), d.Z(0, 0, null, null, 3, 'ion-badge', [['color', 'blue']], null, null, null, null, null)),
          d.Y(1, 16384, null, 0, g.a, [m.a, d.j, d.z], { color: [0, 'color'] }, null),
          (n()(), d._20(2, null, ['', ''])),
          d._14(131072, y.a, [b.a, d.g]),
        ],
        function(n, l) {
          n(l, 1, 0, 'blue');
        },
        function(n, l) {
          n(l, 2, 0, d._21(l, 2, 0, d._13(l, 3).transform('WINNER_TAG')));
        },
      );
    }
    function i(n) {
      return d._22(
        0,
        [
          (n()(), d.Z(0, 0, null, null, 3, 'ion-badge', [['color', 'red']], null, null, null, null, null)),
          d.Y(1, 16384, null, 0, g.a, [m.a, d.j, d.z], { color: [0, 'color'] }, null),
          (n()(), d._20(2, null, ['', ''])),
          d._14(131072, y.a, [b.a, d.g]),
        ],
        function(n, l) {
          n(l, 1, 0, 'red');
        },
        function(n, l) {
          n(l, 2, 0, d._21(l, 2, 0, d._13(l, 3).transform('HOT_TAG')));
        },
      );
    }
    function r(n) {
      return d._22(
        0,
        [
          (n()(), d.Z(0, 0, null, null, 3, 'ion-badge', [['color', 'green']], null, null, null, null, null)),
          d.Y(1, 16384, null, 0, g.a, [m.a, d.j, d.z], { color: [0, 'color'] }, null),
          (n()(), d._20(2, null, ['', ''])),
          d._14(131072, y.a, [b.a, d.g]),
        ],
        function(n, l) {
          n(l, 1, 0, 'green');
        },
        function(n, l) {
          n(l, 2, 0, d._21(l, 2, 0, d._13(l, 3).transform('WRITER_TAG')));
        },
      );
    }
    function a(n) {
      return d._22(
        0,
        [
          (n()(), d.Z(0, 0, null, null, 3, 'ion-badge', [['color', 'yellow']], null, null, null, null, null)),
          d.Y(1, 16384, null, 0, g.a, [m.a, d.j, d.z], { color: [0, 'color'] }, null),
          (n()(), d._20(2, null, ['', ''])),
          d._14(131072, y.a, [b.a, d.g]),
        ],
        function(n, l) {
          n(l, 1, 0, 'yellow');
        },
        function(n, l) {
          n(l, 2, 0, d._21(l, 2, 0, d._13(l, 3).transform('NEW_TAG')));
        },
      );
    }
    function s(n) {
      return d._22(
        0,
        [(n()(), d.Z(0, 0, null, null, 1, null, null, null, null, null, null, null)), (n()(), d._20(1, null, [' (', ')']))],
        null,
        function(n, l) {
          var t = l.component;
          n(l, 1, 0, null == t.story ? null : t.story.lang);
        },
      );
    }
    function c(n) {
      return d._22(
        0,
        [(n()(), d.Z(0, 0, null, null, 1, 'span', [], null, null, null, null, null)), (n()(), d._20(1, null, ['#', ' ']))],
        null,
        function(n, l) {
          n(l, 1, 0, l.context.$implicit);
        },
      );
    }
    function f(n) {
      return d._22(
        0,
        [
          (n()(), d.Z(0, 0, null, null, 11, 'ion-note', [['item-end', '']], null, null, null, null, null)),
          d.Y(1, 16384, null, 0, v.a, [m.a, d.j, d.z], null, null),
          (n()(), d._20(-1, null, ['\n      '])),
          (n()(),
          d.Z(
            3,
            0,
            null,
            null,
            7,
            'button',
            [['clear', 'true'], ['event', 'press'], ['icon-only', ''], ['ion-button', ''], ['navTooltip', '']],
            null,
            [[null, 'click'], [null, 'press'], [null, 'mouseenter'], [null, 'mouseleave']],
            function(n, l, t) {
              var o = !0,
                u = n.component;
              if ('click' === l) {
                o = !1 !== d._13(n, 5).onClick() && o;
              }
              if ('press' === l) {
                o = !1 !== d._13(n, 5).onPress() && o;
              }
              if ('mouseenter' === l) {
                o = !1 !== d._13(n, 5).onMouseEnter() && o;
              }
              if ('mouseleave' === l) {
                o = !1 !== d._13(n, 5).onMouseLeave() && o;
              }
              if ('click' === l) {
                o = !1 !== u.openListPicker(u.story, t) && o;
              }
              return o;
            },
            w.b,
            w.a,
          )),
          d.Y(4, 1097728, null, 0, T.a, [[8, ''], m.a, d.j, d.z], { clear: [0, 'clear'] }, null),
          d.Y(
            5,
            4210688,
            null,
            0,
            I.a,
            [d.j, d.f, Y.a, d.i],
            { tooltip: [0, 'tooltip'], event: [1, 'event'], navTooltip: [2, 'navTooltip'] },
            null,
          ),
          d._14(131072, y.a, [b.a, d.g]),
          (n()(), d._20(-1, 0, ['\n        '])),
          (n()(),
          d.Z(8, 0, null, 0, 1, 'ion-icon', [['name', 'star-outline'], ['role', 'img']], [[2, 'hide', null]], null, null, null, null)),
          d.Y(9, 147456, null, 0, h.a, [m.a, d.j, d.z], { name: [0, 'name'] }, null),
          (n()(), d._20(-1, 0, ['\n      '])),
          (n()(), d._20(-1, null, ['\n    '])),
        ],
        function(n, l) {
          n(l, 4, 0, 'true');
          n(l, 5, 0, d._21(l, 5, 0, d._13(l, 6).transform('BOOKMARK_BUTTON')), 'press', '');
          n(l, 9, 0, 'star-outline');
        },
        function(n, l) {
          n(l, 8, 0, d._13(l, 9)._hidden);
        },
      );
    }
    function p(n) {
      return d._22(
        0,
        [
          (n()(),
          d.Z(
            0,
            0,
            null,
            null,
            6,
            'button',
            [['ion-button', '']],
            null,
            [[null, 'click']],
            function(n, l, t) {
              var o = !0,
                u = n.component;
              if ('click' === l) {
                o = !1 !== u.download(u.story, d._13(n.parent, 4)) && o;
              }
              return o;
            },
            w.b,
            w.a,
          )),
          d.Y(1, 1097728, null, 0, T.a, [[8, ''], m.a, d.j, d.z], null, null),
          (n()(), d._20(-1, 0, ['\n      '])),
          (n()(), d.Z(3, 0, null, 0, 1, 'ion-icon', [['name', 'download'], ['role', 'img']], [[2, 'hide', null]], null, null, null, null)),
          d.Y(4, 147456, null, 0, h.a, [m.a, d.j, d.z], { name: [0, 'name'] }, null),
          (n()(), d._20(5, 0, ['\n      ', '\n    '])),
          d._16(6, 2),
        ],
        function(n, l) {
          n(l, 4, 0, 'download');
        },
        function(n, l) {
          n(l, 3, 0, d._13(l, 4)._hidden);
          n(l, 5, 0, d._21(l, 5, 0, n(l, 6, 0, d._13(l.parent, 1), ' ', 15)));
        },
      );
    }
    function _(n) {
      return d._22(
        0,
        [
          d._14(0, j.d, [d.r]),
          d._14(0, S.h, []),
          (n()(), d._20(-1, null, ['\n'])),
          (n()(), d.Z(3, 0, null, null, 77, 'ion-item-sliding', [['approxItemHeight', '105px']], null, null, null, k.b, k.a)),
          d.Y(4, 49152, [['slidingItem', 4]], 2, Z.a, [[2, C.a], Y.a, d.z, d.j, d.u], null, null),
          d._18(335544320, 1, { item: 0 }),
          d._18(603979776, 2, { _itemOptions: 1 }),
          (n()(), d._20(-1, null, ['\n  '])),
          (n()(),
          d.Z(
            8,
            0,
            null,
            0,
            56,
            'button',
            [['class', 'item item-block'], ['ion-item', '']],
            null,
            [[null, 'press'], [null, 'click']],
            function(n, l, t) {
              var o = !0,
                u = n.component;
              if ('press' === l) {
                o = !1 !== u.handlePress(u.story, t) && o;
              }
              if ('click' === l) {
                o = !1 !== u.handleClick(u.story, t) && o;
              }
              return o;
            },
            O.b,
            O.a,
          )),
          d.Y(9, 1097728, [[1, 4]], 3, D.a, [x.a, m.a, d.j, d.z, [2, B.a]], null, null),
          d._18(335544320, 3, { contentLabel: 0 }),
          d._18(603979776, 4, { _buttons: 1 }),
          d._18(603979776, 5, { _icons: 1 }),
          d.Y(13, 16384, null, 0, E.a, [], null, null),
          (n()(), d._20(-1, 2, ['\n\n    '])),
          (n()(), d.Z(15, 0, null, 2, 19, 'h2', [], null, null, null, null, null)),
          (n()(), d._20(-1, null, ['\n      '])),
          (n()(), d.U(16777216, null, null, 1, null, o)),
          d.Y(18, 16384, null, 0, j.j, [d.I, d.F], { ngIf: [0, 'ngIf'] }, null),
          (n()(), d._20(-1, null, ['\n      '])),
          (n()(), d.U(16777216, null, null, 1, null, u)),
          d.Y(21, 16384, null, 0, j.j, [d.I, d.F], { ngIf: [0, 'ngIf'] }, null),
          (n()(), d._20(22, null, ['\n      ', '\n      '])),
          (n()(), d.U(16777216, null, null, 1, null, e)),
          d.Y(24, 16384, null, 0, j.j, [d.I, d.F], { ngIf: [0, 'ngIf'] }, null),
          (n()(), d._20(-1, null, ['\n      '])),
          (n()(), d.U(16777216, null, null, 1, null, i)),
          d.Y(27, 16384, null, 0, j.j, [d.I, d.F], { ngIf: [0, 'ngIf'] }, null),
          (n()(), d._20(-1, null, ['\n      '])),
          (n()(), d.U(16777216, null, null, 1, null, r)),
          d.Y(30, 16384, null, 0, j.j, [d.I, d.F], { ngIf: [0, 'ngIf'] }, null),
          (n()(), d._20(-1, null, ['\n      '])),
          (n()(), d.U(16777216, null, null, 1, null, a)),
          d.Y(33, 16384, null, 0, j.j, [d.I, d.F], { ngIf: [0, 'ngIf'] }, null),
          (n()(), d._20(-1, null, ['\n    '])),
          (n()(), d._20(-1, 2, ['\n\n    '])),
          (n()(), d.Z(36, 0, null, 2, 3, 'p', [], null, null, null, null, null)),
          (n()(), d._20(37, null, ['', ''])),
          (n()(), d.U(16777216, null, null, 1, null, s)),
          d.Y(39, 16384, null, 0, j.j, [d.I, d.F], { ngIf: [0, 'ngIf'] }, null),
          (n()(), d._20(-1, 2, ['\n    '])),
          (n()(), d.Z(41, 0, null, 2, 10, 'p', [], null, null, null, null, null)),
          (n()(), d._20(-1, null, ['\n      '])),
          (n()(), d.Z(43, 0, null, null, 1, 'ion-icon', [['name', 'star'], ['role', 'img']], [[2, 'hide', null]], null, null, null, null)),
          d.Y(44, 147456, [[5, 4]], 0, h.a, [m.a, d.j, d.z], { name: [0, 'name'] }, null),
          (n()(), d._20(45, null, [' ', '\n      (', ')\n      '])),
          (n()(), d.Z(46, 0, null, null, 2, 'em', [], null, null, null, null, null)),
          (n()(), d._20(47, null, [' ', ' ', ''])),
          d._14(131072, y.a, [b.a, d.g]),
          (n()(), d._20(49, null, ['\n      ', ' ', '\n    '])),
          d._14(131072, y.a, [b.a, d.g]),
          d._16(51, 2),
          (n()(), d._20(-1, 2, ['\n\n    '])),
          (n()(), d.Z(53, 0, null, 2, 7, 'p', [['class', 'tags']], null, null, null, null, null)),
          (n()(), d._20(-1, null, ['\n      '])),
          (n()(), d.Z(55, 0, null, null, 1, 'strong', [], null, null, null, null, null)),
          (n()(), d._20(56, null, ['', ''])),
          (n()(), d._20(-1, null, ['\n      '])),
          (n()(), d.U(16777216, null, null, 1, null, c)),
          d.Y(59, 802816, null, 0, j.i, [d.I, d.F, d.p], { ngForOf: [0, 'ngForOf'] }, null),
          (n()(), d._20(-1, null, ['\n    '])),
          (n()(), d._20(-1, 2, ['\n\n    '])),
          (n()(), d.U(16777216, null, 4, 1, null, f)),
          d.Y(63, 16384, null, 0, j.j, [d.I, d.F], { ngIf: [0, 'ngIf'] }, null),
          (n()(), d._20(-1, 2, ['\n\n  '])),
          (n()(), d._20(-1, null, ['\n\n  '])),
          (n()(), d.Z(66, 0, null, 1, 13, 'ion-item-options', [], null, null, null, null, null)),
          d.Y(67, 16384, [[2, 4]], 0, z.a, [d.j, Y.a], null, null),
          (n()(), d._20(-1, null, ['\n    '])),
          (n()(), d.U(16777216, null, null, 1, null, p)),
          d.Y(70, 16384, null, 0, j.j, [d.I, d.F], { ngIf: [0, 'ngIf'] }, null),
          (n()(), d._20(-1, null, ['\n    '])),
          (n()(),
          d.Z(
            72,
            0,
            null,
            null,
            6,
            'button',
            [['color', 'danger'], ['ion-button', '']],
            null,
            [[null, 'click']],
            function(n, l, t) {
              var o = !0,
                u = n.component;
              if ('click' === l) {
                o = !1 !== u.delete(u.story, d._13(n, 4)) && o;
              }
              return o;
            },
            w.b,
            w.a,
          )),
          d.Y(73, 1097728, null, 0, T.a, [[8, ''], m.a, d.j, d.z], { color: [0, 'color'] }, null),
          (n()(), d._20(-1, 0, ['\n      '])),
          (n()(), d.Z(75, 0, null, 0, 1, 'ion-icon', [['name', 'trash'], ['role', 'img']], [[2, 'hide', null]], null, null, null, null)),
          d.Y(76, 147456, null, 0, h.a, [m.a, d.j, d.z], { name: [0, 'name'] }, null),
          (n()(), d._20(77, 0, ['\n      ', '\n    '])),
          d._16(78, 2),
          (n()(), d._20(-1, null, ['\n  '])),
          (n()(), d._20(-1, null, ['\n'])),
          (n()(), d._20(-1, null, ['\n'])),
        ],
        function(n, l) {
          var t = l.component;
          n(l, 18, 0, (null == t.story ? null : t.story.cached) && !(null != t.story && t.story.downloaded) && !t.ishistory);
          n(l, 21, 0, null == t.story ? null : t.story.downloaded);
          n(l, 24, 0, null == t.story ? null : t.story.iscontestwinner);
          n(l, 27, 0, null == t.story ? null : t.story.ishot);
          n(l, 30, 0, null == t.story ? null : t.story.iswriterspick);
          n(l, 33, 0, null == t.story ? null : t.story.isnew);
          n(l, 39, 0, null == t.story ? null : t.story.lang);
          n(l, 44, 0, 'star');
          n(l, 59, 0, null == t.story ? null : t.story.tags);
          n(l, 63, 0, t.user.isLoggedIn());
          n(l, 70, 0, !t.story.downloaded);
          n(l, 73, 0, 'danger');
          n(l, 76, 0, 'trash');
        },
        function(n, l) {
          var t = l.component;
          n(l, 22, 0, null == t.story ? null : t.story.title);
          n(l, 37, 0, null == t.story ? null : t.story.description);
          n(l, 43, 0, d._13(l, 44)._hidden);
          n(
            l,
            45,
            0,
            null == t.story ? null : t.story.rating,
            (null == t.story ? null : t.story.viewcount) > 1e3
              ? t.Math.round((null == t.story ? null : t.story.viewcount) / 1e3) + 'k'
              : null == t.story
              ? null
              : t.story.viewcount,
          );
          n(
            l,
            47,
            0,
            d._21(l, 47, 0, d._13(l, 48).transform('BYAUTHOR')),
            null == t.story ? null : null == t.story.author ? null : t.story.author.name,
          );
          n(
            l,
            49,
            0,
            d._21(l, 49, 0, d._13(l, 50).transform('ONTIMESTAMP')),
            d._21(l, 49, 1, n(l, 51, 0, d._13(l, 0), 1e3 * (null == t.story ? null : t.story.timestamp), 'yyyy-MM-dd')),
          );
          n(l, 56, 0, null == t.story ? null : t.story.category);
          n(l, 75, 0, d._13(l, 76)._hidden);
          n(l, 77, 0, d._21(l, 77, 0, n(l, 78, 0, d._13(l, 1), ' ', 15)));
        },
      );
    }
    t.d(l, 'a', function() {
      return R;
    }),
      (l.c = _),
      t.d(l, 'b', function() {
        return U;
      });
    var d = t(1),
      h = t(63),
      m = t(3),
      g = t(196),
      y = t(125),
      b = t(39),
      v = t(192),
      w = t(62),
      T = t(29),
      I = t(704),
      Y = t(6),
      j = t(18),
      S = t(703),
      k = t(717),
      Z = t(193),
      C = t(64),
      O = t(189),
      D = t(25),
      x = t(22),
      B = t(58),
      E = t(85),
      z = t(134),
      F = t(711),
      L = t(30),
      P = t(127),
      M = t(131),
      A = t(52),
      R = d.X({ encapsulation: 2, styles: [], data: {} }),
      U = d.V(
        'story-list-item',
        F.a,
        function(n) {
          return d._22(
            0,
            [
              (n()(), d.Z(0, 0, null, null, 1, 'story-list-item', [], null, null, null, _, R)),
              d.Y(1, 49152, null, 0, F.a, [L.a, P.a, M.a, A.a], null, null),
            ],
            null,
            null,
          );
        },
        { story: 'story', ishistory: 'ishistory' },
        { onDeleteBySwiping: 'onDeleteBySwiping', onDownloadBySwiping: 'onDownloadBySwiping' },
        [],
      );
  },
  715: function(n, l, t) {
    'use strict';
    t.d(l, 'a', function() {
      return u;
    });
    t(0);
    var o = t(1),
      u =
        (t(57),
        (function() {
          function n(n) {
            (this.navCtrl = n),
              (this.Math = Math),
              (this.ishistory = !1),
              (this.infinite = !1),
              (this.onDeleteBySwiping = new o.l()),
              (this.onDownloadBySwiping = new o.l()),
              (this.ionInfinite = new o.l()),
              (this.enableInfinite = !0);
          }
          return (
            (n.prototype.showHeaders = function(n, l, t) {
              if (this.ishistory) return null;
              if (l % 10 == 0 && l > 0) {
                var o = Math.round(l / 10);
                return o + 1 + ' (' + (10 * o + 1) + ' - ' + 10 * (o + 1) + ')';
              }
              return null;
            }),
            (n.prototype.enableInfinity = function() {
              this.enableInfinite = !0;
            }),
            (n.prototype.loadMore = function(n) {
              this.infinite && this.ionInfinite.emit(n);
            }),
            n
          );
        })());
  },
  716: function(n, l, t) {
    'use strict';
    function o(n) {
      return r._22(
        0,
        [
          (n()(), r.Z(0, 0, null, null, 1, 'ion-icon', [['name', 'lock'], ['role', 'img']], [[2, 'hide', null]], null, null, null, null)),
          r.Y(1, 147456, [[6, 4]], 0, a.a, [s.a, r.j, r.z], { name: [0, 'name'] }, null),
        ],
        function(n, l) {
          n(l, 1, 0, 'lock');
        },
        function(n, l) {
          n(l, 0, 0, r._13(l, 1)._hidden);
        },
      );
    }
    function u(n) {
      return r._22(
        0,
        [
          (n()(), r.Z(0, 0, null, null, 4, null, null, null, null, null, null, null)),
          (n()(), r._20(-1, null, ['\n          '])),
          (n()(), r.Z(2, 0, null, null, 1, 'ion-icon', [['role', 'img']], [[2, 'hide', null]], null, null, null, null)),
          r.Y(3, 147456, null, 0, a.a, [s.a, r.j, r.z], { name: [0, 'name'] }, null),
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
    function e(n) {
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
              var o = !0;
              if ('click' === l) {
                o = !1 !== n.component.toggleFromList(n.context.$implicit) && o;
              }
              return o;
            },
            c.b,
            c.a,
          )),
          r.Y(1, 1097728, null, 3, f.a, [p.a, s.a, r.j, r.z, [2, _.a]], null, null),
          r._18(335544320, 4, { contentLabel: 0 }),
          r._18(603979776, 5, { _buttons: 1 }),
          r._18(603979776, 6, { _icons: 1 }),
          r.Y(5, 16384, null, 0, d.a, [], null, null),
          (n()(), r._20(-1, 2, ['\n    '])),
          (n()(), r.Z(7, 0, null, 2, 3, 'h2', [], null, null, null, null, null)),
          (n()(), r.U(16777216, null, null, 1, null, o)),
          r.Y(9, 16384, null, 0, h.j, [r.I, r.F], { ngIf: [0, 'ngIf'] }, null),
          (n()(), r._20(10, null, [' ', ''])),
          (n()(), r._20(-1, 2, ['\n    '])),
          (n()(), r.Z(12, 0, null, 4, 11, 'ion-note', [['item-end', '']], null, null, null, null, null)),
          r.Y(13, 16384, null, 0, m.a, [s.a, r.j, r.z], null, null),
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
              var o = !0;
              if ('click' === l) {
                o = !1 !== r._13(n, 17).onClick() && o;
              }
              if ('press' === l) {
                o = !1 !== r._13(n, 17).onPress() && o;
              }
              if ('mouseenter' === l) {
                o = !1 !== r._13(n, 17).onMouseEnter() && o;
              }
              if ('mouseleave' === l) {
                o = !1 !== r._13(n, 17).onMouseLeave() && o;
              }
              return o;
            },
            g.b,
            g.a,
          )),
          r.Y(16, 1097728, null, 0, y.a, [[8, ''], s.a, r.j, r.z], { clear: [0, 'clear'] }, null),
          r.Y(
            17,
            4210688,
            null,
            0,
            b.a,
            [r.j, r.f, v.a, r.i],
            { tooltip: [0, 'tooltip'], event: [1, 'event'], navTooltip: [2, 'navTooltip'] },
            null,
          ),
          r._14(131072, w.a, [T.a, r.g]),
          (n()(), r._20(-1, 0, ['\n        '])),
          (n()(), r.U(16777216, null, 0, 1, null, u)),
          r.Y(21, 16384, null, 0, h.j, [r.I, r.F], { ngIf: [0, 'ngIf'] }, null),
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
    function i(n) {
      return r._22(
        0,
        [
          r._14(0, I.g, []),
          (n()(), r._20(-1, null, ['\n'])),
          (n()(), r.Z(2, 0, null, null, 15, 'ion-list', [['class', 'bookmarks']], null, null, null, null, null)),
          r.Y(3, 16384, null, 0, Y.a, [s.a, r.j, r.z, v.a, j.l, S.a], null, null),
          (n()(), r._20(-1, null, ['\n  '])),
          (n()(), r.Z(5, 0, null, null, 7, 'ion-list-header', [['class', 'item']], null, null, null, c.b, c.a)),
          r.Y(6, 1097728, null, 3, f.a, [p.a, s.a, r.j, r.z, [2, _.a]], null, null),
          r._18(335544320, 1, { contentLabel: 0 }),
          r._18(603979776, 2, { _buttons: 1 }),
          r._18(603979776, 3, { _icons: 1 }),
          r.Y(10, 16384, null, 0, k.a, [s.a, r.z, r.j, [8, null]], null, null),
          (n()(), r._20(11, 2, ['', ''])),
          r._14(131072, w.a, [T.a, r.g]),
          (n()(), r._20(-1, null, ['\n  '])),
          (n()(), r.U(16777216, null, null, 2, null, e)),
          r.Y(15, 802816, null, 0, h.i, [r.I, r.F, r.p], { ngForOf: [0, 'ngForOf'] }, null),
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
      return B;
    });
    var r = t(1),
      a = t(63),
      s = t(3),
      c = t(189),
      f = t(25),
      p = t(22),
      _ = t(58),
      d = t(85),
      h = t(18),
      m = t(192),
      g = t(62),
      y = t(29),
      b = t(704),
      v = t(6),
      w = t(125),
      T = t(39),
      I = t(703),
      Y = t(64),
      j = t(10),
      S = t(12),
      k = t(130),
      Z = t(710),
      C = t(16),
      O = t(7),
      D = t(133),
      x = r.X({ encapsulation: 2, styles: [], data: {} }),
      B = r.V(
        'bookmark-popover',
        Z.a,
        function(n) {
          return r._22(
            0,
            [
              (n()(), r.Z(0, 0, null, null, 1, 'bookmark-popover', [], null, null, null, i, x)),
              r.Y(1, 49152, null, 0, Z.a, [C.a, v.a, O.a, D.a], null, null),
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
  717: function(n, l, t) {
    'use strict';
    function o(n) {
      return u._22(
        2,
        [
          (n()(), u._20(-1, null, ['\n    '])),
          u._12(null, 0),
          (n()(), u._20(-1, null, ['\n    '])),
          u._12(null, 1),
          (n()(), u._20(-1, null, ['\n  '])),
        ],
        null,
        null,
      );
    }
    t.d(l, 'a', function() {
      return e;
    }),
      (l.b = o);
    var u = t(1),
      e = (t(6), u.X({ encapsulation: 2, styles: [], data: {} }));
  },
  718: function(n, l, t) {
    'use strict';
    t.d(l, 'a', function() {
      return o;
    });
    t(0), t(57), t(50), t(706), t(713), t(708);
    var o = (function() {
      return function() {};
    })();
  },
  719: function(n, l, t) {
    'use strict';
    function o(n) {
      return a._22(
        0,
        [
          (n()(), a.Z(0, 0, null, null, 2, 'p', [['class', 'empty']], null, null, null, null, null)),
          (n()(), a._20(1, null, ['\n    ', '\n  '])),
          a._14(131072, s.a, [c.a, a.g]),
        ],
        null,
        function(n, l) {
          n(l, 1, 0, a._21(l, 1, 0, a._13(l, 2).transform('STORYLIST_EMPTY')));
        },
      );
    }
    function u(n) {
      return a._22(
        0,
        [
          (n()(), a.Z(0, 0, null, null, 7, 'ion-item-divider', [['class', 'item item-divider']], null, null, null, f.b, f.a)),
          a.Y(1, 1097728, null, 3, p.a, [_.a, d.a, a.j, a.z, [2, h.a]], null, null),
          a._18(335544320, 4, { contentLabel: 0 }),
          a._18(603979776, 5, { _buttons: 1 }),
          a._18(603979776, 6, { _icons: 1 }),
          a.Y(5, 16384, null, 0, m.a, [d.a, a.j, a.z], null, null),
          (n()(), a._20(6, 2, ['\n      ', ' ', '\n    '])),
          a._14(131072, s.a, [c.a, a.g]),
        ],
        null,
        function(n, l) {
          n(l, 6, 0, a._21(l, 6, 0, a._13(l, 7).transform('LIST_PAGECOUNTDIVIDER')), l.context.$implicit);
        },
      );
    }
    function e(n) {
      return a._22(
        0,
        [
          (n()(), a.Z(0, 0, null, null, 4, 'div', [], null, null, null, null, null)),
          (n()(), a._20(-1, null, ['\n      '])),
          (n()(),
          a.Z(
            2,
            0,
            null,
            null,
            1,
            'story-list-item',
            [],
            null,
            [[null, 'onDeleteBySwiping'], [null, 'onDownloadBySwiping']],
            function(n, l, t) {
              var o = !0,
                u = n.component;
              if ('onDeleteBySwiping' === l) {
                o = !1 !== u.onDeleteBySwiping.emit(t) && o;
              }
              if ('onDownloadBySwiping' === l) {
                o = !1 !== u.onDownloadBySwiping.emit(t) && o;
              }
              return o;
            },
            g.c,
            g.a,
          )),
          a.Y(
            3,
            49152,
            null,
            0,
            y.a,
            [b.a, v.a, w.a, T.a],
            { story: [0, 'story'], ishistory: [1, 'ishistory'] },
            { onDeleteBySwiping: 'onDeleteBySwiping', onDownloadBySwiping: 'onDownloadBySwiping' },
          ),
          (n()(), a._20(-1, null, ['\n    '])),
        ],
        function(n, l) {
          n(l, 3, 0, l.context.$implicit, l.component.ishistory);
        },
        null,
      );
    }
    function i(n) {
      return a._22(
        0,
        [
          (n()(),
          a.Z(
            0,
            0,
            null,
            null,
            5,
            'ion-infinite-scroll',
            [],
            null,
            [[null, 'ionInfinite']],
            function(n, l, t) {
              var o = !0;
              if ('ionInfinite' === l) {
                o = !1 !== n.component.loadMore(t) && o;
              }
              return o;
            },
            null,
            null,
          )),
          a.Y(1, 1196032, null, 0, I.a, [Y.a, a.u, a.j, j.a], { enabled: [0, 'enabled'] }, { ionInfinite: 'ionInfinite' }),
          (n()(), a._20(-1, null, ['\n      '])),
          (n()(), a.Z(3, 0, null, null, 1, 'ion-infinite-scroll-content', [], [[1, 'state', 0]], null, null, S.b, S.a)),
          a.Y(4, 114688, null, 0, k.a, [I.a, d.a], null, null),
          (n()(), a._20(-1, null, ['\n  '])),
        ],
        function(n, l) {
          n(l, 1, 0, l.component.enableInfinite), n(l, 4, 0);
        },
        function(n, l) {
          n(l, 3, 0, a._13(l, 4).inf.state);
        },
      );
    }
    function r(n) {
      return a._22(
        0,
        [
          (n()(), a._20(-1, null, ['\n'])),
          (n()(), a.Z(1, 0, null, null, 21, 'div', [['style', 'height: 100%; width: 100%']], null, null, null, null, null)),
          (n()(), a._20(-1, null, ['\n  '])),
          (n()(), a.U(16777216, null, null, 1, null, o)),
          a.Y(4, 16384, null, 0, Z.j, [a.I, a.F], { ngIf: [0, 'ngIf'] }, null),
          (n()(), a._20(-1, null, ['\n\n  '])),
          (n()(), a.Z(6, 0, null, null, 12, 'ion-list', [], null, null, null, null, null)),
          a.Y(7, 16384, null, 0, C.a, [d.a, a.j, a.z, O.a, D.l, j.a], { sliding: [0, 'sliding'] }, null),
          a.Y(
            8,
            1982464,
            null,
            3,
            x.a,
            [a.p, a.j, a.z, a.u, a.g, Y.a, O.a, B.a, d.a, j.a],
            { virtualScroll: [0, 'virtualScroll'], headerFn: [1, 'headerFn'] },
            null,
          ),
          a._18(335544320, 1, { _itmTmp: 0 }),
          a._18(335544320, 2, { _hdrTmp: 0 }),
          a._18(335544320, 3, { _ftrTmp: 0 }),
          (n()(), a._20(-1, null, ['\n\n    '])),
          (n()(), a.U(0, null, null, 1, null, u)),
          a.Y(14, 16384, [[2, 4]], 0, E.a, [a.F], null, null),
          (n()(), a._20(-1, null, ['\n\n    '])),
          (n()(), a.U(16777216, null, null, 1, null, e)),
          a.Y(17, 16384, [[1, 4]], 0, z.a, [a.F, a.I], null, null),
          (n()(), a._20(-1, null, ['\n\n  '])),
          (n()(), a._20(-1, null, ['\n\n  '])),
          (n()(), a.U(16777216, null, null, 1, null, i)),
          a.Y(21, 16384, null, 0, Z.j, [a.I, a.F], { ngIf: [0, 'ngIf'] }, null),
          (n()(), a._20(-1, null, ['\n'])),
          (n()(), a._20(-1, null, ['\n'])),
        ],
        function(n, l) {
          var t = l.component;
          n(l, 4, 0, !(null != t.stories && t.stories.length));
          n(l, 7, 0, t.ishistory);
          n(l, 8, 0, t.stories, t.showHeaders);
          n(l, 21, 0, t.infinite && (null == t.stories ? null : t.stories.length) > 9);
        },
        null,
      );
    }
    t.d(l, 'a', function() {
      return L;
    }),
      (l.c = r),
      t.d(l, 'b', function() {
        return P;
      });
    var a = t(1),
      s = t(125),
      c = t(39),
      f = t(189),
      p = t(25),
      _ = t(22),
      d = t(3),
      h = t(58),
      m = t(199),
      g = t(714),
      y = t(711),
      b = t(30),
      v = t(127),
      w = t(131),
      T = t(52),
      I = t(129),
      Y = t(31),
      j = t(12),
      S = t(720),
      k = t(194),
      Z = t(18),
      C = t(64),
      O = t(6),
      D = t(10),
      x = t(197),
      B = t(7),
      E = t(136),
      z = t(135),
      F = t(715),
      L = a.X({ encapsulation: 2, styles: [], data: {} }),
      P = a.V(
        'story-list',
        F.a,
        function(n) {
          return a._22(
            0,
            [(n()(), a.Z(0, 0, null, null, 1, 'story-list', [], null, null, null, r, L)), a.Y(1, 49152, null, 0, F.a, [b.a], null, null)],
            null,
            null,
          );
        },
        { stories: 'stories', ishistory: 'ishistory', infinite: 'infinite' },
        { onDeleteBySwiping: 'onDeleteBySwiping', onDownloadBySwiping: 'onDownloadBySwiping', ionInfinite: 'ionInfinite' },
        [],
      );
  },
  720: function(n, l, t) {
    'use strict';
    function o(n) {
      return i._22(
        0,
        [
          (n()(), i.Z(0, 0, null, null, 2, 'div', [['class', 'infinite-loading-spinner']], null, null, null, null, null)),
          (n()(), i.Z(1, 0, null, null, 1, 'ion-spinner', [], [[2, 'spinner-paused', null]], null, null, r.b, r.a)),
          i.Y(2, 114688, null, 0, a.a, [s.a, i.j, i.z], { name: [0, 'name'] }, null),
        ],
        function(n, l) {
          n(l, 2, 0, l.component.loadingSpinner);
        },
        function(n, l) {
          n(l, 1, 0, i._13(l, 2)._paused);
        },
      );
    }
    function u(n) {
      return i._22(
        0,
        [(n()(), i.Z(0, 0, null, null, 0, 'div', [['class', 'infinite-loading-text']], [[8, 'innerHTML', 1]], null, null, null, null))],
        null,
        function(n, l) {
          n(l, 0, 0, l.component.loadingText);
        },
      );
    }
    function e(n) {
      return i._22(
        0,
        [
          (n()(), i.Z(0, 0, null, null, 4, 'div', [['class', 'infinite-loading']], null, null, null, null, null)),
          (n()(), i.U(16777216, null, null, 1, null, o)),
          i.Y(2, 16384, null, 0, c.j, [i.I, i.F], { ngIf: [0, 'ngIf'] }, null),
          (n()(), i.U(16777216, null, null, 1, null, u)),
          i.Y(4, 16384, null, 0, c.j, [i.I, i.F], { ngIf: [0, 'ngIf'] }, null),
        ],
        function(n, l) {
          var t = l.component;
          n(l, 2, 0, t.loadingSpinner);
          n(l, 4, 0, t.loadingText);
        },
        null,
      );
    }
    t.d(l, 'a', function() {
      return f;
    }),
      (l.b = e);
    var i = t(1),
      r = t(392),
      a = t(91),
      s = t(3),
      c = t(18),
      f = i.X({ encapsulation: 2, styles: [], data: {} });
  },
});
