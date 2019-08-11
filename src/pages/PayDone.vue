<template>
  <div class="wrap">
    <!-- header -->
    <PurchaseInfo :pShowDetail='false'/>
    <!-- content -->
    <div class="content">
      <div class="done-title">付款訂購成功！</div>
      <div class="done-msg" v-show='curPayBy === cPayTypes.SHOP'>感謝您的訂購，請您在 {{shopPayInfo.payDeadLine}} 前繳費<br>至超商店內機台輸入代碼進行繳費，逾期訂單自動作廢。</div>
      <div class="done-msg" v-show='curPayBy !== cPayTypes.SHOP'>感謝您的訂購，我們將儘速為您出貨！</div>
      <img src='../assets/img_complete.svg'>
      <OrderInfo/>
    </div>
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

    <!-- footer -->
    <div style="height: 30px"/>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { payTypes } from '../stores/constants';
import PurchaseInfo from '../components/PurchaseInfo';
import OrderInfo from '../components/OrderInfo';

export default {
  name: 'PayDone',
  components: {
    PurchaseInfo,
    OrderInfo,
  },
  data() {
    return {
      cPayTypes: payTypes,
    };
  },
  methods: {
    home() {
      this.reset();
      this.$router.go(-3);
    },
    ...mapActions(['reset']),
  },
  computed: {
    ...mapGetters(['curPayBy', 'shopPayInfo']),
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
  .done-title {
    margin-top: 50px;
    margin-bottom: 25px;
    font-size: $f-size-6;
  }
  .done-msg {
    margin: 0 auto 25px auto;
    font-size: $f-size-2;
    line-height: $f-size-2 * 1.5;
  }
  img {
    margin: 25px;
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

