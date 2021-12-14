import {createStore} from 'vuex'; 
import axios from 'axios';
import myRoutes from "./routes.js"; 
export default createStore({
    state: {
        token: null,
        user: null,
        Employee: []
    }, 
    mutations: {
        storeTokenInApp(state, myToken){ 
            
            state.token = myToken 

        },
        storeUserInApp(state,theUser){ 


            state.user = theUser;

        },
        storeEmployees(state,Employee){ 

            state.Employee = Employee
        },
        clearAuthData(state){
            state.token = null;
            state.user=null;
        }

    },
    actions:{
        getMovies({commit}){
            axios.get("/Employee").then((aResponse) => { 
                console.log("response", aResponse)
                    commit("storeEmployees", aResponse.data)

            })



        },
        logout({ commit, state }) {
            axios
              .post("/Employee/logout", null, {
                headers: { Authorization: `Bearer ${state.token}` },
              })
              .then(() => {
                commit("clearAuthData");
                localStorage.clear("token");
                myRoutes.replace("/");
              })
              .catch(() => {
                console.log("error in logout");
              });
          },
        
    }

});