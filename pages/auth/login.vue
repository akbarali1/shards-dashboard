<template>
  <div class="container">
    <div class="row mt-5" style=" --bs-gutter-x: 0; ">
      <div class="col-sm-4 m-auto">
        <div class="card card-body">
          <ul class="nav nav-tabs p-2" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">
                Kirish
              </button>
            </li>
          </ul>
          <div class="tab-content p-2" id="myTabContent">
            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
              <h1 class="text-center mb-4"></h1>
              <div class="alert alert-danger" v-if="error !== null">
                <span>{{ error }}</span>
              </div>
            </div>
            <form autocomplete="off" @submit.prevent="login" method="post">
              <div class="form-floating mb-3">
                <input type="email" id="email" name="email" v-model="email" class="form-control" placeholder="email" autofocus
                       required autocomplete="off">
                <label for="email">
                  Elektron Pochta
                </label>
              </div>
              <div class="form-floating mb-3">
                <input type="password" id="password" name="password" v-model="password" class="form-control" placeholder="password" required>
                <label for="password">
                  Parol
                </label>
              </div>
              <button type="submit" class="btn btn-primary btn-block">
                Kirish
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      email: null,
      password: null,
      success: false,
      has_error: false,
      error: null
    }
  },
  mounted() {
    this.$loading.hide()
  },
  methods: {
    login() {
      this.$loading.show()
      var app = this
      this.$auth.loginWith('laravelJWT', {
        data: {
          email: app.email,
          password: app.password
        },
      }).then((response) => {
        if (response.data.error) {
          this.SwalMixin(response.data.error, 'error')
        } else if (response.data.access_token) {
          this.SwalMixin('Akkauntga muvaffaqiyatli kirdingiz!')
          this.$router.push('/')
        } else {
          console.log(response)
        }
      })
      this.$loading.hide()
    }
  }
}
</script>
