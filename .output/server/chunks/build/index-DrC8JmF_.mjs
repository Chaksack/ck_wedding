import { defineComponent, mergeProps, computed, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { _ as _export_sfc } from './server.mjs';
import { _ as _imports_0$1 } from './virtual_public-DOrwMHa-.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-DgEGXTyY.mjs';
import { u as useHead } from './composables-Dnzn258N.mjs';
import 'vue-bundle-renderer/runtime';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'vue-router';

const _imports_0 = publicAssetsURL("/images/hero.png");
const _sfc_main$6 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "hero" }, _attrs))} data-v-142761aa><div class="container" data-v-142761aa><div class="inner" data-v-142761aa><h1 class="title" data-v-142761aa>CHAK &amp; KEZIAH</h1><div class="meta" aria-label="Location and date" data-v-142761aa><span class="metaText" data-v-142761aa>ACCRA - GHANA</span><span class="rule" aria-hidden="true" data-v-142761aa></span><span class="icon" aria-hidden="true" data-v-142761aa><svg viewBox="0 0 24 24" width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-142761aa><path d="M12 22a2.2 2.2 0 0 0 2.2-2.2H9.8A2.2 2.2 0 0 0 12 22Z" fill="currentColor" opacity=".9" data-v-142761aa></path><path d="M18 16.7H6c1.2-1.2 1.9-2.7 1.9-4.5V9.5a4.1 4.1 0 0 1 3.1-4V4.2a1 1 0 1 1 2 0v1.3a4.1 4.1 0 0 1 3.1 4v2.7c0 1.8.7 3.3 1.9 4.5Z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" data-v-142761aa></path></svg></span><span class="metaText" data-v-142761aa>SATURDAY, AUGUST 8TH</span></div></div></div><div class="media" data-v-142761aa><img class="heroImg"${ssrRenderAttr("src", _imports_0)} alt="A bride and groom hold hands tenderly." width="1600" height="760" loading="eager" data-v-142761aa></div></section>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SectionHero.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-142761aa"]]), { __name: "SectionHero" });
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "SectionThanks",
  __ssrInlineRender: true,
  setup(__props) {
    const images = [
      { src: "/images/hero.png", alt: "Wedding photo" },
      { src: "/images/rsvp.jpg", alt: "Wedding photo" },
      { src: "/images/hero.png", alt: "Wedding photo" },
      { src: "/images/rsvp.jpg", alt: "Wedding photo" }
    ];
    const trackImages = computed(() => [...images, ...images]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section thanks" }, _attrs))} data-v-cdd16371><div class="container" data-v-cdd16371><div class="content" data-v-cdd16371><img class="monogram"${ssrRenderAttr("src", _imports_0$1)} alt="NS monogram" loading="lazy" data-v-cdd16371><p class="message" data-v-cdd16371> We are thrilled to have you on our special day,<br data-v-cdd16371> and we are honoured that you have travelled to be here with us. </p><div class="signature" data-v-cdd16371><div class="withLove" data-v-cdd16371>with love,</div><div class="names" data-v-cdd16371>Chak &amp; Keziah</div></div></div></div><div class="gallery" aria-label="Gallery" data-v-cdd16371><div class="viewport" data-v-cdd16371><div class="track" role="list" data-v-cdd16371><!--[-->`);
      ssrRenderList(trackImages.value, (img, idx) => {
        _push(`<figure class="tile" role="listitem"${ssrRenderAttr("aria-hidden", idx >= images.length)} data-v-cdd16371><img${ssrRenderAttr("src", img.src)}${ssrRenderAttr("alt", idx < images.length ? img.alt : "")} loading="lazy" data-v-cdd16371></figure>`);
      });
      _push(`<!--]--></div></div></div></section>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SectionThanks.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$5, [["__scopeId", "data-v-cdd16371"]]), { __name: "SectionThanks" });
const _sfc_main$4 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({
    id: "about",
    class: "section"
  }, _attrs))} data-v-ebcc79c9><div class="container" data-v-ebcc79c9><div class="top" data-v-ebcc79c9><p class="line left" data-v-ebcc79c9>We met by chance.</p><p class="line center" data-v-ebcc79c9>We stayed by choice.</p><p class="line right" data-v-ebcc79c9>We love for life.</p></div><div class="content" data-v-ebcc79c9><div class="text" data-v-ebcc79c9><p data-v-ebcc79c9> Noah and Sabrina met on a spontaneous backpacking trip in Barcelona, and life’s been a joyful adventure ever since. From hunting down new foods and hiking trails, to getting delightfully lost in a tiny Gothic Quarter bookshop, we’ve always known we were a perfect match. </p><p data-v-ebcc79c9> Noah popped the question under the magical glow of Montjuïc’s fountain with a surprise picnic and serenade. </p><p data-v-ebcc79c9> Now, we’re excited to celebrate this new chapter with all of you! </p></div><figure class="media" aria-label="A photo of the couple" data-v-ebcc79c9><img class="photo"${ssrRenderAttr("src", _imports_0)} alt="" loading="lazy" decoding="async" data-v-ebcc79c9></figure></div></div></section>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SectionAbout.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-ebcc79c9"]]), { __name: "SectionAbout" });
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "SectionProgram",
  __ssrInlineRender: true,
  setup(__props) {
    const items = [
      {
        title: "Pre-Wedding Gathering",
        description: "Before the wedding begins, we would love to welcome our guests to a relaxed night together in the city. It is a wonderful chance to catch up, and enjoy Barcelona’s atmosphere.",
        date: "Friday, September 26, 2026",
        time: "7:00 PM - 10:00 PM",
        location: "Bar del Pla in El Born",
        dressCode: "Smart Casual",
        imageSrc: "/images/rsvp.jpg",
        imageAlt: "Outdoor dinner setting"
      },
      {
        title: "Wedding Celebrations",
        description: "Our celebration takes place at Castell de Sant Marçal, a historic 11th-century castle with gardens, a lake, and architecture that blend grandeur with elegance.",
        date: "Saturday, September 27, 2026",
        time: "4:00 PM (Ceremony start time)",
        location: "Castell de Sant Marçal",
        dressCode: "Semi-Formal / Cocktail Attire",
        imageSrc: "/images/hero.png",
        imageAlt: "Wedding ceremony setting"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "program",
        class: "section"
      }, _attrs))} data-v-282aa7ba><div class="container" data-v-282aa7ba><div class="head" data-v-282aa7ba><h2 class="sectionTitle" data-v-282aa7ba>Wedding Program</h2></div><div class="stack" data-v-282aa7ba><!--[-->`);
      ssrRenderList(items, (item, idx) => {
        _push(`<article class="${ssrRenderClass([{ reverse: idx % 2 === 1 }, "programCard"])}" data-v-282aa7ba><div class="panel" data-v-282aa7ba><h3 class="cardTitle" data-v-282aa7ba>${ssrInterpolate(item.title)}</h3><p class="cardDesc" data-v-282aa7ba>${ssrInterpolate(item.description)}</p><div class="divider" data-v-282aa7ba></div><dl class="details" data-v-282aa7ba><div class="detailRow" data-v-282aa7ba><dt data-v-282aa7ba>Date</dt><dd data-v-282aa7ba>${ssrInterpolate(item.date)}</dd></div><div class="detailRow" data-v-282aa7ba><dt data-v-282aa7ba>Time</dt><dd data-v-282aa7ba>${ssrInterpolate(item.time)}</dd></div><div class="detailRow" data-v-282aa7ba><dt data-v-282aa7ba>Location</dt><dd data-v-282aa7ba>${ssrInterpolate(item.location)}</dd></div><div class="detailRow" data-v-282aa7ba><dt data-v-282aa7ba>Dress Code</dt><dd data-v-282aa7ba>${ssrInterpolate(item.dressCode)}</dd></div></dl></div><div class="media" data-v-282aa7ba><img class="photo"${ssrRenderAttr("src", item.imageSrc)}${ssrRenderAttr("alt", item.imageAlt)} loading="lazy" decoding="async" data-v-282aa7ba></div></article>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SectionProgram.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$3, [["__scopeId", "data-v-282aa7ba"]]), { __name: "SectionProgram" });
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "SectionFaq",
  __ssrInlineRender: true,
  setup(__props) {
    const items = [
      {
        q: "Can we take photos during the wedding?",
        a: "Yes—please feel free to take photos. We’d love it if you shared your favorites with us after the weekend."
      },
      {
        q: "Can I bring my children to the wedding?",
        a: "To help everyone fully enjoy the celebration, the ceremony and reception will be adults-only. Children are welcome to join us for the Farewell Brunch."
      },
      {
        q: "How can we honor you with a gift?",
        a: "Your presence is the greatest gift. If you’d still like to give something, a honeymoon contribution is sincerely appreciated."
      },
      {
        q: "What if I have dietary restrictions or allergies?",
        a: "Please note any allergies or dietary restrictions in your RSVP. We will do our best to accommodate."
      },
      {
        q: "Do I need to bring a physical invitation?",
        a: "No—your name will be on our guest list. If you have questions about your invite, reach out and we’ll confirm details."
      },
      {
        q: "Who should I reach out to if I need support?",
        a: "Send us a note through the RSVP page and we’ll get back to you as soon as possible."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "faq",
        class: "section"
      }, _attrs))} data-v-ac533479><div class="container" data-v-ac533479><div class="head" data-v-ac533479><div class="kicker" data-v-ac533479>FAQ</div><h2 class="title" data-v-ac533479>Everything you need to know</h2></div><div class="list" data-v-ac533479><!--[-->`);
      ssrRenderList(items, (item) => {
        _push(`<details class="item" data-v-ac533479><summary class="summary" data-v-ac533479><span class="question" data-v-ac533479>${ssrInterpolate(item.q)}</span><span class="plus" aria-hidden="true" data-v-ac533479></span></summary><div class="answer" data-v-ac533479>${ssrInterpolate(item.a)}</div></details>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SectionFaq.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$2, [["__scopeId", "data-v-ac533479"]]), { __name: "SectionFaq" });
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "section" }, _attrs))} data-v-35c3cdf1><div class="container" data-v-35c3cdf1><div class="wrap" data-v-35c3cdf1><h2 class="headline" data-v-35c3cdf1> Your presence would mean the world to<br data-v-35c3cdf1> us on our big day. </h2><p class="copy" data-v-35c3cdf1>Kindly reply by <span class="date" data-v-35c3cdf1>AUGUST 8th, 2026</span>.</p>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "cta",
    to: "/rsvp"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span data-v-35c3cdf1${_scopeId}>RSVP</span><span class="arrow" aria-hidden="true" data-v-35c3cdf1${_scopeId}>↗</span>`);
      } else {
        return [
          createVNode("span", null, "RSVP"),
          createVNode("span", {
            class: "arrow",
            "aria-hidden": "true"
          }, "↗")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SectionRsvpCta.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-35c3cdf1"]]), { __name: "SectionRsvpCta" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Chak & Kez"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SectionHero = __nuxt_component_0;
      const _component_SectionThanks = __nuxt_component_1;
      const _component_SectionAbout = __nuxt_component_2;
      const _component_SectionProgram = __nuxt_component_3;
      const _component_SectionFaq = __nuxt_component_4;
      const _component_SectionRsvpCta = __nuxt_component_5;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_SectionHero, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionThanks, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionAbout, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionProgram, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionFaq, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionRsvpCta, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DrC8JmF_.mjs.map
