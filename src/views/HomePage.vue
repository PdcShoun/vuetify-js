<template>
  <div>
    <h1>Home Page</h1>
    <LoginCard/>
  </div>
</template>

<script>
import LoginCard from '../components/LoginCard.vue'

export default {
  name: 'Home',

  components: {
    LoginCard,
  },
}
</script>
