<template>
  <!-- <div>
   
  
  </div> -->
  <div
    v-if="!registered"
    class="outerWrapperForm d-flex flex-md-row flex-column"
  >
    <b-form
      @submit.stop.prevent="onSubmit"
      class="d-flex flex-column justify-content-center col col-md-6 p-5 align-items-center"
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
        <b-col>
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

            <b-form-invalid-feedback id="input-1-live-feedback"
              >This is a required field and must be at least 3
              characters.</b-form-invalid-feedback
            >
            <b-form-valid-feedback id="input-1-live-feedback"
              >Perfect!</b-form-valid-feedback
            >
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group
            id="example-input-group-1"
            label="LastName"
            label-for="example-input-1"
          >
            <b-form-input
              id="example-input-1"
              LastName="example-input-1"
              placeholder="Last Name"
              v-model="$v.form.LastName.$model"
              :state="validateStateLastName('LastName')"
              aria-describedby="input-1-live-feedback"
            ></b-form-input>

            <b-form-invalid-feedback id="input-1-live-feedback"
              >This is a required field and must be at least 3
              characters.</b-form-invalid-feedback
            >
            <b-form-valid-feedback id="input-1-live-feedback"
              >Perfect!</b-form-valid-feedback
            >
          </b-form-group>
        </b-col>
      </b-row>

      <!--second column-->
      <b-row class="col d-flex justify-content-between flex-grow-0">
        <b-col>
          <b-form-group
            id="example-input-group-1"
            label="UserName"
            label-for="example-input-1"
          >
            <b-form-input
              id="example-input-1"
              UserName="example-input-1"
              placeholder="User Name"
              v-model="$v.form.UserName.$model"
              :state="validateStateUserName('UserName')"
              aria-describedby="input-1-live-feedback"
            ></b-form-input>

            <b-form-invalid-feedback id="input-1-live-feedback"
              >This is a required field and must be at least 5
              characters.</b-form-invalid-feedback
            >
            <b-form-valid-feedback id="input-1-live-feedback"
              >Perfect!</b-form-valid-feedback
            >
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group
            id="example-input-group-1"
            label="Password"
            label-for="example-input-1"
          >
            <b-form-input
              id="example-input-1"
              Password="example-input-1"
              placeholder="Password"
              v-model="$v.form.Password.$model"
              :state="validateStatePassword('Password')"
              aria-describedby="input-1-live-feedback"
              :type="showPassword ? 'text' : 'password'"
              class="col-12"
            >
            </b-form-input>
            <!---eye button to show password-->

            <!---eye button to show password ending here-->

            <b-form-invalid-feedback id="input-1-live-feedback">
              Password must meet the following criteria: - Minimum length of 8
              characters - Numeric characters - At least one capital letter - At
              least one
              symbol!@#$%^&*()_+{}[]:;,.?~\\/-</b-form-invalid-feedback
            >
            <b-form-valid-feedback id="input-1-live-feedback">
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
        <b-col>
          <!------>
          <b-form-group
            id="example-input-group-2"
            label="Confirm Password"
            label-for="example-input-2"
          >
            <!-- <div> -->
              <b-form-input
                id="example-input-1"
                confirmPassword="example-input1"
                placeholder="Confirm Password"
                v-model="$v.form.confirmPassword.$model"
                :state="validateStateConfirmPassword('confirmPassword')"
                aria-describedby="input-2-live-feedback"
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

            <b-form-invalid-feedback id="input-2-live-feedback">
              Password must be same invalid input</b-form-invalid-feedback
            >
            <b-form-valid-feedback id="input-2-live-feedback">
              Thanks! for the confirmation</b-form-valid-feedback
            >
            <strong :class="getStrengthClass()">Password Strength</strong>
            <span :class="getStrengthClass()" class="ml-2">
              :: {{ passwordStrength }}</span
            >
          </b-form-group>
          <!------>
        </b-col>
        <b-col>
          <b-form-group
            id="example-input-group-1"
            label="UserEmail"
            label-for="example-input-1"
          >
            <b-form-input
              id="example-input-1"
              UserEmail="example-input-1"
              placeholder="Email Address"
              v-model="$v.form.UserEmail.$model"
              :state="validateStateUserEmail('UserEmail')"
              aria-describedby="input-1-live-feedback"
            ></b-form-input>

            <b-form-invalid-feedback id="input-1-live-feedback"
              >This is a required field and must follows email pattern
              example@gmail.com</b-form-invalid-feedback
            >
            <b-form-valid-feedback id="input-1-live-feedback">
              Perfect! Email Address</b-form-valid-feedback
            >
          </b-form-group>
        </b-col>
      </b-row>
      <b-row class="col d-flex justify-content-between flex-grow-0">
        <b-col>
          <b-form-group
            id="example-input-group-1"
            label="User Profile Image"
            label-for="example-input-1"
          >
            <b-form-file
              v-model="file1"
              :state="validateFileState()"
              class="mb-5"
              accept=".jpg, .png, .jpeg"
              placeholder="Choose Your Profile Picture..."
              drop-placeholder="Drop file here..."
            ></b-form-file>
            <b-form-invalid-feedback id="input-1-live-feedback">
              {{ validateFile() ? "" : "This is a required field" }}
            </b-form-invalid-feedback>
            <b-form-valid-feedback id="input-1-live-feedback">
              File Successfully Added <span>{{ file1 ? file1.name : "" }}</span>
            </b-form-valid-feedback>
          </b-form-group>

          <!-- <b-form-invalid-feedback id="input-1-live-feedback">
      {{ validateFile() ? '' : 'This is a required field' }}
    </b-form-invalid-feedback>
    <b-form-valid-feedback id="input-1-live-feedback">
      File Successfully Added <span>this is  : {{file1}}</span>
    </b-form-valid-feedback> -->
        </b-col>
      </b-row>

      <!---third column ends here-->

      <b-row class="flex-grow-0">
        <b-col md="12">
          <b-button type="submit" variant="outline btnsubmit">Sign Up</b-button>
          <span>OR</span>
          <b-button variant="primary" class="m-2">Signup with Google</b-button>
        </b-col>
      </b-row>
    </b-form>

    <div
      class="SignUpleftLogoPartition d-flex align-items-center justify-content-center col col-md-6 p-4"
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
</template>

