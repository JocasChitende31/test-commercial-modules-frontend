<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div style="display: flex; justify-content: space-between">
    <RouterLink to="/">Página Principal</RouterLink>
    <RouterLink to="/request-email" class="text-danger">Sair</RouterLink>
  </div>
</template>
