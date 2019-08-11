<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Payment from './pages/Payment';

export default {
  name: 'App',
  components: {
    Payment,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  min-width: 320px;
  height: 100%;
  margin: 0 auto;
}
</style>
