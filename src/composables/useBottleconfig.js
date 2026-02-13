import { reactive, computed } from "vue"

const COLORS = [
  { name: "Ocean", hex: "#1aa6b7" },
  { name: "Coral", hex: "#ff6b6b" },
  { name: "Sand", hex: "#d8c3a5" },
  { name: "Seaweed", hex: "#2f6f4e" },
  { name: "Sun", hex: "#f6c445" },
  { name: "Sky", hex: "#6bb6ff" },
  { name: "Lavender", hex: "#a78bfa" },
  { name: "Black", hex: "#111827" },
  { name: "White", hex: "#f8fafc" },
  { name: "Stone", hex: "#94a3b8" },
]

const state = reactive({
  cap: null,
  body: null,
  base: null
})

export function useBottleConfig() {

  function setColor(part, hex) {
    state[part] = hex
  }

  function reset() {
    state.cap = null
    state.body = null
    state.base = null
  }

  const isComplete = computed(() =>
    state.cap && state.body && state.base
  )

  return {
    COLORS,
    state,
    setColor,
    reset,
    isComplete
  }
}
