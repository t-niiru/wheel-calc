<template>
  <div class="tiresize columns is-mobile is-centered">
    <div class="column">
      <h1 class='title'>タイヤサイズ計算</h1>
      <h2 class="subtitle">インチアップ・ダウンに伴う<br />タイヤの外径変化を計算します。</h2>
      <div class="contents">
        <form>
          <div class="original">
            <table class="table">
              <thead>
                <tr>
                  <td></td>
                  <th>タイヤ幅<br />(mm)</th>
                  <td></td>
                  <th>偏平率<br />(%)</th>
                  <td></td>
                  <th>インチ<br />(inch)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Befor</th>
                  <td>
                    <div class="select">
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
                        <option value="305">315</option>
                        <option value="305">325</option>
                        <option value="305">335</option>
                        <option value="305">345</option>
                        <option value="305">355</option>
                        <option value="305">365</option>
                        <option value="305">375</option>
                        <option value="305">385</option>
                        <option value="305">395</option>
                      </select>
                    </div>
                  </td>
                  <th>/</th>
                  <td>
                    <div class="select">
                      <select v-model="selectedOldHeight">
                        <option value="30">25</option>
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
                    </div>
                  </td>
                  <th>R</th>
                  <td>
                    <div class="select">
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
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>After</th>
                  <td>
                    <div class="select">
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
                        <option value="305">315</option>
                        <option value="305">325</option>
                        <option value="305">335</option>
                        <option value="305">345</option>
                        <option value="305">355</option>
                        <option value="305">365</option>
                        <option value="305">375</option>
                        <option value="305">385</option>
                        <option value="305">395</option>
                      </select>
                    </div>
                  </td>
                  <th>/</th>
                  <td>
                    <div class="select">
                      <select v-model="selectedNewHeight">
                        <option value="30">25</option>
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
                    </div>
                  </td>
                  <th>R</th>
                  <td>
                    <div class="select">
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
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="action-buttons">
            <input class="button" @click="calc()" type="button" value="計算" />   <input class="button" @click="clear()" name="リセット" type="button" value="リセット" />
          </div>
          <div class="calculation">
            <table class="table">
              <tbody>
                <tr>
                  <td></td>
                  <th>Befor</th>
                  <th>After</th>
                </tr>
                <tr>
                  <th>タイヤ外径(直径)</th>
                  <td>{{ OutputOldStature }}</td>
                  <td>{{ OutputNewStature }}</td>
                </tr>
                <tr>
                  <th>外径誤差</th>
                  <td colspan="2">{{ OutputFradius }}</td>
                </tr>
                <tr>
                  <th>車高誤差</th>
                  <td colspan="2">{{ OutputHalfFradius }}</td>
                </tr>
                <tr>
                  <th>スピードメーター<br />誤差</th>
                  <td>100km/h</td>
                  <td><div id="set">{{ OutputPercent }}</div></td>
                </tr>
              </tbody>
            </table>
          </div>
        </form>
      </div>
      <article class="message is-small is-danger">
        <div class="message-header">
          <p>注意</p>
        </div>
        <div class="message-body">
          <p class="caution">計算上の数値ですので実際と異なる場合があります。</p>
          <p class="comment">実際の外径等は各メーカーのカタログを参照下さい。</p>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'

export default {
  name: 'TireSize',
  components: {
    Header
  },
  data () {
    return {
      selectedOldWidth: '195',
      selectedOldHeight: '65',
      selectedOldInch: '15',
      selectedNewWidth: '215',
      selectedNewHeight: '45',
      selectedNewInch: '17',
      OutputOldStature: '',
      OutputNewStature: '',
      OutputFradius: '',
      OutputHalfFradius: '',
      OutputPercent: ''
    }
  },
  methods: {
    calc: function () {
      var keta = 100
      var OldStature = Math.round(
        keta * (
          this.selectedOldInch * 25.4 +
          this.selectedOldWidth * this.selectedOldHeight / 50
        )) / keta
      var NewStature = Math.round(
        keta * (
          this.selectedNewInch * 25.4 +
          this.selectedNewWidth * this.selectedNewHeight / 50
        )) / keta
      var Fradius = Math.round(
        keta * (
          NewStature - OldStature
        )) / keta
      var HalfFradius = Math.round(keta * (Fradius / 2)) / keta
      var Percent = Math.round(1000 * (OldStature / NewStature)) / 10

      this.OutputOldStature = OldStature + 'mm'
      this.OutputNewStature = OldStature + 'mm'
      this.OutputFradius = Fradius + 'mm'
      this.OutputHalfFradius = HalfFradius + 'mm'
      this.OutputPercent = Percent + 'km/h'
    },
    clear: function () {
      this.selectedOldWidth = '195'
      this.selectedOldHeight = '65'
      this.selectedOldInch = '15'
      this.selectedNewWidth = '215'
      this.selectedNewHeight = '45'
      this.selectedNewInch = '17'
      this.OutputOldStature = ''
      this.OutputNewStature = ''
      this.OutputFradius = ''
      this.OutputHalfFradius = ''
      this.OutputPercent = ''
    }
  }
}
</script>

<style lang='scss' scoped>
a {
  color: #42b983;
}
.tiresize{
  position: relative;
  width: 100%;
  height: 100%;
  color: #fff;
  background: url('/static/images/1fd88b5418cb550d7bed271115d8721b_s.jpg') no-repeat;
  background-size: cover;
  &::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0,0,0,0.7);
  }
}
.column{
  z-index: 1;
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}
.contents{
  margin: 0 0 40px;
}
.action-buttons{
  display: flex;
  justify-content: space-around;
  margin: 0 0 20px;
}
.table{
  margin: 0 0 20px;
  background: transparent;
}
.original,
.action-buttons,
.calculation{
  width: 100%;
  max-width: 600px;
  margin: 0 auto 20px;
  table{
    width: 100%;
  }
}
.message{
  width: 450px;
  max-width: 100%;
  margin: auto;
}
</style>
