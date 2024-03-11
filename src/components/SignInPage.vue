<template>
  <!-- <div>
   
  
  </div> -->
  <div class="wrapper">

    <div class="popUp col d-block d-sm-none">

    </div>

  <div
    v-if="!registered"
    class="outerWrapperForm d-flex flex-lg-row flex-sm-col flex-column "
  >
    <b-form
      @submit.prevent="onSubmit"
      class="d-flex flex-column justify-content-center col col-lg-6 col-sm-12  align-items-center"
    >
      <b-row>
        <b-col><h1>Sign In</h1></b-col>

       
      </b-row>
   
    

      <!--second column-->
     
      <!--third column-->
      <b-row class="col d-flex justify-content-between flex-grow-0">
       
        <b-col class="col-12 col-md-6">
          <b-form-group
            id="example-input-group-6"
            label="UserEmail"
            label-for="example-input-6"
          >
            <b-form-input
              id="example-input-6"
              UserEmail="example-input-6"
              placeholder="Email Address"
              v-model="$v.form.UserEmail.$model"
              :state="validateStateUserEmail('UserEmail')"
              aria-describedby="input-6-live-feedback"
            ></b-form-input>

            <b-form-invalid-feedback id="input-6.1-live-feedback"
              >This is a required field and must be valid and  follows email pattern
              example@gmail.com</b-form-invalid-feedback
            >
            <b-form-valid-feedback id="input-6.2-live-feedback">
              Perfect! Email Address: {{form.UserEmail}}</b-form-valid-feedback
            >
          </b-form-group>
        </b-col>


        
      </b-row>
       <b-row class="col d-flex justify-content-between flex-grow-0">
       
        <b-col class="col-12 col-md-6">
          <b-form-group
            id="example-input-group-4"
            label="Password"
            label-for="example-input-4"
          >
            <b-form-input
              id="example-input-4"
              Password="example-input-4"
              placeholder="Password"
              v-model="$v.form.Password.$model"
              :state="validateStatePassword('Password')"
              aria-describedby="input-4-live-feedback"
              :type="showPassword ? 'text' : 'password'"
              class="col-12"
            >
            </b-form-input>
            <!---eye button to show password-->

            <!---eye button to show password ending here-->

            <b-form-invalid-feedback id="input-4.1-live-feedback">
              Invalid Password</b-form-invalid-feedback
            >
            <b-form-valid-feedback id="input-4.2-live-feedback">
              Perfect! Password</b-form-valid-feedback
            >

            <!-- <strong :class="getStrengthClass()">Password Strength</strong>
            <span :class="getStrengthClass()" class="ml-2">
              :: {{ passwordStrength }}</span
            > -->
          </b-form-group>
        </b-col>
      </b-row>

      <!---third column ends here-->

      <b-row class="flex-grow-0">
        <b-col md="12">
          
          <b-button type="submit" variant="primary outline btnsubmit" >Sign In</b-button>
          <span>OR</span>
          <!-- <b-button variant="primary" class="m-2" @click="signInWithGoogle()">SignIn with Google</b-button> -->
        </b-col>
      </b-row>
       <b-row class="flex-grow-0">
        <b-col md="12">
         <span class="text-dark">
          Dont have accounts click here 
          <router-link to="/"> Signup now </router-link>
          for quick signup
          </span> 
        </b-col>
      </b-row>
    </b-form>

    <div
      class="SignUpleftLogoPartition d-flex align-items-center justify-content-center col col-lg-6 col-sm-12   p-4"
    >
      <span>
        <h2>Welcome to the MomosChat</h2>
        <p>
          "Join Momos Chat for an unparalleled chatting experience – where
          innovation meets seamless communication in a secure and vibrant
          community."
        </p>
      </span>
    </div>
  </div>
  </div>
</template>

<script>

// import 'firebase/auth';
// Update the path accordingly
// import { GoogleAuthProvider } from 'firebase/auth';
// import { auth } from 'firebase/auth';
// import firebase from 'firebase/app';
// import 'firebase/auth';
import { getAuth,    signInWithEmailAndPassword } from 'firebase/auth';
// import {  setDoc } from '../firebase'; // Adjust the path accordingly
// doc,db,

import { validationMixin } from "vuelidate";
import { required, minLength } from "vuelidate/lib/validators";

// const hasNumber = (value) => /\d/.test(value);

// const hasCapitalLetter = (value) => /[A-Z]/.test(value);
// const hasSymbol = (value) => /[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]/.test(value);
const emailPattern = (value) => {
  // This pattern checks for the presence of an @ symbol followed by a domain and a .com extension
  // Adjust the pattern as needed for different domains or extensions
  const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return pattern.test(value);
};


