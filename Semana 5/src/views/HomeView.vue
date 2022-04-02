<template>
  <div class="home">
    <br><br><br><br><br><br><br>
    <h1>Nuestra selección de pasteles</h1><br>
    <cakes/>

    <br><br><br><br><br><br>
    <h1>Adornos adicionales</h1><br>
    <cakes-decors/>
    <br><br>
    <infoBakery/>
  </div>
</template>

<script>
// @ is an alias to /src
import cakes from '@/components/cakes.vue'
import cakesDecors from '@/components/cakesDecors.vue'
import clientInfo from '@/components/clientInfo.vue'
import infoBakery from '@/components/infoBakery.vue'


export default {
  name: 'HomeView',
  components: {
    cakes,
    cakesDecors,
    clientInfo,
    infoBakery
  },
}
</script>
