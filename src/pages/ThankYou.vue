<script setup>
import { useRouter } from "vue-router"
import { useBottleConfig } from "../composables/useBottleConfig"

const router = useRouter()
const { state, reset } = useBottleConfig()

function restart() {
  reset()
  router.push("/")
}
</script>

<template>
  <div class="wrap">
    <h2>Thank you!</h2>
    <p>Your bottle has been customized successfully.</p>

    <div class="summary">
      <div>Cap: <span class="color" :style="{ background: state.cap }"></span></div>
      <div>Body: <span class="color" :style="{ background: state.body }"></span></div>
      <div>Base: <span class="color" :style="{ background: state.base }"></span></div>
    </div>

    <button class="btn" @click="restart">Create another bottle</button>
  </div>
</template>

<style scoped>
.wrap { max-width: 600px; }
.summary {
  margin: 20px 0;
}
.color {
  display: inline-block;
  width: 40px;
  height: 20px;
  border-radius: 8px;
  margin-left: 10px;
}
.btn {
  padding: 10px 16px;
  border-radius: 12px;
  border: none;
  background: #49d3ff;
  color: black;
  cursor: pointer;
}
</style>
