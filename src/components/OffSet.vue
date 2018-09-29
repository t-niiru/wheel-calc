<template>
  <div class="offset columns is-mobile is-centered">
    <div class="column">
      <h1 class='title'>オフセット計算</h1>
      <h2 class="subtitle">
        ホイールの幅やオフセットの違いによる<br />位置変化を計算します。<br />
        （1inch=25.4mm）
      </h2>
      <div class="contents">
        <form>
          <div class="original">
            <table class="table">
              <thead>
                <tr>
                  <td></td>
                  <th>リム幅(J)</th>
                  <th>インセット(mm)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>
                    Befoer
                  </th>
                  <td>
                    <div class="select">
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
                    </div>
                  </td>
                  <td>
                    <input class="OldOffset input" name="OldOffset" type="number" v-model="selectedOldOffset" placeholder="edit num">
                  </td>
                </tr>
                <tr>
                  <th>
                    After
                  </th>
                  <td>
                    <div class="select">
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
                    </div>
                  </td>
                  <td>
                    <input class="NewOffset input" name="NewOffset" type="number" v-model="selectedNewOffset" placeholder="edit num">
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p class="action-buttons">
            <input class="button" @click="calc()" type="button" name="合計" value="計  算" /><input class="button" @click="clear()" type="button" name="リセット" value="リセット" />
          </p>
          <div class="calculation">
            <table class="table">
              <thead>
                <tr>
                  <th>OUT</th>
                  <th>IN</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    {{ OutputOut }}
                  </td>
                  <td>
                    {{ OutputIn }}
                  </td>
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
          <p>計算上の数値ですので実際と異なる場合があります。</p>
          <p>「インセット」=「オフセット」</p>
          <p>アウトセットの場合は「-(マイナス)」を付けて下さい。</p>
        </div>
      </article>
    </div>
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
      var Out = (OldOut + NewOut) / 10

      var OldIn = this.selectedNewWidth * 127 - this.selectedOldWidth * 127
      var NewIn = this.selectedNewOffset * 10 - this.selectedOldOffset * 10
      var In = (OldIn + NewIn) / 10

      this.OutputOut = Out + 'mm'
      this.OutputIn = In + 'mm'
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

<style lang="scss" scoped>
.offset{
  position: relative;
  width: 100%;
  height: 100%;
  color: #fff;
  background: url('../../static/images/fdb951d0db96d7ff0b707cf90c1d11e4_s.jpg') no-repeat;
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
.original,
.action-buttons,
.calculation{
  width: 100%;
  max-width: 600px;
  margin: 0 auto 20px;
  .table{
    background: transparent;
    width: 100%;
    table-layout: fixed;
    th,
    td{
      text-align: center;
    }
    td{
      input{
        width: 82px;
         text-align: center;
      }
    }
  }
}
.message{
  width: 450px;
  max-width: 100%;
  margin: auto;
}
</style>
