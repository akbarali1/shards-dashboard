<template>
  <div class="container bg-light p-1">
    <div class="d-flex justify-content-center">
      <nuxt-link :to="`/expense/${page_id}`" class=" btn text-white col-2" style="background-color: #fb4a4a; " accesskey="c">
        <i class="bi bi-box-arrow-in-up"></i> Chiqim (ALT+C)
      </nuxt-link>
      <div class="col-1"></div>
      <nuxt-link :to="`/income/${page_id}`" class="btn btn-success col-2" style="background-color: #66A656;" accesskey="i">
        <i class="bi bi-box-arrow-in-down"></i> Kirim (ALT+I)
      </nuxt-link>
      <div class="col-1"></div>
      <nuxt-link :to="`/statistics/${page_id}`" class="btn btn-primary col-2" accesskey="s">
        <i class="bi bi-graph-up-arrow"></i> Statistika (ALT+S)
      </nuxt-link>
      <div class="col-1"></div>
      <nuxt-link :to="`/auto/${page_id}`" class="btn btn-success col-2" accesskey="a">
        <i class="bi bi-alarm"></i> Avto (ALT+A)
      </nuxt-link>
      <button :to="`/auto/${page_id}`" class="btn btn-success ms-5" accesskey="p" :style="'float: right; background-color: '+pined" @click="pinTrade">
        <i class="bi bi-bookmark-star"></i>
      </button>
    </div>
  </div>
</template>
<script>
import Swal from 'sweetalert2'

export default {
  middleware: 'isAuthenticated',
  name: 'trade',
  props: ['page_id', 'pined'],
  methods: {
    pinTrade() {
      Swal.fire({
        html: "Siz ushbu Xarajatni asosiy deb belgilamoqchisizmi ?",
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: "Ha",
        cancelButtonText: "Yo'q"
      }).then((result) => {
        if (result.isConfirmed) {
          this.$axios.post('pinTrade', {
            trade_id: this.page_id
          }).then((response) => {
            this.SwalMixin(response.data.message)
            this.pined = '#0008ff;'
          }).catch((error) => {
            this.SwalMixin(error.response.data.message, 'error')
          });
        }
      })
    }
  }
}
</script>
