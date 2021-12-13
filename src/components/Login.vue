<template>
<div> 
  <div>
      <h1> Login </h1>

</div>
<form @submit.prevent="onSubmit"><div class="mb-3"><label for="email-input" class="form-label">Password</label><input type="email" class="form-control" id="email-input" required="" placeholder="Enter email" v-model="email"></div><div class="mb-3"><label for="password-input" class="form-label">Password</label><input type="password" class="form-control" id="password-input" placeholder="Password" required="" v-model="password"></div><button type="submit" class="btn btn-primary">Submit</button><!----><!----></form>

</div>


</template>

<script>
import axios from 'axios';
export default {
  data(){ 

    return{ 
      email: "",
      password: "",
      loginError: false,
      credentialsError: false

    }
  },

  methods:{ 
    onSubmit(){ 

      let myformdata = {
        email: this.email, 
        password: this.password,
    
      }

      console.log("form Data" , myformdata)
      axios.post("/Employee/login", myformdata).then((response)=> {
        console.log("here is the response",response)
        this.$store.commit("storeTokenInApp",response.data.token)
        console.log("token",response.data.token)

        this.$store.commit("storeUserInApp", response.data.user)
          this.$router.replace("/Employees");

          console.log(response)
      }).catch((myError)=> { 
        console.log("error in login", myError)
      })
      

    },
  },

}
</script>

<style>

</style>