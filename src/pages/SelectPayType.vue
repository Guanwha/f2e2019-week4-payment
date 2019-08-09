<template>
  <div class="wrap">
    <!-- header -->
    <PurchaseInfo/>
    <!-- content -->
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-6">Shop</div>
        <div class="col-12 col-lg-6">Credit Card</div>
        <div class="col-12 col-lg-6">LinePay</div>
        <div class="col-12 col-lg-6">UnionPay</div>
        <div class="col-12 col-lg-6">WebATM</div>
        <div class="col-12 remarks">
          <div>・請確認您填寫的資料是否正確，一旦訂單完成後，付款與物流方式皆無法修改。</div>
          <div>・使用ATM轉帳，將依據銀行入帳日，依序進行出貨/排貨。</div>
          <div>・每筆訂單所提供的「ATM專屬虛擬帳號」皆不同，若您欲使用本項服務，敬請放心進行匯款作業，安全又便利！</div>
          <div>・若訂單內含預購、無庫存商品調貨時間請參考「商品平均調貨時間」。</div>
          <div>・若您對取貨或付款的方式有疑問，請詳閱<a href='#'>「購買說明」</a>。</div>
          <div class='bold'>・請確認您已詳閱並瞭解本站<a href='#'>「購買說明」</a>內容，訂單完成即表示您已同意其中的各項說明。</div>
          <div class="bg hide-in-phone"/>
        </div>
      </div>
    </div>
    <!-- buttons -->
    <div class="btns container">
      <div class="col-lg-8 hide-in-phone"></div>
      <div class="col-6 col-lg-2">
        <button class="btn prev" disabled>上一步</button>
      </div>
      <div class="col-6 col-lg-2">
        <button class="btn next" @click="next">下一步</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import PurchaseInfo from '../components/PurchaseInfo';
import { payTypes } from '../stores/constants';

export default {
  name: 'SelectPayType',
  components: {
    PurchaseInfo,
  },
  data() {
    return {
      cPayTypes: payTypes,
    };
  },
  methods: {
    next() {
      switch (this.curPayBy) {
        case this.cPayTypes.SHOP: this.$router.push('payInfo/shop'); break;
        case this.cPayTypes.CARD: this.$router.push('payInfo/card'); break;
        case this.cPayTypes.WEBATM: this.$router.push('payInfo/webatm'); break;
        case this.cPayTypes.LINEPAY: this.$router.push('payInfo/linepay'); break;
        default: break;
      }
    },
  },
  computed: {
    ...mapGetters(['curPayBy']),
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
}
.remarks {
  min-height: 132.359px;;
  margin-top: 43px;
  margin-bottom: 15px;
  font-size: $f-size-1;
  line-height: $f-size-3;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  a {
    color: $clr-main;
  }
  .bg {
    position: absolute;
    right: 0;
    top: 0;
    width: 182px;
    height: 132.359px;
    background-image: url('../assets/icon_notice.svg');
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
.bold {
  font-weight: bold;
}
.hide-in-phone {
  display: none;
  @media(min-width: $limit-w-pc) {
    display: block;
  }
}
</style>

