<script setup>
import CustomHeader from '../../components/header/CustomHeader.vue';
</script>

<template>
  <CustomHeader :headerText="`Home Page`" />

  <div id="welcome">
    <div class="welcome-section">
      <div class="welcome-section-image">
        <img src="./img/artisticTick.jpg" alt="artisticTick" />
      </div>
      <h5>Welcome to Habit Tracker</h5>
      <p>This website will help you to keep an organized routine as you build new habits</p>
    </div>
    <div class="welcome-section">
      <div class="welcome-section-image">
        <img src="./img/calendar.jpg" alt="artisticTick" />
      </div>
      <h5>Calendar Overview:</h5>
      <p>
        Navigate through the days effortlessly on the calendar page. Mark each day as "completed" or
        "skipped" for the habits you're tracking. Watch your progress unfold before your eyes, and
        gain insights into your commitment over time.
      </p>
    </div>

    <div class="welcome-section">
      <div class="welcome-section-image">
        <img src="./img/habit.jpg" alt="artisticTick" />
      </div>
      <h5>Habit Edit</h5>
      <p>
        Personalization is key to success. On the habit edit page, tailor your habit list to align
        with your evolving goals. You can edit habit names, categories, or even choose to pause or
        delete habits that no longer serve you. It's your journey, and you're in control.
      </p>
    </div>
  </div>
</template>
<style>
#welcome {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.welcome-section {
  padding: 10px;
  background-color: var(--sub-color);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 5px;
  margin: 5px 0;
}

.welcome-section h5 {
  color: var(--main-color);
}

.welcome-section .welcome-section-image {
  display: flex;
  justify-content: center;
  align-items: center;
}

.welcome-section .welcome-section-image img {
  width: 20%;
  height: auto;
  border-radius: 12px;
}

@media screen and (width >= 768px) {
  #welcome {
    flex-direction: row;
    gap: 10px;
    margin: 20px;
  }

  #welcome .welcome-section {
    height: 400px;
  }
}
</style>
