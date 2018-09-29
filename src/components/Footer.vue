<template>
  <footer class="footer">
    <nav>
      <ul>
        <li>
          <router-link to="/">home</router-link>
        </li>
        <li>
          <router-link to="/offSet">OffSet</router-link>
        </li>
        <li>
          <router-link to="/tiresize">TireSize</router-link>
        </li>
      </ul>
    </nav>
    <div class="content has-text-centered">
      <router-link to="/">&copy; Garage-216.com</router-link>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss" scoped>
footer{
  color: #fff;
  background-color: #484848;
  a{
    color: #fff;
  }
  nav{
    text-align: center;
    margin-bottom: 20px;
    ul{
      display: flex;
    }
    li{
      text-align: center;
      flex-grow: 1;
      & + li{
        border-left: 1px solid #fff;
      }
    }
  }
}
</style>
