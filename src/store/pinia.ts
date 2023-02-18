import { defineStore } from 'pinia'

export const useGlobalUser = defineStore('store', {

  state: () => {
    return {
      userState: {
        role: 'user',
        email: "rob132ca@gmail.com"
      }
     }
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {

  },
})
