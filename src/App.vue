<template>
  <div class="utama">
    <div>
      <Navbar />
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/navigasi/Navbar.vue'
import Footer from '@/components/navigasi/Footer.vue'
export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
  }
}
</script>
<style>
.utama {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>