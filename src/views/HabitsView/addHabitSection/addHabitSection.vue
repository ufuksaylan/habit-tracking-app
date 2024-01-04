<script setup>
import { ref } from 'vue';

const props = defineProps({
  categoryMappings: {
    type: Object,
    default() {
      return {};
    }
  },
  habitID: {
    type: String,
    default: ''
  },
  notEdit: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['editHabit']);

const editHabitHere = (selectedHabit, habitName, habitID) => {
  if (props.notEdit) {
    emit('editHabit', selectedHabit, habitName, habitID);
  } else {
    emit('addHabit', habitName, selectedHabit);
  }
};

const selectedHabit = ref('');
const habitName = ref('');
</script>

<template>
  <div class="add-habit">
    <div class="title" v-if="!notEdit"><h3>Add a new habit</h3></div>
    <div class="arrow" v-if="notEdit">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        fill="#91170c"
      >
        <path
          d="M4.97 13.22a.75.75 0 0 1 1.06 0L11 18.19V3.75a.75.75 0 0 1 1.5 0v14.44l4.97-4.97a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734l-6.25 6.25a.75.75 0 0 1-1.06 0l-6.25-6.25a.75.75 0 0 1 0-1.06Z"
        ></path>
      </svg>
    </div>

    <div class="selected-habit-section">
      <label for="selected-habit"></label>
      <select v-model="selectedHabit" name="selectedHabit" id="selected-habit">
        <option disabled value=""><span v-if="notEdit">edit</span> habit category</option>
        <option
          v-for="(category, categoryName) in categoryMappings"
          :value="categoryName"
          :key="categoryName"
        >
          {{ categoryName }}
        </option>
      </select>
    </div>

    <div class="habit-name-section">
      <input v-model="habitName" placeholder="New habit name" />
    </div>

    <div class="submit-section">
      <button
        type="button"
        class="btn btn-primary submit"
        @click="editHabitHere(selectedHabit, habitName, habitID)"
      >
        Submit
      </button>
    </div>
  </div>
</template>
<style>
.add-habit {
  border-radius: 12px;
  padding: 10px;
  background: var(--sub-color);
  width: 90%;
  position: relative;
  color: var(--text-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  margin: 0 auto;
  margin-top: 20px;
}

.add-habit .habit-name-section input {
  background-color: var(--caret-color);
  border: none;
  border-radius: 6px;
}

.add-habit .title {
  color: black;
}

.add-habit > div {
  display: flex;
  justify-content: center;
  width: 80%;
}

.add-habit .arrow {
  position: absolute;
  top: -22px;
}

#selected-habit {
  border: none;
  border-radius: 6px;
  padding: 6px;
  width: 100%;
  background: var(--caret-color);
  font-size: small;
}

.add-habit .submit {
  background: var(--caret-color);
  border: none;
  color: black;
}
</style>
