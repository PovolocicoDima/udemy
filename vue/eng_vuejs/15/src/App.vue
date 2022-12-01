<template>
  <base-container title="Vuex" v-if="userIsAuthenticated">
    <the-counter></the-counter>
    <favorite-value></favorite-value>
    <button @click="addOne">Add ten</button>
    <change-counter></change-counter>
  </base-container>

  <base-container title="Auth">
    <user-auth></user-auth>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import FavoriteValue from './components/FavoriteValue.vue';
import UserAuth from './components/UserAuth.vue';
import { mapGetters } from 'vuex';

export default {
  components: {
    BaseContainer,
    FavoriteValue,
    TheCounter,
    ChangeCounter,
    UserAuth,
  },
  methods: {
    addOne() {
      // this.$store.commit('increase', { value: 10 });
      this.$store.dispatch({
        type: 'increase',
        value: 10,
      });
    },
  },
  computed: {
    ...mapGetters(['userIsAuthenticated']),
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
</style>
