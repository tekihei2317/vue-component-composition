import { computed, Ref } from 'vue'
import { useStore } from 'vuex'
import { State } from '../../store'

const DPI = 72
const INCH2MM = 25.4

export const useStoreLength = (unit: Ref<'px' | 'inch' | 'mm'>) => {
  const store = useStore<State>()

  const length = computed({
    get() {
      const px = store.state.length
      if (unit.value === 'inch') return Math.round(px / DPI)
      if (unit.value === 'mm') return Math.round((px / DPI) * INCH2MM)
      return Math.round(px)
    },
    set(v: number) {
      let px = v
      if (unit.value == 'inch') px = v * DPI
      else if (unit.value == 'mm') px = (v / INCH2MM) * DPI
      store.dispatch('changeLength', px)
    },
  })

  return length
}
