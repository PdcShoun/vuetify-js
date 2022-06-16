<template>
  <div>
    <h1>Slot Page</h1>
    <slot-component>Click</slot-component>
  </div>
</template>

<script>
import SlotComponent from '@/components/SlotComponent.vue'
export default {
  components: { SlotComponent },

}
</script>

<style>

</style>