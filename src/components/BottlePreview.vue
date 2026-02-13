<script setup>
defineProps({
  cap: String,
  body: String,
  base: String
})
</script>

<template>
  <svg viewBox="0 0 200 400" width="100%">
    <rect x="70" y="20" width="60" height="50" :fill="cap" rx="10"/>
    <rect x="60" y="70" width="80" height="230" :fill="body" rx="20"/>
    <rect x="60" y="300" width="80" height="60" :fill="base" rx="20"/>
  </svg>
</template>
