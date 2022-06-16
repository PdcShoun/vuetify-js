<template>
    <div>
        <v-icon @click="addNum">mdi-account</v-icon>
        <br/>
        <h1>Hello {{ yourName }}</h1>
        <h2>{{ number }}</h2>
        <button @click="addNum">Click me!!</button>
    </div>
</template>

<script>
export default {
    name: "SimpleComponent",
    props: {
        yourName: String,
        yourNum: Number,
    },
    data: () => ({
      number: 0,
    }),
    methods: {
        addNum(){
            this.number += this.yourNum
            console.log(this.number)
        }
    }

}
</script>

<style scoped>
    h1 {
        color: green;
    }
</style>