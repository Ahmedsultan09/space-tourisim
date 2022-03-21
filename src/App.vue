<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
// import Crew from "./components/Crew/Crew.vue";
// import Home from "./components/Home/Home.vue";
// import Destination from "./components/Destination/Destination.vue";
// import Technology from "./components/Technology/Technology.vue";
export default {
  name: "App",
  components: {
    // Home,
    // Destination,
    // Crew,
    // Technology,
  },
};
</script>

<style>
#app {
  width: 100%;
  height: calc(100vh - 3px);
}
body {
  margin: 0;
  padding: 0;
}
.main {
  background-size: cover;
  float: left;
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  position: relative;
  font-family: "Barlow Condensed", sans-serif;
}
</style>
