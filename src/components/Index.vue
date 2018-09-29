<template>
  <div class="index columns is-mobile is-centered">
    <div class="column">
      <h1 class="title">ホイール&タイヤ計算</h1>
      <router-link to="/offset" class="button">オフセット計算</router-link>
      <router-link to="/tiresize" class="button">タイヤサイズ計算</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index'
}
</script>

<style lang="scss" scoped>
a {
  color: #42b983;
}
.index{
  position: relative;
  width: 100%;
  height: calc(100% - 212px);
  background: url('/static/images/fda0f5aae99faddc4e9116d2395dcaff_l.jpg') no-repeat;
  background-size: cover;
  &::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0,0,0,0.5);
  }
}
.column{
  z-index: 1;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}

</style>
