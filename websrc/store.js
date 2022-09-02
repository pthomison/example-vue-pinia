import { defineStore } from 'pinia'

// https://pinia.vuejs.org/core-concepts/#option-stores
export const useStore = defineStore('global-store', {
  state: () => ({ count: 0, name: 'Patrick' }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++
    },
  },
});