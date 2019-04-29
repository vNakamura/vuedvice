<template>
  <div id="app">
    <p class="emoji" v-if="fetching">🤔</p>
    <p class="emoji" v-else>🧐</p>
    <Advice v-bind:msg="message"/>
    <button :disabled="fetching" @click="getAdvice">Get Advice</button>
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
      message: "Click the button bellow to get an advice",
      fetching: false
    };
  },
  methods: {
    getAdvice: function() {
      const vm = this;
      vm.fetching = true;
      vm.message = "Thinking...";
      fetch(API_URL)
        .then(response => response.json())
        .then(({ slip }) => {
          vm.message = slip.advice;
        })
        .catch(error => (vm.message = `Error fetching API: ${error}`))
        .finally(() => (vm.fetching = false));
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

.emoji {
  font-size: 128px;
  margin: 0;
}
</style>
