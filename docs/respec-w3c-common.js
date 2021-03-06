;(window.respecVersion = '26.0.0'),
  (function () {
    'use strict'
    window.addEventListener('error', (e) => {
      console.error(e.error, e.message, e)
    })
    const e = [
      Promise.resolve().then(function () {
        return Un
      }),
      Promise.resolve().then(function () {
        return wr
      }),
      Promise.resolve().then(function () {
        return yr
      }),
      Promise.resolve().then(function () {
        return b
      }),
      Promise.resolve().then(function () {
        return mo
      }),
      Promise.resolve().then(function () {
        return bo
      }),
      Promise.resolve().then(function () {
        return yo
      }),
      Promise.resolve().then(function () {
        return ko
      }),
      Promise.resolve().then(function () {
        return Co
      }),
      Promise.resolve().then(function () {
        return Eo
      }),
      Promise.resolve().then(function () {
        return nr
      }),
      Promise.resolve().then(function () {
        return Hn
      }),
      Promise.resolve().then(function () {
        return To
      }),
      Promise.resolve().then(function () {
        return Po
      }),
      Promise.resolve().then(function () {
        return Do
      }),
      Promise.resolve().then(function () {
        return gs
      }),
      Promise.resolve().then(function () {
        return ws
      }),
      Promise.resolve().then(function () {
        return ys
      }),
      Promise.resolve().then(function () {
        return ks
      }),
      Promise.resolve().then(function () {
        return Si
      }),
      Promise.resolve().then(function () {
        return Ri
      }),
      Promise.resolve().then(function () {
        return Ti
      }),
      Promise.resolve().then(function () {
        return Li
      }),
      Promise.resolve().then(function () {
        return Di
      }),
      Promise.resolve().then(function () {
        return Mi
      }),
      Promise.resolve().then(function () {
        return qi
      }),
      Promise.resolve().then(function () {
        return Hi
      }),
      Promise.resolve().then(function () {
        return ua
      }),
      Promise.resolve().then(function () {
        return Vs
      }),
      Promise.resolve().then(function () {
        return Ra
      }),
      Promise.resolve().then(function () {
        return Ma
      }),
      Promise.resolve().then(function () {
        return ya
      }),
      Promise.resolve().then(function () {
        return Wa
      }),
      Promise.resolve().then(function () {
        return si
      }),
      Promise.resolve().then(function () {
        return Xa
      }),
      Promise.resolve().then(function () {
        return Qa
      }),
      Promise.resolve().then(function () {
        return ec
      }),
      Promise.resolve().then(function () {
        return cc
      }),
      Promise.resolve().then(function () {
        return uc
      }),
      Promise.resolve().then(function () {
        return dc
      }),
      Promise.resolve().then(function () {
        return hc
      }),
      Promise.resolve().then(function () {
        return vc
      }),
      Promise.resolve().then(function () {
        return Ac
      }),
      Promise.resolve().then(function () {
        return zc
      }),
      Promise.resolve().then(function () {
        return qc
      }),
      Promise.resolve().then(function () {
        return Yc
      }),
      Promise.resolve().then(function () {
        return Kc
      }),
      Promise.resolve().then(function () {
        return Qc
      }),
      Promise.resolve().then(function () {
        return sl
      }),
      Promise.resolve().then(function () {
        return ea
      }),
      Promise.resolve().then(function () {
        return dl
      }),
      Promise.resolve().then(function () {
        return ml
      }),
      Promise.resolve().then(function () {
        return kl
      }),
      Promise.resolve().then(function () {
        return $l
      }),
      Promise.resolve().then(function () {
        return Sl
      }),
      Promise.resolve().then(function () {
        return Rl
      }),
      Promise.resolve().then(function () {
        return Il
      }),
      Promise.resolve().then(function () {
        return Ol
      }),
      Promise.resolve().then(function () {
        return zr
      }),
      Promise.resolve().then(function () {
        return Wl
      }),
    ]
    ;(async () => {
      const [t, { ui: n }, ...r] = await Promise.all(e)
      try {
        n.show(),
          await (async function () {
            'loading' === document.readyState &&
              (await new Promise((e) =>
                document.addEventListener('DOMContentLoaded', e)
              ))
          })(),
          await t.runAll(r)
      } finally {
        n.enable()
      }
    })().catch((e) => {
      console.error(e)
    })
    const t = !!window.require
    if (!t) {
      const e = function (e, t) {
        const n = e.map((e) => {
          if (!(e in window.require.modules))
            throw new Error('Unsupported dependency name: ' + e)
          return window.require.modules[e]
        })
        Promise.all(n).then((e) => t(...e))
      }
      ;(e.modules = {}), (window.require = e)
    }
    function n(e, n) {
      t || (window.require.modules[e] = n)
    }
    const r = new Map()
    function o(e, ...t) {
      if (!r.has(e)) return
      if (
        (Array.from(r.get(e)).forEach((e) => {
          try {
            e(...t)
          } catch (t) {
            o(
              'error',
              `Error when calling function ${e.name}. See developer console.`
            ),
              console.error(t)
          }
        }),
        window.parent === window.self)
      )
        return
      const n = t.map((e) => String(JSON.stringify(e.stack || e)))
      window.parent.postMessage(
        { topic: e, args: n },
        window.parent.location.origin
      )
    }
    function s(e, t, n = { once: !1 }) {
      return n.once
        ? s(e, function n(...o) {
            !(function ({ topic: e, cb: t }) {
              const n = r.get(e)
              if (!n || !n.has(t))
                return console.warn('Already unsubscribed:', e, t), !1
              n.delete(t)
            })({ topic: e, cb: n }),
              t(...o)
          })
        : (r.has(e) ? r.get(e).add(t) : r.set(e, new Set([t])),
          { topic: e, cb: t })
    }
    s('error', (e) => {
      console.error(e, e.stack)
    }),
      s('warn', (e) => {
        console.warn(e)
      }),
      n('core/pubsubhub', { sub: s })
    const i = {},
      a = (e) => Object.assign(i, e),
      c = ['githubToken', 'githubUser']
    s('start-all', a),
      s('amend-user-config', a),
      s('end-all', () => {
        const e = document.createElement('script')
        ;(e.id = 'initialUserConfig'), (e.type = 'application/json')
        for (const e of c) e in i && delete i[e]
        ;(e.innerHTML = JSON.stringify(i, null, 2)),
          document.head.appendChild(e)
      }),
      s(
        'start-all',
        function (e) {
          const t = new URLSearchParams(document.location.search),
            n = Array.from(t)
              .filter(([e, t]) => !!e && !!t)
              .map(([e, t]) => {
                const n = decodeURIComponent(e),
                  r = decodeURIComponent(t.replace(/%3D/g, '='))
                let o
                try {
                  o = JSON.parse(r)
                } catch {
                  o = r
                }
                return [n, o]
              }),
            r = Object.fromEntries(n)
          Object.assign(e, r), o('amend-user-config', r)
        },
        { once: !0 }
      )
    class l {
      constructor() {
        this._respecDonePromise = new Promise((e) => {
          s('end-all', e, { once: !0 })
        })
      }
      get version() {
        return window.respecVersion
      }
      get ready() {
        return this._respecDonePromise
      }
    }
    let u
    const d = new Promise((e) => {
      u = e
    })
    let p
    s(
      'plugins-done',
      async (e) => {
        const t = []
        if (Array.isArray(e.postProcess)) {
          const n = e.postProcess
              .filter((e) => {
                const t = 'function' == typeof e
                return (
                  t ||
                    o(
                      'error',
                      'Every item in `postProcess` must be a JS function.'
                    ),
                  t
                )
              })
              .map(async (t) => {
                try {
                  return await t(e, document)
                } catch (e) {
                  o(
                    'error',
                    `Function ${t.name} threw an error during \`postProcess\`. See developer console.`
                  ),
                    console.error(e)
                }
              }),
            r = await Promise.all(n)
          t.push(...r)
        }
        'function' == typeof e.afterEnd &&
          t.push(await e.afterEnd(e, document)),
          u(t)
      },
      { once: !0 }
    )
    const f = new Promise((e) => {
      p = e
    })
    s(
      'start-all',
      async (e) => {
        const t = []
        if (Array.isArray(e.preProcess)) {
          const n = e.preProcess
              .filter((e) => {
                const t = 'function' == typeof e
                return (
                  t ||
                    o(
                      'error',
                      'Every item in `preProcess` must be a JS function.'
                    ),
                  t
                )
              })
              .map(async (t) => {
                try {
                  return await t(e, document)
                } catch (e) {
                  o(
                    'error',
                    `Function ${t.name} threw an error during \`preProcess\`. See developer console.`
                  ),
                    console.error(e)
                }
              }),
            r = await Promise.all(n)
          t.push(...r)
        }
        p(t)
      },
      { once: !0 }
    )
    const h = document.documentElement
    h &&
      !h.hasAttribute('lang') &&
      ((h.lang = 'en'), h.hasAttribute('dir') || (h.dir = 'ltr'))
    const m = {},
      g = h.lang
    var b = Object.freeze({
      __proto__: null,
      name: 'core/l10n',
      l10n: m,
      lang: g,
      run: function (e) {
        e.l10n = m[g] || m.en
      },
    })
    let w, y
    const v = new WeakMap(),
      k = new WeakMap(),
      x = new WeakMap(),
      $ = new WeakMap(),
      _ = new WeakMap()
    let S = {
      get(e, t, n) {
        if (e instanceof IDBTransaction) {
          if ('done' === t) return k.get(e)
          if ('objectStoreNames' === t) return e.objectStoreNames || x.get(e)
          if ('store' === t)
            return n.objectStoreNames[1]
              ? void 0
              : n.objectStore(n.objectStoreNames[0])
        }
        return E(e[t])
      },
      set: (e, t, n) => ((e[t] = n), !0),
      has: (e, t) =>
        (e instanceof IDBTransaction && ('done' === t || 'store' === t)) ||
        t in e,
    }
    function C(e) {
      return e !== IDBDatabase.prototype.transaction ||
        'objectStoreNames' in IDBTransaction.prototype
        ? (
            y ||
            (y = [
              IDBCursor.prototype.advance,
              IDBCursor.prototype.continue,
              IDBCursor.prototype.continuePrimaryKey,
            ])
          ).includes(e)
          ? function (...t) {
              return e.apply(A(this), t), E(v.get(this))
            }
          : function (...t) {
              return E(e.apply(A(this), t))
            }
        : function (t, ...n) {
            const r = e.call(A(this), t, ...n)
            return x.set(r, t.sort ? t.sort() : [t]), E(r)
          }
    }
    function R(e) {
      return 'function' == typeof e
        ? C(e)
        : (e instanceof IDBTransaction &&
            (function (e) {
              if (k.has(e)) return
              const t = new Promise((t, n) => {
                const r = () => {
                    e.removeEventListener('complete', o),
                      e.removeEventListener('error', s),
                      e.removeEventListener('abort', s)
                  },
                  o = () => {
                    t(), r()
                  },
                  s = () => {
                    n(e.error || new DOMException('AbortError', 'AbortError')),
                      r()
                  }
                e.addEventListener('complete', o),
                  e.addEventListener('error', s),
                  e.addEventListener('abort', s)
              })
              k.set(e, t)
            })(e),
          (t = e),
          (
            w ||
            (w = [
              IDBDatabase,
              IDBObjectStore,
              IDBIndex,
              IDBCursor,
              IDBTransaction,
            ])
          ).some((e) => t instanceof e)
            ? new Proxy(e, S)
            : e)
      var t
    }
    function E(e) {
      if (e instanceof IDBRequest)
        return (function (e) {
          const t = new Promise((t, n) => {
            const r = () => {
                e.removeEventListener('success', o),
                  e.removeEventListener('error', s)
              },
              o = () => {
                t(E(e.result)), r()
              },
              s = () => {
                n(e.error), r()
              }
            e.addEventListener('success', o), e.addEventListener('error', s)
          })
          return (
            t
              .then((t) => {
                t instanceof IDBCursor && v.set(t, e)
              })
              .catch(() => {}),
            _.set(t, e),
            t
          )
        })(e)
      if ($.has(e)) return $.get(e)
      const t = R(e)
      return t !== e && ($.set(e, t), _.set(t, e)), t
    }
    const A = (e) => _.get(e)
    const T = ['get', 'getKey', 'getAll', 'getAllKeys', 'count'],
      L = ['put', 'add', 'delete', 'clear'],
      P = new Map()
    function I(e, t) {
      if (!(e instanceof IDBDatabase) || t in e || 'string' != typeof t) return
      if (P.get(t)) return P.get(t)
      const n = t.replace(/FromIndex$/, ''),
        r = t !== n,
        o = L.includes(n)
      if (
        !(n in (r ? IDBIndex : IDBObjectStore).prototype) ||
        (!o && !T.includes(n))
      )
        return
      const s = async function (e, ...t) {
        const s = this.transaction(e, o ? 'readwrite' : 'readonly')
        let i = s.store
        r && (i = i.index(t.shift()))
        const a = await i[n](...t)
        return o && (await s.done), a
      }
      return P.set(t, s), s
    }
    S = ((e) => ({
      ...e,
      get: (t, n, r) => I(t, n) || e.get(t, n, r),
      has: (t, n) => !!I(t, n) || e.has(t, n),
    }))(S)
    var N = Object.freeze({
      __proto__: null,
      deleteDB: function (e, { blocked: t } = {}) {
        const n = indexedDB.deleteDatabase(e)
        return (
          t && n.addEventListener('blocked', () => t()), E(n).then(() => {})
        )
      },
      openDB: function (
        e,
        t,
        { blocked: n, upgrade: r, blocking: o, terminated: s } = {}
      ) {
        const i = indexedDB.open(e, t),
          a = E(i)
        return (
          r &&
            i.addEventListener('upgradeneeded', (e) => {
              r(E(i.result), e.oldVersion, e.newVersion, E(i.transaction))
            }),
          n && i.addEventListener('blocked', () => n()),
          a
            .then((e) => {
              s && e.addEventListener('close', () => s()),
                o && e.addEventListener('versionchange', () => o())
            })
            .catch(() => {}),
          a
        )
      },
      unwrap: A,
      wrap: E,
    })
    function D(
      e,
      t,
      n,
      r,
      o,
      { level: s = 'error', autofix: i, ruleName: a } = {}
    ) {
      function c(n) {
        return n > 0 ? e.slice(t, t + n) : e.slice(Math.max(t + n, 0), t)
      }
      function l(n, { precedes: r } = {}) {
        const o = n.map((e) => e.trivia + e.value).join(''),
          s = e[t]
        return 'eof' === s.type
          ? o
          : r
          ? o + s.trivia
          : o.slice(s.trivia.length)
      }
      const u =
          'eof' !== e[t].type ? e[t].line : e.length > 1 ? e[t - 1].line : 1,
        d = (function (e) {
          const t = e.split('\n')
          return t[t.length - 1]
        })(l(c(-5), { precedes: !0 })),
        p = c(5),
        f = l(p),
        h = d + f.split('\n')[0] + '\n' + (' '.repeat(d.length) + '^'),
        m = 'Syntax' === o ? 'since' : 'inside',
        g = `${o} error at line ${u}${e.name ? ' in ' + e.name : ''}${
          n && n.name
            ? `, ${m} \`${n.partial ? 'partial ' : ''}${(function (e) {
                const t = [e]
                for (; e && e.parent; ) {
                  const { parent: n } = e
                  t.unshift(n), (e = n)
                }
                return t
                  .map((e) =>
                    (function (e, t) {
                      let n = e
                      return t && (n += ' ' + t), n
                    })(e.type, e.name)
                  )
                  .join(' -> ')
              })(n)}\``
            : ''
        }:\n${h}`
      return {
        message: `${g} ${r}`,
        bareMessage: r,
        context: g,
        line: u,
        sourceName: e.name,
        level: s,
        ruleName: a,
        autofix: i,
        input: f,
        tokens: p,
      }
    }
    function j(e, t, n, r) {
      return D(e, t, n, r, 'Syntax')
    }
    function O(e, t, n, r, o = {}) {
      return (o.ruleName = n), D(t.source, e.index, t, r, 'Validation', o)
    }
    class z {
      constructor({ source: e, tokens: t }) {
        Object.defineProperties(this, {
          source: { value: e },
          tokens: { value: t, writable: !0 },
          parent: { value: null, writable: !0 },
          this: { value: this },
        })
      }
      toJSON() {
        const e = { type: void 0, name: void 0, inheritance: void 0 }
        let t = this
        for (; t !== Object.prototype; ) {
          const n = Object.getOwnPropertyDescriptors(t)
          for (const [t, r] of Object.entries(n))
            (r.enumerable || r.get) && (e[t] = this[t])
          t = Object.getPrototypeOf(t)
        }
        return e
      }
    }
    function M(e, t, { useNullableInner: n } = {}) {
      if (!e.union) {
        const r = t.unique.get(e.idlType)
        if (!r) return
        if ('typedef' === r.type) {
          const { typedefIncludesDictionary: n } = t.cache
          if (n.has(r)) return n.get(r)
          t.cache.typedefIncludesDictionary.set(r, void 0)
          const o = M(r.idlType, t)
          if ((t.cache.typedefIncludesDictionary.set(r, o), o))
            return { reference: e, dictionary: o.dictionary }
        }
        if ('dictionary' === r.type && (n || !e.nullable))
          return { reference: e, dictionary: r }
      }
      for (const n of e.subtype) {
        const e = M(n, t)
        if (e) return n.union ? e : { reference: n, dictionary: e.dictionary }
      }
    }
    function W(e, t) {
      if (t.cache.dictionaryIncludesRequiredField.has(e))
        return t.cache.dictionaryIncludesRequiredField.get(e)
      if (
        (t.cache.dictionaryIncludesRequiredField.set(e, void 0), e.inheritance)
      ) {
        const n = t.unique.get(e.inheritance)
        if (!n) return !0
        if (W(n, t)) return !0
      }
      const n = e.members.some((e) => e.required)
      return t.cache.dictionaryIncludesRequiredField.set(e, n), n
    }
    class U extends Array {
      constructor({ source: e, tokens: t }) {
        super(),
          Object.defineProperties(this, {
            source: { value: e },
            tokens: { value: t },
            parent: { value: null, writable: !0 },
          })
      }
    }
    class F extends z {
      static parser(e, t) {
        return () => {
          const n = e.consume(t)
          if (n) return new F({ source: e.source, tokens: { value: n } })
        }
      }
      get value() {
        return oe(this.tokens.value.value)
      }
    }
    function q(e, t) {
      return se(e, { parser: F.parser(e, t), listName: t + ' list' })
    }
    const B = ['identifier', 'decimal', 'integer', 'string'],
      H = new Map([
        ...[
          'NoInterfaceObject',
          'LenientSetter',
          'LenientThis',
          'TreatNonObjectAsNull',
          'Unforgeable',
        ].map((e) => [e, 'Legacy' + e]),
        ['NamedConstructor', 'LegacyFactoryFunction'],
        ['OverrideBuiltins', 'LegacyOverrideBuiltIns'],
        ['TreatNullAs', 'LegacyNullToEmptyString'],
      ])
    function G(e) {
      for (const t of B) {
        const n = q(e, t)
        if (n.length) return n
      }
      e.error(
        'Expected identifiers, strings, decimals, or integers but none found'
      )
    }
    class V extends z {
      static parse(e) {
        const t = { assign: e.consume('=') },
          n = ge(new V({ source: e.source, tokens: t }))
        return (
          t.assign && (t.secondaryName = e.consume(...B)),
          (t.open = e.consume('(')),
          t.open
            ? ((n.list = n.rhsIsList ? G(e) : le(e)),
              (t.close =
                e.consume(')') ||
                e.error(
                  'Unexpected token in extended attribute argument list'
                )))
            : n.hasRhs &&
              !t.secondaryName &&
              e.error('No right hand side to extended attribute assignment'),
          n.this
        )
      }
      get rhsIsList() {
        return this.tokens.assign && !this.tokens.secondaryName
      }
      get rhsType() {
        return this.rhsIsList
          ? this.list[0].tokens.value.type + '-list'
          : this.tokens.secondaryName
          ? this.tokens.secondaryName.type
          : null
      }
    }
    class Z extends z {
      static parse(e) {
        const t = e.consume('identifier')
        if (t)
          return new Z({
            source: e.source,
            tokens: { name: t },
            params: V.parse(e),
          })
      }
      constructor({ source: e, tokens: t, params: n }) {
        super({ source: e, tokens: t }),
          (n.parent = this),
          Object.defineProperty(this, 'params', { value: n })
      }
      get type() {
        return 'extended-attribute'
      }
      get name() {
        return this.tokens.name.value
      }
      get rhs() {
        const { rhsType: e, tokens: t, list: n } = this.params
        if (!e) return null
        return {
          type: e,
          value: this.params.rhsIsList ? n : oe(t.secondaryName.value),
        }
      }
      get arguments() {
        const { rhsIsList: e, list: t } = this.params
        return !t || e ? [] : t
      }
      *validate(e) {
        const { name: t } = this
        if ('LegacyNoInterfaceObject' === t) {
          const e =
            '`[LegacyNoInterfaceObject]` extended attribute is an undesirable feature that may be removed from Web IDL in the future. Refer to the [relevant upstream PR](https://github.com/heycam/webidl/pull/609) for more information.'
          yield O(this.tokens.name, this, 'no-nointerfaceobject', e, {
            level: 'warning',
          })
        } else if (H.has(t)) {
          const e = `\`[${t}]\` extended attribute is a legacy feature that is now renamed to \`[${H.get(
            t
          )}]\`. Refer to the [relevant upstream PR](https://github.com/heycam/webidl/pull/870) for more information.`
          yield O(this.tokens.name, this, 'renamed-legacy', e, {
            level: 'warning',
            autofix:
              ((n = this),
              () => {
                const { name: e } = n
                ;(n.tokens.name.value = H.get(e)),
                  'TreatNullAs' === e && (n.params.tokens = {})
              }),
          })
        }
        var n
        for (const t of this.arguments) yield* t.validate(e)
      }
    }
    class Y extends U {
      static parse(e) {
        const t = {}
        if (((t.open = e.consume('[')), !t.open)) return new Y({})
        const n = new Y({ source: e.source, tokens: t })
        return (
          n.push(...se(e, { parser: Z.parse, listName: 'extended attribute' })),
          (t.close =
            e.consume(']') ||
            e.error('Unexpected closing token of extended attribute')),
          n.length || e.error('Found an empty extended attribute'),
          e.probe('[') &&
            e.error(
              'Illegal double extended attribute lists, consider merging them'
            ),
          n
        )
      }
      *validate(e) {
        for (const t of this) yield* t.validate(e)
      }
    }
    function K(e, t) {
      const n = e.consume('?')
      n && (t.tokens.nullable = n),
        e.probe('?') && e.error("Can't nullable more than once")
    }
    function J(e, t) {
      let n =
        (function (e, t) {
          const n = e.consume(
            'FrozenArray',
            'ObservableArray',
            'Promise',
            'sequence',
            'record'
          )
          if (!n) return
          const r = ge(new X({ source: e.source, tokens: { base: n } }))
          switch (
            ((r.tokens.open =
              e.consume('<') || e.error('No opening bracket after ' + n.type)),
            n.type)
          ) {
            case 'Promise': {
              e.probe('[') &&
                e.error('Promise type cannot have extended attribute')
              const n = de(e, t) || e.error('Missing Promise subtype')
              r.subtype.push(n)
              break
            }
            case 'sequence':
            case 'FrozenArray':
            case 'ObservableArray': {
              const o = ue(e, t) || e.error(`Missing ${n.type} subtype`)
              r.subtype.push(o)
              break
            }
            case 'record': {
              e.probe('[') &&
                e.error('Record key cannot have extended attribute')
              const n =
                  e.consume(...ye) ||
                  e.error('Record key must be one of: ' + ye.join(', ')),
                o = new X({ source: e.source, tokens: { base: n } })
              ;(o.tokens.separator =
                e.consume(',') ||
                e.error('Missing comma after record key type')),
                (o.type = t)
              const s = ue(e, t) || e.error('Error parsing generic type record')
              r.subtype.push(o, s)
              break
            }
          }
          return (
            r.idlType || e.error('Error parsing generic type ' + n.type),
            (r.tokens.close =
              e.consume('>') ||
              e.error('Missing closing bracket after ' + n.type)),
            r.this
          )
        })(e, t) || ce(e)
      if (!n) {
        const t = e.consume('identifier', ...ye, ...we)
        if (!t) return
        ;(n = new X({ source: e.source, tokens: { base: t } })),
          e.probe('<') && e.error('Unsupported generic type ' + t.value)
      }
      return (
        'Promise' === n.generic &&
          e.probe('?') &&
          e.error('Promise type cannot be nullable'),
        (n.type = t || null),
        K(e, n),
        n.nullable &&
          'any' === n.idlType &&
          e.error('Type `any` cannot be made nullable'),
        n
      )
    }
    class X extends z {
      static parse(e, t) {
        return (
          J(e, t) ||
          (function (e, t) {
            const n = {}
            if (((n.open = e.consume('(')), !n.open)) return
            const r = ge(new X({ source: e.source, tokens: n }))
            for (r.type = t || null; ; ) {
              const t =
                ue(e) ||
                e.error("No type after open parenthesis or 'or' in union type")
              'any' === t.idlType &&
                e.error('Type `any` cannot be included in a union type'),
                'Promise' === t.generic &&
                  e.error('Type `Promise` cannot be included in a union type'),
                r.subtype.push(t)
              const n = e.consume('or')
              if (!n) break
              t.tokens.separator = n
            }
            return (
              r.idlType.length < 2 &&
                e.error(
                  'At least two types are expected in a union type but found less'
                ),
              (n.close = e.consume(')') || e.error('Unterminated union type')),
              K(e, r),
              r.this
            )
          })(e, t)
        )
      }
      constructor({ source: e, tokens: t }) {
        super({ source: e, tokens: t }),
          Object.defineProperty(this, 'subtype', { value: [], writable: !0 }),
          (this.extAttrs = new Y({}))
      }
      get generic() {
        return this.subtype.length && this.tokens.base
          ? this.tokens.base.value
          : ''
      }
      get nullable() {
        return Boolean(this.tokens.nullable)
      }
      get union() {
        return Boolean(this.subtype.length) && !this.tokens.base
      }
      get idlType() {
        if (this.subtype.length) return this.subtype
        return oe(
          [this.tokens.prefix, this.tokens.base, this.tokens.postfix]
            .filter((e) => e)
            .map((e) => e.value)
            .join(' ')
        )
      }
      *validate(e) {
        if ((yield* this.extAttrs.validate(e), 'void' === this.idlType)) {
          const e =
            '`void` is now replaced by `undefined`. Refer to the [relevant GitHub issue](https://github.com/heycam/webidl/issues/60) for more information.'
          yield O(this.tokens.base, this, 'replace-void', e, {
            autofix:
              ((t = this),
              () => {
                t.tokens.base.value = 'undefined'
              }),
          })
        }
        var t
        const n = !this.union && e.unique.get(this.idlType),
          r = this.union ? this : n && 'typedef' === n.type ? n.idlType : void 0
        if (r && this.nullable) {
          const { reference: t } = M(r, e) || {}
          if (t) {
            const e = (this.union ? t : this).tokens.base,
              n = 'Nullable union cannot include a dictionary type.'
            yield O(e, this, 'no-nullable-union-dict', n)
          }
        } else for (const t of this.subtype) yield* t.validate(e)
      }
    }
    class Q extends z {
      static parse(e) {
        const t = e.consume('=')
        if (!t) return null
        const n =
            ie(e) ||
            e.consume('string', 'null', '[', '{') ||
            e.error('No value for default'),
          r = [n]
        if ('[' === n.type) {
          const t =
            e.consume(']') || e.error('Default sequence value must be empty')
          r.push(t)
        } else if ('{' === n.type) {
          const t =
            e.consume('}') || e.error('Default dictionary value must be empty')
          r.push(t)
        }
        return new Q({ source: e.source, tokens: { assign: t }, expression: r })
      }
      constructor({ source: e, tokens: t, expression: n }) {
        super({ source: e, tokens: t }),
          (n.parent = this),
          Object.defineProperty(this, 'expression', { value: n })
      }
      get type() {
        return ae(this.expression[0]).type
      }
      get value() {
        return ae(this.expression[0]).value
      }
      get negative() {
        return ae(this.expression[0]).negative
      }
    }
    class ee extends z {
      static parse(e) {
        const t = e.position,
          n = {},
          r = ge(new ee({ source: e.source, tokens: n }))
        return (
          (r.extAttrs = Y.parse(e)),
          (n.optional = e.consume('optional')),
          (r.idlType = ue(e, 'argument-type')),
          r.idlType
            ? (n.optional || (n.variadic = e.consume('...')),
              (n.name = e.consume('identifier', ...ve)),
              n.name
                ? ((r.default = n.optional ? Q.parse(e) : null), r.this)
                : e.unconsume(t))
            : e.unconsume(t)
        )
      }
      get type() {
        return 'argument'
      }
      get optional() {
        return !!this.tokens.optional
      }
      get variadic() {
        return !!this.tokens.variadic
      }
      get name() {
        return oe(this.tokens.name.value)
      }
      *validate(e) {
        yield* this.idlType.validate(e)
        const t = M(this.idlType, e, { useNullableInner: !0 })
        if (t)
          if (this.idlType.nullable) {
            const e = 'Dictionary arguments cannot be nullable.'
            yield O(this.tokens.name, this, 'no-nullable-dict-arg', e)
          } else if (this.optional) {
            if (!this.default) {
              const e =
                'Optional dictionary arguments must have a default value of `{}`.'
              yield O(this.tokens.name, this, 'dict-arg-default', e, {
                autofix: te(this),
              })
            }
          } else if (
            this.parent &&
            !W(t.dictionary, e) &&
            (function (e) {
              const t = e.parent.arguments || e.parent.list,
                n = t.indexOf(e)
              return !t.slice(n + 1).some((e) => !e.optional)
            })(this)
          ) {
            const e =
              'Dictionary argument must be optional if it has no required fields'
            yield O(this.tokens.name, this, 'dict-arg-optional', e, {
              autofix:
                ((n = this),
                () => {
                  const e = me(n.idlType)
                  ;(n.tokens.optional = {
                    type: 'optional',
                    value: 'optional',
                    trivia: e.trivia,
                  }),
                    (e.trivia = ' '),
                    te(n)()
                }),
            })
          }
        var n
      }
    }
    function te(e) {
      return () => {
        e.default = Q.parse(new _e(' = {}'))
      }
    }
    class ne extends z {
      static parse(e, { special: t, regular: n } = {}) {
        const r = { special: t },
          o = ge(new ne({ source: e.source, tokens: r }))
        return t &&
          'stringifier' === t.value &&
          ((r.termination = e.consume(';')), r.termination)
          ? ((o.arguments = []), o)
          : (t || n || (r.special = e.consume('getter', 'setter', 'deleter')),
            (o.idlType = de(e) || e.error('Missing return type')),
            (r.name = e.consume('identifier', 'includes')),
            (r.open = e.consume('(') || e.error('Invalid operation')),
            (o.arguments = le(e)),
            (r.close = e.consume(')') || e.error('Unterminated operation')),
            (r.termination =
              e.consume(';') ||
              e.error('Unterminated operation, expected `;`')),
            o.this)
      }
      get type() {
        return 'operation'
      }
      get name() {
        const { name: e } = this.tokens
        return e ? oe(e.value) : ''
      }
      get special() {
        return this.tokens.special ? this.tokens.special.value : ''
      }
      *validate(e) {
        if (!this.name && ['', 'static'].includes(this.special)) {
          const e =
            'Regular or static operations must have both a return type and an identifier.'
          yield O(this.tokens.open, this, 'incomplete-op', e)
        }
        this.idlType && (yield* this.idlType.validate(e))
        for (const t of this.arguments) yield* t.validate(e)
      }
    }
    class re extends z {
      static parse(
        e,
        { special: t, noInherit: n = !1, readonly: r = !1 } = {}
      ) {
        const o = e.position,
          s = { special: t },
          i = ge(new re({ source: e.source, tokens: s }))
        if (
          (t || n || (s.special = e.consume('inherit')),
          'inherit' === i.special &&
            e.probe('readonly') &&
            e.error('Inherited attributes cannot be read-only'),
          (s.readonly = e.consume('readonly')),
          r &&
            !s.readonly &&
            e.probe('attribute') &&
            e.error('Attributes must be readonly in this context'),
          (s.base = e.consume('attribute')),
          s.base)
        ) {
          switch (
            ((i.idlType =
              ue(e, 'attribute-type') || e.error('Attribute lacks a type')),
            i.idlType.generic)
          ) {
            case 'sequence':
            case 'record':
              e.error(`Attributes cannot accept ${i.idlType.generic} types`)
          }
          return (
            (s.name =
              e.consume('identifier', 'async', 'required') ||
              e.error('Attribute lacks a name')),
            (s.termination =
              e.consume(';') ||
              e.error('Unterminated attribute, expected `;`')),
            i.this
          )
        }
        e.unconsume(o)
      }
      get type() {
        return 'attribute'
      }
      get special() {
        return this.tokens.special ? this.tokens.special.value : ''
      }
      get readonly() {
        return !!this.tokens.readonly
      }
      get name() {
        return oe(this.tokens.name.value)
      }
      *validate(e) {
        yield* this.extAttrs.validate(e), yield* this.idlType.validate(e)
      }
    }
    function oe(e) {
      return e.startsWith('_') ? e.slice(1) : e
    }
    function se(e, { parser: t, allowDangler: n, listName: r = 'list' }) {
      const o = t(e)
      if (!o) return []
      o.tokens.separator = e.consume(',')
      const s = [o]
      for (; o.tokens.separator; ) {
        const o = t(e)
        if (!o) {
          n || e.error('Trailing comma in ' + r)
          break
        }
        if (
          ((o.tokens.separator = e.consume(',')),
          s.push(o),
          !o.tokens.separator)
        )
          break
      }
      return s
    }
    function ie(e) {
      return e.consume(
        'true',
        'false',
        'Infinity',
        '-Infinity',
        'NaN',
        'decimal',
        'integer'
      )
    }
    function ae({ type: e, value: t }) {
      switch (e) {
        case 'true':
        case 'false':
          return { type: 'boolean', value: 'true' === e }
        case 'Infinity':
        case '-Infinity':
          return { type: 'Infinity', negative: e.startsWith('-') }
        case '[':
          return { type: 'sequence', value: [] }
        case '{':
          return { type: 'dictionary' }
        case 'decimal':
        case 'integer':
          return { type: 'number', value: t }
        case 'string':
          return { type: 'string', value: t.slice(1, -1) }
        default:
          return { type: e }
      }
    }
    function ce(e) {
      const { source: t } = e,
        n =
          (function () {
            const n = e.consume('unsigned'),
              r = e.consume('short', 'long')
            if (r) {
              const o = e.consume('long')
              return new X({
                source: t,
                tokens: { prefix: n, base: r, postfix: o },
              })
            }
            n && e.error('Failed to parse integer type')
          })() ||
          (function () {
            const n = e.consume('unrestricted'),
              r = e.consume('float', 'double')
            if (r) return new X({ source: t, tokens: { prefix: n, base: r } })
            n && e.error('Failed to parse float type')
          })()
      if (n) return n
      const r = e.consume('boolean', 'byte', 'octet', 'undefined')
      return r ? new X({ source: t, tokens: { base: r } }) : void 0
    }
    function le(e) {
      return se(e, { parser: ee.parse, listName: 'arguments list' })
    }
    function ue(e, t) {
      const n = Y.parse(e),
        r = X.parse(e, t)
      return r && (ge(r).extAttrs = n), r
    }
    function de(e, t) {
      const n = X.parse(e, t || 'return-type')
      if (n) return n
      const r = e.consume('void')
      if (r) {
        const t = new X({ source: e.source, tokens: { base: r } })
        return (t.type = 'return-type'), t
      }
    }
    function pe(e) {
      const t = e.consume('stringifier')
      if (!t) return
      return (
        re.parse(e, { special: t }) ||
        ne.parse(e, { special: t }) ||
        e.error('Unterminated stringifier')
      )
    }
    function fe(e) {
      const t = e.split('\n')
      if (t.length) {
        const e = t[t.length - 1].match(/^\s+/)
        if (e) return e[0]
      }
      return ''
    }
    function he(e) {
      return () => {
        if (e.extAttrs.length) {
          const t = new _e('Exposed=Window,'),
            n = Z.parse(t)
          n.tokens.separator = t.consume(',')
          const r = e.extAttrs[0]
          ;/^\s/.test(r.tokens.name.trivia) ||
            (r.tokens.name.trivia = ' ' + r.tokens.name.trivia),
            e.extAttrs.unshift(n)
        } else {
          ge(e).extAttrs = Y.parse(new _e('[Exposed=Window]'))
          const t = e.tokens.base.trivia
          ;(e.extAttrs.tokens.open.trivia = t),
            (e.tokens.base.trivia = '\n' + fe(t))
        }
      }
    }
    function me(e) {
      if (e.extAttrs.length) return e.extAttrs.tokens.open
      if ('operation' === e.type && !e.special) return me(e.idlType)
      return Object.values(e.tokens).sort((e, t) => e.index - t.index)[0]
    }
    function ge(e, t) {
      return (
        t || (t = e),
        e
          ? new Proxy(e, {
              get(e, t) {
                const n = e[t]
                return Array.isArray(n) ? ge(n, e) : n
              },
              set(e, n, r) {
                if (((e[n] = r), !r)) return !0
                if (Array.isArray(r))
                  for (const e of r) void 0 !== e.parent && (e.parent = t)
                else void 0 !== r.parent && (r.parent = t)
                return !0
              },
            })
          : e
      )
    }
    const be = {
        decimal: /-?(?=[0-9]*\.|[0-9]+[eE])(([0-9]+\.[0-9]*|[0-9]*\.[0-9]+)([Ee][-+]?[0-9]+)?|[0-9]+[Ee][-+]?[0-9]+)/y,
        integer: /-?(0([Xx][0-9A-Fa-f]+|[0-7]*)|[1-9][0-9]*)/y,
        identifier: /[_-]?[A-Za-z][0-9A-Z_a-z-]*/y,
        string: /"[^"]*"/y,
        whitespace: /[\t\n\r ]+/y,
        comment: /((\/(\/.*|\*([^*]|\*[^/])*\*\/)[\t\n\r ]*)+)/y,
        other: /[^\t\n\r 0-9A-Za-z]/y,
      },
      we = [
        'ArrayBuffer',
        'DataView',
        'Int8Array',
        'Int16Array',
        'Int32Array',
        'Uint8Array',
        'Uint16Array',
        'Uint32Array',
        'Uint8ClampedArray',
        'Float32Array',
        'Float64Array',
        'any',
        'object',
        'symbol',
      ],
      ye = ['ByteString', 'DOMString', 'USVString'],
      ve = [
        'async',
        'attribute',
        'callback',
        'const',
        'constructor',
        'deleter',
        'dictionary',
        'enum',
        'getter',
        'includes',
        'inherit',
        'interface',
        'iterable',
        'maplike',
        'namespace',
        'partial',
        'required',
        'setlike',
        'setter',
        'static',
        'stringifier',
        'typedef',
        'unrestricted',
      ],
      ke = [
        '-Infinity',
        'FrozenArray',
        'Infinity',
        'NaN',
        'ObservableArray',
        'Promise',
        'boolean',
        'byte',
        'double',
        'false',
        'float',
        'long',
        'mixin',
        'null',
        'octet',
        'optional',
        'or',
        'readonly',
        'record',
        'sequence',
        'short',
        'true',
        'undefined',
        'unsigned',
        'void',
      ].concat(ve, ye, we),
      xe = [
        '(',
        ')',
        ',',
        '...',
        ':',
        ';',
        '<',
        '=',
        '>',
        '?',
        '[',
        ']',
        '{',
        '}',
      ],
      $e = ['_constructor', 'toString', '_toString']
    class _e {
      constructor(e) {
        ;(this.source = (function (e) {
          const t = []
          let n = 0,
            r = '',
            o = 1,
            s = 0
          for (; n < e.length; ) {
            const a = e.charAt(n)
            let c = -1
            if (
              (/[\t\n\r ]/.test(a)
                ? (c = i('whitespace', { noFlushTrivia: !0 }))
                : '/' === a && (c = i('comment', { noFlushTrivia: !0 })),
              -1 !== c)
            ) {
              const e = t.pop().value
              ;(o += (e.match(/\n/g) || []).length), (r += e), (s -= 1)
            } else if (/[-0-9.A-Z_a-z]/.test(a)) {
              if (
                ((c = i('decimal')), -1 === c && (c = i('integer')), -1 === c)
              ) {
                c = i('identifier')
                const e = t.length - 1,
                  n = t[e]
                if (-1 !== c) {
                  if ($e.includes(n.value)) {
                    const r =
                      oe(n.value) +
                      ' is a reserved identifier and must not be used.'
                    throw new Se(j(t, e, null, r))
                  }
                  ke.includes(n.value) && (n.type = n.value)
                }
              }
            } else '"' === a && (c = i('string'))
            for (const i of xe)
              if (e.startsWith(i, n)) {
                t.push({ type: i, value: i, trivia: r, line: o, index: s }),
                  (r = ''),
                  (n += i.length),
                  (c = n)
                break
              }
            if ((-1 === c && (c = i('other')), -1 === c))
              throw new Error('Token stream not progressing')
            ;(n = c), (s += 1)
          }
          return t.push({ type: 'eof', value: '', trivia: r }), t
          function i(i, { noFlushTrivia: a } = {}) {
            const c = be[i]
            c.lastIndex = n
            const l = c.exec(e)
            return l
              ? (t.push({ type: i, value: l[0], trivia: r, line: o, index: s }),
                a || (r = ''),
                c.lastIndex)
              : -1
          }
        })(e)),
          (this.position = 0)
      }
      error(e) {
        throw new Se(j(this.source, this.position, this.current, e))
      }
      probe(e) {
        return (
          this.source.length > this.position &&
          this.source[this.position].type === e
        )
      }
      consume(...e) {
        for (const t of e) {
          if (!this.probe(t)) continue
          const e = this.source[this.position]
          return this.position++, e
        }
      }
      unconsume(e) {
        this.position = e
      }
    }
    class Se extends Error {
      constructor({
        message: e,
        bareMessage: t,
        context: n,
        line: r,
        sourceName: o,
        input: s,
        tokens: i,
      }) {
        super(e),
          (this.name = 'WebIDLParseError'),
          (this.bareMessage = t),
          (this.context = n),
          (this.line = r),
          (this.sourceName = o),
          (this.input = s),
          (this.tokens = i)
      }
    }
    class Ce extends F {
      static parse(e) {
        const t = e.consume('string')
        if (t) return new Ce({ source: e.source, tokens: { value: t } })
      }
      get type() {
        return 'enum-value'
      }
      get value() {
        return super.value.slice(1, -1)
      }
    }
    class Re extends z {
      static parse(e) {
        const t = {}
        if (((t.base = e.consume('enum')), !t.base)) return
        t.name = e.consume('identifier') || e.error('No name for enum')
        const n = ge(new Re({ source: e.source, tokens: t }))
        return (
          (e.current = n.this),
          (t.open = e.consume('{') || e.error('Bodyless enum')),
          (n.values = se(e, {
            parser: Ce.parse,
            allowDangler: !0,
            listName: 'enumeration',
          })),
          e.probe('string') && e.error('No comma between enum values'),
          (t.close = e.consume('}') || e.error('Unexpected value in enum')),
          n.values.length || e.error('No value in enum'),
          (t.termination =
            e.consume(';') || e.error('No semicolon after enum')),
          n.this
        )
      }
      get type() {
        return 'enum'
      }
      get name() {
        return oe(this.tokens.name.value)
      }
    }
    class Ee extends z {
      static parse(e) {
        const t = e.consume('identifier')
        if (!t) return
        const n = { target: t }
        if (((n.includes = e.consume('includes')), n.includes))
          return (
            (n.mixin =
              e.consume('identifier') ||
              e.error('Incomplete includes statement')),
            (n.termination =
              e.consume(';') ||
              e.error('No terminating ; for includes statement')),
            new Ee({ source: e.source, tokens: n })
          )
        e.unconsume(t.index)
      }
      get type() {
        return 'includes'
      }
      get target() {
        return oe(this.tokens.target.value)
      }
      get includes() {
        return oe(this.tokens.mixin.value)
      }
    }
    class Ae extends z {
      static parse(e) {
        const t = {},
          n = ge(new Ae({ source: e.source, tokens: t }))
        if (((t.base = e.consume('typedef')), t.base))
          return (
            (n.idlType =
              ue(e, 'typedef-type') || e.error('Typedef lacks a type')),
            (t.name =
              e.consume('identifier') || e.error('Typedef lacks a name')),
            (e.current = n.this),
            (t.termination =
              e.consume(';') || e.error('Unterminated typedef, expected `;`')),
            n.this
          )
      }
      get type() {
        return 'typedef'
      }
      get name() {
        return oe(this.tokens.name.value)
      }
      *validate(e) {
        yield* this.idlType.validate(e)
      }
    }
    class Te extends z {
      static parse(e, t) {
        const n = { base: t },
          r = ge(new Te({ source: e.source, tokens: n }))
        return (
          (n.name =
            e.consume('identifier') || e.error('Callback lacks a name')),
          (e.current = r.this),
          (n.assign =
            e.consume('=') || e.error('Callback lacks an assignment')),
          (r.idlType = de(e) || e.error('Callback lacks a return type')),
          (n.open =
            e.consume('(') ||
            e.error('Callback lacks parentheses for arguments')),
          (r.arguments = le(e)),
          (n.close = e.consume(')') || e.error('Unterminated callback')),
          (n.termination =
            e.consume(';') || e.error('Unterminated callback, expected `;`')),
          r.this
        )
      }
      get type() {
        return 'callback'
      }
      get name() {
        return oe(this.tokens.name.value)
      }
      *validate(e) {
        yield* this.extAttrs.validate(e), yield* this.idlType.validate(e)
      }
    }
    class Le extends z {
      static parse(e, t, { type: n, inheritable: r, allowedMembers: o }) {
        const { tokens: s } = t
        for (
          s.name =
            e.consume('identifier') || e.error('Missing name in ' + t.type),
            e.current = t,
            t = ge(t),
            r &&
              Object.assign(
                s,
                (function (e) {
                  const t = e.consume(':')
                  return t
                    ? {
                        colon: t,
                        inheritance:
                          e.consume('identifier') ||
                          e.error('Inheritance lacks a type'),
                      }
                    : {}
                })(e)
              ),
            s.open = e.consume('{') || e.error('Bodyless ' + n),
            t.members = [];
          ;

        ) {
          if (((s.close = e.consume('}')), s.close))
            return (
              (s.termination =
                e.consume(';') || e.error('Missing semicolon after ' + n)),
              t.this
            )
          const r = Y.parse(e)
          let i
          for (const [t, ...n] of o) if (((i = ge(t(e, ...n))), i)) break
          i || e.error('Unknown member'),
            (i.extAttrs = r),
            t.members.push(i.this)
        }
      }
      get partial() {
        return !!this.tokens.partial
      }
      get name() {
        return oe(this.tokens.name.value)
      }
      get inheritance() {
        return this.tokens.inheritance
          ? oe(this.tokens.inheritance.value)
          : null
      }
      *validate(e) {
        for (const t of this.members) t.validate && (yield* t.validate(e))
      }
    }
    class Pe extends z {
      static parse(e) {
        const t = {}
        if (((t.base = e.consume('const')), !t.base)) return
        let n = ce(e)
        if (!n) {
          const t = e.consume('identifier') || e.error('Const lacks a type')
          n = new X({ source: e.source, tokens: { base: t } })
        }
        e.probe('?') && e.error('Unexpected nullable constant type'),
          (n.type = 'const-type'),
          (t.name = e.consume('identifier') || e.error('Const lacks a name')),
          (t.assign =
            e.consume('=') || e.error('Const lacks value assignment')),
          (t.value = ie(e) || e.error('Const lacks a value')),
          (t.termination =
            e.consume(';') || e.error('Unterminated const, expected `;`'))
        const r = new Pe({ source: e.source, tokens: t })
        return (ge(r).idlType = n), r
      }
      get type() {
        return 'const'
      }
      get name() {
        return oe(this.tokens.name.value)
      }
      get value() {
        return ae(this.tokens.value)
      }
    }
    class Ie extends z {
      static parse(e) {
        const t = e.position,
          n = {},
          r = ge(new Ie({ source: e.source, tokens: n }))
        if (
          ((n.readonly = e.consume('readonly')),
          n.readonly || (n.async = e.consume('async')),
          (n.base = n.readonly
            ? e.consume('maplike', 'setlike')
            : n.async
            ? e.consume('iterable')
            : e.consume('iterable', 'maplike', 'setlike')),
          !n.base)
        )
          return void e.unconsume(t)
        const { type: o } = r,
          s = 'maplike' === o,
          i = s || 'iterable' === o,
          a = r.async && 'iterable' === o
        n.open =
          e.consume('<') ||
          e.error(`Missing less-than sign \`<\` in ${o} declaration`)
        const c =
          ue(e) || e.error(`Missing a type argument in ${o} declaration`)
        return (
          (r.idlType = [c]),
          (r.arguments = []),
          i &&
            ((c.tokens.separator = e.consume(',')),
            c.tokens.separator
              ? r.idlType.push(ue(e))
              : s &&
                e.error(`Missing second type argument in ${o} declaration`)),
          (n.close =
            e.consume('>') ||
            e.error(`Missing greater-than sign \`>\` in ${o} declaration`)),
          e.probe('(') &&
            (a
              ? ((n.argsOpen = e.consume('(')),
                r.arguments.push(...le(e)),
                (n.argsClose =
                  e.consume(')') ||
                  e.error('Unterminated async iterable argument list')))
              : e.error('Arguments are only allowed for `async iterable`')),
          (n.termination =
            e.consume(';') ||
            e.error(`Missing semicolon after ${o} declaration`)),
          r.this
        )
      }
      get type() {
        return this.tokens.base.value
      }
      get readonly() {
        return !!this.tokens.readonly
      }
      get async() {
        return !!this.tokens.async
      }
      *validate(e) {
        for (const t of this.idlType) yield* t.validate(e)
        for (const t of this.arguments) yield* t.validate(e)
      }
    }
    class Ne extends z {
      static parse(e) {
        const t = e.consume('constructor')
        if (!t) return
        const n = { base: t }
        n.open = e.consume('(') || e.error('No argument list in constructor')
        const r = le(e)
        ;(n.close = e.consume(')') || e.error('Unterminated constructor')),
          (n.termination =
            e.consume(';') || e.error('No semicolon after constructor'))
        const o = new Ne({ source: e.source, tokens: n })
        return (ge(o).arguments = r), o
      }
      get type() {
        return 'constructor'
      }
      *validate(e) {
        this.idlType && (yield* this.idlType.validate(e))
        for (const t of this.arguments) yield* t.validate(e)
      }
    }
    function De(e) {
      const t = e.consume('static')
      if (!t) return
      return (
        re.parse(e, { special: t }) ||
        ne.parse(e, { special: t }) ||
        e.error('No body in static member')
      )
    }
    class je extends Le {
      static parse(e, t, { partial: n = null } = {}) {
        const r = { partial: n, base: t }
        return Le.parse(e, new je({ source: e.source, tokens: r }), {
          type: 'interface',
          inheritable: !n,
          allowedMembers: [
            [Pe.parse],
            [Ne.parse],
            [De],
            [pe],
            [Ie.parse],
            [re.parse],
            [ne.parse],
          ],
        })
      }
      get type() {
        return 'interface'
      }
      *validate(e) {
        if (
          (yield* this.extAttrs.validate(e),
          !this.partial &&
            this.extAttrs.every((e) => 'Exposed' !== e.name) &&
            this.extAttrs.every((e) => 'LegacyNoInterfaceObject' !== e.name))
        ) {
          const e =
            'Interfaces must have `[Exposed]` extended attribute. To fix, add, for example, `[Exposed=Window]`. Please also consider carefully if your interface should also be exposed in a Worker scope. Refer to the [WebIDL spec section on Exposed](https://heycam.github.io/webidl/#Exposed) for more information.'
          yield O(this.tokens.name, this, 'require-exposed', e, {
            autofix: he(this),
          })
        }
        const t = this.extAttrs.filter((e) => 'Constructor' === e.name)
        for (const e of t) {
          const t =
            'Constructors should now be represented as a `constructor()` operation on the interface instead of `[Constructor]` extended attribute. Refer to the [WebIDL spec section on constructor operations](https://heycam.github.io/webidl/#idl-constructors) for more information.'
          yield O(e.tokens.name, this, 'constructor-member', t, {
            autofix: Oe(this, e),
          })
        }
        if (this.extAttrs.some((e) => 'Global' === e.name)) {
          const e = this.extAttrs.filter(
            (e) => 'LegacyFactoryFunction' === e.name
          )
          for (const t of e) {
            const e =
              'Interfaces marked as `[Global]` cannot have factory functions.'
            yield O(t.tokens.name, this, 'no-constructible-global', e)
          }
          const t = this.members.filter((e) => 'constructor' === e.type)
          for (const e of t) {
            const t =
              'Interfaces marked as `[Global]` cannot have constructors.'
            yield O(e.tokens.base, this, 'no-constructible-global', t)
          }
        }
        yield* super.validate(e),
          this.partial ||
            (yield* (function* (e, t) {
              const n = new Set(i(t).map((e) => e.name)),
                r = e.partials.get(t.name) || [],
                o = e.mixinMap.get(t.name) || []
              for (const e of [...r, ...o]) {
                const r = i(e)
                yield* s(r, n, e, t)
                for (const e of r) n.add(e.name)
              }
              function* s(e, t, n, r) {
                for (const o of e) {
                  const { name: e } = o
                  if (e && t.has(e)) {
                    const t = `The operation "${e}" has already been defined for the base interface "${r.name}" either in itself or in a mixin`
                    yield O(o.tokens.name, n, 'no-cross-overload', t)
                  }
                }
              }
              function i(e) {
                return e.members.filter(({ type: e }) => 'operation' === e)
              }
            })(e, this))
      }
    }
    function Oe(e, t) {
      return (
        (e = ge(e)),
        () => {
          const n = fe(e.extAttrs.tokens.open.trivia),
            r = e.members.length
              ? fe(me(e.members[0]).trivia)
              : (function (e) {
                  const t = fe(e),
                    n = t.includes('\t') ? '\t' : '  '
                  return t + n
                })(n),
            o = Ne.parse(new _e(`\n${r}constructor();`))
          ;(o.extAttrs = new Y({})), (ge(o).arguments = t.arguments)
          const s = (function (e, t) {
            const n = e.slice().reverse().findIndex(t)
            return -1 === n ? n : e.length - n - 1
          })(e.members, (e) => 'constructor' === e.type)
          e.members.splice(s + 1, 0, o)
          const { close: i } = e.tokens
          i.trivia.includes('\n') || (i.trivia += '\n' + n)
          const { extAttrs: a } = e,
            c = a.indexOf(t),
            l = a.splice(c, 1)
          a.length
            ? a.length === c
              ? (a[c - 1].tokens.separator = void 0)
              : a[c].tokens.name.trivia.trim() ||
                (a[c].tokens.name.trivia = l[0].tokens.name.trivia)
            : (a.tokens.open = a.tokens.close = void 0)
        }
      )
    }
    class ze extends Le {
      static parse(e, t, { partial: n } = {}) {
        const r = { partial: n, base: t }
        if (((r.mixin = e.consume('mixin')), r.mixin))
          return Le.parse(e, new ze({ source: e.source, tokens: r }), {
            type: 'interface mixin',
            allowedMembers: [
              [Pe.parse],
              [pe],
              [re.parse, { noInherit: !0 }],
              [ne.parse, { regular: !0 }],
            ],
          })
      }
      get type() {
        return 'interface mixin'
      }
    }
    class Me extends z {
      static parse(e) {
        const t = {},
          n = ge(new Me({ source: e.source, tokens: t }))
        return (
          (n.extAttrs = Y.parse(e)),
          (t.required = e.consume('required')),
          (n.idlType =
            ue(e, 'dictionary-type') ||
            e.error('Dictionary member lacks a type')),
          (t.name =
            e.consume('identifier') ||
            e.error('Dictionary member lacks a name')),
          (n.default = Q.parse(e)),
          t.required &&
            n.default &&
            e.error('Required member must not have a default'),
          (t.termination =
            e.consume(';') ||
            e.error('Unterminated dictionary member, expected `;`')),
          n.this
        )
      }
      get type() {
        return 'field'
      }
      get name() {
        return oe(this.tokens.name.value)
      }
      get required() {
        return !!this.tokens.required
      }
      *validate(e) {
        yield* this.idlType.validate(e)
      }
    }
    class We extends Le {
      static parse(e, { partial: t } = {}) {
        const n = { partial: t }
        if (((n.base = e.consume('dictionary')), n.base))
          return Le.parse(e, new We({ source: e.source, tokens: n }), {
            type: 'dictionary',
            inheritable: !t,
            allowedMembers: [[Me.parse]],
          })
      }
      get type() {
        return 'dictionary'
      }
    }
    class Ue extends Le {
      static parse(e, { partial: t } = {}) {
        const n = { partial: t }
        if (((n.base = e.consume('namespace')), n.base))
          return Le.parse(e, new Ue({ source: e.source, tokens: n }), {
            type: 'namespace',
            allowedMembers: [
              [re.parse, { noInherit: !0, readonly: !0 }],
              [ne.parse, { regular: !0 }],
            ],
          })
      }
      get type() {
        return 'namespace'
      }
      *validate(e) {
        if (!this.partial && this.extAttrs.every((e) => 'Exposed' !== e.name)) {
          const e =
            'Namespaces must have [Exposed] extended attribute. To fix, add, for example, [Exposed=Window]. Please also consider carefully if your namespace should also be exposed in a Worker scope. Refer to the [WebIDL spec section on Exposed](https://heycam.github.io/webidl/#Exposed) for more information.'
          yield O(this.tokens.name, this, 'require-exposed', e, {
            autofix: he(this),
          })
        }
        yield* super.validate(e)
      }
    }
    class Fe extends Le {
      static parse(e, t, { partial: n = null } = {}) {
        const r = { callback: t }
        if (((r.base = e.consume('interface')), r.base))
          return Le.parse(e, new Fe({ source: e.source, tokens: r }), {
            type: 'callback interface',
            inheritable: !n,
            allowedMembers: [[Pe.parse], [ne.parse, { regular: !0 }]],
          })
      }
      get type() {
        return 'callback interface'
      }
    }
    function qe(e, t) {
      const n = e.source
      function r(t) {
        e.error(t)
      }
      function o(...t) {
        return e.consume(...t)
      }
      function s(t) {
        const n = o('interface')
        if (!n) return
        return (
          ze.parse(e, n, t) ||
          je.parse(e, n, t) ||
          r('Interface has no proper body')
        )
      }
      function i() {
        return (
          (function () {
            const t = o('callback')
            if (t) return e.probe('interface') ? Fe.parse(e, t) : Te.parse(e, t)
          })() ||
          s() ||
          (function () {
            const t = o('partial')
            if (t)
              return (
                We.parse(e, { partial: t }) ||
                s({ partial: t }) ||
                Ue.parse(e, { partial: t }) ||
                r("Partial doesn't apply to anything")
              )
          })() ||
          We.parse(e) ||
          Re.parse(e) ||
          Ae.parse(e) ||
          Ee.parse(e) ||
          Ue.parse(e)
        )
      }
      const a = (function () {
        if (!n.length) return []
        const s = []
        for (;;) {
          const t = Y.parse(e),
            n = i()
          if (!n) {
            t.length && r('Stray extended attributes')
            break
          }
          ;(ge(n).extAttrs = t), s.push(n)
        }
        const a = o('eof')
        return t.concrete && s.push(a), s
      })()
      return e.position < n.length && r('Unrecognised tokens'), a
    }
    function Be(e) {
      return e
    }
    const He = {
      wrap: (e) => e.join(''),
      trivia: Be,
      name: Be,
      reference: Be,
      type: Be,
      generic: Be,
      nameless: Be,
      inheritance: Be,
      definition: Be,
      extendedAttribute: Be,
      extendedAttributeReference: Be,
    }
    function Ge(e, t) {
      const n = new Map(),
        r = e.filter((e) => 'includes' === e.type)
      for (const e of r) {
        const r = t.get(e.includes)
        if (!r) continue
        const o = n.get(e.target)
        o ? o.push(r) : n.set(e.target, [r])
      }
      return n
    }
    function* Ve(e) {
      const t = (function (e) {
        const t = new Map(),
          n = new Set(),
          r = new Map()
        for (const o of e)
          if (o.partial) {
            const e = r.get(o.name)
            e ? e.push(o) : r.set(o.name, [o])
          } else o.name && (t.has(o.name) ? n.add(o) : t.set(o.name, o))
        return {
          all: e,
          unique: t,
          partials: r,
          duplicates: n,
          mixinMap: Ge(e, t),
          cache: {
            typedefIncludesDictionary: new WeakMap(),
            dictionaryIncludesRequiredField: new WeakMap(),
          },
        }
      })(e)
      for (const e of t.all) e.validate && (yield* e.validate(t))
      yield* (function* ({ unique: e, duplicates: t }) {
        for (const n of t) {
          const { name: t } = n,
            r = `The name "${t}" of type "${e.get(t).type}" was already seen`
          yield O(n.tokens.name, n, 'no-duplicate', r)
        }
      })(t)
    }
    var Ze = Object.freeze({
      __proto__: null,
      parse: function (e, t = {}) {
        const n = new _e(e)
        return (
          void 0 !== t.sourceName && (n.source.name = t.sourceName), qe(n, t)
        )
      },
      write: function (e, { templates: t = He } = {}) {
        function n(e, { unescaped: n, context: r }) {
          return (
            n || (n = e.startsWith('_') ? e.slice(1) : e), t.reference(e, n, r)
          )
        }
        function r(e, n = Be, ...r) {
          if (!e) return ''
          const o = n(e.value, ...r)
          return t.wrap([t.trivia(e.trivia), o])
        }
        function o(e, t) {
          return r(e, n, { context: t })
        }
        function s(e, n) {
          return r(e, t.name, n)
        }
        function i(e) {
          if (e.union || e.generic)
            return t.wrap([
              r(e.tokens.base, t.generic),
              r(e.tokens.open),
              ...e.subtype.map(a),
              r(e.tokens.close),
            ])
          const o = e.tokens.prefix || e.tokens.base,
            s = e.tokens.prefix
              ? [e.tokens.prefix.value, t.trivia(e.tokens.base.trivia)]
              : [],
            i = n(t.wrap([...s, e.tokens.base.value, r(e.tokens.postfix)]), {
              unescaped: e.idlType,
              context: e,
            })
          return t.wrap([t.trivia(o.trivia), i])
        }
        function a(e) {
          return t.wrap([
            p(e.extAttrs),
            i(e),
            r(e.tokens.nullable),
            r(e.tokens.separator),
          ])
        }
        function c(e) {
          return e
            ? t.wrap([r(e.tokens.assign), ...e.expression.map((e) => r(e))])
            : ''
        }
        function l(e) {
          return t.wrap([
            p(e.extAttrs),
            r(e.tokens.optional),
            t.type(a(e.idlType)),
            r(e.tokens.variadic),
            s(e.tokens.name, { data: e }),
            c(e.default),
            r(e.tokens.separator),
          ])
        }
        function u(e) {
          return t.wrap([r(e.tokens.value), r(e.tokens.separator)])
        }
        function d(e) {
          const { rhsType: n } = e.params
          return t.wrap([
            t.trivia(e.tokens.name.trivia),
            t.extendedAttribute(
              t.wrap([
                t.extendedAttributeReference(e.name),
                r(e.params.tokens.assign),
                o(e.params.tokens.secondaryName, e),
                r(e.params.tokens.open),
                ...(e.params.list
                  ? e.params.list.map(
                      'identifier-list' === n
                        ? (n) =>
                            (function (e, n) {
                              return t.wrap([
                                o(e.tokens.value, n),
                                r(e.tokens.separator),
                              ])
                            })(n, e)
                        : n && n.endsWith('-list')
                        ? u
                        : l
                    )
                  : []),
                r(e.params.tokens.close),
              ])
            ),
            r(e.tokens.separator),
          ])
        }
        function p(e) {
          return e.length
            ? t.wrap([r(e.tokens.open), ...e.map(d), r(e.tokens.close)])
            : ''
        }
        function f(e) {
          return t.definition(
            t.wrap([
              p(e.extAttrs),
              r(e.tokens.callback),
              r(e.tokens.partial),
              r(e.tokens.base),
              r(e.tokens.mixin),
              s(e.tokens.name, { data: e }),
              ((o = e),
              o.tokens.inheritance
                ? t.wrap([
                    r(o.tokens.colon),
                    t.trivia(o.tokens.inheritance.trivia),
                    t.inheritance(
                      n(o.tokens.inheritance.value, { context: o })
                    ),
                  ])
                : ''),
              r(e.tokens.open),
              g(e.members, e),
              r(e.tokens.close),
              r(e.tokens.termination),
            ]),
            { data: e }
          )
          var o
        }
        function h(e, n) {
          return t.definition(
            t.wrap([
              p(e.extAttrs),
              r(e.tokens.readonly),
              r(e.tokens.async),
              r(e.tokens.base, t.generic),
              r(e.tokens.open),
              t.wrap(e.idlType.map(a)),
              r(e.tokens.close),
              r(e.tokens.argsOpen),
              t.wrap(e.arguments.map(l)),
              r(e.tokens.argsClose),
              r(e.tokens.termination),
            ]),
            { data: e, parent: n }
          )
        }
        t = Object.assign({}, He, t)
        const m = {
          interface: f,
          'interface mixin': f,
          namespace: f,
          operation: function (e, n) {
            const o = e.idlType
              ? [
                  t.type(a(e.idlType)),
                  s(e.tokens.name, { data: e, parent: n }),
                  r(e.tokens.open),
                  t.wrap(e.arguments.map(l)),
                  r(e.tokens.close),
                ]
              : []
            return t.definition(
              t.wrap([
                p(e.extAttrs),
                e.tokens.name
                  ? r(e.tokens.special)
                  : r(e.tokens.special, t.nameless, { data: e, parent: n }),
                ...o,
                r(e.tokens.termination),
              ]),
              { data: e, parent: n }
            )
          },
          attribute: function (e, n) {
            return t.definition(
              t.wrap([
                p(e.extAttrs),
                r(e.tokens.special),
                r(e.tokens.readonly),
                r(e.tokens.base),
                t.type(a(e.idlType)),
                s(e.tokens.name, { data: e, parent: n }),
                r(e.tokens.termination),
              ]),
              { data: e, parent: n }
            )
          },
          constructor: function (e, n) {
            return t.definition(
              t.wrap([
                p(e.extAttrs),
                r(e.tokens.base, t.nameless, { data: e, parent: n }),
                r(e.tokens.open),
                t.wrap(e.arguments.map(l)),
                r(e.tokens.close),
                r(e.tokens.termination),
              ]),
              { data: e, parent: n }
            )
          },
          dictionary: f,
          field: function (e, n) {
            return t.definition(
              t.wrap([
                p(e.extAttrs),
                r(e.tokens.required),
                t.type(a(e.idlType)),
                s(e.tokens.name, { data: e, parent: n }),
                c(e.default),
                r(e.tokens.termination),
              ]),
              { data: e, parent: n }
            )
          },
          const: function (e, n) {
            return t.definition(
              t.wrap([
                p(e.extAttrs),
                r(e.tokens.base),
                t.type(a(e.idlType)),
                s(e.tokens.name, { data: e, parent: n }),
                r(e.tokens.assign),
                r(e.tokens.value),
                r(e.tokens.termination),
              ]),
              { data: e, parent: n }
            )
          },
          typedef: function (e) {
            return t.definition(
              t.wrap([
                p(e.extAttrs),
                r(e.tokens.base),
                t.type(a(e.idlType)),
                s(e.tokens.name, { data: e }),
                r(e.tokens.termination),
              ]),
              { data: e }
            )
          },
          includes: function (e) {
            return t.definition(
              t.wrap([
                p(e.extAttrs),
                o(e.tokens.target, e),
                r(e.tokens.includes),
                o(e.tokens.mixin, e),
                r(e.tokens.termination),
              ]),
              { data: e }
            )
          },
          callback: function (e) {
            return t.definition(
              t.wrap([
                p(e.extAttrs),
                r(e.tokens.base),
                s(e.tokens.name, { data: e }),
                r(e.tokens.assign),
                t.type(a(e.idlType)),
                r(e.tokens.open),
                ...e.arguments.map(l),
                r(e.tokens.close),
                r(e.tokens.termination),
              ]),
              { data: e }
            )
          },
          enum: function (e) {
            return t.definition(
              t.wrap([
                p(e.extAttrs),
                r(e.tokens.base),
                s(e.tokens.name, { data: e }),
                r(e.tokens.open),
                g(e.values, e),
                r(e.tokens.close),
                r(e.tokens.termination),
              ]),
              { data: e }
            )
          },
          'enum-value': function (e, n) {
            return t.wrap([
              t.trivia(e.tokens.value.trivia),
              t.definition(
                t.wrap(['"', t.name(e.value, { data: e, parent: n }), '"']),
                { data: e, parent: n }
              ),
              r(e.tokens.separator),
            ])
          },
          iterable: h,
          maplike: h,
          setlike: h,
          'callback interface': f,
          eof: function (e) {
            return t.trivia(e.trivia)
          },
        }
        function g(e, n) {
          if (!e) return
          const r = e.map((e) =>
            (function (e, t) {
              if (!m[e.type]) throw new Error(`Type "${e.type}" is unsupported`)
              return m[e.type](e, t)
            })(e, n)
          )
          return t.wrap(r)
        }
        return g(e)
      },
      validate: function (e) {
        return [...Ve(((t = e), t.flat ? t.flat() : [].concat(...t)))]
        var t
      },
      WebIDLParseError: Se,
    })
    var Ye,
      Ke =
        ((function (e) {
          function t() {
            return {
              baseUrl: null,
              breaks: !1,
              gfm: !0,
              headerIds: !0,
              headerPrefix: '',
              highlight: null,
              langPrefix: 'language-',
              mangle: !0,
              pedantic: !1,
              renderer: null,
              sanitize: !1,
              sanitizer: null,
              silent: !1,
              smartLists: !1,
              smartypants: !1,
              tokenizer: null,
              walkTokens: null,
              xhtml: !1,
            }
          }
          e.exports = {
            defaults: {
              baseUrl: null,
              breaks: !1,
              gfm: !0,
              headerIds: !0,
              headerPrefix: '',
              highlight: null,
              langPrefix: 'language-',
              mangle: !0,
              pedantic: !1,
              renderer: null,
              sanitize: !1,
              sanitizer: null,
              silent: !1,
              smartLists: !1,
              smartypants: !1,
              tokenizer: null,
              walkTokens: null,
              xhtml: !1,
            },
            getDefaults: t,
            changeDefaults: function (t) {
              e.exports.defaults = t
            },
          }
        })((Ye = { exports: {} }), Ye.exports),
        Ye.exports)
    Ke.defaults, Ke.getDefaults, Ke.changeDefaults
    const Je = /[&<>"']/,
      Xe = /[&<>"']/g,
      Qe = /[<>"']|&(?!#?\w+;)/,
      et = /[<>"']|&(?!#?\w+;)/g,
      tt = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
      },
      nt = (e) => tt[e]
    const rt = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi
    function ot(e) {
      return e.replace(rt, (e, t) =>
        'colon' === (t = t.toLowerCase())
          ? ':'
          : '#' === t.charAt(0)
          ? 'x' === t.charAt(1)
            ? String.fromCharCode(parseInt(t.substring(2), 16))
            : String.fromCharCode(+t.substring(1))
          : ''
      )
    }
    const st = /(^|[^\[])\^/g
    const it = /[^\w:]/g,
      at = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i
    const ct = {},
      lt = /^[^:]+:\/*[^/]*$/,
      ut = /^([^:]+:)[\s\S]*$/,
      dt = /^([^:]+:\/*[^/]*)[\s\S]*$/
    function pt(e, t) {
      ct[' ' + e] ||
        (lt.test(e) ? (ct[' ' + e] = e + '/') : (ct[' ' + e] = ft(e, '/', !0)))
      const n = -1 === (e = ct[' ' + e]).indexOf(':')
      return '//' === t.substring(0, 2)
        ? n
          ? t
          : e.replace(ut, '$1') + t
        : '/' === t.charAt(0)
        ? n
          ? t
          : e.replace(dt, '$1') + t
        : e + t
    }
    function ft(e, t, n) {
      const r = e.length
      if (0 === r) return ''
      let o = 0
      for (; o < r; ) {
        const s = e.charAt(r - o - 1)
        if (s !== t || n) {
          if (s === t || !n) break
          o++
        } else o++
      }
      return e.substr(0, r - o)
    }
    var ht = {
      escape: function (e, t) {
        if (t) {
          if (Je.test(e)) return e.replace(Xe, nt)
        } else if (Qe.test(e)) return e.replace(et, nt)
        return e
      },
      unescape: ot,
      edit: function (e, t) {
        ;(e = e.source || e), (t = t || '')
        const n = {
          replace: (t, r) => (
            (r = (r = r.source || r).replace(st, '$1')),
            (e = e.replace(t, r)),
            n
          ),
          getRegex: () => new RegExp(e, t),
        }
        return n
      },
      cleanUrl: function (e, t, n) {
        if (e) {
          let e
          try {
            e = decodeURIComponent(ot(n)).replace(it, '').toLowerCase()
          } catch (e) {
            return null
          }
          if (
            0 === e.indexOf('javascript:') ||
            0 === e.indexOf('vbscript:') ||
            0 === e.indexOf('data:')
          )
            return null
        }
        t && !at.test(n) && (n = pt(t, n))
        try {
          n = encodeURI(n).replace(/%25/g, '%')
        } catch (e) {
          return null
        }
        return n
      },
      resolveUrl: pt,
      noopTest: { exec: function () {} },
      merge: function (e) {
        let t,
          n,
          r = 1
        for (; r < arguments.length; r++)
          for (n in ((t = arguments[r]), t))
            Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
        return e
      },
      splitCells: function (e, t) {
        const n = e
          .replace(/\|/g, (e, t, n) => {
            let r = !1,
              o = t
            for (; --o >= 0 && '\\' === n[o]; ) r = !r
            return r ? '|' : ' |'
          })
          .split(/ \|/)
        let r = 0
        if (n.length > t) n.splice(t)
        else for (; n.length < t; ) n.push('')
        for (; r < n.length; r++) n[r] = n[r].trim().replace(/\\\|/g, '|')
        return n
      },
      rtrim: ft,
      findClosingBracket: function (e, t) {
        if (-1 === e.indexOf(t[1])) return -1
        const n = e.length
        let r = 0,
          o = 0
        for (; o < n; o++)
          if ('\\' === e[o]) o++
          else if (e[o] === t[0]) r++
          else if (e[o] === t[1] && (r--, r < 0)) return o
        return -1
      },
      checkSanitizeDeprecation: function (e) {
        e &&
          e.sanitize &&
          !e.silent &&
          console.warn(
            'marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options'
          )
      },
      repeatString: function (e, t) {
        if (t < 1) return ''
        let n = ''
        for (; t > 1; ) 1 & t && (n += e), (t >>= 1), (e += e)
        return n + e
      },
    }
    const { defaults: mt } = Ke,
      { rtrim: gt, splitCells: bt, escape: wt, findClosingBracket: yt } = ht
    function vt(e, t, n) {
      const r = t.href,
        o = t.title ? wt(t.title) : null,
        s = e[1].replace(/\\([\[\]])/g, '$1')
      return '!' !== e[0].charAt(0)
        ? { type: 'link', raw: n, href: r, title: o, text: s }
        : { type: 'image', raw: n, href: r, title: o, text: wt(s) }
    }
    var kt = class {
      constructor(e) {
        this.options = e || mt
      }
      space(e) {
        const t = this.rules.block.newline.exec(e)
        if (t)
          return t[0].length > 1 ? { type: 'space', raw: t[0] } : { raw: '\n' }
      }
      code(e, t) {
        const n = this.rules.block.code.exec(e)
        if (n) {
          const e = t[t.length - 1]
          if (e && 'paragraph' === e.type)
            return { raw: n[0], text: n[0].trimRight() }
          const r = n[0].replace(/^ {4}/gm, '')
          return {
            type: 'code',
            raw: n[0],
            codeBlockStyle: 'indented',
            text: this.options.pedantic ? r : gt(r, '\n'),
          }
        }
      }
      fences(e) {
        const t = this.rules.block.fences.exec(e)
        if (t) {
          const e = t[0],
            n = (function (e, t) {
              const n = e.match(/^(\s+)(?:```)/)
              if (null === n) return t
              const r = n[1]
              return t
                .split('\n')
                .map((e) => {
                  const t = e.match(/^\s+/)
                  if (null === t) return e
                  const [n] = t
                  return n.length >= r.length ? e.slice(r.length) : e
                })
                .join('\n')
            })(e, t[3] || '')
          return {
            type: 'code',
            raw: e,
            lang: t[2] ? t[2].trim() : t[2],
            text: n,
          }
        }
      }
      heading(e) {
        const t = this.rules.block.heading.exec(e)
        if (t)
          return { type: 'heading', raw: t[0], depth: t[1].length, text: t[2] }
      }
      nptable(e) {
        const t = this.rules.block.nptable.exec(e)
        if (t) {
          const e = {
            type: 'table',
            header: bt(t[1].replace(/^ *| *\| *$/g, '')),
            align: t[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
            cells: t[3] ? t[3].replace(/\n$/, '').split('\n') : [],
            raw: t[0],
          }
          if (e.header.length === e.align.length) {
            let t,
              n = e.align.length
            for (t = 0; t < n; t++)
              /^ *-+: *$/.test(e.align[t])
                ? (e.align[t] = 'right')
                : /^ *:-+: *$/.test(e.align[t])
                ? (e.align[t] = 'center')
                : /^ *:-+ *$/.test(e.align[t])
                ? (e.align[t] = 'left')
                : (e.align[t] = null)
            for (n = e.cells.length, t = 0; t < n; t++)
              e.cells[t] = bt(e.cells[t], e.header.length)
            return e
          }
        }
      }
      hr(e) {
        const t = this.rules.block.hr.exec(e)
        if (t) return { type: 'hr', raw: t[0] }
      }
      blockquote(e) {
        const t = this.rules.block.blockquote.exec(e)
        if (t) {
          const e = t[0].replace(/^ *> ?/gm, '')
          return { type: 'blockquote', raw: t[0], text: e }
        }
      }
      list(e) {
        const t = this.rules.block.list.exec(e)
        if (t) {
          let e = t[0]
          const n = t[2],
            r = n.length > 1,
            o = {
              type: 'list',
              raw: e,
              ordered: r,
              start: r ? +n.slice(0, -1) : '',
              loose: !1,
              items: [],
            },
            s = t[0].match(this.rules.block.item)
          let i,
            a,
            c,
            l,
            u,
            d,
            p,
            f,
            h = !1,
            m = s.length
          c = this.rules.block.listItemStart.exec(s[0])
          for (let t = 0; t < m; t++) {
            if (((i = s[t]), (e = i), t !== m - 1)) {
              if (
                ((l = this.rules.block.listItemStart.exec(s[t + 1])),
                l[1].length > c[0].length || l[1].length > 3)
              ) {
                s.splice(t, 2, s[t] + '\n' + s[t + 1]), t--, m--
                continue
              }
              ;(!this.options.pedantic || this.options.smartLists
                ? l[2][l[2].length - 1] !== n[n.length - 1]
                : r === (1 === l[2].length)) &&
                ((u = s.slice(t + 1).join('\n')),
                (o.raw = o.raw.substring(0, o.raw.length - u.length)),
                (t = m - 1)),
                (c = l)
            }
            ;(a = i.length),
              (i = i.replace(/^ *([*+-]|\d+[.)]) ?/, '')),
              ~i.indexOf('\n ') &&
                ((a -= i.length),
                (i = this.options.pedantic
                  ? i.replace(/^ {1,4}/gm, '')
                  : i.replace(new RegExp('^ {1,' + a + '}', 'gm'), ''))),
              (d = h || /\n\n(?!\s*$)/.test(i)),
              t !== m - 1 &&
                ((h = '\n' === i.charAt(i.length - 1)), d || (d = h)),
              d && (o.loose = !0),
              this.options.gfm &&
                ((p = /^\[[ xX]\] /.test(i)),
                (f = void 0),
                p && ((f = ' ' !== i[1]), (i = i.replace(/^\[[ xX]\] +/, '')))),
              o.items.push({
                type: 'list_item',
                raw: e,
                task: p,
                checked: f,
                loose: d,
                text: i,
              })
          }
          return o
        }
      }
      html(e) {
        const t = this.rules.block.html.exec(e)
        if (t)
          return {
            type: this.options.sanitize ? 'paragraph' : 'html',
            raw: t[0],
            pre:
              !this.options.sanitizer &&
              ('pre' === t[1] || 'script' === t[1] || 'style' === t[1]),
            text: this.options.sanitize
              ? this.options.sanitizer
                ? this.options.sanitizer(t[0])
                : wt(t[0])
              : t[0],
          }
      }
      def(e) {
        const t = this.rules.block.def.exec(e)
        if (t) {
          t[3] && (t[3] = t[3].substring(1, t[3].length - 1))
          return {
            tag: t[1].toLowerCase().replace(/\s+/g, ' '),
            raw: t[0],
            href: t[2],
            title: t[3],
          }
        }
      }
      table(e) {
        const t = this.rules.block.table.exec(e)
        if (t) {
          const e = {
            type: 'table',
            header: bt(t[1].replace(/^ *| *\| *$/g, '')),
            align: t[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
            cells: t[3] ? t[3].replace(/\n$/, '').split('\n') : [],
          }
          if (e.header.length === e.align.length) {
            e.raw = t[0]
            let n,
              r = e.align.length
            for (n = 0; n < r; n++)
              /^ *-+: *$/.test(e.align[n])
                ? (e.align[n] = 'right')
                : /^ *:-+: *$/.test(e.align[n])
                ? (e.align[n] = 'center')
                : /^ *:-+ *$/.test(e.align[n])
                ? (e.align[n] = 'left')
                : (e.align[n] = null)
            for (r = e.cells.length, n = 0; n < r; n++)
              e.cells[n] = bt(
                e.cells[n].replace(/^ *\| *| *\| *$/g, ''),
                e.header.length
              )
            return e
          }
        }
      }
      lheading(e) {
        const t = this.rules.block.lheading.exec(e)
        if (t)
          return {
            type: 'heading',
            raw: t[0],
            depth: '=' === t[2].charAt(0) ? 1 : 2,
            text: t[1],
          }
      }
      paragraph(e) {
        const t = this.rules.block.paragraph.exec(e)
        if (t)
          return {
            type: 'paragraph',
            raw: t[0],
            text:
              '\n' === t[1].charAt(t[1].length - 1) ? t[1].slice(0, -1) : t[1],
          }
      }
      text(e, t) {
        const n = this.rules.block.text.exec(e)
        if (n) {
          const e = t[t.length - 1]
          return e && 'text' === e.type
            ? { raw: n[0], text: n[0] }
            : { type: 'text', raw: n[0], text: n[0] }
        }
      }
      escape(e) {
        const t = this.rules.inline.escape.exec(e)
        if (t) return { type: 'escape', raw: t[0], text: wt(t[1]) }
      }
      tag(e, t, n) {
        const r = this.rules.inline.tag.exec(e)
        if (r)
          return (
            !t && /^<a /i.test(r[0])
              ? (t = !0)
              : t && /^<\/a>/i.test(r[0]) && (t = !1),
            !n && /^<(pre|code|kbd|script)(\s|>)/i.test(r[0])
              ? (n = !0)
              : n && /^<\/(pre|code|kbd|script)(\s|>)/i.test(r[0]) && (n = !1),
            {
              type: this.options.sanitize ? 'text' : 'html',
              raw: r[0],
              inLink: t,
              inRawBlock: n,
              text: this.options.sanitize
                ? this.options.sanitizer
                  ? this.options.sanitizer(r[0])
                  : wt(r[0])
                : r[0],
            }
          )
      }
      link(e) {
        const t = this.rules.inline.link.exec(e)
        if (t) {
          const e = yt(t[2], '()')
          if (e > -1) {
            const n = (0 === t[0].indexOf('!') ? 5 : 4) + t[1].length + e
            ;(t[2] = t[2].substring(0, e)),
              (t[0] = t[0].substring(0, n).trim()),
              (t[3] = '')
          }
          let n = t[2],
            r = ''
          if (this.options.pedantic) {
            const e = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(n)
            e ? ((n = e[1]), (r = e[3])) : (r = '')
          } else r = t[3] ? t[3].slice(1, -1) : ''
          n = n.trim().replace(/^<([\s\S]*)>$/, '$1')
          return vt(
            t,
            {
              href: n ? n.replace(this.rules.inline._escapes, '$1') : n,
              title: r ? r.replace(this.rules.inline._escapes, '$1') : r,
            },
            t[0]
          )
        }
      }
      reflink(e, t) {
        let n
        if (
          (n = this.rules.inline.reflink.exec(e)) ||
          (n = this.rules.inline.nolink.exec(e))
        ) {
          let e = (n[2] || n[1]).replace(/\s+/g, ' ')
          if (((e = t[e.toLowerCase()]), !e || !e.href)) {
            const e = n[0].charAt(0)
            return { type: 'text', raw: e, text: e }
          }
          return vt(n, e, n[0])
        }
      }
      strong(e, t, n = '') {
        let r = this.rules.inline.strong.start.exec(e)
        if (
          r &&
          (!r[1] ||
            (r[1] && ('' === n || this.rules.inline.punctuation.exec(n))))
        ) {
          t = t.slice(-1 * e.length)
          const n =
            '**' === r[0]
              ? this.rules.inline.strong.endAst
              : this.rules.inline.strong.endUnd
          let o
          for (n.lastIndex = 0; null != (r = n.exec(t)); )
            if (
              ((o = this.rules.inline.strong.middle.exec(
                t.slice(0, r.index + 3)
              )),
              o)
            )
              return {
                type: 'strong',
                raw: e.slice(0, o[0].length),
                text: e.slice(2, o[0].length - 2),
              }
        }
      }
      em(e, t, n = '') {
        let r = this.rules.inline.em.start.exec(e)
        if (
          r &&
          (!r[1] ||
            (r[1] && ('' === n || this.rules.inline.punctuation.exec(n))))
        ) {
          t = t.slice(-1 * e.length)
          const n =
            '*' === r[0]
              ? this.rules.inline.em.endAst
              : this.rules.inline.em.endUnd
          let o
          for (n.lastIndex = 0; null != (r = n.exec(t)); )
            if (
              ((o = this.rules.inline.em.middle.exec(t.slice(0, r.index + 2))),
              o)
            )
              return {
                type: 'em',
                raw: e.slice(0, o[0].length),
                text: e.slice(1, o[0].length - 1),
              }
        }
      }
      codespan(e) {
        const t = this.rules.inline.code.exec(e)
        if (t) {
          let e = t[2].replace(/\n/g, ' ')
          const n = /[^ ]/.test(e),
            r = e.startsWith(' ') && e.endsWith(' ')
          return (
            n && r && (e = e.substring(1, e.length - 1)),
            (e = wt(e, !0)),
            { type: 'codespan', raw: t[0], text: e }
          )
        }
      }
      br(e) {
        const t = this.rules.inline.br.exec(e)
        if (t) return { type: 'br', raw: t[0] }
      }
      del(e) {
        const t = this.rules.inline.del.exec(e)
        if (t) return { type: 'del', raw: t[0], text: t[2] }
      }
      autolink(e, t) {
        const n = this.rules.inline.autolink.exec(e)
        if (n) {
          let e, r
          return (
            '@' === n[2]
              ? ((e = wt(this.options.mangle ? t(n[1]) : n[1])),
                (r = 'mailto:' + e))
              : ((e = wt(n[1])), (r = e)),
            {
              type: 'link',
              raw: n[0],
              text: e,
              href: r,
              tokens: [{ type: 'text', raw: e, text: e }],
            }
          )
        }
      }
      url(e, t) {
        let n
        if ((n = this.rules.inline.url.exec(e))) {
          let e, r
          if ('@' === n[2])
            (e = wt(this.options.mangle ? t(n[0]) : n[0])), (r = 'mailto:' + e)
          else {
            let t
            do {
              ;(t = n[0]), (n[0] = this.rules.inline._backpedal.exec(n[0])[0])
            } while (t !== n[0])
            ;(e = wt(n[0])), (r = 'www.' === n[1] ? 'http://' + e : e)
          }
          return {
            type: 'link',
            raw: n[0],
            text: e,
            href: r,
            tokens: [{ type: 'text', raw: e, text: e }],
          }
        }
      }
      inlineText(e, t, n) {
        const r = this.rules.inline.text.exec(e)
        if (r) {
          let e
          return (
            (e = t
              ? this.options.sanitize
                ? this.options.sanitizer
                  ? this.options.sanitizer(r[0])
                  : wt(r[0])
                : r[0]
              : wt(this.options.smartypants ? n(r[0]) : r[0])),
            { type: 'text', raw: r[0], text: e }
          )
        }
      }
    }
    const { noopTest: xt, edit: $t, merge: _t } = ht,
      St = {
        newline: /^\n+/,
        code: /^( {4}[^\n]+\n*)+/,
        fences: /^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,
        hr: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,
        heading: /^ {0,3}(#{1,6}) +([^\n]*?)(?: +#+)? *(?:\n+|$)/,
        blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
        list: /^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?! {0,3}bull )\n*|\s*$)/,
        html:
          '^ {0,3}(?:<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$))',
        def: /^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,
        nptable: xt,
        table: xt,
        lheading: /^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,
        _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html)[^\n]+)*)/,
        text: /^[^\n]+/,
        _label: /(?!\s*\])(?:\\[\[\]]|[^\[\]])+/,
        _title: /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/,
      }
    ;(St.def = $t(St.def)
      .replace('label', St._label)
      .replace('title', St._title)
      .getRegex()),
      (St.bullet = /(?:[*+-]|\d{1,9}[.)])/),
      (St.item = /^( *)(bull) ?[^\n]*(?:\n(?! *bull ?)[^\n]*)*/),
      (St.item = $t(St.item, 'gm').replace(/bull/g, St.bullet).getRegex()),
      (St.listItemStart = $t(/^( *)(bull)/)
        .replace('bull', St.bullet)
        .getRegex()),
      (St.list = $t(St.list)
        .replace(/bull/g, St.bullet)
        .replace(
          'hr',
          '\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))'
        )
        .replace('def', '\\n+(?=' + St.def.source + ')')
        .getRegex()),
      (St._tag =
        'address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul'),
      (St._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/),
      (St.html = $t(St.html, 'i')
        .replace('comment', St._comment)
        .replace('tag', St._tag)
        .replace(
          'attribute',
          / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/
        )
        .getRegex()),
      (St.paragraph = $t(St._paragraph)
        .replace('hr', St.hr)
        .replace('heading', ' {0,3}#{1,6} ')
        .replace('|lheading', '')
        .replace('blockquote', ' {0,3}>')
        .replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
        .replace('list', ' {0,3}(?:[*+-]|1[.)]) ')
        .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)')
        .replace('tag', St._tag)
        .getRegex()),
      (St.blockquote = $t(St.blockquote)
        .replace('paragraph', St.paragraph)
        .getRegex()),
      (St.normal = _t({}, St)),
      (St.gfm = _t({}, St.normal, {
        nptable:
          '^ *([^|\\n ].*\\|.*)\\n {0,3}([-:]+ *\\|[-| :]*)(?:\\n((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)',
        table:
          '^ *\\|(.+)\\n {0,3}\\|?( *[-:]+[-| :]*)(?:\\n *((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)',
      })),
      (St.gfm.nptable = $t(St.gfm.nptable)
        .replace('hr', St.hr)
        .replace('heading', ' {0,3}#{1,6} ')
        .replace('blockquote', ' {0,3}>')
        .replace('code', ' {4}[^\\n]')
        .replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
        .replace('list', ' {0,3}(?:[*+-]|1[.)]) ')
        .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)')
        .replace('tag', St._tag)
        .getRegex()),
      (St.gfm.table = $t(St.gfm.table)
        .replace('hr', St.hr)
        .replace('heading', ' {0,3}#{1,6} ')
        .replace('blockquote', ' {0,3}>')
        .replace('code', ' {4}[^\\n]')
        .replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
        .replace('list', ' {0,3}(?:[*+-]|1[.)]) ')
        .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)')
        .replace('tag', St._tag)
        .getRegex()),
      (St.pedantic = _t({}, St.normal, {
        html: $t(
          '^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|\'[^\']*\'|\\s[^\'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))'
        )
          .replace('comment', St._comment)
          .replace(
            /tag/g,
            '(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b'
          )
          .getRegex(),
        def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
        heading: /^ *(#{1,6}) *([^\n]+?) *(?:#+ *)?(?:\n+|$)/,
        fences: xt,
        paragraph: $t(St.normal._paragraph)
          .replace('hr', St.hr)
          .replace('heading', ' *#{1,6} *[^\n]')
          .replace('lheading', St.lheading)
          .replace('blockquote', ' {0,3}>')
          .replace('|fences', '')
          .replace('|list', '')
          .replace('|html', '')
          .getRegex(),
      }))
    const Ct = {
      escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
      autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
      url: xt,
      tag:
        '^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>',
      link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
      reflink: /^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,
      nolink: /^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,
      reflinkSearch: 'reflink|nolink(?!\\()',
      strong: {
        start: /^(?:(\*\*(?=[*punctuation]))|\*\*)(?![\s])|__/,
        middle: /^\*\*(?:(?:(?!overlapSkip)(?:[^*]|\\\*)|overlapSkip)|\*(?:(?!overlapSkip)(?:[^*]|\\\*)|overlapSkip)*?\*)+?\*\*$|^__(?![\s])((?:(?:(?!overlapSkip)(?:[^_]|\\_)|overlapSkip)|_(?:(?!overlapSkip)(?:[^_]|\\_)|overlapSkip)*?_)+?)__$/,
        endAst: /[^punctuation\s]\*\*(?!\*)|[punctuation]\*\*(?!\*)(?:(?=[punctuation_\s]|$))/,
        endUnd: /[^\s]__(?!_)(?:(?=[punctuation*\s])|$)/,
      },
      em: {
        start: /^(?:(\*(?=[punctuation]))|\*)(?![*\s])|_/,
        middle: /^\*(?:(?:(?!overlapSkip)(?:[^*]|\\\*)|overlapSkip)|\*(?:(?!overlapSkip)(?:[^*]|\\\*)|overlapSkip)*?\*)+?\*$|^_(?![_\s])(?:(?:(?!overlapSkip)(?:[^_]|\\_)|overlapSkip)|_(?:(?!overlapSkip)(?:[^_]|\\_)|overlapSkip)*?_)+?_$/,
        endAst: /[^punctuation\s]\*(?!\*)|[punctuation]\*(?!\*)(?:(?=[punctuation_\s]|$))/,
        endUnd: /[^\s]_(?!_)(?:(?=[punctuation*\s])|$)/,
      },
      code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
      br: /^( {2,}|\\)\n(?!\s*$)/,
      del: xt,
      text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*]|\b_|$)|[^ ](?= {2,}\n)))/,
      punctuation: /^([\s*punctuation])/,
      _punctuation: '!"#$%&\'()+\\-.,/:;<=>?@\\[\\]`^{|}~',
    }
    ;(Ct.punctuation = $t(Ct.punctuation)
      .replace(/punctuation/g, Ct._punctuation)
      .getRegex()),
      (Ct._blockSkip = '\\[[^\\]]*?\\]\\([^\\)]*?\\)|`[^`]*?`|<[^>]*?>'),
      (Ct._overlapSkip = '__[^_]*?__|\\*\\*\\[^\\*\\]*?\\*\\*'),
      (Ct._comment = $t(St._comment)
        .replace('(?:--\x3e|$)', '--\x3e')
        .getRegex()),
      (Ct.em.start = $t(Ct.em.start)
        .replace(/punctuation/g, Ct._punctuation)
        .getRegex()),
      (Ct.em.middle = $t(Ct.em.middle)
        .replace(/punctuation/g, Ct._punctuation)
        .replace(/overlapSkip/g, Ct._overlapSkip)
        .getRegex()),
      (Ct.em.endAst = $t(Ct.em.endAst, 'g')
        .replace(/punctuation/g, Ct._punctuation)
        .getRegex()),
      (Ct.em.endUnd = $t(Ct.em.endUnd, 'g')
        .replace(/punctuation/g, Ct._punctuation)
        .getRegex()),
      (Ct.strong.start = $t(Ct.strong.start)
        .replace(/punctuation/g, Ct._punctuation)
        .getRegex()),
      (Ct.strong.middle = $t(Ct.strong.middle)
        .replace(/punctuation/g, Ct._punctuation)
        .replace(/overlapSkip/g, Ct._overlapSkip)
        .getRegex()),
      (Ct.strong.endAst = $t(Ct.strong.endAst, 'g')
        .replace(/punctuation/g, Ct._punctuation)
        .getRegex()),
      (Ct.strong.endUnd = $t(Ct.strong.endUnd, 'g')
        .replace(/punctuation/g, Ct._punctuation)
        .getRegex()),
      (Ct.blockSkip = $t(Ct._blockSkip, 'g').getRegex()),
      (Ct.overlapSkip = $t(Ct._overlapSkip, 'g').getRegex()),
      (Ct._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g),
      (Ct._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/),
      (Ct._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/),
      (Ct.autolink = $t(Ct.autolink)
        .replace('scheme', Ct._scheme)
        .replace('email', Ct._email)
        .getRegex()),
      (Ct._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/),
      (Ct.tag = $t(Ct.tag)
        .replace('comment', Ct._comment)
        .replace('attribute', Ct._attribute)
        .getRegex()),
      (Ct._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/),
      (Ct._href = /<(?:\\[<>]?|[^\s<>\\])*>|[^\s\x00-\x1f]*/),
      (Ct._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/),
      (Ct.link = $t(Ct.link)
        .replace('label', Ct._label)
        .replace('href', Ct._href)
        .replace('title', Ct._title)
        .getRegex()),
      (Ct.reflink = $t(Ct.reflink).replace('label', Ct._label).getRegex()),
      (Ct.reflinkSearch = $t(Ct.reflinkSearch, 'g')
        .replace('reflink', Ct.reflink)
        .replace('nolink', Ct.nolink)
        .getRegex()),
      (Ct.normal = _t({}, Ct)),
      (Ct.pedantic = _t({}, Ct.normal, {
        strong: {
          start: /^__|\*\*/,
          middle: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
          endAst: /\*\*(?!\*)/g,
          endUnd: /__(?!_)/g,
        },
        em: {
          start: /^_|\*/,
          middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,
          endAst: /\*(?!\*)/g,
          endUnd: /_(?!_)/g,
        },
        link: $t(/^!?\[(label)\]\((.*?)\)/)
          .replace('label', Ct._label)
          .getRegex(),
        reflink: $t(/^!?\[(label)\]\s*\[([^\]]*)\]/)
          .replace('label', Ct._label)
          .getRegex(),
      })),
      (Ct.gfm = _t({}, Ct.normal, {
        escape: $t(Ct.escape).replace('])', '~|])').getRegex(),
        _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
        url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
        _backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
        del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
        text: /^([`~]+|[^`~])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*~]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))/,
      })),
      (Ct.gfm.url = $t(Ct.gfm.url, 'i')
        .replace('email', Ct.gfm._extended_email)
        .getRegex()),
      (Ct.breaks = _t({}, Ct.gfm, {
        br: $t(Ct.br).replace('{2,}', '*').getRegex(),
        text: $t(Ct.gfm.text)
          .replace('\\b_', '\\b_| {2,}\\n')
          .replace(/\{2,\}/g, '*')
          .getRegex(),
      }))
    var Rt = { block: St, inline: Ct }
    const { defaults: Et } = Ke,
      { block: At, inline: Tt } = Rt,
      { repeatString: Lt } = ht
    function Pt(e) {
      return e
        .replace(/---/g, '—')
        .replace(/--/g, '–')
        .replace(/(^|[-\u2014/(\[{"\s])'/g, '$1‘')
        .replace(/'/g, '’')
        .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, '$1“')
        .replace(/"/g, '”')
        .replace(/\.{3}/g, '…')
    }
    function It(e) {
      let t,
        n,
        r = ''
      const o = e.length
      for (t = 0; t < o; t++)
        (n = e.charCodeAt(t)),
          Math.random() > 0.5 && (n = 'x' + n.toString(16)),
          (r += '&#' + n + ';')
      return r
    }
    var Nt = class e {
      constructor(e) {
        ;(this.tokens = []),
          (this.tokens.links = Object.create(null)),
          (this.options = e || Et),
          (this.options.tokenizer = this.options.tokenizer || new kt()),
          (this.tokenizer = this.options.tokenizer),
          (this.tokenizer.options = this.options)
        const t = { block: At.normal, inline: Tt.normal }
        this.options.pedantic
          ? ((t.block = At.pedantic), (t.inline = Tt.pedantic))
          : this.options.gfm &&
            ((t.block = At.gfm),
            this.options.breaks ? (t.inline = Tt.breaks) : (t.inline = Tt.gfm)),
          (this.tokenizer.rules = t)
      }
      static get rules() {
        return { block: At, inline: Tt }
      }
      static lex(t, n) {
        return new e(n).lex(t)
      }
      static lexInline(t, n) {
        return new e(n).inlineTokens(t)
      }
      lex(e) {
        return (
          (e = e.replace(/\r\n|\r/g, '\n').replace(/\t/g, '    ')),
          this.blockTokens(e, this.tokens, !0),
          this.inline(this.tokens),
          this.tokens
        )
      }
      blockTokens(e, t = [], n = !0) {
        let r, o, s, i
        for (e = e.replace(/^ +$/gm, ''); e; )
          if ((r = this.tokenizer.space(e)))
            (e = e.substring(r.raw.length)), r.type && t.push(r)
          else if ((r = this.tokenizer.code(e, t)))
            (e = e.substring(r.raw.length)),
              r.type
                ? t.push(r)
                : ((i = t[t.length - 1]),
                  (i.raw += '\n' + r.raw),
                  (i.text += '\n' + r.text))
          else if ((r = this.tokenizer.fences(e)))
            (e = e.substring(r.raw.length)), t.push(r)
          else if ((r = this.tokenizer.heading(e)))
            (e = e.substring(r.raw.length)), t.push(r)
          else if ((r = this.tokenizer.nptable(e)))
            (e = e.substring(r.raw.length)), t.push(r)
          else if ((r = this.tokenizer.hr(e)))
            (e = e.substring(r.raw.length)), t.push(r)
          else if ((r = this.tokenizer.blockquote(e)))
            (e = e.substring(r.raw.length)),
              (r.tokens = this.blockTokens(r.text, [], n)),
              t.push(r)
          else if ((r = this.tokenizer.list(e))) {
            for (
              e = e.substring(r.raw.length), s = r.items.length, o = 0;
              o < s;
              o++
            )
              r.items[o].tokens = this.blockTokens(r.items[o].text, [], !1)
            t.push(r)
          } else if ((r = this.tokenizer.html(e)))
            (e = e.substring(r.raw.length)), t.push(r)
          else if (n && (r = this.tokenizer.def(e)))
            (e = e.substring(r.raw.length)),
              this.tokens.links[r.tag] ||
                (this.tokens.links[r.tag] = { href: r.href, title: r.title })
          else if ((r = this.tokenizer.table(e)))
            (e = e.substring(r.raw.length)), t.push(r)
          else if ((r = this.tokenizer.lheading(e)))
            (e = e.substring(r.raw.length)), t.push(r)
          else if (n && (r = this.tokenizer.paragraph(e)))
            (e = e.substring(r.raw.length)), t.push(r)
          else if ((r = this.tokenizer.text(e, t)))
            (e = e.substring(r.raw.length)),
              r.type
                ? t.push(r)
                : ((i = t[t.length - 1]),
                  (i.raw += '\n' + r.raw),
                  (i.text += '\n' + r.text))
          else if (e) {
            const t = 'Infinite loop on byte: ' + e.charCodeAt(0)
            if (this.options.silent) {
              console.error(t)
              break
            }
            throw new Error(t)
          }
        return t
      }
      inline(e) {
        let t, n, r, o, s, i
        const a = e.length
        for (t = 0; t < a; t++)
          switch (((i = e[t]), i.type)) {
            case 'paragraph':
            case 'text':
            case 'heading':
              ;(i.tokens = []), this.inlineTokens(i.text, i.tokens)
              break
            case 'table':
              for (
                i.tokens = { header: [], cells: [] },
                  o = i.header.length,
                  n = 0;
                n < o;
                n++
              )
                (i.tokens.header[n] = []),
                  this.inlineTokens(i.header[n], i.tokens.header[n])
              for (o = i.cells.length, n = 0; n < o; n++)
                for (
                  s = i.cells[n], i.tokens.cells[n] = [], r = 0;
                  r < s.length;
                  r++
                )
                  (i.tokens.cells[n][r] = []),
                    this.inlineTokens(s[r], i.tokens.cells[n][r])
              break
            case 'blockquote':
              this.inline(i.tokens)
              break
            case 'list':
              for (o = i.items.length, n = 0; n < o; n++)
                this.inline(i.items[n].tokens)
          }
        return e
      }
      inlineTokens(e, t = [], n = !1, r = !1) {
        let o,
          s,
          i,
          a,
          c = e
        if (this.tokens.links) {
          const e = Object.keys(this.tokens.links)
          if (e.length > 0)
            for (
              ;
              null != (s = this.tokenizer.rules.inline.reflinkSearch.exec(c));

            )
              e.includes(s[0].slice(s[0].lastIndexOf('[') + 1, -1)) &&
                (c =
                  c.slice(0, s.index) +
                  '[' +
                  Lt('a', s[0].length - 2) +
                  ']' +
                  c.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))
        }
        for (; null != (s = this.tokenizer.rules.inline.blockSkip.exec(c)); )
          c =
            c.slice(0, s.index) +
            '[' +
            Lt('a', s[0].length - 2) +
            ']' +
            c.slice(this.tokenizer.rules.inline.blockSkip.lastIndex)
        for (; e; )
          if ((i || (a = ''), (i = !1), (o = this.tokenizer.escape(e))))
            (e = e.substring(o.raw.length)), t.push(o)
          else if ((o = this.tokenizer.tag(e, n, r)))
            (e = e.substring(o.raw.length)),
              (n = o.inLink),
              (r = o.inRawBlock),
              t.push(o)
          else if ((o = this.tokenizer.link(e)))
            (e = e.substring(o.raw.length)),
              'link' === o.type &&
                (o.tokens = this.inlineTokens(o.text, [], !0, r)),
              t.push(o)
          else if ((o = this.tokenizer.reflink(e, this.tokens.links)))
            (e = e.substring(o.raw.length)),
              'link' === o.type &&
                (o.tokens = this.inlineTokens(o.text, [], !0, r)),
              t.push(o)
          else if ((o = this.tokenizer.strong(e, c, a)))
            (e = e.substring(o.raw.length)),
              (o.tokens = this.inlineTokens(o.text, [], n, r)),
              t.push(o)
          else if ((o = this.tokenizer.em(e, c, a)))
            (e = e.substring(o.raw.length)),
              (o.tokens = this.inlineTokens(o.text, [], n, r)),
              t.push(o)
          else if ((o = this.tokenizer.codespan(e)))
            (e = e.substring(o.raw.length)), t.push(o)
          else if ((o = this.tokenizer.br(e)))
            (e = e.substring(o.raw.length)), t.push(o)
          else if ((o = this.tokenizer.del(e)))
            (e = e.substring(o.raw.length)),
              (o.tokens = this.inlineTokens(o.text, [], n, r)),
              t.push(o)
          else if ((o = this.tokenizer.autolink(e, It)))
            (e = e.substring(o.raw.length)), t.push(o)
          else if (n || !(o = this.tokenizer.url(e, It))) {
            if ((o = this.tokenizer.inlineText(e, r, Pt)))
              (e = e.substring(o.raw.length)),
                (a = o.raw.slice(-1)),
                (i = !0),
                t.push(o)
            else if (e) {
              const t = 'Infinite loop on byte: ' + e.charCodeAt(0)
              if (this.options.silent) {
                console.error(t)
                break
              }
              throw new Error(t)
            }
          } else (e = e.substring(o.raw.length)), t.push(o)
        return t
      }
    }
    const { defaults: Dt } = Ke,
      { cleanUrl: jt, escape: Ot } = ht
    var zt = class {
        constructor(e) {
          this.options = e || Dt
        }
        code(e, t, n) {
          const r = (t || '').match(/\S*/)[0]
          if (this.options.highlight) {
            const t = this.options.highlight(e, r)
            null != t && t !== e && ((n = !0), (e = t))
          }
          return r
            ? '<pre><code class="' +
                this.options.langPrefix +
                Ot(r, !0) +
                '">' +
                (n ? e : Ot(e, !0)) +
                '</code></pre>\n'
            : '<pre><code>' + (n ? e : Ot(e, !0)) + '</code></pre>\n'
        }
        blockquote(e) {
          return '<blockquote>\n' + e + '</blockquote>\n'
        }
        html(e) {
          return e
        }
        heading(e, t, n, r) {
          return this.options.headerIds
            ? '<h' +
                t +
                ' id="' +
                this.options.headerPrefix +
                r.slug(n) +
                '">' +
                e +
                '</h' +
                t +
                '>\n'
            : '<h' + t + '>' + e + '</h' + t + '>\n'
        }
        hr() {
          return this.options.xhtml ? '<hr/>\n' : '<hr>\n'
        }
        list(e, t, n) {
          const r = t ? 'ol' : 'ul'
          return (
            '<' +
            r +
            (t && 1 !== n ? ' start="' + n + '"' : '') +
            '>\n' +
            e +
            '</' +
            r +
            '>\n'
          )
        }
        listitem(e) {
          return '<li>' + e + '</li>\n'
        }
        checkbox(e) {
          return (
            '<input ' +
            (e ? 'checked="" ' : '') +
            'disabled="" type="checkbox"' +
            (this.options.xhtml ? ' /' : '') +
            '> '
          )
        }
        paragraph(e) {
          return '<p>' + e + '</p>\n'
        }
        table(e, t) {
          return (
            t && (t = '<tbody>' + t + '</tbody>'),
            '<table>\n<thead>\n' + e + '</thead>\n' + t + '</table>\n'
          )
        }
        tablerow(e) {
          return '<tr>\n' + e + '</tr>\n'
        }
        tablecell(e, t) {
          const n = t.header ? 'th' : 'td'
          return (
            (t.align ? '<' + n + ' align="' + t.align + '">' : '<' + n + '>') +
            e +
            '</' +
            n +
            '>\n'
          )
        }
        strong(e) {
          return '<strong>' + e + '</strong>'
        }
        em(e) {
          return '<em>' + e + '</em>'
        }
        codespan(e) {
          return '<code>' + e + '</code>'
        }
        br() {
          return this.options.xhtml ? '<br/>' : '<br>'
        }
        del(e) {
          return '<del>' + e + '</del>'
        }
        link(e, t, n) {
          if (null === (e = jt(this.options.sanitize, this.options.baseUrl, e)))
            return n
          let r = '<a href="' + Ot(e) + '"'
          return t && (r += ' title="' + t + '"'), (r += '>' + n + '</a>'), r
        }
        image(e, t, n) {
          if (null === (e = jt(this.options.sanitize, this.options.baseUrl, e)))
            return n
          let r = '<img src="' + e + '" alt="' + n + '"'
          return (
            t && (r += ' title="' + t + '"'),
            (r += this.options.xhtml ? '/>' : '>'),
            r
          )
        }
        text(e) {
          return e
        }
      },
      Mt = class {
        strong(e) {
          return e
        }
        em(e) {
          return e
        }
        codespan(e) {
          return e
        }
        del(e) {
          return e
        }
        html(e) {
          return e
        }
        text(e) {
          return e
        }
        link(e, t, n) {
          return '' + n
        }
        image(e, t, n) {
          return '' + n
        }
        br() {
          return ''
        }
      },
      Wt = class {
        constructor() {
          this.seen = {}
        }
        serialize(e) {
          return e
            .toLowerCase()
            .trim()
            .replace(/<[!\/a-z].*?>/gi, '')
            .replace(
              /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,
              ''
            )
            .replace(/\s/g, '-')
        }
        getNextSafeSlug(e, t) {
          let n = e,
            r = 0
          if (this.seen.hasOwnProperty(n)) {
            r = this.seen[e]
            do {
              r++, (n = e + '-' + r)
            } while (this.seen.hasOwnProperty(n))
          }
          return t || ((this.seen[e] = r), (this.seen[n] = 0)), n
        }
        slug(e, t = {}) {
          const n = this.serialize(e)
          return this.getNextSafeSlug(n, t.dryrun)
        }
      }
    const { defaults: Ut } = Ke,
      { unescape: Ft } = ht
    var qt = class e {
      constructor(e) {
        ;(this.options = e || Ut),
          (this.options.renderer = this.options.renderer || new zt()),
          (this.renderer = this.options.renderer),
          (this.renderer.options = this.options),
          (this.textRenderer = new Mt()),
          (this.slugger = new Wt())
      }
      static parse(t, n) {
        return new e(n).parse(t)
      }
      static parseInline(t, n) {
        return new e(n).parseInline(t)
      }
      parse(e, t = !0) {
        let n,
          r,
          o,
          s,
          i,
          a,
          c,
          l,
          u,
          d,
          p,
          f,
          h,
          m,
          g,
          b,
          w,
          y,
          v = ''
        const k = e.length
        for (n = 0; n < k; n++)
          switch (((d = e[n]), d.type)) {
            case 'space':
              continue
            case 'hr':
              v += this.renderer.hr()
              continue
            case 'heading':
              v += this.renderer.heading(
                this.parseInline(d.tokens),
                d.depth,
                Ft(this.parseInline(d.tokens, this.textRenderer)),
                this.slugger
              )
              continue
            case 'code':
              v += this.renderer.code(d.text, d.lang, d.escaped)
              continue
            case 'table':
              for (l = '', c = '', s = d.header.length, r = 0; r < s; r++)
                c += this.renderer.tablecell(
                  this.parseInline(d.tokens.header[r]),
                  { header: !0, align: d.align[r] }
                )
              for (
                l += this.renderer.tablerow(c),
                  u = '',
                  s = d.cells.length,
                  r = 0;
                r < s;
                r++
              ) {
                for (
                  a = d.tokens.cells[r], c = '', i = a.length, o = 0;
                  o < i;
                  o++
                )
                  c += this.renderer.tablecell(this.parseInline(a[o]), {
                    header: !1,
                    align: d.align[o],
                  })
                u += this.renderer.tablerow(c)
              }
              v += this.renderer.table(l, u)
              continue
            case 'blockquote':
              ;(u = this.parse(d.tokens)), (v += this.renderer.blockquote(u))
              continue
            case 'list':
              for (
                p = d.ordered,
                  f = d.start,
                  h = d.loose,
                  s = d.items.length,
                  u = '',
                  r = 0;
                r < s;
                r++
              )
                (g = d.items[r]),
                  (b = g.checked),
                  (w = g.task),
                  (m = ''),
                  g.task &&
                    ((y = this.renderer.checkbox(b)),
                    h
                      ? g.tokens.length > 0 && 'text' === g.tokens[0].type
                        ? ((g.tokens[0].text = y + ' ' + g.tokens[0].text),
                          g.tokens[0].tokens &&
                            g.tokens[0].tokens.length > 0 &&
                            'text' === g.tokens[0].tokens[0].type &&
                            (g.tokens[0].tokens[0].text =
                              y + ' ' + g.tokens[0].tokens[0].text))
                        : g.tokens.unshift({ type: 'text', text: y })
                      : (m += y)),
                  (m += this.parse(g.tokens, h)),
                  (u += this.renderer.listitem(m, w, b))
              v += this.renderer.list(u, p, f)
              continue
            case 'html':
              v += this.renderer.html(d.text)
              continue
            case 'paragraph':
              v += this.renderer.paragraph(this.parseInline(d.tokens))
              continue
            case 'text':
              for (
                u = d.tokens ? this.parseInline(d.tokens) : d.text;
                n + 1 < k && 'text' === e[n + 1].type;

              )
                (d = e[++n]),
                  (u += '\n' + (d.tokens ? this.parseInline(d.tokens) : d.text))
              v += t ? this.renderer.paragraph(u) : u
              continue
            default: {
              const e = 'Token with "' + d.type + '" type was not found.'
              if (this.options.silent) return void console.error(e)
              throw new Error(e)
            }
          }
        return v
      }
      parseInline(e, t) {
        t = t || this.renderer
        let n,
          r,
          o = ''
        const s = e.length
        for (n = 0; n < s; n++)
          switch (((r = e[n]), r.type)) {
            case 'escape':
              o += t.text(r.text)
              break
            case 'html':
              o += t.html(r.text)
              break
            case 'link':
              o += t.link(r.href, r.title, this.parseInline(r.tokens, t))
              break
            case 'image':
              o += t.image(r.href, r.title, r.text)
              break
            case 'strong':
              o += t.strong(this.parseInline(r.tokens, t))
              break
            case 'em':
              o += t.em(this.parseInline(r.tokens, t))
              break
            case 'codespan':
              o += t.codespan(r.text)
              break
            case 'br':
              o += t.br()
              break
            case 'del':
              o += t.del(this.parseInline(r.tokens, t))
              break
            case 'text':
              o += t.text(r.text)
              break
            default: {
              const e = 'Token with "' + r.type + '" type was not found.'
              if (this.options.silent) return void console.error(e)
              throw new Error(e)
            }
          }
        return o
      }
    }
    const { merge: Bt, checkSanitizeDeprecation: Ht, escape: Gt } = ht,
      { getDefaults: Vt, changeDefaults: Zt, defaults: Yt } = Ke
    function Kt(e, t, n) {
      if (null == e)
        throw new Error('marked(): input parameter is undefined or null')
      if ('string' != typeof e)
        throw new Error(
          'marked(): input parameter is of type ' +
            Object.prototype.toString.call(e) +
            ', string expected'
        )
      if (
        ('function' == typeof t && ((n = t), (t = null)),
        (t = Bt({}, Kt.defaults, t || {})),
        Ht(t),
        n)
      ) {
        const r = t.highlight
        let o
        try {
          o = Nt.lex(e, t)
        } catch (e) {
          return n(e)
        }
        const s = function (e) {
          let s
          if (!e)
            try {
              s = qt.parse(o, t)
            } catch (t) {
              e = t
            }
          return (t.highlight = r), e ? n(e) : n(null, s)
        }
        if (!r || r.length < 3) return s()
        if ((delete t.highlight, !o.length)) return s()
        let i = 0
        return (
          Kt.walkTokens(o, function (e) {
            'code' === e.type &&
              (i++,
              setTimeout(() => {
                r(e.text, e.lang, function (t, n) {
                  if (t) return s(t)
                  null != n && n !== e.text && ((e.text = n), (e.escaped = !0)),
                    i--,
                    0 === i && s()
                })
              }, 0))
          }),
          void (0 === i && s())
        )
      }
      try {
        const n = Nt.lex(e, t)
        return t.walkTokens && Kt.walkTokens(n, t.walkTokens), qt.parse(n, t)
      } catch (e) {
        if (
          ((e.message +=
            '\nPlease report this to https://github.com/markedjs/marked.'),
          t.silent)
        )
          return (
            '<p>An error occurred:</p><pre>' + Gt(e.message + '', !0) + '</pre>'
          )
        throw e
      }
    }
    ;(Kt.options = Kt.setOptions = function (e) {
      return Bt(Kt.defaults, e), Zt(Kt.defaults), Kt
    }),
      (Kt.getDefaults = Vt),
      (Kt.defaults = Yt),
      (Kt.use = function (e) {
        const t = Bt({}, e)
        if (e.renderer) {
          const n = Kt.defaults.renderer || new zt()
          for (const t in e.renderer) {
            const r = n[t]
            n[t] = (...o) => {
              let s = e.renderer[t].apply(n, o)
              return !1 === s && (s = r.apply(n, o)), s
            }
          }
          t.renderer = n
        }
        if (e.tokenizer) {
          const n = Kt.defaults.tokenizer || new kt()
          for (const t in e.tokenizer) {
            const r = n[t]
            n[t] = (...o) => {
              let s = e.tokenizer[t].apply(n, o)
              return !1 === s && (s = r.apply(n, o)), s
            }
          }
          t.tokenizer = n
        }
        if (e.walkTokens) {
          const n = Kt.defaults.walkTokens
          t.walkTokens = (t) => {
            e.walkTokens(t), n && n(t)
          }
        }
        Kt.setOptions(t)
      }),
      (Kt.walkTokens = function (e, t) {
        for (const n of e)
          switch ((t(n), n.type)) {
            case 'table':
              for (const e of n.tokens.header) Kt.walkTokens(e, t)
              for (const e of n.tokens.cells)
                for (const n of e) Kt.walkTokens(n, t)
              break
            case 'list':
              Kt.walkTokens(n.items, t)
              break
            default:
              n.tokens && Kt.walkTokens(n.tokens, t)
          }
      }),
      (Kt.parseInline = function (e, t) {
        if (null == e)
          throw new Error(
            'marked.parseInline(): input parameter is undefined or null'
          )
        if ('string' != typeof e)
          throw new Error(
            'marked.parseInline(): input parameter is of type ' +
              Object.prototype.toString.call(e) +
              ', string expected'
          )
        ;(t = Bt({}, Kt.defaults, t || {})), Ht(t)
        try {
          const n = Nt.lexInline(e, t)
          return (
            t.walkTokens && Kt.walkTokens(n, t.walkTokens), qt.parseInline(n, t)
          )
        } catch (e) {
          if (
            ((e.message +=
              '\nPlease report this to https://github.com/markedjs/marked.'),
            t.silent)
          )
            return (
              '<p>An error occurred:</p><pre>' +
              Gt(e.message + '', !0) +
              '</pre>'
            )
          throw e
        }
      }),
      (Kt.Parser = qt),
      (Kt.parser = qt.parse),
      (Kt.Renderer = zt),
      (Kt.TextRenderer = Mt),
      (Kt.Lexer = Nt),
      (Kt.lexer = Nt.lex),
      (Kt.Tokenizer = kt),
      (Kt.Slugger = Wt),
      (Kt.parse = Kt)
    var Jt = Kt
    'undefined' != typeof globalThis
      ? globalThis
      : 'undefined' != typeof window
      ? window
      : 'undefined' != typeof global
      ? global
      : 'undefined' != typeof self && self
    var Xt = (function (e, t) {
        return e((t = { exports: {} }), t.exports), t.exports
      })(function (e, t) {
        !(function (t, n) {
          e.exports = n()
        })(0, function () {
          var e = [],
            t = [],
            n = {},
            r = {},
            o = {}
          function s(e) {
            return 'string' == typeof e ? new RegExp('^' + e + '$', 'i') : e
          }
          function i(e, t) {
            return e === t
              ? t
              : e === e.toLowerCase()
              ? t.toLowerCase()
              : e === e.toUpperCase()
              ? t.toUpperCase()
              : e[0] === e[0].toUpperCase()
              ? t.charAt(0).toUpperCase() + t.substr(1).toLowerCase()
              : t.toLowerCase()
          }
          function a(e, t) {
            return e.replace(/\$(\d{1,2})/g, function (e, n) {
              return t[n] || ''
            })
          }
          function c(e, t) {
            return e.replace(t[0], function (n, r) {
              var o = a(t[1], arguments)
              return i('' === n ? e[r - 1] : n, o)
            })
          }
          function l(e, t, r) {
            if (!e.length || n.hasOwnProperty(e)) return t
            for (var o = r.length; o--; ) {
              var s = r[o]
              if (s[0].test(t)) return c(t, s)
            }
            return t
          }
          function u(e, t, n) {
            return function (r) {
              var o = r.toLowerCase()
              return t.hasOwnProperty(o)
                ? i(r, o)
                : e.hasOwnProperty(o)
                ? i(r, e[o])
                : l(o, r, n)
            }
          }
          function d(e, t, n, r) {
            return function (r) {
              var o = r.toLowerCase()
              return (
                !!t.hasOwnProperty(o) ||
                (!e.hasOwnProperty(o) && l(o, o, n) === o)
              )
            }
          }
          function p(e, t, n) {
            return (n ? t + ' ' : '') + (1 === t ? p.singular(e) : p.plural(e))
          }
          return (
            (p.plural = u(o, r, e)),
            (p.isPlural = d(o, r, e)),
            (p.singular = u(r, o, t)),
            (p.isSingular = d(r, o, t)),
            (p.addPluralRule = function (t, n) {
              e.push([s(t), n])
            }),
            (p.addSingularRule = function (e, n) {
              t.push([s(e), n])
            }),
            (p.addUncountableRule = function (e) {
              'string' != typeof e
                ? (p.addPluralRule(e, '$0'), p.addSingularRule(e, '$0'))
                : (n[e.toLowerCase()] = !0)
            }),
            (p.addIrregularRule = function (e, t) {
              ;(t = t.toLowerCase()),
                (e = e.toLowerCase()),
                (o[e] = t),
                (r[t] = e)
            }),
            [
              ['I', 'we'],
              ['me', 'us'],
              ['he', 'they'],
              ['she', 'they'],
              ['them', 'them'],
              ['myself', 'ourselves'],
              ['yourself', 'yourselves'],
              ['itself', 'themselves'],
              ['herself', 'themselves'],
              ['himself', 'themselves'],
              ['themself', 'themselves'],
              ['is', 'are'],
              ['was', 'were'],
              ['has', 'have'],
              ['this', 'these'],
              ['that', 'those'],
              ['echo', 'echoes'],
              ['dingo', 'dingoes'],
              ['volcano', 'volcanoes'],
              ['tornado', 'tornadoes'],
              ['torpedo', 'torpedoes'],
              ['genus', 'genera'],
              ['viscus', 'viscera'],
              ['stigma', 'stigmata'],
              ['stoma', 'stomata'],
              ['dogma', 'dogmata'],
              ['lemma', 'lemmata'],
              ['schema', 'schemata'],
              ['anathema', 'anathemata'],
              ['ox', 'oxen'],
              ['axe', 'axes'],
              ['die', 'dice'],
              ['yes', 'yeses'],
              ['foot', 'feet'],
              ['eave', 'eaves'],
              ['goose', 'geese'],
              ['tooth', 'teeth'],
              ['quiz', 'quizzes'],
              ['human', 'humans'],
              ['proof', 'proofs'],
              ['carve', 'carves'],
              ['valve', 'valves'],
              ['looey', 'looies'],
              ['thief', 'thieves'],
              ['groove', 'grooves'],
              ['pickaxe', 'pickaxes'],
              ['passerby', 'passersby'],
            ].forEach(function (e) {
              return p.addIrregularRule(e[0], e[1])
            }),
            [
              [/s?$/i, 's'],
              [/[^\u0000-\u007F]$/i, '$0'],
              [/([^aeiou]ese)$/i, '$1'],
              [/(ax|test)is$/i, '$1es'],
              [/(alias|[^aou]us|t[lm]as|gas|ris)$/i, '$1es'],
              [/(e[mn]u)s?$/i, '$1s'],
              [/([^l]ias|[aeiou]las|[ejzr]as|[iu]am)$/i, '$1'],
              [
                /(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,
                '$1i',
              ],
              [/(alumn|alg|vertebr)(?:a|ae)$/i, '$1ae'],
              [/(seraph|cherub)(?:im)?$/i, '$1im'],
              [/(her|at|gr)o$/i, '$1oes'],
              [
                /(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|automat|quor)(?:a|um)$/i,
                '$1a',
              ],
              [
                /(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)(?:a|on)$/i,
                '$1a',
              ],
              [/sis$/i, 'ses'],
              [/(?:(kni|wi|li)fe|(ar|l|ea|eo|oa|hoo)f)$/i, '$1$2ves'],
              [/([^aeiouy]|qu)y$/i, '$1ies'],
              [/([^ch][ieo][ln])ey$/i, '$1ies'],
              [/(x|ch|ss|sh|zz)$/i, '$1es'],
              [/(matr|cod|mur|sil|vert|ind|append)(?:ix|ex)$/i, '$1ices'],
              [/\b((?:tit)?m|l)(?:ice|ouse)$/i, '$1ice'],
              [/(pe)(?:rson|ople)$/i, '$1ople'],
              [/(child)(?:ren)?$/i, '$1ren'],
              [/eaux$/i, '$0'],
              [/m[ae]n$/i, 'men'],
              ['thou', 'you'],
            ].forEach(function (e) {
              return p.addPluralRule(e[0], e[1])
            }),
            [
              [/s$/i, ''],
              [/(ss)$/i, '$1'],
              [
                /(wi|kni|(?:after|half|high|low|mid|non|night|[^\w]|^)li)ves$/i,
                '$1fe',
              ],
              [/(ar|(?:wo|[ae])l|[eo][ao])ves$/i, '$1f'],
              [/ies$/i, 'y'],
              [
                /\b([pl]|zomb|(?:neck|cross)?t|coll|faer|food|gen|goon|group|lass|talk|goal|cut)ies$/i,
                '$1ie',
              ],
              [/\b(mon|smil)ies$/i, '$1ey'],
              [/\b((?:tit)?m|l)ice$/i, '$1ouse'],
              [/(seraph|cherub)im$/i, '$1'],
              [
                /(x|ch|ss|sh|zz|tto|go|cho|alias|[^aou]us|t[lm]as|gas|(?:her|at|gr)o|[aeiou]ris)(?:es)?$/i,
                '$1',
              ],
              [
                /(analy|diagno|parenthe|progno|synop|the|empha|cri|ne)(?:sis|ses)$/i,
                '$1sis',
              ],
              [/(movie|twelve|abuse|e[mn]u)s$/i, '$1'],
              [/(test)(?:is|es)$/i, '$1is'],
              [
                /(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,
                '$1us',
              ],
              [
                /(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|quor)a$/i,
                '$1um',
              ],
              [
                /(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)a$/i,
                '$1on',
              ],
              [/(alumn|alg|vertebr)ae$/i, '$1a'],
              [/(cod|mur|sil|vert|ind)ices$/i, '$1ex'],
              [/(matr|append)ices$/i, '$1ix'],
              [/(pe)(rson|ople)$/i, '$1rson'],
              [/(child)ren$/i, '$1'],
              [/(eau)x?$/i, '$1'],
              [/men$/i, 'man'],
            ].forEach(function (e) {
              return p.addSingularRule(e[0], e[1])
            }),
            [
              'adulthood',
              'advice',
              'agenda',
              'aid',
              'aircraft',
              'alcohol',
              'ammo',
              'analytics',
              'anime',
              'athletics',
              'audio',
              'bison',
              'blood',
              'bream',
              'buffalo',
              'butter',
              'carp',
              'cash',
              'chassis',
              'chess',
              'clothing',
              'cod',
              'commerce',
              'cooperation',
              'corps',
              'debris',
              'diabetes',
              'digestion',
              'elk',
              'energy',
              'equipment',
              'excretion',
              'expertise',
              'firmware',
              'flounder',
              'fun',
              'gallows',
              'garbage',
              'graffiti',
              'hardware',
              'headquarters',
              'health',
              'herpes',
              'highjinks',
              'homework',
              'housework',
              'information',
              'jeans',
              'justice',
              'kudos',
              'labour',
              'literature',
              'machinery',
              'mackerel',
              'mail',
              'media',
              'mews',
              'moose',
              'music',
              'mud',
              'manga',
              'news',
              'only',
              'personnel',
              'pike',
              'plankton',
              'pliers',
              'police',
              'pollution',
              'premises',
              'rain',
              'research',
              'rice',
              'salmon',
              'scissors',
              'series',
              'sewage',
              'shambles',
              'shrimp',
              'software',
              'species',
              'staff',
              'swine',
              'tennis',
              'traffic',
              'transportation',
              'trout',
              'tuna',
              'wealth',
              'welfare',
              'whiting',
              'wildebeest',
              'wildlife',
              'you',
              /pok[eé]mon$/i,
              /[^aeiou]ese$/i,
              /deer$/i,
              /fish$/i,
              /measles$/i,
              /o[iu]s$/i,
              /pox$/i,
              /sheep$/i,
            ].forEach(p.addUncountableRule),
            p
          )
        })
      }),
      Qt = (function (e) {
        var t = {}
        try {
          t.WeakMap = WeakMap
        } catch (u) {
          t.WeakMap = (function (e, t) {
            var n = t.defineProperty,
              r = t.hasOwnProperty,
              o = s.prototype
            return (
              (o.delete = function (e) {
                return this.has(e) && delete e[this._]
              }),
              (o.get = function (e) {
                return this.has(e) ? e[this._] : void 0
              }),
              (o.has = function (e) {
                return r.call(e, this._)
              }),
              (o.set = function (e, t) {
                return n(e, this._, { configurable: !0, value: t }), this
              }),
              s
            )
            function s(t) {
              n(this, '_', { value: '_@ungap/weakmap' + e++ }),
                t && t.forEach(i, this)
            }
            function i(e) {
              this.set(e[0], e[1])
            }
          })(Math.random(), Object)
        }
        var n = t.WeakMap,
          r = {}
        try {
          r.WeakSet = WeakSet
        } catch (u) {
          !(function (e, t) {
            var n = o.prototype
            function o() {
              t(this, '_', { value: '_@ungap/weakmap' + e++ })
            }
            ;(n.add = function (e) {
              return (
                this.has(e) || t(e, this._, { value: !0, configurable: !0 }),
                this
              )
            }),
              (n.has = function (e) {
                return this.hasOwnProperty.call(e, this._)
              }),
              (n.delete = function (e) {
                return this.has(e) && delete e[this._]
              }),
              (r.WeakSet = o)
          })(Math.random(), Object.defineProperty)
        }
        function o(e, t, n, r, o, s) {
          for (var i = ('selectedIndex' in t), a = i; r < o; ) {
            var c,
              l = e(n[r], 1)
            t.insertBefore(l, s),
              i &&
                a &&
                l.selected &&
                ((a = !a),
                (c = t.selectedIndex),
                (t.selectedIndex =
                  c < 0 ? r : d.call(t.querySelectorAll('option'), l))),
              r++
          }
        }
        function s(e, t) {
          return e == t
        }
        function i(e) {
          return e
        }
        function a(e, t, n, r, o, s, i) {
          var a = s - o
          if (a < 1) return -1
          for (; a <= n - t; ) {
            for (var c = t, l = o; c < n && l < s && i(e[c], r[l]); ) c++, l++
            if (l === s) return t
            t = c + 1
          }
          return -1
        }
        function c(e, t, n, r, o) {
          return n < r ? e(t[n], 0) : 0 < n ? e(t[n - 1], -0).nextSibling : o
        }
        function l(e, t, n, r) {
          for (; n < r; ) f(e(t[n++], -1))
        }
        var u = r.WeakSet,
          d = [].indexOf,
          p = function (e, t, n) {
            for (var r = 1, o = t; r < o; ) {
              var s = ((r + o) / 2) >>> 0
              n < e[s] ? (o = s) : (r = 1 + s)
            }
            return r
          },
          f = function (e) {
            return (
              e.remove ||
              function () {
                var e = this.parentNode
                e && e.removeChild(this)
              }
            ).call(e)
          }
        function h(e, t, n, r) {
          for (
            var u = (r = r || {}).compare || s,
              d = r.node || i,
              f = null == r.before ? null : d(r.before, 0),
              h = t.length,
              m = h,
              g = 0,
              b = n.length,
              w = 0;
            g < m && w < b && u(t[g], n[w]);

          )
            g++, w++
          for (; g < m && w < b && u(t[m - 1], n[b - 1]); ) m--, b--
          var y = g === m,
            v = w === b
          if (y && v) return n
          if (y && w < b) return o(d, e, n, w, b, c(d, t, g, h, f)), n
          if (v && g < m) return l(d, t, g, m), n
          var k = m - g,
            x = b - w,
            $ = -1
          if (k < x) {
            if (-1 < ($ = a(n, w, b, t, g, m, u)))
              return (
                o(d, e, n, w, $, d(t[g], 0)),
                o(d, e, n, $ + k, b, c(d, t, m, h, f)),
                n
              )
          } else if (x < k && -1 < ($ = a(t, g, m, n, w, b, u)))
            return l(d, t, g, $), l(d, t, $ + x, m), n
          return (
            k < 2 || x < 2
              ? (o(d, e, n, w, b, d(t[g], 0)), l(d, t, g, m))
              : k == x &&
                (function (e, t, n, r, o, s) {
                  for (; r < o && s(n[r], e[t - 1]); ) r++, t--
                  return 0 === t
                })(n, b, t, g, m, u)
              ? o(d, e, n, w, b, c(d, t, m, h, f))
              : (function (e, t, n, r, s, i, a, c, u, d, f, h, m) {
                  !(function (e, t, n, r, s, i, a, c, u) {
                    for (var d = [], p = e.length, f = a, h = 0; h < p; )
                      switch (e[h++]) {
                        case 0:
                          s++, f++
                          break
                        case 1:
                          d.push(r[s]),
                            o(t, n, r, s++, s, f < c ? t(i[f], 0) : u)
                          break
                        case -1:
                          f++
                      }
                    for (h = 0; h < p; )
                      switch (e[h++]) {
                        case 0:
                          a++
                          break
                        case -1:
                          ;-1 < d.indexOf(i[a]) ? a++ : l(t, i, a++, a)
                      }
                  })(
                    (function (e, t, n, r, o, s, i) {
                      var a,
                        c,
                        l,
                        u,
                        d,
                        p,
                        f = n + s,
                        h = []
                      e: for (b = 0; b <= f; b++) {
                        if (50 < b) return null
                        for (
                          p = b - 1,
                            u = b ? h[b - 1] : [0, 0],
                            d = h[b] = [],
                            a = -b;
                          a <= b;
                          a += 2
                        ) {
                          for (
                            c =
                              (l =
                                a === -b ||
                                (a !== b && u[p + a - 1] < u[p + a + 1])
                                  ? u[p + a + 1]
                                  : u[p + a - 1] + 1) - a;
                            l < s && c < n && i(r[o + l], e[t + c]);

                          )
                            l++, c++
                          if (l === s && c === n) break e
                          d[b + a] = l
                        }
                      }
                      for (
                        var m = Array(b / 2 + f / 2),
                          g = m.length - 1,
                          b = h.length - 1;
                        0 <= b;
                        b--
                      ) {
                        for (
                          ;
                          0 < l && 0 < c && i(r[o + l - 1], e[t + c - 1]);

                        )
                          (m[g--] = 0), l--, c--
                        if (!b) break
                        ;(p = b - 1),
                          (u = b ? h[b - 1] : [0, 0]),
                          (a = l - c) == -b ||
                          (a !== b && u[p + a - 1] < u[p + a + 1])
                            ? (c--, (m[g--] = 1))
                            : (l--, (m[g--] = -1))
                      }
                      return m
                    })(n, r, i, a, c, d, h) ||
                      (function (e, t, n, r, o, s, i, a) {
                        var c = 0,
                          l = r < a ? r : a,
                          u = Array(l++),
                          d = Array(l)
                        d[0] = -1
                        for (var f = 1; f < l; f++) d[f] = i
                        for (var h = o.slice(s, i), m = t; m < n; m++) {
                          var g,
                            b = h.indexOf(e[m])
                          ;-1 < b &&
                            -1 < (c = p(d, l, (g = b + s))) &&
                            ((d[c] = g),
                            (u[c] = { newi: m, oldi: g, prev: u[c - 1] }))
                        }
                        for (c = --l, --i; d[c] > i; ) --c
                        l = a + r - c
                        var w = Array(l),
                          y = u[c]
                        for (--n; y; ) {
                          for (var v = y.newi, k = y.oldi; v < n; )
                            (w[--l] = 1), --n
                          for (; k < i; ) (w[--l] = -1), --i
                          ;(w[--l] = 0), --n, --i, (y = y.prev)
                        }
                        for (; t <= n; ) (w[--l] = 1), --n
                        for (; s <= i; ) (w[--l] = -1), --i
                        return w
                      })(n, r, s, i, a, c, u, d),
                    e,
                    t,
                    n,
                    r,
                    a,
                    c,
                    f,
                    m
                  )
                })(d, e, n, w, b, x, t, g, m, k, h, u, f),
            n
          )
        }
        var m = {}
        function g(t, n) {
          n = n || {}
          var r = e.createEvent('CustomEvent')
          return r.initCustomEvent(t, !!n.bubbles, !!n.cancelable, n.detail), r
        }
        m.CustomEvent =
          'function' == typeof CustomEvent
            ? CustomEvent
            : ((g['prototype'] = new g('').constructor.prototype), g)
        var b = m.CustomEvent,
          w = {}
        try {
          w.Map = Map
        } catch (u) {
          w.Map = function () {
            var e = 0,
              t = [],
              n = []
            return {
              delete: function (o) {
                var s = r(o)
                return s && (t.splice(e, 1), n.splice(e, 1)), s
              },
              forEach: function (e, r) {
                t.forEach(function (t, o) {
                  e.call(r, n[o], t, this)
                }, this)
              },
              get: function (t) {
                return r(t) ? n[e] : void 0
              },
              has: r,
              set: function (o, s) {
                return (n[r(o) ? e : t.push(o) - 1] = s), this
              },
            }
            function r(n) {
              return -1 < (e = t.indexOf(n))
            }
          }
        }
        var y = w.Map
        function v() {
          return this
        }
        function k(e, t) {
          var n = '_' + e + '$'
          return {
            get: function () {
              return this[n] || x(this, n, t.call(this, e))
            },
            set: function (e) {
              x(this, n, e)
            },
          }
        }
        var x = function (e, t, n) {
          return Object.defineProperty(e, t, {
            configurable: !0,
            value:
              'function' == typeof n
                ? function () {
                    return (e._wire$ = n.apply(this, arguments))
                  }
                : n,
          })[t]
        }
        Object.defineProperties(v.prototype, {
          ELEMENT_NODE: { value: 1 },
          nodeType: { value: -1 },
        })
        var $,
          _,
          S,
          C,
          R,
          E,
          A = {},
          T = {},
          L = [],
          P = T.hasOwnProperty,
          I = 0,
          N = {
            attributes: A,
            define: function (e, t) {
              e.indexOf('-') < 0
                ? (e in T || (I = L.push(e)), (T[e] = t))
                : (A[e] = t)
            },
            invoke: function (e, t) {
              for (var n = 0; n < I; n++) {
                var r = L[n]
                if (P.call(e, r)) return T[r](e[r], t)
              }
            },
          },
          D =
            Array.isArray ||
            ((_ = ($ = {}.toString).call([])),
            function (e) {
              return $.call(e) === _
            }),
          j =
            ((S = e),
            (C = 'fragment'),
            (E =
              'content' in z((R = 'template'))
                ? function (e) {
                    var t = z(R)
                    return (t.innerHTML = e), t.content
                  }
                : function (e) {
                    var t,
                      n = z(C),
                      r = z(R)
                    return (
                      O(
                        n,
                        /^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(
                          e
                        )
                          ? ((t = RegExp.$1),
                            (r.innerHTML = '<table>' + e + '</table>'),
                            r.querySelectorAll(t))
                          : ((r.innerHTML = e), r.childNodes)
                      ),
                      n
                    )
                  }),
            function (e, t) {
              return ('svg' === t
                ? function (e) {
                    var t = z(C),
                      n = z('div')
                    return (
                      (n.innerHTML =
                        '<svg xmlns="http://www.w3.org/2000/svg">' +
                        e +
                        '</svg>'),
                      O(t, n.firstChild.childNodes),
                      t
                    )
                  }
                : E)(e)
            })
        function O(e, t) {
          for (var n = t.length; n--; ) e.appendChild(t[0])
        }
        function z(e) {
          return e === C
            ? S.createDocumentFragment()
            : S.createElementNS('http://www.w3.org/1999/xhtml', e)
        }
        var M,
          W,
          U,
          F,
          q,
          B,
          H,
          G,
          V,
          Z =
            ((W = 'appendChild'),
            (U = 'cloneNode'),
            (F = 'createTextNode'),
            (B = (q = 'importNode') in (M = e)),
            (H = M.createDocumentFragment())[W](M[F]('g')),
            H[W](M[F]('')),
            (B ? M[q](H, !0) : H[U](!0)).childNodes.length < 2
              ? function e(t, n) {
                  for (
                    var r = t[U](), o = t.childNodes || [], s = o.length, i = 0;
                    n && i < s;
                    i++
                  )
                    r[W](e(o[i], n))
                  return r
                }
              : B
              ? M[q]
              : function (e, t) {
                  return e[U](!!t)
                }),
          Y =
            ''.trim ||
            function () {
              return String(this).replace(/^\s+|\s+/g, '')
            },
          K = '-' + Math.random().toFixed(6) + '%',
          J = !1
        try {
          ;(G = e.createElement('template')),
            (V = 'tabindex'),
            ('content' in G &&
              ((G.innerHTML = '<p ' + V + '="' + K + '"></p>'),
              G.content.childNodes[0].getAttribute(V) == K)) ||
              ((K = '_dt: ' + K.slice(1, -1) + ';'), (J = !0))
        } catch (u) {}
        var X = '\x3c!--' + K + '--\x3e',
          Q = /^(?:style|textarea)$/i,
          ee = /^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i,
          te = ' \\f\\n\\r\\t',
          ne = '[^' + te + '\\/>"\'=]+',
          re = '[' + te + ']+' + ne,
          oe = '<([A-Za-z]+[A-Za-z0-9:._-]*)((?:',
          se =
            '(?:\\s*=\\s*(?:\'[^\']*?\'|"[^"]*?"|<[^>]*?>|' +
            ne.replace('\\/', '') +
            '))?)',
          ie = new RegExp(oe + re + se + '+)([' + te + ']*/?>)', 'g'),
          ae = new RegExp(oe + re + se + '*)([' + te + ']*/>)', 'g'),
          ce = new RegExp('(' + re + '\\s*=\\s*)([\'"]?)' + X + '\\2', 'gi')
        function le(e, t, n, r) {
          return '<' + t + n.replace(ce, ue) + r
        }
        function ue(e, t, n) {
          return t + (n || '"') + K + (n || '"')
        }
        function de(e, t, n) {
          return ee.test(t) ? e : '<' + t + n + '></' + t + '>'
        }
        var pe = J
          ? function (e, t) {
              var n = t.join(' ')
              return t.slice.call(e, 0).sort(function (e, t) {
                return n.indexOf(e.name) <= n.indexOf(t.name) ? -1 : 1
              })
            }
          : function (e, t) {
              return t.slice.call(e, 0)
            }
        function fe(t, n, r, o) {
          for (var s = t.childNodes, i = s.length, a = 0; a < i; ) {
            var c = s[a]
            switch (c.nodeType) {
              case 1:
                var l = o.concat(a)
                !(function (t, n, r, o) {
                  for (
                    var s,
                      i = t.attributes,
                      a = [],
                      c = [],
                      l = pe(i, r),
                      u = l.length,
                      d = 0;
                    d < u;

                  ) {
                    var p = l[d++],
                      f = p.value === K
                    if (f || 1 < (s = p.value.split(X)).length) {
                      var h = p.name
                      if (a.indexOf(h) < 0) {
                        a.push(h)
                        var m = r
                            .shift()
                            .replace(
                              f
                                ? /^(?:|[\S\s]*?\s)(\S+?)\s*=\s*('|")?$/
                                : new RegExp(
                                    '^(?:|[\\S\\s]*?\\s)(' +
                                      h +
                                      ')\\s*=\\s*(\'|")[\\S\\s]*',
                                    'i'
                                  ),
                              '$1'
                            ),
                          g = i[m] || i[m.toLowerCase()]
                        if (f) n.push(he(g, o, m, null))
                        else {
                          for (var b = s.length - 2; b--; ) r.shift()
                          n.push(he(g, o, m, s))
                        }
                      }
                      c.push(p)
                    }
                  }
                  for (
                    var w =
                      (d = 0) < (u = c.length) &&
                      J &&
                      !('ownerSVGElement' in t);
                    d < u;

                  ) {
                    var y = c[d++]
                    w && (y.value = ''), t.removeAttribute(y.name)
                  }
                  var v = t.nodeName
                  if (/^script$/i.test(v)) {
                    var k = e.createElement(v)
                    for (u = i.length, d = 0; d < u; )
                      k.setAttributeNode(i[d++].cloneNode(!0))
                    ;(k.textContent = t.textContent),
                      t.parentNode.replaceChild(k, t)
                  }
                })(c, n, r, l),
                  fe(c, n, r, l)
                break
              case 8:
                var u = c.textContent
                if (u === K)
                  r.shift(),
                    n.push(
                      Q.test(t.nodeName)
                        ? me(t, o)
                        : { type: 'any', node: c, path: o.concat(a) }
                    )
                else
                  switch (u.slice(0, 2)) {
                    case '/*':
                      if ('*/' !== u.slice(-2)) break
                    case '👻':
                      t.removeChild(c), a--, i--
                  }
                break
              case 3:
                Q.test(t.nodeName) &&
                  Y.call(c.textContent) === X &&
                  (r.shift(), n.push(me(t, o)))
            }
            a++
          }
        }
        function he(e, t, n, r) {
          return { type: 'attr', node: e, path: t, name: n, sparse: r }
        }
        function me(e, t) {
          return { type: 'text', node: e, path: t }
        }
        var ge,
          be =
            ((ge = new n()),
            {
              get: function (e) {
                return ge.get(e)
              },
              set: function (e, t) {
                return ge.set(e, t), t
              },
            })
        function we(e, t) {
          var n = (
              e.convert ||
              function (e) {
                return e.join(X).replace(ae, de).replace(ie, le)
              }
            )(t),
            r = e.transform
          r && (n = r(n))
          var o = j(n, e.type)
          ve(o)
          var s = []
          return (
            fe(o, s, t.slice(0), []),
            {
              content: o,
              updates: function (n) {
                for (var r = [], o = s.length, i = 0, a = 0; i < o; ) {
                  var c = s[i++],
                    l = (function (e, t) {
                      for (var n = t.length, r = 0; r < n; )
                        e = e.childNodes[t[r++]]
                      return e
                    })(n, c.path)
                  switch (c.type) {
                    case 'any':
                      r.push({ fn: e.any(l, []), sparse: !1 })
                      break
                    case 'attr':
                      var u = c.sparse,
                        d = e.attribute(l, c.name, c.node)
                      null === u
                        ? r.push({ fn: d, sparse: !1 })
                        : ((a += u.length - 2),
                          r.push({ fn: d, sparse: !0, values: u }))
                      break
                    case 'text':
                      r.push({ fn: e.text(l), sparse: !1 }),
                        (l.textContent = '')
                  }
                }
                return (
                  (o += a),
                  function () {
                    var e = arguments.length
                    if (o !== e - 1)
                      throw new Error(
                        e -
                          1 +
                          ' values instead of ' +
                          o +
                          '\n' +
                          t.join('${value}')
                      )
                    for (var s = 1, i = 1; s < e; ) {
                      var a = r[s - i]
                      if (a.sparse) {
                        var c = a.values,
                          l = c[0],
                          u = 1,
                          d = c.length
                        for (i += d - 2; u < d; ) l += arguments[s++] + c[u++]
                        a.fn(l)
                      } else a.fn(arguments[s++])
                    }
                    return n
                  }
                )
              },
            }
          )
        }
        var ye = []
        function ve(e) {
          for (var t = e.childNodes, n = t.length; n--; ) {
            var r = t[n]
            1 !== r.nodeType &&
              0 === Y.call(r.textContent).length &&
              e.removeChild(r)
          }
        }
        var ke,
          xe,
          $e =
            ((ke = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i),
            (xe = /([^A-Z])([A-Z]+)/g),
            function (e, t) {
              return 'ownerSVGElement' in e
                ? (function (e, t) {
                    var n
                    return (
                      ((n = t
                        ? t.cloneNode(!0)
                        : (e.setAttribute('style', '--hyper:style;'),
                          e.getAttributeNode('style'))).value = ''),
                      e.setAttributeNode(n),
                      Se(n, !0)
                    )
                  })(e, t)
                : Se(e.style, !1)
            })
        function _e(e, t, n) {
          return t + '-' + n.toLowerCase()
        }
        function Se(e, t) {
          var n, r
          return function (o) {
            var s, i, a, c
            switch (typeof o) {
              case 'object':
                if (o) {
                  if ('object' === n) {
                    if (!t && r !== o) for (i in r) i in o || (e[i] = '')
                  } else t ? (e.value = '') : (e.cssText = '')
                  for (i in ((s = t ? {} : e), o))
                    (a =
                      'number' != typeof (c = o[i]) || ke.test(i)
                        ? c
                        : c + 'px'),
                      !t && /^--/.test(i) ? s.setProperty(i, a) : (s[i] = a)
                  ;(n = 'object'),
                    t
                      ? (e.value = (function (e) {
                          var t,
                            n = []
                          for (t in e) n.push(t.replace(xe, _e), ':', e[t], ';')
                          return n.join('')
                        })((r = s)))
                      : (r = o)
                  break
                }
              default:
                r != o &&
                  ((n = 'string'),
                  (r = o),
                  t ? (e.value = o || '') : (e.cssText = o || ''))
            }
          }
        }
        var Ce,
          Re,
          Ee =
            ((Ce = [].slice),
            ((Re = Ae.prototype).ELEMENT_NODE = 1),
            (Re.nodeType = 111),
            (Re.remove = function (e) {
              var t,
                n = this.childNodes,
                r = this.firstChild,
                o = this.lastChild
              return (
                (this._ = null),
                e && 2 === n.length
                  ? o.parentNode.removeChild(o)
                  : ((t = this.ownerDocument.createRange()).setStartBefore(
                      e ? n[1] : r
                    ),
                    t.setEndAfter(o),
                    t.deleteContents()),
                r
              )
            }),
            (Re.valueOf = function (e) {
              var t = this._,
                n = null == t
              if (
                (n &&
                  (t = this._ = this.ownerDocument.createDocumentFragment()),
                n || e)
              )
                for (var r = this.childNodes, o = 0, s = r.length; o < s; o++)
                  t.appendChild(r[o])
              return t
            }),
            Ae)
        function Ae(e) {
          var t = (this.childNodes = Ce.call(e, 0))
          ;(this.firstChild = t[0]),
            (this.lastChild = t[t.length - 1]),
            (this.ownerDocument = t[0].ownerDocument),
            (this._ = null)
        }
        function Te(e) {
          return { html: e }
        }
        function Le(e, t) {
          switch (e.nodeType) {
            case Ue:
              return 1 / t < 0
                ? t
                  ? e.remove(!0)
                  : e.lastChild
                : t
                ? e.valueOf(!0)
                : e.firstChild
            case We:
              return Le(e.render(), t)
            default:
              return e
          }
        }
        function Pe(e, t) {
          t(e.placeholder),
            'text' in e
              ? Promise.resolve(e.text).then(String).then(t)
              : 'any' in e
              ? Promise.resolve(e.any).then(t)
              : 'html' in e
              ? Promise.resolve(e.html).then(Te).then(t)
              : Promise.resolve(N.invoke(e, t)).then(t)
        }
        function Ie(e) {
          return null != e && 'then' in e
        }
        var Ne,
          De,
          je,
          Oe,
          ze,
          Me = 'ownerSVGElement',
          We = v.prototype.nodeType,
          Ue = Ee.prototype.nodeType,
          Fe =
            ((De = (Ne = { Event: b, WeakSet: u }).Event),
            (je = Ne.WeakSet),
            (Oe = !0),
            (ze = null),
            function (e) {
              return (
                Oe &&
                  ((Oe = !Oe),
                  (ze = new je()),
                  (function (e) {
                    var t = new je(),
                      n = new je()
                    try {
                      new MutationObserver(i).observe(e, {
                        subtree: !0,
                        childList: !0,
                      })
                    } catch (t) {
                      var r = 0,
                        o = [],
                        s = function (e) {
                          o.push(e),
                            clearTimeout(r),
                            (r = setTimeout(function () {
                              i(o.splice((r = 0), o.length))
                            }, 0))
                        }
                      e.addEventListener(
                        'DOMNodeRemoved',
                        function (e) {
                          s({ addedNodes: [], removedNodes: [e.target] })
                        },
                        !0
                      ),
                        e.addEventListener(
                          'DOMNodeInserted',
                          function (e) {
                            s({ addedNodes: [e.target], removedNodes: [] })
                          },
                          !0
                        )
                    }
                    function i(e) {
                      for (var r, o = e.length, s = 0; s < o; s++)
                        a((r = e[s]).removedNodes, 'disconnected', n, t),
                          a(r.addedNodes, 'connected', t, n)
                    }
                    function a(e, t, n, r) {
                      for (
                        var o, s = new De(t), i = e.length, a = 0;
                        a < i;
                        1 === (o = e[a++]).nodeType &&
                        (function e(t, n, r, o, s) {
                          ze.has(t) &&
                            !o.has(t) &&
                            (s.delete(t), o.add(t), t.dispatchEvent(n))
                          for (
                            var i = t.children || [], a = i.length, c = 0;
                            c < a;
                            e(i[c++], n, r, o, s)
                          );
                        })(o, s, t, n, r)
                      );
                    }
                  })(e.ownerDocument)),
                ze.add(e),
                e
              )
            }),
          qe = /^(?:form|list)$/i,
          Be = [].slice
        function He(t) {
          return (
            (this.type = t),
            (function (t) {
              var n = ye,
                r = ve
              return function (o) {
                var s, i, a
                return (
                  n !== o &&
                    ((s = t),
                    (i = n = o),
                    (a = be.get(i) || be.set(i, we(s, i))),
                    (r = a.updates(Z.call(e, a.content, !0)))),
                  r.apply(null, arguments)
                )
              }
            })(this)
          )
        }
        var Ge = !(He.prototype = {
            attribute: function (e, t, n) {
              var r,
                o = Me in e
              if ('style' === t) return $e(e, n, o)
              if ('.' === t.slice(0, 1))
                return (
                  (i = e),
                  (a = t.slice(1)),
                  o
                    ? function (e) {
                        try {
                          i[a] = e
                        } catch (t) {
                          i.setAttribute(a, e)
                        }
                      }
                    : function (e) {
                        i[a] = e
                      }
                )
              if (/^on/.test(t)) {
                var s = t.slice(2)
                return (
                  'connected' === s || 'disconnected' === s
                    ? Fe(e)
                    : t.toLowerCase() in e && (s = s.toLowerCase()),
                  function (t) {
                    r !== t &&
                      (r && e.removeEventListener(s, r, !1),
                      (r = t) && e.addEventListener(s, t, !1))
                  }
                )
              }
              if ('data' === t || (!o && t in e && !qe.test(t)))
                return function (n) {
                  r !== n &&
                    ((r = n),
                    e[t] !== n && null == n
                      ? ((e[t] = ''), e.removeAttribute(t))
                      : (e[t] = n))
                }
              if (t in N.attributes)
                return function (n) {
                  var o = N.attributes[t](e, n)
                  r !== o &&
                    (null == (r = o)
                      ? e.removeAttribute(t)
                      : e.setAttribute(t, o))
                }
              var i,
                a,
                c = !1,
                l = n.cloneNode(!0)
              return function (t) {
                r !== t &&
                  ((r = t),
                  l.value !== t &&
                    (null == t
                      ? (c && ((c = !1), e.removeAttributeNode(l)),
                        (l.value = t))
                      : ((l.value = t),
                        c || ((c = !0), e.setAttributeNode(l)))))
              }
            },
            any: function (e, t) {
              var n,
                r = { node: Le, before: e },
                o = Me in e ? 'svg' : 'html',
                s = !1
              return function i(a) {
                switch (typeof a) {
                  case 'string':
                  case 'number':
                  case 'boolean':
                    s
                      ? n !== a && ((n = a), (t[0].textContent = a))
                      : ((s = !0),
                        (n = a),
                        (t = h(
                          e.parentNode,
                          t,
                          [((c = a), e.ownerDocument.createTextNode(c))],
                          r
                        )))
                    break
                  case 'function':
                    i(a(e))
                    break
                  case 'object':
                  case 'undefined':
                    if (null == a) {
                      ;(s = !1), (t = h(e.parentNode, t, [], r))
                      break
                    }
                  default:
                    if (((s = !1), D((n = a))))
                      if (0 === a.length)
                        t.length && (t = h(e.parentNode, t, [], r))
                      else
                        switch (typeof a[0]) {
                          case 'string':
                          case 'number':
                          case 'boolean':
                            i({ html: a })
                            break
                          case 'object':
                            if (
                              (D(a[0]) && (a = a.concat.apply([], a)), Ie(a[0]))
                            ) {
                              Promise.all(a).then(i)
                              break
                            }
                          default:
                            t = h(e.parentNode, t, a, r)
                        }
                    else
                      'ELEMENT_NODE' in a
                        ? (t = h(
                            e.parentNode,
                            t,
                            11 === a.nodeType ? Be.call(a.childNodes) : [a],
                            r
                          ))
                        : Ie(a)
                        ? a.then(i)
                        : 'placeholder' in a
                        ? Pe(a, i)
                        : 'text' in a
                        ? i(String(a.text))
                        : 'any' in a
                        ? i(a.any)
                        : 'html' in a
                        ? (t = h(
                            e.parentNode,
                            t,
                            Be.call(
                              j([].concat(a.html).join(''), o).childNodes
                            ),
                            r
                          ))
                        : i('length' in a ? Be.call(a) : N.invoke(a, i))
                }
                var c
              }
            },
            text: function (e) {
              var t
              return function n(r) {
                var o
                t !== r &&
                  ('object' == (o = typeof (t = r)) && r
                    ? Ie(r)
                      ? r.then(n)
                      : 'placeholder' in r
                      ? Pe(r, n)
                      : n(
                          'text' in r
                            ? String(r.text)
                            : 'any' in r
                            ? r.any
                            : 'html' in r
                            ? [].concat(r.html).join('')
                            : 'length' in r
                            ? Be.call(r).join('')
                            : N.invoke(r, n)
                        )
                    : 'function' == o
                    ? n(r(e))
                    : (e.textContent = null == r ? '' : r))
              }
            },
          }),
          Ve = function (t) {
            var r,
              o,
              s,
              i,
              a =
                ((r = (e.defaultView.navigator || {}).userAgent),
                /(Firefox|Safari)\/(\d+)/.test(r) &&
                  !/(Chrom[eium]+|Android)\/(\d+)/.test(r)),
              c =
                !('raw' in t) ||
                t.propertyIsEnumerable('raw') ||
                !Object.isFrozen(t.raw)
            return (
              a || c
                ? ((o = {}),
                  (s = function (e) {
                    for (var t = '.', n = 0; n < e.length; n++)
                      t += e[n].length + '.' + e[n]
                    return o[t] || (o[t] = e)
                  }),
                  (Ve = c
                    ? s
                    : ((i = new n()),
                      function (e) {
                        return i.get(e) || ((n = s((t = e))), i.set(t, n), n)
                        var t, n
                      })))
                : (Ge = !0),
              Ze(t)
            )
          }
        function Ze(e) {
          return Ge ? e : Ve(e)
        }
        function Ye(e) {
          for (var t = arguments.length, n = [Ze(e)], r = 1; r < t; )
            n.push(arguments[r++])
          return n
        }
        var Ke = new n(),
          Je = function (e) {
            var t, n, r
            return function () {
              var o = Ye.apply(null, arguments)
              return (
                r !== o[0]
                  ? ((r = o[0]), (n = new He(e)), (t = Qe(n.apply(n, o))))
                  : n.apply(n, o),
                t
              )
            }
          },
          Xe = function (e, t) {
            var n = t.indexOf(':'),
              r = Ke.get(e),
              o = t
            return (
              -1 < n && ((o = t.slice(n + 1)), (t = t.slice(0, n) || 'html')),
              r || Ke.set(e, (r = {})),
              r[o] || (r[o] = Je(t))
            )
          },
          Qe = function (e) {
            var t = e.childNodes,
              n = t.length
            return 1 === n ? t[0] : n ? new Ee(t) : e
          },
          et = new n()
        function tt() {
          var e = et.get(this),
            t = Ye.apply(null, arguments)
          return (
            e && e.template === t[0]
              ? e.tagger.apply(null, t)
              : function (e) {
                  var t = new He(Me in this ? 'svg' : 'html')
                  et.set(this, { tagger: t, template: e }),
                    (this.textContent = ''),
                    this.appendChild(t.apply(null, arguments))
                }.apply(this, t),
            this
          )
        }
        var nt,
          rt,
          ot,
          st,
          it = N.define,
          at = He.prototype
        function ct(e) {
          return arguments.length < 2
            ? null == e
              ? Je('html')
              : 'string' == typeof e
              ? ct.wire(null, e)
              : 'raw' in e
              ? Je('html')(e)
              : 'nodeType' in e
              ? ct.bind(e)
              : Xe(e, 'html')
            : ('raw' in e ? Je('html') : ct.wire).apply(null, arguments)
        }
        return (
          (ct.Component = v),
          (ct.bind = function (e) {
            return tt.bind(e)
          }),
          (ct.define = it),
          (ct.diff = h),
          ((ct.hyper = ct).observe = Fe),
          (ct.tagger = at),
          (ct.wire = function (e, t) {
            return null == e ? Je(t || 'html') : Xe(e, t || 'html')
          }),
          (ct._ = { WeakMap: n, WeakSet: u }),
          (nt = Je),
          (rt = new n()),
          (ot = Object.create),
          (st = function (e, t) {
            var n = { w: null, p: null }
            return t.set(e, n), n
          }),
          Object.defineProperties(v, {
            for: {
              configurable: !0,
              value: function (e, t) {
                return (function (e, t, r, o) {
                  var s,
                    i,
                    a,
                    c = t.get(e) || st(e, t)
                  switch (typeof o) {
                    case 'object':
                    case 'function':
                      var l = c.w || (c.w = new n())
                      return (
                        l.get(o) ||
                        ((s = l), (i = o), (a = new e(r)), s.set(i, a), a)
                      )
                    default:
                      var u = c.p || (c.p = ot(null))
                      return u[o] || (u[o] = new e(r))
                  }
                })(
                  this,
                  rt.get(e) || ((r = e), (o = new y()), rt.set(r, o), o),
                  e,
                  null == t ? 'default' : t
                )
                var r, o
              },
            },
          }),
          Object.defineProperties(v.prototype, {
            handleEvent: {
              value: function (e) {
                var t = e.currentTarget
                this[
                  ('getAttribute' in t && t.getAttribute('data-call')) ||
                    'on' + e.type
                ](e)
              },
            },
            html: k('html', nt),
            svg: k('svg', nt),
            state: k('state', function () {
              return this.defaultState
            }),
            defaultState: {
              get: function () {
                return {}
              },
            },
            dispatch: {
              value: function (e, t) {
                var n = this._wire$
                if (n) {
                  var r = new b(e, { bubbles: !0, cancelable: !0, detail: t })
                  return (
                    (r.component = this),
                    (n.dispatchEvent ? n : n.firstChild).dispatchEvent(r)
                  )
                }
                return !1
              },
            },
            setState: {
              value: function (e, t) {
                var n = this.state,
                  r = 'function' == typeof e ? e.call(this, n) : e
                for (var o in r) n[o] = r[o]
                return !1 !== t && this.render(), this
              },
            },
          }),
          ct
        )
      })(document)
    /*! (c) Andrea Giammarchi (ISC) */ const en = N,
      tn = Ze,
      nn = Qt,
      rn = Jt,
      on = Xt,
      sn = /-/g
    const an = wn({
        en: { x_and_y: ' and ', x_y_and_z: ', and ' },
        de: { x_and_y: ' und ', x_y_and_z: ' und ' },
      }),
      cn = new Intl.DateTimeFormat(['en-ca-iso8601'], {
        timeZone: 'UTC',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      }),
      ln =
        '.informative, .note, .issue, .example, .ednote, .practice, .introductory'
    function un(e) {
      const t = new URL(e.href, document.baseURI),
        n = document.createElement('link')
      let { href: r } = t
      switch (((n.rel = e.hint), n.rel)) {
        case 'dns-prefetch':
        case 'preconnect':
          ;(r = t.origin),
            (e.corsMode || t.origin !== document.location.origin) &&
              (n.crossOrigin = e.corsMode || 'anonymous')
          break
        case 'preload':
          'as' in e && n.setAttribute('as', e.as)
      }
      return (n.href = r), e.dontRemove || n.classList.add('removeOnSave'), n
    }
    function dn(e) {
      e.querySelectorAll('.remove, script[data-requiremodule]').forEach((e) => {
        e.remove()
      })
    }
    function pn(e, t, n, r = {}) {
      Array.isArray(e) || (e = [e])
      o('warn', hn(e, t, n, r)), console.warn(t, e)
    }
    function fn(e, t, n, r = {}) {
      Array.isArray(e) || (e = [e])
      o('error', hn(e, t, n, r)), console.error(t, e)
    }
    function hn(e, t, n, { details: r }) {
      const o = e
        .map(
          (e, r) => (
            (function (e, t, n) {
              e.classList.add('respec-offending-element'),
                e.hasAttribute('title') || e.setAttribute('title', n || t)
              e.id || Cn(e, 'respec-offender')
            })(e, t, n),
            (function (e, t) {
              return `[${t + 1}](#${e.id})`
            })(e, r)
          )
        )
        .join(', ')
      let s = `${t} at: ${o}.`
      return r && (s += `\n\n<details>${r}</details>`), s
    }
    class mn {
      constructor(e, t) {
        ;(this.idb = e), (this.storeName = t)
      }
      async get(e) {
        return await this.idb
          .transaction(this.storeName)
          .objectStore(this.storeName)
          .get(e)
      }
      async getMany(e) {
        const t = new Set(e),
          n = new Map()
        let r = await this.idb.transaction(this.storeName).store.openCursor()
        for (; r; )
          t.has(r.key) && n.set(r.key, r.value), (r = await r.continue())
        return n
      }
      async set(e, t) {
        const n = this.idb.transaction(this.storeName, 'readwrite')
        return n.objectStore(this.storeName).put(t, e), await n.done
      }
      async addMany(e) {
        const t = this.idb.transaction(this.storeName, 'readwrite')
        for (const [n, r] of e) t.objectStore(this.storeName).put(r, n)
        return await t.done
      }
      async clear() {
        const e = this.idb.transaction(this.storeName, 'readwrite')
        return e.objectStore(this.storeName).clear(), await e.done
      }
      async keys() {
        const e = this.idb.transaction(this.storeName),
          t = e.objectStore(this.storeName).getAllKeys()
        return await e.done, t
      }
    }
    function gn(e = [], t = (e) => e, n = g) {
      const r = e.map(t)
      if (Intl.ListFormat && 'function' == typeof Intl.ListFormat) {
        return new Intl.ListFormat(n, {
          style: 'long',
          type: 'conjunction',
        }).format(r)
      }
      switch (r.length) {
        case 0:
        case 1:
          return r.toString()
        case 2:
          return r.join(an.x_and_y)
        default: {
          const e = r.join(', '),
            t = e.lastIndexOf(','),
            n = an.x_y_and_z
          return `${e.substr(0, t)}${n}${e.slice(t + 2)}`
        }
      }
    }
    function bn(e) {
      return e.trim().replace(/\s+/g, ' ')
    }
    function wn(e, t = g) {
      return (
        (t = (function (e) {
          return { 'zh-hans': 'zh', 'zh-cn': 'zh' }[e] || e
        })(t.toLowerCase())),
        new Proxy(e, {
          get(e, n) {
            const r = (e[t] && e[t][n]) || e.en[n]
            if (!r) throw new Error(`No l10n data for key: "${n}"`)
            return r
          },
        })
      )
    }
    function yn(e, t = '') {
      return cn.format(e).replace(sn, t)
    }
    function vn(e = new Date(), t = document.documentElement.lang || 'en') {
      e instanceof Date || (e = new Date(e))
      const n = [t, 'en']
      return `${e.toLocaleString(n, {
        day: '2-digit',
        timeZone: 'UTC',
      })} ${e.toLocaleString(n, {
        month: 'long',
        timeZone: 'UTC',
      })} ${e.toLocaleString(n, { year: 'numeric', timeZone: 'UTC' })}`
    }
    function kn(e, t, ...n) {
      const r = [this, e, ...n]
      if (t) {
        const n = t.split(/\s+/)
        for (const t of n) {
          const n = window[t]
          if (n)
            try {
              e = n.apply(this, r)
            } catch (e) {
              o(
                'warn',
                `call to \`${t}()\` failed with: ${e}. See error console for stack trace.`
              ),
                console.error(e)
            }
        }
      }
      return e
    }
    async function xn(e, t = 864e5) {
      const n = new Request(e),
        r = new URL(n.url)
      let o, s
      if ('caches' in window)
        try {
          if (
            ((o = await caches.open(r.origin)),
            (s = await o.match(n)),
            s && new Date(s.headers.get('Expires')) > new Date())
          )
            return s
        } catch (e) {
          console.error('Failed to use Cache API.', e)
        }
      const i = await fetch(n)
      if (!i.ok && s)
        return console.warn('Returning a stale cached response for ' + r), s
      if (o && i.ok) {
        const e = i.clone(),
          r = new Headers(i.headers),
          s = new Date(Date.now() + t)
        r.set('Expires', s.toISOString())
        const a = new Response(await e.blob(), { headers: r })
        await o.put(n, a).catch(console.error)
      }
      return i
    }
    function $n(e, t = (e) => e) {
      const n = e.map(t),
        r = n.slice(0, -1).map((e) => nn`${e}, `)
      return nn`${r}${n[n.length - 1]}`
    }
    function _n(e, t = (e) => e) {
      const n = e.map(t)
      switch (n.length) {
        case 0:
        case 1:
          return n[0]
        case 2:
          return nn`${n[0]}${an.x_and_y}${n[1]}`
        default: {
          const e = $n(n.slice(0, -1))
          return nn`${e}${an.x_y_and_z}${n[n.length - 1]}`
        }
      }
    }
    function Sn(e, t = '') {
      return Cn(
        e,
        t,
        (function (e) {
          let t = 0
          for (const n of e) t = (Math.imul(31, t) + n.charCodeAt(0)) | 0
          return String(t)
        })(bn(e.textContent))
      )
    }
    function Cn(e, t = '', n = '', r = !1) {
      if (e.id) return e.id
      n || (n = (e.title ? e.title : e.textContent).trim())
      let o = r ? n : n.toLowerCase()
      if (
        ((o = o
          .trim()
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .replace(/\W+/gim, '-')
          .replace(/^-+/, '')
          .replace(/-+$/, '')),
        o
          ? (!/\.$/.test(o) && /^[a-z]/i.test(t || o)) || (o = 'x' + o)
          : (o = 'generatedID'),
        t && (o = `${t}-${o}`),
        e.ownerDocument.getElementById(o))
      ) {
        let t = 0,
          n = `${o}-${t}`
        for (; e.ownerDocument.getElementById(n); ) (t += 1), (n = `${o}-${t}`)
        o = n
      }
      return (e.id = o), o
    }
    function Rn(e) {
      const t = new Set(),
        n = 'ltNodefault' in e.dataset ? '' : bn(e.textContent),
        r = e.children[0]
      if (
        (e.dataset.lt
          ? e.dataset.lt
              .split('|')
              .map((e) => bn(e))
              .forEach((e) => t.add(e))
          : 1 === e.childNodes.length &&
            1 === e.getElementsByTagName('abbr').length &&
            r.title
          ? t.add(r.title)
          : '""' === e.textContent && t.add('the-empty-string'),
        t.add(n),
        t.delete(''),
        e.dataset.localLt)
      ) {
        e.dataset.localLt.split('|').forEach((e) => t.add(bn(e)))
      }
      return [...t]
    }
    function En(e, t) {
      if (e.localName === t) return e
      const n = e.ownerDocument.createElement(t)
      for (const { name: t, value: r } of e.attributes) n.setAttribute(t, r)
      return n.append(...e.childNodes), e.replaceWith(n), n
    }
    function An(e, t) {
      const n = t.closest(ln)
      let r = !1
      if (
        (n && (r = !t.closest('.normative') || !n.querySelector('.normative')),
        e.startsWith('!'))
      ) {
        if (r) return { type: 'informative', illegal: !0 }
        r = !1
      } else e.startsWith('?') && (r = !0)
      return { type: r ? 'informative' : 'normative', illegal: !1 }
    }
    function Tn(e, t) {
      return t.append(...e.childNodes), e.appendChild(t), e
    }
    function Ln(e, t) {
      const n = []
      let r = e.parentElement
      for (; r; ) {
        const e = r.closest(t)
        if (!e) break
        n.push(e), (r = e.parentElement)
      }
      return n
    }
    function Pn(e) {
      const { previousSibling: t } = e
      if (!t || t.nodeType !== Node.TEXT_NODE) return ''
      const n = t.textContent.lastIndexOf('\n')
      if (-1 === n) return ''
      const r = t.textContent.slice(n + 1)
      return /\S/.test(r) ? '' : r
    }
    class In extends Set {
      constructor(e = []) {
        super()
        for (const t of e) this.add(t)
      }
      add(e) {
        return this.has(e) || this.getCanonicalKey(e) ? this : super.add(e)
      }
      has(e) {
        return (
          super.has(e) ||
          [...this.keys()].some((t) => t.toLowerCase() === e.toLowerCase())
        )
      }
      delete(e) {
        return super.has(e)
          ? super.delete(e)
          : super.delete(this.getCanonicalKey(e))
      }
      getCanonicalKey(e) {
        return super.has(e)
          ? e
          : [...this.keys()].find((t) => t.toLowerCase() === e.toLowerCase())
      }
    }
    function Nn(e) {
      const t = e.cloneNode(!0)
      return (
        t.querySelectorAll('[id]').forEach((e) => e.removeAttribute('id')),
        t.querySelectorAll('dfn').forEach((e) => En(e, 'span')),
        t.hasAttribute('id') && t.removeAttribute('id'),
        Dn(t),
        t
      )
    }
    function Dn(e) {
      const t = document.createTreeWalker(e, NodeFilter.SHOW_COMMENT)
      for (const e of [...jn(t)]) e.remove()
    }
    function* jn(e) {
      for (; e.nextNode(); ) yield e.currentNode
    }
    class On extends Map {
      constructor(e = []) {
        return (
          super(),
          e.forEach(([e, t]) => {
            this.set(e, t)
          }),
          this
        )
      }
      set(e, t) {
        return super.set(e.toLowerCase(), t), this
      }
      get(e) {
        return super.get(e.toLowerCase())
      }
      has(e) {
        return super.has(e.toLowerCase())
      }
      delete(e) {
        return super.delete(e.toLowerCase())
      }
    }
    const zn = 'core/base-runner'
    function Mn(e) {
      const t = e.name || ''
      return (
        t || console.warn('Plugin lacks name:', e),
        (n) =>
          new Promise(async (r, o) => {
            const s = setTimeout(() => {
              const n = `Plugin ${t} took too long.`
              console.error(n, e), o(new Error(n))
            }, 15e3)
            performance.mark(t + '-start')
            try {
              e.Plugin
                ? (await new e.Plugin(n).run(), r())
                : e.run && (await e.run(n), r())
            } catch (e) {
              o(e)
            } finally {
              clearTimeout(s)
            }
            performance.mark(t + '-end'),
              performance.measure(t, t + '-start', t + '-end')
          })
      )
    }
    function Wn(e) {
      return e && (e.run || e.Plugin)
    }
    var Un = Object.freeze({
      __proto__: null,
      name: zn,
      runAll: async function (e) {
        !(function () {
          const e = new l()
          Object.defineProperty(document, 'respec', { value: e })
          let t = !1
          Object.defineProperty(document, 'respecIsReady', {
            get: () => (
              t ||
                (o(
                  'warn',
                  '`document.respecIsReady` is deprecated and will be removed in a future release. Use `document.respec.ready` instead.'
                ),
                (t = !0)),
              document.respec.ready
            ),
          })
        })(),
          o('start-all', respecConfig),
          performance.mark(zn + '-start'),
          await f
        const t = e.filter(Wn).map(Mn)
        for (const e of t)
          try {
            await e(respecConfig)
          } catch (e) {
            console.error(e)
          }
        o('plugins-done', respecConfig),
          await d,
          o('end-all'),
          dn(document),
          performance.mark(zn + '-end'),
          performance.measure(zn, zn + '-start', zn + '-end')
      },
    })
    async function Fn(e) {
      const t = await fetch(
        new URL(
          '../../' + e,
          (document.currentScript && document.currentScript.src) ||
            new URL('respec-w3c.js', document.baseURI).href
        )
      )
      return await t.text()
    }
    async function qn(e) {
      return Fn('assets/' + e)
    }
    function Bn(e) {
      if (!e) return e
      const t = e.trimEnd().split('\n')
      for (; t.length && !t[0].trim(); ) t.shift()
      const n = t.filter((e) => e.trim()).map((e) => e.search(/[^\s]/)),
        r = Math.min(...n)
      return t.map((e) => e.slice(r)).join('\n')
    }
    var Hn = Object.freeze({
      __proto__: null,
      name: 'core/reindent',
      reindent: Bn,
      run: function () {
        for (const e of document.getElementsByTagName('pre'))
          e.innerHTML = Bn(e.innerHTML)
      },
    })
    const Gn = /&gt;/gm,
      Vn = /&amp;/gm
    class Zn extends rn.Renderer {
      code(e, t, n) {
        const { language: r, ...o } = Zn.parseInfoString(t)
        if (/(^webidl$)/i.test(r)) return `<pre class="idl">${e}</pre>`
        const s = super.code(e, r, n),
          { example: i, illegalExample: a } = o
        if (!i && !a) return s
        const c = i || a,
          l = `${r} ${i ? 'example' : 'illegal-example'}`
        return s.replace('<pre>', `<pre title="${c}" class="${l}">`)
      }
      static parseInfoString(e) {
        const t = e.search(/\s/)
        if (-1 === t) return { language: e }
        const n = e.slice(0, t),
          r = e.slice(t + 1)
        let o
        if (r)
          try {
            o = JSON.parse(`{ ${r} }`)
          } catch (e) {
            console.error(e)
          }
        return { language: n, ...o }
      }
      heading(e, t, n, r) {
        const o = /(.+)\s+{#([\w-]+)}$/
        if (o.test(e)) {
          const [, n, r] = e.match(o)
          return `<h${t} id="${r}">${n}</h${t}>`
        }
        return super.heading(e, t, n, r)
      }
    }
    function Yn(e) {
      const t = Bn(e).replace(Gn, '>').replace(Vn, '&')
      return rn(t, {
        sanitize: !1,
        gfm: !0,
        headerIds: !1,
        langPrefix: '',
        renderer: new Zn(),
      })
    }
    function Kn(e) {
      for (const t of e.getElementsByTagName('pre')) t.prepend('\n')
      e.innerHTML = Yn(e.innerHTML)
    }
    class Jn {
      constructor(e) {
        ;(this.doc = e),
          (this.root = e.createDocumentFragment()),
          (this.stack = [this.root]),
          (this.current = this.root)
      }
      findPosition(e) {
        return parseInt(e.tagName.charAt(1), 10)
      }
      findParent(e) {
        let t
        for (; e > 0; ) if ((e--, (t = this.stack[e]), t)) return t
      }
      findHeader({ firstChild: e }) {
        for (; e; ) {
          if (/H[1-6]/.test(e.tagName)) return e
          e = e.nextSibling
        }
        return null
      }
      addHeader(e) {
        const t = this.doc.createElement('section'),
          n = this.findPosition(e)
        t.appendChild(e),
          this.findParent(n).appendChild(t),
          (this.stack[n] = t),
          (this.stack.length = n + 1),
          (this.current = t)
      }
      addSection(e, t) {
        const n = this.findHeader(e),
          r = n ? this.findPosition(n) : 1,
          o = this.findParent(r)
        n && e.removeChild(n),
          e.appendChild(t(e)),
          n && e.prepend(n),
          o.appendChild(e),
          (this.current = o)
      }
      addElement(e) {
        this.current.appendChild(e)
      }
    }
    function Xn(e, t) {
      return (function e(n) {
        const r = new Jn(t)
        for (; n.firstChild; ) {
          const t = n.firstChild
          if (t.nodeType === Node.ELEMENT_NODE)
            switch (t.localName) {
              case 'h1':
              case 'h2':
              case 'h3':
              case 'h4':
              case 'h5':
              case 'h6':
                r.addHeader(t)
                break
              case 'section':
                r.addSection(t, e)
                break
              default:
                r.addElement(t)
            }
          else n.removeChild(t)
        }
        return r.root
      })(e)
    }
    function Qn(e) {
      const t = Xn(e, e.ownerDocument)
      if (
        'section' === t.firstElementChild.localName &&
        'section' === e.localName
      ) {
        const n = t.firstElementChild
        n.remove(), e.append(...n.childNodes)
      } else e.textContent = ''
      e.appendChild(t)
    }
    const er =
      ((tr = "[data-format='markdown']:not(body)"),
      (e) => {
        const t = e.querySelectorAll(tr)
        return t.forEach(Kn), Array.from(t)
      })
    var tr
    var nr = Object.freeze({
      __proto__: null,
      name: 'core/markdown',
      markdownToHtml: Yn,
      restructure: Qn,
      run: function (e) {
        const t = !!document.querySelector('[data-format=markdown]:not(body)'),
          n = 'markdown' === e.format
        if (!n && !t) return
        if (!n) {
          for (const e of er(document.body)) Qn(e)
          return
        }
        const r = document.getElementById('respec-ui')
        r.remove()
        const o = document.body.cloneNode(!0)
        !(function (e, t) {
          const n = e.querySelectorAll(t)
          for (const e of n) {
            const { innerHTML: t } = e
            if (/^<\w/.test(t.trimStart())) continue
            const n = t.split('\n'),
              r = n.slice(0, 2).join('\n'),
              o = n.slice(-2).join('\n')
            if ((r.trim() && e.prepend('\n\n'), o.trim())) {
              const t = Pn(e)
              e.append('\n\n' + t)
            }
          }
        })(
          o,
          '[data-format=markdown], section, div, address, article, aside, figure, header, main'
        ),
          Kn(o),
          (function (e) {
            Array.from(e).forEach((e) => {
              e.replaceWith(e.textContent)
            })
          })(o.querySelectorAll('.nolinks a[href]'))
        const s = Xn(o, document)
        o.append(r, s), document.body.replaceWith(o)
      },
    })
    function rr(e, t) {
      e &&
        Array.from(t).forEach(([t, n]) => {
          e.setAttribute('aria-' + t, n)
        })
    }
    !(async function () {
      const e = document.createElement('style')
      ;(e.id = 'respec-ui-styles'),
        (e.textContent = await (async function () {
          try {
            return (
              await Promise.resolve().then(function () {
                return Ul
              })
            ).default
          } catch {
            return qn('ui.css')
          }
        })()),
        e.classList.add('removeOnSave'),
        document.head.appendChild(e)
    })()
    const or = nn`<div id="respec-ui" class="removeOnSave" hidden></div>`,
      sr = nn`<ul
  id="respec-menu"
  role="menu"
  aria-labelledby="respec-pill"
  hidden
></ul>`,
      ir = nn`<button
  class="close-button"
  onclick=${() => br.closeModal()}
  title="Close"
>
  ❌
</button>`
    let ar, cr
    window.addEventListener('load', () => hr(sr))
    const lr = [],
      ur = [],
      dr = {}
    s('start-all', () => document.body.prepend(or), { once: !0 }),
      s('end-all', () => document.body.prepend(or), { once: !0 })
    const pr = nn`<button id="respec-pill" disabled>ReSpec</button>`
    function fr() {
      sr.classList.toggle('respec-hidden'),
        sr.classList.toggle('respec-visible'),
        (sr.hidden = !sr.hidden)
    }
    function hr(e) {
      const t = e.querySelectorAll(
          'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled])'
        ),
        n = t[0],
        r = t[t.length - 1]
      n && n.focus(),
        e.addEventListener('keydown', (e) => {
          'Tab' === e.key &&
            (e.shiftKey
              ? document.activeElement === n && (r.focus(), e.preventDefault())
              : document.activeElement === r && (n.focus(), e.preventDefault()))
        })
    }
    or.appendChild(pr),
      pr.addEventListener('click', (e) => {
        e.stopPropagation(),
          pr.setAttribute('aria-expanded', String(sr.hidden)),
          fr(),
          sr.querySelector('li:first-child button').focus()
      }),
      document.documentElement.addEventListener('click', () => {
        sr.hidden || fr()
      }),
      or.appendChild(sr),
      sr.addEventListener('keydown', (e) => {
        'Escape' !== e.key ||
          sr.hidden ||
          (pr.setAttribute('aria-expanded', String(sr.hidden)),
          fr(),
          pr.focus())
      })
    const mr = new Map([
      ['controls', 'respec-menu'],
      ['expanded', 'false'],
      ['haspopup', 'true'],
      ['label', 'ReSpec Menu'],
    ])
    function gr(e, t, n, r) {
      t.push(e),
        dr.hasOwnProperty(n) ||
          ((dr[n] = (function (e, t, n) {
            const r = nn`<button
    id="${'respec-pill-' + e}"
    class="respec-info-button"
  ></button>`
            r.addEventListener('click', () => {
              r.setAttribute('aria-expanded', 'true')
              const o = nn`<ol class="${`respec-${e}-list`}"></ol>`
              for (const e of t) {
                const t = document
                    .createRange()
                    .createContextualFragment(Yn(e)),
                  n = document.createElement('li')
                t.firstElementChild === t.lastElementChild
                  ? n.append(...t.firstElementChild.childNodes)
                  : n.appendChild(t),
                  o.appendChild(n)
              }
              br.freshModal(n, o, r)
            })
            const o = new Map([
              ['expanded', 'false'],
              ['haspopup', 'true'],
              ['controls', `respec-pill-${e}-modal`],
            ])
            return rr(r, o), r
          })(n, t, r)),
          or.appendChild(dr[n]))
      const o = dr[n]
      o.textContent = t.length
      const s = 1 === t.length ? on.singular(r) : r
      rr(o, new Map([['label', `${t.length} ${s}`]]))
    }
    rr(pr, mr)
    const br = {
      show() {
        try {
          or.hidden = !1
        } catch (e) {
          console.error(e)
        }
      },
      hide() {
        or.hidden = !0
      },
      enable() {
        pr.removeAttribute('disabled')
      },
      addCommand(e, t, n, r) {
        r = r || ''
        const o = 'respec-button-' + e.toLowerCase().replace(/\s+/, '-'),
          s = nn`<button id="${o}" class="respec-option">
      <span class="respec-cmd-icon" aria-hidden="true">${r}</span> ${e}…
    </button>`,
          i = nn`<li role="menuitem">${s}</li>`
        return i.addEventListener('click', t), sr.appendChild(i), s
      },
      error(e) {
        gr(e, lr, 'error', 'ReSpec Errors')
      },
      warning(e) {
        gr(e, ur, 'warning', 'ReSpec Warnings')
      },
      closeModal(e) {
        cr &&
          (cr.classList.remove('respec-show-overlay'),
          cr.classList.add('respec-hide-overlay'),
          cr.addEventListener('transitionend', () => {
            cr.remove(), (cr = null)
          })),
          e && e.setAttribute('aria-expanded', 'false'),
          ar && (ar.remove(), (ar = null), pr.focus())
      },
      freshModal(e, t, n) {
        ar && ar.remove(),
          cr && cr.remove(),
          (cr = nn`<div id="respec-overlay" class="removeOnSave"></div>`)
        const r = n.id + '-modal',
          o = r + '-heading'
        ar = nn`<div
      id="${r}"
      class="respec-modal removeOnSave"
      role="dialog"
      aria-labelledby="${o}"
    >
      ${ir}
      <h3 id="${o}">${e}</h3>
      <div class="inside">${t}</div>
    </div>`
        const s = new Map([['labelledby', o]])
        rr(ar, s),
          document.body.append(cr, ar),
          cr.addEventListener('click', () => this.closeModal(n)),
          cr.classList.toggle('respec-show-overlay'),
          (ar.hidden = !1),
          hr(ar)
      },
    }
    document.addEventListener('keydown', (e) => {
      'Escape' === e.key && br.closeModal()
    }),
      (window.respecUI = br),
      s('error', (e) => br.error(e)),
      s('warn', (e) => br.warning(e))
    var wr = Object.freeze({ __proto__: null, name: 'core/ui', ui: br })
    var yr = Object.freeze({
      __proto__: null,
      name: 'core/location-hash',
      run: function () {
        location.hash &&
          document.respec.ready.then(() => {
            let e = decodeURIComponent(location.hash).substr(1)
            const t = document.getElementById(e),
              n = /\W/.test(e)
            if (!t && n) {
              const t = e
                .replace(/[\W]+/gim, '-')
                .replace(/^-+/, '')
                .replace(/-+$/, '')
              document.getElementById(t) && (e = t)
            }
            location.hash = '#' + e
          })
      },
    })
    const vr = new WeakMap()
    class kr {
      constructor(e, t) {
        vr.set(this, { name: e, lintingFunction: t })
      }
      get name() {
        return vr.get(this).name
      }
      lint(e = { lint: { [this.name]: !1 } }, t = document) {
        if (
          (function (e, t) {
            return !(
              !1 === e.hasOwnProperty('lint') ||
              !1 === e.lint ||
              !e.lint[t]
            )
          })(e, this.name)
        )
          return vr.get(this).lintingFunction(e, t)
      }
    }
    const xr = 'check-charset',
      $r = {
        en: {
          description:
            "Document must only contain one `<meta>` tag with charset set to 'utf-8'",
          howToFix:
            'Add this line in your document `<head>` section - `<meta charset="utf-8">` or set charset to "utf-8" if not set already.',
        },
        zh: {
          description: '文档只能包含一个 charset 属性为 utf-8 的 `<meta>` 标签',
          howToFix:
            '将此行添加到文档的 `<head>` 部分—— `<meta charset="utf-8">` 或将 charset 设置为 utf-8（如果尚未设置）。',
        },
      },
      _r = g in $r ? g : 'en'
    const Sr = new kr(xr, function (e, t) {
        const n = t.querySelectorAll('meta[charset]'),
          r = []
        for (const e of n)
          r.push(e.getAttribute('charset').trim().toLowerCase())
        return r.includes('utf-8') && 1 === n.length
          ? []
          : { name: xr, occurrences: n.length, ...$r[_r] }
      }),
      Cr = 'check-internal-slots',
      Rr = {
        en: {
          description: "Internal slots should be preceded by a '.'",
          howToFix: "Add a '.' between the elements mentioned.",
          help: 'See developer console.',
        },
      },
      Er = g in Rr ? g : 'en'
    const Ar = new kr(Cr, function (e, t) {
        const n = [...t.querySelectorAll('var+a')].filter(
          ({ previousSibling: { nodeName: e } }) => e && 'VAR' === e
        )
        if (n.length)
          return {
            name: Cr,
            offendingElements: n,
            occurrences: n.length,
            ...Rr[Er],
          }
      }),
      Tr = 'check-punctuation',
      Lr = ['.', ':', '!', '?'],
      Pr = {
        en: {
          description: '`p` elements should end with a punctuation mark.',
          howToFix: `Please make sure \`p\` elements end with one of: ${Lr.map(
            (e) => `"${e}"`
          ).join(', ')}.`,
        },
      },
      Ir = g in Pr ? g : 'en'
    const Nr = new kr(Tr, function (e, t) {
        const n = new RegExp(`[${Lr.join('')}\\]]$|^ *$`, 'm'),
          r = [...t.querySelectorAll('p:not(#back-to-top)')].filter(
            (e) => !n.test(e.textContent.trim())
          )
        if (r.length)
          return {
            name: Tr,
            offendingElements: r,
            occurrences: r.length,
            ...Pr[Ir],
          }
      }),
      Dr = new WeakMap()
    const jr = new (class {
        constructor() {
          Dr.set(this, { rules: new Set() })
        }
        get rules() {
          return Dr.get(this).rules
        }
        register(...e) {
          e.forEach((e) => this.rules.add(e))
        }
        async lint(e, t = window.document) {
          const n = [...Dr.get(this).rules].map((n) =>
            (async function (e) {
              const t = await e
              if (!t) return
              const n = { ...Or, ...t },
                {
                  description: r,
                  help: s,
                  howToFix: i,
                  name: a,
                  occurrences: c,
                  offendingElements: l,
                } = n,
                u = `Linter (${a}): ${r} ${i} ${s}`
              l.length ? pn(l, u + ' Occured') : o('warn', `${u} (Count: ${c})`)
            })(n.lint(e, t))
          )
          await n
        }
      })(),
      Or = {
        name: 'unknown',
        description: '',
        occurrences: 0,
        howToFix: '',
        offendingElements: [],
        help: '',
      }
    var zr = Object.freeze({
      __proto__: null,
      name: 'core/linter',
      default: jr,
      run: function (e) {
        !1 !== e.lint &&
          (async () => {
            await document.respec.ready
            try {
              await jr.lint(e, document)
            } catch (e) {
              console.error('Error ocurred while running the linter', e)
            }
          })()
      },
    })
    const Mr = 'local-refs-exist',
      Wr = {
        en: {
          description: 'Broken local reference found in document.',
          howToFix: 'Please fix the links mentioned.',
          help: 'See developer console.',
        },
      },
      Ur = g in Wr ? g : 'en'
    const Fr = new kr(Mr, function (e, t) {
      const n = [...t.querySelectorAll("a[href^='#']")].filter(qr)
      if (n.length)
        return {
          name: Mr,
          offendingElements: n,
          occurrences: n.length,
          ...Wr[Ur],
        }
    })
    function qr(e) {
      const t = e.getAttribute('href').substring(1),
        n = e.ownerDocument
      return !n.getElementById(t) && !n.getElementsByName(t).length
    }
    const Br = 'no-headingless-sections',
      Hr = {
        en: {
          description: 'All sections must start with a `h2-6` element.',
          howToFix: 'Add a `h2-6` to the offending section or use a `<div>`.',
          help: 'See developer console.',
        },
        nl: {
          description: 'Alle secties moeten beginnen met een `h2-6` element.',
          howToFix:
            'Voeg een `h2-6` toe aan de conflicterende sectie of gebruik een `<div>`.',
          help: 'Zie de developer console.',
        },
        zh: {
          description: '所有章节（section）都必须以 `h2-6` 元素开头。',
          howToFix: '将 `h2-6` 添加到有问题的章节或使用 `<div>`。',
        },
      },
      Gr = g in Hr ? g : 'en',
      Vr = ({ firstElementChild: e }) =>
        null === e || !1 === /^h[1-6]$/.test(e.localName)
    const Zr = new kr(Br, function (e, t) {
        const n = [...t.querySelectorAll('section')].filter(Vr)
        if (n.length)
          return {
            name: Br,
            offendingElements: n,
            occurrences: n.length,
            ...Hr[Gr],
          }
      }),
      Yr = 'no-http-props',
      Kr = {
        en: {
          description: 'Insecure URLs are not allowed in `respecConfig`.',
          howToFix: "Please change the following properties to 'https://': ",
        },
        zh: {
          description: '`respecConfig` 中不允许使用不安全的URL.',
          howToFix: '请将以下属性更改为 https://：',
        },
      },
      Jr = g in Kr ? g : 'en'
    const Xr = new kr(Yr, function (e, t) {
        if (!t.location.href.startsWith('http')) return
        const n = Object.getOwnPropertyNames(e)
          .filter((e) => e.endsWith('URI') || 'prevED' === e)
          .filter((n) =>
            new URL(e[n], t.location.href).href.startsWith('http://')
          )
        if (!n.length) return
        const r = { name: Yr, occurrences: n.length, ...Kr[Jr] }
        return (r.howToFix += n.map((e) => `\`${e}\``).join(', ') + '.'), r
      }),
      Qr = 'no-unused-vars',
      eo = {
        en: {
          description: 'Variable was defined, but never used.',
          howToFix: 'Add a `data-ignore-unused` attribute to the `<var>`.',
          help: 'See developer console.',
        },
      },
      to = g in eo ? g : 'en'
    const no = new kr(Qr, function (e, t) {
        const n = [],
          r = (e) =>
            !!e.querySelector(
              ':scope > :not(section) ~ .algorithm, :scope > :not(section) .algorithm'
            )
        for (const e of t.querySelectorAll('section')) {
          if (!r(e)) continue
          const t = e.querySelectorAll(':scope > :not(section) var')
          if (!t.length) continue
          const o = new Map()
          for (const e of t) {
            const t = bn(e.textContent)
            ;(o.get(t) || o.set(t, []).get(t)).push(e)
          }
          for (const e of o.values())
            1 !== e.length ||
              e[0].hasAttribute('data-ignore-unused') ||
              n.push(e[0])
        }
        if (n.length)
          return {
            name: Qr,
            offendingElements: n,
            occurrences: n.length,
            ...eo[to],
          }
      }),
      ro = 'privsec-section',
      oo = {
        en: {
          description:
            "Document must a 'Privacy and/or Security' Considerations section.",
          howToFix: 'Add a privacy and/or security considerations section.',
          help:
            'See the [Self-Review Questionnaire](https://w3ctag.github.io/security-questionnaire/).',
        },
      },
      so = g in oo ? g : 'en'
    const io = new kr(ro, function (e, t) {
      if (
        e.isRecTrack &&
        !(function (e) {
          return Array.from(e.querySelectorAll('h2, h3, h4, h5, h6')).some(
            ({ textContent: e }) => {
              const t = /(privacy|security)/im.test(e),
                n = /(considerations)/im.test(e)
              return (t && n) || t
            }
          )
        })(t)
      )
        return { name: ro, occurrences: 1, ...oo[so] }
    })
    jr.register(Xr, Zr, no, Nr, Fr, Ar, Sr, io)
    const ao = {
        lint: {
          'no-headingless-sections': !0,
          'no-http-props': !0,
          'no-unused-vars': !1,
          'check-punctuation': !1,
          'local-refs-exist': !0,
          'check-internal-slots': !1,
          'check-charset': !1,
          'privsec-section': !1,
        },
        pluralize: !0,
        specStatus: 'base',
        highlightVars: !0,
        addSectionLinks: !0,
      },
      co = 'wpt-tests-exist',
      lo = {
        en: {
          description: 'Non-existent Web Platform Tests',
          howToFix: 'Please fix the tests mentioned.',
          help: 'See developer console.',
        },
      },
      uo = g in lo ? g : 'en'
    const po = new kr(co, async function (e, t) {
      const n = await (async function (e, t) {
        let n
        try {
          const t = new URL(e)
          if (t.pathname.startsWith('/web-platform-tests/wpt/tree/master/')) {
            const e = /web-platform-tests\/wpt\/tree\/master\/(.+)/
            n = t.pathname.match(e)[1].replace(/\//g, '')
          } else n = t.pathname.replace(/\//g, '')
        } catch (e) {
          return (
            o('warn', 'Failed to parse WPT directory from testSuiteURI'),
            console.error(e),
            null
          )
        }
        const r = new URL('web-platform-tests/wpt/files', t + '/')
        r.searchParams.set('path', n)
        const s = await fetch(r)
        if (!s.ok) {
          return (
            o(
              'warn',
              `Failed to fetch files from WPT repository. Request failed with error: ${await s.text()} (${
                s.status
              })`
            ),
            null
          )
        }
        const { entries: i } = await s.json(),
          a = i.filter((e) => !e.endsWith('/'))
        return new Set(a)
      })(e.testSuiteURI, e.githubAPI)
      if (!n) return
      const r = [],
        s = new Set(),
        i = [...t.querySelectorAll('[data-tests]')].filter(
          (e) => e.dataset.tests
        )
      for (const e of i) {
        const t = e.dataset.tests
          .split(/,/gm)
          .map((e) => e.trim().split('#')[0])
          .filter((e) => e)
          .filter((e) => !n.has(e))
        t.length && (r.push(e), t.forEach((e) => s.add(e)))
      }
      if (!r.length) return
      const a = [...s].map((e) => `\`${e}\``)
      return {
        name: co,
        offendingElements: r,
        occurrences: r.length,
        ...lo[uo],
        description: `${lo[uo].description}: ${a.join(', ')}.`,
      }
    })
    jr.register(io, po)
    const fo = {
        src: 'https://www.w3.org/StyleSheets/TR/2016/logos/W3C',
        alt: 'W3C',
        height: 48,
        width: 72,
        url: 'https://www.w3.org/',
      },
      ho = {
        lint: { 'privsec-section': !0, 'wpt-tests-exist': !1 },
        doJsonLd: !1,
        license: 'w3c-software-doc',
        logos: [],
        xref: !0,
      }
    var mo = Object.freeze({
      __proto__: null,
      name: 'w3c/defaults',
      run: function (e) {
        const t = !1 !== e.lint && { ...ao.lint, ...ho.lint, ...e.lint }
        e.specStatus &&
          'unofficial' !== e.specStatus.toLowerCase() &&
          ho.logos.push(fo),
          Object.assign(e, { ...ao, ...ho, ...e, lint: t })
      },
    })
    const go = (async function () {
      const e = document.createElement('style')
      return (
        (e.id = 'respec-mainstyle'),
        (e.textContent = await (async function () {
          try {
            return (
              await Promise.resolve().then(function () {
                return Fl
              })
            ).default
          } catch {
            return qn('respec.css')
          }
        })()),
        document.head.appendChild(e),
        e
      )
    })()
    var bo = Object.freeze({
      __proto__: null,
      name: 'core/style',
      run: async function (e) {
        e.noReSpecCSS && (await go).remove()
      },
    })
    const wo = (function () {
      const e = [
          { hint: 'preconnect', href: 'https://www.w3.org' },
          {
            hint: 'preload',
            href: 'https://www.w3.org/scripts/TR/2016/fixup.js',
            as: 'script',
          },
          {
            hint: 'preload',
            href: 'https://www.w3.org/StyleSheets/TR/2016/base.css',
            as: 'style',
          },
          {
            hint: 'preload',
            href: 'https://www.w3.org/StyleSheets/TR/2016/logos/W3C',
            as: 'image',
          },
        ],
        t = document.createDocumentFragment()
      for (const n of e.map(un)) t.appendChild(n)
      return t
    })()
    wo.appendChild(
      (function () {
        const e = document.createElement('link')
        return (
          (e.rel = 'stylesheet'),
          (e.href = 'https://www.w3.org/StyleSheets/TR/2016/base.css'),
          e.classList.add('removeOnSave'),
          e
        )
      })()
    ),
      document.head.querySelector('meta[name=viewport]') ||
        wo.prepend(
          (function () {
            const e = document.createElement('meta')
            return (
              (e.name = 'viewport'),
              (e.content = (function (e, t = ', ', n = '=') {
                return Array.from(Object.entries(e))
                  .map(([e, t]) => `${e}${n}${JSON.stringify(t)}`)
                  .join(t)
              })({
                width: 'device-width',
                'initial-scale': '1',
                'shrink-to-fit': 'no',
              }).replace(/"/g, '')),
              e
            )
          })()
        ),
      document.head.prepend(wo)
    var yo = Object.freeze({
      __proto__: null,
      name: 'w3c/style',
      run: function (e) {
        if (!e.specStatus) {
          const t = "`respecConfig.specStatus` missing. Defaulting to 'base'."
          ;(e.specStatus = 'base'), o('warn', t)
        }
        let t = 'W3C-'
        switch (e.specStatus.toUpperCase()) {
          case 'CG-DRAFT':
          case 'CG-FINAL':
          case 'BG-DRAFT':
          case 'BG-FINAL':
            t = e.specStatus.toLowerCase()
            break
          case 'FPWD':
          case 'LC':
          case 'WD-NOTE':
          case 'LC-NOTE':
            t += 'WD'
            break
          case 'WG-NOTE':
          case 'FPWD-NOTE':
            t += 'WG-NOTE.css'
            break
          case 'UNOFFICIAL':
            t += 'UD'
            break
          case 'FINDING':
          case 'FINDING-DRAFT':
          case 'BASE':
            t = 'base.css'
            break
          default:
            t += e.specStatus
        }
        const n = (function (e) {
          let t = ''
          switch (e) {
            case null:
            case !0:
              t = '2016'
              break
            default:
              e && !isNaN(e) && (t = e.toString().trim())
          }
          return t
        })(e.useExperimentalStyles || '2016')
        n &&
          !e.noToc &&
          s(
            'end-all',
            () => {
              !(function (e, t) {
                const n = e.createElement('script')
                location.hash &&
                  n.addEventListener(
                    'load',
                    () => {
                      window.location.href = location.hash
                    },
                    { once: !0 }
                  ),
                  (n.src = `https://www.w3.org/scripts/TR/${t}/fixup.js`),
                  e.body.appendChild(n)
              })(document, n)
            },
            { once: !0 }
          )
        const r = `https://www.w3.org/StyleSheets/TR/${n ? n + '/' : ''}${t}`
        var i
        !(function (e, t) {
          const n = []
            .concat(t)
            .map((t) => {
              const n = e.createElement('link')
              return (n.rel = 'stylesheet'), (n.href = t), n
            })
            .reduce((e, t) => (e.appendChild(t), e), e.createDocumentFragment())
          e.head.appendChild(n)
        })(document, r),
          s(
            'beforesave',
            ((i = r),
            (e) => {
              const t = e.querySelector(`head link[href="${i}"]`)
              e.querySelector('head').append(t)
            })
          )
      },
    })
    const vo = {
      en: {
        status_at_publication: nn`This section describes the status of this
      document at the time of its publication. Other documents may supersede
      this document. A list of current W3C publications and the latest revision
      of this technical report can be found in the
      <a href="https://www.w3.org/TR/">W3C technical reports index</a> at
      https://www.w3.org/TR/.`,
      },
      ko: {
        status_at_publication: nn`이 부분은 현재 문서의 발행 당시 상태에 대해
      기술합니다. 다른 문서가 이 문서를 대체할 수 있습니다. W3C 발행 문서의 최신
      목록 및 테크니컬 리포트 최신판을 https://www.w3.org/TR/ 의
      <a href="https://www.w3.org/TR/">W3C technical reports index</a> 에서
      열람할 수 있습니다.`,
      },
      zh: {
        status_at_publication: nn`本章节描述了本文档的发布状态。其它更新版本可能会覆盖本文档。W3C的文档列
      表和最新版本可通过<a href="https://www.w3.org/TR/">W3C技术报告</a
      >索引访问。`,
      },
      ja: {
        status_at_publication: nn`この節には、公開時点でのこの文書の位置づけが記されている。他の文書によって置き換えられる可能性がある。現時点でのW3Cの発行文書とこのテクニカルレポートの最新版は、下記から参照できる。
      <a href="https://www.w3.org/TR/">W3C technical reports index</a>
      (https://www.w3.org/TR/)`,
      },
      es: {
        status_at_publication: nn`Esta sección describe el estado del presente
      documento al momento de su publicación. El presente documento puede ser
      remplazado por otros. Una lista de las publicaciones actuales del W3C y la
      última revisión del presente informe técnico puede hallarse en
      http://www.w3.org/TR/
      <a href="https://www.w3.org/TR/">el índice de informes técnicos</a> del
      W3C.`,
      },
      de: {
        status_at_publication: nn`Dieser Abschnitt beschreibt den Status des
      Dokuments zum Zeitpunkt der Publikation. Neuere Dokumente können dieses
      Dokument obsolet machen. Eine Liste der aktuellen Publikatinen des W3C und
      die aktuellste Fassung dieser Spezifikation kann im
      <a href="https://www.w3.org/TR/">W3C technical reports index</a> unter
      https://www.w3.org/TR/ abgerufen werden.`,
      },
    }
    Object.keys(vo).forEach((e) => {
      m[e] || (m[e] = {}), Object.assign(m[e], vo[e])
    })
    var ko = Object.freeze({ __proto__: null, name: 'w3c/l10n' })
    let xo, $o
    const _o = new Promise((e, t) => {
        ;(xo = e),
          ($o = (e) => {
            o('error', e), t(new Error(e))
          })
      }),
      So = wn({
        en: {
          file_a_bug: 'File a bug',
          participate: 'Participate',
          commit_history: 'Commit history',
        },
        ko: { participate: '참여' },
        zh: { participate: '参与：', file_a_bug: '反馈错误' },
        ja: {
          file_a_bug: '問題報告',
          participate: '参加方法：',
          commit_history: '変更履歴',
        },
        nl: {
          commit_history: 'Revisiehistorie',
          file_a_bug: 'Dien een melding in',
          participate: 'Doe mee',
        },
        es: {
          commit_history: 'Historia de cambios',
          file_a_bug: 'Nota un bug',
          participate: 'Participe',
        },
        de: {
          file_a_bug: 'Fehler melden',
          participate: 'Mitmachen',
          commit_history: 'Revisionen',
        },
      })
    var Co = Object.freeze({
      __proto__: null,
      name: 'core/github',
      github: _o,
      run: async function (e) {
        if (!e.hasOwnProperty('github') || !e.github) return void xo(null)
        if (
          'object' == typeof e.github &&
          !e.github.hasOwnProperty('repoURL')
        ) {
          return void $o(
            'Config option `[github](https://github.com/w3c/respec/wiki/github)` is missing property `repoURL`.'
          )
        }
        let t,
          n = e.github.repoURL || e.github
        n.endsWith('/') || (n += '/')
        try {
          t = new URL(n, 'https://github.com')
        } catch {
          return void $o(`\`respecConf.github\` is not a valid URL? (${t})`)
        }
        if ('https://github.com' !== t.origin) {
          return void $o(
            `\`respecConf.github\` must be HTTPS and pointing to GitHub. (${t})`
          )
        }
        const [r, s] = t.pathname.split('/').filter((e) => e)
        if (!r || !s) {
          return void $o(
            '`respecConf.github` URL needs a path with, for example, w3c/my-spec'
          )
        }
        const i = e.github.branch || 'gh-pages',
          a = new URL('./issues/', t).href,
          c = {
            edDraftURI: `https://${r.toLowerCase()}.github.io/${s}/`,
            githubToken: void 0,
            githubUser: void 0,
            issueBase: a,
            atRiskBase: a,
            otherLinks: [],
            pullBase: new URL('./pulls/', t).href,
            shortName: s,
          },
          l = {
            key: So.participate,
            data: [
              { value: `GitHub ${r}/${s}`, href: t },
              { value: So.file_a_bug, href: c.issueBase },
              {
                value: So.commit_history,
                href: new URL('./commits/' + i, t.href).href,
              },
              { value: 'Pull requests', href: c.pullBase },
            ],
          }
        let u = 'https://respec.org/github'
        if (e.githubAPI)
          if (new URL(e.githubAPI).hostname === window.parent.location.hostname)
            u = e.githubAPI
          else {
            o('warn', '`respecConfig.githubAPI` should not be added manually.')
          }
        const d = {
          branch: i,
          repoURL: t.href,
          apiBase: u,
          fullName: `${r}/${s}`,
        }
        xo(d)
        const p = { ...c, ...e, github: d, githubAPI: u }
        Object.assign(e, p), e.otherLinks.unshift(l)
      },
    })
    function Ro(e, t, n) {
      const r = document.querySelector(`[data-include-id=${t}]`),
        o = kn(e, r.dataset.oninclude, n),
        s = 'string' == typeof r.dataset.includeReplace
      !(function (e, t, { replace: n }) {
        const { includeFormat: r } = e.dataset
        let o = t
        'markdown' === r && (o = Yn(o)),
          'text' === r ? (e.textContent = o) : (e.innerHTML = o),
          'markdown' === r && Qn(e),
          n && e.replaceWith(...e.childNodes)
      })(r, o, { replace: s }),
        s ||
          (function (e) {
            ;[
              'data-include',
              'data-include-format',
              'data-include-replace',
              'data-include-id',
              'oninclude',
            ].forEach((t) => e.removeAttribute(t))
          })(r)
    }
    var Eo = Object.freeze({
      __proto__: null,
      name: 'core/data-include',
      run: async function () {
        const e = document.querySelectorAll('[data-include]'),
          t = Array.from(e).map(async (e) => {
            const t = e.dataset.include
            if (!t) return
            const n = 'include-' + String(Math.random()).substr(2)
            e.dataset.includeId = n
            try {
              const e = await fetch(t)
              Ro(await e.text(), n, t)
            } catch (n) {
              const r = `\`data-include\` failed: \`${t}\` (${n.message}). See console for details.`
              console.error('data-include failed for element: ', e, n),
                o('error', r)
            }
          })
        await Promise.all(t)
      },
    })
    const Ao = wn({
      en: { default_title: 'No Title' },
      de: { default_title: 'Kein Titel' },
      zh: { default_title: '无标题' },
    })
    var To = Object.freeze({
      __proto__: null,
      name: 'core/title',
      run: function (e) {
        const t = document.querySelector('h1#title') || nn`<h1 id="title"></h1>`
        if (t.isConnected && '' === t.textContent.trim()) {
          fn(
            t,
            'The document is missing a title, so using a default title. To fix this, please give your document a `<title>`. If you need special markup in the document\'s title, please use a `<h1 id="title">`.',
            'Document is missing a title'
          )
        }
        t.id || (t.id = 'title'),
          t.classList.add('title'),
          (function (e, t) {
            t.isConnected ||
              (t.textContent = document.title || '' + Ao.default_title)
            let n = bn(t.textContent)
            if (e.isPreview && e.prNumber) {
              const r = e.prUrl || `${e.github.repoURL}pull/${e.prNumber}`,
                { childNodes: o } = nn`
      Preview of PR <a href="${r}">#${e.prNumber}</a>:
    `
              t.prepend(...o), (n = `Preview of PR #${e.prNumber}: ${n}`)
            }
            ;(document.title = n), (e.title = n)
          })(e, t),
          document.body.prepend(t)
      },
    })
    const Lo = wn({ en: { level: 'Level' } })
    var Po = Object.freeze({
      __proto__: null,
      name: 'w3c/level',
      run: function (e) {
        if (!e.hasOwnProperty('level')) return
        const t = document.querySelector('h1#title'),
          n = parseInt(e.level)
        !Number.isInteger(n) || n < 0
          ? fn(
              t,
              `The \`level\` configuration option must be a number greater or equal to 0. It is currently set to \`${n}\``,
              'Invalid level config.'
            )
          : (t.append(` ${Lo.level} ${n}`),
            (document.title = `${document.title} ${Lo.level} ${n}`),
            (e.shortName = `${e.shortName}-${n}`),
            (e.level = n))
      },
    })
    const Io = ['wg', 'wgURI', 'wgId', 'wgPatentURI', 'wgPatentPolicy']
    async function No(e) {
      let t = '',
        n = e
      e.includes('/') && ([t, n] = e.split('/', 2))
      const r = new URL(`${n}/${t}`, 'https://respec.org/w3c/groups/'),
        s = await xn(r.href)
      if (s.ok) {
        const e = await s.json(),
          { id: t, name: n, URI: r, patentURI: o, patentPolicy: i } = e
        return { wg: n, wgId: t, wgURI: r, wgPatentURI: o, wgPatentPolicy: i }
      }
      const i = await s.text()
      let a = `Failed to fetch group details (HTTP: ${s.status}). ${i}`
      if (404 === s.status) {
        a +=
          ' ' +
          'See [supported group names](https://respec.org/w3c/groups/) to use with the [`group`](https://respec.org/docs/#group) configuration option.'
      }
      o('error', a)
    }
    var Do = Object.freeze({
      __proto__: null,
      name: 'w3c/group',
      run: async function (e) {
        const t = Io.filter((t) => e[t])
        if (!e.group) {
          if (t.length) {
            o(
              'warn',
              `${`Configuration options ${gn(
                Io,
                (e) => `\`${e}\``
              )} are deprecated.`} ${'Please use the [`group`](https://respec.org/docs/#group) option instead.'}`
            )
          }
          return
        }
        if (t.length) {
          o(
            'warn',
            `${`Configuration options ${gn(
              t,
              (e) => `\`${e}\``
            )} are superseded by \`group\` and will be overridden by ReSpec.`} ${'Please remove them from `respecConfig`.'}`
          )
        }
        const { group: n } = e,
          r = Array.isArray(n)
            ? await (async function (e) {
                const t = await Promise.all(e.map(No)),
                  n = {
                    wg: [],
                    wgId: [],
                    wgURI: [],
                    wgPatentURI: [],
                    wgPatentPolicy: [],
                  }
                for (const e of t.filter((e) => e))
                  for (const t of Object.keys(n)) n[t].push(e[t])
                return n
              })(n)
            : await No(n)
        Object.assign(e, r)
      },
    })
    function jo(e) {
      if (!e.key) {
        const t =
          'Found a link without `key` attribute in the configuration. See dev console.'
        return o('warn', t), void console.warn('warn', t, e)
      }
      return nn`
    <dt class="${e.class ? e.class : null}">${e.key}:</dt>
    ${e.data ? e.data.map(Oo) : Oo(e)}
  `
    }
    function Oo(e) {
      return nn`<dd class="${e.class ? e.class : null}">
    ${e.href ? nn`<a href="${e.href}">${e.value || e.href}</a>` : e.value}
  </dd>`
    }
    function zo(e) {
      const t = nn`<a href="${e.url || ''}" class="logo"></a>`
      e.alt || pn(t, 'Found spec logo without an `alt` attribute')
      const n = nn`<img
    id="${e.id}"
    alt="${e.alt}"
    width="${e.width}"
    height="${e.height}"
  />`
      return (n.src = e.src), t.append(n), t
    }
    const Mo = {
        en: { until: (e) => nn` Until ${e} ` },
        es: { until: (e) => nn` Hasta ${e} ` },
        ko: { until: (e) => nn` ${e} 이전 ` },
        ja: { until: (e) => nn` ${e} 以前 ` },
        de: { until: (e) => nn` bis ${e} ` },
        zh: { until: (e) => nn` 直到 ${e} ` },
      },
      Wo = g in Mo ? g : 'en',
      Uo = nn`<svg
  width="16"
  height="16"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 256 256"
>
  <style>
    .st1 {
      fill: #fff;
    }
  </style>
  <path
    d="M256 128c0 70.7-57.3 128-128 128S0 198.7 0 128 57.3 0 128 0s128 57.3 128 128z"
    fill="#a6ce39"
  />
  <path
    class="st1"
    d="M86.3 186.2H70.9V79.1h15.4v107.1zM108.9 79.1h41.6c39.6 0 57 28.3 57 53.6 0 27.5-21.5 53.6-56.8 53.6h-41.8V79.1zm15.4 93.3h24.5c34.9 0 42.9-26.5 42.9-39.7C191.7 111.2 178 93 148 93h-23.7v79.4zM88.7 56.8c0 5.5-4.5 10.1-10.1 10.1s-10.1-4.6-10.1-10.1c0-5.6 4.5-10.1 10.1-10.1s10.1 4.6 10.1 10.1z"
  />
</svg>`
    function Fo(e = []) {
      const t = Mo[Wo]
      return e.map(function (e) {
        const r = [e.name],
          o = [e.company],
          s = e.w3cid ? parseInt(e.w3cid, 10) : null,
          i = nn`<dd
      class="p-author h-card vcard"
      data-editor-id="${s}"
    ></dd>`,
          a = document.createDocumentFragment(),
          c = []
        e.mailto
          ? c.push(nn`<a
        class="ed_mailto u-email email p-name"
        href="${'mailto:' + e.mailto}"
        >${r}</a
      >`)
          : e.url
          ? c.push(nn`<a class="u-url url p-name fn" href="${e.url}">${r}</a>`)
          : c.push(nn`<span class="p-name fn">${r}</span>`)
        e.orcid &&
          c.push(nn`<a class="p-name orcid" href="${e.orcid}"
          >${Uo.cloneNode(!0)}
        </a>`)
        e.company &&
          (e.companyURL
            ? c.push(nn`
            (<a class="p-org org h-org h-card" href="${e.companyURL}"
              >${o}</a
            >)
          `)
            : c.push(nn` (${o}) `))
        e.note && c.push(document.createTextNode(` (${e.note})`))
        if (e.extras) {
          const t = e.extras.filter((e) => e.name && e.name.trim()).map(n)
          for (const e of t) c.push(document.createTextNode(', '), e)
        }
        if (e.retiredDate) {
          const n = new Date(e.retiredDate),
            r = 'Invalid Date' !== n.toString(),
            o = document.createElement('time')
          ;(o.textContent = r ? vn(n) : 'Invalid Date'),
            r ||
              fn(
                o,
                'The date is invalid. The expected format is YYYY-MM-DD.',
                'Invalid date'
              ),
            (o.dateTime = ((l = n), cn.format(l))),
            c.push(nn` - ${t.until(o)} `)
        }
        var l
        return nn.bind(a)`${c}`, i.appendChild(a), i
      })
      function n(e) {
        const t = nn`<span class="${e.class || null}"></span>`
        let n = t
        return (
          e.href && ((n = nn`<a href="${e.href}"></a>`), t.appendChild(n)),
          (n.textContent = e.name),
          t
        )
      }
    }
    const qo = 'https://creativecommons.org/licenses/by/4.0/',
      Bo = 'https://www.w3.org/Consortium/Legal/copyright-documents',
      Ho = 'https://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer',
      Go = 'https://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks',
      Vo = wn({
        en: {
          author: 'Author:',
          authors: 'Authors:',
          editor: 'Editor:',
          editors: 'Editors:',
          former_editor: 'Former editor:',
          former_editors: 'Former editors:',
          latest_editors_draft: "Latest editor's draft:",
          latest_published_version: 'Latest published version:',
          edited_in_place: 'edited in place',
          this_version: 'This version:',
          test_suite: 'Test suite:',
          implementation_report: 'Implementation report:',
          prev_editor_draft: "Previous editor's draft:",
          prev_version: 'Previous version:',
          prev_recommendation: 'Previous Recommendation:',
          latest_recommendation: 'Latest Recommendation:',
        },
        ko: {
          author: '저자:',
          authors: '저자:',
          editor: '편집자:',
          editors: '편집자:',
          former_editor: '이전 편집자:',
          former_editors: '이전 편집자:',
          latest_editors_draft: '최신 편집 초안:',
          latest_published_version: '최신 버전:',
          this_version: '현재 버전:',
        },
        zh: {
          author: '作者：',
          authors: '作者：',
          editor: '编辑：',
          editors: '编辑：',
          former_editor: '原编辑：',
          former_editors: '原编辑：',
          latest_editors_draft: '最新编辑草稿：',
          latest_published_version: '最新发布版本：',
          this_version: '本版本：',
          test_suite: '测试套件：',
          implementation_report: '实现报告：',
          prev_editor_draft: '上一版编辑草稿：',
          prev_version: '上一版：',
          prev_recommendation: '上一版正式推荐标准：',
          latest_recommendation: '最新发布的正式推荐标准：',
        },
        ja: {
          author: '著者：',
          authors: '著者：',
          editor: '編者：',
          editors: '編者：',
          former_editor: '以前の版の編者：',
          former_editors: '以前の版の編者：',
          latest_editors_draft: '最新の編集用草案：',
          latest_published_version: '最新バージョン：',
          this_version: 'このバージョン：',
          test_suite: 'テストスイート：',
          implementation_report: '実装レポート：',
        },
        nl: {
          author: 'Auteur:',
          authors: 'Auteurs:',
          editor: 'Redacteur:',
          editors: 'Redacteurs:',
          latest_editors_draft: 'Laatste werkversie:',
          latest_published_version: 'Laatst gepubliceerde versie:',
          this_version: 'Deze versie:',
        },
        es: {
          author: 'Autor:',
          authors: 'Autores:',
          editor: 'Editor:',
          editors: 'Editores:',
          latest_editors_draft: 'Borrador de editor mas reciente:',
          latest_published_version: 'Versión publicada mas reciente:',
          this_version: 'Ésta versión:',
        },
        de: {
          author: 'Autor/in:',
          authors: 'Autor/innen:',
          editor: 'Redaktion:',
          editors: 'Redaktion:',
          former_editor: 'Frühere Mitwirkende:',
          former_editors: 'Frühere Mitwirkende:',
          latest_editors_draft: 'Letzter Entwurf:',
          latest_published_version: 'Letzte publizierte Fassung:',
          this_version: 'Diese Fassung:',
        },
      })
    var Zo = (e, t) => nn`<div class="head">
    ${e.logos.map(zo)} ${document.querySelector('h1#title')}
    ${(function (e) {
      let t = document.querySelector('h2#subtitle')
      return (
        t && t.parentElement
          ? (t.remove(), (e.subtitle = t.textContent.trim()))
          : e.subtitle &&
            ((t = document.createElement('h2')),
            (t.textContent = e.subtitle),
            (t.id = 'subtitle')),
        t && t.classList.add('subtitle'),
        t
      )
    })(e)}
    <h2>
      ${e.prependW3C ? 'W3C ' : ''}${
      e.isCR ? '' + e.longStatus : '' + e.textStatus
    }
      <time class="dt-published" datetime="${e.dashDate}"
        >${e.publishHumanDate}</time
      >${
        e.modificationDate
          ? nn`, ${Vo.edited_in_place}${' '}
          ${(function (e) {
            const t = vn(new Date(e))
            return nn`<time class="dt-modified" datetime="${e}"
    >${t}</time
  >`
          })(e.modificationDate)}`
          : ''
      }
    </h2>
    <dl>
      ${
        e.isNoTrack
          ? ''
          : nn`
            <dt>${Vo.this_version}</dt>
            <dd>
              <a class="u-url" href="${e.thisVersion}"
                >${e.thisVersion}</a
              >
            </dd>
            <dt>${Vo.latest_published_version}</dt>
            <dd>
              ${
                e.latestVersion
                  ? nn`<a href="${e.latestVersion}"
                    >${e.latestVersion}</a
                  >`
                  : 'none'
              }
            </dd>
          `
      }
      ${
        e.edDraftURI
          ? nn`
            <dt>${Vo.latest_editors_draft}</dt>
            <dd><a href="${e.edDraftURI}">${e.edDraftURI}</a></dd>
          `
          : ''
      }
      ${
        e.testSuiteURI
          ? nn`
            <dt>${Vo.test_suite}</dt>
            <dd><a href="${e.testSuiteURI}">${e.testSuiteURI}</a></dd>
          `
          : ''
      }
      ${
        e.implementationReportURI
          ? nn`
            <dt>${Vo.implementation_report}</dt>
            <dd>
              <a href="${e.implementationReportURI}"
                >${e.implementationReportURI}</a
              >
            </dd>
          `
          : ''
      }
      ${
        e.isED && e.prevED
          ? nn`
            <dt>${Vo.prev_editor_draft}</dt>
            <dd><a href="${e.prevED}">${e.prevED}</a></dd>
          `
          : ''
      }
      ${
        e.showPreviousVersion
          ? nn`
            <dt>${Vo.prev_version}</dt>
            <dd><a href="${e.prevVersion}">${e.prevVersion}</a></dd>
          `
          : ''
      }
      ${
        e.prevRecURI
          ? e.isRec
            ? nn`
            <dt>${Vo.prev_recommendation}</dt>
            <dd><a href="${e.prevRecURI}">${e.prevRecURI}</a></dd>
          `
            : nn`
            <dt>${Vo.latest_recommendation}</dt>
            <dd><a href="${e.prevRecURI}">${e.prevRecURI}</a></dd>
          `
          : ''
      }
      <dt>${e.multipleEditors ? Vo.editors : Vo.editor}</dt>
      ${Fo(e.editors)}
      ${
        Array.isArray(e.formerEditors) && e.formerEditors.length > 0
          ? nn`
            <dt>
              ${e.multipleFormerEditors ? Vo.former_editors : Vo.former_editor}
            </dt>
            ${Fo(e.formerEditors)}
          `
          : ''
      }
      ${
        e.authors
          ? nn`
            <dt>${e.multipleAuthors ? Vo.authors : Vo.author}</dt>
            ${Fo(e.authors)}
          `
          : ''
      }
      ${e.otherLinks ? e.otherLinks.map(jo) : ''}
    </dl>
    ${
      e.errata
        ? nn`<p>
          Please check the
          <a href="${e.errata}"><strong>errata</strong></a> for any errors or
          issues reported since publication.
        </p>`
        : ''
    }
    ${
      e.isRec
        ? nn`<p>
          See also
          <a
            href="${
              'http://www.w3.org/2003/03/Translations/byTechnology?technology=' +
              e.shortName
            }"
          >
            <strong>translations</strong></a
          >.
        </p>`
        : ''
    }
    ${
      e.alternateFormats
        ? nn`<p>
          ${
            t.multipleAlternates
              ? 'This document is also available in these non-normative formats:'
              : 'This document is also available in this non-normative format:'
          }
          ${t.alternatesHTML}
        </p>`
        : ''
    }
    ${(function (e) {
      const t = document.querySelector('.copyright')
      if (t) return t.remove(), t
      if (e.hasOwnProperty('overrideCopyright')) {
        o(
          'warn',
          'The `overrideCopyright` configuration option is deprecated. Please use `<p class="copyright">` instead.'
        )
      }
      return e.isUnofficial
        ? e.additionalCopyrightHolders
          ? nn`<p class="copyright">${[e.additionalCopyrightHolders]}</p>`
          : e.overrideCopyright
          ? [e.overrideCopyright]
          : nn`<p class="copyright">
          This document is licensed under a
          ${Yo('Creative Commons Attribution 4.0 License', qo, 'subfoot')}.
        </p>`
        : e.overrideCopyright
        ? [e.overrideCopyright]
        : (function (e) {
            return nn`<p class="copyright">
    <a href="https://www.w3.org/Consortium/Legal/ipr-notice#Copyright"
      >Copyright</a
    >
    &copy;
    ${e.copyrightStart ? e.copyrightStart + '-' : ''}${e.publishYear}
    ${
      e.additionalCopyrightHolders
        ? nn` ${[e.additionalCopyrightHolders]} &amp; `
        : ''
    }
    <a href="https://www.w3.org/"
      ><abbr title="World Wide Web Consortium">W3C</abbr></a
    ><sup>&reg;</sup> (<a href="https://www.csail.mit.edu/"
      ><abbr title="Massachusetts Institute of Technology">MIT</abbr></a
    >,
    <a href="https://www.ercim.eu/"
      ><abbr
        title="European Research Consortium for Informatics and Mathematics"
        >ERCIM</abbr
      ></a
    >, <a href="https://www.keio.ac.jp/">Keio</a>,
    <a href="https://ev.buaa.edu.cn/">Beihang</a>). ${(function (e) {
      if (!e.isCCBY) return
      return nn`
    Some Rights Reserved: this document is dual-licensed,
    ${Yo('CC-BY', qo)} and
    ${Yo('W3C Document License', Bo)}.
  `
    })(e)}
    W3C <a href="${Ho}">liability</a>,
    <a href="${Go}">trademark</a> and ${(function (e) {
              if (e.isCCBY)
                return Yo(
                  'document use',
                  'https://www.w3.org/Consortium/Legal/2013/copyright-documents-dual.html'
                )
              if (e.isW3CSoftAndDocLicense)
                return Yo(
                  'permissive document license',
                  'https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document'
                )
              return Yo('document use', Bo)
            })(e)} rules
    apply.
  </p>`
          })(e)
    })(e)}
    <hr title="Separator for header" />
  </div>`
    function Yo(e, t, n) {
      return nn`<a rel="license" href="${t}" class="${n}">${e}</a>`
    }
    var Ko = (e, t) => {
      const n = document.querySelector('.copyright')
      n && n.remove()
      const r = document.querySelector('h1#title'),
        o = r.cloneNode(!0)
      return nn`<div class="head">
    ${e.logos.map(zo)} ${r}
    ${e.subtitle ? nn`<h2 id="subtitle">${e.subtitle}</h2>` : ''}
    <h2>
      ${e.longStatus}
      <time class="dt-published" datetime="${e.dashDate}"
        >${e.publishHumanDate}</time
      >
    </h2>
    <dl>
      ${
        e.thisVersion
          ? nn`
            <dt>${Vo.this_version}</dt>
            <dd>
              <a class="u-url" href="${e.thisVersion}"
                >${e.thisVersion}</a
              >
            </dd>
          `
          : ''
      }
      ${
        e.latestVersion
          ? nn`
            <dt>${Vo.latest_published_version}</dt>
            <dd>
              <a href="${e.latestVersion}">${e.latestVersion}</a>
            </dd>
          `
          : ''
      }
      ${
        e.edDraftURI
          ? nn`
            <dt>${Vo.latest_editors_draft}</dt>
            <dd><a href="${e.edDraftURI}">${e.edDraftURI}</a></dd>
          `
          : ''
      }
      ${
        e.testSuiteURI
          ? nn`
            <dt>Test suite:</dt>
            <dd><a href="${e.testSuiteURI}">${e.testSuiteURI}</a></dd>
          `
          : ''
      }
      ${
        e.implementationReportURI
          ? nn`
            <dt>Implementation report:</dt>
            <dd>
              <a href="${e.implementationReportURI}"
                >${e.implementationReportURI}</a
              >
            </dd>
          `
          : ''
      }
      ${
        e.prevVersion
          ? nn`
            <dt>Previous version:</dt>
            <dd><a href="${e.prevVersion}">${e.prevVersion}</a></dd>
          `
          : ''
      }
      ${
        e.isCGFinal
          ? ''
          : nn`
            ${
              e.prevED
                ? nn`
                  <dt>Previous editor's draft:</dt>
                  <dd><a href="${e.prevED}">${e.prevED}</a></dd>
                `
                : ''
            }
          `
      }
      <dt>${e.multipleEditors ? Vo.editors : Vo.editor}</dt>
      ${Fo(e.editors)}
      ${
        Array.isArray(e.formerEditors) && e.formerEditors.length > 0
          ? nn`
            <dt>
              ${e.multipleFormerEditors ? Vo.former_editors : Vo.former_editor}
            </dt>
            ${Fo(e.formerEditors)}
          `
          : ''
      }
      ${
        e.authors
          ? nn`
            <dt>${e.multipleAuthors ? Vo.authors : Vo.author}</dt>
            ${Fo(e.authors)}
          `
          : ''
      }
      ${e.otherLinks ? e.otherLinks.map(jo) : ''}
    </dl>
    ${
      e.alternateFormats
        ? nn`<p>
          ${
            t.multipleAlternates
              ? 'This document is also available in these non-normative formats:'
              : 'This document is also available in this non-normative format:'
          }
          ${t.alternatesHTML}
        </p>`
        : ''
    }
    ${
      n ||
      nn`<p class="copyright">
          <a href="https://www.w3.org/Consortium/Legal/ipr-notice#Copyright"
            >Copyright</a
          >
          &copy;
          ${e.copyrightStart ? e.copyrightStart + '-' : ''}${e.publishYear}
          ${
            e.additionalCopyrightHolders
              ? nn` ${[e.additionalCopyrightHolders]} &amp; `
              : ''
          }
          the Contributors to the ${o.childNodes}
          Specification, published by the
          <a href="${e.wgURI}">${e.wg}</a> under the
          ${
            e.isCGFinal
              ? nn`
                <a href="https://www.w3.org/community/about/agreements/fsa/"
                  >W3C Community Final Specification Agreement (FSA)</a
                >. A human-readable
                <a
                  href="https://www.w3.org/community/about/agreements/fsa-deed/"
                  >summary</a
                >
                is available.
              `
              : nn`
                <a href="https://www.w3.org/community/about/agreements/cla/"
                  >W3C Community Contributor License Agreement (CLA)</a
                >. A human-readable
                <a
                  href="https://www.w3.org/community/about/agreements/cla-deed/"
                  >summary</a
                >
                is available.
              `
          }
        </p>`
    }
    <hr title="Separator for header" />
  </div>`
    }
    const Jo = wn({
      en: { sotd: 'Status of This Document' },
      ko: { sotd: '현재 문서의 상태' },
      zh: { sotd: '关于本文档' },
      ja: { sotd: 'この文書の位置付け' },
      nl: { sotd: 'Status van dit document' },
      es: { sotd: 'Estado de este Document' },
      de: { sotd: 'Status dieses Dokuments' },
    })
    var Xo = (e, t) => nn`
    <h2>${Jo.sotd}</h2>
    ${e.isPreview ? Qo(e) : ''}
    ${
      e.isUnofficial
        ? (function (e) {
            const { additionalContent: t } = e
            return nn`
    <p>
      This document is a draft of a potential specification. It has no official
      standing of any kind and does not represent the support or consensus of
      any standards organization.
    </p>
    ${t}
  `
          })(t)
        : e.isTagFinding
        ? t.additionalContent
        : e.isNoTrack
        ? (function (e, t) {
            const { isMO: n } = e,
              { additionalContent: r } = t
            return nn`
    <p>
      This document is merely a W3C-internal
      ${n ? 'member-confidential' : ''} document. It has no official standing
      of any kind and does not represent consensus of the W3C Membership.
    </p>
    ${r}
  `
          })(e, t)
        : nn`
          <p><em>${e.l10n.status_at_publication}</em></p>
          ${
            e.isSubmission
              ? (function (e, t) {
                  return nn`
    ${t.additionalContent}
    ${
      e.isMemberSubmission
        ? (function (e) {
            const t = `https://www.w3.org/Submission/${e.publishDate.getUTCFullYear()}/${
                e.submissionCommentNumber
              }/Comment/`,
              n =
                'PP2017' === e.wgPatentPolicy
                  ? 'https://www.w3.org/Consortium/Patent-Policy-20170801/'
                  : 'https://www.w3.org/Consortium/Patent-Policy/'
            return nn`<p>
    By publishing this document, W3C acknowledges that the
    <a href="${e.thisVersion}">Submitting Members</a> have made a formal
    Submission request to W3C for discussion. Publication of this document by
    W3C indicates no endorsement of its content by W3C, nor that W3C has, is, or
    will be allocating any resources to the issues addressed by it. This
    document is not the product of a chartered W3C group, but is published as
    potential input to the
    <a href="https://www.w3.org/Consortium/Process">W3C Process</a>. A
    <a href="${t}">W3C Team Comment</a> has been published in
    conjunction with this Member Submission. Publication of acknowledged Member
    Submissions at the W3C site is one of the benefits of
    <a href="https://www.w3.org/Consortium/Prospectus/Joining">
      W3C Membership</a
    >. Please consult the requirements associated with Member Submissions of
    <a href="${n}#sec-submissions"
      >section 3.3 of the W3C Patent Policy</a
    >. Please consult the complete
    <a href="https://www.w3.org/Submission"
      >list of acknowledged W3C Member Submissions</a
    >.
  </p>`
          })(e)
        : e.isTeamSubmission
        ? (function (e, t) {
            return nn`
    ${es(e, t)}
    <p>
      Please consult the complete
      <a href="https://www.w3.org/TeamSubmission/">list of Team Submissions</a>.
    </p>
  `
          })(e, t)
        : ''
    }
  `
                })(e, t)
              : nn`
                ${e.sotdAfterWGinfo ? '' : t.additionalContent}
                ${
                  e.overrideStatus
                    ? ''
                    : nn`
                      ${(function (e) {
                        if (!e.wg) return
                        let t = null
                        e.isRec &&
                          e.revisionTypes &&
                          e.revisionTypes.length &&
                          (e.revisionTypes.includes('addition')
                            ? (t = e.revisionTypes.includes('correction')
                                ? nn`It includes
          <a href="https://www.w3.org/2020/Process-20200915/#proposed-changes"
            >proposed changes</a
          >, introducing substantive changes and new features since the previous
          Recommentation.`
                                : nn`It includes
          <a href="https://www.w3.org/2020/Process-20200915/#proposed-addition"
            >proposed additions</a
          >, introducing new features since the previous Recommentation.`)
                            : e.revisionTypes.includes('correction') &&
                              (t = nn`It includes
        <a href="https://www.w3.org/2020/Process-20200915/#proposed-correction"
          >proposed corrections</a
        >.`))
                        return nn`<p>
    This document was published by ${e.wgHTML} as ${e.anOrA}
    ${e.longStatus}. ${t}
    ${
      e.notYetRec
        ? 'This document is intended to become a W3C Recommendation.'
        : ''
    }
  </p>`
                      })(e)} ${(function (e, t) {
                        if (!e.github && !e.wgPublicList) return
                        return nn`<p>
    ${
      e.github
        ? nn`
          <a href="${e.issueBase}">GitHub Issues</a> are preferred for
          discussion of this specification.
        `
        : ''
    }
    ${
      e.wgPublicList
        ? nn`
          ${
            e.github && e.wgPublicList
              ? 'Alternatively, you can send comments to our mailing list.'
              : 'Comments regarding this document are welcome.'
          }
          Please send them to
          <a href="${t.mailToWGPublicListWithSubject}"
            >${e.wgPublicList}@w3.org</a
          >
          (<a
            href="${`https://lists.w3.org/Archives/Public/${e.wgPublicList}/`}"
            >archives</a
          >)${
            e.subjectPrefix
              ? nn`
                with <code>${e.subjectPrefix}</code> at the start of your
                email's subject
              `
              : ''
          }.
        `
        : ''
    }
  </p>`
                      })(e, t)}
                    `
                }
                ${e.sotdAfterWGinfo ? t.additionalContent : ''}
                ${
                  e.isRec
                    ? (function ({
                        updateableRec: e,
                        revisionTypes: t = [],
                        humanRevisedRecEnd: n,
                      }) {
                        let r = ''
                        t.includes('addition') && (r = 'additions')
                        t.includes('correction') && !r && (r = 'corrections')
                        return nn`<p>
      A W3C Recommendation is a specification that, after extensive
      consensus-building, has received the endorsement of the W3C and its
      Members. W3C recommends the wide deployment of this specification as a
      standard for the Web.
      ${
        e
          ? nn`Future updates to this Recommendation may incorporate
            <a
              href="https://www.w3.org/2020/Process-20200915/#allow-new-features"
              >new features</a
            >.`
          : ''
      }
    </p>
    ${
      t.includes('addition')
        ? nn`<p class="addition">
          Proposed additions are marked in the document.
        </p>`
        : ''
    }
    ${
      t.includes('correction')
        ? nn`<p class="correction">
          Proposed corrections are marked in the document.
        </p>`
        : ''
    }
    ${
      r
        ? nn`<p>
          The W3C Membership and other interested parties are invited to review
          the proposed ${r} and send comments through
          ${n}. Advisory Committee Representatives should
          consult their
          <a href="https://www.w3.org/2002/09/wbs/myQuestionnaires"
            >WBS questionnaires</a
          >.
        </p>`
        : ''
    } `
                      })(e)
                    : (function (e) {
                        let t = '',
                          n = nn`This is a draft document and may be updated, replaced
  or obsoleted by other documents at any time. It is inappropriate to cite this
  document as other than work in progress.
  ${
    e.updateableRec
      ? nn`Future updates to this specification may incorporate
        <a href="https://www.w3.org/2020/Process-20200915/#allow-new-features"
          >new features</a
        >.`
      : ''
  }`,
                          r = ''
                        'CRD' === e.specStatus
                          ? ((t =
                              'A Candidate Recommendation Draft integrates changes from the previous Candidate Recommendation that the Working Group intends to include in a subsequent Candidate Recommendation Snapshot.'),
                            'LS' === e.pubMode &&
                              (n =
                                'This document is maintained and updated at any time. Some parts of this document are work in progress. '))
                          : 'CR' === e.specStatus
                          ? ((t = nn`A Candidate Recommendation Snapshot has received
      <a href="https://www.w3.org/2020/Process-20200915/#dfn-wide-review"
        >wide review</a
      >
      and is intended to gather
      <a href="${e.implementationReportURI}">implementation experience</a>.`),
                            (n = nn`${
                              e.updateableRec
                                ? nn`Future updates to this specification may incorporate
          <a href="https://www.w3.org/2020/Process-20200915/#allow-new-features"
            >new features</a
          >.`
                                : ''
                            }`),
                            (r =
                              'LS' === e.pubMode
                                ? `Comments are welcome at any time but most especially before ${e.humanCREnd}.`
                                : `This Candidate Recommendation is not expected to advance to Proposed Recommendation any earlier than ${e.humanCREnd}.`))
                          : e.isPR
                          ? (r = nn` The W3C Membership and other interested parties are
      invited to review the document and send comments through
      ${e.humanPREnd}. Advisory Committee Representatives should consult
      their
      <a href="https://www.w3.org/2002/09/wbs/myQuestionnaires"
        >WBS questionnaires</a
      >. Note that substantive technical comments were expected during the
      Candidate Recommendation review period that ended ${e.humanCREnd}.`)
                          : e.isPER &&
                            (r = nn` W3C Advisory Committee Members are invited to send
      formal review comments on this Proposed Edited Recommendation to the W3C
      Team until ${e.humanPEREnd}. Members of the Advisory Committee will
      find the appropriate review form for this document by consulting their
      list of current
      <a href="https://www.w3.org/2002/09/wbs/myQuestionnaires"
        >WBS questionnaires</a
      >.`)
                        return nn`<p>
      Publication as ${e.anOrA} ${e.textStatus} does not imply endorsement
      by the W3C Membership. ${t}
    </p>
    ${n ? nn`<p>${n}</p>` : ''}
    <p>${r}</p>`
                      })(e)
                }
                ${(function (e) {
                  const {
                      isNote: t,
                      wgId: n,
                      isIGNote: r,
                      multipleWGs: o,
                      recNotExpected: s,
                      wgPatentHTML: i,
                      wgPatentURI: a,
                      charterDisclosureURI: c,
                      wgPatentPolicy: l,
                    } = e,
                    u =
                      'PP2017' === l
                        ? 'https://www.w3.org/Consortium/Patent-Policy-20170801/'
                        : 'https://www.w3.org/Consortium/Patent-Policy/',
                    d = r
                      ? ''
                      : nn`
        This document was produced by ${o ? 'groups' : 'a group'}
        operating under the
        <a href="${u}"
          >${'PP2017' === l ? '1 August 2017 ' : ''}W3C Patent
          Policy</a
        >.
      `
                  return nn`<p data-deliverer="${t || r ? n : null}">
    ${d} ${
                    s
                      ? 'The group does not expect this document to become a W3C Recommendation.'
                      : ''
                  }
    ${
      t || r
        ? ''
        : nn`
          ${
            o
              ? nn` W3C maintains ${i} `
              : nn`
                W3C maintains a
                <a href="${[a]}" rel="disclosure"
                  >public list of any patent disclosures</a
                >
              `
          }
          made in connection with the deliverables of
          ${
            o
              ? 'each group; these pages also include'
              : 'the group; that page also includes'
          }
          instructions for disclosing a patent. An individual who has actual
          knowledge of a patent which the individual believes contains
          <a href="${u}#def-essential">Essential Claim(s)</a>
          must disclose the information in accordance with
          <a href="${u}#sec-Disclosure"
            >section 6 of the W3C Patent Policy</a
          >.
        `
    }
    ${
      r
        ? nn`
          The disclosure obligations of the Participants of this group are
          described in the
          <a href="${c}">charter</a>.
        `
        : ''
    }
  </p>`
                })(e)}
                <p>
                  This document is governed by the
                  <a
                    id="w3c_process_revision"
                    href="https://www.w3.org/2020/Process-20200915/"
                    >15 September 2020 W3C Process Document</a
                  >.
                </p>
                ${e.addPatentNote ? nn`<p>${[e.addPatentNote]}</p>` : ''}
              `
          }
        `
    }
    ${t.additionalSections}
  `
    function Qo(e) {
      const { prUrl: t, prNumber: n, edDraftURI: r } = e
      return nn`<details class="annoying-warning" open="">
    <summary>
      This is a
      preview${
        t && n
          ? nn`
            of pull request
            <a href="${t}">#${n}</a>
          `
          : ''
      }
    </summary>
    <p>
      Do not attempt to implement this version of the specification. Do not
      reference this version as authoritative in any way.
      ${
        r
          ? nn`
            Instead, see
            <a href="${r}">${r}</a> for the Editor's draft.
          `
          : ''
      }
    </p>
  </details>`
    }
    function es(e, t) {
      const {
          mailToWGPublicListWithSubject: n,
          mailToWGPublicListSubscription: r,
        } = t,
        { wgPublicList: o, subjectPrefix: s } = e
      return nn`<p>
    If you wish to make comments regarding this document, please send them to
    <a href="${n}">${o}@w3.org</a>
    (<a href="${r}">subscribe</a>,
    <a href="${`https://lists.w3.org/Archives/Public/${o}/`}">archives</a>)${
        s
          ? nn` with <code>${s}</code> at the start of your email's
          subject`
          : ''
      }.
  </p>`
    }
    var ts = (e, t) => nn`
    <h2>${Jo.sotd}</h2>
    ${e.isPreview ? Qo(e) : ''}
    <p>
      This specification was published by the
      <a href="${e.wgURI}">${e.wg}</a>. It is not a W3C Standard nor is it
      on the W3C Standards Track.
      ${
        e.isCGFinal
          ? nn`
            Please note that under the
            <a href="https://www.w3.org/community/about/agreements/final/"
              >W3C Community Final Specification Agreement (FSA)</a
            >
            other conditions apply.
          `
          : nn`
            Please note that under the
            <a href="https://www.w3.org/community/about/agreements/cla/"
              >W3C Community Contributor License Agreement (CLA)</a
            >
            there is a limited opt-out and other conditions apply.
          `
      }
      Learn more about
      <a href="https://www.w3.org/community/"
        >W3C Community and Business Groups</a
      >.
    </p>
    ${e.sotdAfterWGinfo ? '' : t.additionalContent}
    ${e.wgPublicList ? es(e, t) : ''}
    ${e.sotdAfterWGinfo ? t.additionalContent : ''}
    ${t.additionalSections}
  `
    const ns = new Intl.DateTimeFormat(['en-AU'], {
        timeZone: 'UTC',
        year: 'numeric',
        month: 'long',
        day: '2-digit',
      }),
      rs = {
        LS: 'WD',
        LD: 'WD',
        FPWD: 'WD',
        LC: 'WD',
        FPLC: 'WD',
        'FPWD-NOTE': 'NOTE',
        'WD-NOTE': 'WD',
        'LC-NOTE': 'LC',
        'IG-NOTE': 'NOTE',
        'WG-NOTE': 'NOTE',
      },
      os = {
        NOTE: 'w3p:NOTE',
        WD: 'w3p:WD',
        LC: 'w3p:LastCall',
        CR: 'w3p:CR',
        CRD: 'w3p:CRD',
        PR: 'w3p:PR',
        REC: 'w3p:REC',
        PER: 'w3p:PER',
        RSCND: 'w3p:RSCND',
      },
      ss = {
        NOTE: 'Working Group Note',
        'WG-NOTE': 'Working Group Note',
        'CG-NOTE': 'Co-ordination Group Note',
        'IG-NOTE': 'Interest Group Note',
        'Member-SUBM': 'Member Submission',
        'Team-SUBM': 'Team Submission',
        MO: 'Member-Only Document',
        ED: "Editor's Draft",
        LS: 'Living Standard',
        LD: 'Living Document',
        FPWD: 'First Public Working Draft',
        WD: 'Working Draft',
        'FPWD-NOTE': 'Working Group Note',
        'WD-NOTE': 'Working Draft',
        'LC-NOTE': 'Working Draft',
        FPLC: 'First Public and Last Call Working Draft',
        LC: 'Last Call Working Draft',
        CR: 'Candidate Recommendation',
        CRD: 'Candidate Recommendation',
        PR: 'Proposed Recommendation',
        PER: 'Proposed Edited Recommendation',
        REC: 'Recommendation',
        RSCND: 'Rescinded Recommendation',
        unofficial: 'Unofficial Draft',
        base: 'Document',
        finding: 'TAG Finding',
        'draft-finding': 'Draft TAG Finding',
        'CG-DRAFT': 'Draft Community Group Report',
        'CG-FINAL': 'Final Community Group Report',
        'BG-DRAFT': 'Draft Business Group Report',
        'BG-FINAL': 'Final Business Group Report',
      },
      is = {
        ...ss,
        CR: 'Candidate Recommendation Snapshot',
        CRD: 'Candidate Recommendation Draft',
        'FPWD-NOTE': 'First Public Working Group Note',
        'LC-NOTE': 'Last Call Working Draft',
      },
      as = ['FPWD', 'WD'],
      cs = ['FPLC', 'LC', 'CR', 'CRD', 'PR', 'PER', 'REC'],
      ls = [
        'base',
        'BG-DRAFT',
        'BG-FINAL',
        'CG-DRAFT',
        'CG-FINAL',
        'draft-finding',
        'finding',
        'MO',
        'unofficial',
      ],
      us = ['CG-DRAFT', 'CG-FINAL', 'BG-DRAFT', 'BG-FINAL'],
      ds = ['ED', 'IG-NOTE'],
      ps = {
        cc0: {
          name: 'Creative Commons 0 Public Domain Dedication',
          short: 'CC0',
          url: 'https://creativecommons.org/publicdomain/zero/1.0/',
        },
        'w3c-software': {
          name: 'W3C Software Notice and License',
          short: 'W3C Software',
          url:
            'https://www.w3.org/Consortium/Legal/2002/copyright-software-20021231',
        },
        'w3c-software-doc': {
          name: 'W3C Software and Document Notice and License',
          short: 'W3C Software and Document',
          url:
            'https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document',
        },
        'cc-by': {
          name: 'Creative Commons Attribution 4.0 International Public License',
          short: 'CC-BY',
          url: 'https://creativecommons.org/licenses/by/4.0/legalcode',
        },
      },
      fs = Object.freeze({
        id: '',
        alt: '',
        href: '',
        src: '',
        height: '48',
        width: '72',
      })
    function hs(e, t, n = new Date()) {
      const r = e[t] ? new Date(e[t]) : new Date(n)
      if (Number.isFinite(r.valueOf())) {
        const e = cn.format(r)
        return new Date(e)
      }
      return (
        o(
          'error',
          `[\`${t}\`](https://github.com/w3c/respec/wiki/${t}) is not a valid date: "${e[t]}". Expected format 'YYYY-MM-DD'.`
        ),
        new Date(cn.format(new Date()))
      )
    }
    function ms(e, { isTagFinding: t = !1 }) {
      const n = e.cloneNode(!0),
        r = document.createDocumentFragment()
      for (
        ;
        n.hasChildNodes() &&
        (n.firstChild.nodeType !== Node.ELEMENT_NODE ||
          'section' !== n.firstChild.localName);

      )
        r.appendChild(n.firstChild)
      return (
        t &&
          !r.hasChildNodes() &&
          o(
            'warn',
            "ReSpec does not support automated SotD generation for TAG findings, please add the prerequisite content in the 'sotd' section"
          ),
        { additionalContent: r, additionalSections: n.childNodes }
      )
    }
    var gs = Object.freeze({
      __proto__: null,
      name: 'w3c/headers',
      run: function (e) {
        if (
          ((e.isUnofficial = 'unofficial' === e.specStatus),
          e.isUnofficial && !Array.isArray(e.logos) && (e.logos = []),
          (e.isCCBY = 'cc-by' === e.license),
          (e.isW3CSoftAndDocLicense = 'w3c-software-doc' === e.license),
          ['cc-by'].includes(e.license))
        ) {
          let t = `You cannot use license "\`${e.license}\`" with W3C Specs. `
          ;(t +=
            'Please set `respecConfig.license: "w3c-software-doc"` instead.'),
            o('error', t)
        }
        if (
          ((e.licenseInfo = ps[e.license]),
          (e.isCGBG = us.includes(e.specStatus)),
          (e.isCGFinal = e.isCGBG && e.specStatus.endsWith('G-FINAL')),
          (e.isBasic = 'base' === e.specStatus),
          (e.isRegular = !e.isCGBG && !e.isBasic),
          e.specStatus ||
            o('error', 'Missing required configuration: `specStatus`'),
          e.isRegular &&
            !e.shortName &&
            o('error', 'Missing required configuration: `shortName`'),
          e.testSuiteURI)
        ) {
          const t = new URL(e.testSuiteURI, location.href),
            { host: n, pathname: r } = t
          if ('github.com' === n && r.startsWith('/w3c/web-platform-tests/')) {
            o(
              'warn',
              `Web Platform Tests have moved to a new Github Organization at https://github.com/web-platform-tests. Please update your [\`testSuiteURI\`](https://github.com/w3c/respec/wiki/testSuiteURI) to point to the new tests repository (e.g., https://github.com/web-platform-tests/wpt/${e.shortName} ).`
            )
          }
        }
        if (
          (e.subtitle || (e.subtitle = ''),
          (e.publishDate = hs(e, 'publishDate', document.lastModified)),
          (e.publishYear = e.publishDate.getUTCFullYear()),
          (e.publishHumanDate = ns.format(e.publishDate)),
          (e.isNoTrack = ls.includes(e.specStatus)),
          (e.isRecTrack =
            !e.noRecTrack && cs.concat(as).includes(e.specStatus)),
          (e.isMemberSubmission = 'Member-SUBM' === e.specStatus),
          e.isMemberSubmission)
        ) {
          const t = {
            alt: 'W3C Member Submission',
            href: 'https://www.w3.org/Submission/',
            src: 'https://www.w3.org/Icons/member_subm-v.svg',
            width: '211',
          }
          e.logos.push({ ...fs, ...t })
        }
        if (
          ((e.isTeamSubmission = 'Team-SUBM' === e.specStatus),
          e.isTeamSubmission)
        ) {
          const t = {
            alt: 'W3C Team Submission',
            href: 'https://www.w3.org/TeamSubmission/',
            src: 'https://www.w3.org/Icons/team_subm-v.svg',
            width: '211',
          }
          e.logos.push({ ...fs, ...t })
        }
        ;(e.isSubmission = e.isMemberSubmission || e.isTeamSubmission),
          (e.anOrA = ds.includes(e.specStatus) ? 'an' : 'a'),
          (e.isTagFinding =
            'finding' === e.specStatus || 'draft-finding' === e.specStatus),
          e.isRecTrack &&
            !(function (e) {
              return (
                e.github ||
                (e.otherLinks &&
                  e.otherLinks.find((e) =>
                    e.data.find(
                      (e) =>
                        e.href &&
                        e.href
                          .toString()
                          .match(/^https:\/\/github\.com\/.*\/issues/)
                    )
                  ))
              )
            })(e) &&
            o(
              'error',
              'Rec-track documents must link to Github issues from their head. Please use the [`github`](https://respec.org/docs/#github) configuration option.'
            ),
          e.edDraftURI ||
            ((e.edDraftURI = ''),
            'ED' === e.specStatus &&
              o('warn', "Editor's Drafts should set edDraftURI.")),
          (e.maturity = rs[e.specStatus] ? rs[e.specStatus] : e.specStatus)
        let t = 'TR'
        'Member-SUBM' === e.specStatus
          ? (t = 'Submission')
          : 'Team-SUBM' === e.specStatus && (t = 'TeamSubmission'),
          e.isRegular &&
            (e.thisVersion = `https://www.w3.org/${t}/${e.publishDate.getUTCFullYear()}/${
              e.maturity
            }-${e.shortName}-${yn(e.publishDate)}/`),
          'ED' === e.specStatus && (e.thisVersion = e.edDraftURI)
        const n = 'ED' === e.specStatus && null === e.latestVersion
        if (
          (e.isRegular &&
            !n &&
            (e.latestVersion = `https://www.w3.org/${t}/${e.shortName}/`),
          e.isTagFinding &&
            ((e.latestVersion =
              'https://www.w3.org/2001/tag/doc/' + e.shortName),
            (e.thisVersion = `${e.latestVersion}-${cn.format(e.publishDate)}`)),
          e.previousPublishDate)
        ) {
          e.previousMaturity ||
            e.isTagFinding ||
            o(
              'error',
              '`previousPublishDate` is set, but not `previousMaturity`.'
            ),
            (e.previousPublishDate = hs(e, 'previousPublishDate'))
          const t = rs[e.previousMaturity]
            ? rs[e.previousMaturity]
            : e.previousMaturity
          e.isTagFinding
            ? (e.prevVersion = `${e.latestVersion}-${cn.format(
                e.previousPublishDate
              )}`)
            : e.isCGBG
            ? (e.prevVersion = e.prevVersion || '')
            : e.isBasic
            ? (e.prevVersion = '')
            : (e.prevVersion = `https://www.w3.org/TR/${e.previousPublishDate.getUTCFullYear()}/${t}-${
                e.shortName
              }-${yn(e.previousPublishDate)}/`)
        } else
          e.specStatus.endsWith('NOTE') ||
            'FPWD' === e.specStatus ||
            'FPLC' === e.specStatus ||
            'ED' === e.specStatus ||
            e.noRecTrack ||
            e.isNoTrack ||
            e.isSubmission ||
            o(
              'error',
              "Document on track but no previous version: Add `previousMaturity`, and `previousPublishDate` to ReSpec's config."
            ),
            e.prevVersion || (e.prevVersion = '')
        e.prevRecShortname &&
          !e.prevRecURI &&
          (e.prevRecURI = 'https://www.w3.org/TR/' + e.prevRecShortname)
        const r = function (e) {
          if (
            (e.name || o('error', 'All authors and editors must have a name.'),
            e.orcid)
          )
            try {
              e.orcid = (function (e) {
                const t = new URL(e, 'https://orcid.org/')
                if ('https://orcid.org' !== t.origin)
                  throw new Error(
                    `The origin should be "https://orcid.org", not "${t.origin}".`
                  )
                const n = t.pathname.slice(1).replace(/\/$/, '')
                if (!/^\d{4}-\d{4}-\d{4}-\d{3}(\d|X)$/.test(n))
                  throw new Error(
                    `ORCIDs have the format "1234-1234-1234-1234", not "${n}"`
                  )
                const r = n[n.length - 1],
                  o =
                    (12 -
                      (n
                        .split('')
                        .slice(0, -1)
                        .filter((e) => /\d/.test(e))
                        .map(Number)
                        .reduce((e, t) => 2 * (e + t), 0) %
                        11)) %
                    11,
                  s = 10 === o ? 'X' : String(o)
                if (r !== s) throw new Error(`"${n}" has an invalid checksum.`)
                return t.href
              })(e.orcid)
            } catch (t) {
              o('error', `"${e.orcid}" is not an ORCID. ${t.message}`),
                delete e.orcid
            }
        }
        if ((e.formerEditors || (e.formerEditors = []), e.editors)) {
          e.editors.forEach(r)
          for (let t = 0; t < e.editors.length; t++) {
            const n = e.editors[t]
            'retiredDate' in n &&
              (e.formerEditors.push(n), e.editors.splice(t--, 1))
          }
        }
        ;(e.editors && 0 !== e.editors.length) ||
          o('error', 'At least one editor is required'),
          e.formerEditors.length && e.formerEditors.forEach(r),
          e.authors && e.authors.forEach(r),
          (e.multipleEditors = e.editors && e.editors.length > 1),
          (e.multipleFormerEditors = e.formerEditors.length > 1),
          (e.multipleAuthors = e.authors && e.authors.length > 1),
          (e.alternateFormats || []).forEach((e) => {
            ;(e.uri && e.label) ||
              o('error', 'All alternate formats must have a uri and a label.')
          }),
          e.copyrightStart &&
            e.copyrightStart == e.publishYear &&
            (e.copyrightStart = ''),
          (e.longStatus = is[e.specStatus]),
          (e.textStatus = ss[e.specStatus]),
          os[e.specStatus] && (e.rdfStatus = os[e.specStatus]),
          (e.showThisVersion = !e.isNoTrack || e.isTagFinding),
          (e.showPreviousVersion =
            'FPWD' !== e.specStatus &&
            'FPLC' !== e.specStatus &&
            'ED' !== e.specStatus &&
            !e.isNoTrack &&
            !e.isSubmission),
          e.specStatus.endsWith('NOTE') &&
            !e.prevVersion &&
            (e.showPreviousVersion = !1),
          e.isTagFinding && (e.showPreviousVersion = !!e.previousPublishDate),
          (e.notYetRec = e.isRecTrack && 'REC' !== e.specStatus),
          (e.isRec = e.isRecTrack && 'REC' === e.specStatus),
          e.isRec &&
            !e.errata &&
            o('error', 'Recommendations must have an errata link.'),
          (e.prependW3C = !e.isUnofficial),
          (e.isED = 'ED' === e.specStatus),
          (e.isCR = 'CR' === e.specStatus || 'CRD' === e.specStatus),
          (e.isCRDraft = 'CRD' === e.specStatus),
          (e.isPR = 'PR' === e.specStatus),
          (e.isPER = 'PER' === e.specStatus),
          (e.isMO = 'MO' === e.specStatus),
          (e.isNote = ['FPWD-NOTE', 'WG-NOTE'].includes(e.specStatus)),
          (e.isIGNote = 'IG-NOTE' === e.specStatus),
          (e.dashDate = cn.format(e.publishDate)),
          (e.publishISODate = e.publishDate.toISOString()),
          (e.shortISODate = cn.format(e.publishDate)),
          e.wgPatentPolicy &&
            !['PP2017', 'PP2020'].includes(e.wgPatentPolicy) &&
            o(
              'error',
              "`wgPatentPolicy` config option must be either 'PP2017' or 'PP2020'."
            ),
          e.hasOwnProperty('wgPatentURI') && !Array.isArray(e.wgPatentURI)
            ? Object.defineProperty(e, 'wgId', {
                get() {
                  const e = this.wgPatentURI.split('/'),
                    t = e.findIndex((e) => 'pp-impl' === e) + 1
                  return e[t] || ''
                },
              })
            : (e.wgId = e.wgId ? e.wgId : '')
        const s = {
            get multipleAlternates() {
              return e.alternateFormats && e.alternateFormats.length > 1
            },
            get alternatesHTML() {
              return (
                e.alternateFormats &&
                _n(e.alternateFormats, (e) => {
                  const t = e.hasOwnProperty('lang') && e.lang ? e.lang : null,
                    n = e.hasOwnProperty('type') && e.type ? e.type : null
                  return nn`<a
            rel="alternate"
            href="${e.uri}"
            hreflang="${t}"
            type="${n}"
            >${e.label}</a
          >`
                })
              )
            },
          },
          i = (e.isCGBG ? Ko : Zo)(e, s)
        document.body.prepend(i), document.body.classList.add('h-entry')
        const a =
          document.getElementById('sotd') || document.createElement('section')
        ;(!e.isCGBG && e.isNoTrack && !e.isTagFinding) ||
          a.id ||
          o(
            'error',
            'A custom SotD paragraph is required for your type of document.'
          ),
          (a.id = a.id || 'sotd'),
          a.classList.add('introductory')
        const c = [e.wg, e.wgURI, e.wgPatentURI]
        if (
          (c.some((e) => Array.isArray(e)) &&
            !c.every((e) => Array.isArray(e)) &&
            o(
              'error',
              "If one of '`wg`', '`wgURI`', or '`wgPatentURI`' is an array, they all have to be."
            ),
          e.isCGBG &&
            !e.wg &&
            o(
              'error',
              '[`wg`](https://github.com/w3c/respec/wiki/wg) configuration option is required for this kind of document.'
            ),
          Array.isArray(e.wg))
        ) {
          ;(e.multipleWGs = e.wg.length > 1),
            (e.wgHTML = _n(
              e.wg,
              (t, n) => nn`the <a href="${e.wgURI[n]}">${t}</a>`
            ))
          const t = []
          for (let n = 0, r = e.wg.length; n < r; n++)
            t.push(nn`a
          <a href="${e.wgPatentURI[n]}" rel="disclosure"
            >public list of any patent disclosures (${e.wg[n]})</a
          >`)
          e.wgPatentHTML = _n(t)
        } else
          (e.multipleWGs = !1),
            e.wg && (e.wgHTML = nn`the <a href="${e.wgURI}">${e.wg}</a>`)
        'PR' !== e.specStatus ||
          e.crEnd ||
          o(
            'error',
            '`specStatus` is "PR" but no `crEnd` is specified (needed to indicate end of previous CR).'
          ),
          'CR' !== e.specStatus ||
            e.crEnd ||
            o(
              'error',
              '`specStatus` is "CR", but no `crEnd` is specified in Respec config.'
            ),
          (e.crEnd = hs(e, 'crEnd')),
          (e.humanCREnd = ns.format(e.crEnd)),
          'PR' !== e.specStatus ||
            e.prEnd ||
            o('error', '`specStatus` is "PR" but no `prEnd` is specified.'),
          (e.prEnd = hs(e, 'prEnd')),
          (e.humanPREnd = ns.format(e.prEnd)),
          'PER' !== e.specStatus ||
            e.perEnd ||
            o('error', 'Status is PER but no perEnd is specified'),
          (e.perEnd = hs(e, 'perEnd')),
          (e.humanPEREnd = ns.format(e.perEnd))
        const l = ['addition', 'correction']
        if (
          'REC' === e.specStatus &&
          e.revisionTypes &&
          e.revisionTypes.length > 0
        ) {
          const t = e.revisionTypes.find((e) => !l.includes(e))
          t &&
            o(
              'error',
              `\`specStatus\` is "REC" with unknown revision type '${t}'`
            ),
            e.revisionTypes.includes('addition') &&
              !e.updateableRec &&
              o(
                'error',
                '`specStatus` is "REC" with proposed additions but the Rec is not marked as a allowing new features.'
              )
        }
        'REC' === e.specStatus &&
          e.updateableRec &&
          e.revisionTypes &&
          e.revisionTypes.length > 0 &&
          !e.revisedRecEnd &&
          o(
            'error',
            '`specStatus` is "REC" with proposed corrections or additions but no `revisedRecEnd` is specified.'
          ),
          (e.revisedRecEnd = hs(e, 'revisedRecEnd')),
          (e.humanRevisedRecEnd = ns.format(e.revisedRecEnd)),
          (e.recNotExpected =
            !(!e.noRecTrack && !e.recNotExpected) ||
            (!e.isRecTrack &&
              'WD' == e.maturity &&
              'FPWD-NOTE' !== e.specStatus)),
          e.noRecTrack &&
            cs.includes(e.specStatus) &&
            o(
              'error',
              `Document configured as [\`noRecTrack\`](https://github.com/w3c/respec/wiki/noRecTrack), but its status ("${
                e.specStatus
              }") puts it on the W3C Rec Track. Status cannot be any of: ${cs.join(
                ', '
              )}. [More info](https://github.com/w3c/respec/wiki/noRecTrack).`
            ),
          e.isIGNote &&
            !e.charterDisclosureURI &&
            o(
              'error',
              "IG-NOTEs must link to charter's disclosure section using `charterDisclosureURI`."
            ),
          a.classList.contains('override') ||
            nn.bind(a)`${(function (e, t) {
              const n = {
                ...ms(t, e),
                get mailToWGPublicList() {
                  return `mailto:${e.wgPublicList}@w3.org`
                },
                get mailToWGPublicListWithSubject() {
                  const t = e.subjectPrefix
                    ? '?subject=' + encodeURIComponent(e.subjectPrefix)
                    : ''
                  return this.mailToWGPublicList + t
                },
                get mailToWGPublicListSubscription() {
                  return `mailto:${e.wgPublicList}-request@w3.org?subject=subscribe`
                },
              }
              return (e.isCGBG ? ts : Xo)(e, n)
            })(e, a)}`,
          !e.implementationReportURI &&
            e.isCR &&
            o(
              'error',
              'CR documents must have an [`implementationReportURI`](https://github.com/w3c/respec/wiki/implementationReportURI) that describes [implementation experience](https://www.w3.org/2019/Process-20190301/#implementation-experience).'
            ),
          !e.implementationReportURI &&
            e.isPR &&
            o(
              'warn',
              'PR documents should include an  [`implementationReportURI`](https://github.com/w3c/respec/wiki/implementationReportURI) that describes [implementation experience](https://www.w3.org/2019/Process-20190301/#implementation-experience).'
            ),
          o('amend-user-config', {
            publishISODate: e.publishISODate,
            generatedSubtitle: `${e.longStatus} ${e.publishHumanDate}`,
          })
      },
    })
    const bs = wn({
      en: { abstract: 'Abstract' },
      ko: { abstract: '요약' },
      zh: { abstract: '摘要' },
      ja: { abstract: '要約' },
      nl: { abstract: 'Samenvatting' },
      es: { abstract: 'Resumen' },
      de: { abstract: 'Zusammenfassung' },
    })
    var ws = Object.freeze({
      __proto__: null,
      name: 'w3c/abstract',
      run: async function () {
        const e = document.getElementById('abstract')
        if (!e)
          return void o(
            'error',
            'Document must have one element with `id="abstract"'
          )
        e.classList.add('introductory')
        let t = document.querySelector('#abstract>h2')
        t ||
          ((t = document.createElement('h2')),
          (t.textContent = bs.abstract),
          e.prepend(t))
      },
    })
    var ys = Object.freeze({
      __proto__: null,
      name: 'core/data-transform',
      run: function () {
        document.querySelectorAll('[data-transform]').forEach((e) => {
          ;(e.innerHTML = kn(e.innerHTML, e.dataset.transform)),
            e.removeAttribute('data-transform')
        })
      },
    })
    function vs(e) {
      const t = (n = e).dataset.abbr
        ? n.dataset.abbr
        : n.textContent
            .match(/\b([a-z])/gi)
            .join('')
            .toUpperCase()
      var n
      const r = e.textContent.replace(/\s\s+/g, ' ').trim()
      e.insertAdjacentHTML('afterend', ` (<abbr title="${r}">${t}</abbr>)`)
      const o = e.dataset.lt || ''
      e.dataset.lt = o
        .split('|')
        .filter((e) => e.trim())
        .concat(t)
        .join('|')
    }
    var ks = Object.freeze({
      __proto__: null,
      name: 'core/dfn-abbr',
      run: function () {
        const e = document.querySelectorAll('[data-abbr]')
        for (const t of e) {
          const { localName: e } = t
          switch (e) {
            case 'dfn':
              vs(t)
              break
            default:
              pn(
                t,
                `[\`data-abbr\`](https://github.com/w3c/respec/wiki/data-abbr) attribute not supported on \`${e}\` elements.`,
                'Error: unsupported.'
              )
          }
        }
      },
    })
    const xs = /^[a-z]+(\s+[a-z]+)+$/,
      $s = /\B"([^"]*)"\B/,
      _s = /(\w+)\((.*)\)$/,
      Ss = /^\[\[(\w+)\]\]$/,
      Cs = /^((?:\[\[)?(?:\w+)(?:\]\])?)$/,
      Rs = /^(\w+)\["([\w- ]*)"\]$/,
      Es = /\.?(\w+\(.*\)$)/
    function As(e) {
      const { identifier: t, renderParent: n } = e
      if (n)
        return nn`<a data-xref-type="_IDL_" data-link-type="idl"
      ><code>${t}</code></a
    >`
    }
    function Ts(e) {
      const { identifier: t, parent: n, renderParent: r } = e,
        { identifier: o } = n || {}
      return nn`${n && r ? '.' : ''}<a
      data-xref-type="attribute"
      data-link-for=${o}
      data-xref-for=${o}
      data-lt="${`[[${t}]]`}"
      ><code>[[${t}]]</code></a
    >`
    }
    function Ls(e) {
      const { parent: t, identifier: n, renderParent: r } = e,
        { identifier: o } = t || {}
      return nn`${r ? '.' : ''}<a
      data-link-type="idl"
      data-xref-type="attribute|dict-member"
      data-link-for="${o}"
      data-xref-for="${o}"
      ><code>${n}</code></a
    >`
    }
    function Ps(e) {
      const { args: t, identifier: n, type: r, parent: o, renderParent: s } = e,
        { identifier: i } = o || {},
        a = $n(t, (e) => nn`<var>${e}</var>`),
        c = `${n}(${t.join(', ')})`
      return nn`${o && s ? '.' : ''}<a
      data-link-type="idl"
      data-xref-type="${r}"
      data-link-for="${i}"
      data-xref-for="${i}"
      data-lt="${c}"
      ><code>${n}</code></a
    ><code>(${a})</code>`
    }
    function Is(e) {
      const { identifier: t, enumValue: n, parent: r } = e,
        o = r ? r.identifier : t
      return nn`"<a
      data-link-type="idl"
      data-xref-type="enum-value"
      data-link-for="${o}"
      data-xref-for="${o}"
      data-lt="${n ? null : 'the-empty-string'}"
      ><code>${n}</code></a
    >"`
    }
    function Ns(e) {
      const { identifier: t } = e
      return nn`"<a
      data-link-type="idl"
      data-cite="WebIDL"
      data-xref-type="exception"
      ><code>${t}</code></a
    >"`
    }
    function Ds(e) {
      const { identifier: t } = e
      return nn`<a
    data-link-type="idl"
    data-cite="WebIDL"
    data-xref-type="interface"
    ><code>${t}</code></a
  >`
    }
    function js(e) {
      let t
      try {
        t = (function (e) {
          const [t, n] = e.split(Es),
            r = t
              .split(/[./]/)
              .concat(n)
              .filter((e) => e && e.trim())
              .map((e) => e.trim()),
            o = !e.includes('/'),
            s = []
          for (; r.length; ) {
            const t = r.pop()
            if (_s.test(t)) {
              const [, e, n] = t.match(_s),
                r = n.split(/,\s*/).filter((e) => e)
              s.push({
                type: 'method',
                identifier: e,
                args: r,
                renderParent: o,
              })
            } else if (Rs.test(t)) {
              const [, e, n] = t.match(Rs)
              s.push({
                type: 'enum',
                identifier: e,
                enumValue: n,
                renderParent: o,
              })
            } else if ($s.test(t)) {
              const [, e] = t.match($s)
              o
                ? s.push({ type: 'exception', identifier: e })
                : s.push({ type: 'enum', enumValue: e, renderParent: o })
            } else if (Ss.test(t)) {
              const [, e] = t.match(Ss)
              s.push({ type: 'internal-slot', identifier: e, renderParent: o })
            } else if (Cs.test(t) && r.length) {
              const [, e] = t.match(Cs)
              s.push({ type: 'attribute', identifier: e, renderParent: o })
            } else if (xs.test(t))
              s.push({ type: 'idl-primitive', identifier: t, renderParent: o })
            else {
              if (!Cs.test(t) || 0 !== r.length)
                throw new SyntaxError(
                  `IDL micro-syntax parsing error in \`{{ ${e} }}\``
                )
              s.push({ type: 'base', identifier: t, renderParent: o })
            }
          }
          return (
            s.forEach((e, t, n) => {
              e.parent = n[t + 1] || null
            }),
            s.reverse()
          )
        })(e)
      } catch (t) {
        const n = nn`<span>{{ ${e} }}</span>`
        return fn(n, t.message, 'Error: Invalid inline IDL string'), n
      }
      const n = nn(document.createDocumentFragment()),
        r = []
      for (const e of t)
        switch (e.type) {
          case 'base': {
            const t = As(e)
            t && r.push(t)
            break
          }
          case 'attribute':
            r.push(Ls(e))
            break
          case 'internal-slot':
            r.push(Ts(e))
            break
          case 'method':
            r.push(Ps(e))
            break
          case 'enum':
            r.push(Is(e))
            break
          case 'exception':
            r.push(Ns(e))
            break
          case 'idl-primitive':
            r.push(Ds(e))
            break
          default:
            throw new Error('Unknown type.')
        }
      return n`${r}`
    }
    const Os = new Set(['alias', 'reference']),
      zs = (async function () {
        return await en.openDB('respec-biblio2', 12, {
          upgrade(e) {
            Array.from(e.objectStoreNames).map((t) => e.deleteObjectStore(t))
            e
              .createObjectStore('alias', { keyPath: 'id' })
              .createIndex('aliasOf', 'aliasOf', { unique: !1 }),
              e.createObjectStore('reference', { keyPath: 'id' })
          },
        })
      })()
    const Ms = {
        get ready() {
          return zs
        },
        async find(e) {
          return (
            (await this.isAlias(e)) && (e = await this.resolveAlias(e)),
            await this.get('reference', e)
          )
        },
        async has(e, t) {
          if (!Os.has(e)) throw new TypeError('Invalid type: ' + e)
          if (!t) throw new TypeError('id is required')
          const n = (await this.ready).transaction(e, 'readonly').store,
            r = IDBKeyRange.only(t)
          return !!(await n.openCursor(r))
        },
        async isAlias(e) {
          return await this.has('alias', e)
        },
        async resolveAlias(e) {
          if (!e) throw new TypeError('id is required')
          const t = (await this.ready).transaction('alias', 'readonly').store,
            n = IDBKeyRange.only(e),
            r = await t.openCursor(n)
          return r ? r.value.aliasOf : r
        },
        async get(e, t) {
          if (!Os.has(e)) throw new TypeError('Invalid type: ' + e)
          if (!t) throw new TypeError('id is required')
          const n = (await this.ready).transaction(e, 'readonly').store,
            r = IDBKeyRange.only(t),
            o = await n.openCursor(r)
          return o ? o.value : o
        },
        async addAll(e) {
          if (!e) return
          const t = { alias: [], reference: [] }
          for (const n of Object.keys(e)) {
            const r = { id: n, ...e[n] }
            r.aliasOf ? t.alias.push(r) : t.reference.push(r)
          }
          const n = [...Os].flatMap((e) => t[e].map((t) => this.add(e, t)))
          await Promise.all(n)
        },
        async add(e, t) {
          if (!Os.has(e)) throw new TypeError('Invalid type: ' + e)
          if ('object' != typeof t)
            throw new TypeError('details should be an object')
          if ('alias' === e && !t.hasOwnProperty('aliasOf'))
            throw new TypeError('Invalid alias object.')
          const n = await this.ready,
            r = await this.has(e, t.id),
            o = n.transaction(e, 'readwrite').store
          return r ? await o.put(t) : await o.add(t)
        },
        async close() {
          ;(await this.ready).close()
        },
        async clear() {
          const e = await this.ready,
            t = [...Os],
            n = e.transaction(t, 'readwrite'),
            r = t.map((e) => n.objectStore(e).clear())
          await Promise.all(r)
        },
      },
      Ws = {},
      Us = new URL('https://specref.herokuapp.com/bibrefs?refs='),
      Fs = un({ hint: 'dns-prefetch', href: Us.origin })
    let qs
    document.head.appendChild(Fs)
    const Bs = new Promise((e) => {
      qs = e
    })
    async function Hs(e, t = { forceUpdate: !1 }) {
      const n = [...new Set(e)].filter((e) => e.trim())
      if (!n.length || !1 === navigator.onLine) return null
      let r
      try {
        r = await fetch(Us.href + n.join(','))
      } catch (e) {
        return console.error(e), null
      }
      if ((!t.forceUpdate && !r.ok) || 200 !== r.status) return null
      const o = await r.json()
      try {
        await Ms.addAll(o)
      } catch (e) {
        console.error(e)
      }
      return o
    }
    async function Gs(e) {
      const t = await Bs
      if (!t.hasOwnProperty(e)) return null
      const n = t[e]
      return n.aliasOf ? await Gs(n.aliasOf) : n
    }
    var Vs = Object.freeze({
      __proto__: null,
      biblio: Ws,
      name: 'core/biblio',
      updateFromNetwork: Hs,
      resolveRef: Gs,
      Plugin: class {
        constructor(e) {
          this.conf = e
        }
        normalizeReferences() {
          const e = new Set(
            [...this.conf.normativeReferences].map((e) => e.toLowerCase())
          )
          Array.from(this.conf.informativeReferences)
            .filter((t) => e.has(t.toLowerCase()))
            .forEach((e) => this.conf.informativeReferences.delete(e))
        }
        getRefKeys() {
          return {
            informativeReferences: Array.from(this.conf.informativeReferences),
            normativeReferences: Array.from(this.conf.normativeReferences),
          }
        }
        async run() {
          this.conf.localBiblio || (this.conf.localBiblio = {}),
            (this.conf.biblio = Ws)
          const e = Object.keys(this.conf.localBiblio)
            .filter((e) => this.conf.localBiblio[e].hasOwnProperty('aliasOf'))
            .map((e) => this.conf.localBiblio[e].aliasOf)
            .filter((e) => !this.conf.localBiblio.hasOwnProperty(e))
          this.normalizeReferences()
          const t = this.getRefKeys(),
            n = Array.from(
              new Set(
                t.normativeReferences
                  .concat(t.informativeReferences)
                  .filter((e) => !this.conf.localBiblio.hasOwnProperty(e))
                  .concat(e)
                  .sort()
              )
            ),
            r = await (async function (e) {
              const t = []
              try {
                await Ms.ready
                const n = e.map(async (e) => ({
                  id: e,
                  data: await Ms.find(e),
                }))
                t.push(...(await Promise.all(n)))
              } catch (n) {
                t.push(...e.map((e) => ({ id: e, data: null }))),
                  console.warn(n)
              }
              return t
            })(n),
            o = { hasData: [], noData: [] }
          r.forEach((e) => {
            ;(e.data ? o.hasData : o.noData).push(e)
          }),
            o.hasData.forEach((e) => {
              Ws[e.id] = e.data
            })
          const s = o.noData.map((e) => e.id)
          if (s.length) {
            const e = await Hs(s, { forceUpdate: !0 })
            Object.assign(Ws, e)
          }
          Object.assign(Ws, this.conf.localBiblio),
            (() => {
              qs(this.conf.biblio)
            })()
        }
      },
      wireReference: ri,
      stringifyReference: oi,
    })
    const Zs = wn({
        en: {
          info_references: 'Informative references',
          norm_references: 'Normative references',
          references: 'References',
        },
        ko: { references: '참조' },
        nl: {
          info_references: 'Informatieve referenties',
          norm_references: 'Normatieve referenties',
          references: 'Referenties',
        },
        es: {
          info_references: 'Referencias informativas',
          norm_references: 'Referencias normativas',
          references: 'Referencias',
        },
        ja: {
          info_references: '参照用参考文献',
          norm_references: '規範的参考文献',
          references: '参考文献',
        },
        de: {
          info_references: 'Weiterführende Informationen',
          norm_references: 'Normen und Spezifikationen',
          references: 'Referenzen',
        },
        zh: {
          info_references: '非规范性引用',
          norm_references: '规范性引用',
          references: '参考文献',
        },
      }),
      Ys = new Map([
        ['CR', 'W3C Candidate Recommendation'],
        ['ED', "W3C Editor's Draft"],
        ['FPWD', 'W3C First Public Working Draft'],
        ['LCWD', 'W3C Last Call Working Draft'],
        ['NOTE', 'W3C Note'],
        ['PER', 'W3C Proposed Edited Recommendation'],
        ['PR', 'W3C Proposed Recommendation'],
        ['REC', 'W3C Recommendation'],
        ['WD', 'W3C Working Draft'],
        ['WG-NOTE', 'W3C Working Group Note'],
      ]),
      Ks = Object.freeze({
        authors: [],
        date: '',
        href: '',
        publisher: '',
        status: '',
        title: '',
        etAl: !1,
      }),
      Js =
        ((Xs = '.'),
        (e) => {
          const t = e.trim()
          return !t || t.endsWith(Xs) ? t : t + Xs
        })
    var Xs
    function Qs(e, t) {
      const { goodRefs: n, badRefs: r } = (function (e) {
          const t = [],
            n = []
          for (const r of e) r.refcontent ? t.push(r) : n.push(r)
          return { goodRefs: t, badRefs: n }
        })(e.map(ei)),
        s = (function (e) {
          const t = new Map()
          for (const n of e) t.has(n.refcontent.id) || t.set(n.refcontent.id, n)
          return [...t.values()]
        })(n),
        i = s
          .concat(r)
          .sort((e, t) =>
            e.ref.toLocaleLowerCase().localeCompare(t.ref.toLocaleLowerCase())
          ),
        a = nn`<section>
    <h3>${t}</h3>
    <dl class="bibliography">${i.map(ni)}</dl>
  </section>`
      Cn(a, '', t)
      return (
        (function (e, t) {
          e.map(({ ref: e, refcontent: n }) => {
            const r = '#bib-' + e.toLowerCase(),
              o = t
                .get(n.id)
                .map((e) => `a.bibref[href="#bib-${e.toLowerCase()}"]`)
                .join(',')
            return {
              refUrl: r,
              elems: document.querySelectorAll(o),
              refcontent: n,
            }
          }).forEach(({ refUrl: e, elems: t, refcontent: n }) => {
            t.forEach((t) => {
              t.setAttribute('href', e),
                t.setAttribute('title', n.title),
                (t.dataset.linkType = 'biblio')
            })
          })
        })(
          s,
          (function (e) {
            return e.reduce((e, t) => {
              const n = t.refcontent.id
              return (e.has(n) ? e.get(n) : e.set(n, []).get(n)).push(t.ref), e
            }, new Map())
          })(n)
        ),
        (function (e) {
          e.forEach(({ ref: e }) => {
            const t = [
              ...document.querySelectorAll(
                `a.bibref[href="#bib-${e.toLowerCase()}"]`
              ),
            ].filter(
              ({ textContent: t }) => t.toLowerCase() === e.toLowerCase()
            )
            o('error', `Bad reference: [\`${e}\`] (appears ${t.length} times)`),
              console.warn('Bad references: ', t)
          })
        })(r),
        a
      )
    }
    function ei(e) {
      let t = Ws[e],
        n = e
      const r = new Set([n])
      for (; t && t.aliasOf; )
        if (r.has(t.aliasOf)) {
          t = null
          o(
            'error',
            `Circular reference in biblio DB between [\`${e}\`] and [\`${n}\`].`
          )
        } else (n = t.aliasOf), (t = Ws[n]), r.add(n)
      return t && !t.id && (t.id = e.toLowerCase()), { ref: e, refcontent: t }
    }
    function ti(e, t) {
      const n = e.replace(/^(!|\?)/, ''),
        r = '#bib-' + n.toLowerCase(),
        o = nn`<cite
    ><a class="bibref" href="${r}" data-link-type="biblio">${t || n}</a></cite
  >`
      return t ? o : nn`[${o}]`
    }
    function ni({ ref: e, refcontent: t }) {
      const n = 'bib-' + e.toLowerCase()
      return t
        ? nn`
      <dt id="${n}">[${e}]</dt>
      <dd>${{ html: oi(t) }}</dd>
    `
        : nn`
      <dt id="${n}">[${e}]</dt>
      <dd><em class="respec-offending-element">Reference not found.</em></dd>
    `
    }
    function ri(e, t = '_blank') {
      if ('object' != typeof e)
        throw new TypeError('Only modern object references are allowed')
      const n = Object.assign({}, Ks, e),
        r = n.authors.join('; ') + (n.etAl ? ' et al' : ''),
        o = Ys.get(n.status) || n.status
      return nn.wire(n)`
    <cite>
      <a
        href="${n.href}"
        target="${t}"
        rel="noopener noreferrer">
        ${n.title.trim()}</a>.
    </cite>
    <span class="authors">
      ${Js(r)}
    </span>
    <span class="publisher">
      ${Js(n.publisher)}
    </span>
    <span class="pubDate">
      ${Js(n.date)}
    </span>
    <span class="pubStatus">
      ${Js(o)}
    </span>
  `
    }
    function oi(e) {
      if ('string' == typeof e) return e
      let t = `<cite>${e.title}</cite>`
      return (
        (t = e.href ? `<a href="${e.href}">${t}</a>. ` : t + '. '),
        e.authors &&
          e.authors.length &&
          ((t += e.authors.join('; ')), e.etAl && (t += ' et al'), (t += '. ')),
        e.publisher && (t = `${t} ${Js(e.publisher)} `),
        e.date && (t += e.date + '. '),
        e.status && (t += (Ys.get(e.status) || e.status) + '. '),
        e.href && (t += `URL: <a href="${e.href}">${e.href}</a>`),
        t
      )
    }
    var si = Object.freeze({
      __proto__: null,
      name: 'core/render-biblio',
      run: function (e) {
        const t = Array.from(e.informativeReferences),
          n = Array.from(e.normativeReferences)
        if (!t.length && !n.length) return
        const r =
          document.querySelector('section#references') ||
          nn`<section id="references"></section>`
        if (
          (document.querySelector('section#references > h2') ||
            r.prepend(nn`<h2>${Zs.references}</h2>`),
          r.classList.add('appendix'),
          n.length)
        ) {
          const e = Qs(n, Zs.norm_references)
          r.appendChild(e)
        }
        if (t.length) {
          const e = Qs(t, Zs.info_references)
          r.appendChild(e)
        }
        document.body.appendChild(r)
      },
      renderInlineCitation: ti,
      wireReference: ri,
      stringifyReference: oi,
    })
    const ii = {},
      ai = wn({
        en: {
          rfc2119Keywords: () =>
            new RegExp(
              [
                '\\bMUST(?:\\s+NOT)?\\b',
                '\\bSHOULD(?:\\s+NOT)?\\b',
                '\\bSHALL(?:\\s+NOT)?\\b',
                '\\bMAY\\b',
                '\\b(?:NOT\\s+)?REQUIRED\\b',
                '\\b(?:NOT\\s+)?RECOMMENDED\\b',
                '\\bOPTIONAL\\b',
              ].join('|')
            ),
        },
        de: {
          rfc2119Keywords: () =>
            new RegExp(
              [
                '\\bMUSS\\b',
                '\\bERFORDERLICH\\b',
                '\\b(?:NICHT\\s+)?NÖTIG\\b',
                '\\bDARF(?:\\s+NICHT)?\\b',
                '\\bVERBOTEN\\b',
                '\\bSOLL(?:\\s+NICHT)?\\b',
                '\\b(?:NICHT\\s+)?EMPFOHLEN\\b',
                '\\bKANN\\b',
                '\\bOPTIONAL\\b',
              ].join('|')
            ),
        },
      }),
      ci = /(?:`[^`]+`)(?!`)/,
      li = /(?:{{[^}]+}})/,
      ui = /\B\|\w[\w\s]*(?:\s*:[\w\s&;<>]+)?\|\B/,
      di = /(?:\[\[(?:!|\\|\?)?[\w.-]+(?:|[^\]]+)?\]\])/,
      pi = /(?:\[\[\[(?:!|\\|\?)?#?[\w-.]+\]\]\])/,
      fi = /(?:\[=[^=]+=\])/,
      hi = /(?:\[\^[^^]+\^\])/
    function mi(e) {
      const t = e.slice(2, -2).trim(),
        [n, r] = t.split('/', 2).map((e) => e && e.trim()),
        [o, s, i] = r ? ['element-attr', n, r] : ['element', null, n]
      return nn`<code
    ><a data-xref-type="${o}" data-xref-for="${s}"
      >${i}</a
    ></code
  >`
    }
    function gi(e) {
      const t = bn(e),
        n = nn`<em class="rfc2119">${t}</em>`
      return (ii[t] = !0), n
    }
    function bi(e) {
      const t = e.slice(3, -3).trim()
      if (!t.startsWith('#')) return nn`<a data-cite="${t}"></a>`
      if (document.querySelector(t)) return nn`<a href="${t}"></a>`
      const n = nn`<span>${e}</span>`
      return (
        fn(
          n,
          `Wasn't able to expand ${e} as it didn't match any id in the document.`,
          `Please make sure there is element with id ${t} in the document.`
        ),
        n
      )
    }
    function wi(e) {
      const t = e.slice(2, -2).trim()
      return t.startsWith('\\') ? e.replace('\\', '') : js(bn(t))
    }
    function yi(e, t, n) {
      const r = e.slice(2, -2)
      if (r.startsWith('\\')) return [`[[${r.slice(1)}]]`]
      const [o, s] = r.split('|').map(bn),
        { type: i, illegal: a } = An(o, t.parentNode),
        c = ti(o, s),
        l = o.replace(/^(!|\?)/, '')
      if (a && !n.normativeReferences.has(l)) {
        pn(
          c.childNodes[1] || c,
          `Normative references in informative sections are not allowed. Remove '!' from the start of the reference \`[[${r}]]\``
        )
      }
      return (
        'informative' !== i || a
          ? n.normativeReferences.add(l)
          : n.informativeReferences.add(l),
        c.childNodes[1] ? c.childNodes : [c]
      )
    }
    function vi(e, t, n) {
      return 'ABBR' === t.parentElement.tagName
        ? e
        : nn`<abbr title="${n.get(e)}">${e}</abbr>`
    }
    function ki(e) {
      const t = e.slice(1, -1).split(':', 2),
        [n, r] = t.map((e) => e.trim())
      return nn`<var data-type="${r}">${n}</var>`
    }
    function xi(e) {
      const t = (function (e, t = 1 / 0) {
          return e
            .replace('\\/', '%%')
            .split('/', t)
            .map((e) => e && e.trim().replace('%%', '/'))
        })((e = e.slice(2, -2)), 2),
        [n, r] = 2 === t.length ? t : [null, t[0]],
        [o, s] = r.includes('|')
          ? r.split('|', 2).map((e) => e.trim())
          : [null, r],
        i = _i(s),
        a = n ? bn(n) : null
      return nn`<a
    data-link-type="dfn"
    data-link-for="${a}"
    data-xref-for="${a}"
    data-lt="${o}"
    >${i}</a
  >`
    }
    function $i(e) {
      const t = e.slice(1, -1)
      return nn`<code>${t}</code>`
    }
    function _i(e) {
      return ci.test(e)
        ? e
            .split(/(`[^`]+`)(?!`)/)
            .map((e) => (e.startsWith('`') ? $i(e) : _i(e)))
        : document.createTextNode(e)
    }
    var Si = Object.freeze({
      __proto__: null,
      name: 'core/inlines',
      rfc2119Usage: ii,
      run: function (e) {
        const t = new Map()
        document.normalize(),
          document.querySelector('section#conformance') ||
            document.body.classList.add('informative'),
          (e.normativeReferences = new In()),
          (e.informativeReferences = new In()),
          e.respecRFC2119 || (e.respecRFC2119 = ii)
        const n = document.querySelectorAll('abbr[title]')
        for (const e of n) t.set(e.textContent, e.title)
        const r = [...t.keys()],
          o = r.length ? `(?:\\b${r.join('\\b)|(?:\\b')}\\b)` : null,
          s = (function (e, t = [], n = { wsNodes: !0 }) {
            const r = t.join(', '),
              o = document.createNodeIterator(e, NodeFilter.SHOW_TEXT, (e) =>
                n.wsNodes || e.data.trim()
                  ? r && e.parentElement.closest(r)
                    ? NodeFilter.FILTER_REJECT
                    : NodeFilter.FILTER_ACCEPT
                  : NodeFilter.FILTER_REJECT
              ),
              s = []
            let i
            for (; (i = o.nextNode()); ) s.push(i)
            return s
          })(document.body, ['#respec-ui', '.head', 'pre'], { wsNodes: !1 }),
          i = ai.rfc2119Keywords(),
          a = new RegExp(
            `(${[
              i.source,
              li.source,
              ui.source,
              di.source,
              pi.source,
              fi.source,
              ci.source,
              hi.source,
              ...(o ? [o] : []),
            ].join('|')})`
          )
        for (const n of s) {
          const r = n.data.split(a)
          if (1 === r.length) continue
          const o = document.createDocumentFragment()
          let s = !0
          for (const a of r)
            if (((s = !s), s))
              if (a.startsWith('{{')) {
                const e = wi(a)
                o.append(e)
              } else if (a.startsWith('[[[')) {
                const e = bi(a)
                o.append(e)
              } else if (a.startsWith('[[')) {
                const t = yi(a, n, e)
                o.append(...t)
              } else if (a.startsWith('|')) {
                const e = ki(a)
                o.append(e)
              } else if (a.startsWith('[=')) {
                const e = xi(a)
                o.append(e)
              } else if (a.startsWith('`')) {
                const e = $i(a)
                o.append(e)
              } else if (a.startsWith('[^')) {
                const e = mi(a)
                o.append(e)
              } else if (t.has(a)) {
                const e = vi(a, n, t)
                o.append(e)
              } else {
                if (!i.test(a))
                  throw new Error(
                    `Found token '${a}' but it does not correspond to anything`
                  )
                {
                  const e = gi(a)
                  o.append(e)
                }
              }
            else o.append(a)
          n.replaceWith(o)
        }
      },
    })
    const Ci = wn({
      en: {
        conformance: 'Conformance',
        normativity:
          'As well as sections marked as non-normative, all authoring guidelines, diagrams, examples, and notes in this specification are non-normative. Everything else in this specification is normative.',
        keywordInterpretation: (e, t) => nn`<p>
        The key word${t ? 's' : ''} ${e} in this document
        ${t ? 'are' : 'is'} to be interpreted as described in
        <a href="https://tools.ietf.org/html/bcp14">BCP 14</a>
        ${ti('RFC2119')} ${ti('RFC8174')}
        when, and only when, they appear in all capitals, as shown here.
      </p>`,
      },
      de: {
        conformance: 'Anforderungen',
        normativity:
          'Neben den explizit als nicht-normativ gekennzeichneten Abschnitten sind auch alle Diagramme, Beispiele und Hinweise in diesem Dokument nicht normativ. Alle anderen Angaben sind normativ.',
        keywordInterpretation: (e, t) => nn`<p>
        ${t ? 'Die Schlüsselwörter' : 'Das Schlüsselwort'} ${e} in
        diesem Dokument ${t ? 'sind' : 'ist'} gemäß
        <a href="https://tools.ietf.org/html/bcp14">BCP 14</a>
        ${ti('RFC2119')} ${ti('RFC8174')}
        und unter Berücksichtigung von
        <a href="https://github.com/adfinis-sygroup/2119/blob/master/2119de.rst"
          >2119de</a
        >
        zu interpretieren, wenn und nur wenn ${t ? 'sie' : 'es'} wie hier
        gezeigt durchgehend groß geschrieben wurde${t ? 'n' : ''}.
      </p>`,
      },
    })
    var Ri = Object.freeze({
      __proto__: null,
      name: 'w3c/conformance',
      run: function (e) {
        const t = document.querySelector('section#conformance')
        t &&
          !t.classList.contains('override') &&
          (function (e, t) {
            const n = [...Object.keys(ii)]
            n.length &&
              (t.normativeReferences.add('RFC2119'),
              t.normativeReferences.add('RFC8174'))
            const r = _n(n.sort(), (e) => nn`<em class="rfc2119">${e}</em>`),
              o = n.length > 1,
              s = nn`
    <h2>${Ci.conformance}</h2>
    <p>${Ci.normativity}</p>
    ${n.length ? Ci.keywordInterpretation(r, o) : null}
  `
            e.prepend(...s.childNodes)
          })(t, e),
          !t &&
            Object.keys(ii).length &&
            o(
              'warn',
              'Document uses RFC2119 keywords but lacks a conformance section. Please add a `<section id="conformance">`.'
            )
      },
    })
    const Ei = new On()
    function Ai(e, t) {
      for (const n of t) Ei.has(n) || Ei.set(n, new Set()), Ei.get(n).add(e)
    }
    var Ti = Object.freeze({
      __proto__: null,
      name: 'core/dfn',
      run: function () {
        document.querySelectorAll('dfn').forEach((e) => {
          const t = Rn(e)
          Ai(e, t),
            !e.dataset.dfnType &&
              /^\[\[\w+\]\]$/.test(t[0]) &&
              (e.dataset.dfnType = 'idl'),
            (1 === t.length && t[0] === bn(e.textContent)) ||
              (e.dataset.lt = t.join('|'))
        })
      },
    })
    var Li = Object.freeze({
      __proto__: null,
      name: 'core/pluralize',
      run: function (e) {
        if (!e.pluralize) return
        const t = (function () {
          const e = new Set()
          document.querySelectorAll('a:not([href])').forEach((t) => {
            const n = bn(t.textContent).toLowerCase()
            e.add(n), t.dataset.lt && e.add(t.dataset.lt)
          })
          const t = new Set()
          return (
            document
              .querySelectorAll('dfn:not([data-lt-noDefault])')
              .forEach((e) => {
                const n = bn(e.textContent).toLowerCase()
                t.add(n),
                  e.dataset.lt &&
                    e.dataset.lt.split('|').forEach((e) => t.add(e)),
                  e.dataset.localLt &&
                    e.dataset.localLt.split('|').forEach((e) => t.add(e))
              }),
            function (n) {
              const r = bn(n).toLowerCase(),
                o = on.isSingular(r) ? on.plural(r) : on.singular(r)
              return e.has(o) && !t.has(o) ? o : ''
            }
          )
        })()
        document
          .querySelectorAll(
            'dfn:not([data-lt-no-plural]):not([data-lt-noDefault])'
          )
          .forEach((e) => {
            const n = [e.textContent]
            e.dataset.lt && n.push(...e.dataset.lt.split('|')),
              e.dataset.localLt && n.push(...e.dataset.localLt.split('|'))
            const r = new Set(n.map(t).filter((e) => e))
            if (r.size) {
              const t = e.dataset.plurals ? e.dataset.plurals.split('|') : [],
                n = [...new Set([...t, ...r])]
              ;(e.dataset.plurals = n.join('|')), Ai(e, n)
            }
          })
      },
    })
    const Pi = wn({
        en: { example: 'Example' },
        nl: { example: 'Voorbeeld' },
        es: { example: 'Ejemplo' },
        ko: { example: '예시' },
        ja: { example: '例' },
        de: { example: 'Beispiel' },
        zh: { example: '例' },
      }),
      Ii = (async function () {
        try {
          return (
            await Promise.resolve().then(function () {
              return ql
            })
          ).default
        } catch {
          return qn('examples.css')
        }
      })()
    function Ni(e, t, n) {
      ;(n.title = e.title), n.title && e.removeAttribute('title')
      const r = t > 0 ? ' ' + t : '',
        o = n.title ? nn`<span class="example-title">: ${n.title}</span>` : ''
      return nn`<div class="marker">
    <a class="self-link">${Pi.example}<bdi>${r}</bdi></a
    >${o}
  </div>`
    }
    var Di = Object.freeze({
      __proto__: null,
      name: 'core/examples',
      run: async function () {
        const e = document.querySelectorAll(
          'pre.example, pre.illegal-example, aside.example'
        )
        if (!e.length) return
        const t = await Ii
        document.head.insertBefore(
          nn`<style>
      ${t}
    </style>`,
          document.querySelector('link')
        )
        let n = 0
        e.forEach((e) => {
          const t = e.classList.contains('illegal-example'),
            r = { number: n, illegal: t },
            { title: s } = e
          if ('aside' === e.localName) {
            ++n
            const t = Ni(e, n, r)
            e.prepend(t),
              s ? Cn(e, 'example-' + n, s) : Cn(e, 'example', String(n))
            const { id: i } = e
            ;(t.querySelector('a.self-link').href = '#' + i), o('example', r)
          } else {
            const t = !!e.closest('aside')
            t || ++n,
              (r.content = e.innerHTML),
              e.classList.remove('example', 'illegal-example')
            const i = e.id ? e.id : null
            i && e.removeAttribute('id')
            const a = Ni(e, t ? 0 : n, r),
              c = nn`<div class="example" id="${i}">
        ${a} ${e.cloneNode(!0)}
      </div>`
            s && Cn(c, 'example-' + n, s), Cn(c, 'example', String(n))
            ;(c.querySelector('a.self-link').href = '#' + c.id),
              e.replaceWith(c),
              t || o('example', r)
          }
        })
      },
    })
    const ji = (async function () {
      try {
        return (
          await Promise.resolve().then(function () {
            return Bl
          })
        ).default
      } catch {
        return qn('issues-notes.css')
      }
    })()
    const Oi = wn({
      en: {
        editors_note: "Editor's note",
        feature_at_risk: '(Feature at Risk) Issue',
        issue: 'Issue',
        issue_summary: 'Issue Summary',
        no_issues_in_spec: 'There are no issues listed in this specification.',
        note: 'Note',
        warning: 'Warning',
      },
      ja: {
        note: '注',
        editors_note: '編者注',
        feature_at_risk: '(変更の可能性のある機能) Issue',
        issue: 'Issue',
        issue_summary: 'Issue の要約',
        no_issues_in_spec: 'この仕様には未解決の issues は含まれていません．',
        warning: '警告',
      },
      nl: {
        editors_note: 'Redactionele noot',
        issue_summary: 'Lijst met issues',
        no_issues_in_spec:
          'Er zijn geen problemen vermeld in deze specificatie.',
        note: 'Noot',
        warning: 'Waarschuwing',
      },
      es: {
        editors_note: 'Nota de editor',
        issue: 'Cuestión',
        issue_summary: 'Resumen de la cuestión',
        note: 'Nota',
        no_issues_in_spec:
          'No hay problemas enumerados en esta especificación.',
        warning: 'Aviso',
      },
      de: {
        editors_note: 'Redaktioneller Hinweis',
        issue: 'Frage',
        issue_summary: 'Offene Fragen',
        no_issues_in_spec: 'Diese Spezifikation enthält keine offenen Fragen.',
        note: 'Hinweis',
        warning: 'Warnung',
      },
      zh: {
        editors_note: '编者注',
        feature_at_risk: '（有可能变动的特性）Issue',
        issue: 'Issue',
        issue_summary: 'Issue 总结',
        no_issues_in_spec: '本规范中未列出任何 issue。',
        note: '注',
        warning: '警告',
      },
    })
    function zi(e, t, n) {
      const r = (function () {
          if (document.querySelector('.issue[data-number]'))
            return (e) => {
              if (e.dataset.number) return Number(e.dataset.number)
            }
          let e = 0
          return (t) => {
            if (t.classList.contains('issue') && 'span' !== t.localName)
              return ++e
          }
        })(),
        s = document.createElement('ul')
      e.forEach((e) => {
        const { type: i, displayType: a, isFeatureAtRisk: c } = (function (e) {
            const t = e.classList.contains('issue'),
              n = e.classList.contains('warning'),
              r = e.classList.contains('ednote'),
              o = e.classList.contains('atrisk'),
              s = t ? 'issue' : n ? 'warning' : r ? 'ednote' : 'note',
              i = t
                ? o
                  ? Oi.feature_at_risk
                  : Oi.issue
                : n
                ? Oi.warning
                : r
                ? Oi.editors_note
                : Oi.note
            return { type: s, displayType: i, isFeatureAtRisk: o }
          })(e),
          l = 'issue' === i,
          u = 'span' === e.localName,
          { number: d } = e.dataset,
          p = { type: i, inline: u, title: e.title, number: r(e) }
        if (!u) {
          const r = nn`<div class="${c ? i + ' atrisk' : i}" role="${
              'note' === i ? 'note' : null
            }"></div>`,
            u = document.createElement('span'),
            f = nn`<div role="heading" class="${
              i + '-title marker'
            }">${u}</div>`
          Cn(f, 'h', i)
          let h,
            m = a
          if (
            (e.id
              ? ((r.id = e.id), e.removeAttribute('id'))
              : Cn(r, 'issue-container', p.number ? 'number-' + p.number : ''),
            l)
          ) {
            if (
              (void 0 !== p.number && (m += ' ' + p.number),
              e.dataset.hasOwnProperty('number'))
            ) {
              const e = (function (e, t, { isFeatureAtRisk: n = !1 } = {}) {
                if (!n && t.issueBase)
                  return nn`<a href="${t.issueBase + e}" />`
                if (n && t.atRiskBase)
                  return nn`<a href="${t.atRiskBase + e}" />`
              })(d, n, { isFeatureAtRisk: c })
              e && (u.before(e), e.append(u)),
                u.classList.add('issue-number'),
                (h = t.get(d)),
                h || o('warning', 'Failed to fetch issue number ' + d),
                h && !p.title && (p.title = h.title)
            }
            void 0 !== p.number &&
              s.append(
                (function (e, t, n) {
                  const r = `${e} ${t.number}`,
                    o = t.title
                      ? nn`<span style="text-transform: none">: ${t.title}</span>`
                      : ''
                  return nn`<li><a href="${'#' + n}">${r}</a>${o}</li>`
                })(Oi.issue, p, r.id)
              )
          }
          if (((u.textContent = m), p.title)) {
            e.removeAttribute('title')
            const { repoURL: t = '' } = n.github || {},
              o = h ? h.labels : []
            h && 'CLOSED' === h.state && r.classList.add('closed'),
              f.append(
                (function (e, t, n) {
                  const r = e.map((e) =>
                      (function (e, t) {
                        const { color: n, name: r } = e,
                          o = new URL('./issues/', t)
                        o.searchParams.set(
                          'q',
                          `is:issue is:open label:"${e.name}"`
                        )
                        const s =
                          ((i = n),
                          parseInt(i, 16) > 8388607.5 ? '#000' : '#fff')
                        var i
                        return nn`<a
    class="respec-gh-label"
    style="${`background-color: #${n}; color: ${s}`}"
    href="${o.href}"
    >${r}</a
  >`
                      })(e, n)
                    ),
                    o = e.map((e) => e.name),
                    s = gn(o)
                  r.length && r.unshift(document.createTextNode(' '))
                  if (o.length) {
                    return nn`<span class="issue-label" aria-label="${`This issue is labelled as ${s}.`}"
      >: ${t}${r}</span
    >`
                  }
                  return nn`<span class="issue-label">: ${t}${r}</span>`
                })(o, p.title, t)
              )
          }
          let g = e
          e.replaceWith(r),
            g.classList.remove(i),
            g.removeAttribute('data-number'),
            h &&
              !g.innerHTML.trim() &&
              (g = document.createRange().createContextualFragment(h.bodyHTML)),
            r.append(f, g)
          const b = Ln(f, 'section').length + 2
          f.setAttribute('aria-level', b)
        }
        o(p.type, p)
      }),
        (function (e) {
          const t = document.getElementById('issue-summary')
          if (!t) return
          const n = t.querySelector('h2, h3, h4, h5, h6')
          e.hasChildNodes()
            ? t.append(e)
            : t.append(nn`<p>${Oi.no_issues_in_spec}</p>`),
            (!n || (n && n !== t.firstElementChild)) &&
              t.insertAdjacentHTML('afterbegin', `<h2>${Oi.issue_summary}</h2>`)
        })(s)
    }
    var Mi = Object.freeze({
      __proto__: null,
      name: 'core/issues-notes',
      run: async function (e) {
        const t = document.querySelectorAll('.issue, .note, .warning, .ednote')
        if (!t.length) return
        const n = await (async function (e) {
            if (!e || !e.apiBase) return new Map()
            const t = [...document.querySelectorAll('.issue[data-number]')]
              .map((e) => Number.parseInt(e.dataset.number, 10))
              .filter((e) => e)
            if (!t.length) return new Map()
            const n = new URL('issues', `${e.apiBase}/${e.fullName}/`)
            n.searchParams.set('issues', t.join(','))
            const r = await fetch(n.href)
            if (!r.ok)
              return (
                o(
                  'error',
                  `Error fetching issues from GitHub. (HTTP Status ${r.status}).`
                ),
                new Map()
              )
            const s = await r.json()
            return new Map(Object.entries(s))
          })(e.github),
          r = await ji,
          { head: s } = document
        s.insertBefore(
          nn`<style>
      ${r}
    </style>`,
          s.querySelector('link')
        ),
          zi(t, n, e),
          document.querySelectorAll('.ednote').forEach((e) => {
            e.classList.remove('ednote'), e.classList.add('note')
          })
      },
    })
    const Wi = {
        en: { best_practice: 'Best Practice ' },
        ja: { best_practice: '最良実施例 ' },
        de: { best_practice: 'Musterbeispiel ' },
        zh: { best_practice: '最佳实践 ' },
      },
      Ui = wn(Wi),
      Fi = g in Wi ? g : 'en'
    var qi = Object.freeze({
      __proto__: null,
      name: 'core/best-practices',
      run: function () {
        const e = document.querySelectorAll('.practicelab'),
          t = document.getElementById('bp-summary'),
          n = t ? document.createElement('ul') : null
        ;[...e].forEach((e, t) => {
          const r = Cn(e, 'bp'),
            o = nn`<a class="marker self-link" href="${'#' + r}"
      ><bdi lang="${Fi}">${Ui.best_practice}${t + 1}</bdi></a
    >`
          if (n) {
            const t = nn`<li>${o}: ${Nn(e)}</li>`
            n.appendChild(t)
          }
          const s = e.closest('div')
          if (!s) return void e.classList.add('advisement')
          s.classList.add('advisement')
          const i = nn`${o.cloneNode(!0)}: ${e}`
          s.prepend(...i.childNodes)
        }),
          e.length
            ? t &&
              (t.appendChild(nn`<h2>Best Practices Summary</h2>`),
              t.appendChild(n))
            : t &&
              (o(
                'warn',
                'Using best practices summary (#bp-summary) but no best practices found.'
              ),
              t.remove())
      },
    })
    const Bi = wn({
      en: { list_of_figures: 'List of Figures', fig: 'Figure ' },
      ja: { fig: '図 ', list_of_figures: '図のリスト' },
      ko: { fig: '그림 ', list_of_figures: '그림 목록' },
      nl: { fig: 'Figuur ', list_of_figures: 'Lijst met figuren' },
      es: { fig: 'Figura ', list_of_figures: 'Lista de Figuras' },
      zh: { fig: '图 ', list_of_figures: '规范中包含的图' },
      de: { fig: 'Abbildung', list_of_figures: 'Abbildungsverzeichnis' },
    })
    var Hi = Object.freeze({
      __proto__: null,
      name: 'core/figures',
      run: function () {
        document
          .querySelectorAll(
            ':not(picture)>img:not([width]):not([height]):not([srcset])'
          )
          .forEach((e) => {
            0 !== e.naturalHeight &&
              0 !== e.naturalWidth &&
              ((e.height = e.naturalHeight), (e.width = e.naturalWidth))
          })
        const e = (function () {
            const e = []
            return (
              document.querySelectorAll('figure').forEach((t, n) => {
                const r = t.querySelector('figcaption')
                r
                  ? (!(function (e, t, n) {
                      const r = t.textContent
                      Cn(e, 'fig', r),
                        Tn(t, nn`<span class="fig-title"></span>`),
                        t.prepend(
                          Bi.fig,
                          nn`<bdi class="figno">${n + 1}</bdi>`,
                          ' '
                        )
                    })(t, r, n),
                    e.push(
                      (function (e, t) {
                        const n = t.cloneNode(!0)
                        return (
                          n.querySelectorAll('a').forEach((e) => {
                            En(e, 'span').removeAttribute('href')
                          }),
                          nn`<li class="tofline">
    <a class="tocxref" href="${'#' + e}">${n.childNodes}</a>
  </li>`
                        )
                      })(t.id, r)
                    ))
                  : pn(t, 'Found a `<figure>` without a `<figcaption>`')
              }),
              e
            )
          })(),
          t = document.getElementById('tof')
        e.length &&
          t &&
          (!(function (e) {
            if (
              e.classList.contains('appendix') ||
              e.classList.contains('introductory') ||
              e.closest('section')
            )
              return
            const t = (function (e) {
              const t = []
              for (const n of (function* (e) {
                let t = e
                for (; t.previousElementSibling; )
                  (t = t.previousElementSibling), yield t
              })(e))
                'section' === n.localName && t.push(n)
              return t
            })(e)
            t.every((e) => e.classList.contains('introductory'))
              ? e.classList.add('introductory')
              : t.some((e) => e.classList.contains('appendix')) &&
                e.classList.add('appendix')
          })(t),
          t.append(
            nn`<h2>${Bi.list_of_figures}</h2>`,
            nn`<ul class="tof">
        ${e}
      </ul>`
          ))
      },
    })
    const Gi = new Set([
      'callback interface',
      'callback',
      'dictionary',
      'enum',
      'interface mixin',
      'interface',
      'typedef',
    ])
    function Vi(e, t, { parent: n = '' } = {}) {
      switch (e.type) {
        case 'constructor':
        case 'operation':
          return (function (e, t, n) {
            if (n.includes('!overload')) return Zi(e, t, n)
            return Zi(e, t, n + '()', n)
          })(e, n, t)
        default:
          return Zi(e, n, t)
      }
    }
    function Zi(e, t, ...n) {
      const { type: r } = e
      for (const e of n) {
        let n = 'enum-value' === r && '' === e ? 'the-empty-string' : e,
          o = Ki(n, t, e, r)
        if (0 === o.length && '' !== t) {
          n = `${t}.${n}`
          const e = Ei.get(n)
          e && 1 === e.size && ((o = [...e]), Ai(o[0], [n]))
        } else n = e
        if (o.length > 1) {
          fn(
            o,
            `WebIDL identifier \`${e}\` ${
              t ? `for \`${t}\`` : ''
            } is defined multiple times`,
            'Duplicate definition.'
          )
        }
        if (o.length) return o[0]
      }
    }
    function Yi(e, t, n, r) {
      if (!e.id) {
        const t = n.toLowerCase(),
          o = t ? t + '-' : ''
        let s = r.toLowerCase().replace(/[()]/g, '').replace(/\s/g, '-')
        '' === s && (s = 'the-empty-string'), (e.id = `dom-${o}${s}`)
      }
      switch (
        ((e.dataset.idl = t.type),
        (e.dataset.title = e.textContent),
        (e.dataset.dfnFor = n),
        t.type)
      ) {
        case 'operation':
        case 'attribute':
        case 'field':
          e.dataset.type = Ji(t)
      }
      switch (
        (e.querySelector('code') ||
          e.closest('code') ||
          !e.children ||
          Tn(e, e.ownerDocument.createElement('code')),
        t.type)
      ) {
        case 'attribute':
        case 'constructor':
        case 'operation':
          !(function (e, t) {
            const { local: n, exportable: r } = t,
              o = e.dataset.lt ? new Set(e.dataset.lt.split('|')) : new Set()
            for (const e of r) o.add(e)
            n.filter((e) => o.has(e)).forEach((e) => o.delete(e)),
              (e.dataset.lt = [...o].join('|')),
              (e.dataset.localLt = n.join('|')),
              Ai(e, [...n, ...r])
          })(
            e,
            (function (e, t, n) {
              const { type: r } = e,
                o = `${t}.${n}`
              switch (r) {
                case 'constructor':
                case 'operation':
                  return {
                    local: [o, o + '()', n],
                    exportable: [
                      n + '()',
                      ...(function (e, t) {
                        const n = []
                        if (0 === t.length) return n
                        const r = [],
                          o = []
                        for (const { name: e, optional: n, variadic: s } of t)
                          n || s ? o.push(e) : r.push(e)
                        const s = r.join(', '),
                          i = `${e}(${s})`
                        n.push(i)
                        const a = o.map((t, n) => {
                          const s = [...r, ...o.slice(0, n + 1)].join(', ')
                          return `${e}(${s})`
                        })
                        return n.push(...a), n
                      })(n, e.arguments),
                    ],
                  }
                case 'attribute':
                  return { local: [o], exportable: [n] }
              }
            })(t, n, r)
          )
      }
      return e
    }
    function Ki(e, t, n, r) {
      const o = Ei.get(e)
      if (!o || 0 === o.size) return []
      const s = [...o],
        i = s.filter((e) => {
          if ('dfn' === e.dataset.dfnType) return !1
          const n = e.closest('[data-dfn-for]')
          return n && n.dataset.dfnFor === t
        })
      if (0 === i.length && '' === t && 1 === s.length)
        return s[0].textContent === n ? s : []
      if (Gi.has(r) && s.length) {
        const e = s.find((e) => e.textContent.trim() === n)
        if (e) return [e]
      }
      return i
    }
    function Ji(e) {
      const { idlType: t, generic: n, union: r } = e
      return 'string' == typeof t ? t : n || (r ? t.map(Ji).join('|') : Ji(t))
    }
    const Xi = (function () {
      const e = document.createElement('button')
      return (
        (e.innerHTML =
          '<svg height="16" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M2 13h4v1H2v-1zm5-6H2v1h5V7zm2 3V8l-3 3 3 3v-2h5v-2H9zM4.5 9H2v1h2.5V9zM2 12h2.5v-1H2v1zm9 1h1v2c-.02.28-.11.52-.3.7-.19.18-.42.28-.7.3H1c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h3c0-1.11.89-2 2-2 1.11 0 2 .89 2 2h3c.55 0 1 .45 1 1v5h-1V6H1v9h10v-2zM2 5h8c0-.55-.45-1-1-1H8c-.55 0-1-.45-1-1s-.45-1-1-1-1 .45-1 1-.45 1-1 1H3c-.55 0-1 .45-1 1z"/></svg>'),
        (e.title = 'Copy IDL to clipboard'),
        e.classList.add('respec-button-copy-paste', 'removeOnSave'),
        e
      )
    })()
    function Qi(e) {
      const t = e.closest('pre.idl').cloneNode(!0)
      t.querySelector('.idlHeader').remove()
      const { textContent: n } = t,
        r = Xi.cloneNode(!0)
      r.addEventListener('click', () => {
        navigator.clipboard.writeText(n)
      }),
        e.append(r)
    }
    var ea = Object.freeze({
      __proto__: null,
      name: 'core/webidl-clipboard',
      addCopyIDLButton: Qi,
    })
    const ta = {},
      na = {},
      ra = {
        wrap: (e) =>
          e
            .flat()
            .filter((e) => '' !== e)
            .map((e) => ('string' == typeof e ? new Text(e) : e)),
        trivia: (e) =>
          e.trim() ? nn`<span class="idlSectionComment">${e}</span>` : e,
        generic: (e) =>
          /^[A-Z]/.test(e)
            ? nn`<a data-xref-type="interface" data-cite="WebIDL">${e}</a>`
            : nn`<a data-xref-type="dfn" data-cite="WebIDL">${e}</a>`,
        reference(e, t, n) {
          if ('extended-attribute' === n.type && 'Exposed' !== n.name) return e
          let r,
            o = '_IDL_',
            s = null
          switch (t) {
            case 'Window':
              ;(o = 'interface'), (s = 'HTML')
              break
            case 'object':
              ;(o = 'interface'), (s = 'WebIDL')
              break
            default:
              t.includes('Worker') &&
                'extended-attribute' === n.type &&
                ((r = t + 'GlobalScope'),
                (o = 'interface'),
                (s = ['Worker', 'DedicatedWorker', 'SharedWorker'].includes(t)
                  ? 'HTML'
                  : null))
          }
          return nn`<a data-xref-type="${o}" data-cite="${s}" data-lt="${r}"
      >${e}</a
    >`
        },
        name(e, { data: t, parent: n }) {
          if (t.idlType && 'argument-type' === t.idlType.type)
            return nn`<span class="idlParamName">${e}</span>`
          const r = oa(e, t, n)
          if ('enum-value' !== t.type) {
            const e = n ? 'idlName' : 'idlID'
            r.classList.add(e)
          }
          return r
        },
        nameless(e, { data: t, parent: n }) {
          switch (t.type) {
            case 'constructor':
              return oa(e, t, n)
            default:
              return e
          }
        },
        type: (e) => nn`<span class="idlType">${e}</span>`,
        inheritance: (e) => nn`<span class="idlSuperclass">${e}</span>`,
        definition(e, { data: t, parent: n }) {
          const r = (function (e) {
            switch (e.type) {
              case 'callback interface':
                return 'idlInterface'
              case 'operation':
                return 'idlMethod'
              case 'field':
                return 'idlMember'
              case 'enum-value':
                return 'idlEnumItem'
              case 'callback function':
                return 'idlCallback'
            }
            return `idl${e.type[0].toUpperCase()}${e.type.slice(1)}`
          })(t)
          switch (t.type) {
            case 'includes':
            case 'enum-value':
              return nn`<span class="${r}">${e}</span>`
          }
          const o = n ? n.name : '',
            { name: s, idlId: i } = ia(t, o)
          return nn`<span
      class="${r}"
      id="${i}"
      data-idl
      data-title="${s}"
      >${e}</span
    >`
        },
        extendedAttribute: (e) => nn`<span class="extAttr">${e}</span>`,
        extendedAttributeReference: (e) =>
          nn`<a data-xref-type="extended-attribute">${e}</a>`,
      }
    function oa(e, t, n) {
      const r = n ? n.name : '',
        { name: o } = ia(t, r),
        s = Vi(t, o, { parent: r }),
        i = (function (e) {
          switch (e) {
            case 'operation':
              return 'method'
            case 'field':
              return 'dict-member'
            case 'callback interface':
            case 'interface mixin':
              return 'interface'
            default:
              return e
          }
        })(t.type)
      if (s) {
        t.partial || ((s.dataset.export = ''), (s.dataset.dfnType = i)),
          Yi(s, t, r, o)
        const n = '#' + s.id
        return nn`<a
      data-link-for="${r}"
      data-link-type="${i}"
      href="${n}"
      class="internalDFN"
      ><code>${e}</code></a
    >`
      }
      if (
        'operation' === t.type &&
        'toJSON' === t.name &&
        t.extAttrs.some(({ name: e }) => 'Default' === e)
      )
        return nn`<a data-link-type="dfn" data-lt="default toJSON steps"
      >${e}</a
    >`
      if (!t.partial) {
        const n = nn`<dfn data-export data-dfn-type="${i}"
      >${e}</dfn
    >`
        return Ai(n, [o]), Yi(n, t, r, o), n
      }
      const a = nn`<a
    data-idl="${t.partial ? 'partial' : null}"
    data-link-type="${i}"
    data-title="${t.name}"
    data-xref-type="${i}"
    >${e}</a
  >`
      if (o && 'typedef' !== t.type && !(t.partial && !s)) {
        pn(
          a,
          `Missing \`<dfn>\` for${r ? ` \`${r}\`'s` : ''} \`${
            'operation' === t.type ? o + '()' : o
          }\` ${
            t.type
          }. [More info](https://github.com/w3c/respec/wiki/WebIDL-thing-is-not-defined).`,
          ''
        )
      }
      return a
    }
    const sa = new WeakMap()
    function ia(e, t = '') {
      if (sa.has(e)) return sa.get(e)
      const n = (function (e, t) {
        let n = (function (e) {
            switch (e.type) {
              case 'enum-value':
                return e.value
              case 'operation':
                return e.name
              default:
                return e.name || e.type
            }
          })(e),
          r = (function (e, t) {
            if (!t) return 'idl-def-' + e.toLowerCase()
            return `idl-def-${t.toLowerCase()}-${e.toLowerCase()}`
          })(n, t)
        switch (e.type) {
          case 'callback interface':
          case 'dictionary':
          case 'interface':
          case 'interface mixin':
            r += (function (e) {
              if (!e.partial) return ''
              na[e.name] || (na[e.name] = 0)
              return (na[e.name] += 1), '-partial-' + na[e.name]
            })(e)
            break
          case 'constructor':
          case 'operation': {
            const o = (function (e, t) {
              const n = `${t}.${e}`,
                r = n + '()'
              let o
              ta[r] || (ta[r] = 0)
              ta[n] ? (o = '!overload-' + ta[n]) : (ta[n] = 0)
              return (ta[r] += 1), (ta[n] += 1), o || ''
            })(n, t)
            o
              ? ((n += o), (r += o))
              : e.arguments.length &&
                (r += e.arguments
                  .map((e) => '-' + e.name.toLowerCase())
                  .join(''))
            break
          }
        }
        return { name: n, idlId: r }
      })(e, t)
      return sa.set(e, n), n
    }
    function aa(e, t) {
      let n
      try {
        n = tn.parse(e.textContent, { sourceName: String(t) })
      } catch (t) {
        return (
          fn(e, `Failed to parse WebIDL: ${t.bareMessage}.`, t.bareMessage, {
            details: `<pre>${t.context}</pre>`,
          }),
          []
        )
      }
      e.classList.add('def', 'idl')
      const r = tn.write(n, { templates: ra })
      nn.bind(e)`${r}`,
        e.querySelectorAll('[data-idl]').forEach((e) => {
          if (e.dataset.dfnFor) return
          const t = e.dataset.title,
            n = e.parentElement.closest('[data-idl][data-title]')
          n && (e.dataset.dfnFor = n.dataset.title),
            'dfn' === e.localName && Ai(e, [t])
        })
      const o = e.closest('[data-cite], body'),
        { dataset: s } = o
      if ((s.cite || (s.cite = 'WebIDL'), !/\bwebidl\b/i.test(s.cite))) {
        const e = s.cite.trim().split(/\s+/)
        s.cite = ['WebIDL', ...e].join(' ')
      }
      return ca(e), n
    }
    function ca(e) {
      Sn(e, 'webidl')
      const t = nn`<span class="idlHeader"
    ><a class="self-link" href="${'#' + e.id}">WebIDL</a></span
  >`
      e.prepend(t), Qi(t)
    }
    const la = (async function () {
      try {
        return (
          await Promise.resolve().then(function () {
            return Hl
          })
        ).default
      } catch {
        return qn('webidl.css')
      }
    })()
    var ua = Object.freeze({
      __proto__: null,
      name: 'core/webidl',
      addIDLHeader: ca,
      run: async function () {
        const e = document.querySelectorAll('pre.idl, pre.webidl')
        if (!e.length) return
        if (!document.querySelector('.idl:not(pre), .webidl:not(pre)')) {
          const e = document.querySelector('head link')
          if (e) {
            const t = document.createElement('style')
            ;(t.textContent = await la), e.before(t)
          }
        }
        const t = [...e].map(aa),
          n = tn.validate(t)
        for (const r of n) {
          let n = `<pre>${r.context}</pre>`
          if (r.autofix) {
            r.autofix()
            const e = tn.write(t[r.sourceName])
            n += `Try fixing as:\n      <pre>${e
              .replace(/&/g, '&amp;')
              .replace(/>/g, '&gt;')
              .replace(/"/g, '&quot;')
              .replace(/</g, '&lt;')}</pre>`
          }
          fn(
            e[r.sourceName],
            'WebIDL validation error: ' + r.bareMessage,
            r.bareMessage,
            { details: n }
          )
        }
        document.normalize()
      },
    })
    const da = '__SPEC__'
    async function pa(e) {
      const { key: t, frag: n, path: r } = e
      let o = '',
        s = ''
      if (t === da) o = document.location.href
      else {
        const e = await Gs(t)
        if (!e) return null
        ;(o = e.href), (s = e.title)
      }
      if (r) {
        const e = r.startsWith('/') ? '.' + r : r
        o = new URL(e, o).href
      }
      return n && (o = new URL(n, o).href), { href: o, title: s }
    }
    function fa(e, t, n) {
      const { href: r, title: o } = t,
        s = !n.path && !n.frag
      if ('a' !== e.localName) {
        if ('dfn' === e.localName) {
          const t = document.createElement('a')
          if (
            ((t.href = r),
            e.textContent ? Tn(e, t) : ((t.textContent = o), e.append(t)),
            s)
          ) {
            const n = document.createElement('cite')
            n.append(t), e.append(n)
          }
          'export' in e.dataset &&
            (fn(
              e,
              'Exporting an linked external definition is not allowed. Please remove the `data-export` attribute',
              'Please remove the `data-export` attribute.'
            ),
            delete e.dataset.export),
            (e.dataset.noExport = '')
        }
      } else {
        const t = e
        if (
          ('' === t.textContent &&
            'the-empty-string' !== t.dataset.lt &&
            (t.textContent = o),
          (t.href = r),
          s)
        ) {
          const e = document.createElement('cite')
          t.replaceWith(e), e.append(t)
        }
      }
    }
    function ha(e) {
      return (t) => {
        const n = t.search(e)
        return -1 !== n ? t.substring(n) : ''
      }
    }
    const ma = ha('#'),
      ga = ha('/')
    function ba(e) {
      const { dataset: t } = e,
        { cite: n, citeFrag: r, citePath: o } = t
      if (n.startsWith('#') && !r) {
        const r = e.parentElement.closest('[data-cite]:not([data-cite^="#"])'),
          { key: o, isNormative: s } = r ? ba(r) : { key: da, isNormative: !1 }
        return (
          (t.cite = s ? o : '?' + o), (t.citeFrag = n.replace('#', '')), ba(e)
        )
      }
      const s = r ? '#' + r : ma(n),
        i = o || ga(n).split('#')[0],
        { type: a } = An(n, e),
        c = 'normative' === a,
        l = /^[?|!]/.test(n)
      return {
        key: n.split(/[/|#]/)[0].substring(Number(l)),
        isNormative: c,
        frag: s,
        path: i,
      }
    }
    function wa(e) {
      const t = ['data-cite', 'data-cite-frag', 'data-cite-path']
      e.querySelectorAll('a[data-cite], dfn[data-cite]').forEach((e) =>
        t.forEach((t) => e.removeAttribute(t))
      )
    }
    var ya = Object.freeze({
      __proto__: null,
      name: 'core/data-cite',
      THIS_SPEC: da,
      toCiteDetails: ba,
      run: async function () {
        const e = document.querySelectorAll(
          "dfn[data-cite]:not([data-cite='']), a[data-cite]:not([data-cite=''])"
        )
        await (async function (e) {
          const t = e
              .map(ba)
              .map(async (e) => ({ entry: e, result: await Gs(e.key) })),
            n = (await Promise.all(t))
              .filter(({ result: e }) => null === e)
              .map(({ entry: { key: e } }) => e),
            r = await Hs(n)
          r && Object.assign(Ws, r)
        })([...e])
        for (const t of e) {
          const e = t.dataset.cite,
            n = ba(t),
            r = await pa(n)
          r ? fa(t, r, n) : pn(t, `Couldn't find a match for "${e}"`)
        }
        s('beforesave', wa)
      },
    })
    const va = [],
      ka = wn({
        en: {
          duplicateMsg: (e) => `Duplicate definition(s) of '${e}'`,
          duplicateTitle: 'This is defined more than once in the document.',
        },
        ja: {
          duplicateMsg: (e) => `'${e}' の重複定義`,
          duplicateTitle: 'この文書内で複数回定義されています．',
        },
        de: {
          duplicateMsg: (e) => `Mehrfache Definition von '${e}'`,
          duplicateTitle:
            'Das Dokument enthält mehrere Definitionen dieses Eintrags.',
        },
        zh: {
          duplicateMsg: (e) => `'${e}' 的重复定义`,
          duplicateTitle: '在文档中有重复的定义。',
        },
      })
    function xa(e) {
      const t = new Map(),
        n = []
      for (const r of Ei.get(e)) {
        const { dfnFor: o = '', dfnType: s = 'dfn' } = r.dataset
        if (t.has(o) && t.get(o).has(s)) {
          const e = t.get(o).get(s),
            i = 'dfn' === e.localName,
            a = 'dfn' === r.localName,
            c = s === (e.dataset.dfnType || 'dfn'),
            l = o === (e.dataset.dfnFor || '')
          if (i && a && c && l) {
            n.push(r)
            continue
          }
        }
        const i = 'idl' in r.dataset || 'dfn' !== s ? 'idl' : 'dfn'
        t.has(o) || t.set(o, new Map()), t.get(o).set(i, r), Cn(r, 'dfn', e)
      }
      return { result: t, duplicates: n }
    }
    function $a(e, t) {
      const n = (function (e) {
        const t = e.closest('[data-link-for]'),
          n = t ? t.dataset.linkFor : ''
        return Rn(e).reduce((e, r) => {
          const o = r.split('.')
          return (
            2 === o.length && e.push({ for: o[0], title: o[1] }),
            e.push({ for: n, title: r }),
            t || e.push({ for: r, title: r }),
            '' !== n && e.push({ for: '', title: r }),
            e
          )
        }, [])
      })(e).find((e) => t.has(e.title) && t.get(e.title).has(e.for))
      if (!n) return
      const r = t.get(n.title).get(n.for),
        { linkType: o } = e.dataset
      if (o) {
        const e = 'dfn' === o ? 'dfn' : 'idl'
        return r.get(e) || r.get('dfn')
      }
      {
        const e = n.for ? 'idl' : 'dfn'
        return r.get(e) || r.get('idl')
      }
    }
    function _a(e, t, n) {
      let r = !1
      const { linkFor: o } = e.dataset,
        { dfnFor: s } = t.dataset
      if (t.dataset.cite) e.dataset.cite = t.dataset.cite
      else if (o && !n.get(o) && o !== s) r = !0
      else if (t.classList.contains('externalDFN')) {
        const n = t.dataset.lt ? t.dataset.lt.split('|') : []
        ;(e.dataset.lt = n[0] || t.textContent), (r = !0)
      } else
        'partial' !== e.dataset.idl
          ? ((e.href = '#' + t.id), e.classList.add('internalDFN'))
          : (r = !0)
      return (
        e.hasAttribute('data-link-type') ||
          (e.dataset.linkType = 'idl' in t.dataset ? 'idl' : 'dfn'),
        (function (e) {
          if (e.closest('code,pre')) return !0
          if (1 !== e.childNodes.length) return !1
          const [t] = e.childNodes
          return 'code' === t.localName
        })(t) &&
          (function (e, t) {
            const n = e.textContent.trim(),
              r = t.dataset.hasOwnProperty('idl'),
              o = Sa(e) || Sa(t, n)
            ;(r && !o) || Tn(e, document.createElement('code'))
          })(e, t),
        !r
      )
    }
    function Sa(e, t = '') {
      switch (e.localName) {
        case 'a':
          if (e.querySelector('code')) return !0
          break
        default: {
          const { dataset: n } = e
          if (e.textContent.trim() === t) return !0
          if (n.title === t) return !0
          if (n.lt || n.localLt) {
            const e = []
            return (
              n.lt && e.push(...n.lt.split('|')),
              n.localLt && e.push(...n.localLt.split('|')),
              e.includes(t)
            )
          }
        }
      }
      return !1
    }
    function Ca(e) {
      e.forEach((e) => {
        pn(
          e,
          `Found linkless \`<a>\` element with text "${e.textContent}" but no matching \`<dfn>\``,
          'Linking error: not matching `<dfn>`'
        )
      })
    }
    var Ra = Object.freeze({
      __proto__: null,
      name: 'core/link-to-dfn',
      possibleExternalLinks: va,
      run: async function (e) {
        const t = (function () {
            const e = new On()
            for (const t of Ei.keys()) {
              const { result: n, duplicates: r } = xa(t)
              e.set(t, n),
                r.length > 0 && fn(r, ka.duplicateMsg(t), ka.duplicateTitle)
            }
            return e
          })(),
          n = [],
          r = document.querySelectorAll(
            "a[data-cite=''], a:not([href]):not([data-cite]):not(.logo):not(.externalDFN)"
          )
        for (const e of r) {
          const r = $a(e, t)
          if (r) {
            _a(e, r, t) || va.push(e)
          } else '' === e.dataset.cite ? n.push(e) : va.push(e)
        }
        Ca(n),
          (function (e) {
            const t = new RegExp(
                String.raw`\b${(e.shortName || '').toLowerCase()}([^-])\b`,
                'i'
              ),
              n = document.querySelectorAll(
                "dfn[data-cite]:not([data-cite='']), a[data-cite]:not([data-cite=''])"
              )
            for (const r of n) {
              r.dataset.cite = r.dataset.cite.replace(t, '__SPEC__$1')
              const { key: n, isNormative: o } = ba(r)
              n !== da &&
                (o || e.normativeReferences.has(n)
                  ? (e.normativeReferences.add(n),
                    e.informativeReferences.delete(n))
                  : e.informativeReferences.add(n))
            }
          })(e),
          e.xref || Ca(va)
      },
    })
    const Ea = 3e5
    async function Aa() {
      const e = await en.openDB('xref', 1, {
        upgrade(e) {
          e.createObjectStore('xrefs')
        },
      })
      return new mn(e, 'xrefs')
    }
    async function Ta(e) {
      try {
        const t = await Aa()
        return await (async function (e, t) {
          if (
            await (async function (e) {
              const t = await e.get('__LAST_VERSION_CHECK__'),
                n = Date.now()
              if (!t) return await e.set('__LAST_VERSION_CHECK__', n), !1
              if (n - t < Ea) return !1
              const r = new URL('meta/version', Pa).href,
                o = await fetch(r)
              if (!o.ok) return !1
              const s = await o.text()
              return (
                await e.set('__LAST_VERSION_CHECK__', n), parseInt(s, 10) > t
              )
            })(t)
          )
            return await t.clear(), new Map()
          return await t.getMany(e.map((e) => e.id))
        })(e, t)
      } catch (e) {
        return console.error(e), new Map()
      }
    }
    const La = {
        'web-platform': ['HTML', 'INFRA', 'URL', 'WEBIDL', 'DOM', 'FETCH'],
      },
      Pa = 'https://respec.org/xref/'
    if (
      !document.querySelector(
        "link[rel='preconnect'][href='https://respec.org']"
      )
    ) {
      const e = un({ hint: 'preconnect', href: 'https://respec.org' })
      document.head.appendChild(e)
    }
    function Ia(e) {
      const t = 'xrefType' in e.dataset
      let n = Na(e)
      t || (n = n.toLowerCase())
      const r = (function (e) {
          const t = []
          let n = e.closest('[data-cite]')
          for (; n; ) {
            const r = n.dataset.cite
              .toLowerCase()
              .replace(/[!?]/g, '')
              .split(/\s+/)
              .filter((e) => e)
            if ((r.length && t.push(r), n === e)) break
            n = n.parentElement.closest('[data-cite]')
          }
          if (n !== e) {
            const n = e.closest('section'),
              r = [...(n ? n.querySelectorAll('a.bibref') : [])].map((e) =>
                e.textContent.toLowerCase()
              )
            r.length && t.push(r)
          }
          return (function (e) {
            const t = []
            for (const n of e) {
              const e = t[t.length - 1] || [],
                r = [...new Set(n)].filter((t) => !e.includes(t))
              t.push(r.sort())
            }
            return t
          })(t)
        })(e),
        o = (function (e, t) {
          if (t)
            return e.dataset.xrefType
              ? e.dataset.xrefType.split('|')
              : ['_IDL_']
          return ['_CONCEPT_']
        })(e, t),
        s = (function (e, t) {
          if (e.dataset.xrefFor) return bn(e.dataset.xrefFor)
          if (t) {
            const t = e.closest('[data-xref-for]')
            if (t) return bn(t.dataset.xrefFor)
          }
          return null
        })(e, t)
      return {
        term: n,
        types: o,
        ...(r.length && { specs: r }),
        ...('string' == typeof s && { for: s }),
      }
    }
    function Na(e) {
      const { lt: t } = e.dataset
      let n = t ? t.split('|', 1)[0] : e.textContent
      return (n = bn(n)), 'the-empty-string' === n ? '' : n
    }
    function Da(e, t, n, r) {
      const { term: o, specs: s = [] } = t,
        { uri: i, shortname: a, spec: c, normative: l, type: u, for: d } = n,
        p = s.flat().includes(c) ? c : a,
        f = new URL(i, 'https://example.org'),
        { pathname: h } = f,
        m = { cite: p, citePath: h, citeFrag: f.hash.slice(1), type: u }
      d && (m.linkFor = d[0]),
        Object.assign(e.dataset, m),
        (function (e, t, n, r, o) {
          if (
            !(function (e) {
              const t = e.closest('.normative'),
                n = e.closest(ln)
              return !n || e === t || (t && n && n.contains(t))
            })(e)
          )
            return void (
              o.normativeReferences.has(t) || o.informativeReferences.add(t)
            )
          if (n) {
            const e = o.informativeReferences.has(t)
              ? o.informativeReferences.getCanonicalKey(t)
              : t
            return (
              o.normativeReferences.add(e),
              void o.informativeReferences.delete(e)
            )
          }
          pn(
            e,
            `Adding an informative reference to "${r}" from "${t}" in a normative section`,
            'Error: Informative reference in normative section'
          )
        })(e, p, l, o, r)
    }
    function ja(e) {
      const t = JSON.stringify(e, Object.keys(e).sort()),
        n = new TextEncoder().encode(t)
      return crypto.subtle.digest('SHA-1', n).then(Oa)
    }
    function Oa(e) {
      return [...new Uint8Array(e)]
        .map((e) => e.toString(16).padStart(2, '0'))
        .join('')
    }
    function za(e) {
      const t = e.querySelectorAll(
          'a[data-xref-for], a[data-xref-type], a[data-link-for]'
        ),
        n = ['data-xref-for', 'data-xref-type', 'data-link-for']
      t.forEach((e) => {
        n.forEach((t) => e.removeAttribute(t))
      })
    }
    var Ma = Object.freeze({
      __proto__: null,
      name: 'core/xref',
      API_URL: Pa,
      run: async function (e) {
        if (!e.xref) return
        const t = (function (e) {
          const t = { url: Pa, specs: null },
            n = Object.assign({}, t)
          switch (Array.isArray(e) ? 'array' : typeof e) {
            case 'boolean':
              break
            case 'string':
              e.toLowerCase() in La
                ? Object.assign(n, { specs: La[e.toLowerCase()] })
                : r(e)
              break
            case 'array':
              Object.assign(n, { specs: e })
              break
            case 'object':
              if ((Object.assign(n, e), e.profile)) {
                const t = e.profile.toLowerCase()
                if (t in La) {
                  const r = (e.specs || []).concat(La[t])
                  Object.assign(n, { specs: r })
                } else r(e.profile)
              }
              break
            default:
              o(
                'error',
                `Invalid value for \`xref\` configuration option. Received: "${e}".`
              )
          }
          return n
          function r(e) {
            o(
              'error',
              `Invalid profile "${e}" in \`respecConfig.xref\`. Please use one of the supported profiles: ${Object.keys(
                La
              )
                .map((e) => `"${e}"`)
                .join(', ')}.`
            )
          }
        })(e.xref)
        if (t.specs) {
          const e = document.body.dataset.cite
            ? document.body.dataset.cite.split(/\s+/)
            : []
          document.body.dataset.cite = e.concat(t.specs).join(' ')
        }
        const n = va.concat(
          (function () {
            const e = document.querySelectorAll(
                "a[data-cite]:not([data-cite='']):not([data-cite*='#']), dfn[data-cite]:not([data-cite='']):not([data-cite*='#'])"
              ),
              t = document.querySelectorAll('dfn.externalDFN')
            return [...e]
              .filter((e) => {
                if ('' === e.textContent.trim()) return !1
                const t = e.closest('[data-cite]')
                return !t || '' !== t.dataset.cite
              })
              .concat(...t)
          })()
        )
        if (!n.length) return
        const r = []
        for (const e of n) {
          const t = Ia(e),
            n = await ja(t)
          r.push({ ...t, id: n })
        }
        const i = await (async function (e, t) {
          const n = new Set(),
            r = e.filter((e) => !n.has(e.id) && n.add(e.id) && !0),
            o = await Ta(r),
            s = r.filter((e) => !o.get(e.id)),
            i = await (async function (e, t) {
              if (!e.length) return new Map()
              const n = { keys: e },
                r = {
                  method: 'POST',
                  body: JSON.stringify(n),
                  headers: { 'Content-Type': 'application/json' },
                },
                o = await fetch(t, r),
                s = await o.json()
              return new Map(s.result)
            })(s, t)
          i.size &&
            (await (async function (e) {
              try {
                const t = await Aa()
                await t.addMany(e)
              } catch (e) {
                console.error(e)
              }
            })(i))
          return new Map([...o, ...i])
        })(r, t.url)
        !(function (e, t, n, r) {
          const o = { ambiguous: new Map(), notFound: new Map() }
          for (let s = 0, i = e.length; s < i; s++) {
            if (e[s].closest('[data-no-xref]')) continue
            const i = e[s],
              a = t[s],
              { id: c } = a,
              l = n.get(c)
            if (1 === l.length) Da(i, a, l[0], r)
            else {
              const e = o[0 === l.length ? 'notFound' : 'ambiguous']
              e.has(c) || e.set(c, { elems: [], results: l, query: a }),
                e.get(c).elems.push(i)
            }
          }
          !(function ({ ambiguous: e, notFound: t }) {
            const n = (e, t, n = []) => {
                const r = new URL(Pa)
                return (
                  r.searchParams.set('term', e),
                  t.for && r.searchParams.set('for', t.for),
                  r.searchParams.set('types', t.types.join(',')),
                  n.length && r.searchParams.set('specs', n.join(',')),
                  r
                )
              },
              r = (e) =>
                `[Learn more about this error](https://respec.org/docs/#error-term-not-found) or see [how to cite to resolve the error](${e})`
            for (const { query: e, elems: o } of t.values()) {
              const t = e.specs ? [...new Set(e.specs.flat())].sort() : [],
                s = Na(o[0]),
                i = n(s, e)
              fn(
                o,
                `Couldn't match "**${s}**" to anything in the document or in any other document cited in this specification: ${t
                  .map((e) => `\`${e}\``)
                  .join(', ')}. ${r(i)}`,
                'Error: No matching dfn found.'
              )
            }
            for (const { query: t, elems: o, results: s } of e.values()) {
              const e = [...new Set(s.map((e) => e.shortname))].sort(),
                i = e.map((e) => `**${e}**`).join(', '),
                a = Na(o[0])
              fn(
                o,
                `The term "**${a}**" is defined in ${i} in multiple ways, so it's ambiguous. ${r(
                  n(a, t, e)
                )}`,
                'Error: Linking an ambiguous dfn.'
              )
            }
          })(o)
        })(n, r, i, e),
          s('beforesave', za)
      },
      getTermFromElement: Na,
    })
    var Wa = Object.freeze({
      __proto__: null,
      name: 'core/webidl-index',
      run: function () {
        const e = document.querySelector('section#idl-index')
        if (!e) return
        const t = [2, 3, 4, 5, 6].map((e) => `h${e}:first-child`).join(',')
        if (!e.querySelector(t)) {
          const t = document.createElement('h2')
          e.title
            ? ((t.textContent = e.title), e.removeAttribute('title'))
            : (t.textContent = 'IDL Index'),
            e.prepend(t)
        }
        const n = Array.from(
          document.querySelectorAll('pre.def.idl:not(.exclude)')
        ).filter((e) => !e.closest(ln))
        if (0 === n.length) {
          const t = "This specification doesn't declare any Web IDL."
          return void e.append(t)
        }
        const r = document.createElement('pre')
        r.classList.add('idl', 'def'),
          (r.id = 'actual-idl-index'),
          n
            .map((e) => {
              const t = document.createDocumentFragment()
              for (const n of e.children) t.appendChild(n.cloneNode(!0))
              return t
            })
            .forEach((e) => {
              r.lastChild && r.append('\n\n'), r.appendChild(e)
            }),
          r.querySelectorAll('*[id]').forEach((e) => e.removeAttribute('id')),
          r.querySelectorAll('.idlHeader').forEach((e) => e.remove()),
          e.appendChild(r),
          ca(r)
      },
    })
    const Ua = wn({
        en: {
          heading: 'Index',
          headingExternal: 'Terms defined by reference',
          headlingLocal: 'Terms defined by this specification',
          dfnOf: 'definition of',
        },
      }),
      Fa = new Set([
        'attribute',
        'callback',
        'dict-member',
        'dictionary',
        'element-attr',
        'element',
        'enum-value',
        'enum',
        'exception',
        'extended-attribute',
        'interface',
        'method',
        'typedef',
      ])
    function qa(e) {
      const t = e.dataset,
        n = t.dfnType || t.idl || t.linkType || ''
      switch (n) {
        case '':
        case 'dfn':
          return ''
        default:
          return n
      }
    }
    function Ba(e) {
      const t = e.closest("[data-dfn-for]:not([data-dfn-for=''])")
      return t ? t.dataset.dfnFor : ''
    }
    function Ha(e, t, n = '') {
      if (n.startsWith('[[')) {
        return `internal slot for <code>${Ba(e)}</code>`
      }
      switch (t) {
        case 'dict-member':
        case 'method':
        case 'attribute':
        case 'enum-value':
          return `${
            'dict-member' === t ? 'member' : t.replace('-', ' ')
          } for <code>${Ba(e)}</code>`
        case 'interface':
        case 'dictionary':
        case 'enum':
          return t
        case 'constructor':
          return `for <code>${Ba(e)}</code>`
        default:
          return ''
      }
    }
    function Ga() {
      document
        .querySelectorAll('#index-defined-here li[data-id]')
        .forEach((e) =>
          e.append(
            ((e) => {
              const t =
                '§' +
                document
                  .getElementById(e)
                  .closest('section')
                  .querySelector('.secno')
                  .textContent.trim()
              return nn`<span class="print-only">${t}</span>`
            })(e.dataset.id)
          )
        )
    }
    function Va() {
      const e = new Set(),
        t = new Map(),
        n = document.querySelectorAll('a[data-cite]')
      for (const r of n) {
        if (!r.dataset.cite) continue
        const n = r.href
        if (e.has(n)) continue
        const { type: o, linkFor: s } = r.dataset,
          i = Na(r)
        if (!i) continue
        const a = ba(r).key.toUpperCase()
        ;(t.get(a) || t.set(a, []).get(a)).push({
          term: i,
          type: o,
          linkFor: s,
          elem: r,
        }),
          e.add(n)
      }
      return t
    }
    function Za(e) {
      const { elem: t } = e,
        n = (function (e) {
          const { term: t, type: n, linkFor: r } = e
          let o = t
          Fa.has(n) &&
            ('extended-attribute' === n && (o = `[${o}]`),
            (o = `<code>${o}</code>`))
          const s = Ka.has(t) ? 'type' : Ya.get(n)
          s && (o += ' ' + s)
          if (r) {
            let e = r
            ;/\s/.test(r) || (e = `<code>${e}</code>`),
              'element-attr' === n && (e += ' element'),
              (o += ` (for ${e})`)
          }
          return o
        })(e)
      return nn`<li>
    <span class="index-term" data-href="${t.href}">${{ html: n }}</span>
  </li>`
    }
    const Ya = new Map([
        ['attribute', 'attribute'],
        ['element-attr', 'attribute'],
        ['element', 'element'],
        ['enum', 'enum'],
        ['exception', 'exception'],
        ['extended-attribute', 'extended attribute'],
        ['interface', 'interface'],
      ]),
      Ka = new Set([
        'boolean',
        'byte',
        'octet',
        'short',
        'unsigned short',
        'long',
        'unsigned long',
        'long long',
        'unsigned long long',
        'float',
        'unrestricted float',
        'double',
        'unrestricted double',
        'undefined',
        'any',
        'object',
        'symbol',
      ])
    function Ja(e) {
      e
        .querySelectorAll('#index-defined-elsewhere li[data-spec]')
        .forEach((e) => e.removeAttribute('data-spec')),
        e
          .querySelectorAll('#index-defined-here li[data-id]')
          .forEach((e) => e.removeAttribute('data-id'))
    }
    var Xa = Object.freeze({
      __proto__: null,
      name: 'core/dfn-index',
      run: async function () {
        const e = document.querySelector('section#index')
        if (!e) return
        const t = document.createElement('style')
        ;(t.textContent = await (async function () {
          try {
            return (
              await Promise.resolve().then(function () {
                return Gl
              })
            ).default
          } catch {
            return qn('dfn-index.css')
          }
        })()),
          document.head.appendChild(t),
          e.classList.add('appendix'),
          e.querySelector('h2') || e.prepend(nn`<h2>${Ua.heading}</h2>`)
        const n = nn`<section id="index-defined-here">
    <h3>${Ua.headlingLocal}</h3>
    ${(function () {
      const e = (function () {
        const e = new Map(),
          t = document.querySelectorAll('dfn:not([data-cite])')
        for (const n of t) {
          if (!n.id) continue
          const t = bn(n.textContent)
          ;(e.get(t) || e.set(t, []).get(t)).push(n)
        }
        return [...e].sort(([e], [t]) =>
          e.slice(e.search(/\w/)).localeCompare(t.slice(t.search(/\w/)))
        )
      })()
      return nn`<ul class="index">
    ${e.map(([e, t]) =>
      (function (e, t) {
        const n = (e, t, n) => {
          const r = '#' + e.id
          return nn`<li data-id=${e.id}>
      <a class="index-term" href="${r}">${{ html: t }}</a> ${
            n ? { html: n } : ''
          }
    </li>`
        }
        if (1 === t.length) {
          const r = t[0],
            o = qa(r),
            s = (function (e, t, n) {
              let r = n
              'enum-value' === t && (r = `"${r}"`)
              ;(Fa.has(t) || e.dataset.idl || e.closest('code')) &&
                (r = `<code>${r}</code>`)
              return r
            })(r, o, e),
            i = Ha(r, o, e)
          return n(r, s, i)
        }
        return nn`<li>
    ${e}
    <ul>
      ${t.map((t) => {
        const r = Ha(t, qa(t), e) || Ua.dfnOf
        return n(t, r)
      })}
    </ul>
  </li>`
      })(e, t)
    )}
  </ul>`
    })()}
  </section>`
        e.append(n)
        const r = nn`<section id="index-defined-elsewhere">
    <h3>${Ua.headingExternal}</h3>
    ${(function () {
      const e = [...Va().entries()].sort(([e], [t]) => e.localeCompare(t))
      return nn`<ul class="index">
    ${e.map(
      ([e, t]) => nn`<li data-spec="${e}">
        ${ti(e)} defines the following:
        <ul>
          ${t.sort((e, t) => e.term.localeCompare(t.term)).map(Za)}
        </ul>
      </li>`
    )}
  </ul>`
    })()}
  </section>`
        e.append(r)
        for (const e of r.querySelectorAll('.index-term')) Cn(e, 'index-term')
        s('toc', Ga, { once: !0 }), s('beforesave', Ja)
      },
    })
    var Qa = Object.freeze({
      __proto__: null,
      name: 'core/contrib',
      run: async function (e) {
        if (!document.getElementById('gh-contributors')) return
        if (!e.github) {
          return void o(
            'error',
            'Requested list of contributors from GitHub, but [`github`](https://github.com/w3c/respec/wiki/github) configuration option is not set.'
          )
        }
        const t = e.editors.map((e) => e.name),
          n = `${e.github.apiBase}/${e.github.fullName}/`
        await (async function (e, t) {
          const n = document.getElementById('gh-contributors')
          if (!n) return
          n.textContent = 'Fetching list of contributors...'
          const r = await s()
          null !== r
            ? (function (e, t) {
                const n = e.sort((e, t) => {
                  const n = e.name || e.login,
                    r = t.name || t.login
                  return n.toLowerCase().localeCompare(r.toLowerCase())
                })
                if ('UL' === t.tagName)
                  return void nn(t)`${n.map(
                    ({ name: e, login: t }) =>
                      `<li><a href="https://github.com/${t}">${e || t}</a></li>`
                  )}`
                const r = n.map((e) => e.name || e.login)
                t.textContent = gn(r)
              })(r, n)
            : (n.textContent = 'Failed to fetch contributors.')
          async function s() {
            const { href: n } = new URL('contributors', t)
            try {
              const t = await xn(n)
              if (!t.ok)
                throw new Error(
                  `Request to ${n} failed with status code ${t.status}`
                )
              return (await t.json()).filter(
                (t) => !e.includes(t.name || t.login)
              )
            } catch (e) {
              return (
                o('error', 'Error loading contributors from GitHub.'),
                console.error(e),
                null
              )
            }
          }
        })(t, n)
      },
    })
    var ec = Object.freeze({
      __proto__: null,
      name: 'core/fix-headers',
      run: function () {
        ;[...document.querySelectorAll('section:not(.introductory)')]
          .map((e) => e.querySelector('h1, h2, h3, h4, h5, h6'))
          .filter((e) => e)
          .forEach((e) => {
            En(
              e,
              'h' +
                Math.min(
                  (function (e, t) {
                    const n = []
                    for (; e != e.ownerDocument.body; )
                      e.matches(t) && n.push(e), (e = e.parentElement)
                    return n
                  })(e, 'section').length + 1,
                  6
                )
            )
          })
      },
    })
    const tc = ['h2', 'h3', 'h4', 'h5', 'h6'],
      nc = ['h1', ...tc],
      rc = wn({
        en: { toc: 'Table of Contents' },
        zh: { toc: '内容大纲' },
        ko: { toc: '목차' },
        ja: { toc: '目次' },
        nl: { toc: 'Inhoudsopgave' },
        es: { toc: 'Tabla de Contenidos' },
        de: { toc: 'Inhaltsverzeichnis' },
      })
    function oc(e, t, { prefix: n = '' } = {}) {
      let r = !1,
        o = 0,
        s = 1
      if ((n.length && !n.endsWith('.') && (n += '.'), 0 === e.length))
        return null
      const i = nn`<ol class="toc"></ol>`
      for (const a of e) {
        !a.isAppendix || n || r || ((o = s), (r = !0))
        let e = a.isIntro ? '' : r ? sc(s - o + 1) : n + s
        const c = e.split('.').length
        if (
          (1 === c &&
            ((e += '.'), a.header.before(document.createComment('OddPage'))),
          a.isIntro ||
            ((s += 1), a.header.prepend(nn`<bdi class="secno">${e} </bdi>`)),
          c <= t)
        ) {
          const n = a.header.id || a.element.id,
            r = ac(a.header, n),
            o = oc(a.subsections, t, { prefix: e })
          o && r.append(o), i.append(r)
        }
      }
      return i
    }
    function sc(e) {
      let t = ''
      for (; e > 0; )
        (e -= 1),
          (t = String.fromCharCode(65 + (e % 26)) + t),
          (e = Math.floor(e / 26))
      return t
    }
    function ic(e, { tocIntroductory: t = !1 } = {}) {
      const n = t
          ? e.querySelectorAll(':scope > section')
          : e.querySelectorAll(':scope > section:not(.introductory)'),
        r = []
      for (const e of n) {
        const n = e.classList.contains('notoc')
        if (!e.children.length || n) continue
        const o = e.children[0]
        if (!tc.includes(o.localName)) continue
        const s = o.textContent
        Cn(e, null, s),
          r.push({
            element: e,
            header: o,
            title: s,
            isIntro: e.classList.contains('introductory'),
            isAppendix: e.classList.contains('appendix'),
            subsections: ic(e, { tocIntroductory: t }),
          })
      }
      return r
    }
    function ac(e, t) {
      const n = nn`<a href="${'#' + t}" class="tocxref" />`
      var r
      return (
        n.append(...e.cloneNode(!0).childNodes),
        (r = n).querySelectorAll('a').forEach((e) => {
          const t = En(e, 'span')
          ;(t.className = 'formerLink'), t.removeAttribute('href')
        }),
        r.querySelectorAll('dfn').forEach((e) => {
          En(e, 'span').removeAttribute('id')
        }),
        nn`<li class="tocline">${n}</li>`
      )
    }
    var cc = Object.freeze({
      __proto__: null,
      name: 'core/structure',
      run: function (e) {
        if (
          ('tocIntroductory' in e == !1 && (e.tocIntroductory = !1),
          'maxTocLevel' in e == !1 && (e.maxTocLevel = 1 / 0),
          (function () {
            const e = (function () {
              const e = nc
                .map((e) => `section:not(.introductory) ${e}:first-child`)
                .join(',')
              return [...document.querySelectorAll(e)].filter(
                (e) => !e.closest('section.introductory')
              )
            })()
            if (!e.length) return
            e.forEach((e) => {
              const t = 'h' + Math.min(Ln(e, 'section').length + 1, 6)
              e.localName !== t && En(e, t)
            })
          })(),
          !e.noTOC)
        ) {
          !(function () {
            const e = document.querySelectorAll('section[data-max-toc]')
            for (const t of e) {
              const e = parseInt(t.dataset.maxToc, 10)
              if (e < 0 || e > 6 || Number.isNaN(e)) {
                const e =
                  '`data-max-toc` must have a value between 0-6 (inclusive).'
                fn(t, e, e)
                continue
              }
              if (0 === e) {
                t.classList.add('notoc')
                continue
              }
              const n = t.querySelectorAll(
                ':scope > ' +
                  Array.from({ length: e }, () => 'section').join(' > ')
              )
              for (const e of n) e.classList.add('notoc')
            }
          })()
          const t = oc(
            ic(document.body, { tocIntroductory: e.tocIntroductory }),
            e.maxTocLevel
          )
          t &&
            (function (e) {
              if (!e) return
              const t = nn`<nav id="toc"></nav>`,
                n = nn`<h2 class="introductory">${rc.toc}</h2>`
              Cn(n), t.append(n, e)
              const r =
                document.getElementById('toc') ||
                document.getElementById('sotd') ||
                document.getElementById('abstract')
              r && ('toc' === r.id ? r.replaceWith(t) : r.after(t))
              const o = nn`<p role="navigation" id="back-to-top">
    <a href="#title"><abbr title="Back to Top">&uarr;</abbr></a>
  </p>`
              document.body.append(o)
            })(t)
        }
        o('toc')
      },
    })
    const lc = wn({
      en: { informative: 'This section is non-normative.' },
      nl: { informative: 'Dit onderdeel is niet normatief.' },
      ko: { informative: '이 부분은 비규범적입니다.' },
      ja: { informative: 'この節は仕様には含まれません．' },
      de: { informative: 'Dieser Abschnitt ist nicht normativ.' },
      zh: { informative: '本章节不包含规范性内容。' },
    })
    var uc = Object.freeze({
      __proto__: null,
      name: 'core/informative',
      run: function () {
        Array.from(document.querySelectorAll('section.informative'))
          .map((e) => e.querySelector('h2, h3, h4, h5, h6'))
          .filter((e) => e)
          .forEach((e) => {
            e.after(nn`<p><em>${lc.informative}</em></p>`)
          })
      },
    })
    var dc = Object.freeze({
      __proto__: null,
      name: 'core/id-headers',
      run: function (e) {
        const t = document.querySelectorAll(
          'section:not(.head):not(.introductory) h2, h3, h4, h5, h6'
        )
        for (const n of t) {
          let t = n.id
          t || (Cn(n), (t = n.parentElement.id || n.id)),
            e.addSectionLinks &&
              n.appendChild(nn`
      <a href="${'#' + t}" class="self-link" aria-label="§"></a>
    `)
        }
      },
    })
    const pc = new Set([
      'and_chr',
      'and_ff',
      'and_uc',
      'android',
      'bb',
      'chrome',
      'edge',
      'firefox',
      'ie',
      'ios_saf',
      'op_mini',
      'op_mob',
      'opera',
      'safari',
      'samsung',
    ])
    if (
      !document.querySelector(
        "link[rel='preconnect'][href='https://respec.org']"
      )
    ) {
      const e = un({ hint: 'preconnect', href: 'https://respec.org' })
      document.head.appendChild(e)
    }
    const fc = (async function () {
      try {
        return (
          await Promise.resolve().then(function () {
            return Vl
          })
        ).default
      } catch {
        return qn('caniuse.css')
      }
    })()
    var hc = Object.freeze({
      __proto__: null,
      name: 'core/caniuse',
      run: async function (e) {
        if (!e.caniuse) return
        const t = (function (e) {
          const t = { versions: 4 }
          if ('string' == typeof e.caniuse) return { feature: e.caniuse, ...t }
          const n = { ...t, ...e.caniuse },
            { browsers: r } = n
          if (Array.isArray(r)) {
            const e = r.filter((e) => !pc.has(e))
            if (e.length) {
              o(
                'warn',
                `Ignoring invalid browser(s): ${e
                  .map((e) => `"\`${e}\`"`)
                  .join(
                    ', '
                  )} in [\`respecConfig.caniuse.browsers\`](https://github.com/w3c/respec/wiki/caniuse)`
              )
            }
          }
          return n
        })(e)
        if (((e.caniuse = t), !t.feature)) return
        const n = new URL(t.feature, 'https://caniuse.com/').href,
          r = await fc
        document.head.appendChild(nn`<style class="removeOnSave">
    ${r}
  </style>`)
        const i = document.querySelector('.head dl'),
          a = (async () => {
            try {
              const e = t.apiURL || 'https://respec.org/caniuse/',
                n = await (async function (e, t) {
                  const { feature: n, versions: r, browsers: o } = t,
                    s = new URLSearchParams()
                  s.set('feature', n),
                    s.set('versions', r),
                    Array.isArray(o) && s.set('browsers', o.join(','))
                  s.set('format', 'html')
                  const i = `${e}?${s.toString()}`,
                    a = await fetch(i)
                  if (!a.ok) {
                    const { status: e, statusText: t } = a
                    throw new Error(`Failed to get caniuse data: (${e}) ${t}`)
                  }
                  return await a.text()
                })(e, t)
              return nn`${{ html: n }}`
            } catch (e) {
              console.error(e)
              return (
                o(
                  'error',
                  `Couldn't find feature "${t.feature}" on caniuse.com? Please check the feature key on [caniuse.com](https://caniuse.com)`
                ),
                nn`<a href="${n}">caniuse.com</a>`
              )
            }
          })(),
          c = nn`<dt class="caniuse-title">Browser support:</dt>
    <dd class="caniuse-stats">
      ${{ any: a, placeholder: 'Fetching data from caniuse.com...' }}
    </dd>`
        i.append(...c.childNodes),
          await a,
          o('amend-user-config', { caniuse: t.feature }),
          s('beforesave', (e) => {
            nn.bind(e.querySelector('.caniuse-stats'))`
      <a href="${n}">caniuse.com</a>`
          })
      },
    })
    const mc = 'https://w3c.github.io/mdn-spec-links/',
      gc = {
        chrome: 'Chrome',
        chrome_android: 'Chrome Android',
        edge: 'Edge',
        edge_mobile: 'Edge Mobile',
        firefox: 'Firefox',
        firefox_android: 'Firefox Android',
        ie: 'Internet Explorer',
        opera: 'Opera',
        opera_android: 'Opera Android',
        safari: 'Safari',
        safari_ios: 'Safari iOS',
        samsunginternet_android: 'Samsung Internet',
        webview_android: 'WebView Android',
      },
      bc = wn({
        en: {
          inAllEngines: 'This feature is in all major engines.',
          inSomeEngines: 'This feature has limited support.',
        },
        zh: {
          inAllEngines: '所有主要引擎均支持此特性。',
          inSomeEngines: '此功能支持有限。',
        },
      })
    function wc(e) {
      const t = e.closest('section')
      if (!t) return
      const { previousElementSibling: n } = t
      if (n && n.classList.contains('mdn')) return n
      const r = nn`<aside class="mdn"></aside>`
      return t.before(r), r
    }
    function yc(e) {
      const { name: t, slug: n, summary: r, support: o, engines: s } = e,
        i = n.slice(n.indexOf('/') + 1),
        a = 'https://developer.mozilla.org/en-US/docs/Web/' + n,
        c = 'Expand MDN details for ' + t,
        l = (function (e) {
          if (3 === e.length)
            return nn`<span title="${bc.inAllEngines}">✅</span>`
          if (e.length < 2)
            return nn`<span title="${bc.inSomeEngines}">🚫</span>`
          return nn`<span>&emsp;</span>`
        })(s)
      return nn`<details>
    <summary aria-label="${c}"><span>MDN</span>${l}</summary>
    <a title="${r}" href="${a}">${i}</a>
    ${(function (e) {
      if (3 === e.length)
        return nn`<p class="engines-all">${bc.inAllEngines}</p>`
      if (e.length < 2)
        return nn`<p class="engines-some">${bc.inSomeEngines}</p>`
    })(s)}
    ${
      o
        ? (function (e) {
            function t(e, t, n) {
              const r = 'Unknown' === t ? '?' : t,
                o = `${e} ${t.toLowerCase()}`
              return nn`<tr class="${o}">
      <td>${gc[e]}</td>
      <td>${n || r}</td>
    </tr>`
            }
            function n(e, n) {
              if (n.version_removed) return t(e, 'No', '')
              const r = n.version_added
              return 'boolean' == typeof r
                ? t(e, r ? 'Yes' : 'No', '')
                : r
                ? t(e, 'Yes', r + '+')
                : t(e, 'Unknown', '')
            }
            return nn`<table>
    ${Object.keys(gc).map((r) => (e[r] ? n(r, e[r]) : t(r, 'Unknown', '')))}
  </table>`
          })(o)
        : nn`<p class="nosupportdata">No support data.</p>`
    }
  </details>`
    }
    var vc = Object.freeze({
      __proto__: null,
      name: 'core/mdn-annotation',
      run: async function (e) {
        const t = (function (e) {
          const { shortName: t, mdn: n } = e
          if (!n) return
          return 'string' == typeof n ? n : n.key || t
        })(e)
        if (!t) return
        const n = await (async function (e, t) {
          const { baseJsonPath: n = mc, maxAge: r = 864e5 } = t,
            s = new URL(e + '.json', n).href,
            i = await xn(s, r)
          if (404 === i.status) {
            return void o(
              'error',
              `${`Could not find MDN data associated with key "${e}".`} ${'Please add a valid key to `respecConfig.mdn`'}`
            )
          }
          return await i.json()
        })(t, e.mdn)
        if (!n) return
        const r = document.createElement('style')
        ;(r.textContent = await (async function () {
          try {
            return (
              await Promise.resolve().then(function () {
                return Zl
              })
            ).default
          } catch {
            return qn('mdn-annotation.css')
          }
        })()),
          document.head.append(r)
        for (const e of (function (e) {
          return [
            ...document.body.querySelectorAll('[id]:not(script)'),
          ].filter(({ id: t }) => Array.isArray(e[t]))
        })(n)) {
          const t = n[e.id],
            r = wc(e)
          if (r) for (const e of t) r.append(yc(e))
        }
      },
    })
    const kc = new Map([
      ['text/html', 'html'],
      ['application/xml', 'xml'],
    ])
    function xc(e, t = document) {
      const n = kc.get(e)
      if (!n) {
        const t = [...kc.values()].join(', ')
        throw new TypeError(`Invalid format: ${e}. Expected one of: ${t}.`)
      }
      const r = (function (e, t) {
        const n = t.cloneNode(!0)
        !(function (e) {
          const { head: t, body: n, documentElement: r } = e
          Dn(e),
            e
              .querySelectorAll('.removeOnSave, #toc-nav')
              .forEach((e) => e.remove()),
            n.classList.remove('toc-sidebar'),
            dn(r)
          const s = e.createDocumentFragment(),
            i = e.querySelector("meta[name='viewport']")
          i && t.firstChild !== i && s.appendChild(i)
          let a = e.querySelector("meta[charset], meta[content*='charset=']")
          a || (a = nn`<meta charset="utf-8" />`)
          s.appendChild(a)
          const c = 'ReSpec ' + (window.respecVersion || 'Developer Channel'),
            l = nn`
    <meta name="generator" content="${c}" />
  `
          s.appendChild(l), t.prepend(s), o('beforesave', r)
        })(n)
        let r = ''
        switch (e) {
          case 'xml':
            r = new XMLSerializer().serializeToString(n)
            break
          default:
            !(function (e) {
              e.querySelectorAll('style').forEach((e) => {
                e.innerHTML = `\n${e.innerHTML}\n`
              }),
                e.querySelectorAll('head > *').forEach((e) => {
                  e.outerHTML = '\n' + e.outerHTML
                })
            })(n),
              n.doctype &&
                (r += new XMLSerializer().serializeToString(n.doctype)),
              (r += n.documentElement.outerHTML)
        }
        return r
      })(n, t)
      return `data:${e};charset=utf-8,${encodeURIComponent(r)}`
    }
    n('core/exporter', { rsDocToDataURL: xc })
    const $c = wn({
        en: { save_snapshot: 'Export' },
        nl: { save_snapshot: 'Bewaar Snapshot' },
        ja: { save_snapshot: '保存する' },
        de: { save_snapshot: 'Exportieren' },
        zh: { save_snapshot: '导出' },
      }),
      _c = [
        {
          id: 'respec-save-as-html',
          fileName: 'index.html',
          title: 'HTML',
          type: 'text/html',
          get href() {
            return xc(this.type)
          },
        },
        {
          id: 'respec-save-as-xml',
          fileName: 'index.xhtml',
          title: 'XML',
          type: 'application/xml',
          get href() {
            return xc(this.type)
          },
        },
        {
          id: 'respec-save-as-epub',
          fileName: 'spec.epub',
          title: 'EPUB 3',
          type: 'application/epub+zip',
          get href() {
            const e = new URL('https://labs.w3.org/r2epub/')
            return (
              e.searchParams.append('respec', 'true'),
              e.searchParams.append('url', document.location.href),
              e.href
            )
          },
        },
      ]
    function Sc(e) {
      const { id: t, href: n, fileName: r, title: o, type: s } = e
      return nn`<a
    href="${n}"
    id="${t}"
    download="${r}"
    type="${s}"
    class="respec-save-button"
    onclick=${() => br.closeModal()}
    >${o}</a
  >`
    }
    const Cc = {
        async show(e) {
          await document.respec.ready
          const t = nn`<div class="respec-save-buttons">
      ${_c.map(Sc)}
    </div>`
          br.freshModal($c.save_snapshot, t, e)
        },
      },
      Rc = 'download' in HTMLAnchorElement.prototype
    let Ec
    Rc &&
      (Ec = br.addCommand(
        $c.save_snapshot,
        function () {
          if (!Rc) return
          Cc.show(Ec)
        },
        'Ctrl+Shift+Alt+S',
        '💾'
      ))
    var Ac = Object.freeze({
      __proto__: null,
      name: 'ui/save-html',
      exportDocument: function (e, t) {
        const n =
          "Exporting via ui/save-html module's `exportDocument()` is deprecated and will be removed. Use core/exporter `rsDocToDataURL()` instead."
        return o('warn', n), console.warn(n), xc(t)
      },
    })
    const Tc = wn({
        en: { search_specref: 'Search Specref' },
        nl: { search_specref: 'Doorzoek Specref' },
        ja: { search_specref: '仕様検索' },
        de: { search_specref: 'Spezifikationen durchsuchen' },
        zh: { search_specref: '搜索 Specref' },
      }),
      Lc = br.addCommand(
        Tc.search_specref,
        function () {
          Oc(), br.freshModal(Tc.search_specref, Pc, Lc)
          Pc.querySelector('input[type=search]').focus()
        },
        'Ctrl+Shift+Alt+space',
        '🔎'
      ),
      Pc = document.createElement('form'),
      Ic = nn.bind(Pc),
      Nc = nn.bind(document.createElement('div'))
    function Dc([e, t]) {
      return nn.wire(t)`
    <dt>
      [${e}]
    </dt>
    <dd>${ri(t)}</dd>
  `
    }
    ;(Pc.id = 'specref-ui'),
      Pc.addEventListener('submit', async (e) => {
        e.preventDefault()
        const { searchBox: t } = Pc,
          n = t.value
        if (!n) return void t.focus()
        Oc({ state: 'Searching Specref…' })
        const r = new URL('https://specref.herokuapp.com/search-refs')
        r.searchParams.set('q', n)
        const o = new URL('https://specref.herokuapp.com/reverse-lookup')
        o.searchParams.set('urls', n)
        try {
          const e = performance.now(),
            s = await Promise.all([
              fetch(r).then((e) => e.json()),
              fetch(o).then((e) => e.json()),
            ]),
            { checked: i } = Pc.includeVersions,
            a = (function ({ includeVersions: e = !1 } = {}) {
              return (...t) => {
                const n = Object.assign({}, ...t),
                  r = new Map(Object.entries(n))
                return (
                  Array.from(r)
                    .filter(([, e]) => e.aliasOf)
                    .map(([e]) => e)
                    .reduce((e, t) => e.delete(t) && e, r),
                  e ||
                    Array.from(r.values())
                      .filter((e) => 'object' == typeof e && 'versions' in e)
                      .flat()
                      .forEach((e) => {
                        r.delete(e)
                      }),
                  Array.from(r)
                    .filter(([, e]) => 'object' != typeof e)
                    .forEach(([e]) => r.delete(e)),
                  r
                )
              }
            })({ includeVersions: i })
          Oc({
            query: n,
            results: a(...s),
            state: '',
            timeTaken: Math.round(performance.now() - e) / 1e3,
          })
        } catch (e) {
          console.error(e), Oc({ state: "Error! Couldn't do search." })
        } finally {
          t.focus()
        }
      })
    const jc = nn.wire()`
  <header>
    <p>
      An Open-Source, Community-Maintained Database of
      Web Standards & Related References.
    </p>
  </header>
  <div class="searchcomponent">
    <input
      name="searchBox"
      type="search"
      aria-label="Search"
      autocomplete="off"
      placeholder="Keywords, titles, authors, urls…">
    <button
      type="submit">
        Search
    </button>
    <label>
      <input type="checkbox" name="includeVersions"> Include all versions.
    </label>
  </div>
`
    function Oc({ state: e = '', results: t, timeTaken: n, query: r } = {}) {
      t
        ? Ic`
    <div>${jc}</div>
    <p class="state" hidden="${!e}">
      ${e}
    </p>
    <section hidden="${!t}" aria-live="polite">${
            t
              ? (function (e, t, n) {
                  if (!e.size)
                    return Nc`
      <p class="state">
        Your search - <strong> ${t} </strong> -
        did not match any references.
      </p>
    `
                  const r = Array.from(e)
                    .slice(0, 99)
                    .map(Dc)
                    .reduce((e, t) => e.concat(t), [])
                  return Nc`
    <p class="result-stats">
      ${e.size} results (${n} seconds).
      ${e.size > 99 ? 'First 100 results.' : ''}
    </p>
    <dl class="specref-results">${r}</dl>
  `
                })(t, r, n)
              : []
          }</section>
  `
        : Ic`<div>${jc}</div>`
    }
    var zc = Object.freeze({ __proto__: null })
    const Mc = 'https://respec.org/xref/',
      Wc = {
        en: { title: 'Search definitions' },
        ja: { title: '定義検索' },
        de: { title: 'Definitionen durchsuchen' },
        zh: { title: '搜索定义' },
      },
      Uc = Wc[g in Wc ? g : 'en'],
      Fc = br.addCommand(
        Uc.title,
        function () {
          const e = nn`
    <iframe id="xref-ui" src="${Mc}" onload=${(e) =>
            e.target.classList.add('ready')}></iframe>
    <a href="${Mc}" target="_blank">Open Search UI in a new tab</a>
  `
          br.freshModal(Uc.title, e, Fc)
        },
        'Ctrl+Shift+Alt+x',
        '📚'
      )
    var qc = Object.freeze({ __proto__: null })
    const Bc = wn({
      en: { about_respec: 'About' },
      zh: { about_respec: '关于' },
      nl: { about_respec: 'Over' },
      ja: { about_respec: 'これについて' },
      de: { about_respec: 'Über' },
    })
    window.respecVersion = window.respecVersion || 'Developer Edition'
    const Hc = document.createElement('div'),
      Gc = nn.bind(Hc),
      Vc = br.addCommand(
        `${Bc.about_respec} ${window.respecVersion}`,
        function () {
          const e = []
          'getEntriesByType' in performance &&
            performance
              .getEntriesByType('measure')
              .sort((e, t) => t.duration - e.duration)
              .map(({ name: e, duration: t }) => ({
                name: e,
                duration:
                  t > 1e3
                    ? Math.round(t / 1e3) + ' second(s)'
                    : t.toFixed(2) + ' milliseconds',
              }))
              .map(Zc)
              .forEach((t) => {
                e.push(t)
              })
          Gc`
  <p>
    ReSpec is a document production toolchain, with a notable focus on W3C specifications.
  </p>
  <p>
    <a href='https://github.com/w3c/respec/wiki'>Documentation</a>,
    <a href='https://github.com/w3c/respec/issues'>Bugs</a>.
  </p>
  <table border="1" width="100%" hidden="${!e.length}">
    <caption>
      Loaded plugins
    </caption>
    <thead>
      <tr>
        <th>
          Plugin Name
        </th>
        <th>
          Processing time
        </th>
      </tr>
    </thead>
    <tbody>${e}</tbody>
  </table>
`,
            br.freshModal(
              `${Bc.about_respec} - ${window.respecVersion}`,
              Hc,
              Vc
            )
        },
        'Ctrl+Shift+Alt+A',
        'ℹ️'
      )
    function Zc({ name: e, duration: t }) {
      return nn`
    <tr>
      <td><a href="${`https://github.com/w3c/respec/blob/develop/src/${e}.js`}">${e}</a></td>
      <td>${t}</td>
    </tr>
  `
    }
    var Yc = Object.freeze({ __proto__: null })
    var Kc = Object.freeze({
      __proto__: null,
      name: 'core/seo',
      run: function () {
        const e = document.querySelector('#abstract p:first-of-type')
        if (!e) return
        const t = e.textContent.replace(/\s+/, ' ').trim(),
          n = document.createElement('meta')
        ;(n.name = 'description'), (n.content = t), document.head.appendChild(n)
      },
    })
    function Jc({ name: e, url: t, mailto: n, company: r, companyURL: o }) {
      const s = { type: 'Person', name: e, url: t, 'foaf:mbox': n }
      return (r || o) && (s.worksFor = { name: r, url: o }), s
    }
    function Xc(e) {
      const { href: t, title: n, href: r } = e,
        o = { id: t, type: 'TechArticle', name: n, url: r }
      return (
        e.authors && (o.creator = e.authors.map((e) => ({ name: e }))),
        e.rawDate && (o.publishedDate = e.rawDate),
        e.isbn && (o.identifier = e.isbn),
        e.publisher && (o.publisher = { name: e.publisher }),
        o
      )
    }
    var Qc = Object.freeze({
      __proto__: null,
      name: 'w3c/seo',
      run: async function (e) {
        if (!e.canonicalURI)
          switch (e.specStatus) {
            case 'CG-DRAFT':
            case 'BG-DRAFT':
            case 'unofficial':
              return
          }
        const t = e.shortName ? `https://www.w3.org/TR/${e.shortName}/` : null
        switch (e.canonicalURI) {
          case 'edDraft':
            e.edDraftURI
              ? (e.canonicalURI = new URL(
                  e.edDraftURI,
                  document.location.href
                ).href)
              : (o(
                  'warn',
                  'Canonical URI set to edDraft, but no edDraftURI is set in configuration'
                ),
                (e.canonicalURI = null))
            break
          case 'TR':
            t
              ? (e.canonicalURI = t)
              : (o(
                  'warn',
                  'Canonical URI set to TR, but no shortName is set in configuration'
                ),
                (e.canonicalURI = null))
            break
          default:
            if (e.canonicalURI)
              try {
                e.canonicalURI = new URL(
                  e.canonicalURI,
                  document.location.href
                ).href
              } catch (t) {
                o('warn', 'CanonicalURI is an invalid URL: ' + t.message),
                  (e.canonicalURI = null)
              }
            else t && (e.canonicalURI = t)
        }
        if (e.canonicalURI) {
          const t = document.createElement('link')
          t.setAttribute('rel', 'canonical'),
            t.setAttribute('href', e.canonicalURI),
            document.head.appendChild(t)
        }
        e.doJsonLd &&
          (await (async function (e, t) {
            const n = ['TechArticle']
            e.rdfStatus && n.push(e.rdfStatus)
            const r = {
              '@context': [
                'http://schema.org',
                {
                  '@vocab': 'http://schema.org/',
                  '@language': t.documentElement.lang || 'en',
                  w3p: 'http://www.w3.org/2001/02pd/rec54#',
                  foaf: 'http://xmlns.com/foaf/0.1/',
                  datePublished: {
                    '@type': 'http://www.w3.org/2001/XMLSchema#date',
                  },
                  inLanguage: { '@language': null },
                  isBasedOn: { '@type': '@id' },
                  license: { '@type': '@id' },
                },
              ],
              id: e.canonicalURI || e.thisVersion,
              type: n,
              name: document.title,
              inLanguage: t.documentElement.lang || 'en',
              license: e.licenseInfo.url,
              datePublished: e.dashDate,
              copyrightHolder: {
                name: 'World Wide Web Consortium',
                url: 'https://www.w3.org/',
              },
              discussionUrl: e.issueBase,
              alternativeHeadline: e.subtitle,
              isBasedOn: e.prevVersion,
            }
            if (e.additionalCopyrightHolders) {
              const t = Array.isArray(e.additionalCopyrightHolders)
                ? e.additionalCopyrightHolders
                : [e.additionalCopyrightHolders]
              r.copyrightHolder = [
                r.copyrightHolder,
                ...t.map((e) => ({ name: e })),
              ]
            }
            const o = t.head.querySelector('meta[name=description]')
            o && (r.description = o.content)
            e.editors && (r.editor = e.editors.map(Jc))
            e.authors && (r.contributor = e.authors.map(Jc))
            const s = [...e.normativeReferences, ...e.informativeReferences],
              i = await Promise.all(s.map((e) => Gs(e)))
            r.citation = i.filter((e) => 'object' == typeof e).map(Xc)
            const a = t.createElement('script')
            ;(a.type = 'application/ld+json'),
              (a.textContent = JSON.stringify(r, null, 2)),
              t.head.appendChild(a)
          })(e, document))
      },
    })
    const el = un({
      hint: 'preload',
      href: 'https://www.w3.org/Tools/respec/respec-highlight',
      as: 'script',
    })
    document.head.appendChild(el)
    const tl = (async function () {
      const e = await (async function () {
          try {
            return (
              await Promise.resolve().then(function () {
                return Yl
              })
            ).default
          } catch {
            return Fn('worker/respec-worker.js')
          }
        })(),
        t = URL.createObjectURL(
          new Blob([e], { type: 'application/javascript' })
        )
      return new Worker(t)
    })()
    n(
      'core/worker',
      tl.then((e) => ({ worker: e }))
    )
    const nl = (function (e, t = 0) {
        const n = (function* (e, t) {
          for (;;) yield `${e}:${t}`, t++
        })(e, t)
        return () => n.next().value
      })('highlight'),
      rl = (async function () {
        try {
          return (
            await Promise.resolve().then(function () {
              return Kl
            })
          ).default
        } catch {
          return qn('highlight.css')
        }
      })()
    async function ol(e) {
      e.setAttribute('aria-busy', 'true')
      const t =
        ((n = e.classList),
        Array.from(n)
          .filter((e) => 'highlight' !== e && 'nolinks' !== e)
          .map((e) => e.toLowerCase()))
      var n
      let r
      try {
        r = await (async function (e, t) {
          const n = { action: 'highlight', code: e, id: nl(), languages: t },
            r = await tl
          return (
            r.postMessage(n),
            new Promise((e, t) => {
              const o = setTimeout(() => {
                t(new Error('Timed out waiting for highlight.'))
              }, 4e3)
              r.addEventListener('message', function t(s) {
                const {
                  data: { id: i, language: a, value: c },
                } = s
                i === n.id &&
                  (r.removeEventListener('message', t),
                  clearTimeout(o),
                  e({ language: a, value: c }))
              })
            })
          )
        })(e.innerText, t)
      } catch (e) {
        return void console.error(e)
      }
      const { language: o, value: s } = r
      switch (e.localName) {
        case 'pre':
          e.classList.remove(o),
            (e.innerHTML = `<code class="hljs${o ? ' ' + o : ''}">${s}</code>`),
            e.classList.length || e.removeAttribute('class')
          break
        case 'code':
          ;(e.innerHTML = s), e.classList.add('hljs'), o && e.classList.add(o)
      }
      e.setAttribute('aria-busy', 'false')
    }
    var sl = Object.freeze({
      __proto__: null,
      name: 'core/highlight',
      run: async function (e) {
        if (e.noHighlightCSS) return
        const t = [
          ...document.querySelectorAll(
            '\n    pre:not(.idl):not(.nohighlight) > code:not(.nohighlight),\n    pre:not(.idl):not(.nohighlight),\n    code.highlight\n  '
          ),
        ].filter((e) => 'pre' !== e.localName || !e.querySelector('code'))
        if (!t.length) return
        const n = t.filter((e) => e.textContent.trim()).map(ol),
          r = await rl
        document.head.appendChild(nn`<style>
      ${r}
    </style>`),
          await Promise.all(n)
      },
    })
    const il = wn({
      en: {
        missing_test_suite_uri:
          "Found tests in your spec, but missing '[`testSuiteURI`](https://github.com/w3c/respec/wiki/testSuiteURI)' in your ReSpec config.",
        tests: 'tests',
        test: 'test',
      },
      ja: {
        missing_test_suite_uri:
          "この仕様内にテストの項目を検出しましたが，ReSpec の設定に '[`testSuiteURI`](https://github.com/w3c/respec/wiki/testSuiteURI)' が見つかりません．",
        tests: 'テスト',
        test: 'テスト',
      },
      de: {
        missing_test_suite_uri:
          "Die Spezifikation enthält Tests, aber in der ReSpec-Konfiguration ist keine '[`testSuiteURI`](https://github.com/w3c/respec/wiki/testSuiteURI)' angegeben.",
        tests: 'Tests',
        test: 'Test',
      },
      zh: {
        missing_test_suite_uri:
          "本规范中包含测试，但在 ReSpec 配置中缺少 '[`testSuiteURI`](https://github.com/w3c/respec/wiki/testSuiteURI)'。",
        tests: '测试',
        test: '测试',
      },
    })
    function al(e) {
      const t = [],
        [n] = new URL(e).pathname.split('/').reverse(),
        r = n.split('.')
      let [o] = r
      if (r.find((e) => 'https' === e)) {
        const e = document.createElement('span')
        ;(e.textContent = '🔒'),
          e.setAttribute('aria-label', 'requires a secure connection'),
          e.setAttribute('title', 'Test requires HTTPS'),
          (o = o.replace('.https', '')),
          t.push(e)
      }
      if (
        o
          .split('.')
          .join('-')
          .split('-')
          .find((e) => 'manual' === e)
      ) {
        const e = document.createElement('span')
        ;(e.textContent = '💪'),
          e.setAttribute('aria-label', 'the test must be run manually'),
          e.setAttribute('title', 'Manual test'),
          (o = o.replace('-manual', '')),
          t.push(e)
      }
      return nn`
    <li>
      <a href="${e}">${o}</a>
      ${t}
    </li>
  `
    }
    function cl(e, t) {
      return e
        .map((e) => {
          try {
            return new URL(e, t).href
          } catch {
            o('warn', 'Bad URI: ' + e)
          }
        })
        .filter((e) => e)
    }
    function ll(e, t) {
      const n = e.filter((e, t, n) => n.indexOf(e) !== t)
      n.length &&
        pn(
          t,
          'Duplicate tests found',
          'To fix, remove duplicates from "data-tests": ' +
            n.map((e) => new URL(e).pathname).join(', ')
        )
    }
    function ul(e) {
      const t = [...new Set(e)]
      return nn`
    <details class="respec-tests-details removeOnSave">
      <summary>tests: ${t.length}</summary>
      <ul>
        ${t.map(al)}
      </ul>
    </details>
  `
    }
    var dl = Object.freeze({
      __proto__: null,
      name: 'core/data-tests',
      run: function (e) {
        const t = [...document.querySelectorAll('[data-tests]')].filter(
          (e) => e.dataset.tests
        )
        if (t.length)
          if (e.testSuiteURI)
            for (const n of t) {
              const t = cl(
                n.dataset.tests.split(/,/gm).map((e) => e.trim()),
                e.testSuiteURI
              )
              ll(t, n)
              const r = ul(t)
              n.append(r)
            }
          else o('error', il.missing_test_suite_uri)
      },
    })
    function pl(e) {
      const t = 'ascending' === e ? 1 : -1
      return ({ textContent: e }, { textContent: n }) =>
        t * e.trim().localeCompare(n.trim())
    }
    function fl(e, t) {
      return [...e.querySelectorAll(':scope > li')]
        .sort(pl(t))
        .reduce(
          (e, t) => (e.appendChild(t), e),
          document.createDocumentFragment()
        )
    }
    function hl(e, t) {
      return [...e.querySelectorAll(':scope > dt')]
        .sort(pl(t))
        .reduce((e, t) => {
          const { nodeType: n, nodeName: r } = t,
            o = document.createDocumentFragment()
          let { nextSibling: s } = t
          for (; s && s.nextSibling; ) {
            o.appendChild(s.cloneNode(!0))
            const { nodeType: e, nodeName: t } = s.nextSibling
            if (e === n && t === r) break
            s = s.nextSibling
          }
          return o.prepend(t.cloneNode(!0)), e.appendChild(o), e
        }, document.createDocumentFragment())
    }
    var ml = Object.freeze({
      __proto__: null,
      name: 'core/list-sorter',
      sortListItems: fl,
      sortDefinitionTerms: hl,
      run: function () {
        const e = document.querySelectorAll('[data-sort]')
        for (const t of e) {
          let e
          const n = t.dataset.sort || 'ascending'
          switch (t.localName) {
            case 'dl':
              e = hl(t, n)
              break
            case 'ol':
            case 'ul':
              e = fl(t, n)
              break
            default:
              o('warning', `ReSpec can't sort ${t.localName} elements.`)
          }
          if (e) {
            const n = document.createRange()
            n.selectNodeContents(t), n.deleteContents(), t.appendChild(e)
          }
        }
      },
    })
    const gl = (async function () {
      try {
        return (
          await Promise.resolve().then(function () {
            return Jl
          })
        ).default
      } catch {
        return qn('var.css')
      }
    })()
    function bl(e) {
      e.stopPropagation()
      const { target: t } = e,
        n = (function (e) {
          const t = bn(e.textContent),
            n = e.closest('section'),
            r = yl(e),
            o = [...n.querySelectorAll('var')].filter(
              (e) => bn(e.textContent) === t && e.closest('section') === n
            ),
            s = o[0].classList.contains('respec-hl')
          if ((wl.set(r, s), s)) return o.forEach((e) => vl(e, r)), []
          o.forEach((e) =>
            (function (e, t) {
              e.classList.add('respec-hl', t)
            })(e, r)
          )
          return o
        })(t),
        r = () => {
          const e = yl(t)
          n.forEach((t) => vl(t, e)),
            [...wl.keys()].forEach((e) => wl.set(e, !0))
        }
      n.length && document.body.addEventListener('click', r, { once: !0 })
    }
    const wl = new Map([
      ['respec-hl-c1', !0],
      ['respec-hl-c2', !0],
      ['respec-hl-c3', !0],
      ['respec-hl-c4', !0],
      ['respec-hl-c5', !0],
      ['respec-hl-c6', !0],
      ['respec-hl-c7', !0],
    ])
    function yl(e) {
      const { value: t } = e.classList,
        n = /respec-hl-\w+/,
        r = n.test(t) && t.match(n)
      return r
        ? r[0]
        : !0 === wl.get('respec-hl-c1')
        ? 'respec-hl-c1'
        : [...wl.keys()].find((e) => wl.get(e)) || 'respec-hl-c1'
    }
    function vl(e, t) {
      e.classList.remove('respec-hl', t),
        e.classList.length || e.removeAttribute('class')
    }
    var kl = Object.freeze({
      __proto__: null,
      name: 'core/highlight-vars',
      run: async function (e) {
        if (!e.highlightVars) return
        const t = document.createElement('style')
        ;(t.textContent = await gl),
          t.classList.add('removeOnSave'),
          document.head.appendChild(t),
          document
            .querySelectorAll('var')
            .forEach((e) => e.addEventListener('click', bl)),
          s('beforesave', (e) => {
            e.querySelectorAll('var.respec-hl').forEach(vl)
          })
      },
    })
    function xl(e) {
      const { id: t } = e,
        n = e.dataset.href || '#' + t,
        r = document.querySelectorAll(`a[href="${n}"]:not(.index-term)`),
        o = 'dfn-panel-for-' + e.id
      return nn`
    <aside class="dfn-panel" id="${o}" hidden>
      <span class="caret"></span>
      <div>
        <a class="self-link" href="${n}">Permalink</a>
        ${(function (e) {
          return e.matches('dfn[data-export]')
            ? nn`<span
    class="marker dfn-exported"
    title="Definition can be referenced by other specifications"
    >exported</span
  >`
            : null
        })(e)} ${(function (e, t) {
        if (!e.hasAttribute('data-idl')) return null
        for (const n of t) {
          if (n.dataset.linkType !== e.dataset.dfnType) continue
          const t = n.closest('pre.idl')
          if (t && t.id) {
            const e = '#' + t.id
            return nn`<a
        href="${e}"
        class="marker idl-block"
        title="Jump to IDL declaration"
        >IDL</a
      >`
          }
        }
        return null
      })(e, r)}
      </div>
      <b>Referenced in:</b>
      ${(function (e, t) {
        if (!t.length)
          return nn`<ul>
      <li>Not referenced in this document.</li>
    </ul>`
        const n = new Map()
        t.forEach((t, r) => {
          const o = t.id || `ref-for-${e}-${r + 1}`
          t.id || (t.id = o)
          const s = (function (e) {
            const t = e.closest('section')
            if (!t) return null
            const n = t.querySelector('h1, h2, h3, h4, h5, h6')
            return n ? bn(n.textContent) : null
          })(t)
          ;(n.get(s) || n.set(s, []).get(s)).push(o)
        })
        const r = ([e, t]) =>
            [{ title: e, id: t[0] }].concat(
              t.slice(1).map((e, t) => ({ title: `(${t + 2})`, id: e }))
            ),
          o = (e) => nn`<li>
    ${r(e).map((e) => nn`<a href="#${e.id}">${e.title}</a>${' '}`)}
  </li>`
        return nn`<ul>
    ${[...n].map(o)}
  </ul>`
      })(t, r)}
    </aside>
  `
    }
    var $l = Object.freeze({
      __proto__: null,
      name: 'core/dfn-panel',
      run: async function () {
        const e = await (async function () {
          try {
            return (
              await Promise.resolve().then(function () {
                return Xl
              })
            ).default
          } catch {
            return qn('dfn-panel.css')
          }
        })()
        document.head.insertBefore(
          nn`<style>
      ${e}
    </style>`,
          document.querySelector('link')
        )
        const t = document.querySelectorAll(
            'dfn[id], #index-defined-elsewhere .index-term'
          ),
          n = document.createDocumentFragment()
        for (const e of t) n.append(xl(e))
        document.body.append(n)
        const r = document.createElement('script')
        ;(r.id = 'respec-dfn-panel'),
          (r.textContent = await (async function () {
            try {
              return (
                await Promise.resolve().then(function () {
                  return Ql
                })
              ).default
            } catch {
              return Fn('./src/core/dfn-panel.runtime.js')
            }
          })()),
          document.body.append(r)
      },
    })
    const _l = (async function () {
      try {
        return (
          await Promise.resolve().then(function () {
            return eu
          })
        ).default
      } catch {
        return qn('datatype.css')
      }
    })()
    var Sl = Object.freeze({
      __proto__: null,
      name: 'core/data-type',
      run: async function (e) {
        if (!e.highlightVars) return
        const t = document.createElement('style')
        ;(t.textContent = await _l), document.head.appendChild(t)
        let n = null
        const r = new Map(),
          o = document.querySelectorAll('section var')
        for (const e of o) {
          const t = e.closest('section')
          if ((n !== t && ((n = t), r.clear()), e.dataset.type)) {
            r.set(e.textContent.trim(), e.dataset.type)
            continue
          }
          const o = r.get(e.textContent.trim())
          o && (e.dataset.type = o)
        }
      },
    })
    const Cl = (async function () {
      try {
        return (
          await Promise.resolve().then(function () {
            return tu
          })
        ).default
      } catch {
        return qn('algorithms.css')
      }
    })()
    var Rl = Object.freeze({
      __proto__: null,
      name: 'core/algorithms',
      run: async function () {
        if (
          (Array.from(document.querySelectorAll('ol.algorithm li'))
            .filter((e) => e.textContent.trim().startsWith('Assert: '))
            .forEach((e) => e.classList.add('assert')),
          document.querySelector('.assert'))
        ) {
          const e = document.createElement('style')
          ;(e.textContent = await Cl), document.head.appendChild(e)
        }
      },
    })
    function El(e, t, n) {
      const r = e.querySelector('.marker .self-link')
      if (!r) {
        n.textContent = n.getAttribute('href')
        return void fn(
          n,
          `Found matching element "${t}", but it has no title or marker.`,
          'Missing title.'
        )
      }
      const o = Nn(r)
      n.append(...o.childNodes), n.classList.add('box-ref')
    }
    function Al(e, t, n) {
      const r = e.querySelector('figcaption')
      if (!r) {
        n.textContent = n.getAttribute('href')
        return void fn(
          n,
          `Found matching figure "${t}", but figure is lacking a \`<figcaption>\`.`,
          'Missing figcaption in referenced figure.'
        )
      }
      const o = [...Nn(r).childNodes].filter(
        (e) => !e.classList || !e.classList.contains('fig-title')
      )
      o.pop(), n.append(...o), n.classList.add('fig-ref')
      const s = r.querySelector('.fig-title')
      !n.hasAttribute('title') && s && (n.title = bn(s.textContent))
    }
    function Tl(e, t, n) {
      const r = e.querySelector('h6, h5, h4, h3, h2')
      if (r) Ll(r, n), Pl(r, n)
      else {
        n.textContent = n.getAttribute('href')
        fn(
          n,
          'Found matching section, but the section was lacking a heading element.',
          `No matching id in document: "${t}".`
        )
      }
    }
    function Ll(e, t) {
      const n = e.querySelector('.self-link'),
        r = [...Nn(e).childNodes].filter(
          (e) => !e.classList || !e.classList.contains('self-link')
        )
      t.append(...r), n && t.prepend('§ '), t.classList.add('sec-ref')
    }
    function Pl(e, t) {
      for (const n of ['dir', 'lang']) {
        if (t.hasAttribute(n)) continue
        const r = e.closest(`[${n}]`)
        if (!r) continue
        const o = t.closest(`[${n}]`)
        ;(o && o.getAttribute(n) === r.getAttribute(n)) ||
          t.setAttribute(n, r.getAttribute(n))
      }
    }
    var Il = Object.freeze({
      __proto__: null,
      name: 'core/anchor-expander',
      run: function () {
        const e = [
          ...document.querySelectorAll(
            "a[href^='#']:not(.self-link):not([href$='the-empty-string'])"
          ),
        ].filter((e) => '' === e.textContent.trim())
        for (const t of e) {
          const e = t.getAttribute('href').slice(1),
            n = document.getElementById(e)
          if (n) {
            switch (n.localName) {
              case 'h6':
              case 'h5':
              case 'h4':
              case 'h3':
              case 'h2':
                Ll(n, t)
                break
              case 'section':
                Tl(n, e, t)
                break
              case 'figure':
                Al(n, e, t)
                break
              case 'aside':
              case 'div':
                El(n, e, t)
                break
              default:
                t.textContent = t.getAttribute('href')
                fn(
                  t,
                  "ReSpec doesn't support expanding this kind of reference.",
                  `Can't expand "#${e}".`
                )
            }
            Pl(n, t), t.normalize()
          } else {
            t.textContent = t.getAttribute('href')
            fn(
              t,
              `Couldn't expand inline reference. The id "${e}" is not in the document.`,
              `No matching id in document: ${e}.`
            )
          }
        }
      },
    })
    const Nl = class extends HTMLElement {
      constructor() {
        super(),
          (this.props = {
            from: this.getAttribute('from'),
            to: this.getAttribute('to') || 'HEAD',
            filter:
              'function' == typeof window[this.getAttribute('filter')]
                ? window[this.getAttribute('filter')]
                : () => !0,
          })
      }
      connectedCallback() {
        const { from: e, to: t, filter: n } = this.props
        nn.bind(this)`
      <ul>
      ${{
        any: Dl(e, t, n)
          .then((e) =>
            (async function (e) {
              const { repoURL: t } = await _o
              return e.map((e) => {
                const [n, r = null] = e.message.split(/\(#(\d+)\)/, 2),
                  o = `${t}commit/${e.hash}`,
                  s =
                    r &&
                    nn` (<a href="${r ? `${t}pull/${r}` : null}">#${r}</a>)`
                return nn`<li><a href="${o}">${n.trim()}</a>${s}</li>`
              })
            })(e)
          )
          .catch((e) => fn(this, e.message, e.message))
          .finally(() => {
            this.dispatchEvent(new CustomEvent('done'))
          }),
        placeholder: 'Loading list of commits...',
      }}
      </ul>
    `
      }
    }
    async function Dl(e, t, n) {
      let r
      try {
        const o = await _o
        if (!o) throw new Error('`respecConfig.github` is not set')
        const s = new URL('commits', `${o.apiBase}/${o.fullName}/`)
        s.searchParams.set('from', e), s.searchParams.set('to', t)
        const i = await fetch(s.href)
        if (!i.ok)
          throw new Error(`Request to ${s} failed with status code ${i.status}`)
        if (((r = await i.json()), !r.length))
          throw new Error(`No commits between ${e}..${t}.`)
        r = r.filter(n)
      } catch (e) {
        const t = 'Error loading commits from GitHub. ' + e.message
        throw (console.error(e), new Error(t))
      }
      return r
    }
    const jl = [
      Object.freeze({ __proto__: null, name: 'rs-changelog', element: Nl }),
    ]
    var Ol = Object.freeze({
      __proto__: null,
      name: 'core/custom-elements/index',
      run: async function () {
        jl.forEach((e) => {
          customElements.define(e.name, e.element)
        })
        const e = jl.map((e) => e.name).join(', '),
          t = [...document.querySelectorAll(e)].map(
            (e) =>
              new Promise((t) => e.addEventListener('done', t, { once: !0 }))
          )
        await Promise.all(t)
      },
    })
    const zl = [
      'color-contrast',
      'landmark-one-main',
      'landmark-unique',
      'region',
    ]
    function Ml(e) {
      const t = []
      for (const n of e.split('\n\n')) {
        const [e, ...r] = n.split(/^\s{2}/m),
          o = r.map((e) => '- ' + e.trimEnd()).join('\n')
        t.push(`${e}${o}`)
      }
      return t.join('\n\n')
    }
    var Wl = Object.freeze({
        __proto__: null,
        name: 'core/a11y',
        run: async function (e) {
          if (!e.a11y) return
          const t = !0 === e.a11y ? {} : e.a11y,
            n = await (async function (e) {
              const { rules: t, ...n } = e,
                r = {
                  rules: {
                    ...Object.fromEntries(zl.map((e) => [e, { enabled: !1 }])),
                    ...t,
                  },
                  ...n,
                  elementRef: !0,
                  resultTypes: ['violations'],
                  reporter: 'v1',
                }
              let s
              try {
                s = await (function () {
                  const e = document.createElement('script')
                  return (
                    e.classList.add('remove'),
                    (e.src = 'https://unpkg.com/axe-core@3/axe.min.js'),
                    document.head.appendChild(e),
                    new Promise((t, n) => {
                      ;(e.onload = () => t(window.axe)), (e.onerror = n)
                    })
                  )
                })()
              } catch (e) {
                return (
                  o(
                    'error',
                    'Failed to load a11y linter. See developer console for details.'
                  ),
                  console.error(e),
                  []
                )
              }
              try {
                return (await s.run(document, r)).violations
              } catch (e) {
                return (
                  o('error', 'Error while looking for a11y issues.'),
                  console.error(e),
                  []
                )
              }
            })(t)
          for (const e of n) {
            const t = new Map()
            for (const n of e.nodes) {
              const { failureSummary: e, element: r } = n
              ;(t.get(e) || t.set(e, []).get(e)).push(r)
            }
            const { id: n, help: r, description: o, helpUrl: s } = e,
              i = `a11y/${n}: ${r}`
            for (const [e, n] of t) {
              pn(n, i, i, {
                details: `\n\n${o}.\n\n${Ml(e)}. ([Learn more](${s}))`,
              })
            }
          }
        },
      }),
      Ul = Object.freeze({
        __proto__: null,
        default:
          '.respec-modal .close-button{position:absolute;z-index:inherit;padding:.2em;font-weight:700;cursor:pointer;margin-left:5px;border:none;background:0 0}\n#respec-ui{position:fixed;display:flex;flex-direction:row-reverse;top:20px;right:20px;width:202px;text-align:right;z-index:9000}\n#respec-pill,.respec-info-button{background:#fff;height:2.5em;color:#787878;border:1px solid #ccc;box-shadow:1px 1px 8px 0 rgba(100,100,100,.5)}\n.respec-info-button{border:none;opacity:.75;border-radius:2em;margin-right:1em;min-width:3.5em}\n.respec-info-button:focus,.respec-info-button:hover{opacity:1;transition:opacity .2s}\n#respec-pill:disabled{font-size:2.8px;text-indent:-9999em;border-top:1.1em solid rgba(40,40,40,.2);border-right:1.1em solid rgba(40,40,40,.2);border-bottom:1.1em solid rgba(40,40,40,.2);border-left:1.1em solid #fff;transform:translateZ(0);animation:respec-spin .5s infinite linear;box-shadow:none}\n#respec-pill:disabled,#respec-pill:disabled:after{border-radius:50%;width:10em;height:10em}\n@keyframes respec-spin{\n0%{transform:rotate(0)}\n100%{transform:rotate(360deg)}\n}\n.respec-hidden{visibility:hidden;opacity:0;transition:visibility 0s .2s,opacity .2s linear}\n.respec-visible{visibility:visible;opacity:1;transition:opacity .2s linear}\n#respec-pill:focus,#respec-pill:hover{color:#000;background-color:#f5f5f5;transition:color .2s}\n#respec-menu{position:absolute;margin:0;padding:0;font-family:sans-serif;background:#fff;box-shadow:1px 1px 8px 0 rgba(100,100,100,.5);width:200px;display:none;text-align:left;margin-top:32px;font-size:.8em}\n#respec-menu:not([hidden]){display:block}\n#respec-menu li{list-style-type:none;margin:0;padding:0}\n.respec-save-buttons{display:grid;grid-template-columns:repeat(auto-fill,minmax(47%,2fr));grid-gap:.5cm;padding:.5cm}\n.respec-save-button:link{padding-top:16px;color:#f0f0f0;background:#2a5aa8;justify-self:stretch;height:1cm;text-decoration:none;text-align:center;font-size:inherit;border:none;border-radius:.2cm}\n.respec-save-button:link:hover{color:#fff;background:#2a5aa8;padding:0;margin:0;border:0;padding-top:16px}\n.respec-save-button:link:focus{background:#193766}\n#respec-pill:focus,#respec-ui button:focus,.respec-option:focus{outline:0;outline-style:none}\n#respec-pill-error{background-color:red;color:#fff}\n#respec-pill-warning{background-color:orange;color:#fff}\n.respec-error-list,.respec-warning-list{margin:0;padding:0;list-style:none;font-family:sans-serif;background-color:#fffbe6;font-size:.85em}\n.respec-error-list>li,.respec-warning-list>li{padding:.4em .7em}\n.respec-warning-list>li::before{content:"⚠️";padding-right:.5em}\n.respec-error-list p,.respec-warning-list p{padding:0;margin:0}\n.respec-warning-list li{color:#5c3b00;border-bottom:thin solid #fff5c2}\n.respec-error-list,.respec-error-list li{background-color:#fff0f0}\n.respec-error-list li::before{content:"💥";padding-right:.5em}\n.respec-error-list li{padding:.4em .7em;color:#5c3b00;border-bottom:thin solid #ffd7d7}\n.respec-error-list li>p{margin:0;padding:0;display:inline-block}\n.respec-error-list li>p:first-child,.respec-warning-list li>p:first-child{display:inline}\n.respec-error-list>li li,.respec-warning-list>li li{margin:0;list-style:disc}\n#respec-overlay{display:block;position:fixed;z-index:10000;top:0;left:0;height:100%;width:100%;background:#000}\n.respec-show-overlay{transition:opacity .2s linear;opacity:.5}\n.respec-hide-overlay{transition:opacity .2s linear;opacity:0}\n.respec-modal{display:block;position:fixed;z-index:11000;margin:auto;top:10%;background:#fff;border:5px solid #666;min-width:20%;width:79%;padding:0;max-height:80%;overflow-y:auto;margin:0 -.5cm}\n@media screen and (min-width:78em){\n.respec-modal{width:62%}\n}\n.respec-modal h3{margin:0;padding:.2em;text-align:center;color:#000;background:linear-gradient(to bottom,#eee 0,#eee 50%,#ccc 100%);font-size:1em}\n.respec-modal .inside div p{padding-left:1cm}\n#respec-menu button.respec-option{background:#fff;padding:0 .2cm;border:none;width:100%;text-align:left;font-size:inherit;padding:1.2em 1.2em}\n#respec-menu button.respec-option:hover,#respec-menu button:focus{background-color:#eee}\n.respec-cmd-icon{padding-right:.5em}\n#respec-ui button.respec-option:last-child{border:none;border-radius:inherit}\n.respec-button-copy-paste{position:absolute;height:28px;width:40px;cursor:pointer;background-image:linear-gradient(#fcfcfc,#eee);border:1px solid #90b8de;border-left:0;border-radius:0 0 3px 0;-webkit-user-select:none;user-select:none;-webkit-appearance:none;top:0;left:127px}\n#specref-ui{margin:0 2%;margin-bottom:.5cm}\n#specref-ui header{font-size:.7em;background-color:#eee;text-align:center;padding:.2cm;margin-bottom:.5cm;border-radius:0 0 .2cm .2cm}\n#specref-ui header h1{padding:0;margin:0;color:#000}\n#specref-ui p{padding:0;margin:0;font-size:.8em;text-align:center}\n#specref-ui p.state{margin:1cm}\n#specref-ui .searchcomponent{font-size:16px;display:grid;grid-template-columns:auto 2cm}\n#specref-ui button,#specref-ui input{border:0;padding:6px 12px}\n#specref-ui label{font-size:.6em;grid-column-end:3;text-align:right;grid-column-start:1}\n#specref-ui input[type=search]{-webkit-appearance:none;font-size:16px;border-radius:.1cm 0 0 .1cm;border:1px solid #ccc}\n#specref-ui button[type=submit]{color:#fff;border-radius:0 .1cm .1cm 0;background-color:#337ab7}\n#specref-ui button[type=submit]:hover{background-color:#286090;border-color:#204d74}\n#specref-ui .result-stats{margin:0;padding:0;color:grey;font-size:.7em;font-weight:700}\n#specref-ui .specref-results{font-size:.8em}\n#specref-ui .specref-results dd+dt{margin-top:.51cm}\n#specref-ui .specref-results a{text-transform:capitalize}\n#specref-ui .specref-results .authors{display:block;color:#006621}\n@media print{\n#respec-ui{display:none}\n}\n#xref-ui{width:100%;min-height:550px;height:100%;overflow:hidden;padding:0;margin:0;border:0}\n#xref-ui:not(.ready){background:url(https://respec.org/xref/loader.gif) no-repeat center}\n#xref-ui+a[href]{font-size:.9rem;float:right;margin:0 .5em .5em;border-bottom-width:1px}',
      }),
      Fl = Object.freeze({
        __proto__: null,
        default:
          '@keyframes pop{\n0%{transform:scale(1,1)}\n25%{transform:scale(1.25,1.25);opacity:.75}\n100%{transform:scale(1,1)}\n}\n.hljs{background:0 0!important}\na abbr,h1 abbr,h2 abbr,h3 abbr,h4 abbr,h5 abbr,h6 abbr{border:none}\ndfn{font-weight:700}\na.internalDFN{color:inherit;border-bottom:1px solid #99c;text-decoration:none}\na.externalDFN{color:inherit;border-bottom:1px dotted #ccc;text-decoration:none}\na.bibref{text-decoration:none}\n.respec-offending-element:target{animation:pop .25s ease-in-out 0s 1}\n.respec-offending-element,a[href].respec-offending-element{text-decoration:red wavy underline}\n@supports not (text-decoration:red wavy underline){\n.respec-offending-element:not(pre){display:inline-block}\n.respec-offending-element{background:url(data:image/gif;base64,R0lGODdhBAADAPEAANv///8AAP///wAAACwAAAAABAADAEACBZQjmIAFADs=) bottom repeat-x}\n}\n#references :target{background:#eaf3ff;animation:pop .4s ease-in-out 0s 1}\ncite .bibref{font-style:normal}\ncode{color:#c63501}\nth code{color:inherit}\na[href].orcid{padding-left:4px;padding-right:4px}\na[href].orcid>svg{margin-bottom:-2px}\n.toc a,.tof a{text-decoration:none}\na .figno,a .secno{color:#000}\nol.tof,ul.tof{list-style:none outside none}\n.caption{margin-top:.5em;font-style:italic}\ntable.simple{border-spacing:0;border-collapse:collapse;border-bottom:3px solid #005a9c}\n.simple th{background:#005a9c;color:#fff;padding:3px 5px;text-align:left}\n.simple th a{color:#fff;padding:3px 5px;text-align:left}\n.simple th[scope=row]{background:inherit;color:inherit;border-top:1px solid #ddd}\n.simple td{padding:3px 10px;border-top:1px solid #ddd}\n.simple tr:nth-child(even){background:#f0f6ff}\n.section dd>p:first-child{margin-top:0}\n.section dd>p:last-child{margin-bottom:0}\n.section dd{margin-bottom:1em}\n.section dl.attrs dd,.section dl.eldef dd{margin-bottom:0}\n#issue-summary>ul{column-count:2}\n#issue-summary li{list-style:none;display:inline-block}\ndetails.respec-tests-details{margin-left:1em;display:inline-block;vertical-align:top}\ndetails.respec-tests-details>*{padding-right:2em}\ndetails.respec-tests-details[open]{z-index:999999;position:absolute;border:thin solid #cad3e2;border-radius:.3em;background-color:#fff;padding-bottom:.5em}\ndetails.respec-tests-details[open]>summary{border-bottom:thin solid #cad3e2;padding-left:1em;margin-bottom:1em;line-height:2em}\ndetails.respec-tests-details>ul{width:100%;margin-top:-.3em}\ndetails.respec-tests-details>li{padding-left:1em}\na[href].self-link:hover{opacity:1;text-decoration:none;background-color:transparent}\nh2,h3,h4,h5,h6{position:relative}\naside.example .marker>a.self-link{color:inherit}\nh2>a.self-link,h3>a.self-link,h4>a.self-link,h5>a.self-link,h6>a.self-link{border:none;color:inherit;font-size:83%;height:2em;left:-1.6em;opacity:.5;position:absolute;text-align:center;text-decoration:none;top:0;transition:opacity .2s;width:2em}\nh2>a.self-link::before,h3>a.self-link::before,h4>a.self-link::before,h5>a.self-link::before,h6>a.self-link::before{content:"§";display:block}\n@media (max-width:767px){\ndd{margin-left:0}\nh2>a.self-link,h3>a.self-link,h4>a.self-link,h5>a.self-link,h6>a.self-link{left:auto;top:auto}\n}\n@media print{\n.removeOnSave{display:none}\n}',
      }),
      ql = Object.freeze({
        __proto__: null,
        default:
          'span.example-title{text-transform:none}\naside.example,div.example,div.illegal-example{padding:.5em;margin:1em 0;position:relative;clear:both}\ndiv.illegal-example{color:red}\ndiv.illegal-example p{color:#000}\naside.example,div.example{padding:.5em;border-left-width:.5em;border-left-style:solid;border-color:#e0cb52;background:#fcfaee}\naside.example div.example{border-left-width:.1em;border-color:#999;background:#fff}\naside.example div.example span.example-title{color:#999}',
      }),
      Bl = Object.freeze({
        __proto__: null,
        default:
          '.issue-label{text-transform:initial}\n.warning>p:first-child{margin-top:0}\n.warning{padding:.5em;border-left-width:.5em;border-left-style:solid}\nspan.warning{padding:.1em .5em .15em}\n.issue.closed span.issue-number{text-decoration:line-through}\n.warning{border-color:#f11;border-width:.2em;border-style:solid;background:#fbe9e9}\n.warning-title:before{content:"⚠";font-size:1.3em;float:left;padding-right:.3em;margin-top:-.3em}\nli.task-list-item{list-style:none}\ninput.task-list-item-checkbox{margin:0 .35em .25em -1.6em;vertical-align:middle}\n.issue a.respec-gh-label{padding:5px;margin:0 2px 0 2px;font-size:10px;text-transform:none;text-decoration:none;font-weight:700;border-radius:4px;position:relative;bottom:2px;border:none;display:inline-block}',
      }),
      Hl = Object.freeze({
        __proto__: null,
        default:
          'pre.idl{padding:1em;position:relative}\n@media print{\npre.idl{white-space:pre-wrap}\n}\n.idlHeader{display:block;width:150px;background:#8ccbf2;color:#fff;font-family:sans-serif;font-weight:700;margin:-1em 0 1em -1em;height:28px;line-height:28px}\n.idlHeader a.self-link{margin-left:.3cm;text-decoration:none;border-bottom:none}\n.idlID{font-weight:700;color:#005a9c}\n.idlType{color:#005a9c}\n.idlName{color:#ff4500}\n.idlName a{color:#ff4500;border-bottom:1px dotted #ff4500;text-decoration:none}\na.idlEnumItem{color:#000;border-bottom:1px dotted #ccc;text-decoration:none}\n.idlSuperclass{font-style:italic;color:#005a9c}\n.idlDefaultValue,.idlParamName{font-style:italic}\n.extAttr{color:#666}\n.idlSectionComment{color:gray}\n.idlIncludes a{font-weight:700}\n.respec-button-copy-paste:focus{text-decoration:none;border-color:#51a7e8;outline:0;box-shadow:0 0 5px rgba(81,167,232,.5)}\n.respec-button-copy-paste.selected:focus,.respec-button-copy-paste:focus:hover{border-color:#51a7e8}\n.respec-button-copy-paste.zeroclipboard-is-active,.respec-button-copy-paste.zeroclipboard-is-hover,.respec-button-copy-paste:active,.respec-button-copy-paste:hover{text-decoration:none;background-color:#ddd;background-image:linear-gradient(#eee,#ddd);border-color:#ccc}\n.respec-button-copy-paste.selected,.respec-button-copy-paste.zeroclipboard-is-active,.respec-button-copy-paste:active{background-color:#dcdcdc;background-image:none;border-color:#b5b5b5;box-shadow:inset 0 2px 4px rgba(0,0,0,.15)}\n.respec-button-copy-paste.selected:hover{background-color:#cfcfcf}\n.respec-button-copy-paste.disabled,.respec-button-copy-paste.disabled:hover,.respec-button-copy-paste:disabled,.respec-button-copy-paste:disabled:hover{color:rgba(102,102,102,.5);cursor:default;background-color:rgba(229,229,229,.5);background-image:none;border-color:rgba(197,197,197,.5);box-shadow:none}\n@media print{\n.respec-button-copy-paste{visibility:hidden}\n}',
      }),
      Gl = Object.freeze({
        __proto__: null,
        default:
          'ul.index{columns:30ch;column-gap:1.5em}\nul.index li{list-style:inherit}\nul.index li span{color:inherit;cursor:pointer;white-space:normal}\n#index-defined-here ul.index li{font-size:.9rem}\nul.index code{color:inherit}\n#index-defined-here .print-only{display:none}\n@media print{\n#index-defined-here .print-only{display:initial}\n}',
      }),
      Vl = Object.freeze({
        __proto__: null,
        default:
          '.caniuse-stats{display:flex;flex-wrap:wrap;justify-content:flex-start;align-items:baseline;cursor:pointer}\nbutton.caniuse-cell{margin:1px 1px 0 0;border:none}\n.caniuse-browser{position:relative}\n@media print{\n.caniuse-cell.y::before{content:"✔️";padding:.5em}\n.caniuse-cell.n::before{content:"❌";padding:.5em}\n.caniuse-cell.a::before,.caniuse-cell.d::before,.caniuse-cell.p::before,.caniuse-cell.x::before{content:"⚠️";padding:.5em}\n}\n.caniuse-browser ul{display:none;margin:0;padding:0;list-style:none;position:absolute;left:0;z-index:2;background:#fff;margin-top:1px}\n.caniuse-stats a{white-space:nowrap;align-self:center;margin-left:.5em}\n.caniuse-cell{display:flex;color:rgba(0,0,0,.8);font-size:90%;height:.8cm;margin-right:1px;margin-top:0;min-width:3cm;overflow:visible;justify-content:center;align-items:center}\nli.caniuse-cell{margin-bottom:1px}\n.caniuse-cell:focus{outline:0}\n.caniuse-cell:hover{color:#000}\n.caniuse-cell.y{background:#8bc34a}\n.caniuse-cell.n{background:#e53935}\n.caniuse-cell.a,.caniuse-cell.d,.caniuse-cell.p,.caniuse-cell.x{background:#ffc107}\n.caniuse-stats .caniuse-browser:hover>ul,.caniuse-stats button:focus+ul{display:block}',
      }),
      Zl = Object.freeze({
        __proto__: null,
        default:
          '.mdn{font-size:.75em;position:absolute;right:.3em;min-width:0;margin-top:3em}\n.mdn details{width:100%;margin:1px 0;position:relative;z-index:10;box-sizing:border-box;padding:.4em;padding-top:0}\n.mdn details[open]{min-width:25ch;max-width:32ch;background:#fff;box-shadow:0 1em 3em -.4em rgba(0,0,0,.3),0 0 1px 1px rgba(0,0,0,.05);border-radius:2px;z-index:11;margin-bottom:.4em}\n.mdn summary{text-align:right;cursor:default;margin-right:-.4em}\n.mdn summary span{font-family:zillaslab,Palatino,"Palatino Linotype",serif;color:#fff;background-color:#000;display:inline-block;padding:3px}\n.mdn a{display:inline-block;word-break:break-all}\n.mdn p{margin:0}\n.mdn .engines-all{color:#058b00}\n.mdn .engines-some{color:#b00}\n.mdn table{width:100%;font-size:.9em}\n.mdn td{border:none}\n.mdn td:nth-child(2){text-align:right}\n.mdn .nosupportdata{font-style:italic;margin:0}\n.mdn tr::before{content:"";display:table-cell;width:1.5em;height:1.5em;background:no-repeat center center/contain;font-size:.75em}\n.mdn .no,.mdn .unknown{color:#ccc;filter:grayscale(100%)}\n.mdn .no::before,.mdn .unknown::before{opacity:.5}\n.mdn .chrome::before,.mdn .chrome_android::before{background-image:url(https://resources.whatwg.org/browser-logos/chrome.svg)}\n.mdn .edge::before,.mdn .edge_mobile::before{background-image:url(https://resources.whatwg.org/browser-logos/edge.svg)}\n.mdn .firefox::before,.mdn .firefox_android::before{background-image:url(https://resources.whatwg.org/browser-logos/firefox.png)}\n.mdn .ie::before{background-image:url(https://resources.whatwg.org/browser-logos/ie.png)}\n.mdn .opera::before,.mdn .opera_android::before{background-image:url(https://resources.whatwg.org/browser-logos/opera.svg)}\n.mdn .safari::before{background-image:url(https://resources.whatwg.org/browser-logos/safari.png)}\n.mdn .safari_ios::before{background-image:url(https://resources.whatwg.org/browser-logos/safari-ios.svg)}\n.mdn .samsunginternet_android::before{background-image:url(https://resources.whatwg.org/browser-logos/samsung.svg)}\n.mdn .webview_android::before{background-image:url(https://resources.whatwg.org/browser-logos/android-webview.png)}',
      }),
      Yl = Object.freeze({
        __proto__: null,
        default:
          '// ReSpec Worker v1.0.0\n"use strict";\ntry {\n  importScripts("https://www.w3.org/Tools/respec/respec-highlight");\n} catch (err) {\n  console.error("Network error loading highlighter", err);\n}\n\nself.addEventListener("message", ({ data: originalData }) => {\n  const data = Object.assign({}, originalData);\n  switch (data.action) {\n    case "highlight-load-lang": {\n      const { langURL, propName, lang } = data;\n      importScripts(langURL);\n      self.hljs.registerLanguage(lang, self[propName]);\n      break;\n    }\n    case "highlight": {\n      const { code } = data;\n      const langs = data.languages.length ? data.languages : undefined;\n      try {\n        const { value, language } = self.hljs.highlightAuto(code, langs);\n        Object.assign(data, { value, language });\n      } catch (err) {\n        console.error("Could not transform some code?", err);\n        // Post back the original code\n        Object.assign(data, { value: code, language: "" });\n      }\n      break;\n    }\n  }\n  self.postMessage(data);\n});\n',
      }),
      Kl = Object.freeze({
        __proto__: null,
        default:
          '.hljs{display:block;overflow-x:auto;padding:.5em;color:#383a42;background:#fafafa}\n.hljs-comment,.hljs-quote{color:#717277;font-style:italic}\n.hljs-doctag,.hljs-formula,.hljs-keyword{color:#a626a4}\n.hljs-deletion,.hljs-name,.hljs-section,.hljs-selector-tag,.hljs-subst{color:#ca4706;font-weight:700}\n.hljs-literal{color:#0b76c5}\n.hljs-addition,.hljs-attribute,.hljs-meta-string,.hljs-regexp,.hljs-string{color:#42803c}\n.hljs-built_in,.hljs-class .hljs-title{color:#9a6a01}\n.hljs-attr,.hljs-number,.hljs-selector-attr,.hljs-selector-class,.hljs-selector-pseudo,.hljs-template-variable,.hljs-type,.hljs-variable{color:#986801}\n.hljs-bullet,.hljs-link,.hljs-meta,.hljs-selector-id,.hljs-symbol,.hljs-title{color:#336ae3}\n.hljs-emphasis{font-style:italic}\n.hljs-strong{font-weight:700}\n.hljs-link{text-decoration:underline}',
      }),
      Jl = Object.freeze({
        __proto__: null,
        default:
          'var:hover{text-decoration:underline;cursor:pointer}\nvar.respec-hl{color:var(--color,#000);background-color:var(--bg-color);box-shadow:0 0 0 2px var(--bg-color)}\nvar.respec-hl-c1{--bg-color:#f4d200}\nvar.respec-hl-c2{--bg-color:#ff87a2}\nvar.respec-hl-c3{--bg-color:#96e885}\nvar.respec-hl-c4{--bg-color:#3eeed2}\nvar.respec-hl-c5{--bg-color:#eacfb6}\nvar.respec-hl-c6{--bg-color:#82ddff}\nvar.respec-hl-c7{--bg-color:#ffbcf2}\n@media print{\nvar.respec-hl{background:0 0;color:#000;box-shadow:unset}\n}',
      }),
      Xl = Object.freeze({
        __proto__: null,
        default:
          'dfn{cursor:pointer}\n.dfn-panel{position:absolute;z-index:35;min-width:300px;max-width:500px;padding:.5em .75em;margin-top:.6em;font:small Helvetica Neue,sans-serif,Droid Sans Fallback;background:#fff;color:#000;box-shadow:0 1em 3em -.4em rgba(0,0,0,.3),0 0 1px 1px rgba(0,0,0,.05);border-radius:2px}\n.dfn-panel:not(.docked)>.caret{position:absolute;top:-9px}\n.dfn-panel:not(.docked)>.caret::after,.dfn-panel:not(.docked)>.caret::before{content:"";position:absolute;border:10px solid transparent;border-top:0;border-bottom:10px solid #fff;top:0}\n.dfn-panel:not(.docked)>.caret::before{border-bottom:9px solid #a2a9b1}\n.dfn-panel *{margin:0}\n.dfn-panel b{display:block;color:#000;margin-top:.25em}\n.dfn-panel ul a[href]{color:#333}\n.dfn-panel>div{display:flex}\n.dfn-panel a.self-link{font-weight:700;margin-right:auto}\n.dfn-panel .marker{padding:.1em;margin-left:.5em;border-radius:.2em;text-align:center;white-space:nowrap;font-size:90%;color:#040b1c}\n.dfn-panel .marker.dfn-exported{background:#d1edfd;box-shadow:0 0 0 .125em #1ca5f940}\n.dfn-panel .marker.idl-block{background:#8ccbf2;box-shadow:0 0 0 .125em #0670b161}\n.dfn-panel a:not(:hover){text-decoration:none!important;border-bottom:none!important}\n.dfn-panel a[href]:hover{border-bottom-width:1px}\n.dfn-panel ul{padding:0}\n.dfn-panel li{margin-left:1em}\n.dfn-panel.docked{position:fixed;left:.5em;top:unset;bottom:2em;margin:0 auto;max-width:calc(100vw - .75em * 2 - .5em - .2em * 2);max-height:30vh;overflow:auto}',
      }),
      Ql = Object.freeze({
        __proto__: null,
        default:
          '(() => {\n// @ts-check\nif (document.respec) {\n  document.respec.ready.then(dfnPanel);\n} else {\n  dfnPanel();\n}\n\nfunction dfnPanel() {\n  /** @type {HTMLElement} */\n  let panel;\n  document.body.addEventListener("click", event => {\n    if (!(event.target instanceof HTMLElement)) return;\n\n    /** @type {HTMLElement} */\n    const el = event.target;\n\n    const action = deriveAction(el);\n    switch (action) {\n      case "show": {\n        if (panel) hidePanel(panel);\n        /** @type {HTMLElement} */\n        const dfn = el.closest("dfn, .index-term");\n        panel = document.getElementById(`dfn-panel-for-${dfn.id}`);\n        displayPanel(dfn, panel, { x: event.clientX, y: event.clientY });\n        break;\n      }\n      case "dock": {\n        panel.style.left = null;\n        panel.style.top = null;\n        panel.classList.add("docked");\n        break;\n      }\n      case "hide": {\n        hidePanel(panel);\n        break;\n      }\n    }\n  });\n}\n\n/** @param {HTMLElement} clickTarget */\nfunction deriveAction(clickTarget) {\n  const hitALink = !!clickTarget.closest("a");\n  if (clickTarget.closest("dfn, .index-term")) {\n    return hitALink ? null : "show";\n  }\n  if (clickTarget.closest(".dfn-panel")) {\n    if (hitALink) {\n      const clickedSelfLink = clickTarget.classList.contains("self-link");\n      return clickedSelfLink ? "hide" : "dock";\n    }\n    const panel = clickTarget.closest(".dfn-panel");\n    return panel.classList.contains("docked") ? "hide" : null;\n  }\n  if (document.querySelector(".dfn-panel:not([hidden])")) {\n    return "hide";\n  }\n  return null;\n}\n\n/**\n * @param {HTMLElement} dfn\n * @param {HTMLElement} panel\n * @param {{ x: number, y: number }} clickPosition\n */\nfunction displayPanel(dfn, panel, { x, y }) {\n  panel.hidden = false;\n  // distance (px) between edge of panel and the pointing triangle (caret)\n  const MARGIN = 20;\n\n  const dfnRects = dfn.getClientRects();\n  // Find the `top` offset when the `dfn` can be spread across multiple lines\n  let closestTop = 0;\n  let minDiff = Infinity;\n  for (const rect of dfnRects) {\n    const { top, bottom } = rect;\n    const diffFromClickY = Math.abs((top + bottom) / 2 - y);\n    if (diffFromClickY < minDiff) {\n      minDiff = diffFromClickY;\n      closestTop = top;\n    }\n  }\n\n  const top = window.scrollY + closestTop + dfnRects[0].height;\n  const left = x - MARGIN;\n  panel.style.left = `${left}px`;\n  panel.style.top = `${top}px`;\n\n  // Find if the panel is flowing out of the window\n  const panelRect = panel.getBoundingClientRect();\n  const SCREEN_WIDTH = Math.min(window.innerWidth, window.screen.width);\n  if (panelRect.right > SCREEN_WIDTH) {\n    const newLeft = Math.max(MARGIN, x + MARGIN - panelRect.width);\n    const newCaretOffset = left - newLeft;\n    panel.style.left = `${newLeft}px`;\n    /** @type {HTMLElement} */\n    const caret = panel.querySelector(".caret");\n    caret.style.left = `${newCaretOffset}px`;\n  }\n}\n\n/** @param {HTMLElement} panel */\nfunction hidePanel(panel) {\n  panel.hidden = true;\n  panel.classList.remove("docked");\n}\n})()',
      }),
      eu = Object.freeze({
        __proto__: null,
        default:
          'var{position:relative;cursor:pointer}\nvar[data-type]::after,var[data-type]::before{position:absolute;left:50%;top:-6px;opacity:0;transition:opacity .4s;pointer-events:none}\nvar[data-type]::before{content:"";transform:translateX(-50%);border-width:4px 6px 0 6px;border-style:solid;border-color:transparent;border-top-color:#000}\nvar[data-type]::after{content:attr(data-type);transform:translateX(-50%) translateY(-100%);background:#000;text-align:center;font-family:"Dank Mono","Fira Code",monospace;font-style:normal;padding:6px;border-radius:3px;color:#daca88;text-indent:0;font-weight:400}\nvar[data-type]:hover::after,var[data-type]:hover::before{opacity:1}',
      }),
      tu = Object.freeze({
        __proto__: null,
        default:
          '.assert{background:#eee;border-left:.5em solid #aaa;padding:.3em}',
      })
  })()
//# sourceMappingURL=respec-w3c.js.map
