<script setup lang='ts'>
import { defineProps, nextTick, onMounted, reactive, ref, shallowReactive, toRefs, watch } from 'vue'
import { useCounterStore } from '@/stores/counter'

const { pType } = defineProps({
  pType: {
    type: String,
    default: 'State',
  },

})

const countStore = useCounterStore()
const count = ref(0)
const obj = reactive({ a: 1 })
const { a } = toRefs(obj)
const shallowObj = shallowReactive({ a: 1, childObj: { value: 1 } })
async function increment() {
  count.value++
  obj.a++
  shallowObj.a++
  shallowObj.childObj.value++
  await nextTick()
}
onMounted(() => {

})
</script>

<template>
  <div
    @click="increment();countStore.increment();countStore.count++"
  >
    <br>{{ `count${count}` }}
    <br>{{ `obj${obj.a}` }}
    <br>{{ `shallowObj${shallowObj.a}` }}
    <br>{{ `shallowObj.childObj.value${shallowObj.childObj.value}` }}
    <br>{{ a }}
    <br>{{ countStore.count }}
    <br>{{ countStore.dobuleCount }}
  </div>
</template>

<style lang='less' scoped>

</style>
