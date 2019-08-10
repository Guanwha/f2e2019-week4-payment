<template>
  <div class="wrap">
    <!-- title -->
    <div class="pay-title">
      <img src='/static/icon_shop.svg'>
      <p>超商取貨付款</p>
    </div>
    <!-- select shop -->
    <div class="a1-select container">
      <!-- tool bar -->
      <div class="row a2-tool">
        <div class="col-6 col-lg-2 text flex-rlc">選擇取貨門市</div>
        <div class="col-6 col-lg-2 icon flex-rrc"><img src='../assets/logo_family.png'></div>
        <div class="col-lg-4 hide-in-phone"/>
        <div class="col-6 col-lg-2 icon-text flex-rlc">
          <img src='../assets/icon_add.svg'>
          <p>選擇取貨門市</p>
        </div>
        <div class="col-6 col-lg-2 icon-text flex-rrc notice hover-shadow"
             data-toggle="modal"
             data-target="#dialog-shop-list">
          <img src="../assets/icon_like.svg">
          <p>選擇常用門市</p>
        </div>
      </div>
      <!-- store info -->
      <div class="a2-store-bg">
        <!-- store name -->
        <div class="row a3-store">
          <div class="col-12 col-lg-2 text flex-rlc">取貨店名</div>
          <div class="col-4  col-lg-2 text flex-rlc">{{shopList[curShopID].store}}</div>
          <div class="col-8  col-lg-3 icon-text flex-rrc notice">
            <img src='../assets/icon_like.svg'>
            <p>儲存至常用門市</p>
          </div>
        </div>
        <!-- store address -->
        <hr style='margin: 0'>
        <div class="row a3-store">
          <div class="col-12 col-lg-2 text flex-rlc">取貨地址</div>
          <div class="col-12 col-lg-10 text flex-rlc">{{shopList[curShopID].address}}</div>
        </div>
      </div>
    </div>
    <!-- orderer information -->
    <div class="a1-orderer"></div>
    <!-- recepient information -->
    <div class="a1-recepient"></div>

    <!-- dialog -->
    <div class="modal fade" id="dialog-shop-list">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-body remove-p">
            <div v-for="(shop, key) in shopList"
                 :key="key">
              <div :class="['shop-item', {'active': curShopID === key}]"
                   @click='selectShop(key)'>
                <div class="shop-name">{{shop.store}}</div>
                <div class="shop-address">{{shop.address}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'PayByShop',
  methods: {
    ...mapActions(['selectShop']),
  },
  computed: {
    ...mapGetters(['shopList', 'curShopID']),
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
  align-items: center;
}
.pay-title {
  height: 27px;
  margin: 25px auto;
  display: flex;
  align-items: center;
  @media(min-width: $limit-w-pc) {
    margin: 46px auto;
  }
  img {
    width: 35.58px;
    height: 26.96px;
    margin: 0 10px;
  }
  p {
    font-size: $f-size-3;
  }
}
.a1-select {
  // layout
  .a2-tool {
    margin-bottom: 12px;
  }
  .a2-store-bg {
    padding: 0 15px;
    border-left: 2px solid $clr-main;
    .a3-store {
      height: 88px;
      padding: 20px 15px;
      background: $clr-bg-f5;
      display: flex;
      @media(min-width: $limit-w-pc) {
        height: 64px;
      }
    }
  }
  // detail
  .text {
    margin: 0;
    line-height: $f-size-2 * 1.5;
  }
  .icon {
    height: 24px;
  }
  .icon-text {
    height: 24px;
    p {
      margin-left: 5px;
      line-height: $f-size-2 * 1.5;
    }
  }
  .notice {
    color: $clr-main;
  }
  .hover-shadow:hover {
    filter: drop-shadow(0 0 10px);
  }
}
.a1-orderer {
  width: 100%;
  height: 100px;
  background: white;
}
.a1-recepient {}
.shop-item {
  padding: 10px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  &:hover {
    border: 2px solid $clr-sub;
  }
  &.active {
    background: $clr-sub;
  }
  .shop-name {
    font-weight: bold;
    font-size: $f-size-2;
    line-height: $f-size-2 * 2;
  }
  .shop-address {
    font-size: $f-size-1;
    line-height: $f-size-1 * 1.5;
  }
}
</style>

