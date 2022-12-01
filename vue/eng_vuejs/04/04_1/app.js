const app = Vue.createApp({
  data() {
    return {
      tasks: [],
      newTask: "",
      isVisible: true,
    };
  },
  methods: {
    addTask() {
      this.tasks.push(this.newTask);
    },
    toggleVisibility() {
      this.isVisible = !this.isVisible;
    },
  },
});

app.mount("#assignment");
