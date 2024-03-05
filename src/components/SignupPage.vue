<template>
  <!-- <div>
   
  
  </div> -->
  <div class="wrapper">

  <div
    v-if="!registered"
    class="outerWrapperForm d-flex flex-lg-row flex-sm-col flex-column "
  >
    <b-form
      @submit.prevent="onSubmit"
      class="d-flex flex-column justify-content-center col col-lg-6 col-sm-12  align-items-center"
    >
      <b-row>
        <b-col><h1>Sign Up</h1></b-col>
      </b-row>
      <b-row>
        <b-col>
          <img
            v-if="file1"
            :src="getImageUrl"
            alt="Selected Image"
            class="profileImage"
          />
          <img
            v-if="!file1"
            src="https://ca.slack-edge.com/TGFFD750S-U049NKVSRUH-g1ebd9252638-192"
            alt="Selected Image"
            class="profileImage"
          />
        </b-col>
      </b-row>
      <b-row class="col d-flex justify-content-between flex-grow-0">
        <b-col class="col-12 col-md-6">
          <b-form-group
            id="example-input-group-1"
            label="FirstName"
            label-for="example-input-1"
          >
            <b-form-input
              id="example-input-1"
              FirstName="example-input-1"
              placeholder="First Name"
              v-model="$v.form.FirstName.$model"
              :state="validateStateFirstName('FirstName')"
              aria-describedby="input-1-live-feedback"
            ></b-form-input>

            <b-form-invalid-feedback id="input-1.1-live-feedback"
              >This is a required field and must be at least 3
              characters.</b-form-invalid-feedback
            >
            <b-form-valid-feedback id="input-1.2-live-feedback"
              >Perfect!</b-form-valid-feedback
            >
          </b-form-group>
        </b-col>
        <b-col class="col-12 col-md-6">
          <b-form-group
            id="example-input-group-2"
            label="LastName"
            label-for="example-input-2"
          >
            <b-form-input
              id="example-input-2"
              LastName="example-input-2"
              placeholder="Last Name"
              v-model="$v.form.LastName.$model"
              :state="validateStateLastName('LastName')"
              aria-describedby="input-2-live-feedback"
            ></b-form-input>

            <b-form-invalid-feedback id="input-2.1-live-feedback"
              >This is a required field and must be at least 3
              characters.</b-form-invalid-feedback
            >
            <b-form-valid-feedback id="input-2.2-live-feedback"
              >Perfect!</b-form-valid-feedback
            >
          </b-form-group>
        </b-col>
      </b-row>

      <!--second column-->
      <b-row class="col d-flex justify-content-between flex-grow-0">
        <b-col class="col-12 col-md-6">
          <b-form-group
            id="example-input-group-3"
            label="UserName"
            label-for="example-input-3"
          >
            <b-form-input
              id="example-input-3"
              UserName="example-input-3"
              placeholder="User Name"
              v-model="$v.form.UserName.$model"
              :state="validateStateUserName('UserName')"
              aria-describedby="input-3-live-feedback"
            ></b-form-input>

            <b-form-invalid-feedback id="input-3.1-live-feedback"
              >This is a required field and must be at least 5
              characters.</b-form-invalid-feedback
            >
            <b-form-valid-feedback id="input-3.2-live-feedback"
              >Perfect!</b-form-valid-feedback
            >
          </b-form-group>
        </b-col>
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
              Password must meet the following criteria: - Minimum length of 8
              characters - Numeric characters - At least one capital letter - At
              least one
              symbol!@#$%^&*()_+{}[]:;,.?~\\/-</b-form-invalid-feedback
            >
            <b-form-valid-feedback id="input-4.2-live-feedback">
              Perfect! Password</b-form-valid-feedback
            >

            <strong :class="getStrengthClass()">Password Strength</strong>
            <span :class="getStrengthClass()" class="ml-2">
              :: {{ passwordStrength }}</span
            >
          </b-form-group>
        </b-col>
      </b-row>
      <!--third column-->
      <b-row class="col d-flex justify-content-between flex-grow-0">
        <b-col class="col-12 col-md-6">
          <!------>
          <b-form-group
            id="example-input-group-5"
            label="Confirm Password"
            label-for="example-input-5"
          >
            <!-- <div> -->
              <b-form-input
                id="example-input-5"
                confirmPassword="example-input5"
                placeholder="Confirm Password"
                v-model="$v.form.confirmPassword.$model"
                :state="validateStateConfirmPassword('confirmPassword')"
                aria-describedby="input-5-live-feedback"
                :type="showPassword ? 'text' : 'password'"
              ></b-form-input>

              <!-- <b-input-group-append> -->
              <b-button
                class="rounded"
                @click="toggleShowPassword"
                variant="none"
              >
                <b-icon
                  class="text-success"
                  v-if="showPassword"
                  icon="eye-fill"
                ></b-icon>
                <b-icon
                  class="text-muted"
                  v-else
                  icon="eye-slash-fill"
                ></b-icon>
              </b-button>
              <!-- </b-input-group-append> -->
            <!-- </div> -->

            <b-form-invalid-feedback id="input-5.1-live-feedback">
              Password must be same invalid input</b-form-invalid-feedback
            >
            <b-form-valid-feedback id="input-5.2-live-feedback">
              Thanks! for the confirmation</b-form-valid-feedback
            >
            <strong :class="getStrengthClass()">Password Strength</strong>
            <span :class="getStrengthClass()" class="ml-2">
              :: {{ passwordStrength }}</span
            >
          </b-form-group>
          <!------>
        </b-col>
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
              >This is a required field and must follows email pattern
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
            id="example-input-group-7"
            label="User Profile Image"
            label-for="example-input-7"
          >
            <b-form-file
              v-model="file1"
              :state="validateFileState()"
              class="mb-5"
              accept=".jpg, .png, .jpeg"
              placeholder="Choose Your Profile Picture..."
              drop-placeholder="Drop file here..."
            ></b-form-file>
            <b-form-invalid-feedback id="input-7.1-live-feedback">
              {{ validateFile() ? "" : "This is a required field" }}
            </b-form-invalid-feedback>
            <b-form-valid-feedback id="input-7.2-live-feedback">
              File Successfully Added <span>{{ file1 ? file1.name : "" }}</span>
            </b-form-valid-feedback>
          </b-form-group>

       
        </b-col>
      </b-row>

      <!---third column ends here-->

      <b-row class="flex-grow-0">
        <b-col md="12">
          <b-button type="submit" variant="outline btnsubmit">Sign Up</b-button>
          <span>OR</span>
          <b-button variant="primary" class="m-2" @click="signInWithGoogle()">Signup with Google</b-button>
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
import { getAuth, signInWithPopup, GoogleAuthProvider , createUserWithEmailAndPassword} from 'firebase/auth';
import { doc,db, setDoc } from '../firebase'; // Adjust the path accordingly


