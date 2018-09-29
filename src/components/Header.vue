<template>
  <header class="header">
    <nav>
      <router-link to="/offSet" v-if="OffsetPage">OffSetにいくよ！</router-link>
      <router-link to="/" v-if="TopPage">topに戻る</router-link>
      <router-link to="/tiresize" v-if="TiresizePage">TireSizeにいくよ！</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      TopPage: true,
      OffsetPage: true,
      TiresizePage: true
    }
  },
  created () {
    var getpath = location.pathname
    console.log(getpath)
  }
}
</script>

<style lang="scss" scoped>
  header{
    z-index: 1;
  }
</style>
