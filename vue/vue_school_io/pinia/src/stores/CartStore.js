import { defineStore } from 'pinia'
import { groupBy } from 'lodash'
export const useCartStore = defineStore('CartStore', {
  state: () => ({
    items: [],
  }),
  actions: {
    addItem(count, item) {
      count = parseInt(count)
      for (let i = 0; i < count; i += 1) {
        this.items.push({ ...item })
      }
    },
  },
  getters: {
    count: (state) => state.items.length,
    isEmpty: (state) => state.count === 0,
    grouped: (state) => groupBy(state.items, (item) => item.name),
    groupCount: (state) => (name) => state.grouped[name].length,
  },
})
