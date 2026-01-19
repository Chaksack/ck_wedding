import { _ as __nuxt_component_0$1 } from './nuxt-link-DgEGXTyY.mjs';
import { mergeProps, defineComponent, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderAttr, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _imports_0 } from './virtual_public-DOrwMHa-.mjs';
import { _ as _export_sfc } from './server.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'vue-router';

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "SiteHeader",
  __ssrInlineRender: true,
  setup(__props) {
    const links = [
      { label: "ABOUT", to: { path: "/", hash: "#about" } },
      { label: "PROGRAM", to: { path: "/", hash: "#program" } },
      { label: "FAQ", to: { path: "/", hash: "#faq" } }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "header" }, _attrs))} data-v-27464352><div class="container bar" data-v-27464352>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "brand",
        to: "/",
        "aria-label": "Home"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img class="logo"${ssrRenderAttr("src", _imports_0)} alt="CK logo" width="34" height="34" data-v-27464352${_scopeId}><span class="brandText" data-v-27464352${_scopeId}>CHAK &amp; KEZIAH</span>`);
          } else {
            return [
              createVNode("img", {
                class: "logo",
                src: _imports_0,
                alt: "CK logo",
                width: "34",
                height: "34"
              }),
              createVNode("span", { class: "brandText" }, "CHAK & KEZIAH")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<nav class="nav" aria-label="Primary" data-v-27464352><!--[-->`);
      ssrRenderList(links, (l) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: l.label,
          class: "navLink",
          to: l.to
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(l.label)}`);
            } else {
              return [
                createTextVNode(toDisplayString(l.label), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></nav>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "btn rsvp",
        to: "/rsvp"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` RSVP <span class="arrow" aria-hidden="true" data-v-27464352${_scopeId}>↗</span>`);
          } else {
            return [
              createTextVNode(" RSVP "),
              createVNode("span", {
                class: "arrow",
                "aria-hidden": "true"
              }, "↗")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></header>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SiteHeader.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$2, [["__scopeId", "data-v-27464352"]]), { __name: "SiteHeader" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SiteFooter",
  __ssrInlineRender: true,
  setup(__props) {
    const links = [
      { label: "ABOUT", to: { path: "/", hash: "#about" } },
      { label: "PROGRAM", to: { path: "/", hash: "#program" } },
      { label: "FAQ", to: { path: "/", hash: "#faq" } },
      { label: "RSVP", to: "/rsvp" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "footer" }, _attrs))} data-v-8dfb3109><div class="container inner" data-v-8dfb3109><div class="brand" data-v-8dfb3109><img class="logo"${ssrRenderAttr("src", _imports_0)} alt="NS logo" width="72" height="72" data-v-8dfb3109><div class="title" data-v-8dfb3109>Chak &amp; Keziah</div><p class="copy" data-v-8dfb3109> We are so excited to celebrate our love with you! Now, we’re stepping into our next chapter, hand in hand, with hearts full of gratitude for the love that surrounds us. </p></div><nav class="nav" aria-label="Footer" data-v-8dfb3109><!--[-->`);
      ssrRenderList(links, (l) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: l.label,
          class: "navLink",
          to: l.to
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(l.label)}`);
            } else {
              return [
                createTextVNode(toDisplayString(l.label), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></nav></div></footer>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SiteFooter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["__scopeId", "data-v-8dfb3109"]]), { __name: "SiteFooter" });
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_SiteHeader = __nuxt_component_0;
  const _component_SiteFooter = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "layout" }, _attrs))} data-v-cae778a6>`);
  _push(ssrRenderComponent(_component_SiteHeader, null, null, _parent));
  _push(`<main data-v-cae778a6>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</main>`);
  _push(ssrRenderComponent(_component_SiteFooter, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-cae778a6"]]);

export { _default as default };
//# sourceMappingURL=default-CefC-z3B.mjs.map
