<template>
  <div class="wrap">
    <!-- header -->
    <PurchaseInfo :pShowDetail='true'/>
    <!-- pay content -->
    <router-view></router-view>

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
            <input class="form-control" type="text" id="idName" v-model="orderer.name" placeholder="請填寫真實姓名"
                   name='name' v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('name') }">
            <span v-show="errors.has('name')" class="is-danger">{{ errors.first('name') }}</span>
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
            <input class="form-control" type="number" id="idPhone" v-model="orderer.phone" placeholder="請填寫手機號碼"
                   name='phone' v-validate="'required|numeric'" :class="{'input': true, 'is-danger': errors.has('phone') }">
            <span v-show="errors.has('phone')" class="is-danger">{{ errors.first('phone') }}</span>
          </div>
        </div>
        <!-- orderer address -->
        <div class="row a3-someone">
          <div class="col-12 col-lg-1 title">
            <div>地址</div>
          </div>
          <div class="col-12 col-lg-2 field">
            <input class="form-control" type="text" id="idPostCode" v-model="orderer.postCode" placeholder="郵遞區號"
                   name='postcode' v-validate="'required|numeric'" :class="{'input': true, 'is-danger': errors.has('postcode') }">
            <span v-show="errors.has('postcode')" class="is-danger">{{ errors.first('postcode') }}</span>
          </div>
          <div class="col-12 col-lg-9 field">
            <input class="form-control" type="text" id="idAddress" v-model="orderer.address" placeholder="例：新北市信義區復興路999段99號1巷8樓"
                   name='address' v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('address') }">
            <span v-show="errors.has('address')" class="is-danger">{{ errors.first('address') }}</span>
          </div>
        </div>
        <!-- orderer email -->
        <div class="row a3-someone">
          <div class="col-12 col-lg-1 title">
            <div>Email</div>
          </div>
          <div class="col-12 col-lg-11 field">
            <p class="control has-icon has-icon-right">
              <input class="form-control" type="email" id="idEmail" v-model="orderer.email" placeholder="寄送通知會發送至此email"
                     name='email' v-validate="'required|email'" :class="{'input': true, 'is-danger': errors.has('email') }">
              <span v-show="errors.has('email')" class="is-danger">{{ errors.first('email') }}</span>
            </p>
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
          <p>同訂購人</p>
        </div>
      </div>
      <!-- recipient info -->
      <div class="a2-someone-bg" v-show='!isSameOrdererInfo'>
        <!-- recipient name & phone -->
        <div class="row a3-someone">
          <div class="col-12 col-lg-1 title">姓名</div>
          <!-- name -->
          <div class="col-12 col-lg-5 field">
            <input class="form-control" type="text" id="idName2" v-model="recipient.name" placeholder="請填寫真實姓名"
                   name='name2' v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('name2') }">
            <span v-show="errors.has('name2')" class="is-danger">{{ errors.first('name2') }}</span>
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
            <input class="form-control" type="number" id="idPhone2" v-model="recipient.phone" placeholder="請填寫手機號碼"
                   name='phone2' v-validate="'required|numeric'" :class="{'input': true, 'is-danger': errors.has('phone2') }">
            <span v-show="errors.has('phone2')" class="is-danger">{{ errors.first('phone2') }}</span>
          </div>
        </div>
        <!-- recipient address -->
        <div class="row a3-someone">
          <div class="col-12 col-lg-1 title">
            <div>地址</div>
          </div>
          <div class="col-12 col-lg-2 field">
            <input class="form-control" type="text" id="idPostCode2" v-model="recipient.postCode" placeholder="郵遞區號"
                   name='postCode2' v-validate="'required|numeric'" :class="{'input': true, 'is-danger': errors.has('postCode2') }">
            <span v-show="errors.has('postCode2')" class="is-danger">{{ errors.first('postCode2') }}</span>
          </div>
          <div class="col-12 col-lg-9 field">
            <input class="form-control" type="text" id="idAddress2" v-model="recipient.address" placeholder="例：新北市信義區復興路999段99號1巷8樓"
                   name='address2' v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('address2') }">
            <span v-show="errors.has('address2')" class="is-danger">{{ errors.first('address2') }}</span>
          </div>
        </div>
        <!-- recipient email -->
        <div class="row a3-someone">
          <div class="col-12 col-lg-1 title">
            <div>Email</div>
          </div>
          <div class="col-12 col-lg-11 field">
            <input class="form-control" type="email" id="idEmail2" v-model="recipient.email" placeholder="寄送通知會發送至此email"
                   name='email2' v-validate="'required|email'" :class="{'input': true, 'is-danger': errors.has('email2') }">
            <span v-show="errors.has('email2')" class="is-danger">{{ errors.first('email2') }}</span>
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
            <div class="col-12 check flex-rlc" @click='switchRemarkChecked'
                 :class="{'is-danger': !remarkChecked }">
              <div class="circle uncheck-circle" v-show='!remarkChecked'></div>
              <div class="circle checked-circle" v-show='remarkChecked'></div>
              <p>確認，我已瞭解</p>
              <div style='width: 10px'/>
              <p v-show="!remarkChecked" class="is-danger">(You need to check this firstly.)</p>
            </div>
            <div class="bg hide-in-phone"/>
          </div>
        </div>
      </div>
    </div>

    <!-- buttons -->
    <div class="btns container">
      <div class="col-lg-8 hide-in-phone"></div>
      <div class="col-6 col-lg-2">
        <button class="btn prev" @click="prev">上一步</button>
      </div>
      <div class="col-6 col-lg-2">
        <button :class="['btn', 'next', {'disabled': !remarkChecked}]" @click="next" :disabled="!remarkChecked">下一步</button>
      </div>
    </div>

    <!-- footer -->
    <div style="height: 30px"/>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import PurchaseInfo from '../components/PurchaseInfo';

export default {
  name: 'PayInfo',
  components: {
    PurchaseInfo,
  },
  data() {
    return {
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
  mounted() {
    this.orderer = Object.assign({}, this.curOrderer);
    this.recipient = Object.assign({}, this.curRecipient);
  },
  methods: {
    switchEqualOrdererInfo() {
      this.isSameOrdererInfo = !this.isSameOrdererInfo;
      if (this.isSameOrdererInfo) {
        this.recipient = Object.assign({}, this.orderer);   // copy
      }
    },
    copyToRecipientIfNeed() {
      if (this.isSameOrdererInfo) {
        this.recipient = Object.assign({}, this.orderer);   // copy
      }
    },
    switchRemarkChecked() {
      this.remarkChecked = !this.remarkChecked;
    },
    prev() {
      this.$router.back();
    },
    next() {
      // copy if need
      this.copyToRecipientIfNeed();

      // validator check
      this.$validator.validate().then((valid) => {
        // check remark has read
        if (!this.remarkChecked) return;

        // check validation
        if (valid) {
          this.checkOrder({
            orderer: this.orderer,
            recipient: this.recipient,
          });
          this.$router.push({ name: 'PayCheck' });
        }
      });
    },
    ...mapActions(['checkOrder']),
  },
  computed: {
    ...mapGetters(['curOrderer', 'curRecipient']),
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
.btn-dropdown {
  border: 1px solid $clr-line-d;
  border-radius: 0.25rem;
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
    &.disabled {
      background: $clr-main;
    }
  }
}
</style>

