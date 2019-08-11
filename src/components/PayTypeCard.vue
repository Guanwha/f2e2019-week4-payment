<template>
  <div v-bind:class="['wrap', (isSelected) ? 'selected-border' : 'unselect-border']">
    <div class="circle uncheck-circle" v-show='!isSelected'></div>
    <div class="circle checked-circle" v-show='isSelected'></div>
    <img :src="icon">
    <div class="text">
      <div v-bind:class="['title', { 'disabled' : isDisabled }]">{{title}}</div>
      <div v-bind:class="['remark', { 'disabled' : isDisabled }]">{{remark}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PayTypeCard',
  props: {
    isSelected: Boolean,
    icon: String,
    title: String,
    remark: String,
    isDisabled: Boolean,
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/_variables.scss';
@import '../styles/common.scss';

.wrap {
  height: 120px;
  background: $clr-bg-f5;
  border-radius: 4px;
  margin: 10px 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  img {
    margin: 0 $mlr-gap;
  }
  .text {
    width: 50%;
    text-align: left;
    margin: 0 $mlr-gap;
    .title {
      font-size: $f-size-2;
      line-height: $f-size-2 * 1.1;
      color: $clr-font-6;
    }
    .remark {
      font-size: $f-size-1;
      line-height: $f-size-3;
      color: $clr-font-9;
      margin-top: 5px;
    }
  }
}
.unselect-border {
  border: 1px solid $clr-line-d;
}
.selected-border {
  border: 1px solid $clr-main;
}
.disabled {
  color: $clr-line-d !important;
}
</style>

