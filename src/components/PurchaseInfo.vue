<template>
  <div class="order">
    <!-- purchase flow -->
    <div class="steps" v-if='curOrderTypes === cOrderStatus.UNPAID'>
      <img src='@/assets/icon_done.svg'>
      <p class="hide-block done">確認購物車</p>
      <img src='@/assets/icon_arrow.svg'>
      <img src='@/assets/step2.svg'>
      <p>選擇配送付款方式</p>
      <img src='@/assets/icon_arrow.svg'>
      <img src='@/assets/step3.svg'>
      <p class="hide-block willdo">確認訂購</p>
    </div>
    <div class="steps" v-if='curOrderTypes === cOrderStatus.PAID'>
      <img src='@/assets/icon_done.svg'>
      <p class="hide-block done">確認購物車</p>
      <img src='@/assets/icon_arrow.svg'>
      <img src='@/assets/icon_done.svg'>
      <p class="hide-block done">選擇配送付款方式</p>
      <img src='@/assets/icon_arrow.svg'>
      <img src='@/assets/step3_active.svg'>
      <p>確認訂購</p>
    </div>
    <!-- purchase detail -->
    <div class="detail-bg">
      <div class="detail container-fluid">
        <div class="row" style="height: 100%">
          <div class="col-6 col-lg-4 left">
            <div class="title">訂單明細</div>
            <div class="order-no">({{orderNo}})</div>
          </div>
          <div class="col-6 col-lg-8">
            <div class="row" style="height: 100%">
              <div class="col-12 col-lg-4 right">
                <div class="title">商品小計</div>
                <div class="price">NT$ {{prodPrice}}</div>
              </div>
              <div class="col-12 col-lg-4 right">
                <div class="title">運費</div>
                <div class="price">NT$ {{shipPrice}}</div>
              </div>
              <div class="col-12 col-lg-4 right">
                <div class="title">總金額</div>
                <div class="price main">NT$ {{totalPrice}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { orderStatus } from '../stores/constants';

export default {
  name: 'PurchaseInfo',
  data() {
    return {
      cOrderStatus: orderStatus,
    };
  },
  computed: {
    ...mapGetters(['curOrderTypes', 'orderNo', 'prodPrice', 'shipPrice', 'totalPrice']),
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/_variables.scss';

.order {
  height: 175px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  .steps {
    width: 100%;
    height: 54px;
    position: absolute;
    z-index: 1;
    background: $clr-bg-f5;
    display: flex;
    justify-content: center;
    align-items: center;
    @media(min-width: $limit-w-pc) {
      width: $limit-w-pc * 0.64;
    }
    .hide-block {
      display: none;
      @media(min-width: $limit-w-pc) {
        display: block;
      }
    }
    .done {
      color: $clr-main;
    }
    .willdo {
      color: $clr-font-9;
    }
    img {
      margin: 0 2%;
    }
  }
  .detail-bg {
    width: 100%;
    height: 145px;
    position: absolute;
    top: 30px;
    z-index: 0;
    background-image: $clr-gradient;
    padding-top: 24px;
  }
  .detail {
    width: 100%;
    height: 100%;
    @media(min-width: $limit-w-pc) {
      width: $limit-w-pc;
    }
    .left {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      .title {
        color: $clr-white;
        font-size: $f-size-4;
        line-height: $f-size-4 * 1.1;
        @media(min-width: $limit-w-phone6) {
          font-size: $f-size-5;
          line-height: $f-size-5 * 1.1;
        }
      }
      .order-no {
        color: $clr-white;
        font-size: $f-size-1;
      }
    }
    .right {
      display: flex;
      justify-content: space-between;
      align-items: center;
      @media(min-width: $limit-w-pc) {
        justify-content: center;
      }
      .title {
        color: $clr-white;
        font-size: $f-size-1;
        margin-right: 5%;
        @media(min-width: $limit-w-phone6) {
          font-size: $f-size-2;
        }
      }
      .price {
        color: $clr-white;
        font-size: $f-size-1;
        @media(min-width: $limit-w-phone6) {
          font-size: $f-size-2;
        }
      }
      .main {
        font-size: $f-size-2;
        font-weight: bold;
        @media(min-width: $limit-w-phone6) {
          font-size: $f-size-3;
        }
      }
    }
  }
}
</style>

