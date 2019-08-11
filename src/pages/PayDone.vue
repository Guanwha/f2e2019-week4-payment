<template>
  <div class="wrap">
    <!-- header -->
    <PurchaseInfo/>
    <!-- content -->
    <div class="content"></div>
    <!-- buttons -->
    <div class="btns container">
      <div class="col-lg-4 hide-in-phone"></div>
      <div class="col-6 col-lg-2">
        <button class="btn prev">會員專區</button>
      </div>
      <div class="col-6 col-lg-2">
        <button class="btn next" @click="home">返回首頁</button>
      <div class="col-lg-4 hide-in-phone"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import PurchaseInfo from '../components/PurchaseInfo';

export default {
  name: 'PayDone',
  components: {
    PurchaseInfo,
  },
  methods: {
    home() {
      this.reset();
      this.$router.go(-3);
    },
    ...mapActions(['reset']),
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/_variables.scss';
@import '../styles/common.scss';

.wrap {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.content {
  height: 200px;            // [DELETE]
  background: lightskyblue;
}
.btns {
  height: 56.34px;
  display: flex;
  .prev {
    width: 100%;
    height: 100%;
    color: $clr-font-6;
    background: $clr-white;
    border: 1px solid $clr-line-d;
    &:hover {
      background: $clr-white * 0.8;
    }
  }
  .next {
    width: 100%;
    height: 100%;
    color: $clr-white;
    background: $clr-main;
    &:hover {
      background: $clr-main * 0.8;
    }
  }
}
</style>

