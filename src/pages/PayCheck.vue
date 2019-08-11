<template>
  <div class="wrap">
    <!-- header -->
    <PurchaseInfo :pShowDetail='false'/>
    <!-- content -->
    <div class="content">
      <div class="check-title">確認訂購！</div>
      <OrderInfo/>
    </div>
    <!-- buttons -->
    <div class="btns container">
      <div class="col-lg-8 hide-in-phone"></div>
      <div class="col-6 col-lg-2">
        <button class="btn prev" @click="prev">上一步</button>
      </div>
      <div class="col-6 col-lg-2">
        <button class="btn next" @click="next">確認付款</button>
      </div>
    </div>

    <!-- footer -->
    <div style="height: 30px"/>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import PurchaseInfo from '../components/PurchaseInfo';
import OrderInfo from '../components/OrderInfo';

export default {
  name: 'PayCheck',
  components: {
    PurchaseInfo,
    OrderInfo,
  },
  methods: {
    prev() {
      this.fillPayInfo();
      this.$router.go(-1);
    },
    next() {
      this.pay();
      this.$router.push({ name: 'PayDone' });
    },
    ...mapActions(['fillPayInfo', 'pay']),
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
  margin-bottom: 30px;
  .check-title {
    margin-top: 50px;
    margin-bottom: 25px;
    font-size: $f-size-6;
  }
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

