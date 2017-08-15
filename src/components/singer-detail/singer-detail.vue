<template>
  <transition class="slide">
    <div class="singer-detail">
    </div>
  </transition> 
</template>

<script>
export default {
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/variable.styl'
.singer-detail
  position :fixed
  z-index : 100
  top: 0
  left: 0
  right: 0
  bottom: 0
  background : $color-background
.slide-entry-active, .slide-leave-active
  transition : all .3s
.slide-entry, .slide-leave-to
  transform : translate3d(100%, 0, 0)
</style>
