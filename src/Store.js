import {createStore} from 'vuex'; 
import axios from 'axios';
export default createStore({
    state: {
        token: null,
        user: null,
        Employees: []
    }, 
    mutations: {
        storeTokenInApp(state, myToken){ 
            state.token = myToken 

        },
        storeUserInApp(state,theUser){ 


            state.user = theUser;

        },
        StoreEmployees(state,Employees){ 

            state.Employees = Employees
        }

    },
    actions:{
        getMovies({commit}){
            axios.get("/Employees").then((aResponse) => { 
                console.log("response", aResponse)
                    commit("storeEmployees", aResponse.data)

            })



        }
        
    }

});