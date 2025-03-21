<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/block-lang -->

<script setup>
import { ref } from 'vue'
import { authService } from '@/services/authentication'
import { useRoute } from 'vue-router'
import { useRouter } from 'vue-router'
const sessionEmail = ref('')
const passsword = ref('')
const router = useRoute()
const route = useRouter()

sessionEmail.value = sessionStorage.getItem('isValidEmail')
const reuqestSessionPassword = async () => {
  const token = router.query.token
  const email = sessionStorage.getItem('isValidEmail')
  const response = await authService.requestPassword(token, email, passsword.value)
  console.log('response_passowrd: -->', response)
  const tokenSession = response.data.session.token
  console.log('token--->', tokenSession)
  sessionStorage.setItem('token', tokenSession.token)
  sessionStorage.removeItem('isValidEmail')
  sessionStorage.removeItem('urlToken')
  route.push('/')
}
</script>
<template>
  <div class="container">
    <section
      class="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4"
    >
      <div class="container">
        <div class="row justify-content-center pb-5 mb-5">
          <div
            class="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center"
          >
            <div class="d-flex justify-content-center py-4">
              <h2>Auth Module Test</h2>
              <!-- <RouterLink to="/" class="logo d-flex align-items-center w-auto"> -->
              <!-- <img src="../../assets/logo-backoffice.png" alt="Orbita-logo" /> -->
              <!-- <span class="d-none d-lg-block">Orbita</span> -->
              <!-- </RouterLink> -->
            </div>
            <!-- End Logo -->

            <div class="card mb-3">
              <div class="card-body">
                <div class="pt-4 pb-2">
                  <h5 class="card-title text-center pb-0 fs-4">Acessar o Sistema</h5>
                  <p class="text-center small">{{ sessionEmail }}</p>
                  <p class="text-center small">Digite a sua Palavra-passe</p>
                </div>
                <form
                  class="row g-3 needs-validation"
                  novalidate
                  @submit.prevent="reuqestSessionPassword"
                >
                  <div class="col-12 mb-4">
                    <div class="input-group has-validation">
                      <span class="input-group-text" id="inputGroupPrepend"
                        ><i class="bi bi-lock"></i
                      ></span>
                      <input
                        type="password"
                        name="password"
                        class="form-control"
                        placeholder="Palavra-passe"
                        id="yourPassword"
                        v-model="passsword"
                      />
                      <div class="invalid-feedback">Por favor, entre com o sua passe</div>
                    </div>
                  </div>

                  <div class="col-12">
                    <button class="btn btn-primary w-100">Entrar</button>
                  </div>
                </form>
              </div>
            </div>
            <div>
              Designed by
              <a target="_blank" href="https://orbita-tech.com/">Órbita</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style></style>
