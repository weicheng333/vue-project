<script setup lang='ts'>
import { ref, watch } from 'vue'
import ImportPicture from '@/utils/ImportPicture.ts'

const img = ref('/src/assets/pictures/child/1.jpeg')
const imgUrl = ref('')
watch(img, async (newVal: string) => {
  imgUrl.value = await ImportPicture(newVal as string, import.meta.url)
}, {
  immediate: true,
  flush: 'sync',
})
</script>

<template>
  <input id="" v-model="img" type="text" name="">
  <img width="400" height="auto" :src="imgUrl" alt="">
</template>

<style lang='less' scoped>

</style>
