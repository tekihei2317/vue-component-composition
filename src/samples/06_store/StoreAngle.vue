<script lang="ts" setup>
import { defineProps, PropType, toRef } from 'vue'
import { useAngle } from './useAngle'

const props = defineProps({
  unit: {
    type: String as PropType<'deg' | 'rad'>,
    default: 'deg',
  },
})
const angle = useAngle(toRef(props, 'unit'))
</script>

<template>
  <div class="StoreAngleView"><input type="text" v-model.number="angle" />{{ unit }}</div>
</template>
