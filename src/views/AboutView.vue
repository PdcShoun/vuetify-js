<template>
  <div class="about pa-6">
    <h1>About Page</h1>
    <SimpleComponent :yourNum="100" yourName="Tao"/>
  </div>
</template>

<script>
import SimpleComponent from '../components/SimpleComponent.vue'

export default {
  components: {
    SimpleComponent,
  }
}
</script>
