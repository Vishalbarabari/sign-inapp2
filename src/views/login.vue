<template>
    <div class="login">
        
        <form @submit.prevent="login" style="border:1px solid #ccc">
  <div class="container">
    <h1>Login here</h1>
    <p>Please fill in this form to login to your account.</p>
    <hr>

    <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" v-model="email" required>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" v-model="password" required>  
    
    <p>Need an account? <router-link to="/register">Register here</router-link>.</p>

    <div class="clearfix">
      
      <button type="submit" value="login">Login </button>
    </div>
  </div>
</form>
    </div>
</template>

<script>
import {ref} from 'vue';
import firebase from 'firebase';
export default {
    setup(){
        const email=ref('');
        const password = ref("");
        const login =() => {
            firebase.auth().signInWithEmailAndPassword(email.value,password.value)
            .then(data =>console.log(data)).catch(err =>alert(err.message));
        }
        return{
            login,
            email,
            password
        }
    }
}
</script>
<style>
body {font-family: Arial, Helvetica, sans-serif;}
* {box-sizing: border-box}

/* Full-width input fields */
input[type=text], input[type=password] {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}

input[type=text]:focus, input[type=password]:focus {
  background-color: #ddd;
  outline: none;
}

hr {
  border: 1px solid #f1f1f1;
  margin-bottom: 25px;
}

/* Set a style for all buttons */
button {
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
}

button:hover {
  opacity:1;
}

/* Extra styles for the cancel button */
.cancelbtn {
  padding: 14px 20px;
  background-color: #f44336;
}

/* Float cancel and signup buttons and add an equal width */
.cancelbtn, .signupbtn {
  float: left;
  width: 50%;
}

/* Add padding to container elements */
.container {
  padding: 16px;
}

/* Clear floats */
.clearfix::after {
  content: "";
  clear: both;
  display: table;
}


@media screen and (max-width: 300px) {
  .cancelbtn, .signupbtn {
     width: 100%;
  }
}

</style>