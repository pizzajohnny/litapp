webpackJsonp([9], {
  694: function(n, l, t) {
    'use strict';
    function u(n) {
      return v._22(
        0,
        [
          (n()(),
          v.Z(
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
              var u = !0,
                e = n.component;
              if ('click' === l) {
                u = !1 !== v._13(n, 2).onClick() && u;
              }
              if ('press' === l) {
                u = !1 !== v._13(n, 2).onPress() && u;
              }
              if ('mouseenter' === l) {
                u = !1 !== v._13(n, 2).onMouseEnter() && u;
              }
              if ('mouseleave' === l) {
                u = !1 !== v._13(n, 2).onMouseLeave() && u;
              }
              if ('click' === l) {
                u = !1 !== e.refreshStory() && u;
              }
              return u;
            },
            F.b,
            F.a,
          )),
          v.Y(1, 1097728, [[1, 4]], 0, U.a, [[8, ''], D.a, v.j, v.z], null, null),
          v.Y(
            2,
            4210688,
            null,
            0,
            N.a,
            [v.j, v.f, B.a, v.i],
            { tooltip: [0, 'tooltip'], event: [1, 'event'], navTooltip: [2, 'navTooltip'] },
            null,
          ),
          v._14(131072, V.a, [$.a, v.g]),
          (n()(), v._20(-1, 0, ['\n        '])),
          (n()(), v.Z(5, 0, null, 0, 1, 'ion-icon', [['name', 'refresh'], ['role', 'img']], [[2, 'hide', null]], null, null, null, null)),
          v.Y(6, 147456, null, 0, W.a, [D.a, v.j, v.z], { name: [0, 'name'] }, null),
          (n()(), v._20(-1, 0, ['\n      '])),
        ],
        function(n, l) {
          n(l, 2, 0, v._21(l, 2, 0, v._13(l, 3).transform('REFRESH_BUTTON')), 'press', '');
          n(l, 6, 0, 'refresh');
        },
        function(n, l) {
          n(l, 5, 0, v._13(l, 6)._hidden);
        },
      );
    }
    function e(n) {
      return v._22(
        0,
        [
          (n()(),
          v.Z(
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
              var u = !0,
                e = n.component;
              if ('click' === l) {
                u = !1 !== v._13(n, 2).onClick() && u;
              }
              if ('press' === l) {
                u = !1 !== v._13(n, 2).onPress() && u;
              }
              if ('mouseenter' === l) {
                u = !1 !== v._13(n, 2).onMouseEnter() && u;
              }
              if ('mouseleave' === l) {
                u = !1 !== v._13(n, 2).onMouseLeave() && u;
              }
              if ('click' === l) {
                u = !1 !== e.openListPicker(t) && u;
              }
              return u;
            },
            F.b,
            F.a,
          )),
          v.Y(1, 1097728, [[1, 4]], 0, U.a, [[8, ''], D.a, v.j, v.z], null, null),
          v.Y(
            2,
            4210688,
            null,
            0,
            N.a,
            [v.j, v.f, B.a, v.i],
            { tooltip: [0, 'tooltip'], event: [1, 'event'], navTooltip: [2, 'navTooltip'] },
            null,
          ),
          v._14(131072, V.a, [$.a, v.g]),
          (n()(), v._20(-1, 0, ['\n        '])),
          (n()(), v.Z(5, 0, null, 0, 1, 'ion-icon', [['name', 'bookmark'], ['role', 'img']], [[2, 'hide', null]], null, null, null, null)),
          v.Y(6, 147456, null, 0, W.a, [D.a, v.j, v.z], { name: [0, 'name'] }, null),
          (n()(), v._20(-1, 0, ['\n      '])),
        ],
        function(n, l) {
          n(l, 2, 0, v._21(l, 2, 0, v._13(l, 3).transform('BOOKMARK_BUTTON')), 'press', '');
          n(l, 6, 0, 'bookmark');
        },
        function(n, l) {
          n(l, 5, 0, v._13(l, 6)._hidden);
        },
      );
    }
    function o(n) {
      return v._22(
        0,
        [
          (n()(),
          v.Z(
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
              var u = !0,
                e = n.component;
              if ('click' === l) {
                u = !1 !== v._13(n, 2).onClick() && u;
              }
              if ('press' === l) {
                u = !1 !== v._13(n, 2).onPress() && u;
              }
              if ('mouseenter' === l) {
                u = !1 !== v._13(n, 2).onMouseEnter() && u;
              }
              if ('mouseleave' === l) {
                u = !1 !== v._13(n, 2).onMouseLeave() && u;
              }
              if ('click' === l) {
                u = !1 !== e.openLink() && u;
              }
              return u;
            },
            F.b,
            F.a,
          )),
          v.Y(1, 1097728, [[1, 4]], 0, U.a, [[8, ''], D.a, v.j, v.z], null, null),
          v.Y(
            2,
            4210688,
            null,
            0,
            N.a,
            [v.j, v.f, B.a, v.i],
            { tooltip: [0, 'tooltip'], event: [1, 'event'], navTooltip: [2, 'navTooltip'] },
            null,
          ),
          v._14(131072, V.a, [$.a, v.g]),
          (n()(), v._20(-1, 0, ['\n        '])),
          (n()(), v.Z(5, 0, null, 0, 1, 'ion-icon', [['name', 'open'], ['role', 'img']], [[2, 'hide', null]], null, null, null, null)),
          v.Y(6, 147456, null, 0, W.a, [D.a, v.j, v.z], { name: [0, 'name'] }, null),
          (n()(), v._20(-1, 0, ['\n      '])),
        ],
        function(n, l) {
          n(l, 2, 0, v._21(l, 2, 0, v._13(l, 3).transform('OPENLINK_BUTTON')), 'press', '');
          n(l, 6, 0, 'open');
        },
        function(n, l) {
          n(l, 5, 0, v._13(l, 6)._hidden);
        },
      );
    }
    function i(n) {
      return v._22(
        0,
        [
          (n()(),
          v.Z(
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
              var u = !0;
              if ('click' === l) {
                u = !1 !== n.component.showSeries() && u;
              }
              return u;
            },
            F.b,
            F.a,
          )),
          v.Y(1, 1097728, null, 0, U.a, [[8, ''], D.a, v.j, v.z], null, null),
          (n()(), v._20(-1, 0, ['\n      '])),
          (n()(), v.Z(3, 0, null, 0, 1, 'ion-icon', [['name', 'albums'], ['role', 'img']], [[2, 'hide', null]], null, null, null, null)),
          v.Y(4, 147456, null, 0, W.a, [D.a, v.j, v.z], { name: [0, 'name'] }, null),
          (n()(), v._20(5, 0, [' \n      ', '\n    '])),
          v._14(131072, V.a, [$.a, v.g]),
        ],
        function(n, l) {
          n(l, 4, 0, 'albums');
        },
        function(n, l) {
          n(l, 3, 0, v._13(l, 4)._hidden);
          n(l, 5, 0, v._21(l, 5, 0, v._13(l, 6).transform('STORYDETAIL_SERIES')));
        },
      );
    }
    function r(n) {
      return v._22(
        0,
        [
          (n()(),
          v.Z(
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
              var u = !0;
              if ('click' === l) {
                u = !1 !== n.component.showRelated() && u;
              }
              return u;
            },
            F.b,
            F.a,
          )),
          v.Y(1, 1097728, null, 0, U.a, [[8, ''], D.a, v.j, v.z], null, null),
          (n()(), v._20(-1, 0, ['\n      '])),
          (n()(), v.Z(3, 0, null, 0, 1, 'ion-icon', [['name', 'pricetags'], ['role', 'img']], [[2, 'hide', null]], null, null, null, null)),
          v.Y(4, 147456, null, 0, W.a, [D.a, v.j, v.z], { name: [0, 'name'] }, null),
          (n()(), v._20(5, 0, [' \n      ', '\n    '])),
          v._14(131072, V.a, [$.a, v.g]),
        ],
        function(n, l) {
          n(l, 4, 0, 'pricetags');
        },
        function(n, l) {
          n(l, 3, 0, v._13(l, 4)._hidden);
          n(l, 5, 0, v._21(l, 5, 0, v._13(l, 6).transform('STORYDETAIL_RELATED')));
        },
      );
    }
    function a(n) {
      return v._22(
        0,
        [
          (n()(), v.Z(0, 0, null, null, 3, 'ion-badge', [['color', 'blue']], null, null, null, null, null)),
          v.Y(1, 16384, null, 0, G.a, [D.a, v.j, v.z], { color: [0, 'color'] }, null),
          (n()(), v._20(2, null, ['', ''])),
          v._14(131072, V.a, [$.a, v.g]),
        ],
        function(n, l) {
          n(l, 1, 0, 'blue');
        },
        function(n, l) {
          n(l, 2, 0, v._21(l, 2, 0, v._13(l, 3).transform('WINNER_TAG')));
        },
      );
    }
    function s(n) {
      return v._22(
        0,
        [
          (n()(), v.Z(0, 0, null, null, 3, 'ion-badge', [['color', 'red']], null, null, null, null, null)),
          v.Y(1, 16384, null, 0, G.a, [D.a, v.j, v.z], { color: [0, 'color'] }, null),
          (n()(), v._20(2, null, ['', ''])),
          v._14(131072, V.a, [$.a, v.g]),
        ],
        function(n, l) {
          n(l, 1, 0, 'red');
        },
        function(n, l) {
          n(l, 2, 0, v._21(l, 2, 0, v._13(l, 3).transform('HOT_TAG')));
        },
      );
    }
    function c(n) {
      return v._22(
        0,
        [
          (n()(), v.Z(0, 0, null, null, 3, 'ion-badge', [['color', 'green']], null, null, null, null, null)),
          v.Y(1, 16384, null, 0, G.a, [D.a, v.j, v.z], { color: [0, 'color'] }, null),
          (n()(), v._20(2, null, ['', ''])),
          v._14(131072, V.a, [$.a, v.g]),
        ],
        function(n, l) {
          n(l, 1, 0, 'green');
        },
        function(n, l) {
          n(l, 2, 0, v._21(l, 2, 0, v._13(l, 3).transform('WRITER_TAG')));
        },
      );
    }
    function _(n) {
      return v._22(
        0,
        [
          (n()(), v.Z(0, 0, null, null, 3, 'ion-badge', [['color', 'yellow']], null, null, null, null, null)),
          v.Y(1, 16384, null, 0, G.a, [D.a, v.j, v.z], { color: [0, 'color'] }, null),
          (n()(), v._20(2, null, ['', ''])),
          v._14(131072, V.a, [$.a, v.g]),
        ],
        function(n, l) {
          n(l, 1, 0, 'yellow');
        },
        function(n, l) {
          n(l, 2, 0, v._21(l, 2, 0, v._13(l, 3).transform('NEW_TAG')));
        },
      );
    }
    function f(n) {
      return v._22(
        0,
        [
          (n()(), v.Z(0, 0, null, null, 6, 'p', [], null, null, null, null, null)),
          (n()(), v.Z(1, 0, null, null, 2, 'strong', [], null, null, null, null, null)),
          (n()(), v._20(2, null, ['', ': '])),
          v._14(131072, V.a, [$.a, v.g]),
          (n()(), v._20(-1, null, [' '])),
          (n()(),
          v.Z(
            5,
            0,
            null,
            null,
            1,
            'a',
            [],
            null,
            [[null, 'click']],
            function(n, l, t) {
              var u = !0,
                e = n.component;
              if ('click' === l) {
                u = !1 !== e.category(e.story.category) && u;
              }
              return u;
            },
            null,
            null,
          )),
          (n()(), v._20(6, null, ['', ''])),
        ],
        null,
        function(n, l) {
          var t = l.component;
          n(l, 2, 0, v._21(l, 2, 0, v._13(l, 3).transform('CATEGORY')));
          n(l, 6, 0, t.story.category);
        },
      );
    }
    function p(n) {
      return v._22(
        0,
        [
          (n()(),
          v.Z(
            0,
            0,
            null,
            null,
            1,
            'a',
            [],
            null,
            [[null, 'click']],
            function(n, l, t) {
              var u = !0;
              if ('click' === l) {
                u = !1 !== n.component.search(n.context.$implicit) && u;
              }
              return u;
            },
            null,
            null,
          )),
          (n()(), v._20(1, null, ['#', ' '])),
        ],
        null,
        function(n, l) {
          n(l, 1, 0, l.context.$implicit);
        },
      );
    }
    function h(n) {
      return v._22(
        0,
        [
          (n()(), v.Z(0, 0, null, null, 8, 'p', [['class', 'tags']], null, null, null, null, null)),
          (n()(), v._20(-1, null, ['\n    '])),
          (n()(), v.Z(2, 0, null, null, 2, 'strong', [], null, null, null, null, null)),
          (n()(), v._20(3, null, ['', ': '])),
          v._14(131072, V.a, [$.a, v.g]),
          (n()(), v._20(-1, null, ['\n    '])),
          (n()(), v.U(16777216, null, null, 1, null, p)),
          v.Y(7, 802816, null, 0, H.i, [v.I, v.F, v.p], { ngForOf: [0, 'ngForOf'] }, null),
          (n()(), v._20(-1, null, ['\n  '])),
        ],
        function(n, l) {
          n(l, 7, 0, l.component.story.tags);
        },
        function(n, l) {
          n(l, 3, 0, v._21(l, 3, 0, v._13(l, 4).transform('TAGS')));
        },
      );
    }
    function d(n) {
      return v._22(
        0,
        [
          (n()(), v.Z(0, 0, null, null, 24, null, null, null, null, null, null, null)),
          (n()(), v._20(-1, null, ['\n    '])),
          (n()(), v.Z(2, 0, null, null, 2, 'h3', [], null, null, null, null, null)),
          (n()(), v._20(3, null, ['', ''])),
          v._14(131072, V.a, [$.a, v.g]),
          (n()(), v._20(-1, null, ['\n    '])),
          (n()(),
          v.Z(
            6,
            0,
            null,
            null,
            17,
            'form',
            [['class', 'rate'], ['novalidate', '']],
            [
              [2, 'ng-untouched', null],
              [2, 'ng-touched', null],
              [2, 'ng-pristine', null],
              [2, 'ng-dirty', null],
              [2, 'ng-valid', null],
              [2, 'ng-invalid', null],
              [2, 'ng-pending', null],
            ],
            [[null, 'submit'], [null, 'reset']],
            function(n, l, t) {
              var u = !0,
                e = n.component;
              if ('submit' === l) {
                u = !1 !== v._13(n, 8).onSubmit(t) && u;
              }
              if ('reset' === l) {
                u = !1 !== v._13(n, 8).onReset() && u;
              }
              if ('submit' === l) {
                u = !1 !== e.rate(t) && u;
              }
              return u;
            },
            null,
            null,
          )),
          v.Y(7, 16384, null, 0, q.q, [], null, null),
          v.Y(8, 4210688, null, 0, q.l, [[8, null], [8, null]], null, null),
          v._17(2048, null, q.b, null, [q.l]),
          v.Y(10, 16384, null, 0, q.k, [q.b], null, null),
          (n()(), v._20(-1, null, ['\n      '])),
          (n()(),
          v.Z(
            12,
            0,
            null,
            null,
            5,
            'ion-range',
            [['max', '5'], ['min', '0'], ['name', 'myrating'], ['pin', 'true'], ['snaps', 'true'], ['step', '1']],
            [
              [2, 'range-disabled', null],
              [2, 'range-pressed', null],
              [2, 'range-has-pin', null],
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
              var u = !0;
              if ('ngModelChange' === l) {
                u = !1 !== (n.component.myrating = t) && u;
              }
              return u;
            },
            X.b,
            X.a,
          )),
          v.Y(
            13,
            1228800,
            null,
            0,
            K.a,
            [J.a, Q.a, [2, nn.a], D.a, B.a, v.j, v.z, ln.a, v.g],
            { min: [0, 'min'], max: [1, 'max'], step: [2, 'step'], snaps: [3, 'snaps'], pin: [4, 'pin'] },
            null,
          ),
          v._17(
            1024,
            null,
            q.h,
            function(n) {
              return [n];
            },
            [K.a],
          ),
          v.Y(
            15,
            671744,
            null,
            0,
            q.m,
            [[2, q.b], [8, null], [8, null], [2, q.h]],
            { name: [0, 'name'], model: [1, 'model'] },
            { update: 'ngModelChange' },
          ),
          v._17(2048, null, q.i, null, [q.m]),
          v.Y(17, 16384, null, 0, q.j, [q.i], null, null),
          (n()(), v._20(-1, null, ['\n      '])),
          (n()(), v.Z(19, 0, null, null, 3, 'button', [['ion-button', ''], ['outline', '']], null, null, null, F.b, F.a)),
          v.Y(20, 1097728, null, 0, U.a, [[8, ''], D.a, v.j, v.z], { outline: [0, 'outline'] }, null),
          (n()(), v._20(21, 0, ['', ''])),
          v._14(131072, V.a, [$.a, v.g]),
          (n()(), v._20(-1, null, ['\n    '])),
          (n()(), v._20(-1, null, ['\n  '])),
        ],
        function(n, l) {
          var t = l.component;
          n(l, 13, 0, '0', '5', '1', 'true', 'true');
          n(l, 15, 0, 'myrating', t.myrating);
          n(l, 20, 0, '');
        },
        function(n, l) {
          n(l, 3, 0, v._21(l, 3, 0, v._13(l, 4).transform('STORYDETAIL_RATETITLE')));
          n(
            l,
            6,
            0,
            v._13(l, 10).ngClassUntouched,
            v._13(l, 10).ngClassTouched,
            v._13(l, 10).ngClassPristine,
            v._13(l, 10).ngClassDirty,
            v._13(l, 10).ngClassValid,
            v._13(l, 10).ngClassInvalid,
            v._13(l, 10).ngClassPending,
          );
          n(
            l,
            12,
            0,
            v._13(l, 13)._disabled,
            v._13(l, 13)._pressed,
            v._13(l, 13)._pin,
            v._13(l, 17).ngClassUntouched,
            v._13(l, 17).ngClassTouched,
            v._13(l, 17).ngClassPristine,
            v._13(l, 17).ngClassDirty,
            v._13(l, 17).ngClassValid,
            v._13(l, 17).ngClassInvalid,
            v._13(l, 17).ngClassPending,
          );
          n(l, 21, 0, v._21(l, 21, 0, v._13(l, 22).transform('STORYDETAIL_RATE')));
        },
      );
    }
    function m(n) {
      return v._22(
        0,
        [
          (n()(), v.Z(0, 0, null, null, 15, 'ion-item', [['class', 'item item-block']], null, null, null, tn.b, tn.a)),
          v.Y(1, 1097728, null, 3, nn.a, [J.a, D.a, v.j, v.z, [2, un.a]], null, null),
          v._18(335544320, 2, { contentLabel: 0 }),
          v._18(603979776, 3, { _buttons: 1 }),
          v._18(603979776, 4, { _icons: 1 }),
          v.Y(5, 16384, null, 0, en.a, [], null, null),
          (n()(), v._20(-1, 2, ['\n    \t\t'])),
          (n()(), v.Z(7, 0, null, 2, 1, 'h3', [], null, null, null, null, null)),
          (n()(), v._20(8, null, ['', ''])),
          (n()(), v._20(-1, 2, ['\n    \t\t'])),
          (n()(), v.Z(10, 0, null, 2, 1, 'h6', [], null, null, null, null, null)),
          (n()(), v._20(11, null, ['', ''])),
          (n()(), v._20(-1, 2, ['\n    \t\t'])),
          (n()(), v.Z(13, 0, null, 2, 1, 'p', [], null, null, null, null, null)),
          (n()(), v._20(14, null, ['', ''])),
          (n()(), v._20(-1, 2, ['\n    \t'])),
        ],
        null,
        function(n, l) {
          n(l, 8, 0, l.context.$implicit.user);
          n(l, 11, 0, l.context.$implicit.timestamp);
          n(l, 14, 0, l.context.$implicit.text);
        },
      );
    }
    function g(n) {
      return v._22(
        0,
        [
          (n()(), v.Z(0, 0, null, null, 12, null, null, null, null, null, null, null)),
          (n()(), v._20(-1, null, ['\n    '])),
          (n()(), v.Z(2, 0, null, null, 2, 'h2', [], null, null, null, null, null)),
          (n()(), v._20(3, null, ['', ''])),
          v._14(131072, V.a, [$.a, v.g]),
          (n()(), v._20(-1, null, ['\n    '])),
          (n()(), v.Z(6, 0, null, null, 5, 'ion-list', [['class', 'comments']], null, null, null, null, null)),
          v.Y(7, 16384, null, 0, on.a, [D.a, v.j, v.z, B.a, rn.l, ln.a], null, null),
          (n()(), v._20(-1, null, ['\n    \t'])),
          (n()(), v.U(16777216, null, null, 1, null, m)),
          v.Y(10, 802816, null, 0, H.i, [v.I, v.F, v.p], { ngForOf: [0, 'ngForOf'] }, null),
          (n()(), v._20(-1, null, ['\n    '])),
          (n()(), v._20(-1, null, ['\n  '])),
        ],
        function(n, l) {
          n(l, 10, 0, l.component.story.comments);
        },
        function(n, l) {
          n(l, 3, 0, v._21(l, 3, 0, v._13(l, 4).transform('COMMENTS')));
        },
      );
    }
    function b(n) {
      return v._22(
        0,
        [
          v._14(0, H.d, [v.r]),
          (n()(), v.Z(1, 0, null, null, 50, 'ion-header', [], null, null, null, null, null)),
          v.Y(2, 16384, null, 0, an.a, [D.a, v.j, v.z, [2, sn.a]], null, null),
          (n()(), v._20(-1, null, ['\n\n  '])),
          (n()(),
          v.Z(
            4,
            0,
            null,
            null,
            46,
            'ion-navbar',
            [['class', 'toolbar']],
            [[8, 'hidden', 0], [2, 'statusbar-padding', null]],
            null,
            null,
            cn.b,
            cn.a,
          )),
          v.Y(5, 49152, null, 0, _n.a, [fn.a, [2, sn.a], [2, pn.a], D.a, v.j, v.z], null, null),
          (n()(), v._20(-1, 3, ['\n    '])),
          (n()(), v.Z(7, 0, null, 3, 1, 'ion-title', [], null, null, null, hn.b, hn.a)),
          v.Y(8, 49152, null, 0, dn.a, [D.a, v.j, v.z, [2, mn.a], [2, _n.a]], null, null),
          (n()(), v._20(-1, 3, ['\n    '])),
          (n()(), v.Z(10, 0, null, 2, 39, 'ion-buttons', [['end', '']], null, null, null, null, null)),
          v.Y(11, 16384, null, 1, gn.a, [D.a, v.j, v.z, [2, mn.a], [2, _n.a]], null, null),
          v._18(603979776, 1, { _buttons: 1 }),
          (n()(), v._20(-1, null, ['\n\n      '])),
          (n()(), v.U(16777216, null, null, 1, null, u)),
          v.Y(15, 16384, null, 0, H.j, [v.I, v.F], { ngIf: [0, 'ngIf'] }, null),
          (n()(), v._20(-1, null, ['\n\n      '])),
          (n()(),
          v.Z(
            17,
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
                u = !1 !== v._13(n, 19).onClick() && u;
              }
              if ('press' === l) {
                u = !1 !== v._13(n, 19).onPress() && u;
              }
              if ('mouseenter' === l) {
                u = !1 !== v._13(n, 19).onMouseEnter() && u;
              }
              if ('mouseleave' === l) {
                u = !1 !== v._13(n, 19).onMouseLeave() && u;
              }
              if ('click' === l) {
                u = !1 !== e.export(t) && u;
              }
              return u;
            },
            F.b,
            F.a,
          )),
          v.Y(18, 1097728, [[1, 4]], 0, U.a, [[8, ''], D.a, v.j, v.z], null, null),
          v.Y(
            19,
            4210688,
            null,
            0,
            N.a,
            [v.j, v.f, B.a, v.i],
            { tooltip: [0, 'tooltip'], event: [1, 'event'], navTooltip: [2, 'navTooltip'] },
            null,
          ),
          v._14(131072, V.a, [$.a, v.g]),
          (n()(), v._20(-1, 0, ['\n        '])),
          (n()(),
          v.Z(22, 0, null, 0, 1, 'ion-icon', [['name', 'code-download'], ['role', 'img']], [[2, 'hide', null]], null, null, null, null)),
          v.Y(23, 147456, null, 0, W.a, [D.a, v.j, v.z], { name: [0, 'name'] }, null),
          (n()(), v._20(-1, 0, ['\n\t\t  '])),
          (n()(), v._20(-1, null, ['\n\n      '])),
          (n()(),
          v.Z(
            26,
            0,
            null,
            null,
            7,
            'button',
            [['event', 'press'], ['icon-only', ''], ['ion-button', ''], ['navTooltip', '']],
            null,
            [[null, 'click'], [null, 'press'], [null, 'mouseenter'], [null, 'mouseleave']],
            function(n, l, t) {
              var u = !0,
                e = n.component;
              if ('click' === l) {
                u = !1 !== v._13(n, 28).onClick() && u;
              }
              if ('press' === l) {
                u = !1 !== v._13(n, 28).onPress() && u;
              }
              if ('mouseenter' === l) {
                u = !1 !== v._13(n, 28).onMouseEnter() && u;
              }
              if ('mouseleave' === l) {
                u = !1 !== v._13(n, 28).onMouseLeave() && u;
              }
              if ('click' === l) {
                u = !1 !== e.toggleDownload() && u;
              }
              return u;
            },
            F.b,
            F.a,
          )),
          v.Y(27, 1097728, [[1, 4]], 0, U.a, [[8, ''], D.a, v.j, v.z], null, null),
          v.Y(
            28,
            4210688,
            null,
            0,
            N.a,
            [v.j, v.f, B.a, v.i],
            { tooltip: [0, 'tooltip'], event: [1, 'event'], navTooltip: [2, 'navTooltip'] },
            null,
          ),
          v._14(131072, V.a, [$.a, v.g]),
          (n()(), v._20(-1, 0, ['\n        '])),
          (n()(), v.Z(31, 0, null, 0, 1, 'ion-icon', [['role', 'img']], [[2, 'hide', null]], null, null, null, null)),
          v.Y(32, 147456, null, 0, W.a, [D.a, v.j, v.z], { name: [0, 'name'] }, null),
          (n()(), v._20(-1, 0, ['\n      '])),
          (n()(), v._20(-1, null, ['\n\n      '])),
          (n()(), v.U(16777216, null, null, 1, null, e)),
          v.Y(36, 16384, null, 0, H.j, [v.I, v.F], { ngIf: [0, 'ngIf'] }, null),
          (n()(), v._20(-1, null, ['\n\n      '])),
          (n()(), v.U(16777216, null, null, 1, null, o)),
          v.Y(39, 16384, null, 0, H.j, [v.I, v.F], { ngIf: [0, 'ngIf'] }, null),
          (n()(), v._20(-1, null, ['\n\n      '])),
          (n()(),
          v.Z(
            41,
            0,
            null,
            null,
            7,
            'button',
            [['event', 'press'], ['icon-only', ''], ['ion-button', ''], ['navTooltip', '']],
            null,
            [[null, 'click'], [null, 'press'], [null, 'mouseenter'], [null, 'mouseleave']],
            function(n, l, t) {
              var u = !0,
                e = n.component;
              if ('click' === l) {
                u = !1 !== v._13(n, 43).onClick() && u;
              }
              if ('press' === l) {
                u = !1 !== v._13(n, 43).onPress() && u;
              }
              if ('mouseenter' === l) {
                u = !1 !== v._13(n, 43).onMouseEnter() && u;
              }
              if ('mouseleave' === l) {
                u = !1 !== v._13(n, 43).onMouseLeave() && u;
              }
              if ('click' === l) {
                u = !1 !== e.share() && u;
              }
              return u;
            },
            F.b,
            F.a,
          )),
          v.Y(42, 1097728, [[1, 4]], 0, U.a, [[8, ''], D.a, v.j, v.z], null, null),
          v.Y(
            43,
            4210688,
            null,
            0,
            N.a,
            [v.j, v.f, B.a, v.i],
            { tooltip: [0, 'tooltip'], event: [1, 'event'], navTooltip: [2, 'navTooltip'] },
            null,
          ),
          v._14(131072, V.a, [$.a, v.g]),
          (n()(), v._20(-1, 0, ['\n        '])),
          (n()(), v.Z(46, 0, null, 0, 1, 'ion-icon', [['name', 'share'], ['role', 'img']], [[2, 'hide', null]], null, null, null, null)),
          v.Y(47, 147456, null, 0, W.a, [D.a, v.j, v.z], { name: [0, 'name'] }, null),
          (n()(), v._20(-1, 0, ['\n      '])),
          (n()(), v._20(-1, null, ['\n\n   '])),
          (n()(), v._20(-1, 3, ['\n  '])),
          (n()(), v._20(-1, null, ['\n\n'])),
          (n()(), v._20(-1, null, ['\n\n\n'])),
          (n()(),
          v.Z(
            53,
            0,
            null,
            null,
            91,
            'ion-content',
            [['padding', '']],
            [[2, 'statusbar-padding', null], [2, 'has-refresher', null]],
            null,
            null,
            bn.b,
            bn.a,
          )),
          v.Y(54, 4374528, null, 0, vn.a, [D.a, B.a, ln.a, v.j, v.z, fn.a, yn.a, v.u, [2, sn.a], [2, pn.a]], null, null),
          (n()(), v._20(-1, 1, ['\n\n  '])),
          (n()(), v.Z(56, 0, null, 1, 1, 'h2', [], null, null, null, null, null)),
          (n()(), v._20(57, null, ['', ''])),
          (n()(), v._20(-1, 1, ['\n  '])),
          (n()(), v.Z(59, 0, null, 1, 1, 'p', [], null, null, null, null, null)),
          (n()(), v._20(60, null, ['', ''])),
          (n()(), v._20(-1, 1, ['\n\n  '])),
          (n()(), v.Z(62, 0, null, 1, 7, 'p', [], null, null, null, null, null)),
          (n()(), v._20(-1, null, ['\n    '])),
          (n()(), v.U(16777216, null, null, 1, null, i)),
          v.Y(65, 16384, null, 0, H.j, [v.I, v.F], { ngIf: [0, 'ngIf'] }, null),
          (n()(), v._20(-1, null, ['\n    '])),
          (n()(), v.U(16777216, null, null, 1, null, r)),
          v.Y(68, 16384, null, 0, H.j, [v.I, v.F], { ngIf: [0, 'ngIf'] }, null),
          (n()(), v._20(-1, null, ['\n  '])),
          (n()(), v._20(-1, 1, ['\n\n  '])),
          (n()(), v.Z(71, 0, null, 1, 2, 'h2', [], null, null, null, null, null)),
          (n()(), v._20(72, null, ['', ''])),
          v._14(131072, V.a, [$.a, v.g]),
          (n()(), v._20(-1, 1, ['\n\n  '])),
          (n()(), v.Z(75, 0, null, 1, 13, 'p', [], null, null, null, null, null)),
          (n()(), v._20(-1, null, ['\n    '])),
          (n()(), v.U(16777216, null, null, 1, null, a)),
          v.Y(78, 16384, null, 0, H.j, [v.I, v.F], { ngIf: [0, 'ngIf'] }, null),
          (n()(), v._20(-1, null, ['\n    '])),
          (n()(), v.U(16777216, null, null, 1, null, s)),
          v.Y(81, 16384, null, 0, H.j, [v.I, v.F], { ngIf: [0, 'ngIf'] }, null),
          (n()(), v._20(-1, null, ['\n    '])),
          (n()(), v.U(16777216, null, null, 1, null, c)),
          v.Y(84, 16384, null, 0, H.j, [v.I, v.F], { ngIf: [0, 'ngIf'] }, null),
          (n()(), v._20(-1, null, ['\n    '])),
          (n()(), v.U(16777216, null, null, 1, null, _)),
          v.Y(87, 16384, null, 0, H.j, [v.I, v.F], { ngIf: [0, 'ngIf'] }, null),
          (n()(), v._20(-1, null, ['\n  '])),
          (n()(), v._20(-1, 1, ['\n\n  '])),
          (n()(), v.Z(90, 0, null, 1, 6, 'p', [], null, null, null, null, null)),
          (n()(), v.Z(91, 0, null, null, 2, 'strong', [], null, null, null, null, null)),
          (n()(), v._20(92, null, ['', ': '])),
          v._14(131072, V.a, [$.a, v.g]),
          (n()(), v._20(-1, null, [' '])),
          (n()(),
          v.Z(
            95,
            0,
            null,
            null,
            1,
            'a',
            [],
            null,
            [[null, 'click']],
            function(n, l, t) {
              var u = !0,
                e = n.component;
              if ('click' === l) {
                u = !1 !== e.showAuthor(e.story.author) && u;
              }
              return u;
            },
            null,
            null,
          )),
          (n()(), v._20(96, null, ['', ''])),
          (n()(), v._20(-1, 1, ['\n  '])),
          (n()(), v.U(16777216, null, 1, 1, null, f)),
          v.Y(99, 16384, null, 0, H.j, [v.I, v.F], { ngIf: [0, 'ngIf'] }, null),
          (n()(), v._20(-1, 1, ['\n\n  '])),
          (n()(), v.U(16777216, null, 1, 1, null, h)),
          v.Y(102, 16384, null, 0, H.j, [v.I, v.F], { ngIf: [0, 'ngIf'] }, null),
          (n()(), v._20(-1, 1, ['\n\n  '])),
          (n()(), v.Z(104, 0, null, 1, 7, 'p', [], null, null, null, null, null)),
          (n()(), v.Z(105, 0, null, null, 2, 'strong', [], null, null, null, null, null)),
          (n()(), v._20(106, null, ['', ': '])),
          v._14(131072, V.a, [$.a, v.g]),
          (n()(), v._20(-1, null, [' '])),
          (n()(), v.Z(109, 0, null, null, 1, 'ion-icon', [['name', 'star'], ['role', 'img']], [[2, 'hide', null]], null, null, null, null)),
          v.Y(110, 147456, null, 0, W.a, [D.a, v.j, v.z], { name: [0, 'name'] }, null),
          (n()(), v._20(111, null, [' ', ''])),
          (n()(), v._20(-1, 1, ['\n  '])),
          (n()(), v.Z(113, 0, null, 1, 4, 'p', [], null, null, null, null, null)),
          (n()(), v.Z(114, 0, null, null, 2, 'strong', [], null, null, null, null, null)),
          (n()(), v._20(115, null, ['', ': '])),
          v._14(131072, V.a, [$.a, v.g]),
          (n()(), v._20(117, null, [' ', ''])),
          (n()(), v._20(-1, 1, ['\n  '])),
          (n()(), v.Z(119, 0, null, 1, 5, 'p', [], null, null, null, null, null)),
          (n()(), v.Z(120, 0, null, null, 2, 'strong', [], null, null, null, null, null)),
          (n()(), v._20(121, null, ['', ': '])),
          v._14(131072, V.a, [$.a, v.g]),
          (n()(), v._20(123, null, [' ', ' ', ''])),
          v._14(131072, V.a, [$.a, v.g]),
          (n()(), v._20(-1, 1, ['\n  '])),
          (n()(), v.Z(126, 0, null, 1, 4, 'p', [], null, null, null, null, null)),
          (n()(), v.Z(127, 0, null, null, 2, 'strong', [], null, null, null, null, null)),
          (n()(), v._20(128, null, ['', ': '])),
          v._14(131072, V.a, [$.a, v.g]),
          (n()(), v._20(130, null, [' ', ''])),
          (n()(), v._20(-1, 1, ['\n  '])),
          (n()(), v.Z(132, 0, null, 1, 5, 'p', [], null, null, null, null, null)),
          (n()(), v.Z(133, 0, null, null, 2, 'strong', [], null, null, null, null, null)),
          (n()(), v._20(134, null, ['', ': '])),
          v._14(131072, V.a, [$.a, v.g]),
          (n()(), v._20(136, null, [' ', ''])),
          v._16(137, 2),
          (n()(), v._20(-1, 1, ['\n\n  '])),
          (n()(), v.U(16777216, null, 1, 1, null, d)),
          v.Y(140, 16384, null, 0, H.j, [v.I, v.F], { ngIf: [0, 'ngIf'] }, null),
          (n()(), v._20(-1, 1, ['\n\n  '])),
          (n()(), v.U(16777216, null, 1, 1, null, g)),
          v.Y(143, 16384, null, 0, H.j, [v.I, v.F], { ngIf: [0, 'ngIf'] }, null),
          (n()(), v._20(-1, 1, ['\n\n'])),
          (n()(), v._20(-1, null, ['\n'])),
        ],
        function(n, l) {
          var t = l.component;
          n(l, 15, 0, !t.settings.allSettings.offlineMode);
          n(l, 19, 0, v._21(l, 19, 0, v._13(l, 20).transform('STORYDETAIL_TOOLTIP_DOWNLOADFILE')), 'press', '');
          n(l, 23, 0, 'code-download');
          n(l, 28, 0, v._21(l, 28, 0, v._13(l, 29).transform('STORYDETAIL_TOOLTIP_DOWNLOAD')), 'press', '');
          n(l, 32, 0, t.story.downloaded ? 'trash' : 'download');
          n(l, 36, 0, t.user.isLoggedIn());
          n(l, 39, 0, !t.settings.allSettings.offlineMode);
          n(l, 43, 0, v._21(l, 43, 0, v._13(l, 44).transform('SHARE_BUTTON')), 'press', '');
          n(l, 47, 0, 'share');
          n(l, 65, 0, t.story.series > 0 && !t.settings.allSettings.offlineMode);
          n(l, 68, 0, !t.settings.allSettings.offlineMode);
          n(l, 78, 0, t.story.iscontestwinner);
          n(l, 81, 0, t.story.ishot);
          n(l, 84, 0, t.story.iswriterspick);
          n(l, 87, 0, t.story.isnew);
          n(l, 99, 0, t.story.category);
          n(l, 102, 0, t.story.tags && t.story.tags.length > 0);
          n(l, 110, 0, 'star');
          n(l, 140, 0, t.user.isLoggedIn() && t.story.ratingenabled && !t.story.myrating);
          n(l, 143, 0, t.story.comments && t.story.commentsenabled);
        },
        function(n, l) {
          var t = l.component;
          n(l, 4, 0, v._13(l, 5)._hidden, v._13(l, 5)._sbPadding);
          n(l, 22, 0, v._13(l, 23)._hidden);
          n(l, 31, 0, v._13(l, 32)._hidden);
          n(l, 46, 0, v._13(l, 47)._hidden);
          n(l, 53, 0, v._13(l, 54).statusbarPadding, v._13(l, 54)._hasRefresher);
          n(l, 57, 0, t.story.title);
          n(l, 60, 0, t.story.description);
          n(l, 72, 0, v._21(l, 72, 0, v._13(l, 73).transform('DETAILS')));
          n(l, 92, 0, v._21(l, 92, 0, v._13(l, 93).transform('AUTHOR')));
          n(l, 96, 0, t.story.author.name);
          n(l, 106, 0, v._21(l, 106, 0, v._13(l, 107).transform('RATING')));
          n(l, 109, 0, v._13(l, 110)._hidden);
          n(l, 111, 0, t.story.rating);
          n(l, 115, 0, v._21(l, 115, 0, v._13(l, 116).transform('VIEWCOUNT')));
          n(l, 117, 0, t.story.viewcount);
          n(l, 121, 0, v._21(l, 121, 0, v._13(l, 122).transform('LENGTH')));
          n(l, 123, 0, t.story.length, v._21(l, 123, 1, v._13(l, 124).transform('PAGES')));
          n(l, 128, 0, v._21(l, 128, 0, v._13(l, 129).transform('LANGUAGE')));
          n(l, 130, 0, t.story.lang);
          n(l, 134, 0, v._21(l, 134, 0, v._13(l, 135).transform('TIMESTAMP')));
          n(l, 136, 0, v._21(l, 136, 0, n(l, 137, 0, v._13(l, 0), 1e3 * t.story.timestamp, 'yyyy-MM-dd HH:mm')));
        },
      );
    }
    Object.defineProperty(l, '__esModule', { value: !0 });
    var v = t(1),
      y = (t(0), t(57), t(50)),
      T = (t(706), t(204)),
      k = t(137),
      I = t(198),
      w = (t(190), t(395)),
      Y = (function() {
        function n(n, l, t, u, e, o, i, r, a, s, c, _, f) {
          var p = this;
          (this.navCtrl = n),
            (this.navParams = l),
            (this.alertCtrl = t),
            (this.popoverCtrl = u),
            (this.translate = e),
            (this.g = o),
            (this.stories = i),
            (this.settings = r),
            (this.user = a),
            (this.socialSharing = s),
            (this.browser = c),
            (this.file = _),
            (this.api = f),
            (this.story = l.get('story')),
            this.story.cached ||
              this.stories.getById(this.story.id).subscribe(function(n) {
                n
                  ? ((p.myrating = n.myrating), (p.story.series = n.series), (p.story.length = n.length), (p.story.lang = n.lang))
                  : p.navCtrl.pop();
              });
        }
        return (
          (n.prototype.showAuthor = function(n) {
            this.settings.allSettings.offlineMode || this.navCtrl.push('AuthorPage', { author: n });
          }),
          (n.prototype.showSeries = function() {
            this.navCtrl.push('StorySeriesPage', { story: this.story });
          }),
          (n.prototype.showRelated = function() {
            this.navCtrl.push('StoryRelatedPage', { story: this.story });
          }),
          (n.prototype.rate = function(n) {
            n.preventDefault(), this.stories.rate(this.story, this.myrating);
          }),
          (n.prototype.search = function(n) {
            this.settings.allSettings.offlineMode || this.navCtrl.push('SearchPage', { query: n });
          }),
          (n.prototype.category = function(n) {
            var l = this;
            this.settings.allSettings.offlineMode ||
              this.translate.get(['STORYDETAIL_VIEWCAT', 'TOP', 'NEW']).subscribe(function(t) {
                l.alertCtrl
                  .create({
                    title: t.STORYDETAIL_VIEWCAT,
                    buttons: [
                      {
                        text: t.TOP,
                        handler: function(t) {
                          l.openCategoryListPage('top', n);
                        },
                      },
                      {
                        text: t.NEW,
                        handler: function(t) {
                          l.openCategoryListPage('new', n);
                        },
                      },
                    ],
                  })
                  .present();
              });
          }),
          (n.prototype.openCategoryListPage = function(n, l) {
            var t = this;
            this.g.onReady().then(function() {
              var u = t.g.getCategories().find(function(n) {
                return n.name === l;
              });
              t.navCtrl.push('TopListPage', { category: u, order: n });
            });
          }),
          (n.prototype.openListPicker = function(n) {
            this.popoverCtrl.create('BookmarkPopover', { story: this.story }).present({ ev: n });
          }),
          (n.prototype.share = function() {
            var n = this;
            this.socialSharing.share(null, null, null, this.story.url).catch(function(l) {
              return Object(w.a)(l, function() {
                n.translate.get('COPYPROMPT_MSG').subscribe(function(l) {
                  return prompt(l, n.story.url);
                });
              });
            });
          }),
          (n.prototype.export = function() {
            var n = this,
              l = 'litapp-story-' + this.story.url + '-' + Math.round(new Date().getTime() / 1e3) + '.html',
              t =
                '\n<html>\n<body>\n  <h1>\n    <a href="https://www.literotica.com/s/' +
                this.story.url +
                '">' +
                this.story.title +
                '</a>\n    (by <a href="https://www.literotica.com/stories/memberpage.php?uid=' +
                this.story.author.id +
                '">' +
                this.story.author.name +
                ')</a>\n  </h1>\n\n  <ul>\n    <li>Category: ' +
                this.story.category +
                ' (Tags: [' +
                this.story.tags.join(', ') +
                '])</li>\n    <li>Rating: ' +
                this.story.rating +
                ' (' +
                this.story.viewcount +
                ' views)</li>\n    <li>' +
                this.story.length +
                ' pages</li>\n    <li>Timestamp: ' +
                new Date(1e3 * parseInt(this.story.timestamp)).toISOString() +
                '</li>\n  </ul>\n\n  <article>\n\n    ' +
                this.story.content.join('<br><hr><br>') +
                '\n\n  </article>\n\n</body>\n</html>\n  ',
              u = this.file.externalRootDirectory;
            this.file
              .writeFile(u, l, t, { replace: !0 })
              .then(function() {
                n.translate.get(['SETTINGS_EXPORTSUCCESS']).subscribe(function(t) {
                  n.api.showToast(t.SETTINGS_EXPORTSUCCESS + ': ' + u + l);
                });
              })
              .catch(function(l) {
                return Object(w.a)(l, function() {
                  n.translate.get('COPYPROMPT_MSG').subscribe(function(n) {
                    return prompt(n, t);
                  });
                });
              });
          }),
          (n.prototype.toggleDownload = function() {
            this.story.downloaded ? this.stories.undownload(this.story) : this.stories.download(this.story);
          }),
          (n.prototype.refreshStory = function() {
            var n = this;
            this.stories.getById(this.story.id, !0).subscribe(function(l) {
              n.updateValues(l), (n.myrating = n.story.myrating), n.stories.cache(n.story);
            });
          }),
          (n.prototype.openLink = function() {
            var n = this;
            this.browser.openUrl(this.story.url).catch(function(l) {
              return Object(w.a)(l, function() {
                return window.open(n.story.url);
              });
            });
          }),
          (n.prototype.updateValues = function(n) {
            for (var l in this.story) void 0 !== n[l] && (this.story[l] = n[l]);
          }),
          n
        );
      })(),
      C = t(708),
      j = (function() {
        return function() {};
      })(),
      Z = t(381),
      x = t(382),
      S = t(383),
      E = t(384),
      O = t(385),
      P = t(386),
      L = t(387),
      A = t(388),
      M = t(389),
      R = t(712),
      z = t(716),
      F = t(62),
      U = t(29),
      D = t(3),
      N = t(704),
      B = t(6),
      V = t(125),
      $ = t(39),
      W = t(63),
      G = t(196),
      H = t(18),
      q = t(28),
      X = t(733),
      K = t(209),
      J = t(22),
      Q = t(40),
      nn = t(25),
      ln = t(12),
      tn = t(189),
      un = t(58),
      en = t(85),
      on = t(64),
      rn = t(10),
      an = t(128),
      sn = t(7),
      cn = t(709),
      _n = t(51),
      fn = t(13),
      pn = t(30),
      hn = t(390),
      dn = t(90),
      mn = t(53),
      gn = t(195),
      bn = t(391),
      vn = t(31),
      yn = t(36),
      Tn = t(16),
      kn = t(93),
      In = t(127),
      wn = t(68),
      Yn = t(66),
      Cn = t(54),
      jn = t(52),
      Zn = t(37),
      xn = v.X({ encapsulation: 2, styles: [], data: {} }),
      Sn = v.V(
        'page-story-detail',
        Y,
        function(n) {
          return v._22(
            0,
            [
              (n()(), v.Z(0, 0, null, null, 1, 'page-story-detail', [], null, null, null, b, xn)),
              v.Y(1, 49152, null, 0, Y, [pn.a, Tn.a, kn.a, In.a, $.a, wn.a, Yn.a, Cn.a, jn.a, T.a, k.a, I.a, Zn.a], null, null),
            ],
            null,
            null,
          );
        },
        {},
        {},
        [],
      ),
      En = t(86),
      On = t(87),
      Pn = t(89),
      Ln = t(88),
      An = t(126),
      Mn = t(191),
      Rn = t(707),
      zn = t(703),
      Fn = t(59);
    t.d(l, 'StoryDetailPageModuleNgFactory', function() {
      return Un;
    });
    var Un = v.W(j, [], function(n) {
      return v._10([
        v._11(512, v.i, v.S, [[8, [Z.a, x.a, S.a, E.a, O.a, P.a, L.a, A.a, M.a, R.a, z.a, Sn]], [3, v.i], v.s]),
        v._11(4608, H.l, H.k, [v.r, [2, H.t]]),
        v._11(4608, q.r, q.r, []),
        v._11(4608, q.d, q.d, []),
        v._11(4608, En.b, En.a, []),
        v._11(4608, On.a, On.b, []),
        v._11(4608, Pn.b, Pn.a, []),
        v._11(4608, Ln.b, Ln.a, []),
        v._11(4608, $.a, $.a, [An.a, En.b, On.a, Pn.b, Ln.b, $.b, $.c]),
        v._11(512, H.b, H.b, []),
        v._11(512, q.p, q.p, []),
        v._11(512, q.g, q.g, []),
        v._11(512, q.n, q.n, []),
        v._11(512, Mn.a, Mn.a, []),
        v._11(512, Mn.b, Mn.b, []),
        v._11(512, y.a, y.a, []),
        v._11(512, Rn.a, Rn.a, []),
        v._11(512, zn.a, zn.a, []),
        v._11(512, zn.f, zn.f, []),
        v._11(512, zn.c, zn.c, []),
        v._11(512, zn.b, zn.b, []),
        v._11(512, zn.d, zn.d, []),
        v._11(512, zn.e, zn.e, []),
        v._11(512, C.a, C.a, []),
        v._11(512, j, j, []),
        v._11(256, Fn.a, Y, []),
        v._11(256, $.c, void 0, []),
        v._11(256, $.b, void 0, []),
      ]);
    });
  },
  703: function(n, l, t) {
    'use strict';
    function u(n) {
      return void 0 === n;
    }
    function e(n) {
      return 'string' == typeof n;
    }
    function o(n, l) {
      var t = l.split('.'),
        e = t.shift();
      return t.reduce(function(n, l) {
        return u(n) || u(n[l]) ? void 0 : n[l];
      }, n[e || '']);
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
        return _;
      }),
      t.d(l, 'h', function() {
        return c;
      }),
      t.d(l, 'c', function() {
        return f;
      }),
      t.d(l, 'b', function() {
        return p;
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
                for (var e = t.length, o = 0; o < e; ++o) {
                  var r = Object(i.__read)(n.extractFromConfig(t[o]), 2),
                    a = n.orderCompare(r[0], r[1], l, u);
                  if (0 !== a) return a;
                }
                return 0;
              });
            if (e(t)) {
              var o = Object(i.__read)(n.extractFromConfig(t), 3),
                r = o[0],
                a = o[1];
              if (1 === t.length)
                switch (o[2]) {
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
            return e(n) && e(l) ? n.toLowerCase().localeCompare(l.toLowerCase()) : n - l;
          }),
          (n.orderCompare = function(n, l, t, i) {
            var r = o(t, n),
              a = o(i, n);
            if (r === a) return 0;
            if (u(r) || '' === r) return 1;
            if (u(a) || '' === a) return -1;
            if (e(r) && e(a)) {
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
            return e(n) ? (0 === l ? n : n + t + this.repeat(n, l - 1, t)) : n;
          }),
          n
        );
      })(),
      _ = (function() {
        return function() {};
      })(),
      f = (function() {
        return function() {};
      })(),
      p = (function() {
        return function() {};
      })(),
      h = (function() {
        return function() {};
      })();
  },
  704: function(n, l, t) {
    'use strict';
    t.d(l, 'a', function() {
      return e;
    });
    t(57);
    var u = t(705),
      e = (function() {
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
              e = u.getBoundingClientRect(),
              o = 10;
            return (
              this.navTooltip && ((this.positionV = 'bottom'), (this.arrow = !1), (o = 20)),
              (n =
                'right' === this.positionH
                  ? e.right + o
                  : 'left' === this.positionH
                  ? e.left - o - t.offsetWidth
                  : this.navTooltip
                  ? e.left + u.offsetWidth / 2
                  : e.left),
              (l =
                'top' === this.positionV
                  ? e.top - o - t.offsetHeight
                  : 'bottom' === this.positionV
                  ? e.bottom + o
                  : e.top + u.offsetHeight / 2 - t.offsetHeight / 2),
              n + t.offsetWidth + o > this.platform.width()
                ? (n = this.platform.width() - t.offsetWidth - o)
                : n + t.offsetWidth - o < 0 && (n = o),
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
      return e._22(
        0,
        [
          (n()(), e.Z(0, 0, null, null, 1, 'div', [['class', 'toolbar-background']], null, null, null, null, null)),
          e.Y(1, 278528, null, 0, o.h, [e.p, e.q, e.j, e.A], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
          (n()(),
          e.Z(
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
          e.Y(3, 278528, null, 0, o.h, [e.p, e.q, e.j, e.A], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
          e.Y(4, 1097728, null, 0, r.a, [[8, 'bar-button'], a.a, e.j, e.z], null, null),
          (n()(),
          e.Z(5, 0, null, 0, 2, 'ion-icon', [['class', 'back-button-icon'], ['role', 'img']], [[2, 'hide', null]], null, null, null, null)),
          e.Y(6, 278528, null, 0, o.h, [e.p, e.q, e.j, e.A], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
          e.Y(7, 147456, null, 0, s.a, [a.a, e.j, e.z], { name: [0, 'name'] }, null),
          (n()(), e.Z(8, 0, null, 0, 2, 'span', [['class', 'back-button-text']], null, null, null, null, null)),
          e.Y(9, 278528, null, 0, o.h, [e.p, e.q, e.j, e.A], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
          (n()(), e._20(10, null, ['', ''])),
          e._12(null, 0),
          e._12(null, 1),
          e._12(null, 2),
          (n()(), e.Z(14, 0, null, null, 2, 'div', [['class', 'toolbar-content']], null, null, null, null, null)),
          e.Y(15, 278528, null, 0, o.h, [e.p, e.q, e.j, e.A], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
          e._12(null, 3),
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
          n(l, 5, 0, e._13(l, 7)._hidden);
          n(l, 10, 0, t._backText);
        },
      );
    }
    t.d(l, 'a', function() {
      return c;
    }),
      (l.b = u);
    var e = t(1),
      o = t(18),
      i = t(62),
      r = t(29),
      a = t(3),
      s = t(63),
      c = (t(7), t(30), e.X({ encapsulation: 2, styles: [], data: {} }));
  },
  710: function(n, l, t) {
    'use strict';
    t.d(l, 'a', function() {
      return u;
    });
    t(0), t(57), t(190);
    var u = (function() {
      function n(n, l, t, u) {
        var e = this;
        (this.platform = l),
          (this.viewCtrl = t),
          (this.l = u),
          (this.story = n.get('story')),
          this.l.onReady().then(function() {
            e.l.query().subscribe(function(n) {
              n && (e.alllists = n);
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
    function u(n) {
      return e._22(2, [(n()(), e._20(0, null, ['', '']))], null, function(n, l) {
        n(l, 0, 0, l.component.text);
      });
    }
    t.d(l, 'a', function() {
      return r;
    });
    var e = t(1),
      o = t(705),
      i = e.X({
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
      r = e.V(
        'tooltip-box',
        o.a,
        function(n) {
          return e._22(
            0,
            [
              (n()(), e.Z(0, 0, null, null, 1, 'tooltip-box', [], [[40, '@fade', 0]], null, null, u, i)),
              e.Y(1, 4243456, null, 0, o.a, [e.j, e.A], null, null),
            ],
            null,
            function(n, l) {
              n(l, 0, 0, e._13(l, 1).fadeState);
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
    function e(n) {
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
    function o(n) {
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
          r.Y(1, 1097728, null, 3, _.a, [f.a, s.a, r.j, r.z, [2, p.a]], null, null),
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
          r._14(131072, T.a, [k.a, r.g]),
          (n()(), r._20(-1, 0, ['\n        '])),
          (n()(), r.U(16777216, null, 0, 1, null, e)),
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
          r._14(0, I.g, []),
          (n()(), r._20(-1, null, ['\n'])),
          (n()(), r.Z(2, 0, null, null, 15, 'ion-list', [['class', 'bookmarks']], null, null, null, null, null)),
          r.Y(3, 16384, null, 0, w.a, [s.a, r.j, r.z, y.a, Y.l, C.a], null, null),
          (n()(), r._20(-1, null, ['\n  '])),
          (n()(), r.Z(5, 0, null, null, 7, 'ion-list-header', [['class', 'item']], null, null, null, c.b, c.a)),
          r.Y(6, 1097728, null, 3, _.a, [f.a, s.a, r.j, r.z, [2, p.a]], null, null),
          r._18(335544320, 1, { contentLabel: 0 }),
          r._18(603979776, 2, { _buttons: 1 }),
          r._18(603979776, 3, { _icons: 1 }),
          r.Y(10, 16384, null, 0, j.a, [s.a, r.z, r.j, [8, null]], null, null),
          (n()(), r._20(11, 2, ['', ''])),
          r._14(131072, T.a, [k.a, r.g]),
          (n()(), r._20(-1, null, ['\n  '])),
          (n()(), r.U(16777216, null, null, 2, null, o)),
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
      return P;
    });
    var r = t(1),
      a = t(63),
      s = t(3),
      c = t(189),
      _ = t(25),
      f = t(22),
      p = t(58),
      h = t(85),
      d = t(18),
      m = t(192),
      g = t(62),
      b = t(29),
      v = t(704),
      y = t(6),
      T = t(125),
      k = t(39),
      I = t(703),
      w = t(64),
      Y = t(10),
      C = t(12),
      j = t(130),
      Z = t(710),
      x = t(16),
      S = t(7),
      E = t(133),
      O = r.X({ encapsulation: 2, styles: [], data: {} }),
      P = r.V(
        'bookmark-popover',
        Z.a,
        function(n) {
          return r._22(
            0,
            [
              (n()(), r.Z(0, 0, null, null, 1, 'bookmark-popover', [], null, null, null, i, O)),
              r.Y(1, 49152, null, 0, Z.a, [x.a, y.a, S.a, E.a], null, null),
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
  733: function(n, l, t) {
    'use strict';
    function u(n) {
      return a._22(
        0,
        [
          (n()(), a.Z(0, 0, null, null, 1, 'div', [['class', 'range-pin'], ['role', 'presentation']], null, null, null, null, null)),
          (n()(), a._20(1, null, ['', ''])),
        ],
        null,
        function(n, l) {
          n(l, 1, 0, l.component.val);
        },
      );
    }
    function e(n) {
      return a._22(
        0,
        [
          (n()(), a.U(16777216, null, null, 1, null, u)),
          a.Y(1, 16384, null, 0, s.j, [a.I, a.F], { ngIf: [0, 'ngIf'] }, null),
          (n()(), a.Z(2, 0, null, null, 0, 'div', [['class', 'range-knob'], ['role', 'presentation']], null, null, null, null, null)),
        ],
        function(n, l) {
          n(l, 1, 0, l.component.pin);
        },
        null,
      );
    }
    function o(n) {
      return a._22(
        0,
        [
          (n()(),
          a.Z(
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
              var u = !0,
                e = n.component;
              if ('keydown' === l) {
                u = !1 !== a._13(n, 1)._keyup(t) && u;
              }
              if ('ionIncrease' === l) {
                u = !1 !== e._keyChg(!0, !0) && u;
              }
              if ('ionDecrease' === l) {
                u = !1 !== e._keyChg(!1, !0) && u;
              }
              return u;
            },
            e,
            _,
          )),
          a.Y(
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
            a._13(l, 1).pressed,
            a._13(l, 1).val === a._13(l, 1).min || void 0 === a._13(l, 1).val,
            a._13(l, 1).val === a._13(l, 1).max,
            a._13(l, 1)._x,
            a._13(l, 1).val,
            a._13(l, 1).min,
            a._13(l, 1).max,
            a._13(l, 1).disabled,
            a._13(l, 1).labelId,
            a._13(l, 1).disabled ? -1 : 0,
          );
        },
      );
    }
    function r(n) {
      return a._22(
        0,
        [
          a._18(402653184, 1, { _slider: 0 }),
          a._12(null, 0),
          (n()(), a.Z(2, 0, [[1, 0], ['slider', 1]], null, 8, 'div', [['class', 'range-slider']], null, null, null, null, null)),
          (n()(), a.U(16777216, null, null, 1, null, o)),
          a.Y(4, 802816, null, 0, s.i, [a.I, a.F, a.p], { ngForOf: [0, 'ngForOf'] }, null),
          (n()(), a.Z(5, 0, null, null, 0, 'div', [['class', 'range-bar'], ['role', 'presentation']], null, null, null, null, null)),
          (n()(),
          a.Z(
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
          a.Z(
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
              var u = !0,
                e = n.component;
              if ('keydown' === l) {
                u = !1 !== a._13(n, 8)._keyup(t) && u;
              }
              if ('ionIncrease' === l) {
                u = !1 !== e._keyChg(!0, !1) && u;
              }
              if ('ionDecrease' === l) {
                u = !1 !== e._keyChg(!1, !1) && u;
              }
              return u;
            },
            e,
            _,
          )),
          a.Y(
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
          (n()(), a.U(16777216, null, null, 1, null, i)),
          a.Y(10, 16384, null, 0, s.j, [a.I, a.F], { ngIf: [0, 'ngIf'] }, null),
          a._12(null, 1),
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
            a._13(l, 8).pressed,
            a._13(l, 8).val === a._13(l, 8).min || void 0 === a._13(l, 8).val,
            a._13(l, 8).val === a._13(l, 8).max,
            a._13(l, 8)._x,
            a._13(l, 8).val,
            a._13(l, 8).min,
            a._13(l, 8).max,
            a._13(l, 8).disabled,
            a._13(l, 8).labelId,
            a._13(l, 8).disabled ? -1 : 0,
          );
        },
      );
    }
    var a = t(1),
      s = t(18),
      c = t(210),
      _ = a.X({ encapsulation: 2, styles: [], data: {} });
    t(28), t(209), t(22), t(40), t(25), t(3), t(6), t(12);
    t.d(l, 'a', function() {
      return f;
    }),
      (l.b = r);
    var f = a.X({ encapsulation: 2, styles: [], data: {} });
  },
});
