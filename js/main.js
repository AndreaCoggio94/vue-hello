const { createApp } = Vue;

createApp({
  data() {
    return {
      message: "Hello there!",
      img: "https://vuejs.org/images/logo.png",
    };
  },
}).mount("#app");
