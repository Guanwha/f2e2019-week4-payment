<template>
  <div class="wrap">
    <div class="logo"><img src='../assets/logo.svg'></div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Payment',
};
</script>

<style lang="scss" scoped>
@import '@/styles/_variables.scss';

.wrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.logo {
  width: 100%;
  height: 50px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media (min-width: $limit-w-pc) {
    width: $limit-w-pc;
    height: 80px;
  }
  img {
    height: 27.48px;
    @media (min-width: $limit-w-pc) {
      height: auto;
    }
  }
}
</style>

