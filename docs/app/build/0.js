webpackJsonp([0], {
  689: function(n, l, t) {
    'use strict';
    function u(n) {
      return o._22(
        0,
        [
          (n()(), o.Z(0, 0, null, null, 30, 'ion-header', [], null, null, null, null, null)),
          o.Y(1, 16384, null, 0, j.a, [S.a, o.j, o.z, [2, Z.a]], null, null),
          (n()(), o._20(-1, null, ['\n\n  '])),
          (n()(),
          o.Z(
            3,
            0,
            null,
            null,
            26,
            'ion-navbar',
            [['class', 'toolbar']],
            [[8, 'hidden', 0], [2, 'statusbar-padding', null]],
            null,
            null,
            C.b,
            C.a,
          )),
          o.Y(4, 49152, null, 0, x.a, [z.a, [2, Z.a], [2, O.a], S.a, o.j, o.z], null, null),
          (n()(), o._20(-1, 3, ['\n    '])),
          (n()(), o.Z(6, 0, null, 3, 8, 'ion-title', [], null, null, null, P.b, P.a)),
          o.Y(7, 49152, null, 0, E.a, [S.a, o.j, o.z, [2, L.a], [2, x.a]], null, null),
          (n()(), o._20(-1, 0, ['\n    \t'])),
          (n()(), o.Z(9, 0, null, 0, 1, 'ion-icon', [['role', 'img']], [[2, 'hide', null]], null, null, null, null)),
          o.Y(10, 147456, null, 0, B.a, [S.a, o.j, o.z], { name: [0, 'name'] }, null),
          (n()(), o._20(11, 0, ['\n    \t', ' '])),
          (n()(), o.Z(12, 0, null, 0, 1, 'small', [], null, null, null, null, null)),
          (n()(), o._20(13, null, ['(', ')'])),
          (n()(), o._20(-1, 0, ['\n    '])),
          (n()(), o._20(-1, 3, ['\n    '])),
          (n()(), o.Z(16, 0, null, 2, 12, 'ion-buttons', [['end', '']], null, null, null, null, null)),
          o.Y(17, 16384, null, 1, F.a, [S.a, o.j, o.z, [2, L.a], [2, x.a]], null, null),
          o._18(603979776, 1, { _buttons: 1 }),
          (n()(), o._20(-1, null, ['\n\t\t'])),
          (n()(),
          o.Z(
            20,
            0,
            null,
            null,
            7,
            'button',
            [['end', ''], ['event', 'press'], ['icon-only', ''], ['ion-button', ''], ['navTooltip', '']],
            null,
            [[null, 'click'], [null, 'press'], [null, 'mouseenter'], [null, 'mouseleave']],
            function(n, l, t) {
              var u = !0,
                e = n.component;
              if ('click' === l) {
                u = !1 !== o._13(n, 22).onClick() && u;
              }
              if ('press' === l) {
                u = !1 !== o._13(n, 22).onPress() && u;
              }
              if ('mouseenter' === l) {
                u = !1 !== o._13(n, 22).onMouseEnter() && u;
              }
              if ('mouseleave' === l) {
                u = !1 !== o._13(n, 22).onMouseLeave() && u;
              }
              if ('click' === l) {
                u = !1 !== e.openExportPopover(t) && u;
              }
              return u;
            },
            M.b,
            M.a,
          )),
          o.Y(21, 1097728, [[1, 4]], 0, D.a, [[8, ''], S.a, o.j, o.z], null, null),
          o.Y(
            22,
            4210688,
            null,
            0,
            R.a,
            [o.j, o.f, A.a, o.i],
            { tooltip: [0, 'tooltip'], event: [1, 'event'], navTooltip: [2, 'navTooltip'] },
            null,
          ),
          o._14(131072, U.a, [V.a, o.g]),
          (n()(), o._20(-1, 0, ['\n\t\t\t'])),
          (n()(),
          o.Z(25, 0, null, 0, 1, 'ion-icon', [['name', 'code-download'], ['role', 'img']], [[2, 'hide', null]], null, null, null, null)),
          o.Y(26, 147456, null, 0, B.a, [S.a, o.j, o.z], { name: [0, 'name'] }, null),
          (n()(), o._20(-1, 0, ['\n\t\t'])),
          (n()(), o._20(-1, null, ['\n\t'])),
          (n()(), o._20(-1, 3, ['\n  '])),
          (n()(), o._20(-1, null, ['\n\n'])),
          (n()(), o._20(-1, null, ['\n\n\n'])),
          (n()(),
          o.Z(
            32,
            0,
            null,
            null,
            9,
            'ion-content',
            [['padding', '']],
            [[2, 'statusbar-padding', null], [2, 'has-refresher', null]],
            null,
            null,
            N.b,
            N.a,
          )),
          o.Y(33, 4374528, null, 0, X.a, [S.a, A.a, W.a, o.j, o.z, z.a, $.a, o.u, [2, Z.a], [2, O.a]], null, null),
          (n()(), o._20(-1, 1, ['\n\n\t'])),
          (n()(),
          o.Z(
            35,
            0,
            null,
            1,
            2,
            'ion-searchbar',
            [['debounce', '350']],
            [
              [2, 'searchbar-animated', null],
              [2, 'searchbar-has-value', null],
              [2, 'searchbar-active', null],
              [2, 'searchbar-show-cancel', null],
              [2, 'searchbar-left-aligned', null],
              [2, 'searchbar-has-focus', null],
            ],
            [[null, 'ionInput']],
            function(n, l, t) {
              var u = !0;
              if ('ionInput' === l) {
                u = !1 !== n.component.filter(t) && u;
              }
              return u;
            },
            H.b,
            H.a,
          )),
          o.Y(
            36,
            1294336,
            null,
            0,
            G.a,
            [S.a, A.a, o.j, o.z, [2, q.i]],
            { debounce: [0, 'debounce'], placeholder: [1, 'placeholder'] },
            { ionInput: 'ionInput' },
          ),
          o._14(131072, U.a, [V.a, o.g]),
          (n()(), o._20(-1, 1, ['\n\n\t'])),
          (n()(), o.Z(39, 0, null, 1, 1, 'story-list', [], null, null, null, k.c, k.a)),
          o.Y(40, 49152, null, 0, K.a, [O.a], { stories: [0, 'stories'] }, null),
          (n()(), o._20(-1, 1, ['\n'])),
          (n()(), o._20(-1, null, ['\n'])),
        ],
        function(n, l) {
          var t = l.component;
          n(l, 10, 0, null != t.list && t.list.visibility ? '' : 'lock');
          n(l, 22, 0, o._21(l, 22, 0, o._13(l, 23).transform('LISTVIEW_EXPORT')), 'press', '');
          n(l, 26, 0, 'code-download');
          n(l, 36, 0, '350', o._21(l, 36, 1, o._13(l, 37).transform('LISTVIEW_FILTER')));
          n(l, 40, 0, t.stories);
        },
        function(n, l) {
          var t = l.component;
          n(l, 3, 0, o._13(l, 4)._hidden, o._13(l, 4)._sbPadding);
          n(l, 9, 0, o._13(l, 10)._hidden);
          n(l, 11, 0, null == t.list ? null : t.list.name);
          n(l, 13, 0, null == t.stories ? null : t.stories.length);
          n(l, 25, 0, o._13(l, 26)._hidden);
          n(l, 32, 0, o._13(l, 33).statusbarPadding, o._13(l, 33)._hasRefresher);
          n(
            l,
            35,
            0,
            o._13(l, 36)._animated,
            o._13(l, 36)._value,
            o._13(l, 36)._isActive,
            o._13(l, 36)._showCancelButton,
            o._13(l, 36)._shouldAlignLeft,
            o._13(l, 36)._isFocus,
          );
        },
      );
    }
    Object.defineProperty(l, '__esModule', { value: !0 });
    var o = t(1),
      e = (t(0), t(57), t(706), t(50)),
      i = t(198),
      r = (t(190), t(395)),
      a = (function() {
        function n(n, l, t, u, o, e, i) {
          var r = this;
          (this.navCtrl = n),
            (this.navParams = l),
            (this.l = t),
            (this.popoverCtrl = u),
            (this.translate = o),
            (this.file = e),
            (this.api = i);
          var a = l.get('list');
          this.l.onReady().then(function() {
            r.l.getById(a.urlname).subscribe(function(n) {
              (r.list = n), (r.stories = r.list.stories);
            });
          }),
            this.translate.get(['SETTINGS_EXPORTSUCCESS', 'COPYPROMPT_MSG']).subscribe(function(n) {
              r.translations = n;
            });
        }
        return (
          (n.prototype.filter = function(n) {
            if (n.data && null !== n.data) {
              var l = n.target.value.toLowerCase();
              this.stories = this.list.stories.filter(function(n) {
                if (n.title.toLowerCase().indexOf(l) > -1) return !0;
                if (n.description.toLowerCase().indexOf(l) > -1) return !0;
                if (n.category.toLowerCase().indexOf(l) > -1) return !0;
                if (n.author.name.toLowerCase().indexOf(l) > -1) return !0;
                return (
                  n.tags.filter(function(n) {
                    return n.toLowerCase().indexOf(l) > -1;
                  }).length > 0
                );
              });
            } else this.stories = this.list.stories;
          }),
          (n.prototype.openExportPopover = function(n) {
            var l = this,
              t = this.popoverCtrl.create('ExportPopover');
            t.present({ ev: n }),
              t.onDidDismiss(function(n) {
                if (n) {
                  var t = null,
                    u = 'litapp-' + l.list.urlname + '-' + Math.round(new Date().getTime() / 1e3);
                  'json' === n
                    ? ((u += '.json'), (t = JSON.stringify(l.list)))
                    : 'markdown' === n &&
                      ((u += '.md'),
                      (t =
                        '\n# List: ' +
                        l.list.name +
                        ' (ID: ' +
                        l.list.id +
                        ')\n> ' +
                        l.list.description +
                        '\n- Created at: ' +
                        l.list.createtimestamp +
                        '\n- Public: ' +
                        l.list.visibility +
                        '\n- Amount of stories: ' +
                        l.list.size +
                        '\n\n'),
                      l.list.stories.forEach(function(n) {
                        t +=
                          '\n## [' +
                          n.title +
                          '](https://literotica.com/s/' +
                          n.url +
                          ') (by ' +
                          n.author.name +
                          ')\n> ' +
                          n.description +
                          '\n- Created at: ' +
                          n.timestamp +
                          '\n- Category: ' +
                          n.category +
                          '\n- Rating: ' +
                          n.rating +
                          ' (' +
                          n.viewcount +
                          ' views)\n\n';
                      }));
                  var o = l.file.externalRootDirectory;
                  l.file
                    .writeFile(o, u, t, { replace: !0 })
                    .then(function() {
                      l.api.showToast(l.translations.SETTINGS_EXPORTSUCCESS + ': ' + o + u);
                    })
                    .catch(function(n) {
                      return Object(r.a)(n, function() {
                        return prompt(l.translations.COPYPROMPT_MSG, t);
                      });
                    });
                }
              });
          }),
          n
        );
      })(),
      s = t(718),
      c = t(722),
      f = (function() {
        return function() {};
      })(),
      p = t(381),
      _ = t(382),
      d = t(383),
      h = t(384),
      m = t(385),
      b = t(386),
      g = t(387),
      v = t(388),
      y = t(389),
      w = t(712),
      I = t(716),
      Y = t(714),
      k = t(719),
      T = t(726),
      j = t(128),
      S = t(3),
      Z = t(7),
      C = t(709),
      x = t(51),
      z = t(13),
      O = t(30),
      P = t(390),
      E = t(90),
      L = t(53),
      B = t(63),
      F = t(195),
      M = t(62),
      D = t(29),
      R = t(704),
      A = t(6),
      U = t(125),
      V = t(39),
      N = t(391),
      X = t(31),
      W = t(12),
      $ = t(36),
      H = t(731),
      G = t(211),
      q = t(28),
      K = t(715),
      J = t(16),
      Q = t(133),
      nn = t(127),
      ln = t(37),
      tn = o.X({ encapsulation: 2, styles: [], data: {} }),
      un = o.V(
        'page-list-view',
        a,
        function(n) {
          return o._22(
            0,
            [
              (n()(), o.Z(0, 0, null, null, 1, 'page-list-view', [], null, null, null, u, tn)),
              o.Y(1, 49152, null, 0, a, [O.a, J.a, Q.a, nn.a, V.a, i.a, ln.a], null, null),
            ],
            null,
            null,
          );
        },
        {},
        {},
        [],
      ),
      on = t(18),
      en = t(86),
      rn = t(87),
      an = t(89),
      sn = t(88),
      cn = t(126),
      fn = t(191),
      pn = t(707),
      _n = t(703),
      dn = t(708),
      hn = t(713),
      mn = t(59);
    t.d(l, 'ListViewPageModuleNgFactory', function() {
      return bn;
    });
    var bn = o.W(f, [], function(n) {
      return o._10([
        o._11(512, o.i, o.S, [[8, [p.a, _.a, d.a, h.a, m.a, b.a, g.a, v.a, y.a, w.a, I.a, Y.b, k.b, T.a, un]], [3, o.i], o.s]),
        o._11(4608, on.l, on.k, [o.r, [2, on.t]]),
        o._11(4608, q.r, q.r, []),
        o._11(4608, q.d, q.d, []),
        o._11(4608, en.b, en.a, []),
        o._11(4608, rn.a, rn.b, []),
        o._11(4608, an.b, an.a, []),
        o._11(4608, sn.b, sn.a, []),
        o._11(4608, V.a, V.a, [cn.a, en.b, rn.a, an.b, sn.b, V.b, V.c]),
        o._11(512, on.b, on.b, []),
        o._11(512, q.p, q.p, []),
        o._11(512, q.g, q.g, []),
        o._11(512, q.n, q.n, []),
        o._11(512, fn.a, fn.a, []),
        o._11(512, fn.b, fn.b, []),
        o._11(512, e.a, e.a, []),
        o._11(512, pn.a, pn.a, []),
        o._11(512, _n.a, _n.a, []),
        o._11(512, _n.f, _n.f, []),
        o._11(512, _n.c, _n.c, []),
        o._11(512, _n.b, _n.b, []),
        o._11(512, _n.d, _n.d, []),
        o._11(512, _n.e, _n.e, []),
        o._11(512, dn.a, dn.a, []),
        o._11(512, hn.a, hn.a, []),
        o._11(512, s.a, s.a, []),
        o._11(512, c.a, c.a, []),
        o._11(512, f, f, []),
        o._11(256, mn.a, a, []),
        o._11(256, V.c, void 0, []),
        o._11(256, V.b, void 0, []),
      ]);
    });
  },
  703: function(n, l, t) {
    'use strict';
    function u(n) {
      return void 0 === n;
    }
    function o(n) {
      return 'string' == typeof n;
    }
    function e(n, l) {
      var t = l.split('.'),
        o = t.shift();
      return t.reduce(function(n, l) {
        return u(n) || u(n[l]) ? void 0 : n[l];
      }, n[o || '']);
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
            var u = Object(i.__spread)(l);
            if (Array.isArray(t))
              return u.sort(function(l, u) {
                for (var o = t.length, e = 0; e < o; ++e) {
                  var r = Object(i.__read)(n.extractFromConfig(t[e]), 2),
                    a = n.orderCompare(r[0], r[1], l, u);
                  if (0 !== a) return a;
                }
                return 0;
              });
            if (o(t)) {
              var e = Object(i.__read)(n.extractFromConfig(t), 3),
                r = e[0],
                a = e[1];
              if (1 === t.length)
                switch (e[2]) {
                  case '+':
                    return u.sort(n.simpleSort.bind(this));
                  case '-':
                    return u.sort(n.simpleSort.bind(this)).reverse();
                }
              return u.sort(n.orderCompare.bind(this, r, a));
            }
            return u.sort(n.simpleSort.bind(this));
          }),
          (n.simpleSort = function(n, l) {
            return o(n) && o(l) ? n.toLowerCase().localeCompare(l.toLowerCase()) : n - l;
          }),
          (n.orderCompare = function(n, l, t, i) {
            var r = e(t, n),
              a = e(i, n);
            if (r === a) return 0;
            if (u(r) || '' === r) return 1;
            if (u(a) || '' === a) return -1;
            if (o(r) && o(a)) {
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
            return o(n) ? (0 === l ? n : n + t + this.repeat(n, l - 1, t)) : n;
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
      return o;
    });
    t(57);
    var u = t(705),
      o = (function() {
        function n(n, l, t, u) {
          (this.el = n),
            (this.appRef = l),
            (this.platform = t),
            (this._componentFactoryResolver = u),
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
              l = this._componentFactoryResolver.resolveComponentFactory(u.a);
            this.tooltipElement = n.createComponent(l);
          }),
          (n.prototype._getTooltipPosition = function() {
            var n,
              l,
              t = this.tooltipElement.instance.getNativeElement(),
              u = this.el.nativeElement,
              o = u.getBoundingClientRect(),
              e = 10;
            return (
              this.navTooltip && ((this.positionV = 'bottom'), (this.arrow = !1), (e = 20)),
              (n =
                'right' === this.positionH
                  ? o.right + e
                  : 'left' === this.positionH
                  ? o.left - e - t.offsetWidth
                  : this.navTooltip
                  ? o.left + u.offsetWidth / 2
                  : o.left),
              (l =
                'top' === this.positionV
                  ? o.top - e - t.offsetHeight
                  : 'bottom' === this.positionV
                  ? o.bottom + e
                  : o.top + u.offsetHeight / 2 - t.offsetHeight / 2),
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
      return u;
    });
    t(132);
    var u = (function() {
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
      return u;
    });
    t(57), t(704);
    var u = (function() {
      return function() {};
    })();
  },
  708: function(n, l, t) {
    'use strict';
    t.d(l, 'a', function() {
      return u;
    });
    t(0), t(57), t(50), t(706);
    var u = (function() {
      return function() {};
    })();
  },
  709: function(n, l, t) {
    'use strict';
    function u(n) {
      return o._22(
        0,
        [
          (n()(), o.Z(0, 0, null, null, 1, 'div', [['class', 'toolbar-background']], null, null, null, null, null)),
          o.Y(1, 278528, null, 0, e.h, [o.p, o.q, o.j, o.A], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
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
              var u = !0;
              if ('click' === l) {
                u = !1 !== n.component.backButtonClick(t) && u;
              }
              return u;
            },
            i.b,
            i.a,
          )),
          o.Y(3, 278528, null, 0, e.h, [o.p, o.q, o.j, o.A], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
          o.Y(4, 1097728, null, 0, r.a, [[8, 'bar-button'], a.a, o.j, o.z], null, null),
          (n()(),
          o.Z(5, 0, null, 0, 2, 'ion-icon', [['class', 'back-button-icon'], ['role', 'img']], [[2, 'hide', null]], null, null, null, null)),
          o.Y(6, 278528, null, 0, e.h, [o.p, o.q, o.j, o.A], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
          o.Y(7, 147456, null, 0, s.a, [a.a, o.j, o.z], { name: [0, 'name'] }, null),
          (n()(), o.Z(8, 0, null, 0, 2, 'span', [['class', 'back-button-text']], null, null, null, null, null)),
          o.Y(9, 278528, null, 0, e.h, [o.p, o.q, o.j, o.A], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
          (n()(), o._20(10, null, ['', ''])),
          o._12(null, 0),
          o._12(null, 1),
          o._12(null, 2),
          (n()(), o.Z(14, 0, null, null, 2, 'div', [['class', 'toolbar-content']], null, null, null, null, null)),
          o.Y(15, 278528, null, 0, e.h, [o.p, o.q, o.j, o.A], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
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
      (l.b = u);
    var o = t(1),
      e = t(18),
      i = t(62),
      r = t(29),
      a = t(3),
      s = t(63),
      c = (t(7), t(30), o.X({ encapsulation: 2, styles: [], data: {} }));
  },
  710: function(n, l, t) {
    'use strict';
    t.d(l, 'a', function() {
      return u;
    });
    t(0), t(57), t(190);
    var u = (function() {
      function n(n, l, t, u) {
        var o = this;
        (this.platform = l),
          (this.viewCtrl = t),
          (this.l = u),
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
  711: function(n, l, t) {
    'use strict';
    t.d(l, 'a', function() {
      return o;
    });
    t(0);
    var u = t(1),
      o =
        (t(57),
        t(190),
        t(393),
        (function() {
          function n(n, l, t, o) {
            (this.navCtrl = n),
              (this.popoverCtrl = l),
              (this.loadingCtrl = t),
              (this.user = o),
              (this.Math = Math),
              (this.ishistory = !1),
              (this.onDeleteBySwiping = new u.l()),
              (this.onDownloadBySwiping = new u.l());
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
    function u(n) {
      return o._22(2, [(n()(), o._20(0, null, ['', '']))], null, function(n, l) {
        n(l, 0, 0, l.component.text);
      });
    }
    t.d(l, 'a', function() {
      return r;
    });
    var o = t(1),
      e = t(705),
      i = o.X({
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
        e.a,
        function(n) {
          return o._22(
            0,
            [
              (n()(), o.Z(0, 0, null, null, 1, 'tooltip-box', [], [[40, '@fade', 0]], null, null, u, i)),
              o.Y(1, 4243456, null, 0, e.a, [o.j, o.A], null, null),
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
  713: function(n, l, t) {
    'use strict';
    t.d(l, 'a', function() {
      return u;
    });
    t(0), t(57), t(50), t(706), t(708);
    var u = (function() {
      return function() {};
    })();
  },
  714: function(n, l, t) {
    'use strict';
    function u(n) {
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
    function o(n) {
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
          d.Y(1, 16384, null, 0, b.a, [m.a, d.j, d.z], { color: [0, 'color'] }, null),
          (n()(), d._20(2, null, ['', ''])),
          d._14(131072, g.a, [v.a, d.g]),
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
          d.Y(1, 16384, null, 0, b.a, [m.a, d.j, d.z], { color: [0, 'color'] }, null),
          (n()(), d._20(2, null, ['', ''])),
          d._14(131072, g.a, [v.a, d.g]),
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
          d.Y(1, 16384, null, 0, b.a, [m.a, d.j, d.z], { color: [0, 'color'] }, null),
          (n()(), d._20(2, null, ['', ''])),
          d._14(131072, g.a, [v.a, d.g]),
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
          d.Y(1, 16384, null, 0, b.a, [m.a, d.j, d.z], { color: [0, 'color'] }, null),
          (n()(), d._20(2, null, ['', ''])),
          d._14(131072, g.a, [v.a, d.g]),
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
          d.Y(1, 16384, null, 0, y.a, [m.a, d.j, d.z], null, null),
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
              var u = !0,
                o = n.component;
              if ('click' === l) {
                u = !1 !== d._13(n, 5).onClick() && u;
              }
              if ('press' === l) {
                u = !1 !== d._13(n, 5).onPress() && u;
              }
              if ('mouseenter' === l) {
                u = !1 !== d._13(n, 5).onMouseEnter() && u;
              }
              if ('mouseleave' === l) {
                u = !1 !== d._13(n, 5).onMouseLeave() && u;
              }
              if ('click' === l) {
                u = !1 !== o.openListPicker(o.story, t) && u;
              }
              return u;
            },
            w.b,
            w.a,
          )),
          d.Y(4, 1097728, null, 0, I.a, [[8, ''], m.a, d.j, d.z], { clear: [0, 'clear'] }, null),
          d.Y(
            5,
            4210688,
            null,
            0,
            Y.a,
            [d.j, d.f, k.a, d.i],
            { tooltip: [0, 'tooltip'], event: [1, 'event'], navTooltip: [2, 'navTooltip'] },
            null,
          ),
          d._14(131072, g.a, [v.a, d.g]),
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
              var u = !0,
                o = n.component;
              if ('click' === l) {
                u = !1 !== o.download(o.story, d._13(n.parent, 4)) && u;
              }
              return u;
            },
            w.b,
            w.a,
          )),
          d.Y(1, 1097728, null, 0, I.a, [[8, ''], m.a, d.j, d.z], null, null),
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
          d._14(0, T.d, [d.r]),
          d._14(0, j.h, []),
          (n()(), d._20(-1, null, ['\n'])),
          (n()(), d.Z(3, 0, null, null, 77, 'ion-item-sliding', [['approxItemHeight', '105px']], null, null, null, S.b, S.a)),
          d.Y(4, 49152, [['slidingItem', 4]], 2, Z.a, [[2, C.a], k.a, d.z, d.j, d.u], null, null),
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
              var u = !0,
                o = n.component;
              if ('press' === l) {
                u = !1 !== o.handlePress(o.story, t) && u;
              }
              if ('click' === l) {
                u = !1 !== o.handleClick(o.story, t) && u;
              }
              return u;
            },
            x.b,
            x.a,
          )),
          d.Y(9, 1097728, [[1, 4]], 3, z.a, [O.a, m.a, d.j, d.z, [2, P.a]], null, null),
          d._18(335544320, 3, { contentLabel: 0 }),
          d._18(603979776, 4, { _buttons: 1 }),
          d._18(603979776, 5, { _icons: 1 }),
          d.Y(13, 16384, null, 0, E.a, [], null, null),
          (n()(), d._20(-1, 2, ['\n\n    '])),
          (n()(), d.Z(15, 0, null, 2, 19, 'h2', [], null, null, null, null, null)),
          (n()(), d._20(-1, null, ['\n      '])),
          (n()(), d.U(16777216, null, null, 1, null, u)),
          d.Y(18, 16384, null, 0, T.j, [d.I, d.F], { ngIf: [0, 'ngIf'] }, null),
          (n()(), d._20(-1, null, ['\n      '])),
          (n()(), d.U(16777216, null, null, 1, null, o)),
          d.Y(21, 16384, null, 0, T.j, [d.I, d.F], { ngIf: [0, 'ngIf'] }, null),
          (n()(), d._20(22, null, ['\n      ', '\n      '])),
          (n()(), d.U(16777216, null, null, 1, null, e)),
          d.Y(24, 16384, null, 0, T.j, [d.I, d.F], { ngIf: [0, 'ngIf'] }, null),
          (n()(), d._20(-1, null, ['\n      '])),
          (n()(), d.U(16777216, null, null, 1, null, i)),
          d.Y(27, 16384, null, 0, T.j, [d.I, d.F], { ngIf: [0, 'ngIf'] }, null),
          (n()(), d._20(-1, null, ['\n      '])),
          (n()(), d.U(16777216, null, null, 1, null, r)),
          d.Y(30, 16384, null, 0, T.j, [d.I, d.F], { ngIf: [0, 'ngIf'] }, null),
          (n()(), d._20(-1, null, ['\n      '])),
          (n()(), d.U(16777216, null, null, 1, null, a)),
          d.Y(33, 16384, null, 0, T.j, [d.I, d.F], { ngIf: [0, 'ngIf'] }, null),
          (n()(), d._20(-1, null, ['\n    '])),
          (n()(), d._20(-1, 2, ['\n\n    '])),
          (n()(), d.Z(36, 0, null, 2, 3, 'p', [], null, null, null, null, null)),
          (n()(), d._20(37, null, ['', ''])),
          (n()(), d.U(16777216, null, null, 1, null, s)),
          d.Y(39, 16384, null, 0, T.j, [d.I, d.F], { ngIf: [0, 'ngIf'] }, null),
          (n()(), d._20(-1, 2, ['\n    '])),
          (n()(), d.Z(41, 0, null, 2, 10, 'p', [], null, null, null, null, null)),
          (n()(), d._20(-1, null, ['\n      '])),
          (n()(), d.Z(43, 0, null, null, 1, 'ion-icon', [['name', 'star'], ['role', 'img']], [[2, 'hide', null]], null, null, null, null)),
          d.Y(44, 147456, [[5, 4]], 0, h.a, [m.a, d.j, d.z], { name: [0, 'name'] }, null),
          (n()(), d._20(45, null, [' ', '\n      (', ')\n      '])),
          (n()(), d.Z(46, 0, null, null, 2, 'em', [], null, null, null, null, null)),
          (n()(), d._20(47, null, [' ', ' ', ''])),
          d._14(131072, g.a, [v.a, d.g]),
          (n()(), d._20(49, null, ['\n      ', ' ', '\n    '])),
          d._14(131072, g.a, [v.a, d.g]),
          d._16(51, 2),
          (n()(), d._20(-1, 2, ['\n\n    '])),
          (n()(), d.Z(53, 0, null, 2, 7, 'p', [['class', 'tags']], null, null, null, null, null)),
          (n()(), d._20(-1, null, ['\n      '])),
          (n()(), d.Z(55, 0, null, null, 1, 'strong', [], null, null, null, null, null)),
          (n()(), d._20(56, null, ['', ''])),
          (n()(), d._20(-1, null, ['\n      '])),
          (n()(), d.U(16777216, null, null, 1, null, c)),
          d.Y(59, 802816, null, 0, T.i, [d.I, d.F, d.p], { ngForOf: [0, 'ngForOf'] }, null),
          (n()(), d._20(-1, null, ['\n    '])),
          (n()(), d._20(-1, 2, ['\n\n    '])),
          (n()(), d.U(16777216, null, 4, 1, null, f)),
          d.Y(63, 16384, null, 0, T.j, [d.I, d.F], { ngIf: [0, 'ngIf'] }, null),
          (n()(), d._20(-1, 2, ['\n\n  '])),
          (n()(), d._20(-1, null, ['\n\n  '])),
          (n()(), d.Z(66, 0, null, 1, 13, 'ion-item-options', [], null, null, null, null, null)),
          d.Y(67, 16384, [[2, 4]], 0, L.a, [d.j, k.a], null, null),
          (n()(), d._20(-1, null, ['\n    '])),
          (n()(), d.U(16777216, null, null, 1, null, p)),
          d.Y(70, 16384, null, 0, T.j, [d.I, d.F], { ngIf: [0, 'ngIf'] }, null),
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
              var u = !0,
                o = n.component;
              if ('click' === l) {
                u = !1 !== o.delete(o.story, d._13(n, 4)) && u;
              }
              return u;
            },
            w.b,
            w.a,
          )),
          d.Y(73, 1097728, null, 0, I.a, [[8, ''], m.a, d.j, d.z], { color: [0, 'color'] }, null),
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
      return A;
    }),
      (l.c = _),
      t.d(l, 'b', function() {
        return U;
      });
    var d = t(1),
      h = t(63),
      m = t(3),
      b = t(196),
      g = t(125),
      v = t(39),
      y = t(192),
      w = t(62),
      I = t(29),
      Y = t(704),
      k = t(6),
      T = t(18),
      j = t(703),
      S = t(717),
      Z = t(193),
      C = t(64),
      x = t(189),
      z = t(25),
      O = t(22),
      P = t(58),
      E = t(85),
      L = t(134),
      B = t(711),
      F = t(30),
      M = t(127),
      D = t(131),
      R = t(52),
      A = d.X({ encapsulation: 2, styles: [], data: {} }),
      U = d.V(
        'story-list-item',
        B.a,
        function(n) {
          return d._22(
            0,
            [
              (n()(), d.Z(0, 0, null, null, 1, 'story-list-item', [], null, null, null, _, A)),
              d.Y(1, 49152, null, 0, B.a, [F.a, M.a, D.a, R.a], null, null),
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
      return o;
    });
    t(0);
    var u = t(1),
      o =
        (t(57),
        (function() {
          function n(n) {
            (this.navCtrl = n),
              (this.Math = Math),
              (this.ishistory = !1),
              (this.infinite = !1),
              (this.onDeleteBySwiping = new u.l()),
              (this.onDownloadBySwiping = new u.l()),
              (this.ionInfinite = new u.l()),
              (this.enableInfinite = !0);
          }
          return (
            (n.prototype.showHeaders = function(n, l, t) {
              if (this.ishistory) return null;
              if (l % 10 == 0 && l > 0) {
                var u = Math.round(l / 10);
                return u + 1 + ' (' + (10 * u + 1) + ' - ' + 10 * (u + 1) + ')';
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
    function u(n) {
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
    function o(n) {
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
              var u = !0;
              if ('click' === l) {
                u = !1 !== n.component.toggleFromList(n.context.$implicit) && u;
              }
              return u;
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
          (n()(), r.U(16777216, null, null, 1, null, u)),
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
              var u = !0;
              if ('click' === l) {
                u = !1 !== r._13(n, 17).onClick() && u;
              }
              if ('press' === l) {
                u = !1 !== r._13(n, 17).onPress() && u;
              }
              if ('mouseenter' === l) {
                u = !1 !== r._13(n, 17).onMouseEnter() && u;
              }
              if ('mouseleave' === l) {
                u = !1 !== r._13(n, 17).onMouseLeave() && u;
              }
              return u;
            },
            b.b,
            b.a,
          )),
          r.Y(16, 1097728, null, 0, g.a, [[8, ''], s.a, r.j, r.z], { clear: [0, 'clear'] }, null),
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
          r._14(131072, w.a, [I.a, r.g]),
          (n()(), r._20(-1, 0, ['\n        '])),
          (n()(), r.U(16777216, null, 0, 1, null, o)),
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
          r._14(0, Y.g, []),
          (n()(), r._20(-1, null, ['\n'])),
          (n()(), r.Z(2, 0, null, null, 15, 'ion-list', [['class', 'bookmarks']], null, null, null, null, null)),
          r.Y(3, 16384, null, 0, k.a, [s.a, r.j, r.z, y.a, T.l, j.a], null, null),
          (n()(), r._20(-1, null, ['\n  '])),
          (n()(), r.Z(5, 0, null, null, 7, 'ion-list-header', [['class', 'item']], null, null, null, c.b, c.a)),
          r.Y(6, 1097728, null, 3, f.a, [p.a, s.a, r.j, r.z, [2, _.a]], null, null),
          r._18(335544320, 1, { contentLabel: 0 }),
          r._18(603979776, 2, { _buttons: 1 }),
          r._18(603979776, 3, { _icons: 1 }),
          r.Y(10, 16384, null, 0, S.a, [s.a, r.z, r.j, [8, null]], null, null),
          (n()(), r._20(11, 2, ['', ''])),
          r._14(131072, w.a, [I.a, r.g]),
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
      return P;
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
      b = t(62),
      g = t(29),
      v = t(704),
      y = t(6),
      w = t(125),
      I = t(39),
      Y = t(703),
      k = t(64),
      T = t(10),
      j = t(12),
      S = t(130),
      Z = t(710),
      C = t(16),
      x = t(7),
      z = t(133),
      O = r.X({ encapsulation: 2, styles: [], data: {} }),
      P = r.V(
        'bookmark-popover',
        Z.a,
        function(n) {
          return r._22(
            0,
            [
              (n()(), r.Z(0, 0, null, null, 1, 'bookmark-popover', [], null, null, null, i, O)),
              r.Y(1, 49152, null, 0, Z.a, [C.a, y.a, x.a, z.a], null, null),
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
    function u(n) {
      return o._22(
        2,
        [
          (n()(), o._20(-1, null, ['\n    '])),
          o._12(null, 0),
          (n()(), o._20(-1, null, ['\n    '])),
          o._12(null, 1),
          (n()(), o._20(-1, null, ['\n  '])),
        ],
        null,
        null,
      );
    }
    t.d(l, 'a', function() {
      return e;
    }),
      (l.b = u);
    var o = t(1),
      e = (t(6), o.X({ encapsulation: 2, styles: [], data: {} }));
  },
  718: function(n, l, t) {
    'use strict';
    t.d(l, 'a', function() {
      return u;
    });
    t(0), t(57), t(50), t(706), t(713), t(708);
    var u = (function() {
      return function() {};
    })();
  },
  719: function(n, l, t) {
    'use strict';
    function u(n) {
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
    function o(n) {
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
              var u = !0,
                o = n.component;
              if ('onDeleteBySwiping' === l) {
                u = !1 !== o.onDeleteBySwiping.emit(t) && u;
              }
              if ('onDownloadBySwiping' === l) {
                u = !1 !== o.onDownloadBySwiping.emit(t) && u;
              }
              return u;
            },
            b.c,
            b.a,
          )),
          a.Y(
            3,
            49152,
            null,
            0,
            g.a,
            [v.a, y.a, w.a, I.a],
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
              var u = !0;
              if ('ionInfinite' === l) {
                u = !1 !== n.component.loadMore(t) && u;
              }
              return u;
            },
            null,
            null,
          )),
          a.Y(1, 1196032, null, 0, Y.a, [k.a, a.u, a.j, T.a], { enabled: [0, 'enabled'] }, { ionInfinite: 'ionInfinite' }),
          (n()(), a._20(-1, null, ['\n      '])),
          (n()(), a.Z(3, 0, null, null, 1, 'ion-infinite-scroll-content', [], [[1, 'state', 0]], null, null, j.b, j.a)),
          a.Y(4, 114688, null, 0, S.a, [Y.a, d.a], null, null),
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
          (n()(), a.U(16777216, null, null, 1, null, u)),
          a.Y(4, 16384, null, 0, Z.j, [a.I, a.F], { ngIf: [0, 'ngIf'] }, null),
          (n()(), a._20(-1, null, ['\n\n  '])),
          (n()(), a.Z(6, 0, null, null, 12, 'ion-list', [], null, null, null, null, null)),
          a.Y(7, 16384, null, 0, C.a, [d.a, a.j, a.z, x.a, z.l, T.a], { sliding: [0, 'sliding'] }, null),
          a.Y(
            8,
            1982464,
            null,
            3,
            O.a,
            [a.p, a.j, a.z, a.u, a.g, k.a, x.a, P.a, d.a, T.a],
            { virtualScroll: [0, 'virtualScroll'], headerFn: [1, 'headerFn'] },
            null,
          ),
          a._18(335544320, 1, { _itmTmp: 0 }),
          a._18(335544320, 2, { _hdrTmp: 0 }),
          a._18(335544320, 3, { _ftrTmp: 0 }),
          (n()(), a._20(-1, null, ['\n\n    '])),
          (n()(), a.U(0, null, null, 1, null, o)),
          a.Y(14, 16384, [[2, 4]], 0, E.a, [a.F], null, null),
          (n()(), a._20(-1, null, ['\n\n    '])),
          (n()(), a.U(16777216, null, null, 1, null, e)),
          a.Y(17, 16384, [[1, 4]], 0, L.a, [a.F, a.I], null, null),
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
      return F;
    }),
      (l.c = r),
      t.d(l, 'b', function() {
        return M;
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
      b = t(714),
      g = t(711),
      v = t(30),
      y = t(127),
      w = t(131),
      I = t(52),
      Y = t(129),
      k = t(31),
      T = t(12),
      j = t(720),
      S = t(194),
      Z = t(18),
      C = t(64),
      x = t(6),
      z = t(10),
      O = t(197),
      P = t(7),
      E = t(136),
      L = t(135),
      B = t(715),
      F = a.X({ encapsulation: 2, styles: [], data: {} }),
      M = a.V(
        'story-list',
        B.a,
        function(n) {
          return a._22(
            0,
            [(n()(), a.Z(0, 0, null, null, 1, 'story-list', [], null, null, null, r, F)), a.Y(1, 49152, null, 0, B.a, [v.a], null, null)],
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
    function u(n) {
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
    function o(n) {
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
          (n()(), i.U(16777216, null, null, 1, null, u)),
          i.Y(2, 16384, null, 0, c.j, [i.I, i.F], { ngIf: [0, 'ngIf'] }, null),
          (n()(), i.U(16777216, null, null, 1, null, o)),
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
  721: function(n, l, t) {
    'use strict';
    t.d(l, 'a', function() {
      return u;
    });
    t(0), t(57);
    var u = (function() {
      function n(n) {
        this.viewCtrl = n;
      }
      return (
        (n.prototype.save = function(n) {
          this.viewCtrl.dismiss(n);
        }),
        n
      );
    })();
  },
  722: function(n, l, t) {
    'use strict';
    t.d(l, 'a', function() {
      return u;
    });
    t(0), t(57), t(50);
    var u = (function() {
      return function() {};
    })();
  },
  726: function(n, l, t) {
    'use strict';
    function u(n) {
      return o._22(
        0,
        [
          (n()(), o._20(-1, null, ['\n    '])),
          (n()(), o.Z(1, 0, null, null, 46, 'ion-list', [['radio-group', ''], ['role', 'radiogroup']], null, null, null, null, null)),
          o._17(
            5120,
            null,
            e.h,
            function(n) {
              return [n];
            },
            [i.a],
          ),
          o.Y(3, 16384, null, 0, r.a, [a.a, o.j, o.z, s.a, c.l, f.a], null, null),
          o.Y(4, 1064960, null, 1, i.a, [o.z, o.j, o.g], null, null),
          o._18(335544320, 1, { _header: 0 }),
          (n()(), o._20(-1, null, ['\n      '])),
          (n()(), o.Z(7, 0, null, null, 7, 'ion-list-header', [['class', 'item']], null, null, null, p.b, p.a)),
          o.Y(8, 1097728, null, 3, _.a, [d.a, a.a, o.j, o.z, [2, h.a]], null, null),
          o._18(335544320, 2, { contentLabel: 0 }),
          o._18(603979776, 3, { _buttons: 1 }),
          o._18(603979776, 4, { _icons: 1 }),
          o.Y(12, 16384, [[1, 4]], 0, m.a, [a.a, o.z, o.j, [8, null]], null, null),
          (n()(), o._20(13, 2, ['', ''])),
          o._14(131072, b.a, [g.a, o.g]),
          (n()(), o._20(-1, null, ['\n      '])),
          (n()(), o.Z(16, 0, null, null, 14, 'ion-item', [['class', 'item item-block']], null, null, null, p.b, p.a)),
          o.Y(17, 1097728, null, 3, _.a, [d.a, a.a, o.j, o.z, [2, h.a]], null, null),
          o._18(335544320, 5, { contentLabel: 0 }),
          o._18(603979776, 6, { _buttons: 1 }),
          o._18(603979776, 7, { _icons: 1 }),
          o.Y(21, 16384, null, 0, v.a, [], null, null),
          (n()(), o._20(-1, 2, ['\n        '])),
          (n()(), o.Z(23, 0, null, 1, 3, 'ion-label', [], null, null, null, null, null)),
          o.Y(24, 16384, [[5, 4]], 0, y.a, [a.a, o.j, o.z, [8, null], [8, null], [8, null], [8, null]], null, null),
          (n()(), o._20(25, null, ['', ''])),
          o._14(131072, b.a, [g.a, o.g]),
          (n()(), o._20(-1, 2, ['\n        '])),
          (n()(),
          o.Z(
            28,
            0,
            null,
            4,
            1,
            'ion-radio',
            [['value', 'json']],
            [[2, 'radio-disabled', null]],
            [[null, 'click']],
            function(n, l, t) {
              var u = !0,
                e = n.component;
              if ('click' === l) {
                u = !1 !== o._13(n, 29)._click(t) && u;
              }
              if ('click' === l) {
                u = !1 !== e.save('json') && u;
              }
              return u;
            },
            w.b,
            w.a,
          )),
          o.Y(29, 245760, null, 0, I.a, [d.a, a.a, o.j, o.z, [2, _.a], [2, i.a]], { value: [0, 'value'] }, null),
          (n()(), o._20(-1, 2, ['\n      '])),
          (n()(), o._20(-1, null, ['\n      '])),
          (n()(), o.Z(32, 0, null, null, 14, 'ion-item', [['class', 'item item-block']], null, null, null, p.b, p.a)),
          o.Y(33, 1097728, null, 3, _.a, [d.a, a.a, o.j, o.z, [2, h.a]], null, null),
          o._18(335544320, 8, { contentLabel: 0 }),
          o._18(603979776, 9, { _buttons: 1 }),
          o._18(603979776, 10, { _icons: 1 }),
          o.Y(37, 16384, null, 0, v.a, [], null, null),
          (n()(), o._20(-1, 2, ['\n        '])),
          (n()(), o.Z(39, 0, null, 1, 3, 'ion-label', [], null, null, null, null, null)),
          o.Y(40, 16384, [[8, 4]], 0, y.a, [a.a, o.j, o.z, [8, null], [8, null], [8, null], [8, null]], null, null),
          (n()(), o._20(41, null, ['', ''])),
          o._14(131072, b.a, [g.a, o.g]),
          (n()(), o._20(-1, 2, ['\n        '])),
          (n()(),
          o.Z(
            44,
            0,
            null,
            4,
            1,
            'ion-radio',
            [['value', 'markdown']],
            [[2, 'radio-disabled', null]],
            [[null, 'click']],
            function(n, l, t) {
              var u = !0,
                e = n.component;
              if ('click' === l) {
                u = !1 !== o._13(n, 45)._click(t) && u;
              }
              if ('click' === l) {
                u = !1 !== e.save('markdown') && u;
              }
              return u;
            },
            w.b,
            w.a,
          )),
          o.Y(45, 245760, null, 0, I.a, [d.a, a.a, o.j, o.z, [2, _.a], [2, i.a]], { value: [0, 'value'] }, null),
          (n()(), o._20(-1, 2, ['\n      '])),
          (n()(), o._20(-1, null, ['\n    '])),
          (n()(), o._20(-1, null, ['\n  '])),
        ],
        function(n, l) {
          n(l, 29, 0, 'json');
          n(l, 45, 0, 'markdown');
        },
        function(n, l) {
          n(l, 13, 0, o._21(l, 13, 0, o._13(l, 14).transform('LISTVIEW_EXPORT')));
          n(l, 25, 0, o._21(l, 25, 0, o._13(l, 26).transform('LISTVIEW_EXPORT_JSON')));
          n(l, 28, 0, o._13(l, 29)._disabled);
          n(l, 41, 0, o._21(l, 41, 0, o._13(l, 42).transform('LISTVIEW_EXPORT_MARKDOWN')));
          n(l, 44, 0, o._13(l, 45)._disabled);
        },
      );
    }
    t.d(l, 'a', function() {
      return j;
    });
    var o = t(1),
      e = t(28),
      i = t(67),
      r = t(64),
      a = t(3),
      s = t(6),
      c = t(10),
      f = t(12),
      p = t(189),
      _ = t(25),
      d = t(22),
      h = t(58),
      m = t(130),
      b = t(125),
      g = t(39),
      v = t(85),
      y = t(65),
      w = t(394),
      I = t(92),
      Y = t(721),
      k = t(7),
      T = o.X({ encapsulation: 2, styles: [], data: {} }),
      j = o.V(
        'export-popover',
        Y.a,
        function(n) {
          return o._22(
            0,
            [
              (n()(), o.Z(0, 0, null, null, 1, 'export-popover', [], null, null, null, u, T)),
              o.Y(1, 49152, null, 0, Y.a, [k.a], null, null),
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
  731: function(n, l, t) {
    'use strict';
    function u(n) {
      return o._22(
        0,
        [
          o._18(402653184, 1, { _searchbarInput: 0 }),
          o._18(402653184, 2, { _searchbarIcon: 0 }),
          o._18(402653184, 3, { _cancelButton: 0 }),
          (n()(), o.Z(3, 0, null, null, 8, 'div', [['class', 'searchbar-input-container']], null, null, null, null, null)),
          (n()(),
          o.Z(
            4,
            0,
            null,
            null,
            3,
            'button',
            [['class', 'searchbar-md-cancel'], ['clear', ''], ['color', 'dark'], ['ion-button', ''], ['mode', 'md'], ['type', 'button']],
            null,
            [[null, 'click'], [null, 'mousedown']],
            function(n, l, t) {
              var u = !0,
                o = n.component;
              if ('click' === l) {
                u = !1 !== o.cancelSearchbar(t) && u;
              }
              if ('mousedown' === l) {
                u = !1 !== o.cancelSearchbar(t) && u;
              }
              return u;
            },
            e.b,
            e.a,
          )),
          o.Y(5, 1097728, null, 0, i.a, [[8, ''], r.a, o.j, o.z], { color: [0, 'color'], mode: [1, 'mode'], clear: [2, 'clear'] }, null),
          (n()(),
          o.Z(6, 0, null, 0, 1, 'ion-icon', [['name', 'md-arrow-back'], ['role', 'img']], [[2, 'hide', null]], null, null, null, null)),
          o.Y(7, 147456, null, 0, a.a, [r.a, o.j, o.z], { name: [0, 'name'] }, null),
          (n()(),
          o.Z(8, 0, [[2, 0], ['searchbarIcon', 1]], null, 0, 'div', [['class', 'searchbar-search-icon']], null, null, null, null, null)),
          (n()(),
          o.Z(
            9,
            0,
            [[1, 0], ['searchbarInput', 1]],
            null,
            0,
            'input',
            [['class', 'searchbar-input'], ['dir', 'auto']],
            [[1, 'placeholder', 0], [1, 'type', 0], [1, 'autocomplete', 0], [1, 'autocorrect', 0], [1, 'spellcheck', 0]],
            [[null, 'input'], [null, 'blur'], [null, 'focus']],
            function(n, l, t) {
              var u = !0,
                o = n.component;
              if ('input' === l) {
                u = !1 !== o.inputChanged(t) && u;
              }
              if ('blur' === l) {
                u = !1 !== o.inputBlurred() && u;
              }
              if ('focus' === l) {
                u = !1 !== o.inputFocused() && u;
              }
              return u;
            },
            null,
            null,
          )),
          (n()(),
          o.Z(
            10,
            0,
            null,
            null,
            1,
            'button',
            [['class', 'searchbar-clear-icon'], ['clear', ''], ['ion-button', ''], ['type', 'button']],
            null,
            [[null, 'click'], [null, 'mousedown']],
            function(n, l, t) {
              var u = !0,
                o = n.component;
              if ('click' === l) {
                u = !1 !== o.clearInput(t) && u;
              }
              if ('mousedown' === l) {
                u = !1 !== o.clearInput(t) && u;
              }
              return u;
            },
            e.b,
            e.a,
          )),
          o.Y(11, 1097728, null, 0, i.a, [[8, ''], r.a, o.j, o.z], { mode: [0, 'mode'], clear: [1, 'clear'] }, null),
          (n()(),
          o.Z(
            12,
            0,
            [[3, 0]],
            null,
            2,
            'button',
            [['class', 'searchbar-ios-cancel'], ['clear', ''], ['ion-button', ''], ['mode', 'ios'], ['type', 'button']],
            [[8, 'tabIndex', 0]],
            [[null, 'click'], [null, 'mousedown']],
            function(n, l, t) {
              var u = !0,
                o = n.component;
              if ('click' === l) {
                u = !1 !== o.cancelSearchbar(t) && u;
              }
              if ('mousedown' === l) {
                u = !1 !== o.cancelSearchbar(t) && u;
              }
              return u;
            },
            e.b,
            e.a,
          )),
          o.Y(13, 1097728, [['cancelButton', 4]], 0, i.a, [[8, ''], r.a, o.j, o.z], { mode: [0, 'mode'], clear: [1, 'clear'] }, null),
          (n()(), o._20(14, 0, ['', ''])),
        ],
        function(n, l) {
          var t = l.component;
          n(l, 5, 0, 'dark', 'md', '');
          n(l, 7, 0, 'md-arrow-back');
          n(l, 11, 0, t._mode, '');
          n(l, 13, 0, 'ios', '');
        },
        function(n, l) {
          var t = l.component;
          n(l, 6, 0, o._13(l, 7)._hidden);
          n(l, 9, 0, t.placeholder, t.type, t._autocomplete, t._autocorrect, t._spellcheck);
          n(l, 12, 0, t._isActive ? 1 : -1);
          n(l, 14, 0, t.cancelButtonText);
        },
      );
    }
    t.d(l, 'a', function() {
      return s;
    }),
      (l.b = u);
    var o = t(1),
      e = t(62),
      i = t(29),
      r = t(3),
      a = t(63),
      s = (t(6), o.X({ encapsulation: 2, styles: [], data: {} }));
  },
});
