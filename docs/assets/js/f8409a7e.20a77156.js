'use strict';
(self.webpackChunkmy_docs = self.webpackChunkmy_docs || []).push([
  [206],
  {
    3905: (e, t, a) => {
      a.d(t, { Zo: () => c, kt: () => f });
      var r = a(7294);
      function l(e, t, a) {
        return t in e ? Object.defineProperty(e, t, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = a), e;
      }
      function i(e, t) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            a.push.apply(a, r);
        }
        return a;
      }
      function n(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? i(Object(a), !0).forEach(function (t) {
                l(e, t, a[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : i(Object(a)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t));
              });
        }
        return e;
      }
      function o(e, t) {
        if (null == e) return {};
        var a,
          r,
          l = (function (e, t) {
            if (null == e) return {};
            var a,
              r,
              l = {},
              i = Object.keys(e);
            for (r = 0; r < i.length; r++) (a = i[r]), t.indexOf(a) >= 0 || (l[a] = e[a]);
            return l;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (r = 0; r < i.length; r++)
            (a = i[r]), t.indexOf(a) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, a) && (l[a] = e[a]));
        }
        return l;
      }
      var p = r.createContext({}),
        s = function (e) {
          var t = r.useContext(p),
            a = t;
          return e && (a = 'function' == typeof e ? e(t) : n(n({}, t), e)), a;
        },
        c = function (e) {
          var t = s(e.components);
          return r.createElement(p.Provider, { value: t }, e.children);
        },
        m = 'mdxType',
        d = {
          inlineCode: 'code',
          wrapper: function (e) {
            var t = e.children;
            return r.createElement(r.Fragment, {}, t);
          },
        },
        u = r.forwardRef(function (e, t) {
          var a = e.components,
            l = e.mdxType,
            i = e.originalType,
            p = e.parentName,
            c = o(e, ['components', 'mdxType', 'originalType', 'parentName']),
            m = s(a),
            u = l,
            f = m[''.concat(p, '.').concat(u)] || m[u] || d[u] || i;
          return a ? r.createElement(f, n(n({ ref: t }, c), {}, { components: a })) : r.createElement(f, n({ ref: t }, c));
        });
      function f(e, t) {
        var a = arguments,
          l = t && t.mdxType;
        if ('string' == typeof e || l) {
          var i = a.length,
            n = new Array(i);
          n[0] = u;
          var o = {};
          for (var p in t) hasOwnProperty.call(t, p) && (o[p] = t[p]);
          (o.originalType = e), (o[m] = 'string' == typeof e ? e : l), (n[1] = o);
          for (var s = 2; s < i; s++) n[s] = a[s];
          return r.createElement.apply(null, n);
        }
        return r.createElement.apply(null, a);
      }
      u.displayName = 'MDXCreateElement';
    },
    9568: (e, t, a) => {
      a.r(t),
        a.d(t, {
          assets: () => p,
          contentTitle: () => n,
          default: () => m,
          frontMatter: () => i,
          metadata: () => o,
          toc: () => s,
        });
      var r = a(7462),
        l = (a(7294), a(3905));
      const i = { sidebar_label: 'Introduction', sidebar_position: 1, hide_table_of_contents: !0 },
        n = 'Reanimated Color Picker',
        o = {
          unversionedId: 'intro',
          id: 'intro',
          title: 'Reanimated Color Picker',
          description: '- A Pure JavaScript Color Picker for React Native.',
          source: '@site/docs/intro.mdx',
          sourceDirName: '.',
          slug: '/intro',
          permalink: '/reanimated-color-picker/docs/intro',
          draft: !1,
          tags: [],
          version: 'current',
          sidebarPosition: 1,
          frontMatter: { sidebar_label: 'Introduction', sidebar_position: 1, hide_table_of_contents: !0 },
          sidebar: 'tutorialSidebar',
          next: { title: 'Installation', permalink: '/reanimated-color-picker/docs/Installation' },
        },
        p = {},
        s = [
          {
            value: '- A Pure JavaScript Color Picker for React Native.',
            id: '--a-pure-javascript-color-picker-for-react-native',
            level: 4,
          },
          { value: '- Highly customizable.', id: '--highly-customizable', level: 4 },
          {
            value: '- Supports IOS, Android, Expo, and Web platforms.',
            id: '--supports-ios-android-expo-and-web-platforms',
            level: 4,
          },
          { value: '- Supports right-to-left (RTL) layouts.', id: '--supports-right-to-left-rtl-layouts', level: 4 },
          { value: '1. Installation', id: '1-installation', level: 3 },
          { value: '2. Usage', id: '2-usage', level: 3 },
          { value: '3. API', id: '3-api', level: 3 },
          { value: '4. ColorKit', id: '4-colorkit', level: 3 },
          { value: '5. Examples', id: '5-examples', level: 3 },
        ],
        c = { toc: s };
      function m(e) {
        let { components: t, ...i } = e;
        return (0, l.kt)(
          'wrapper',
          (0, r.Z)({}, c, i, { components: t, mdxType: 'MDXLayout' }),
          (0, l.kt)('h1', { id: 'reanimated-color-picker' }, 'Reanimated Color Picker'),
          (0, l.kt)(
            'h4',
            { id: '--a-pure-javascript-color-picker-for-react-native' },
            '- A Pure JavaScript Color Picker for React Native.'
          ),
          (0, l.kt)('h4', { id: '--highly-customizable' }, '- Highly customizable.'),
          (0, l.kt)(
            'h4',
            { id: '--supports-ios-android-expo-and-web-platforms' },
            '- Supports IOS, Android, Expo, and Web platforms.'
          ),
          (0, l.kt)('h4', { id: '--supports-right-to-left-rtl-layouts' }, '- Supports right-to-left (RTL) layouts.'),
          (0, l.kt)(
            'div',
            { className: 'example-images' },
            (0, l.kt)(
              'p',
              null,
              (0, l.kt)('img', { alt: 'Example_1', src: a(2482).Z, width: '240', height: '352' }),
              '\n',
              (0, l.kt)('img', { alt: 'Example_7', src: a(1241).Z, width: '244', height: '352' })
            )
          ),
          (0, l.kt)(
            'div',
            { className: 'example-images' },
            (0, l.kt)(
              'p',
              null,
              (0, l.kt)('img', { alt: 'Example_2', src: a(4987).Z, width: '240', height: '340' }),
              ' ',
              (0, l.kt)('img', { alt: 'Example_3', src: a(399).Z, width: '240', height: '340' })
            )
          ),
          (0, l.kt)(
            'div',
            { className: 'example-images' },
            (0, l.kt)(
              'p',
              null,
              (0, l.kt)('img', { alt: 'Example_4', src: a(8082).Z, width: '240', height: '434' }),
              ' ',
              (0, l.kt)('img', { alt: 'Example_5', src: a(4938).Z, width: '240', height: '435' })
            )
          ),
          (0, l.kt)(
            'div',
            { className: 'example-images' },
            (0, l.kt)(
              'p',
              null,
              (0, l.kt)('img', { alt: 'Example_8', src: a(151).Z, width: '240', height: '340' }),
              ' ',
              (0, l.kt)('img', { alt: 'Example_9', src: a(9329).Z, width: '217', height: '340' })
            )
          ),
          (0, l.kt)(
            'div',
            { className: 'example-images' },
            (0, l.kt)(
              'p',
              null,
              (0, l.kt)('img', { alt: 'Example_10', src: a(3601).Z, width: '252', height: '375' }),
              ' ',
              (0, l.kt)('img', { alt: 'Example_11', src: a(6546).Z, width: '228', height: '375' })
            )
          ),
          (0, l.kt)(
            'div',
            { className: 'example-images' },
            (0, l.kt)(
              'p',
              null,
              (0, l.kt)('img', { alt: 'Example_6', src: a(2774).Z, width: '240', height: '278' }),
              ' ',
              (0, l.kt)('img', { alt: 'Example_12', src: a(7032).Z, width: '230', height: '278' })
            )
          ),
          (0, l.kt)('h1', { id: 'table-of-contents' }, 'Table of contents'),
          (0, l.kt)(
            'h3',
            { id: '1-installation' },
            '1. ',
            (0, l.kt)('a', { parentName: 'h3', href: './Installation' }, 'Installation')
          ),
          (0, l.kt)('h3', { id: '2-usage' }, '2. ', (0, l.kt)('a', { parentName: 'h3', href: './Usage' }, 'Usage')),
          (0, l.kt)('h3', { id: '3-api' }, '3. ', (0, l.kt)('a', { parentName: 'h3', href: './category/api' }, 'API')),
          (0, l.kt)(
            'ul',
            null,
            (0, l.kt)(
              'li',
              { parentName: 'ul' },
              (0, l.kt)('a', { parentName: 'li', href: './API/ColorPicker' }, 'ColorPicker Wrapper')
            ),
            (0, l.kt)('li', { parentName: 'ul' }, (0, l.kt)('a', { parentName: 'li', href: './API/HueSlider' }, 'HueSlider')),
            (0, l.kt)(
              'li',
              { parentName: 'ul' },
              (0, l.kt)('a', { parentName: 'li', href: './API/BrightnessSlider' }, 'BrightnessSlider')
            ),
            (0, l.kt)(
              'li',
              { parentName: 'ul' },
              (0, l.kt)('a', { parentName: 'li', href: './API/SaturationSlider' }, 'SaturationSlider')
            ),
            (0, l.kt)(
              'li',
              { parentName: 'ul' },
              (0, l.kt)('a', { parentName: 'li', href: './API/OpacitySlider' }, 'OpacitySlider')
            ),
            (0, l.kt)('li', { parentName: 'ul' }, (0, l.kt)('a', { parentName: 'li', href: './API/RedSlider' }, 'RedSlider')),
            (0, l.kt)('li', { parentName: 'ul' }, (0, l.kt)('a', { parentName: 'li', href: './API/GreenSlider' }, 'GreenSlider')),
            (0, l.kt)('li', { parentName: 'ul' }, (0, l.kt)('a', { parentName: 'li', href: './API/BlueSlider' }, 'BlueSlider')),
            (0, l.kt)('li', { parentName: 'ul' }, (0, l.kt)('a', { parentName: 'li', href: './API/HueCircular' }, 'HueCircular')),
            (0, l.kt)('li', { parentName: 'ul' }, (0, l.kt)('a', { parentName: 'li', href: './API/Panel1' }, 'Panel1')),
            (0, l.kt)('li', { parentName: 'ul' }, (0, l.kt)('a', { parentName: 'li', href: './API/Panel2' }, 'Panel2')),
            (0, l.kt)('li', { parentName: 'ul' }, (0, l.kt)('a', { parentName: 'li', href: './API/Panel3' }, 'Panel3')),
            (0, l.kt)('li', { parentName: 'ul' }, (0, l.kt)('a', { parentName: 'li', href: './API/Panel4' }, 'Panel4')),
            (0, l.kt)('li', { parentName: 'ul' }, (0, l.kt)('a', { parentName: 'li', href: './API/Panel5' }, 'Panel5')),
            (0, l.kt)('li', { parentName: 'ul' }, (0, l.kt)('a', { parentName: 'li', href: './API/Preview' }, 'Preview')),
            (0, l.kt)('li', { parentName: 'ul' }, (0, l.kt)('a', { parentName: 'li', href: './API/PreviewText' }, 'PreviewText')),
            (0, l.kt)('li', { parentName: 'ul' }, (0, l.kt)('a', { parentName: 'li', href: './API/InputWidget' }, 'InputWidget')),
            (0, l.kt)('li', { parentName: 'ul' }, (0, l.kt)('a', { parentName: 'li', href: './API/Swatches' }, 'Swatches'))
          ),
          (0, l.kt)('h3', { id: '4-colorkit' }, '4. ', (0, l.kt)('a', { parentName: 'h3', href: './ColorKit' }, 'ColorKit')),
          (0, l.kt)('h3', { id: '5-examples' }, '5. ', (0, l.kt)('a', { parentName: 'h3', href: './Examples' }, 'Examples'))
        );
      }
      m.isMDXComponent = !0;
    },
    2482: (e, t, a) => {
      a.d(t, { Z: () => r });
      const r = a.p + 'assets/images/example_1-0ed7e534ba652c042cf6754d8c149bef.png';
    },
    3601: (e, t, a) => {
      a.d(t, { Z: () => r });
      const r = a.p + 'assets/images/example_10-731b20b59e6c13fa697c1951b32f1616.png';
    },
    6546: (e, t, a) => {
      a.d(t, { Z: () => r });
      const r = a.p + 'assets/images/example_11-21b588267bf89dfaa5f67cc80507a7ec.png';
    },
    7032: (e, t, a) => {
      a.d(t, { Z: () => r });
      const r = a.p + 'assets/images/example_12-ee0469e990f3ae0d1507fb1466bb7c3e.png';
    },
    4987: (e, t, a) => {
      a.d(t, { Z: () => r });
      const r = a.p + 'assets/images/example_2-350479b77ee618f64f2fdcb3827e8d08.png';
    },
    399: (e, t, a) => {
      a.d(t, { Z: () => r });
      const r = a.p + 'assets/images/example_3-174fa0683db3c8e470687e7c3b50c423.png';
    },
    8082: (e, t, a) => {
      a.d(t, { Z: () => r });
      const r = a.p + 'assets/images/example_4-e46ec0b407ba49c9be6eb8d7c4fb2855.png';
    },
    4938: (e, t, a) => {
      a.d(t, { Z: () => r });
      const r = a.p + 'assets/images/example_5-cef58d35c07395a6f562cdb3c417ee54.png';
    },
    2774: (e, t, a) => {
      a.d(t, { Z: () => r });
      const r = a.p + 'assets/images/example_6-7747b4e33a80534c65d19bf5daef8399.png';
    },
    1241: (e, t, a) => {
      a.d(t, { Z: () => r });
      const r = a.p + 'assets/images/example_7-f6591b25248729dcb1bef359e1802215.png';
    },
    151: (e, t, a) => {
      a.d(t, { Z: () => r });
      const r = a.p + 'assets/images/example_8-128db863c06d8621e2d3f7181c003866.png';
    },
    9329: (e, t, a) => {
      a.d(t, { Z: () => r });
      const r = a.p + 'assets/images/example_9-37a112525d3cfa90f12d537be5d1fbd4.png';
    },
  },
]);
