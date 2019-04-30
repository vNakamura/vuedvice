<template>
  <div class="advice">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "Advice",
  props: {
    msg: String
  }
};
</script>

<style scoped>
h1 {
  font-weight: 200;
  text-shadow: 0 0 16px white;
  text-align: center;
  max-width: 65ch;
  margin: 60px auto;
}
.advice:not(:last-of-type) h1::after {
  display: block;
  content: "~~=·=~~";
  margin: 60px 0;
}
</style>
