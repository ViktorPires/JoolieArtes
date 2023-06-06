<template>
  <NavBar/>
  <FooterBar/>
</template>

<script>
import NavBar from '@/components/NavBar'
import FooterBar from "@/components/FooterBar";

export default {
  name: 'LoginPage',
  components: {
    FooterBar,
   NavBar,
  },
}
</script>

<style scoped>

</style>