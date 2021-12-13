import {createStore} from 'vuex'; 
import axios from 'axios';
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
        }

    },
    actions:{
        getMovies({commit}){
            axios.get("/Employee").then((aResponse) => { 
                console.log("response", aResponse)
                    commit("storeEmployees", aResponse.data)

            })



        }
        
    }

});