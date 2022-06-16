<template>
  <div>
    <slot-component>Click</slot-component>
    <slot-component>Click 2</slot-component>
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