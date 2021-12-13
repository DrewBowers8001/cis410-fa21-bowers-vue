<template>
  <div>
      <h1> Schedule </h1>
<hr/> 
<h3>{{firstname}}'s Schedule </h3>
<p v-if="accountError" >cannot get your account information please try again later </p>
<table class="table">   
  <thead>


    <th> Day </th>
     <th> Start Time  </th>
      <th> End Time </th>
     
    </thead> 

      <tbody> 
        <tr v-for="thisReview in reviewsbyUser" :key="thisReview.EmployeePK"> 
          <th>{{thisReview.day}}</th>  
          <th>{{thisReview.start_time}}</th>  
             <th>{{thisReview.end_time}}</th> 
        
         

          
        
        
        
        
        </tr> 
        
        
        
        
        </tbody> 
  
  
 </table>
</div>
</template>

<script>
import axios from 'axios';
export default {
 data(){
    return{
      reviewsbyUser: null,
      accountError: false
    }
  },
  computed: { 
    firstname(){
      console.log("state", this.$store.state)
      console.log("user",this.$store.state.user)
       console.log("Email",this.$store.state.user.Email)
      return this.$store.state.user.Email
    },
  },
  created(){
    axios.get("/Employee", { 
    headers: {
      Authorization: `Bearer ${this.$store.state.token}`,
    },

    }).then((theresponse)=>{ 
      console.log("here is the response", theresponse );

      this.reviewsbyUser = theresponse.data 
    }).catch(()=> { this.accountError = true})
  }
}
</script>



<style>

</style>