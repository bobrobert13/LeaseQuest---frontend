import { defineStore } from 'pinia'
import state from './module-example/state';

export const useGlobalUser = defineStore('store', {

  state: () => {
    return {
      userState: []
     }
  },

  getters: {
    sessionUser(state){
      return state.userState;
    }
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    saveSession(data){
      console.log("STORE SESSION..." , data);
        this.userState.push(data) ;
    },
    destroySession(){
      this.userState = [];
      console.log("SESSION DESTRUIDA");
    }
  },
})
