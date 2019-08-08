<template>
  <div class="wrap">
    <!-- header -->
    <PurchaseInfo/>
    <!-- content -->
    <div class="content"></div>
    <!-- buttons -->
    <div class="btns container">
      <div class="col-lg-8 hide-in-phone"></div>
      <div class="col-6 col-lg-2">
        <button class="btn prev" disabled>上一步</button>
      </div>
      <div class="col-6 col-lg-2">
        <button class="btn next">下一步</button>
      </div>
    </div>
  </div>
</template>

<script>
import PurchaseInfo from '../components/PurchaseInfo';

export default {
  name: 'SelectPayType',
  components: {
    PurchaseInfo,
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

