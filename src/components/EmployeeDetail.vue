<template>
  <div>
      <div class = "card">
          <div class = "card=-body">
            <h1>Employee Details</h1>
              <h2 class = "text-primary"> {{Employee.First_Name}}</h2>
              <br/> 

              <p> First Name <br/><strong>{{Employee.First_Name}}</strong></p>
              <p> Last Name: <br/><strong>{{Employee.Last_Name}}</strong></p>
              <p> Email: <br/><strong>{{Employee.Email}}</strong></p>
              <p> Phone Number: <br/><strong>{{Employee.phone}}</strong></p>
              <p> Position: <br/><strong>{{Employee.position}}</strong></p>

          </div>

         
          
          
          </div> 

          <br />

           <router-link v-if="auth" :to="`/Employee/${aEmployee.EmployeePK}/Availibility`"><button class="btn btn-success"> Add Availibiliity</button> </router-link>
           <router-link v-else :to="`/Login`"><button class="btn btn-outline-success">Login to Add Availibiliity</button> </router-link>


           <router-view />
     

</div>
</template>

<script>
export default {
  computed: { 
    Employee(){ 
      let allEmployees = this.$store.state.Employee;

      let thisEmployee = allEmployees.find((aEmployee)=> { 
console.log("here is AEmployee", aEmployee)
      
        return aEmployee.EmployeePK == this.$route.params.pk;
      });
     
      
      return thisEmployee;
     
    },

    
    auth(){ return this.$store.state.token}
    
  },


}

</script>

<style>

</style>