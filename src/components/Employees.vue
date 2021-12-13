<template>
  <div>
      <h1> Employees </h1>


      <hr/> 
      <table class = "table"> 
        <thead> 

          <tr>
              <th>First Name</th>
                <th>Last Name </th>
                  <th> Phone </th>
                   <th> Email </th>
                  <th> Position</th>
                   
                    <th></th>


          </tr>

              
              



        </thead> 


        <tbody>
          <tr v-for="aEmployee in theEmployee" :key="aEmployee.EmployeePK"> 
                   <th>{{aEmployee.First_Name}} </th>
                    <th>{{aEmployee.Last_Name}} </th>
                     <th>{{aEmployee.phone}} </th>
                      <th>{{aEmployee.Email}} </th>
                      <th>{{aEmployee.position}}</th>
                      <th> <router-link :to="`/Employee/${aEmployee.EmployeePK}`"><button class="btn btn-primary"> Details</button></router-link> </th>

          </tr>




        </tbody> 




      </table>

</div>
</template>

<script>
export default {
  
computed: { 
  theEmployee(){ 

    console.log("eMPLOYEEpK", this.$store.state.Employee)
   return  this.$store.state.Employee
  }
}
};

</script>

<style>

</style>