<template>
  <section class="container">
    <h2>{{ user.name }}</h2>
    <h3>{{ user.age }}</h3>
  </section>
</template>

<script>
import { reactive } from 'vue';

export default {
  // data() {
  //   return {
  //     userName: 'Maximilian',
  //   };
  // },
  setup() {
    // const uName = ref('Dima');
    // const uAge = ref(31);

    const user = reactive({
      name: 'Dima',
      age: 31,
    });

    setTimeout(function () {
      // user.value.name = 'Dmitrii';
      // user.value.age = 20;

      user.name = 'lol';
      user.age = 22;
    }, 2000);

    return {
      user,
    };
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>
