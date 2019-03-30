<template>
    <span class="support-ico" :class="iconCls"></span>
</template>

<script>
export default {
  name: 'support-ico',
  porps: {
    size: {
      type: Number
    },
    type: {
      type: Number
    }
  },
  computed: {
    iconCls () {
      const classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
      return `icon-${this.size} ${classMap[this.type]}`
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~common/stylus/mixin"
  /*@import "~common/stylus/variable"*/

  .support-ico
    display: inline-block
    background-repeat: no-repeat

  .icon-1
    width: 12px
    height: 12px
    background-size: 12px 12px;
    &.decrease
      bg-image('decrease_1')
    &.discount
      bg-image('discount_1')
    &.special
      bg-image('special_1')
    &.invoice
      bg-image('invoice_1')
    &.guarantee
      bg-image('guarantee_1')

  .icon-2
    width: 16px
    height: 16px
    background-size: 16px 16px;
    &.decrease
      bg-image('decrease_2')
    &.discount
      bg-image('discount_2')
    &.special
      bg-image('special_2')
    &.invoice
      bg-image('invoice_2')
    &.guarantee
      bg-image('guarantee_2')

  .icon-3
    width: 20px
    height: 20px
    background-size: 20px 20px;
    &.decrease
      bg-image('decrease_3')
    &.discount
      bg-image('discount_3')
    &.special
      bg-image('special_3')
    &.invoice
      bg-image('invoice_3')
    &.guarantee
      bg-image('guarantee_3')
</style>
