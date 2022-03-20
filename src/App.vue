<template>
  <div id="app">
    <BoolHeader />
    <BoolMain />
  </div>
</template>

<script>
import BoolHeader from './components/macro/BoolHeader.vue'
import BoolMain from './components/macro/BoolMain.vue'

export default {
  name: 'App',
  components: {
    BoolHeader,
    BoolMain
  }
}
</script>

<style lang="scss">
@import './assets/scss/common.scss';
@import './assets/scss/variables.scss';

#app {
  font-family: "Noto Sans", sans-serif; 
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: $bgAll;
  height: 100vh;
  color: $clText;
}
</style>
