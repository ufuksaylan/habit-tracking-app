<script setup>
import CustomHeader from '../components/header/CustomHeader.vue';
</script>

<template>
  <CustomHeader :headerText="`Not Found`" />

  <div class="main-section">
    <div class="not-found">
      <h1>404</h1>
      <h3>Page not found</h3>
    </div>
  </div>
</template>
<style>
.not-found {
  text-align: center;
}
</style>
