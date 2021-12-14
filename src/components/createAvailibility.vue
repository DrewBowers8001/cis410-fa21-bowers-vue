<template>
  <div>
    <div class="row justify-content-center">
      <div class="col-lg-10">
        <div class="card">
          <div class="card-body">
            <h4>Create an availibility</h4>
            <form id="review-form" @submit.prevent="submitReview">
              <div class="mb-3">
                <label for="time-input" class="form-label">Time</label
                ><input
                  type="number"
                  class="form-control"
                  id="time-input"
                  required=""
                  min="1"
                  max="10"
                  v-model="time"
                />
              </div>
              <div class="mb-3">
                <label for="hours-input" class="form-label">Preffered Hours</label
                ><input
                  type="number"
                  row="3"
                  class="form-control"
                  id="hours-input"
                  required=""
                  v-model="preffered_hours"
                />
              </div>
               <div class="mb-3">
                <label for="PK-input" class="form-label">EmployeePK</label
                ><input
                  type="number"
                  row="3"
                  class="form-control"
                  id="PK-input"
                  required=""
                  v-model="EmployeePK"
                />
              </div>
              <button type="submit" class="btn btn-primary">
                Submit Availibility</button
              ><button
                v-on:click="cancelReview"
                type="clear"
                class="btn btn-outline-danger"
              >
                Cancel
              </button>

              <p v-if="errorMessage" class="form-text text-danger">
                {{ errorMessage }}
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
       EmployeePK: "",
    
      preffered_hours: null,
        time: null,
     
      errorMessage: null,
    };
  },
  methods: {
    submitReview() {
      let myReview = {
        EmployeePk: this.EmployeePK,
        preffered_hours: this.preffered_hours,
         time: this.time,
        
      };
      console.log("post",myReview);
      axios
        .post("/Availibility", myReview, {
          headers: { Authorization: `Bearer ${this.$store.state.token}` },
        })
        .then(() => {
          this.$router.replace("/");
        })
        .catch((my) => {
          console.log("error", my)
          this.errorMessage =
            "Unable to create a review, please try again later";
        });
    },
    cancelReview() {
      this.$router.go(-1);
    },
  },
};
</script>

<style>
button {
  margin-right: 5px;
}
</style>