import { ref, watch } from 'vue'
import { postalApi } from './postalApi'

export const usePostalSearch = () => {
  const postalCode = ref('')
  const addresses = ref<string[]>([])
  const isWaiting = ref(false)

  watch(postalCode, async () => {
    isWaiting.value = true
    addresses.value = await postalApi(postalCode.value)
    isWaiting.value = false
  })

  return { postalCode, addresses, isWaiting }
}
