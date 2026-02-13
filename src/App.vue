<script setup>
import BottlePreview from "./components/BottlePreview.vue"
import { useBottleConfig } from "./composables/useBottleConfig"

const { state } = useBottleConfig()
</script>

<template>
  <div class="app">
    <header class="header">
      <div class="brand">
        <span class="dot"></span>
        <div>
          <h1>Sunnee Kids Bottle</h1>
          <p>Customize your gift bottle colors</p>
        </div>
      </div>
    </header>

    <main class="main">
      <section class="content">
        <router-view />
      </section>

      <aside class="preview">
        <div class="previewCard">
          <p class="previewTitle">Live Preview</p>
          <BottlePreview
            :cap="state.cap ?? '#94a3b8'"
            :body="state.body ?? '#94a3b8'"
            :base="state.base ?? '#94a3b8'"
          />
        </div>
      </aside>
    </main>
  </div>
</template>

<style scoped>
.app {
  min-height: 100vh;
  font-family: system-ui, sans-serif;
  background: #07131a;
  color: #eaf3f7;
}
.header {
  padding: 20px;
  border-bottom: 1px solid rgba(255,255,255,0.1);
}
.brand {
  display: flex;
  gap: 12px;
  align-items: center;
}
.dot {
  width: 12px;
  height: 12px;
  border-radius: 999px;
  background: #49d3ff;
}
.main {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 20px;
  padding: 20px;
}
.content {
  padding: 20px;
  background: rgba(255,255,255,0.05);
  border-radius: 16px;
}
.previewCard {
  padding: 20px;
  background: rgba(255,255,255,0.05);
  border-radius: 16px;
}
.previewTitle {
  margin-bottom: 12px;
  font-weight: bold;
}
@media (max-width: 900px) {
  .main {
    grid-template-columns: 1fr;
  }
}
</style>
