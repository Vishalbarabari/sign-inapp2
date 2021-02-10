import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBu_b_ZxqvPxHqb_-s-tsgntaTU0zNT0Z4",
  authDomain: "signup-demo2.firebaseapp.com",
  projectId: "signup-demo2",
  storageBucket: "signup-demo2.appspot.com",
  messagingSenderId: "13137906381",
  appId: "1:13137906381:web:71335d92e6c30dbf05b784"
};
firebase.initializeApp(firebaseConfig);

createApp(App)
  .use(router)
  .mount("#app");
