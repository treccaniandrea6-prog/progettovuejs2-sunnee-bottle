<script setup>
import { computed } from "vue"
import { useRoute, useRouter } from "vue-router"
import ColorGrid from "../components/ColorGrid.vue"
import { useBottleConfig } from "../composables/useBottleConfig"

const route = useRoute()
const router = useRouter()
const { COLORS, state, setColor } = useBottleConfig()

const part = computed(() => route.params.part)

const title = computed(() => {
  if (part.value === "cap") return "Choose the cap color"
  if (part.value === "body") return "Choose the body color"
  return "Choose the base color"
})

const selected = computed({
  get() {
    return state[part.value]
  },
  set(val) {
    setColor(part.value, val)
  }
})

const canNext = computed(() => !!selected.value)

function next() {
  if (!canNext.value) return

  if (part.value === "cap") router.push("/step/body")
  else if (part.value === "body") router.push("/step/base")
  else router.push("/thank-you")
}
</script>

<template>
  <div class="wrap">
    <h2>{{ title }}</h2>

    <ColorGrid v-model="selected" :colors="COLORS" />

    <div class="actions">
      <button class="btn ghost" @click="$router.push('/')">Back</button>

      <button class="btn" :disabled="!canNext" @click="next">
        {{ part === "base" ? "Send" : "Next" }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.wrap { max-width: 600px; }
.actions {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
.btn {
  padding: 10px 16px;
  border-radius: 12px;
  border: none;
  background: #49d3ff;
  color: black;
  cursor: pointer;
}
.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
.ghost {
  background: gray;
  color: white;
}
</style>
