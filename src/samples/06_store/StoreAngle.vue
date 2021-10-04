<template>
  <div class="StoreAngleView"><input type="text" v-model.number="angle" />{{ unit }}</div>
</template>

<script lang="ts">
import { defineComponent, PropType, toRef, computed } from 'vue'
import { useAngle } from './useAngle'

export default defineComponent({
  props: {
    unit: {
      type: String as PropType<'deg' | 'rad'>,
      default: 'deg',
    },
  },
  setup(props) {
    const angle = useAngle(toRef(props, 'unit'))

    return { angle }
  },
})
</script>
