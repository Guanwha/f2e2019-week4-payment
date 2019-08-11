<template>
  <div class="container check-order">
    <!-- order detail -->
    <div class="a1-order-detail">
      <!-- title -->
      <div class="row title">
        <div class="col-12">訂單資訊 ({{orderNo}})</div>
      </div>
      <!-- table title -->
      <div class="row">
        <div class="col-5">品項</div>
        <div class="col-2">數量</div>
        <div class="col-2">顏色</div>
        <div class="col-3">價格</div>
      </div>
      <hr>
      <!-- products -->
      <div v-for='(prod, id) in prodList' :key='id'>
        <div class='row prod flex-rcc'>
          <div class="col-5 txt-l">{{prod.name}}</div>
          <div class="col-2">{{prod.count}}</div>
          <div class="col-2">{{prod.color}}</div>
          <div class="col-3 txt-r">{{prod.price}}元</div>
        </div>
      </div>
      <!-- fee -->
      <div class='row prod flex-rcc'>
        <div class="col-7"/>
        <div class="col-2">運費</div>
        <div class="col-3 txt-r">{{shipPrice}}元</div>
      </div>
      <hr>
      <!-- total price -->
      <div class='row prod flex-rcc'>
        <div class="col-7 txt-r">共2品項，總計</div>
        <div class="col-5 txt-r total">NT$ {{totalPrice}}</div>
      </div>
    </div>
    <br>
    <!-- recipient information -->
    <div class="a1-recipient-info">
      <div class="row title">
        <div class="col-12">取貨資訊</div>
      </div>
      <div class="row address">
        <div class="col-4 col-md-3 col-lg-2 txt-l">取貨地址</div>
        <div class="col-8 col-md-9 col-lg-10 txt-l">{{destAddress}}</div>
      </div>
    </div>
    <br>
    <!-- payment information -->
    <div class="a1-pay-info">
      <div class="row title">
        <div class="col-12">付款資訊</div>
      </div>
      <!-- pay info. for shop -->
      <div class="row pay-info" v-show='curPayBy === cPayTypes.SHOP'>
        <p class='col-12 col-lg-3 item'>需付金額：{{totalPrice}}元</p>
        <p class='col-12 col-lg-3 item'>繳費代碼：{{shopPayInfo.payCode}}</p>
        <p class='col-12 col-lg-3 item'>繳費期限：{{shopPayInfo.payDeadLine}}</p>
        <p class='col-12 col-lg-3 item'>狀態：{{payStatusMsg}}</p>
      </div>
      <!-- pay info. for credit card -->
      <div class="row pay-info" v-show='curPayBy === cPayTypes.CARD'>
        <p class='col-12 col-lg-3 item'>信用卡刷卡：{{totalPrice}}元</p>
        <p class='col-12 col-lg-3 item'>手續費：{{cardPayInfo.fee}}元</p>
        <p class='col-12 col-lg-3 item'>狀態：{{payStatusMsg}}</p>
      </div>
      <!-- pay info. for webatm -->
      <div class="row pay-info" v-show='curPayBy === cPayTypes.WEBATM'>
        <p class='col-12 col-lg-3 item'>Web ATM 付款：{{totalPrice}}元</p>
        <p class='col-12 col-lg-3 item'>付款銀行：{{cBanks[webatmPayInfo.bankCode]}}</p>
        <p class='col-12 col-lg-3 item'>手續費：{{webatmPayInfo.fee}}元</p>
        <p class='col-12 col-lg-3 item'>狀態：{{payStatusMsg}}</p>
      </div>
      <!-- pay info. for unionpay -->
      <!-- pay info. for linepay -->
      <div class="row pay-info" v-show='curPayBy === cPayTypes.LINEPAY'>
        <p class='col-12 col-lg-3 item'>LINE Pay付款：{{totalPrice}}元</p>
        <p class='col-12 col-lg-3 item'>LINE Point折抵：{{linePayInfo.discount}}元</p>
        <p class='col-12 col-lg-3 item'>手續費：{{linePayInfo.fee}}元</p>
        <p class='col-12 col-lg-3 item'>狀態：{{payStatusMsg}}</p>
      </div>
    </div>
    <br>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { payTypes, orderStatus, banks } from '../stores/constants';

export default {
  name: 'OrderInfo',
  data() {
    return {
      cPayTypes: payTypes,
      cOrderStatus: orderStatus,
      cBanks: banks,
    };
  },
  computed: {
    payStatusMsg() {
      switch (this.curOrderTypes) {
        case this.cOrderStatus.NONE: return '未知';
        case this.cOrderStatus.UNPAID:
        case this.cOrderStatus.CHECK: return '待付款';
        case this.cOrderStatus.PAID: return '已付款';
        default: return `未知 (${this.curOrderTypes})`;
      }
    },
    ...mapGetters(['orderNo', 'prodList', 'shipPrice', 'totalPrice', 'destAddress', 'curPayBy',
      'curOrderTypes', 'shopPayInfo', 'cardPayInfo', 'webatmPayInfo', 'linePayInfo']),
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/_variables.scss';
@import '../styles/common.scss';

.check-order {
  background: $clr-bg-f5;
}
.title {
  padding-top: 23px;
  padding-bottom: 23px;
  font-size: $f-size-2;
  font-weight: bold;
  text-align: left;
  color: $clr-black;
}
.prod {
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: $f-size-2;
  color: $clr-font-6;
  .total {
    font-size: $f-size-4;
    font-weight: bold;
  }
}
.pay-info {
  text-align: left;
  @media(min-width: $limit-w-pc) {
    text-align: center;
  }
  .item {
    font-size: $f-size-2;
    line-height: $f-size-2 * 1.5;
  }
}
</style>

