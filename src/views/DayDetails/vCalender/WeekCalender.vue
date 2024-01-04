<script setup>
import { defineEmits } from 'vue';

defineProps({
  date: { type: Date, default: new Date() }
});

const emit = defineEmits(['dateChange']);

const changeDate = (e) => {
  emit('dateChange', e);
};
</script>

<template>
  <div id="main-date">
    <VDatePicker
      view="weekly"
      :value="date"
      mode="date"
      @dayclick="changeDate"
      :attributes="[
        {
          highlight: true,
          dates: [date]
        }
      ]"
    />
  </div>
</template>
<style>
@media screen and (width >= 768px) {
  #main-date {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #main-date > div {
    width: 80%;
  }
}
</style>
