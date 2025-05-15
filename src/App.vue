<script setup>
import { computed } from 'vue'
import Navigation from './components/Navigation.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const hideHeader = computed(() => route.path === '/login' || route.path === '/callback')
</script>

<template>
  <header v-if="!hideHeader">
    <Navigation />
  </header>
  <router-view />
</template>

<style scoped></style>
