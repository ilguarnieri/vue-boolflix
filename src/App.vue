<template>
  <div id="app">
    <BoolHeader />
  </div>
</template>

<script>
import BoolHeader from './components/macro/BoolHeader.vue'

export default {
  name: 'App',
  components: {
    BoolHeader,
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
}
</style>
