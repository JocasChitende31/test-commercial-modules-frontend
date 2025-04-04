<!-- eslint-disable vue/no-parsing-error -->
<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { tenantInfos } from '@/services/tenant_perfil'
import { ref } from 'vue'
const tenant_modules = ref(false)
const mainInfos = ref(false)

const tenantFromUserLogged = ref([
  {
    uuid: '',
  },
])
const tenantModules = ref([])
const getTenantBySessionUser = async () => {
  tenant_modules.value = false
  const response = await tenantInfos.getTennantInfo()
  tenantFromUserLogged.value = response.data
  console.log(response.data)
}
const getTenantModule = async () => {
  const response = await tenantInfos.checkTenantModule()
  tenantModules.value = response.data
  console.log('modules->', response.data)
  tenant_modules.value = true
}
const logout = () => {
  sessionStorage.clear()
}
// getTenantBySessionUser()
</script>

<template>
  <div
    class="tenant_bg"
    :style="{ backgroundImage: `url(${tenantFromUserLogged.imgBgUrl})` }"
    alt=""
  >
    <div class="menu" style="display: flex; z-index: 9; justify-content: space-between">
      <RouterLink to="/" class="" @click="getTenantBySessionUser">Página Principal</RouterLink>
      <RouterLink to="/" class="" @click="getTenantModule">Módulos Activos</RouterLink>
      <RouterLink to="/request-email" class="text-danger" onclick="logout">Sair</RouterLink>
    </div>
    <div v-if="!tenant_modules" class="mt-2 pl-2 info-text">
      <h3>{{ tenantFromUserLogged.tenantName }}</h3>
      <h5>{{}}</h5>
    </div>
    <div v-if="tenant_modules" class="mt-2 pl-2 info-text text-bg-light">
      <h3>{{ tenantModules.message }}</h3>
      <div v-for="m in tenantModules.modules" :key="m.id">
        <h5><b>id</b>:{{ m.id }}</h5>
        <h5><b>Cliente</b>:{{ m.customerId }}</h5>
        <h5><b>Aplication Module</b>:{{ m.applicationModuleId }}</h5>
        <h5><b>Data de Activação:</b>:{{ m.activationDate }}</h5>
        <h5><b>Data de Expiração:</b>:{{ m.deactivationDate }}</h5>
      </div>
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
