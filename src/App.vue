<template>
  <router-view />
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

@font-face {
  font-family: "Para";
  src: local("Para"),   url(@/fonts/Para/Para_Regular_Central.otf) format("truetype");
  font-family: "Lustria";
  src: local("Lustria"), url(@/fonts/Lustria/Lustria_Regular.ttf) format("truetype");
}
</style>
