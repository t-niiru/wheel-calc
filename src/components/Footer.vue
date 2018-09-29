<template>
  <footer class="footer">
    <nav>
      <ul>
        <li>
          <a href="/">home</a>
        </li>
        <li>
          <a href="/offSet">OffSet</a>
        </li>
        <li>
          <a href="/tiresize">TireSize</a>
        </li>
      </ul>
    </nav>
    <div class="content has-text-centered">
      <a href="/">&copy; Garage-216.com</a>
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
