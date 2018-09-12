<template>
  <div class="hello1">
    <h1>ツライチ計算</h1>
    <p>
      ホイール交換に伴うオフセットの違いによる位置変化を計算します。<br />
      （1inch=25.4mm）
    </p>
    <div>
      ※半角数字で入力してください。
    </div>
    <div class="offset">
      <form>
        <div>
          <select name="OldWidth" v-model="selectedOldWidth">
            <option value="4.0">4.0</option>
            <option value="4.5">4.5</option>
            <option value="5.0">5.0</option>
            <option value="5.5">5.5</option>
            <option value="6.0">6.0</option>
            <option value="6.5">6.5</option>
            <option value="7.0">7.0</option>
            <option value="7.5">7.5</option>
            <option value="8.0">8.0</option>
            <option value="8.5">8.5</option>
            <option value="9.0">9.0</option>
            <option value="9.5">9.5</option>
            <option value="10.0">10.0</option>
            <option value="10.5">10.5</option>
            <option value="11.0">11.0</option>
            <option value="11.5">11.5</option>
            <option value="12.0">12.0</option>
            <option value="12.5">12.5</option>
            <option value="13.0">13.0</option>
            <option value="13.5">13.5</option>
            <option value="14.0">14.0</option>
            <option value="14.5">14.5</option>
            <option value="15.0">15.0</option>
          </select>
          <input class="OldOffset" name="OldOffset" type="text" v-model="selectedOldOffset" placeholder="edit num">
        </div>
        <div>
          <select name="NewWidth" v-model="selectedNewWidth">
            <option value="4.0">4.0</option>
            <option value="4.5">4.5</option>
            <option value="5.0">5.0</option>
            <option value="5.5">5.5</option>
            <option value="6.0">6.0</option>
            <option value="6.5">6.5</option>
            <option value="7.0">7.0</option>
            <option value="7.5">7.5</option>
            <option value="8.0">8.0</option>
            <option value="8.5">8.5</option>
            <option value="9.0">9.0</option>
            <option value="9.5">9.5</option>
            <option value="10.0">10.0</option>
            <option value="10.5">10.5</option>
            <option value="11.0">11.0</option>
            <option value="11.5">11.5</option>
            <option value="12.0">12.0</option>
            <option value="12.5">12.5</option>
            <option value="13.0">13.0</option>
            <option value="13.5">13.5</option>
            <option value="14.0">14.0</option>
            <option value="14.5">14.5</option>
            <option value="15.0">15.0</option>
          </select>
          <input class="NewOffset" name="NewOffset" type="text" v-model="selectedNewOffset" placeholder="edit num">
        </div>
        <p class="button">
          <input @click="calc()" type="button" name="合計" value="計  算" />   <input @click="clear()" type="button" name="リセット" value="リセット" />
        </p>
        <div>
          out:{{ OutputOut }}in:{{ OutputIn }}
        </div>
      </form>
    </div>
    <div>
      <p class="caution">※計算上の数値ですので実際と異なる場合があります。</p>
      <p class="comment">「インセット」=「オフセット」</p>
      <p class="comment">アウトセットの場合は「-(マイナス)」を付けて下さい。</p>
    </div>
    <router-link to="/">topへ戻る</router-link>
    <router-link to="/TireSize">TireSizeにいくよ！</router-link>
  </div>
</template>

<script>
export default {
  name: 'OffSet',
  data () {
    return {
      selectedOldWidth: '6.0',
      selectedOldOffset: '35',
      selectedNewWidth: '8.0',
      selectedNewOffset: '40',
      OutputOut: '0',
      OutputIn: '0'
    }
  },
  methods: {
    calc: function () {
      var OldOut = this.selectedNewWidth * 127 - this.selectedOldWidth * 127
      var NewOut = this.selectedOldOffset * 10 - this.selectedNewOffset * 10
      this.OutputOut = (OldOut + NewOut) / 10

      var OldIn = this.selectedNewWidth * 127 - this.selectedOldWidth * 127
      var NewIn = this.selectedNewOffset * 10 - this.selectedOldOffset * 10
      this.OutputIn = (OldIn + NewIn) / 10
    },
    clear: function () {
      this.selectedOldWidth = '6.0'
      this.selectedOldOffset = '35'
      this.selectedNewWidth = '8.0'
      this.selectedNewOffset = '40'
      this.OutputOut = '0'
      this.OutputIn = '0'
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
