<template>
  <div class="wrap">
    <!-- header -->
    <PurchaseInfo/>
    <!-- content -->
    <router-view></router-view>
    <!-- buttons -->
    <div class="btns container">
      <div class="col-lg-8 hide-in-phone"></div>
      <div class="col-6 col-lg-2">
        <button class="btn prev" @click="prev">上一步</button>
      </div>
      <div class="col-6 col-lg-2">
        <button class="btn next" @click="next">下一步</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import PurchaseInfo from '../components/PurchaseInfo';

export default {
  name: 'PayInfo',
  components: {
    PurchaseInfo,
  },
  methods: {
    prev() {
      this.$router.back();
    },
    next() {
      this.checkOrder();
      this.$router.push({ name: 'PayCheck' });
    },
    ...mapActions(['checkOrder']),
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/_variables.scss';

.wrap {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.content {
  height: 200px;            // [DELETE]
  background: pink;
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
.hide-in-phone {
  display: none;
  @media(min-width: $limit-w-pc) {
    display: block;
  }
}
</style>

