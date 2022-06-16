<template>
    <div>
        <h1>{{ title }}</h1>
        <input
            type="text"
            placeholder="Type your input"
            @change="$emit('customChange', $event.target.value)"
            />
    </div>
</template>

<script>
export default {
    name: 'EmitComponent',
    props: [
        "title",
    ]
}
</script>

<style scoped>
.emit-btn {
  color: #fff;
  background: linear-gradient(315deg, #42d392 25%, #647eff);
  border: none;
  padding: 5px 10px;
  margin: 5px;
  border-radius: 8px;
  cursor: pointer;
}
</style>