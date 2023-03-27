import { defineStore } from 'pinia'
import state from './module-example/state';

export const useGlobalUser = defineStore('store', {

  state: () => {
    return {
      userState: {
        token: "",
        user: {}
      }
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
    saveSession(token, user){
     // console.log("STORE SESSION..." , token , user.fullName );
        this.userState.token = token;
        this.userState.user = user;
    },
    destroySession(){
      this.userState = {
        token: "",
        user: {}
      };
      console.log("SESSION DESTRUIDA");
    }
  },
})
