<template>
  <div id="app" class="app">
    <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Cards from "./components/Cards.vue";
export default {
  name: "App",

  data: function () {
    return {};
  },
  components: {
    Header,
    Footer,
    Cards,
  },

  methods: {},
};
</script>

<style>
body {
  margin: 0 0 0 0;
  background-color: whithe;
}
</style>
