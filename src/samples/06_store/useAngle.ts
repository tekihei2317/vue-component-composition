import { Ref, computed } from 'vue'
import { useStore } from 'vuex'

export const useAngle = (unit: Ref<'deg' | 'rad'>) => {
  const store = useStore()

  const angle = computed({
    get() {
      const v = store.state.angle
      if (unit.value === 'deg') return Math.round((v * 180) / Math.PI)
      return v
    },
    set(v: number) {
      let rad = v
      if (unit.value === 'deg') v = Math.round((rad / 180) * Math.PI * 100) / 100
      store.dispatch('changeAngle', v)
    },
  })

  return angle
}
