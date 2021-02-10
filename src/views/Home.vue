<template>
  <div class="home">
    <iframe src="https://www.cilalabs.com/" frameborder="0" width="100%" height="800"></iframe>
    <button class="logout" @click="logout">logout</button>
  
  </div>
</template>

<script>
import {onBeforeUnmount, ref,} from 'vue';
import firebase from 'firebase';
export default {
  setup(){
const name = ref('');
  onBeforeUnmount(()=>{
    const user = firebase.auth().currentUser;
  if(user){
    name.value = user.email.split('@')[0];
  }
  });

  const logout = ()=>{
    firebase.auth().signOut().then(()=>console.log("signed out"))
    .catch(err =>alert(err.message));
  }
    
    return{
      name,
      logout
    }
  }

}
</script>
