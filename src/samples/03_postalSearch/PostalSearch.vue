<script lang="ts" setup>
import { computed } from 'vue'
import { usePostalSearch } from './usePostalSearch'

const { postalCode, addresses, isWaiting } = usePostalSearch()

const resultMessage = computed(() => {
  const resultCount = addresses.value.length

  if (postalCode.value == '') return '郵便番号(7桁)を入力してください'
  if (isWaiting.value) return '...取得中'
  if (resultCount === 0) return '見つかりませんでした'
  return `${resultCount}件見つかりました`
})
</script>

<template>
  <h1>ロジックをコンポジション関数に分割する：郵便番号検索</h1>
  <div class="description">
    郵便番号検索を行う実用的なコンポーネントの例です。 API通信や非同期の状態管理をコンポジション関数に分割したことで、
    コンポーネント側では画面表示や入力に関するロジックのみを実装しています。
    <a
      href="https://github.com/ics-creative/210929_vue_composition/tree/master/src/samples/03_postalSearch"
      class="source"
    >
      ソースコードを見る
    </a>
  </div>

  <div class="PostalSearch">
    <div class="postal">郵便番号： <input type="text" v-model="postalCode" /></div>
    <div class="msg">{{ resultMessage }}</div>
    <ol class="addressList">
      <li v-for="address in addresses" :key="address">{{ address }}</li>
    </ol>
  </div>
</template>

<style lang="scss" scoped>
.PostalSearch {
  .msg {
    font-size: 12px;
    color: gray;
    text-align: left;
  }
}
</style>
