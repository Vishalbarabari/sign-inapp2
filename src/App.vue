<template>
  
  <router-view />
</template>


<script>
import { onBeforeMount } from 'vue';
import {useRouter,useRoute }from 'vue-router';
import firebase from 'firebase'
export default {
  setup(){
    const router = useRouter();
    const route = useRoute();
    onBeforeMount(()=>{
firebase.auth().onAuthStateChanged((user)=>{
  if(!user){
    router.replace('/login')
  } else if(route.path == '/login' || route.path == '/register'){
    router.replace('/');
  }
})
    })
  }
}
</script>

<style lang="scss">

body{
  background: rgb(235, 197, 117);
  color: #131f2a;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
a{
  color: inherit;
}
</style>