import 'firebase/auth';
//email validation
export default {
  mixins: [validationMixin],
  name: "SignInPage",
  data() {
    return {
      form: {
        Password: null,
        UserEmail: null,
      },
    
      registered: false,
      passwordStrength: "",
      showPassword: false,
    };
  },

  validations: {
    form: {
    
     
      Password: {
        required,
        minLength: minLength(5),
        // hasNumber,
        // hasCapitalLetter,
        // hasSymbol,
      },

      UserEmail: {
        required,
        minLength: minLength(5),
        emailPattern,
      },
      // file1:{
      //   required,
      // }
    },
  },

  methods: {
      makeToastSuccess(variant = null) {
        this.$bvToast.toast('Operation Successful', {
            title: `valid credintials! wellcome`,
            class:'position-fixed fixed-top m-0 rounded-0',
          variant: variant,
          solid: false
        })
      },
        makeToastDanger(variant = null) {
        this.$bvToast.toast('Operation Unsuccessful', {
          title: `invalid credintials! credentials must be valid`,
          variant: variant,
          solid: false
        })
      },
   
 
    validateStatePassword(validateStatePassword) {
      const { $dirty, $error } = this.$v.form[validateStatePassword];
      return $dirty ? !$error : null;
    },
    validateStateUserEmail(validateStateUserEmail) {
      const { $dirty, $error } = this.$v.form[validateStateUserEmail];
      return $dirty ? !$error : null;
    },
    resetForm() {
      this.form = {
        FirstName: null,
        LastName: null,
        validateStatePassword: null,
      };

      this.$nextTick(() => {
        this.$v.$reset();
      });
    },
  // async signInWithGoogle() {
  //     try {
  //       const auth = getAuth();
  //       const provider = new GoogleAuthProvider();
  //       const result = await signInWithPopup(auth, provider);
  //       const user = result.user;
        
  //       console.log('Successfully signed in with Google!');
  //       console.log('User Info:', user);

        
  //         // this.$router.push('/dashboard')

  //       // You can now use 'user' to access information about the signed-in user
  //       // For example, user.uid, user.displayName, user.email, etc.
  //     } catch (error) {
  //       console.error('Google Sign-In Error:', error.message);
  //     }
  //   },
    // onsubmit methods
      async onSubmit() {
      try {
        const auth = getAuth();
       
        const userCredential = await signInWithEmailAndPassword(
          auth,
          this.form.UserEmail,
          this.form.Password

        );
        const user = userCredential.user;
       localStorage.setItem("users", JSON.stringify(user));
        this.$store.dispatch("activeUser", user)
          console.log('Successfully logged in with email:', user);
        if(user)
        {
          this.makeToastSuccess('success');
           setTimeout(() => {
          this.$router.push('/dashboard')
        }, 2000);
        
        }else{
           

              this.makeToastSuccess('danger');
             
          
       
        }
        

        // const userDocRef = doc(db, 'users', user.uid); // Assuming 'users' is your Firestore collection
        // await setDoc({ merge: true });
        // You can access user data using userCredential.user
       
       
       
        
       

        // Optionally, you can fetch additional user data from Firestore or another database
        // and store it in your Vuex store or component state.
        // Example: this.$store.dispatch('fetchUserData', user.uid);
      } catch (error) {
        // this.makeToastSuccess('danger');
          this.makeToastDanger('danger');
          this.form.UserEmail=null;
          this.form.Password=null;
         
        console.error('Login error:', error.message );
        
      }
       this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }

     
    },
    
    // updatePasswordStrength() {
    //   const password = this.form.Password;

    //   if (password.length < 8) {
    //     this.passwordStrength = "Weak";
    //   } else if (
    //     hasNumber(password) &&
    //     hasCapitalLetter(password) &&
    //     hasSymbol(password)
    //   ) {
    //     this.passwordStrength = "Strong";
    //   } else {
    //     this.passwordStrength = "Moderate";
    //   }
    // },


    toggleShowPassword() {
      this.showPassword = !this.showPassword;
    },
  },


  //   watch: {
  //   "chatListDetails.name": {
  //     handler() {
  //       this.profileDefalut();
  //     },
  //     immediate: true,
  //   },
  // },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #ffffff;
  margin: 0 !important;
  font-family: poppins;


}
body {
 
  box-sizing: border-box;
}

.SignUpleftLogoPartition {
  background-image: url("~@/assets/signup.png");

  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  background-origin: content-box;
  background-blend-mode: color-burn;

  background-color: rgb(58, 33, 64);
}
label {
  color: black;
  text-align: initial;
}
h2 {
  font-weight: 900;
}
h1 {
  color: rgb(58, 33, 64);
}
form {
  background-color: rgb(255, 255, 255);
  padding: 3rem;
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
  transition: ease 0.5s;
  border-radius: 10px;
}
.btns:hover {
  transform: scaleX(1.1);
}

/* background-image:url("../assets/img.webp"); */
/* Optional: Adjust based on your needs */

.iconEye {
  background-color: none !important;
  border-color: none !important;
}

.iconEye:active {
  border: none !important;
  outline: none !important;
}
.btnsubmit {
  background-color: rgb(104, 58, 119);
}
.profileImage {
  border-radius: 50%;
  height: 100px;
  width: 100px;
  margin: 1rem 0 1rem 0;
}
.wrapper{
  height: 100vh;
  width: 100%;
  overflow: scroll;
  padding: 3rem;
  display: flex;
  justify-content: center;
align-items: center;
}
@media (max-width:1024px) {
  form{
    padding: 2rem 0 2rem 0;
  }
  
}
@media (max-width:768px) {
  #app{
    padding:0;
  }
  .wrapper{
    padding: 0;
    display: block;
    
  }
  
}
@media (max-width:425px) {
  form{
    padding:2rem 0 2rem 0 !important;
  }
  
}

/*my pop up css */
.popUp{

  border-radius: 50px 50px 0 0 ;
  height: 20vh;
  background-color:rgb(255, 255, 255);
  position: absolute !important;
  z-index: 2;
  bottom:0;
  padding: 1rem;
  animation: ease-in 0.5s  popupanim;
}
@keyframes popupanim {
  from{
    height: 0vh;
  }
  to{
    height: 20vh;
  }
  
}
</style>
