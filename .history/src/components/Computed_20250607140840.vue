<script setup lang="ts">
import { computed, ref } from 'vue'

const firstName = ref('John')
const lastName = ref('Doe')
const fullName = computed<string>({
  get(previous) {
    console.log(previous)
    return `${firstName.value} ${lastName.value}`
  },
  set(newValue) {
    [firstName.value, lastName.value] = newValue.split(' ')
  },
})
</script>

<template>
  <div>{{ firstName }} {{ lastName }}</div>

  <input v-model="fullName" type="text">
</template>

<style scoped lang="less">

</style>
