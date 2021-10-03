<template>
  <div class="StoreAngleView"><input type="text" v-model.number="angle" />{{ unit }}</div>
</template>

<script lang="ts">
import { defineComponent, PropType, toRef } from 'vue'

export default defineComponent({
  setup() {},
})
</script>
