<script setup>
defineProps({
  colors: Array,
  modelValue: String
})

const emit = defineEmits(["update:modelValue"])

function select(color) {
  emit("update:modelValue", color.hex)
}
</script>

<template>
  <div class="grid">
    <button
      v-for="color in colors"
      :key="color.hex"
      @click="select(color)"
      :style="{ background: color.hex }"
      class="color-btn"
    ></button>
  </div>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
  margin-top: 20px;
}
.color-btn {
  height: 40px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
}
</style>
