const app = Vue.createApp({
  data() {
    return {
      userInput: "",
      paragraphClass: "",
      visible: true,
      paragraphColor: "",
    };
  },
  computed: {},
  methods: {
    toggleVisible() {
      this.visible = !this.visible;
    },
  },
  watch: {
    userInput(value) {
      if (value === "user1") {
        this.paragraphClass = "user1";
      } else if (value === "user2") {
        this.paragraphClass = "user2";
      }
    },
  },
});

app.mount("#assignment");
