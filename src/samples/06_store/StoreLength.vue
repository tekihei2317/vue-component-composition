<template>
  <div class="StoreLengthView"><input type="text" v-model.number="length" />{{ unit }}</div>
</template>

<script lang="ts">
import { defineComponent, PropType, toRef } from 'vue'
import { useStoreLength } from './useStoreLength'

export default defineComponent({
  props: {
    unit: {
      type: String as PropType<'inch' | 'px' | 'mm'>,
      default: 'inch',
    },
  },
  setup(props) {
    const length = useStoreLength(toRef(props, 'unit'))
    return { length }
  },
})
</script>
