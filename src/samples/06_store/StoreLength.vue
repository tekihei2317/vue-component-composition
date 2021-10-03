<template>
  <div class="StoreLengthView"><input type="text" v-model.number="length" />{{ unit }}</div>
</template>

<script lang="ts">
import { defineComponent, PropType, toRef } from 'vue'

export default defineComponent({
  setup() {},
})
</script>
