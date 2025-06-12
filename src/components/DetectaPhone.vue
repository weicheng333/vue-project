<script setup lang='ts'>
import { nextTick, reactive, ref, watch, watchEffect } from 'vue'

const name = ref('liu')
const sex = ref('male')
const ability = reactive({ fly: true })
const UpperName = ref('LIU')
const UpperSex = ref('MALE')

const watchAbout = watch(
  [name, () => ability.fly],
  ([newName, newFly], [oldName, oldFly], onCleanup) => {
    const Timer = setTimeout(() => {
      console.log(newName, newFly, oldName, oldFly)
      watchAbout()
    }, 1000)
    // 不能在await后面使用
    onCleanup(() => {
      clearTimeout(Timer)
    })
  },
  {
    immediate: true,
    flush: 'pre',
    deep: 1,
  },
)
watchEffect(
  async (onCleanup) => {
    UpperName.value = name.value.toUpperCase()
    console.log(UpperName.value)
    await nextTick()
    // 被侦听的数据在第一关await生效前才能够被侦听,所以sex的值改变不会触发该回调
    UpperSex.value = sex.value.toLocaleLowerCase()
    console.log(UpperSex.value)
    // onCleanup使用同watch
  },
  {
    flush: 'pre',
  },
)
</script>

<template>
  <input id="" v-model="name" type="text" name="">
  <input id="" v-model="sex" type="text" name="">
</template>

<style lang='less' scoped>

</style>
