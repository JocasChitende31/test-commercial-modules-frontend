<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/block-lang -->

<script setup>
import { ref } from 'vue'
import { authService } from '@/services/authentication'
import { useRouter } from 'vue-router'
const router = useRouter()
const email = ref('')
const message = ref('')

const reuqestSessionEmail = async () => {
  if (email.value) {
    await authService
      .requestEmail(email.value)
      .then((response) => {
        sessionStorage.setItem('isValidEmail', response.data.userEmail)
        const token = response.data.urlTokenSession
        router.push({
          path: '/request-password',
          query: { token },
        })
      })
      .catch((e) => {
        message.value = 'Email não encontrado ou inválido.'
      })
  } else {
    message.value = 'Digite o email e tente novamente.'
  }
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
                  <p class="text-center small">Digitar o seu Email</p>
                  <p class="text-left text-danger pt-2 mb-0 small">{{ message }}</p>
                </div>
                <form
                  class="row g-3 needs-validation"
                  novalidate
                  @submit.prevent="reuqestSessionEmail"
                >
                  <div class="col-12 mb-4 mt-4">
                    <div class="input-group has-validation">
                      <span class="input-group-text" id="inputGroupPrepend"
                        ><i class="bi bi-person"></i
                      ></span>
                      <input
                        type="text"
                        name="login-name"
                        class="form-control"
                        placeholder="Email"
                        id="yourUsername"
                        v-model="email"
                        required
                      />
                      <div class="invalid-feedback">Por favor, entre com seu email</div>
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
