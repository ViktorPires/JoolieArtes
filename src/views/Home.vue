<template>
  <NavBar/>
  <div class="container">
  </div>
  <FooterBar/>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import FooterBar from "@/components/FooterBar"

export default {
  name: 'HomePage',
  components: {
    FooterBar,
    NavBar,
  },
}
</script>

<style scoped>

</style>