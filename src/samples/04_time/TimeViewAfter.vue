<script lang="ts" setup>
import { useTimer } from './useTimer'

const { timeText } = useTimer()
</script>

<template>
  <div class="TimeView">{{ timeText }}</div>
</template>
