const app = Vue.createApp({
  data() {
    return {
      inputRegister: "",
      inputWithConfirm: "",
    };
  },
  methods: {
    showAlert() {
      alert("this is my alert");
    },
    inputRedisterOnKeydown(e) {
      this.inputRegister = e.target.value;
    },
    inputRegisterOnEnter(e) {
      this.inputWithConfirm = e.target.value;
    },
  },
}).mount("#assignment");
