<template>
  <Header />
  <router-view></router-view>
</template>

<script>
import Header from './components/Layout/Header.vue';
export default {
  components: { Header },
  data() {
    return {};
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

*,
::before,
::after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}
</style>
