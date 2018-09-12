<template>
  <div class="hello2">
    <h1>{{ msg }}</h1>
    <router-link to="/">topに戻る</router-link>
    <router-link to="/OffSet">OffSetにいくよ！</router-link>
  </div>
</template>

<script>
export default {
  name: 'TireSize',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App TireSize'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
