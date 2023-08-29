const { createApp } = Vue;

let app1 = createApp({
  data() {
    return {
      message: "Hello there!",
    };
  },
}).mount("#app");

let app2 = createApp({
  data() {
    return {
      img: "https://vuejs.org/images/logo.png",
    };
  },
}).mount("#image");
