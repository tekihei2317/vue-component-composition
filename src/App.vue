<template>
  <div class="app">
      <router-link v-if="!isTopPage" to="/">◀︎ サンプル一覧に戻る</router-link>
      <a href="https://ics.media/entry/210929/">◀︎ 記事に戻る</a>
    <routerView />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
  setup() {
    const route = useRoute()
    const isTopPage = computed(() => route.name === 'Top')
    return { isTopPage }
  },
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.app {
  padding: 20px;
}
.description {
  padding: 20px 0 40px 0;
}
a {
  color: rgb(53, 101, 121);
}
a + a {
  margin-left: 12px;
}
</style>