<script>
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
        minLength: minLength(5),
        hasNumber,
        hasCapitalLetter,
        hasSymbol,
        
         
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
   validateStateConfirmPassword(validateStateConfirmPassword) {
  const { $dirty, $error } = this.$v.form[validateStateConfirmPassword];
      return $dirty ? !$error : null;
  
},

  //    checkConfirmPass(confirmPassword)
  //  {
  //        if (confirmPassword==this.Password) {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //  },

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
    onSubmit() {
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }

      alert("Form submitted!");
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

    // updateConfirmPasswordStrength() {
    //   // const confirmPassword = this.form.confirmPassword;
    //   if (this.Password == this.confirmPassword) {
    //     return true;
    //   } else {
    //     return false;
    //   }

      // if (confirmPassword.length < 8) {
      //   this.passwordStrength = "Weak";
      // } else if (
      //   hasNumber(confirmPassword) &&
      //   hasCapitalLetter(confirmPassword) &&
      //   hasSymbol(confirmPassword)
      // ) {
      //   this.passwordStrength = "Strong";
      // } else {
      //   this.passwordStrength = "Moderate";
      // }
    // },
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

  padding: 2rem;
}
body {
  overflow-y: scroll;
  box-sizing: border-box;
}
.outerWrapperForm {
  /* padding: 2rem; */
  /* background-color: rgb(104, 58, 119) !important; */
  background: linear-gradient(to bottom rgb(86, 49, 91), rgb(124, 73, 132));
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
</style>
