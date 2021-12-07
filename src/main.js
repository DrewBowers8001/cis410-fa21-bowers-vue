import { createApp } from 'vue'
import App from './App.vue'
import myRouter from "./routes.js"
import axios from "axios";
import theStore from "./Store.js"
axios.defaults.baseURL = "https://cis410-fa21-bowers-api.azurewebsites.net";
const myApp = createApp(App)
myApp.use(myRouter);
myApp.use(theStore);
myApp.mount('#app');

