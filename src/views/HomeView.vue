<template>
  <div class=" conten-area">
    <div v-if="loading">
      <Loading />
    </div>
    <div v-else>
      <UcapanSelamat />
      <MenuPilihan />
      <LokasiDesa />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import UcapanSelamat from '../components/homecomponen/UcapanSelamat.vue'
import UcapanSelamat from '../components/componenhome/UcapanSelamat.vue'
import MenuPilihan from '../components/componenhome/MenuPilihan.vue'
import LokasiDesa from '../components/componenhome/LokasiDesa.vue'
import Loading from '../components/componenhome/LoadingArea.vue'
export default {
  name: 'HomeView',
  data() {
    return {
      loading: true,
    }
  },
  components: {
    UcapanSelamat,
    MenuPilihan,
    LokasiDesa,
    Loading
  },
  mounted() {
    setTimeout(() => {
      this.loading = false
    }, 2000)
  },
}
</script>
<style>
.conten-area {
  margin-top: 80px;
}
</style>
