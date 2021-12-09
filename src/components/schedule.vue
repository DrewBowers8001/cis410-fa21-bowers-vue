<template>
  <div>
      <h1> Schedule </h1>
<hr/> 
<h3>{{first_name}}'s Schedule </h3>

<table class="table">   
  <thead>


    <th> Employee PK </th>
     <th>Time </th>
      <th> Preffered Hours</th>
     
    </thead> 

      <tbody> 
        <tr v-for="thisReview in reviewsbyUser" :key="thisReview.ReviewPK">
         <th><router-link :to='`/Employee/${thisReview.EmployeePK}`'></router-link></th>  
          <th>{{thisReview.time}}</th>  
          <th>{{thisReview.preffered_hours}}</th>  
        
         

          
        
        
        
        
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
      return this.$store.state.user.first_name
    },
  },
  created(){
    axios.get("/Availibility/me", { 
    headers: {
      Authorization: `Bearer ${this.$store.state.token}`
    }

    }).then((theresponse)=>{ 
      console.log("here is the response", theresponse );

      this.reviewsbyUser = theresponse.data 
    })
  }
}
</script>



<style>

</style>