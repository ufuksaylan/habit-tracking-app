<script setup>
import { RouterLink, RouterView } from 'vue-router';
import { ref, computed } from 'vue';

const date = ref(new Date());
const formattedDate = computed(() => {
  return date.value.toISOString().split('T')[0];
});
</script>

<template>
  <RouterView />

  <footer>
    <div class="container-sm wrap">
      <div class="link"><RouterLink to="/">Home</RouterLink></div>
      <div class="link"><RouterLink to="/habits">Habits</RouterLink></div>
      <div class="link"><RouterLink :to="`/days/${formattedDate}`">dates</RouterLink></div>
    </div>
  </footer>
</template>

<style>
.logo {
  display: block;
  margin: 0 auto 2rem;
}

.wrap {
  margin: 10px 0;
  display: flex;
  justify-content: center;
  gap: 10px;
}

.wrap .link {
  background-color: var(--sub-color);
}

.wrap a.router-link-exact-active {
  color: var(--main-color);
}

.wrap a {
  color: var(--color-text);
  background-color: var(--color-text);
  display: inline-block;
  padding: 0 1rem;
}

#main-section {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

footer {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
