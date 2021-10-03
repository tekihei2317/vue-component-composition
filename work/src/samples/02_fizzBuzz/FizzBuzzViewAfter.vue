<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
export default defineComponent({
  setup() {
    const count = ref(1)
    const result = computed(() => {
      if (count.value % 15 === 0) {
        return 'FizzBuzz'
      } else if (count.value % 5 === 0) {
        return 'Buzz'
      } else if (count.value % 3 === 0) {
        return 'Fizz'
      } else {
        return count.value
      }
    })

    const up = () => {
      count.value++
    }
    const reset = () => {
      count.value = 1
    }

    return { count, result, up, reset }
  },
})
</script>

<template>
  <div class="fizzBuzzView">
    数値：{{ count }}<br />
    解答：{{ result }}<br />
    <button @click="up">カウントアップ</button>
    <button @click="reset">リセット</button>
  </div>
</template>
