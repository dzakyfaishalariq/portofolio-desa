<template>
  <Navbar/>
  <router-view />
</template>

<script>
import Navbar from '@/components/navigasi/Navbar.vue'
export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>