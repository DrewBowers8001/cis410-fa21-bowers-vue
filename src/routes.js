import { 
    createRouter, createWebHistory
} from 'vue-router';

import Home from "./components/home.vue";
import Login from "./components/Login.vue";
import Employees from "./components/Employees.vue";
import notfound from "./components/notfound.vue";
import schedule from "./components/schedule.vue";
import signup from "./components/signup.vue";
import createAvailibility from "./components/createAvailibility";



const router = createRouter({
    history: createWebHistory(),
    route:[
        {path: "/", component: Home},
        {path: "/Login", component: Login},
        {path: "/Employees", component: Employees},
        {path: "/Employees/:pk", component: schedule, 
        childeren:[{path: "schedule", component: createAvailibility}]},
       
        {path: "/signup", component: signup},
        {path: "/invalidRoute(.*)", component: notfound}
     
    
    ],
});

export default router;
