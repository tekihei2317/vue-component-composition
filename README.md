# vue-component-composition

[コンポーネントを小さく・きれいに設計しよう。Vue Composition APIを活用したコンポーネント分割術 - ICS MEDIA](https://ics.media/entry/210929/)を手を動かして実践してみたものです。

`<script setup>`構文を使用しています。

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's `.vue` type support plugin by running `Volar: Switch TS Plugin on/off` from VSCode command palette.

## 参考リンク

- [コンポーネントを小さく・きれいに設計しよう。Vue Composition APIを活用したコンポーネント分割術 - ICS MEDIA](https://ics.media/entry/210929/)
- [Composition API | Vue.js](https://v3.ja.vuejs.org/guide/composition-api-introduction.html)
- [SFC \<script setup> | Vue.js](https://v3.vuejs.org/api/sfc-script-setup.html)
