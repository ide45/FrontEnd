<template>
  <div class="about">
    <bossStock/>
    <br><br><br><br><br><br>
    <br><br><br><br><br><br>
    <br><br><br>
    <infoBakery/>
  </div>
</template>

<script>
import bossStock from '@/components/bossStock.vue'
import infoBakery from '@/components/infoBakery.vue'
import clientInfo from '@/components/clientInfo.vue'
export default {
  name: 'boss',
  components: {
    bossStock,
    infoBakery,
    clientInfo
  }
}
</script>