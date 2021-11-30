<template>
  <div class="card">
    <table class="table table-bordered table-sm mt-1">
      <tbody>
      <tr>
        <td class="bg-dark text-white" v-if="type === 'expense' || type === 'qoldiq'">Bugungi chiqim:</td>
        <td class="bg-dark text-white" v-if="type === 'income' || type === 'qoldiq'">Bugungi kirim:</td>
        <td class="bg-dark text-white" v-if="type === 'expense' || type === 'qoldiq'">Jami chiqim:</td>
        <td class="bg-dark text-white" v-if="type === 'income' || type === 'qoldiq'">Jami kirm:</td>
        <td class="bg-dark text-white" v-if="type === 'qoldiq'">Qoldiq:</td>
      </tr>
      <tr>
        <td v-if="type === 'expense' || type === 'qoldiq'"><b>{{ statistics.expense }} so'm</b></td>
        <td v-if="type === 'income' || type === 'qoldiq'"><b>+{{ statistics.income }} so'm</b></td>
        <td v-if="type === 'expense' || type === 'qoldiq'"><b>-{{ statistics.total_expense }} so'm</b></td>
        <td v-if="type === 'income' || type === 'qoldiq'"><b>+{{ statistics.total_income }} so'm</b></td>
        <td v-if="type === 'qoldiq'"><b>{{ statistics.qoldiq }} so'm</b></td>
      </tr>
      </tbody>
    </table>
    <table class="table table-sm">
      <thead class="table-dark p-5 table-sm">
      <tr>
        <th scope="col"></th>
        <th scope="col">Vaqti</th>
        <th scope="col">Nomi</th>
        <th scope="col" class="tdcenter">Hafta</th>
        <th scope="col" class="tdcenter">Summasi</th>
        <th scope="col" class="tdcenter">Turi</th>
        <th scope="col" class="tdcenter">Pul turi</th>
        <th scope="col" style=" width: 7%; text-align: center; ">Amallar</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(value) in trades" :class="(trTrade[value.id] === true) ? 'bg-info' : ''">
        <td width="1%">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" @click="checkbox(value.real_money, $event, value.id)" v-model="checkedTrade[value.id]">
          </div>
        </td>
        <td width="7%" class="float-left  align-middle" v-text="value.time"></td>
        <td class="float-left align-middle " v-text="value.name"></td>
        <td width="7%" class="tdcenter align-middle" v-text="value.week"></td>
        <td width="15%" class="tdcenter  align-middle">
          <b>{{ value.short_type + value.money }} so'm</b>
        </td>
        <td width="15%" class="tdcenter  align-middle" v-html="value.category_name"></td>
        <td width="15%" class="tdcenter align-middle" v-html="value.money_type_name_print"></td>
        <td width="5%" class="tdcenter align-middle">
          <nuxt-link :to="`/edit/${value.id}`" class="btn btn-primary btn-sm padingkichkina">
            <i class="bi bi-pencil"></i>
          </nuxt-link>
          <a class="btn btn-outline-danger align-middle btn-sm padingkichkina" @click="deleteTrade(value.id, value.name)">
            <i class="bi bi-trash"></i>
          </a>
        </td>
      </tr>
      </tbody>
    </table>
    <div class="fixed-bottom" v-if="total_checkbox_money > 0">
      <div class="row">
        <div class="card col-3">
          <div class="p-1 card-body">
            <div class="fs-5 ps-3">
              Jami : <b v-text="total_checkbox_money_print"></b>
              <button class="float-end btn btn-outline-danger align-middle btn-sm" @click="uncheck"><i class="bi bi-x-square"></i></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Swal from 'sweetalert2'

export default {
  middleware: 'isAuthenticated',
  name: 'trade',
  props: {
    statistics: {},
    trades: {},
    trade_id: Number,
    type: String,
  },
  data() {
    return {
      total_checkbox_money: 0,
      total_checkbox_money_print: 0,
      checkedTrade: [],
      trTrade: [],
    }
  },
  methods: {
    deleteTrade(id, name) {
      Swal.fire({
        title: "O'chirasizmi?",
        html: `<b>${name}</b> ni o'chirmoqchimisiz?`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: "Ha o'chiraman",
        cancelButtonText: "Yo'q hozir emas"
      }).then((result) => {
        if (result.isConfirmed) {
          this.$axios.post('deleteTrade', {
            trade_id: id
          }).then((response) => {
            this.SwalMixin(response.data.message)
            this.$parent.getTrade()
          }).catch((error) => {
            this.SwalMixin(error.response.data.message, 'error')
          });
        }
      })
    },
    checkbox(money, event, id) {
      if (event.target.checked) {
        var summa = this.total_checkbox_money;
        this.total_checkbox_money = parseInt(money) + parseInt(summa);
        this.total_checkbox_money_print = this.numberFormat(this.total_checkbox_money) + ' so\'m';
        this.trTrade[id] = true
      } else {
        var summa = this.total_checkbox_money;
        this.total_checkbox_money = parseInt(summa) - parseInt(money);
        this.total_checkbox_money_print = this.numberFormat(this.total_checkbox_money) + ' so\'m';
        this.trTrade[id] = false
      }
    },
    numberFormat(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    uncheck() {
      this.checkedTrade = this.checkedTrade.filter(name => name !== this.checkedTrade);
      this.total_checkbox_money = 0;
      this.total_checkbox_money_print = 0;
      this.trTrade = false
      this.trTrade = []
    },
  }
}
</script>
