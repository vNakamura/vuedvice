<template>
  <div class="search">
    <input v-model="query" placeholder="Type something">
    <p v-if="message">{{message}}</p>
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

