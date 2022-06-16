<template>
    <div>
        <emit-component
          @customChange="logChange"
          title="Emit Page"
          />
        <h1>------------</h1>
        <h1>{{ time }}</h1>
    </div>
</template>

<script>
import EmitComponent from '@/components/EmitComponent.vue'

export default {
  components: {
        EmitComponent
    },
  methods: {
    logChange(event) {
        this.time = event
    }
  },
  data() {
    return {
        time: "123",
    }
  }
}
</script>

<style>

</style>