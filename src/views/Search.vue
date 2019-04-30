<template>
  <div class="search">
    <input class="input" v-model="query" placeholder="Type something">
    <p v-if="message" class="message">{{message}}</p>
    <Advice v-for="result in results" :msg="result.advice" :key="result.slip_id"/>
  </div>
</template>

<script>
import debounce from "lodash.debounce";

import Advice from "@/components/Advice.vue";
import { SEARCH_URL } from "@/constants/API";

export default {
  name: "search",
  components: {
    Advice
  },
  data: function() {
    return {
      query: "",
      message: "",
      results: []
    };
  },
  watch: {
    query: function() {
      this.results = [];
      this.message = "";
      this.debouncedFetchQuery();
    }
  },
  created: function() {
    this.debouncedFetchQuery = debounce(this.fetchQuery, 400);
  },
  methods: {
    fetchQuery: function() {
      if (!this.query || !this.query.trim()) {
        this.results = [];
        this.message = "Nothing to search";
        return;
      }
      this.message = "Searching...";
      const vm = this;
      fetch(`${SEARCH_URL}/${vm.query}`)
        .then(response => response.json())
        .then(({ slips, total_results, message }) => {
          if (slips) {
            vm.results = slips;
            vm.message = `${total_results} results`;
            return;
          }
          if (message) {
            vm.message = message.text;
          }
        })
        .catch(error => (vm.message = `Error fetching API: ${error}`));
    }
  }
};
</script>

<style scoped>
.input {
  font-size: 1.4em;
  background: white;
  border: solid 1px #4075d8;
  color: #4075d8;
  border-radius: 0.4em;
  font-weight: 200;
  padding: 0.2em 1em;
  margin: 40px;
  width: 50%;
}
.input::placeholder {
  color: currentColor;
  opacity: 0.5;
}
.message {
  font-size: 1.2em;
}
</style>
