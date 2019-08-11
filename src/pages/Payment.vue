<template>
  <div class="wrap">
    <div class="logo flex-rlc"><img src='../assets/logo.svg'></div>
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
@import '@/styles/common.scss';

.wrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.logo {
  width: 100%;
  margin: 0 auto;
  padding: 11.26px;
  @media (min-width: $limit-w-pc) {
    width: $limit-w-pc;
    padding: 20px;
  }
  img {
    height: 27.48px;
    @media (min-width: $limit-w-pc) {
      height: auto;
    }
  }
}
</style>

