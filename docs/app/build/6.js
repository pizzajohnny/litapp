webpackJsonp([6], {
  684: function(n, l, t) {
    'use strict';
    function u(n) {
      return h._22(
        0,
        [
          (n()(), h.Z(0, 0, null, null, 2, 'div', [['class', 'refresher-pulling-icon']], null, null, null, null, null)),
          (n()(), h.Z(1, 0, null, null, 1, 'ion-icon', [['role', 'img']], [[2, 'hide', null]], null, null, null, null)),
          h.Y(2, 147456, null, 0, pn.a, [P.a, h.j, h.z], { name: [0, 'name'] }, null),
        ],
        function(n, l) {
          n(l, 2, 0, l.component.pullingIcon);
        },
        function(n, l) {
          n(l, 1, 0, h._13(l, 2)._hidden);
        },
      );
    }
    function o(n) {
      return h._22(
        0,
        [(n()(), h.Z(0, 0, null, null, 0, 'div', [['class', 'refresher-pulling-text']], [[8, 'innerHTML', 1]], null, null, null, null))],
        null,
        function(n, l) {
          n(l, 0, 0, l.component.pullingText);
        },
      );
    }
    function e(n) {
      return h._22(
        0,
        [(n()(), h.Z(0, 0, null, null, 0, 'div', [['class', 'refresher-refreshing-text']], [[8, 'innerHTML', 1]], null, null, null, null))],
        null,
        function(n, l) {
          n(l, 0, 0, l.component.refreshingText);
        },
      );
    }
    function i(n) {
      return h._22(
        0,
        [
          (n()(), h.Z(0, 0, null, null, 4, 'div', [['class', 'refresher-pulling']], null, null, null, null, null)),
          (n()(), h.U(16777216, null, null, 1, null, u)),
          h.Y(2, 16384, null, 0, V.j, [h.I, h.F], { ngIf: [0, 'ngIf'] }, null),
          (n()(), h.U(16777216, null, null, 1, null, o)),
          h.Y(4, 16384, null, 0, V.j, [h.I, h.F], { ngIf: [0, 'ngIf'] }, null),
          (n()(), h.Z(5, 0, null, null, 5, 'div', [['class', 'refresher-refreshing']], null, null, null, null, null)),
          (n()(), h.Z(6, 0, null, null, 2, 'div', [['class', 'refresher-refreshing-icon']], null, null, null, null, null)),
          (n()(), h.Z(7, 0, null, null, 1, 'ion-spinner', [], [[2, 'spinner-paused', null]], null, null, S.b, S.a)),
          h.Y(8, 114688, null, 0, E.a, [P.a, h.j, h.z], { name: [0, 'name'] }, null),
          (n()(), h.U(16777216, null, null, 1, null, e)),
          h.Y(10, 16384, null, 0, V.j, [h.I, h.F], { ngIf: [0, 'ngIf'] }, null),
        ],
        function(n, l) {
          var t = l.component;
          n(l, 2, 0, t.pullingIcon);
          n(l, 4, 0, t.pullingText);
          n(l, 8, 0, t.refreshingSpinner);
          n(l, 10, 0, t.refreshingText);
        },
        function(n, l) {
          n(l, 7, 0, h._13(l, 8)._paused);
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
            1,
            'ion-spinner',
            [['style', 'width: 100%; margin-top: 25px;']],
            [[2, 'spinner-paused', null]],
            null,
            null,
            S.b,
            S.a,
          )),
          h.Y(1, 114688, null, 0, E.a, [P.a, h.j, h.z], null, null),
        ],
        function(n, l) {
          n(l, 1, 0);
        },
        function(n, l) {
          n(l, 0, 0, h._13(l, 1)._paused);
        },
      );
    }
    function a(n) {
      return h._22(
        0,
        [
          (n()(), h.Z(0, 0, null, null, 1, 'ion-img', [['cache', 'true']], null, null, null, O.b, O.a)),
          h.Y(1, 1228800, null, 0, L.a, [h.j, h.z, M.a, [2, A.a], U.a], { src: [0, 'src'], cache: [1, 'cache'] }, null),
        ],
        function(n, l) {
          n(l, 1, 0, null == l.parent.parent.context.$implicit.author ? null : l.parent.parent.context.$implicit.author.picture, 'true');
        },
        null,
      );
    }
    function s(n) {
      return h._22(
        0,
        [
          (n()(), h.Z(0, 0, null, null, 27, null, null, null, null, null, null, null)),
          (n()(), h._20(-1, null, ['\n        '])),
          (n()(),
          h.Z(
            2,
            0,
            null,
            null,
            24,
            'button',
            [['approxItemHeight', '90px'], ['class', 'author item item-block'], ['ion-item', '']],
            null,
            [[null, 'click']],
            function(n, l, t) {
              var u = !0;
              if ('click' === l) {
                u = !1 !== n.component.openAuthor(n.parent.context.$implicit.author, t) && u;
              }
              return u;
            },
            $.b,
            $.a,
          )),
          h.Y(3, 1097728, null, 3, R.a, [B.a, P.a, h.j, h.z, [2, D.a]], null, null),
          h._18(335544320, 6, { contentLabel: 0 }),
          h._18(603979776, 7, { _buttons: 1 }),
          h._18(603979776, 8, { _icons: 1 }),
          h.Y(7, 16384, null, 0, H.a, [], null, null),
          (n()(), h._20(-1, 2, ['\n\n            '])),
          (n()(), h.Z(9, 0, null, 2, 5, 'ion-avatar', [['large', '']], null, null, null, null, null)),
          h.Y(10, 16384, null, 0, N.a, [], null, null),
          (n()(), h._20(-1, null, ['\n              '])),
          (n()(), h.U(16777216, null, null, 1, null, a)),
          h.Y(13, 16384, null, 0, V.j, [h.I, h.F], { ngIf: [0, 'ngIf'] }, null),
          (n()(), h._20(-1, null, ['\n            '])),
          (n()(), h._20(-1, 2, ['\n            '])),
          (n()(), h.Z(16, 0, null, 2, 5, 'p', [], null, null, null, null, null)),
          (n()(), h._20(-1, null, ['\n              '])),
          (n()(), h.Z(18, 0, null, null, 1, 'a', [], null, null, null, null, null)),
          (n()(), h._20(19, null, ['', ''])),
          (n()(), h._20(20, null, ['\n              ', ' ', '\n            '])),
          h._14(131072, W.a, [X.a, h.g]),
          (n()(), h._20(-1, 2, ['\n            '])),
          (n()(), h.Z(23, 0, null, 2, 2, 'p', [], null, null, null, null, null)),
          (n()(), h._20(24, null, ['', ''])),
          h._16(25, 1),
          (n()(), h._20(-1, 2, ['\n            \n        '])),
          (n()(), h._20(-1, null, ['\n      '])),
        ],
        function(n, l) {
          n(l, 13, 0, null == l.parent.context.$implicit.author ? null : l.parent.context.$implicit.author.picture);
        },
        function(n, l) {
          n(l, 19, 0, null == l.parent.context.$implicit.author ? null : l.parent.context.$implicit.author.name);
          n(
            l,
            20,
            0,
            h._21(l, 20, 0, h._13(l, 21).transform('FEED_EDITED')),
            null == l.parent.context.$implicit.text ? null : l.parent.context.$implicit.text.join(', '),
          );
          n(l, 24, 0, h._21(l, 24, 0, n(l, 25, 0, h._13(l.parent.parent, 0), 1e3 * l.parent.context.$implicit.timestamp)));
        },
      );
    }
    function c(n) {
      return h._22(
        0,
        [
          (n()(), h._20(-1, null, ['\n        '])),
          (n()(), h.Z(1, 0, null, null, 1, 'story-list-item', [], null, null, null, z.c, z.a)),
          h.Y(2, 49152, null, 0, q.a, [G.a, K.a, J.a, Q.a], { story: [0, 'story'] }, null),
          (n()(), h._20(-1, null, ['\n      '])),
        ],
        function(n, l) {
          n(l, 2, 0, l.parent.context.$implicit.story);
        },
        null,
      );
    }
    function f(n) {
      return h._22(
        0,
        [
          (n()(), h.Z(0, 0, null, null, 1, 'p', [['class', 'oldline']], null, null, null, null, null)),
          (n()(), h._20(-1, null, ['\n        Older items\n      '])),
        ],
        null,
        null,
      );
    }
    function p(n) {
      return h._22(
        0,
        [
          (n()(), h.Z(0, 0, null, null, 9, 'div', [], null, null, null, null, null)),
          (n()(), h._20(-1, null, ['\n\n      '])),
          (n()(), h.U(16777216, null, null, 1, null, s)),
          h.Y(3, 16384, null, 0, V.j, [h.I, h.F], { ngIf: [0, 'ngIf'], ngIfElse: [1, 'ngIfElse'] }, null),
          (n()(), h._20(-1, null, ['\n        \n      '])),
          (n()(), h.U(0, [['s', 2]], null, 0, null, c)),
          (n()(), h._20(-1, null, ['\n\n      '])),
          (n()(), h.U(16777216, null, null, 1, null, f)),
          h.Y(8, 16384, null, 0, V.j, [h.I, h.F], { ngIf: [0, 'ngIf'] }, null),
          (n()(), h._20(-1, null, ['\n      \n    '])),
        ],
        function(n, l) {
          var t = l.component;
          n(l, 3, 0, !l.context.$implicit.story, h._13(l, 5));
          n(l, 8, 0, l.context.$implicit.id == t.lastviewedid && l.context.index > 0);
        },
        null,
      );
    }
    function _(n) {
      return h._22(
        0,
        [
          h._14(0, V.d, [h.r]),
          (n()(), h.Z(1, 0, null, null, 35, 'ion-header', [], null, null, null, null, null)),
          h.Y(2, 16384, null, 0, nn.a, [P.a, h.j, h.z, [2, ln.a]], null, null),
          (n()(), h._20(-1, null, ['\n\n  '])),
          (n()(),
          h.Z(
            4,
            0,
            null,
            null,
            31,
            'ion-navbar',
            [['class', 'toolbar']],
            [[8, 'hidden', 0], [2, 'statusbar-padding', null]],
            null,
            null,
            tn.b,
            tn.a,
          )),
          h.Y(5, 49152, null, 0, un.a, [on.a, [2, ln.a], [2, G.a], P.a, h.j, h.z], null, null),
          (n()(), h._20(-1, 3, ['\n  \t'])),
          (n()(),
          h.Z(
            7,
            0,
            null,
            0,
            8,
            'button',
            [['icon-only', ''], ['ion-button', ''], ['menuToggle', '']],
            [[8, 'hidden', 0]],
            [[null, 'click']],
            function(n, l, t) {
              var u = !0;
              if ('click' === l) {
                u = !1 !== h._13(n, 9).toggle() && u;
              }
              return u;
            },
            en.b,
            en.a,
          )),
          h.Y(8, 1097728, [[1, 4]], 0, rn.a, [[8, ''], P.a, h.j, h.z], null, null),
          h.Y(9, 1064960, null, 0, an.a, [sn.a, [2, ln.a], [2, rn.a], [2, un.a]], { menuToggle: [0, 'menuToggle'] }, null),
          h.Y(10, 16384, null, 1, cn.a, [P.a, h.j, h.z, [2, fn.a], [2, un.a]], null, null),
          h._18(603979776, 1, { _buttons: 1 }),
          (n()(), h._20(-1, 0, ['\n      '])),
          (n()(), h.Z(13, 0, null, 0, 1, 'ion-icon', [['name', 'menu'], ['role', 'img']], [[2, 'hide', null]], null, null, null, null)),
          h.Y(14, 147456, null, 0, pn.a, [P.a, h.j, h.z], { name: [0, 'name'] }, null),
          (n()(), h._20(-1, 0, ['\n    '])),
          (n()(), h._20(-1, 3, ['\n    '])),
          (n()(), h.Z(17, 0, null, 3, 3, 'ion-title', [], null, null, null, _n.b, _n.a)),
          h.Y(18, 49152, null, 0, hn.a, [P.a, h.j, h.z, [2, fn.a], [2, un.a]], null, null),
          (n()(), h._20(19, 0, ['', ''])),
          h._14(131072, W.a, [X.a, h.g]),
          (n()(), h._20(-1, 3, ['\n    '])),
          (n()(), h.Z(22, 0, null, 2, 12, 'ion-buttons', [['end', '']], null, null, null, null, null)),
          h.Y(23, 16384, null, 1, cn.a, [P.a, h.j, h.z, [2, fn.a], [2, un.a]], null, null),
          h._18(603979776, 2, { _buttons: 1 }),
          (n()(), h._20(-1, null, ['\n      '])),
          (n()(),
          h.Z(
            26,
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
                o = n.component;
              if ('click' === l) {
                u = !1 !== h._13(n, 28).onClick() && u;
              }
              if ('press' === l) {
                u = !1 !== h._13(n, 28).onPress() && u;
              }
              if ('mouseenter' === l) {
                u = !1 !== h._13(n, 28).onMouseEnter() && u;
              }
              if ('mouseleave' === l) {
                u = !1 !== h._13(n, 28).onMouseLeave() && u;
              }
              if ('click' === l) {
                u = !1 !== o.openFollowing() && u;
              }
              return u;
            },
            en.b,
            en.a,
          )),
          h.Y(27, 1097728, [[2, 4]], 0, rn.a, [[8, ''], P.a, h.j, h.z], null, null),
          h.Y(
            28,
            4210688,
            null,
            0,
            dn.a,
            [h.j, h.f, M.a, h.i],
            { tooltip: [0, 'tooltip'], event: [1, 'event'], navTooltip: [2, 'navTooltip'] },
            null,
          ),
          h._14(131072, W.a, [X.a, h.g]),
          (n()(), h._20(-1, 0, ['\n       '])),
          (n()(), h.Z(31, 0, null, 0, 1, 'ion-icon', [['name', 'people'], ['role', 'img']], [[2, 'hide', null]], null, null, null, null)),
          h.Y(32, 147456, null, 0, pn.a, [P.a, h.j, h.z], { name: [0, 'name'] }, null),
          (n()(), h._20(-1, 0, ['\n     '])),
          (n()(), h._20(-1, null, ['\n   '])),
          (n()(), h._20(-1, 3, ['\n '])),
          (n()(), h._20(-1, null, ['\n\n'])),
          (n()(), h._20(-1, null, ['\n\n\n'])),
          (n()(),
          h.Z(
            38,
            0,
            null,
            null,
            30,
            'ion-content',
            [['padding', '']],
            [[2, 'statusbar-padding', null], [2, 'has-refresher', null]],
            null,
            null,
            mn.b,
            mn.a,
          )),
          h.Y(39, 4374528, null, 0, A.a, [P.a, M.a, U.a, h.j, h.z, on.a, gn.a, h.u, [2, ln.a], [2, G.a]], null, null),
          (n()(), h._20(-1, 1, ['\n\n  '])),
          (n()(),
          h.Z(
            41,
            0,
            null,
            2,
            5,
            'ion-refresher',
            [],
            [[2, 'refresher-active', null], [4, 'top', null]],
            [[null, 'ionRefresh']],
            function(n, l, t) {
              var u = !0;
              if ('ionRefresh' === l) {
                u = !1 !== n.component.refresh(t, !1, !0) && u;
              }
              return u;
            },
            null,
            null,
          )),
          h.Y(42, 212992, null, 0, bn.a, [M.a, A.a, h.u, vn.l], null, { ionRefresh: 'ionRefresh' }),
          (n()(), h._20(-1, null, ['\n    '])),
          (n()(), h.Z(44, 0, null, null, 1, 'ion-refresher-content', [], [[1, 'state', 0]], null, null, i, wn)),
          h.Y(45, 114688, null, 0, yn.a, [bn.a, P.a], null, null),
          (n()(), h._20(-1, null, ['\n  '])),
          (n()(), h._20(-1, 1, ['\n\n  '])),
          (n()(), h.U(16777216, null, 1, 1, null, r)),
          h.Y(49, 16384, null, 0, V.j, [h.I, h.F], { ngIf: [0, 'ngIf'] }, null),
          (n()(), h._20(-1, 1, ['\n\n  '])),
          (n()(), h.Z(51, 0, null, 1, 9, 'ion-list', [['sliding', 'false']], null, null, null, null, null)),
          h.Y(52, 16384, null, 0, In.a, [P.a, h.j, h.z, M.a, vn.l, U.a], { sliding: [0, 'sliding'] }, null),
          h.Y(
            53,
            1982464,
            null,
            3,
            Yn.a,
            [h.p, h.j, h.z, h.u, h.g, A.a, M.a, ln.a, P.a, U.a],
            { virtualScroll: [0, 'virtualScroll'], headerFn: [1, 'headerFn'] },
            null,
          ),
          h._18(335544320, 3, { _itmTmp: 0 }),
          h._18(335544320, 4, { _hdrTmp: 0 }),
          h._18(335544320, 5, { _ftrTmp: 0 }),
          (n()(), h._20(-1, null, ['\n    '])),
          (n()(), h.U(16777216, null, null, 1, null, p)),
          h.Y(59, 16384, [[3, 4]], 0, jn.a, [h.F, h.I], null, null),
          (n()(), h._20(-1, null, ['\n\n  '])),
          (n()(), h._20(-1, 1, ['\n\n  '])),
          (n()(),
          h.Z(
            62,
            0,
            null,
            1,
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
          h.Y(63, 1196032, null, 0, Tn.a, [A.a, h.u, h.j, U.a], { enabled: [0, 'enabled'] }, { ionInfinite: 'ionInfinite' }),
          (n()(), h._20(-1, null, ['\n    '])),
          (n()(), h.Z(65, 0, null, null, 1, 'ion-infinite-scroll-content', [], [[1, 'state', 0]], null, null, Zn.b, Zn.a)),
          h.Y(66, 114688, null, 0, kn.a, [Tn.a, P.a], null, null),
          (n()(), h._20(-1, null, ['\n  '])),
          (n()(), h._20(-1, 1, ['\n\n'])),
          (n()(), h._20(-1, null, ['\n'])),
        ],
        function(n, l) {
          var t = l.component;
          n(l, 9, 0, '');
          n(l, 14, 0, 'menu');
          n(l, 28, 0, h._21(l, 28, 0, h._13(l, 29).transform('FEED_TOOLTIP_FOLLOWING')), 'press', '');
          n(l, 32, 0, 'people'), n(l, 42, 0), n(l, 45, 0);
          n(l, 49, 0, t.showLoader);
          n(l, 52, 0, 'false');
          n(l, 53, 0, t.feed, t.showNewLine);
          n(l, 63, 0, t.enableInfinite), n(l, 66, 0);
        },
        function(n, l) {
          n(l, 4, 0, h._13(l, 5)._hidden, h._13(l, 5)._sbPadding);
          n(l, 7, 0, h._13(l, 9).isHidden);
          n(l, 13, 0, h._13(l, 14)._hidden);
          n(l, 19, 0, h._21(l, 19, 0, h._13(l, 20).transform('FEED_TITLE')));
          n(l, 31, 0, h._13(l, 32)._hidden);
          n(l, 38, 0, h._13(l, 39).statusbarPadding, h._13(l, 39)._hasRefresher);
          n(l, 41, 0, 'inactive' !== h._13(l, 42).state, h._13(l, 42)._top);
          n(l, 44, 0, h._13(l, 45).r.state);
          n(l, 65, 0, h._13(l, 66).inf.state);
        },
      );
    }
    Object.defineProperty(l, '__esModule', { value: !0 });
    var h = t(1),
      d = (t(0), t(57), t(50)),
      m = (t(706), t(713)),
      g = (t(41), t(190), t(69)),
      b = (function() {
        function n(n, l, t, u) {
          var o = this;
          (this.navCtrl = n),
            (this.navParams = l),
            (this.storage = t),
            (this.f = u),
            (this.feed = []),
            (this.enableInfinite = !0),
            (this.lastviewedid = 0),
            (this.showLoader = !1),
            (this.showLoader = !0),
            Promise.all([this.f.onReady(), this.storage.get(g.a)]).then(function(n) {
              (o.lastviewedid = n[1]), o.refresh(null, !0);
            });
        }
        return (
          (n.prototype.refresh = function(n, l, t) {
            var u = this;
            void 0 === t && (t = !1),
              (this.enableInfinite = !0),
              this.f.query(void 0, l, t).subscribe(function(l) {
                l && l.length && ((u.feed = l), u.storage.set(g.a, l[0].id), (u.f.feedbadge = '')), n && n.complete(), (u.showLoader = !1);
              });
          }),
          (n.prototype.loadMore = function(n) {
            var l = this;
            this.f.query(this.feed[this.feed.length - 1].id, !1).subscribe(function(t) {
              t && t.length > 0
                ? (t.forEach(function(n) {
                    return l.feed.push(n);
                  }),
                  n.complete())
                : (n.enable(!1), (l.enableInfinite = !1));
            });
          }),
          (n.prototype.openFollowing = function() {
            this.navCtrl.push('FollowingPage');
          }),
          (n.prototype.openAuthor = function(n, l) {
            l && l.stopPropagation(), this.navCtrl.push('AuthorPage', { author: n });
          }),
          n
        );
      })(),
      v = (function() {
        return function() {};
      })(),
      y = t(381),
      w = t(382),
      I = t(383),
      Y = t(384),
      j = t(385),
      T = t(386),
      Z = t(387),
      k = t(388),
      x = t(389),
      C = t(712),
      F = t(716),
      z = t(714),
      S = t(392),
      E = t(91),
      P = t(3),
      O = t(725),
      L = t(201),
      M = t(6),
      A = t(31),
      U = t(12),
      $ = t(189),
      R = t(25),
      B = t(22),
      D = t(58),
      H = t(85),
      N = t(216),
      V = t(18),
      W = t(125),
      X = t(39),
      q = t(711),
      G = t(30),
      K = t(127),
      J = t(131),
      Q = t(52),
      nn = t(128),
      ln = t(7),
      tn = t(709),
      un = t(51),
      on = t(13),
      en = t(62),
      rn = t(29),
      an = t(200),
      sn = t(33),
      cn = t(195),
      fn = t(53),
      pn = t(63),
      _n = t(390),
      hn = t(90),
      dn = t(704),
      mn = t(391),
      gn = t(36),
      bn = t(143),
      vn = t(10),
      yn = t(218),
      wn = h.X({ encapsulation: 2, styles: [], data: {} }),
      In = t(64),
      Yn = t(197),
      jn = t(135),
      Tn = t(129),
      Zn = t(720),
      kn = t(194),
      xn = t(16),
      Cn = t(203),
      Fn = t(141),
      zn = h.X({ encapsulation: 2, styles: [], data: {} }),
      Sn = h.V(
        'page-feed',
        b,
        function(n) {
          return h._22(
            0,
            [
              (n()(), h.Z(0, 0, null, null, 1, 'page-feed', [], null, null, null, _, zn)),
              h.Y(1, 49152, null, 0, b, [G.a, xn.a, Cn.a, Fn.a], null, null),
            ],
            null,
            null,
          );
        },
        {},
        {},
        [],
      ),
      En = t(28),
      Pn = t(86),
      On = t(87),
      Ln = t(89),
      Mn = t(88),
      An = t(126),
      Un = t(191),
      $n = t(707),
      Rn = t(703),
      Bn = t(708),
      Dn = t(59);
    t.d(l, 'FeedPageModuleNgFactory', function() {
      return Hn;
    });
    var Hn = h.W(v, [], function(n) {
      return h._10([
        h._11(512, h.i, h.S, [[8, [y.a, w.a, I.a, Y.a, j.a, T.a, Z.a, k.a, x.a, C.a, F.a, z.b, Sn]], [3, h.i], h.s]),
        h._11(4608, V.l, V.k, [h.r, [2, V.t]]),
        h._11(4608, En.r, En.r, []),
        h._11(4608, En.d, En.d, []),
        h._11(4608, Pn.b, Pn.a, []),
        h._11(4608, On.a, On.b, []),
        h._11(4608, Ln.b, Ln.a, []),
        h._11(4608, Mn.b, Mn.a, []),
        h._11(4608, X.a, X.a, [An.a, Pn.b, On.a, Ln.b, Mn.b, X.b, X.c]),
        h._11(512, V.b, V.b, []),
        h._11(512, En.p, En.p, []),
        h._11(512, En.g, En.g, []),
        h._11(512, En.n, En.n, []),
        h._11(512, Un.a, Un.a, []),
        h._11(512, Un.b, Un.b, []),
        h._11(512, d.a, d.a, []),
        h._11(512, $n.a, $n.a, []),
        h._11(512, Rn.a, Rn.a, []),
        h._11(512, Rn.f, Rn.f, []),
        h._11(512, Rn.c, Rn.c, []),
        h._11(512, Rn.b, Rn.b, []),
        h._11(512, Rn.d, Rn.d, []),
        h._11(512, Rn.e, Rn.e, []),
        h._11(512, Bn.a, Bn.a, []),
        h._11(512, m.a, m.a, []),
        h._11(512, v, v, []),
        h._11(256, Dn.a, b, []),
        h._11(256, X.c, void 0, []),
        h._11(256, X.b, void 0, []),
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
      return h;
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
      h = (function() {
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
      return h._22(
        0,
        [
          (n()(), h.Z(0, 0, null, null, 1, 'ion-icon', [['name', 'eye'], ['role', 'img']], [[2, 'hide', null]], null, null, null, null)),
          h.Y(1, 147456, [[5, 4]], 0, d.a, [m.a, h.j, h.z], { name: [0, 'name'] }, null),
        ],
        function(n, l) {
          n(l, 1, 0, 'eye');
        },
        function(n, l) {
          n(l, 0, 0, h._13(l, 1)._hidden);
        },
      );
    }
    function o(n) {
      return h._22(
        0,
        [
          (n()(),
          h.Z(0, 0, null, null, 1, 'ion-icon', [['name', 'download'], ['role', 'img']], [[2, 'hide', null]], null, null, null, null)),
          h.Y(1, 147456, [[5, 4]], 0, d.a, [m.a, h.j, h.z], { name: [0, 'name'] }, null),
        ],
        function(n, l) {
          n(l, 1, 0, 'download');
        },
        function(n, l) {
          n(l, 0, 0, h._13(l, 1)._hidden);
        },
      );
    }
    function e(n) {
      return h._22(
        0,
        [
          (n()(), h.Z(0, 0, null, null, 3, 'ion-badge', [['color', 'blue']], null, null, null, null, null)),
          h.Y(1, 16384, null, 0, g.a, [m.a, h.j, h.z], { color: [0, 'color'] }, null),
          (n()(), h._20(2, null, ['', ''])),
          h._14(131072, b.a, [v.a, h.g]),
        ],
        function(n, l) {
          n(l, 1, 0, 'blue');
        },
        function(n, l) {
          n(l, 2, 0, h._21(l, 2, 0, h._13(l, 3).transform('WINNER_TAG')));
        },
      );
    }
    function i(n) {
      return h._22(
        0,
        [
          (n()(), h.Z(0, 0, null, null, 3, 'ion-badge', [['color', 'red']], null, null, null, null, null)),
          h.Y(1, 16384, null, 0, g.a, [m.a, h.j, h.z], { color: [0, 'color'] }, null),
          (n()(), h._20(2, null, ['', ''])),
          h._14(131072, b.a, [v.a, h.g]),
        ],
        function(n, l) {
          n(l, 1, 0, 'red');
        },
        function(n, l) {
          n(l, 2, 0, h._21(l, 2, 0, h._13(l, 3).transform('HOT_TAG')));
        },
      );
    }
    function r(n) {
      return h._22(
        0,
        [
          (n()(), h.Z(0, 0, null, null, 3, 'ion-badge', [['color', 'green']], null, null, null, null, null)),
          h.Y(1, 16384, null, 0, g.a, [m.a, h.j, h.z], { color: [0, 'color'] }, null),
          (n()(), h._20(2, null, ['', ''])),
          h._14(131072, b.a, [v.a, h.g]),
        ],
        function(n, l) {
          n(l, 1, 0, 'green');
        },
        function(n, l) {
          n(l, 2, 0, h._21(l, 2, 0, h._13(l, 3).transform('WRITER_TAG')));
        },
      );
    }
    function a(n) {
      return h._22(
        0,
        [
          (n()(), h.Z(0, 0, null, null, 3, 'ion-badge', [['color', 'yellow']], null, null, null, null, null)),
          h.Y(1, 16384, null, 0, g.a, [m.a, h.j, h.z], { color: [0, 'color'] }, null),
          (n()(), h._20(2, null, ['', ''])),
          h._14(131072, b.a, [v.a, h.g]),
        ],
        function(n, l) {
          n(l, 1, 0, 'yellow');
        },
        function(n, l) {
          n(l, 2, 0, h._21(l, 2, 0, h._13(l, 3).transform('NEW_TAG')));
        },
      );
    }
    function s(n) {
      return h._22(
        0,
        [(n()(), h.Z(0, 0, null, null, 1, null, null, null, null, null, null, null)), (n()(), h._20(1, null, [' (', ')']))],
        null,
        function(n, l) {
          var t = l.component;
          n(l, 1, 0, null == t.story ? null : t.story.lang);
        },
      );
    }
    function c(n) {
      return h._22(
        0,
        [(n()(), h.Z(0, 0, null, null, 1, 'span', [], null, null, null, null, null)), (n()(), h._20(1, null, ['#', ' ']))],
        null,
        function(n, l) {
          n(l, 1, 0, l.context.$implicit);
        },
      );
    }
    function f(n) {
      return h._22(
        0,
        [
          (n()(), h.Z(0, 0, null, null, 11, 'ion-note', [['item-end', '']], null, null, null, null, null)),
          h.Y(1, 16384, null, 0, y.a, [m.a, h.j, h.z], null, null),
          (n()(), h._20(-1, null, ['\n      '])),
          (n()(),
          h.Z(
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
                u = !1 !== h._13(n, 5).onClick() && u;
              }
              if ('press' === l) {
                u = !1 !== h._13(n, 5).onPress() && u;
              }
              if ('mouseenter' === l) {
                u = !1 !== h._13(n, 5).onMouseEnter() && u;
              }
              if ('mouseleave' === l) {
                u = !1 !== h._13(n, 5).onMouseLeave() && u;
              }
              if ('click' === l) {
                u = !1 !== o.openListPicker(o.story, t) && u;
              }
              return u;
            },
            w.b,
            w.a,
          )),
          h.Y(4, 1097728, null, 0, I.a, [[8, ''], m.a, h.j, h.z], { clear: [0, 'clear'] }, null),
          h.Y(
            5,
            4210688,
            null,
            0,
            Y.a,
            [h.j, h.f, j.a, h.i],
            { tooltip: [0, 'tooltip'], event: [1, 'event'], navTooltip: [2, 'navTooltip'] },
            null,
          ),
          h._14(131072, b.a, [v.a, h.g]),
          (n()(), h._20(-1, 0, ['\n        '])),
          (n()(),
          h.Z(8, 0, null, 0, 1, 'ion-icon', [['name', 'star-outline'], ['role', 'img']], [[2, 'hide', null]], null, null, null, null)),
          h.Y(9, 147456, null, 0, d.a, [m.a, h.j, h.z], { name: [0, 'name'] }, null),
          (n()(), h._20(-1, 0, ['\n      '])),
          (n()(), h._20(-1, null, ['\n    '])),
        ],
        function(n, l) {
          n(l, 4, 0, 'true');
          n(l, 5, 0, h._21(l, 5, 0, h._13(l, 6).transform('BOOKMARK_BUTTON')), 'press', '');
          n(l, 9, 0, 'star-outline');
        },
        function(n, l) {
          n(l, 8, 0, h._13(l, 9)._hidden);
        },
      );
    }
    function p(n) {
      return h._22(
        0,
        [
          (n()(),
          h.Z(
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
                u = !1 !== o.download(o.story, h._13(n.parent, 4)) && u;
              }
              return u;
            },
            w.b,
            w.a,
          )),
          h.Y(1, 1097728, null, 0, I.a, [[8, ''], m.a, h.j, h.z], null, null),
          (n()(), h._20(-1, 0, ['\n      '])),
          (n()(), h.Z(3, 0, null, 0, 1, 'ion-icon', [['name', 'download'], ['role', 'img']], [[2, 'hide', null]], null, null, null, null)),
          h.Y(4, 147456, null, 0, d.a, [m.a, h.j, h.z], { name: [0, 'name'] }, null),
          (n()(), h._20(5, 0, ['\n      ', '\n    '])),
          h._16(6, 2),
        ],
        function(n, l) {
          n(l, 4, 0, 'download');
        },
        function(n, l) {
          n(l, 3, 0, h._13(l, 4)._hidden);
          n(l, 5, 0, h._21(l, 5, 0, n(l, 6, 0, h._13(l.parent, 1), ' ', 15)));
        },
      );
    }
    function _(n) {
      return h._22(
        0,
        [
          h._14(0, T.d, [h.r]),
          h._14(0, Z.h, []),
          (n()(), h._20(-1, null, ['\n'])),
          (n()(), h.Z(3, 0, null, null, 77, 'ion-item-sliding', [['approxItemHeight', '105px']], null, null, null, k.b, k.a)),
          h.Y(4, 49152, [['slidingItem', 4]], 2, x.a, [[2, C.a], j.a, h.z, h.j, h.u], null, null),
          h._18(335544320, 1, { item: 0 }),
          h._18(603979776, 2, { _itemOptions: 1 }),
          (n()(), h._20(-1, null, ['\n  '])),
          (n()(),
          h.Z(
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
            F.b,
            F.a,
          )),
          h.Y(9, 1097728, [[1, 4]], 3, z.a, [S.a, m.a, h.j, h.z, [2, E.a]], null, null),
          h._18(335544320, 3, { contentLabel: 0 }),
          h._18(603979776, 4, { _buttons: 1 }),
          h._18(603979776, 5, { _icons: 1 }),
          h.Y(13, 16384, null, 0, P.a, [], null, null),
          (n()(), h._20(-1, 2, ['\n\n    '])),
          (n()(), h.Z(15, 0, null, 2, 19, 'h2', [], null, null, null, null, null)),
          (n()(), h._20(-1, null, ['\n      '])),
          (n()(), h.U(16777216, null, null, 1, null, u)),
          h.Y(18, 16384, null, 0, T.j, [h.I, h.F], { ngIf: [0, 'ngIf'] }, null),
          (n()(), h._20(-1, null, ['\n      '])),
          (n()(), h.U(16777216, null, null, 1, null, o)),
          h.Y(21, 16384, null, 0, T.j, [h.I, h.F], { ngIf: [0, 'ngIf'] }, null),
          (n()(), h._20(22, null, ['\n      ', '\n      '])),
          (n()(), h.U(16777216, null, null, 1, null, e)),
          h.Y(24, 16384, null, 0, T.j, [h.I, h.F], { ngIf: [0, 'ngIf'] }, null),
          (n()(), h._20(-1, null, ['\n      '])),
          (n()(), h.U(16777216, null, null, 1, null, i)),
          h.Y(27, 16384, null, 0, T.j, [h.I, h.F], { ngIf: [0, 'ngIf'] }, null),
          (n()(), h._20(-1, null, ['\n      '])),
          (n()(), h.U(16777216, null, null, 1, null, r)),
          h.Y(30, 16384, null, 0, T.j, [h.I, h.F], { ngIf: [0, 'ngIf'] }, null),
          (n()(), h._20(-1, null, ['\n      '])),
          (n()(), h.U(16777216, null, null, 1, null, a)),
          h.Y(33, 16384, null, 0, T.j, [h.I, h.F], { ngIf: [0, 'ngIf'] }, null),
          (n()(), h._20(-1, null, ['\n    '])),
          (n()(), h._20(-1, 2, ['\n\n    '])),
          (n()(), h.Z(36, 0, null, 2, 3, 'p', [], null, null, null, null, null)),
          (n()(), h._20(37, null, ['', ''])),
          (n()(), h.U(16777216, null, null, 1, null, s)),
          h.Y(39, 16384, null, 0, T.j, [h.I, h.F], { ngIf: [0, 'ngIf'] }, null),
          (n()(), h._20(-1, 2, ['\n    '])),
          (n()(), h.Z(41, 0, null, 2, 10, 'p', [], null, null, null, null, null)),
          (n()(), h._20(-1, null, ['\n      '])),
          (n()(), h.Z(43, 0, null, null, 1, 'ion-icon', [['name', 'star'], ['role', 'img']], [[2, 'hide', null]], null, null, null, null)),
          h.Y(44, 147456, [[5, 4]], 0, d.a, [m.a, h.j, h.z], { name: [0, 'name'] }, null),
          (n()(), h._20(45, null, [' ', '\n      (', ')\n      '])),
          (n()(), h.Z(46, 0, null, null, 2, 'em', [], null, null, null, null, null)),
          (n()(), h._20(47, null, [' ', ' ', ''])),
          h._14(131072, b.a, [v.a, h.g]),
          (n()(), h._20(49, null, ['\n      ', ' ', '\n    '])),
          h._14(131072, b.a, [v.a, h.g]),
          h._16(51, 2),
          (n()(), h._20(-1, 2, ['\n\n    '])),
          (n()(), h.Z(53, 0, null, 2, 7, 'p', [['class', 'tags']], null, null, null, null, null)),
          (n()(), h._20(-1, null, ['\n      '])),
          (n()(), h.Z(55, 0, null, null, 1, 'strong', [], null, null, null, null, null)),
          (n()(), h._20(56, null, ['', ''])),
          (n()(), h._20(-1, null, ['\n      '])),
          (n()(), h.U(16777216, null, null, 1, null, c)),
          h.Y(59, 802816, null, 0, T.i, [h.I, h.F, h.p], { ngForOf: [0, 'ngForOf'] }, null),
          (n()(), h._20(-1, null, ['\n    '])),
          (n()(), h._20(-1, 2, ['\n\n    '])),
          (n()(), h.U(16777216, null, 4, 1, null, f)),
          h.Y(63, 16384, null, 0, T.j, [h.I, h.F], { ngIf: [0, 'ngIf'] }, null),
          (n()(), h._20(-1, 2, ['\n\n  '])),
          (n()(), h._20(-1, null, ['\n\n  '])),
          (n()(), h.Z(66, 0, null, 1, 13, 'ion-item-options', [], null, null, null, null, null)),
          h.Y(67, 16384, [[2, 4]], 0, O.a, [h.j, j.a], null, null),
          (n()(), h._20(-1, null, ['\n    '])),
          (n()(), h.U(16777216, null, null, 1, null, p)),
          h.Y(70, 16384, null, 0, T.j, [h.I, h.F], { ngIf: [0, 'ngIf'] }, null),
          (n()(), h._20(-1, null, ['\n    '])),
          (n()(),
          h.Z(
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
                u = !1 !== o.delete(o.story, h._13(n, 4)) && u;
              }
              return u;
            },
            w.b,
            w.a,
          )),
          h.Y(73, 1097728, null, 0, I.a, [[8, ''], m.a, h.j, h.z], { color: [0, 'color'] }, null),
          (n()(), h._20(-1, 0, ['\n      '])),
          (n()(), h.Z(75, 0, null, 0, 1, 'ion-icon', [['name', 'trash'], ['role', 'img']], [[2, 'hide', null]], null, null, null, null)),
          h.Y(76, 147456, null, 0, d.a, [m.a, h.j, h.z], { name: [0, 'name'] }, null),
          (n()(), h._20(77, 0, ['\n      ', '\n    '])),
          h._16(78, 2),
          (n()(), h._20(-1, null, ['\n  '])),
          (n()(), h._20(-1, null, ['\n'])),
          (n()(), h._20(-1, null, ['\n'])),
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
          n(l, 43, 0, h._13(l, 44)._hidden);
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
            h._21(l, 47, 0, h._13(l, 48).transform('BYAUTHOR')),
            null == t.story ? null : null == t.story.author ? null : t.story.author.name,
          );
          n(
            l,
            49,
            0,
            h._21(l, 49, 0, h._13(l, 50).transform('ONTIMESTAMP')),
            h._21(l, 49, 1, n(l, 51, 0, h._13(l, 0), 1e3 * (null == t.story ? null : t.story.timestamp), 'yyyy-MM-dd')),
          );
          n(l, 56, 0, null == t.story ? null : t.story.category);
          n(l, 75, 0, h._13(l, 76)._hidden);
          n(l, 77, 0, h._21(l, 77, 0, n(l, 78, 0, h._13(l, 1), ' ', 15)));
        },
      );
    }
    t.d(l, 'a', function() {
      return R;
    }),
      (l.c = _),
      t.d(l, 'b', function() {
        return B;
      });
    var h = t(1),
      d = t(63),
      m = t(3),
      g = t(196),
      b = t(125),
      v = t(39),
      y = t(192),
      w = t(62),
      I = t(29),
      Y = t(704),
      j = t(6),
      T = t(18),
      Z = t(703),
      k = t(717),
      x = t(193),
      C = t(64),
      F = t(189),
      z = t(25),
      S = t(22),
      E = t(58),
      P = t(85),
      O = t(134),
      L = t(711),
      M = t(30),
      A = t(127),
      U = t(131),
      $ = t(52),
      R = h.X({ encapsulation: 2, styles: [], data: {} }),
      B = h.V(
        'story-list-item',
        L.a,
        function(n) {
          return h._22(
            0,
            [
              (n()(), h.Z(0, 0, null, null, 1, 'story-list-item', [], null, null, null, _, R)),
              h.Y(1, 49152, null, 0, L.a, [M.a, A.a, U.a, $.a], null, null),
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
          r.Y(5, 16384, null, 0, h.a, [], null, null),
          (n()(), r._20(-1, 2, ['\n    '])),
          (n()(), r.Z(7, 0, null, 2, 3, 'h2', [], null, null, null, null, null)),
          (n()(), r.U(16777216, null, null, 1, null, u)),
          r.Y(9, 16384, null, 0, d.j, [r.I, r.F], { ngIf: [0, 'ngIf'] }, null),
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
            g.b,
            g.a,
          )),
          r.Y(16, 1097728, null, 0, b.a, [[8, ''], s.a, r.j, r.z], { clear: [0, 'clear'] }, null),
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
          r.Y(21, 16384, null, 0, d.j, [r.I, r.F], { ngIf: [0, 'ngIf'] }, null),
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
          r.Y(3, 16384, null, 0, j.a, [s.a, r.j, r.z, y.a, T.l, Z.a], null, null),
          (n()(), r._20(-1, null, ['\n  '])),
          (n()(), r.Z(5, 0, null, null, 7, 'ion-list-header', [['class', 'item']], null, null, null, c.b, c.a)),
          r.Y(6, 1097728, null, 3, f.a, [p.a, s.a, r.j, r.z, [2, _.a]], null, null),
          r._18(335544320, 1, { contentLabel: 0 }),
          r._18(603979776, 2, { _buttons: 1 }),
          r._18(603979776, 3, { _icons: 1 }),
          r.Y(10, 16384, null, 0, k.a, [s.a, r.z, r.j, [8, null]], null, null),
          (n()(), r._20(11, 2, ['', ''])),
          r._14(131072, w.a, [I.a, r.g]),
          (n()(), r._20(-1, null, ['\n  '])),
          (n()(), r.U(16777216, null, null, 2, null, e)),
          r.Y(15, 802816, null, 0, d.i, [r.I, r.F, r.p], { ngForOf: [0, 'ngForOf'] }, null),
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
      return E;
    });
    var r = t(1),
      a = t(63),
      s = t(3),
      c = t(189),
      f = t(25),
      p = t(22),
      _ = t(58),
      h = t(85),
      d = t(18),
      m = t(192),
      g = t(62),
      b = t(29),
      v = t(704),
      y = t(6),
      w = t(125),
      I = t(39),
      Y = t(703),
      j = t(64),
      T = t(10),
      Z = t(12),
      k = t(130),
      x = t(710),
      C = t(16),
      F = t(7),
      z = t(133),
      S = r.X({ encapsulation: 2, styles: [], data: {} }),
      E = r.V(
        'bookmark-popover',
        x.a,
        function(n) {
          return r._22(
            0,
            [
              (n()(), r.Z(0, 0, null, null, 1, 'bookmark-popover', [], null, null, null, i, S)),
              r.Y(1, 49152, null, 0, x.a, [C.a, y.a, F.a, z.a], null, null),
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
  725: function(n, l, t) {
    'use strict';
    function u(n) {
      return o._22(2, [(n()(), o.Z(0, 0, null, null, 0, 'img', [], null, null, null, null, null))], null, null);
    }
    t.d(l, 'a', function() {
      return e;
    }),
      (l.b = u);
    var o = t(1),
      e = (t(6), t(12), o.X({ encapsulation: 2, styles: [], data: {} }));
  },
});
