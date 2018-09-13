<template>
  <div class="hello2">
    <h1>タイヤサイズ計算</h1>
    <p>インチアップ・ダウンに伴うタイヤの外径変化を計算します。</p>
    <div class="tiresize">
      <form>
        <div>
          <table>
            <tbody>
              <tr>
                <td></td>
                <th>元になるサイズ</th>
                <th>調べるサイズ</th>
              </tr>
              <tr>
                <td>
                  <select v-model="selectedOldWidth">
                    <option value="135">135</option>
                    <option value="145">145</option>
                    <option value="155">155</option>
                    <option value="165">165</option>
                    <option value="175">175</option>
                    <option value="185">185</option>
                    <option value="195">195</option>
                    <option value="205">205</option>
                    <option value="215">215</option>
                    <option value="225">225</option>
                    <option value="235">235</option>
                    <option value="245">245</option>
                    <option value="255">255</option>
                    <option value="265">265</option>
                    <option value="275">275</option>
                    <option value="285">285</option>
                    <option value="295">295</option>
                    <option value="305">305</option>
                  </select>
                </td>
                <th>/</th>
                <td>
                  <select v-model="selectedOldHeight">
                    <option value="30">30</option>
                    <option value="35">35</option>
                    <option value="40">40</option>
                    <option value="45">45</option>
                    <option value="50">50</option>
                    <option value="55">55</option>
                    <option value="60">60</option>
                    <option value="65">65</option>
                    <option value="70">70</option>
                    <option value="75">75</option>
                    <option value="80">80</option>
                </select>
                </td>
                <th>R</th>
                <td>
                  <select v-model="selectedOldInch">
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>
                  <select v-model="selectedNewWidth">
                    <option value="135">135</option>
                    <option value="145">145</option>
                    <option value="155">155</option>
                    <option value="165">165</option>
                    <option value="175">175</option>
                    <option value="185">185</option>
                    <option value="195">195</option>
                    <option value="205">205</option>
                    <option value="215">215</option>
                    <option value="225">225</option>
                    <option value="235">235</option>
                    <option value="245">245</option>
                    <option value="255">255</option>
                    <option value="265">265</option>
                    <option value="275">275</option>
                    <option value="285">285</option>
                    <option value="295">295</option>
                    <option value="305">305</option>
                  </select>
                </td>
                <th>/</th>
                <td>
                  <select v-model="selectedNewHeight">
                    <option value="30">30</option>
                    <option value="35">35</option>
                    <option value="40">40</option>
                    <option value="45">45</option>
                    <option value="50">50</option>
                    <option value="55">55</option>
                    <option value="60">60</option>
                    <option value="65">65</option>
                    <option value="70">70</option>
                    <option value="75">75</option>
                    <option value="80">80</option>
                  </select>
                </td>
                <th>R</th>
                <td>
                  <select v-model="selectedNewInch">
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="button">
          <input @click="calc()" type="button" value="計算" />   <input @click="clear()" name="リセット" type="button" value="リセット" />
        </p>
        <div>
          <table>
            <tbody>
              <tr>
                <td></td>
                <th>元になるサイズ</th>
                <th>調べるサイズ</th>
              </tr>
              <tr>
                <th>タイヤ外径(直径)</th>
                <td>{{ OldStature }}mm</td>
                <td>{{ NewStature }}mm</td>
              </tr>
              <tr>
                <th>外径誤差</th>
                <td colspan="2">{{ Fradius }}mm</td>
              </tr>
              <tr>
                <th>車高誤差</th>
                <td colspan="2">{{ HalfFradius }}mm</td>
              </tr>
              <tr>
                <th>スピードメーター誤差</th>
                <td>100km/h</td>
                <td><div id="set">{{ Percent }}km/h</div></td>
              </tr>
            </tbody>
          </table>
        </div>
      </form>
    </div>
    <div>
      <p class="caution">※計算上の数値ですので実際と異なる場合があります。</p>
      <p class="comment">実際の外径等は各メーカーのカタログを参照下さい。</p>
    </div>

    <router-link to="/">topに戻る</router-link>
    <router-link to="/OffSet">OffSetにいくよ！</router-link>
  </div>
</template>

<script>
export default {
  name: 'TireSize',
  data () {
    return {
      selectedOldWidth: '195',
      selectedOldHeight: '65',
      selectedOldInch: '15',
      selectedNewWidth: '215',
      selectedNewHeight: '45',
      selectedNewInch: '17',
      OldStature: '',
      NewStature: '',
      Fradius: '',
      HalfFradius: '',
      Percent: ''
    }
  },
  methods: {
    calc: function () {
      var keta = 100
      this.OldStature = Math.round(
        keta * (
          this.selectedOldInch * 25.4 +
          this.selectedOldWidth * this.selectedOldHeight / 50
        )) / keta
      this.NewStature = Math.round(
        keta * (
          this.selectedNewInch * 25.4 +
          this.selectedNewWidth * this.selectedNewHeight / 50
        )) / keta
      this.Fradius = Math.round(
        keta * (
          this.NewStature - this.OldStature
        )) / keta
      this.HalfFradius = Math.round(keta * (this.Fradius / 2)) / keta
      this.Percent = Math.round(1000 * (this.OldStature / this.NewStature)) / 10
    },
    clear: function () {
      this.selectedOldWidth = '195'
      this.selectedOldHeight = '65'
      this.selectedOldInch = '15'
      this.selectedNewWidth = '215'
      this.selectedNewHeight = '45'
      this.selectedNewInch = '17'
      this.OldStature = ''
      this.NewStature = ''
      this.Fradius = ''
      this.HalfFradius = ''
      this.Percent = ''
    }
  }
}
</script>

<style lang='scss' scoped>
// @include absolute(0,0,0,0);
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
