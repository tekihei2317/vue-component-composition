<template>
  <div class="fizzBuzzView">
    数値：{{ count }}<br />
    解答：{{ result }}<br />
    <button @click="up">カウントアップ</button>
    <button @click="reset">リセット</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue'
import { useFizzBuzz } from './useFizzBuzz'

export default defineComponent({
  setup() {
    const { count, result, up, reset } = useFizzBuzz()

    return { count, result, up, reset }
  },
})
</script>
