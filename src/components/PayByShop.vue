<template>
  <div class="wrap">
    <!-- title -->
    <div class="pay-title">
      <img :src="titleIcon">
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
    <div class="container a1-someone">
      <!-- title -->
      <div class="row a2-header">
        <div class="col-12 flex-rlc">填寫訂購人資訊</div>
      </div>
      <!-- orderer info -->
      <div class="a2-someone-bg">
        <!-- orderer name & phone -->
        <div class="row a3-someone">
          <div class="col-12 col-lg-1 title">姓名</div>
          <!-- name -->
          <div class="col-12 col-lg-5 field">
            <input class="form-control" type="text" id="idName" v-model="orderer.name" placeholder="請填寫真實姓名">
          </div>
          <div class="col-12 col-lg-1 title">
            <div>手機</div>
          </div>
          <!-- area code -->
          <div class="col-12 col-lg-1 field">
            <div class="dropdown remove-p">
              <button id="idAreaCode"
                      type="button" class="btn btn-dropdown dropdown-toggle"
                      data-toggle="dropdown">
                {{orderer.areaCode}}
              </button>
              <div class="dropdown-menu">
                <div v-for='(country, code) in areaCode'
                    :key='code'>
                  <a class="dropdown-item" href="#" @click="orderer.areaCode = code">{{code}} {{country}}</a>
                </div>
              </div>
            </div>
          </div>
          <!-- phone code -->
          <div class="col-12 col-lg-4 field">
            <input class="form-control" type="number" id="idPhone" v-model="orderer.phone" placeholder="請填寫手機號碼">
          </div>
        </div>
        <!-- orderer address -->
        <div class="row a3-someone">
          <div class="col-12 col-lg-1 title">
            <div>地址</div>
          </div>
          <div class="col-12 col-lg-2 field">
            <input class="form-control" type="text" id="idPostCode" v-model="orderer.postCode" placeholder="郵遞區號">
          </div>
          <div class="col-12 col-lg-9 field">
            <input class="form-control" type="text" id="idAddress" v-model="orderer.address" placeholder="例：新北市信義區復興路999段99號1巷8樓">
          </div>
        </div>
        <!-- orderer email -->
        <div class="row a3-someone">
          <div class="col-12 col-lg-1 title">
            <div>Email</div>
          </div>
          <div class="col-12 col-lg-11 field">
            <input class="form-control" type="email" id="idEmail" v-model="orderer.email" placeholder="寄送通知會發送至此email">
          </div>
        </div>
      </div>
    </div>
    <!-- recipient information -->
    <div class="container a1-someone">
      <!-- title -->
      <div class="row a2-header">
        <div class="col-6 flex-rlc">填寫收件人資訊</div>
        <div class="col-6 flex-rrc" @click='switchEqualOrdererInfo'>
          <div class="circle uncheck-circle" v-show='!isSameOrdererInfo'></div>
          <div class="circle checked-circle" v-show='isSameOrdererInfo'></div>
          <p>同訂購人資料</p>
        </div>
      </div>
      <!-- recipient info -->
      <div class="a2-someone-bg" v-show='!isSameOrdererInfo'>
        <!-- recipient name & phone -->
        <div class="row a3-someone">
          <div class="col-12 col-lg-1 title">姓名</div>
          <!-- name -->
          <div class="col-12 col-lg-5 field">
            <input class="form-control" type="text" id="idName2" v-model="recipient.name" placeholder="請填寫真實姓名">
          </div>
          <div class="col-12 col-lg-1 title">
            <div>手機</div>
          </div>
          <!-- area code -->
          <div class="col-12 col-lg-1 field">
            <div class="dropdown remove-p">
              <button id="idAreaCode2"
                      type="button" class="btn btn-dropdown dropdown-toggle"
                      data-toggle="dropdown">
                {{recipient.areaCode}}
              </button>
              <div class="dropdown-menu">
                <div v-for='(country, code) in areaCode'
                    :key='code'>
                  <a class="dropdown-item" href="#" @click="recipient.areaCode = code">{{code}} {{country}}</a>
                </div>
              </div>
            </div>
          </div>
          <!-- phone code -->
          <div class="col-12 col-lg-4 field">
            <input class="form-control" type="number" id="idPhone2" v-model="recipient.phone" placeholder="請填寫手機號碼">
          </div>
        </div>
        <!-- recipient address -->
        <div class="row a3-someone">
          <div class="col-12 col-lg-1 title">
            <div>地址</div>
          </div>
          <div class="col-12 col-lg-2 field">
            <input class="form-control" type="text" id="idPostCode2" v-model="recipient.postCode" placeholder="郵遞區號">
          </div>
          <div class="col-12 col-lg-9 field">
            <input class="form-control" type="text" id="idAddress2" v-model="recipient.address" placeholder="例：新北市信義區復興路999段99號1巷8樓">
          </div>
        </div>
        <!-- recipient email -->
        <div class="row a3-someone">
          <div class="col-12 col-lg-1 title">
            <div>Email</div>
          </div>
          <div class="col-12 col-lg-11 field">
            <input class="form-control" type="email" id="idEmail2" v-model="recipient.email" placeholder="寄送通知會發送至此email">
          </div>
        </div>
      </div>
    </div>

    <!-- remark -->
    <div class="container">
      <div class="row">
        <div class="a1-remark">
          <div class="col-12 remarks">
            <div class="col-12">・請確認您填寫的資料是否正確，一旦訂單完成後，付款與物流方式皆無法修改。</div>
            <div class="col-12">・若訂單內含預購、無庫存商品調貨時間請參考「商品平均調貨時間」。</div>
            <div class="col-12">・若您對取貨或付款的方式有疑問，請詳閱<a href='#'>「購買說明」</a>。</div>
            <div class='col-12 bold'>・請確認您已詳閱並瞭解本站<a href='#'>「購買說明」</a>內容，訂單完成即表示您已同意其中的各項說明。</div>
            <div class="col-12 check flex-rlc" @click='switchRemarkChecked'>
              <div class="circle uncheck-circle" v-show='!remarkChecked'></div>
              <div class="circle checked-circle" v-show='remarkChecked'></div>
              <p>確認，我已瞭解</p>
            </div>
            <div class="bg hide-in-phone"/>
          </div>
        </div>
      </div>
    </div>

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
  data() {
    return {
      titleIcon: './static/images/icon_shop.svg',
      areaCode: {
        886: '台灣',
        86: '中國',
        81: '日本',
        82: '韓國',
      },
      orderer: {
        name: '',
        areaCode: '886',
        phone: '',
        postCode: '',
        address: '',
        email: '',
      },
      recipient: {
        name: '',
        areaCode: '886',
        phone: '',
        postCode: '',
        address: '',
        email: '',
      },
      isSameOrdererInfo: false,
      remarkChecked: false,
    };
  },
  methods: {
    switchEqualOrdererInfo() {
      this.isSameOrdererInfo = !this.isSameOrdererInfo;
      if (this.isSameOrdererInfo) {
        this.recipient = Object.assign({}, this.orderer);   // copy
      }
    },
    switchRemarkChecked() {
      this.remarkChecked = !this.remarkChecked;
    },
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
@import '../styles/main.scss';

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
    height: $f-size-2 * 1.5;
  }
  .icon-text {
    height: $f-size-2 * 1.5;
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
.a1-someone {
  width: 100%;
  margin-top: 10px;
  .a2-header {
    padding: 10px 0;
  }
  .a2-someone-bg {
    padding: 0 15px;
    border-left: 2px solid $clr-main;
    .a3-someone {
      padding: 5px 15px;
      font-size: $f-size-2;
      line-height: $f-size-2 * 1.5;
      text-align: left;
      .title {
        margin: 10px auto 5px auto;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        @media(min-width: $limit-w-pc) {
          display: flex;
          justify-content: center;
        }
      }
      .field {
        margin: 5px auto;
      }
    }
  }
}
.a1-remark {
  width: 100%;
  padding: 0 15px;
  .check {
    margin-top: 15px;
    font-size: $f-size-2;
  }
}
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
.btn-dropdown {
  border: 1px solid $clr-line-d;
  border-radius: 0.25rem;
}
</style>

