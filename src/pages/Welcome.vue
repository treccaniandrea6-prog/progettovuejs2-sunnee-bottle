<script setup>
import { useRouter } from "vue-router"
const router = useRouter()
function start() {
  router.push("/step/cap")
}
</script>

<template>
  <div class="wrap">
    <h2>Welcome to Sunnee</h2>
    <p>
      Sunnee creates sustainable beachwear from recycled marine plastic. With the
      first Kids order, we gift a customizable thermal bottle.
    </p>
    <p class="tip">Customize: cap → body → base.</p>
    <button class="btn" @click="start">Start configurator</button>
  </div>
</template>

<style scoped>
.wrap { max-width: 680px; }
h2 { margin: 0 0 10px; }
p { margin: 0 0 10px; opacity: 0.85; line-height: 1.5; }
.tip { opacity: 0.75; }
.btn {
  margin-top: 10px;
  padding: 10px 14px;
  border-radius: 12px;
  border: 1px solid rgba(255,255,255,0.12);
  background: rgba(255,255,255,0.08);
  color: #eaf3f7;
  cursor: pointer;
  font-weight: 650;
}
.btn:hover { background: rgba(255,255,255,0.12); }
</style>
