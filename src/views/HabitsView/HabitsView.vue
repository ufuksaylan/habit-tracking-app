<script setup>
import { ref } from 'vue';
import localStorageUtils from './localStorageUtils';
import categoryMappings from '../../composables/categoryMappings';
import CustomHeader from '../../components/header/CustomHeader.vue';
import addHabitSection from './addHabitSection/addHabitSection.vue';

const { getHabitList, addHabit, editHabitWithID, deleteHabitWithID, stopHabitWithID } =
  localStorageUtils();

const habitList = ref([]);

habitList.value = getHabitList();

const getCategoryIcon = (key) => {
  const category = habitList.value[key].type;

  const mapping = categoryMappings[category];
  if (mapping) {
    return mapping.icon;
  }
  return '';
};

const addHabits = (habitName, type) => {
  addHabit(habitName, type);
  habitList.value = getHabitList();
};

const editHabit = (selectedHabit, habitName, habitID) => {
  editHabitWithID(habitName, selectedHabit, habitID);
  habitList.value = getHabitList();
};

const deleteHabit = (id) => {
  deleteHabitWithID(id);
  habitList.value = getHabitList();
};

const stopHabit = (id) => {
  stopHabitWithID(id);
  habitList.value = getHabitList();
};
</script>

<template>
  <CustomHeader :headerText="'Habits'"></CustomHeader>

  <section id="main-section">
    <div class="habits">
      <div v-for="(value, key) in habitList" :key="key" class="habit-item">
        <div class="top">
          <VCalendar
            view="weekly"
            :attributes="[
              {
                highlight: true,
                dates: value.sortedDates
              }
            ]"
          />
        </div>
        <div class="bottom">
          <div class="left-side">
            <div class="habit-icon" v-html="getCategoryIcon(key)"></div>
            <div class="habit-name">{{ value.name }}</div>
          </div>
          <div class="right-side">
            <button type="button" @click="value.isEdit = !value.isEdit">Edit</button>
            <button type="button" @click="stopHabit(key)">Stop</button>
            {{ key }}
            <button type="button" class="delete" @click="deleteHabit(key)">Delete</button>
          </div>
        </div>

        <addHabitSection
          v-if="value.isEdit"
          :habitID="key"
          :categoryMappings="categoryMappings"
          :notEdit="true"
          @editHabit="editHabit"
          @addHabit="addHabits"
        />
      </div>
    </div>

    <addHabitSection :habitID="key" :categoryMappings="categoryMappings" @addHabit="addHabits" />
  </section>
</template>
<style>
.habits {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 90%;
}

.habit-item {
  display: flex;
  flex-direction: column;
  background-color: var(--sub-alt-color);
  border-radius: 6px;
  padding: 10px;
  gap: 10px;
}

.top div {
  width: 100%;
}

.habit-item .bottom {
  display: flex;
  justify-content: space-between;
}

.habit-item .bottom button {
  border: 2px red solid;
}

.habit-item .bottom .right-side {
  display: flex;
  gap: 10px;
}

.habit-item .bottom .right-side button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 33%;
  padding: 10px;
  border-radius: 6px;
  background-color: var(--sub-color);
  border: none;
}

.habit-item .bottom .right-side .delete {
  border: 2px var(--main-color) solid;
}

.habit-item .edit-section {
  background: #000;
}
</style>
