<template>
    <div>
        <h1>Props Page</h1>
        <hr/>
        <props-component firstName="Hello" lastName="World" :age="100"/>
        <props-component firstName="Shoun" lastName="World" :age="20"/>
    </div>
</template>

<script>
import PropsComponent from '@/components/PropsComponent.vue'

export default {
  components: {
    PropsComponent,
    },
}
</script>
