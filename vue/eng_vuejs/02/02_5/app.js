const app = Vue.createApp({
  data() {
    return {
      count: 0,
      text: "",
    };
  },
  computed: {
    outputText() {
      if (this.count < 37) {
        return "Not there yet";
      }
      if (this.count > 37) {
        return "Too much!";
      }
      return this.count;
    },
  },
  methods: {
    addFive() {
      this.count += 5;
    },
    addOne() {
      this.count += 1;
    },
  },
  watch: {
    count() {
      setInterval(() => {
        this.count = 0;
      }, 5000);
    },
  },
});

app.mount("#assignment");
