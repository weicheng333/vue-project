import { defineStore } from 'pinia'

const useCounterStore = defineStore('counter', {
  state: () => {
    return {
      count: 0,
      name: 'counter',
    }
  },
  getters: {
    dobuleCount: state => state.count * 2,
  },
  actions: {
    increment() {
      this.count++
    },
  },
  persist: true,
})
let a = 1
export { useCounterStore }