import { validationMixin } from "vuelidate";
import { required, minLength } from "vuelidate/lib/validators";

const hasNumber = (value) => /\d/.test(value);

const hasCapitalLetter = (value) => /[A-Z]/.test(value);
const hasSymbol = (value) => /[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]/.test(value);
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
  name: "SignupPage",
  data() {
    return {
      form: {
        FirstName: null,
        LastName: null,
        UserName: null,
        Password: null,
        confirmPassword: null,
        UserEmail: null,
        imgurl:null,
      },
      file1: null,
      selectedFile: null,
      registered: false,
      passwordStrength: "",
      showPassword: false,
    };
  },

  validations: {
    form: {
      FirstName: {
        required,
        minLength: minLength(3),
      },
      LastName: {
        required,
        minLength: minLength(3),
      },
      UserName: {
        required,
        minLength: minLength(5),
      },
      Password: {
        required,
        minLength: minLength(5),
        hasNumber,
        hasCapitalLetter,
        hasSymbol,
      },
      confirmPassword: {
        required,
      sameAsPassword: function(value) {
          return value === this.form.Password}
        
         
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
  computed: {
    getImageUrl() {
      return URL.createObjectURL(this.file1);
    },
   
  
  },
  methods: {
    validateStateFirstName(FirstName) {
      const { $dirty, $error } = this.$v.form[FirstName];
      return $dirty ? !$error : null;
    },
    validateStateLastName(LastName) {
      const { $dirty, $error } = this.$v.form[LastName];
      return $dirty ? !$error : null;
    },

    validateStateUserName(UserName) {
      const { $dirty, $error } = this.$v.form[UserName];
      return $dirty ? !$error : null;
    },
    validateStatePassword(validateStatePassword) {
      const { $dirty, $error } = this.$v.form[validateStatePassword];
      return $dirty ? !$error : null;
    },
    validateStateConfirmPassword() {
  // Ensure this points correctly to your confirmPassword validation
  const validationState = this.$v.form.confirmPassword;

  // Not interacted yet or has error
  if (!validationState.$dirty) return null; // Not touched, don't show validation feedback
  return !validationState.$error; // true if no validation error, false otherwise
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
  async signInWithGoogle() {
      try {
        const auth = getAuth();
        const provider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        
        console.log('Successfully signed in with Google!');
        console.log('User Info:', user);

        // You can now use 'user' to access information about the signed-in user
        // For example, user.uid, user.displayName, user.email, etc.
      } catch (error) {
        console.error('Google Sign-In Error:', error.message);
      }
    },
    // onsubmit methods
      async onSubmit() {
      try {
        const auth = getAuth();
       
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          this.form.UserEmail,
          this.form.Password

        );
 const user = userCredential.user;
        
   const additionalUserData = {
      firstName: this.form.FirstName,
      lastName: this.form.LastName,
      userName: this.form.UserName,
      password:this.form.Password,
      confirmPassword:this.form.confirmPassword,
      profileimage: this.getImageUrl
      

      // Add other fields as needed
    };
    const userDocRef = doc(db, 'users', user.uid); // Assuming 'users' is your Firestore collection
    await setDoc(userDocRef, additionalUserData, { merge: true });
        // You can access user data using userCredential.user
       
        alert("Firebase login succesful")
        console.log('Successfully logged in with email:', user);
        this.$store.dispatch("userslogin" , user);
        localStorage.setItem("datas" , user);
         alert("Form submitted!");
       this.$router.push('/');

        // Optionally, you can fetch additional user data from Firestore or another database
        // and store it in your Vuex store or component state.
        // Example: this.$store.dispatch('fetchUserData', user.uid);
      } catch (error) {
        alert("firebase authentication failed")
        console.error('Login error:', error.message );
        
      }
       this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }

     
    },
    
    updatePasswordStrength() {
      const password = this.form.Password;

      if (password.length < 8) {
        this.passwordStrength = "Weak";
      } else if (
        hasNumber(password) &&
        hasCapitalLetter(password) &&
        hasSymbol(password)
      ) {
        this.passwordStrength = "Strong";
      } else {
        this.passwordStrength = "Moderate";
      }
    },

  
    getStrengthClass() {
      return {
        "text-danger": this.passwordStrength === "Weak",
        "text-warning": this.passwordStrength === "Moderate",
        "text-success": this.passwordStrength === "Strong",
      };
    },
    toggleShowPassword() {
      this.showPassword = !this.showPassword;
    },
    validateFile() {
      return this.$v.file1?.$pending ? null : !this.$v.file1?.$error;
    },
    validateFileState() {
      // Return the state based on the validation status
      return Boolean(this.file1) && !this.$v.file1?.$error;
    },
  },
  watch: {
    "form.Password": "updatePasswordStrength",
    
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
</style>
