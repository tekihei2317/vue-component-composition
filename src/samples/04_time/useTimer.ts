import { ref, computed } from 'vue'
import { useInterval } from './useInterval'

export const useTimer = () => {
  const date = ref(new Date())

  const timeText = computed(() => {
    const d = date.value
    return [d.getHours(), d.getMinutes(), d.getSeconds()].map((n) => n.toString().padStart(2, '0')).join(':')
  })

  useInterval(() => {
    date.value = new Date()
  }, 100)

  return { timeText }
}
