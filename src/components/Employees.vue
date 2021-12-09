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
                    <th></th>


          </tr>

              
              



        </thead> 


        <tbody>
          <tr v-for="aEmployee in theEmployee" :key="aEmployee.EmployeePK"> 
                   <th>{{aEmployee.first_name}} </th>
                    <th>{{aEmployee.last_name}} </th>
                     <th>{{aEmployee.Phone}} </th>
                      <th>{{aEmployee.Email}} </th>
                      <th router-link :to='`/Employees/${aEmployee.EmployeePK}`'><button class="btn btn-primary"> Details<button></th>

          </tr>




        </tbody> 




      </table>

</div>
</template>

<script>
export default {
computed: { 
  theEmployee(){ 
    this.$store.state.Employees
  }
}
};
</script>

<style>

</style>