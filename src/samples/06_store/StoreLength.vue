<script lang="ts" setup>
import { defineProps, PropType, toRef } from 'vue'
import { useStoreLength } from './useStoreLength'

const props = defineProps({
  unit: {
    type: String as PropType<'inch' | 'px' | 'mm'>,
    default: 'inch',
  },
})
const length = useStoreLength(toRef(props, 'unit'))
</script>

<template>
  <div class="StoreLengthView"><input type="text" v-model.number="length" />{{ unit }}</div>
</template>
