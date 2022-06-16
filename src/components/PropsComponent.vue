<template>
    <div>
        <h1>First name: {{ firstName }}</h1>
        <h1>Last name: {{ lastName }}</h1>
        <h1>Age: {{ age }}</h1>
    </div>
</template>

<script>
export default {
    props: {
        firstName: String,
        lastName: String,
        age: Number,
    }
}
</script>

<style scoped>
    h1 {
        color: blue;
    }
</style>