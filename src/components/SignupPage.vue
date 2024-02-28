<template>
  <div id="app" class="bg-info">
    <div v-if="!registered" class="outerWrapperForm border  d-flex border">
     
      <form class="row g-3 border">
  <div class="col-md-6">
    <label for="validationServer01" class="form-label">First name</label>
    <input type="text" class="form-control is-valid" id="validationServer01" value="Mark" required>
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>
  <div class="col-md-6">
    <label for="validationServer02" class="form-label">Last name</label>
    <input type="text" class="form-control is-valid" id="validationServer02" value="Otto" required>
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>
  <div class="col-md-6">
    <label for="validationServerUsername" class="form-label">Username</label>
    <div class="input-group has-validation">
      <span class="input-group-text" id="inputGroupPrepend3">@</span>
      <input type="text" class="form-control is-invalid" id="validationServerUsername" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required>
      <div id="validationServerUsernameFeedback" class="invalid-feedback">
        Please choose a username.
      </div>
    </div>
  </div>
  <div class="col-md-6">
    <label for="validationServer03" class="form-label">City</label>
    <input type="text" class="form-control is-invalid" id="validationServer03" aria-describedby="validationServer03Feedback" required>
    <div id="validationServer03Feedback" class="invalid-feedback">
      Please provide a valid city.
    </div>
  </div>
  <div class="col-md-6">
    <label for="validationServer04" class="form-label">State</label>
    <select class="form-select is-invalid" id="validationServer04" aria-describedby="validationServer04Feedback" required>
      <option selected disabled value="">Choose...</option>
      <option>...</option>
    </select>
    <div id="validationServer04Feedback" class="invalid-feedback">
      Please select a valid state.
    </div>
  </div>

  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input is-invalid" type="checkbox" value="" id="invalidCheck3" aria-describedby="invalidCheck3Feedback" required>
      <label class="form-check-label" for="invalidCheck3">
        Agree to terms and conditions
      </label>
      <div id="invalidCheck3Feedback" class="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
  </div>
  <div class="col-12">
    <button class="btn btn-primary" type="submit">Submit form</button>
  </div>
</form>
      <div class="SignUpleftLogoPartition bg-light">
 
    </div>
    </div>

    

    <!-- <div v-else>
      <h1>Registration Successful!</h1>
      <p>Email: {{ email }}</p>
      <p>Password: ***** (hidden for security)</p>
    </div> -->
  </div>
</template>

<script>
import {firebase, auth } from "../firebase";


export default {
  data() {
    return {
      email: '',
      password: '',
      registered: false,
    };
  },
  methods: {
    async signup() {
      try {
        const result = await firebase.auth(auth).createUserWithEmailAndPassword(this.email, this.password);
        // Handle successful signup
        console.log("User signed up:", result.user);
        alert(" yess working ")
        this.registered = true;
      } catch (error) {
        // Handle signup errors
        console.log("Signup failed:", error.message);
      }
    },
  },
};
</script>

<style>
/* Your styles remain unchanged */
</style>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #ffffff;
 
}
.outerWrapperForm{
  padding: 2rem;
}
.SignUpleftLogoPartition {
  width: 50%;
 
}
form{
  width:50% !important;

  
}




input {
  padding: 8px;
  margin-bottom: 16px;
  border-radius: 10px;
}

.btns {
  padding: 10px;
/*     
        background: linear-gradient(to right, rgb(111, 54, 122), white, rgb(111, 54, 122)) !important; */
   color: rgb(111, 54, 122);
  border: none;
  cursor: pointer;
  transition: ease 0.5s ;
  border-radius: 10px;
}
.btns:hover{
 

     transform: scaleX(1.1)
}
.outerWrapperForm {
  height: 100vh;
  /* background-image:url("../assets/img.webp"); */
  /* Optional: Adjust based on your needs */
   overflow: hidden;
 
}

</style>
