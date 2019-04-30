<template>
  <div id="app">
    <div id="nav">
      <router-link to="/random">Random</router-link>
      <router-link to="/search">Search</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
*,
*:before,
*:after {
  box-sizing: border-box;
}
#app {
  font-family: "Source Sans Pro", Helvetica, Arial, sans-serif;
  font-weight: 200;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  padding: 40px;
  display: flex;
  flex-direction: column;

  min-height: 100vh;
}

@keyframes bgGradient {
  0% {
    background-position: 90% 0%;
  }
  50% {
    background-position: 11% 100%;
  }
  100% {
    background-position: 90% 0%;
  }
}
body {
  background: linear-gradient(224deg, #f2709c, #4075d8);
  background-size: 400% 400%;
  background-attachment: fixed;

  animation: bgGradient 60s ease infinite;
}

#nav {
  display: flex;
  font-size: 1.2em;
  background: none;
  border: solid 1px white;
  border-radius: 1em;
  font-weight: 200;
  margin: 0 auto;
  overflow: hidden;
}
#nav a {
  padding: 0.2em 1em;
  color: white;
  text-decoration: none;
}
#nav a:hover {
  text-shadow: 0 0 8px currentColor;
}
#nav a.router-link-active {
  background: white;
  color: #4075d8;
}
</style>
