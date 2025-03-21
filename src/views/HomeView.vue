<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { tenantInfos } from '@/services/tenant_perfil'
import { ref } from 'vue'
const tenantFromUserLogged = ref([
  {
    uuid: '',
  },
])

const getTenantBySessionUser = async () => {
  const response = await tenantInfos.getTennantInfo()
  tenantFromUserLogged.value = response.data
  console.log(response.data)
}
const logout = () => {
  sessionStorage.clear()
}
getTenantBySessionUser()
</script>

<template>
  <div
    class="tenant_bg"
    :style="{ backgroundImage: `url(${tenantFromUserLogged.imgBgUrl})` }"
    alt=""
  >
    <div class="menu" style="display: flex; z-index: 9; justify-content: space-between">
      <RouterLink to="/" class="">Página Principal</RouterLink>
      <RouterLink to="/request-email" class="text-danger" onclick="logout">Sair</RouterLink>
    </div>
    <div class="mt-2 pl-2 info-text">
      <h3>{{ tenantFromUserLogged.tenantName }}</h3>
      <h5>{{}}</h5>
    </div>
  </div>
</template>
<style scoped>
.tenant_bg {
  width: 100%;
  height: 90vh;
  background-size: cover;
  background-position: center;

  z-index: 1;

  .info-text {
    padding: 10px;
  }
}
div {
  color: black !important;
  z-index: 5555;
}
.tenant_bg .menu {
  color: black !important;
  border: 1px solid black;
  background-color: black;
  padding: 20px 10px !important;
}
</style>
