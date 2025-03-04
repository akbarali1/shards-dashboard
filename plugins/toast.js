import Vue from 'vue'
import Swal from 'sweetalert2'

Vue.mixin({
  methods: {
    SwalMixin(message, status = 'success') {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 4000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })

      Toast.fire({
        icon: status,
        title: message
      })

    }
  }
})
