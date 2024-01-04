<script setup>
import categoryMappings from '../../../composables/categoryMappings';

const props = defineProps({
  date: { type: Date, default: new Date() },
  formattedDate: { type: String, default: '' },
  habitList: { type: Object, default: null }
});

const getCategoryClass = (key) => {
  const category = props.habitList[key].type;
  const mapping = categoryMappings[category];
  if (mapping) {
    return mapping.style;
  }
  return '';
};

const getCategoryIcon = (key) => {
  const category = props.habitList[key].type;

  const mapping = categoryMappings[category];
  if (mapping) {
    return mapping.icon;
  }
  return '';
};
</script>

<template>
  <div class="habit-list" v-for="(value, id) in habitList" :key="id">
    <div
      class="habit-list-item"
      :class="getCategoryClass(id)"
      v-if="formattedDate in habitList[id].dates"
    >
      <div class="left">
        <div class="habit-icon" v-html="getCategoryIcon(id)"></div>
        <div class="habit-name">{{ value.name }}</div>
      </div>
      <div class="rigth">
        <input
          type="checkbox"
          :id="`checkbox-${id}`"
          :disabled="habitList[id].isStopped"
          :value="habitList[id].dates[formattedDate]"
          :checked="habitList[id].dates[formattedDate]"
          @change="$emit('editHabitValue', id)"
        />

        <label :for="`checkbox-${id}`"></label>
      </div>
    </div>
  </div>
</template>
<style>
.habit-list {
  width: 100%;
  height: auto;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.habit-list-item {
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background: var(--sub-color);
  border-radius: 6px;
}

.habit-list-item .left {
  display: flex;
  text-align: center;
  gap: 5px;
}

.habit-list-item .left .habit-name {
  font-weight: 600;
  color: rgb(15 15 15);
}
</style>
