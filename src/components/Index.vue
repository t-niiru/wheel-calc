<template>
  <div class="hello">
    <h1>ホイール&タイヤ計算</h1>
    <router-link to="/offset">オフセット計算</router-link>
    <router-link to="/tiresize">タイヤサイズ計算</router-link>
  </div>
</template>

<script>
export default {
  name: 'Index'
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
