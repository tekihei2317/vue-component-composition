import { onBeforeUnmount } from 'vue'

export const useInterval = (f: () => void, ms: number) => {
  const intervalId = window.setInterval(f, ms)
  const clear = () => {
    window.clearInterval(intervalId)
  }

  onBeforeUnmount(clear)
  return { clear }
}
