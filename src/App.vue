<template>
  <div id="app">
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import 'ress'
import Footer from '@/components/Footer'

export default {
  name: 'App',
  components: {
    Footer
  }
}
</script>

<style lang='scss' scoped>
#app{
  width: 100vw;
  height: 100vh;
}
</style>
