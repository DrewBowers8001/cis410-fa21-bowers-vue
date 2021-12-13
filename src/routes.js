import { 
    createRouter, createWebHistory
} from 'vue-router';

import Home from "./components/home.vue";
import Login from "./components/Login.vue";
import Employees from "./components/Employees.vue";
import notfound from "./components/notfound.vue";
import schedule from "./components/schedule.vue";
import signup from "./components/signup.vue";
import detail from "./components/EmployeeDetail.vue";
import createAvailibility from "./components/createAvailibility.vue";



const router = createRouter({
    history: createWebHistory(),
    routes:[
        {path: "/", component: Home},
        {path: "/Login", component: Login},
        {path: "/Employees", component: Employees},
        {path: "/schedule", component: schedule},
        {path: "/Employee/:pk", component: detail,
                childeren: [{path: "Availibility", component: createAvailibility}],
            },
       
        {path: "/signup", component: signup},
        {path: "/invalidRoute(.*)", component: notfound},
      
     
    
    ],
});

export default router;
