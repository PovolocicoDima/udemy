<template>
  <div id="app">
    <div class="todo-item" v-for="item in TODOS" :key="item"></div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "App",
  components: {},
  methods: {
    saveItem() {
      let item = "Get groceries";
      this.$store.dispatch("SAVE_TODO", item);
    },
  },
  mounted() {
    this.$store.dispatch("GET_TODO");
  },
  computed: {
    ...mapGetters(["TODOS"]),
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
