const app = Vue.createApp({
  data() {
    return {
      name: "Dima",
      age: 30,
    };
  },
  methods: {
    randomNumberGenerator() {
      return Math.random();
    },
  },
  computed: {
    ageInFiveYears() {
      return this.age + 5;
    },
  },
}).mount("#assignment");
