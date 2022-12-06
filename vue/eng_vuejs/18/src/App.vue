<template>
  <h2>{{ goal }}</h2>
  <!-- Task 1: Output your main course goal with help of the composition API -->
  <!-- Don't hardcode it into the template, instead hardcode it into the JS code -->
  <h3 v-if="courseData.goalIsVisible">OUTPUT COURSE GOAL</h3>
  <!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->
  <button @click="toggleGoalVisibility">Toggle Goal</button>
  <!-- Task 3: Manage data in three ways -->
  <!-- => Separate refs -->
  <!-- => Ref Object -->
  <!-- => Reactive Object -->
  <!-- Task 4: Also solve the assignment with the Options API -->
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const courseData = ref({
      goal: 'my goal',
      goalIsVisible: false,
    });

    function toggleGoalVisibility() {
      // goalIsVisible.value = !goalIsVisible.value;
      courseData.value.goalIsVisible = !courseData.value.goalIsVisible;
    }

    return {
      goal: courseData.value.goal,
      courseData,
      toggleGoalVisibility,
    };
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}
body {
  margin: 3rem;
  text-align: center;
}
</style>
