<script setup>
import { computed, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import CustomHeader from '../../components/header/CustomHeader.vue';
import WeekCalender from './vCalender/WeekCalender.vue';
import HabitList from './HabitList/HabitList.vue';
import router from '../../router';
import localStorageUtils from './localStorageUtils';

const { getHabitList, addDate, editHabitForDate } = localStorageUtils();

const date = ref(new Date());

const formattedDateToDisplay = computed(() => {
  try {
    const month = date.value.toLocaleString('default', { month: 'short' });
    const day = date.value.getDate();
    const year = date.value.getFullYear();

    return `${month} ${day}, ${year}`;
  } catch (e) {
    return 'invalid Date';
  }
});

const formattedDate = computed(() => {
  return date.value.toISOString().split('T')[0];
});

const habitList = ref({});

const isPast = computed(() => {
  const currentDate = new Date();

  return date.value <= currentDate;
});

const changeUrl = () => {
  router.replace({ name: 'DayDetails', params: { date: formattedDate.value } });
};

onMounted(() => {});

const changeDate = (e) => {
  date.value = e.noonDate;
  changeUrl();
  addDate(formattedDate.value);
  habitList.value = getHabitList();
};

const changeHabitValue = (id) => {
  editHabitForDate(formattedDate.value, id);
  habitList.value = getHabitList();
};

onMounted(() => {
  const route = useRoute();
  date.value = new Date(route.params.date);
  addDate(formattedDate.value);
  habitList.value = getHabitList();
});
</script>

<template>
  <CustomHeader :headerText="formattedDateToDisplay"></CustomHeader>
  <section id="main-section">
    <WeekCalender :date="date" @dateChange="changeDate" />

    <HabitList
      :date="date"
      :formattedDate="formattedDate"
      :habitList="habitList"
      @editHabitValue="changeHabitValue"
      v-if="isPast"
    />
    <div class="future" v-else><img src="./what.jpg" alt="what??" /></div>
  </section>
</template>

<style>
.future {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.future img {
  width: 300px;
}
</style>
