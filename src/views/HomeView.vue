<template>
  <div class=" conten-area">
    <UcapanSelamat />
    <MenuPilihan />
    <LokasiDesa />
  </div>
</template>

<script>
// @ is an alias to /src
// import UcapanSelamat from '../components/homecomponen/UcapanSelamat.vue'
import UcapanSelamat from '../components/componenhome/UcapanSelamat.vue'
import MenuPilihan from '../components/componenhome/MenuPilihan.vue'
import LokasiDesa from '../components/componenhome/LokasiDesa.vue'
export default {
  name: 'HomeView',
  components: {
    UcapanSelamat,
    MenuPilihan,
    LokasiDesa
  }
}
</script>
<style>
  .conten-area{
    margin-top: 80px;
  }
</style>
