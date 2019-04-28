<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Advice v-bind:msg="message"/>
    <button @click="getAdvice">Get Advice</button>
  </div>
</template>

<script>
import Advice from "./components/Advice.vue";

const API_URL = "https://api.adviceslip.com/advice";

export default {
  name: "app",
  components: {
    Advice
  },
  data: function() {
    return {
      message: "Click the button bellow to get an advice"
    };
  },
  methods: {
    getAdvice: function() {
      const vm = this;
      fetch(API_URL)
        .then(response => response.json())
        .then(({ slip }) => {
          vm.message = slip.advice;
        })
        .catch(error => (vm.message = `Error fetching API: ${error}`));
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
