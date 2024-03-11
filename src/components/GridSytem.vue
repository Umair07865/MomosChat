<template>
  <section class="main">
    <div class="container-fluid text-center">
      <div class="row">
        <div
          class="col-1 d-flex flex-column OuterColumns justify-content-between p-3"
        >
          <div class="controller">
            <ul
              class="d-flex flex-column justify-content-between align-items-center gap-5"
            >
              <li>
                <img
                  class="imageControls"
                  :src="require('@/assets/MomosChat.png')"
                  alt="Logo"
                  @click="reloadControler"
                />
              </li>

              <li>
                <i class="fa-solid fa-house text-white"></i>

                <span class="text-white">home</span>
              </li>

              <li>
                <i class="fa-solid fa-comments-dollar text-white"></i>
                <span class="text-white"> DMs</span>
              </li>

              <li>
                <i class="fa-solid fa-bell text-white"></i>
                <span class="text-white">Activity</span>
              </li>
              <li>
                <i class="fa-solid fa-ellipsis text-white"></i>
                <span class="text-white">More</span>
              </li>
              <li>
                <b-button
                  variant="outline-light rounded"
                  class="col"
                  @click="logoutLogic"
                  >Logout</b-button
                >
              </li>
            </ul>
          </div>
          <div
            class="profile d-flex flex-column justify-content-around align-items-center"
          >
            <i
              class="fa-solid fa-plus rounded-circle text-white addingIcon"
            ></i>
            <img
              class="imageControls"
              src="https://ca.slack-edge.com/TGFFD750S-U03L82UM1A4-20d772342fc4-72"
              alt="Logo"
            />
            <span class="rounded-circle bg-success ActiveTracker"></span>
          </div>
        </div>
        <div class="col-3 OuterColumns rounded-start">
          <div class="header d-flex justify-content-between">
            <div class="dropdown">
              <a
                class="btn bg-0 text-white dropDownButton dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                MomosChat
              </a>

              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>
              </ul>
            </div>

            <div class="d-flex text-white iconsWrapper">
              <i class="fa-solid fa-bars"></i>
              <i class="fa-regular fa-pen-to-square"></i>
            </div>
          </div>
          <hr />

          <ul class="chatsListWrapper">
            <li>
              <i class="fa-regular text-white fa-face-smile"></i>
              <span class="text-white">Welcome Back</span>
            </li>
            <li>
              <i class="fa-regular text-white fa-comment-dots"></i>
              <span class="text-white"> Threads </span>
            </li>
            <li class="drafts">
              <i class="fa-solid fa-paper-plane text-white"></i>

              <span class="text-white">Drafts & sent</span>
            </li>
          </ul>

          <!--Chanels-->
          <div class="dropdown">
            <a
              class="btn bg-0 text-white dropDownButton dropdown-toggle channelsDropDown mt-2 mb-2"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              @click="channelsControlling"
            >
              Channels
            </a>
          </div>

          <!--channel list-->
          <ul class="chatsListWrapper" v-show="channels">
            <li
              class="text-white hashTagList"
              v-for="(hash, index) in hashTags"
              :key="index"
            >
              <span class="HASH"> #</span> {{ hash }}
            </li>
          </ul>
          <div class="addChannels d-flex align-items-center">
            <i
              class="fa-solid fa-plus rounded-circle text-white addingChannelsIcon"
            ></i>
            <span class="text-white">Add Channels</span>
          </div>

          <!--Direct Messeges-->
          <div class="dropdown" @click="chattingController">
            <a
              class="btn bg-0 text-white dropDownButton dropdown-toggle channelsDropDown mt-2 mb-2"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Direct Messeges
            </a>
          </div>

          <ul class="DirectMesseges chatsListWrapper" v-show="chatsControl">
            <li v-for="(chatDetails, index) in firebaseData" :key="index">
              <img
                :src="
                  chatDetails.profileImage
                    ? ''
                    : 'https://ca.slack-edge.com/TGFFD750S-U049NKVSRUH-g1ebd9252638-512'
                "
                alt="Selected Image"
                class="imageControls"
              />

              <span :class="'rounded-circle  ActiveTrackerChats'"></span>

              <span class="text-white">{{ chatDetails.userName }}</span>
            </li>
          </ul>

          <div class="addChannels d-flex align-items-center">
            <i
              class="fa-solid fa-plus rounded-circle text-white addingChannelsIcon"
            ></i>
            <span class="text-white">Add Coworkers</span>
          </div>

          <div class="dropdown">
            <a
              class="btn bg-0 text-white dropDownButton dropdown-toggle channelsDropDown mt-2 mb-2"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              @click="appsControl"
            >
              Apps
            </a>
          </div>
          <ul class="DirectMesseges chatsListWrapper" v-show="appsControls">
            <li v-for="(app, index) in apps" :key="index">
              <img class="imageControls" :src="app.img" alt="Logo" />

              <span class="text-white">{{ app.appName }}</span>
            </li>
          </ul>

          <!--add apps-->
          <div class="addChannels d-flex align-items-center">
            <i
              class="fa-solid fa-plus rounded-circle text-white addingChannelsIcon"
            ></i>
            <span class="text-white">Add Apps</span>
          </div>

          <!-- <GoogleSignup/> -->
        </div>

        <div
          class="col-8 border bg-white OuterColumns p-0"
          style="overflow-y: scroll"
        >
          <!--header section-->
          <ChatBoxSection />
          <div>
            <b-modal
              id="modal-center"
              centered
              title="BootstrapVue"
              v-b-modal.modal-center
            >
              <p class="my-4">Vertically centered modal!</p>
            </b-modal>
          </div>

          <BookMark />
          <chatBoxProfile />
          <SectionChatting />
          <MessegeBox />
          <!-- <GoogleSignup/> -->
          <!-- <LoaderComp /> -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ChatBoxSection from "../components/ChatBoxSection.vue";
import BookMark from "../components/BookMark.vue";
import chatBoxProfile from "../components/chatBoxProfile.vue";
import MessegeBox from "../components/MessegeBox.vue";
import SectionChatting from "./SectionChatting.vue";
// import { onMounted } from 'vue';
// import GoogleSignup from "../components/GoogleSignup.vue"

export default {
  name: "GridSystem",
  components: {
    ChatBoxSection,
    BookMark,
    chatBoxProfile,
    MessegeBox,

    SectionChatting,
    // LoaderComp
  },
  data() {
    return {
      hashTags: ["Daily-Standup", "general", "office-issues"],

      chats: [
        {
          name: "M Umar",
          Img: "https://ca.slack-edge.com/TGFFD750S-U01BSC64A4R-179538f6d735-512",
          status: "online",
          id: "UM1",
          occopation: "Back End Developer",
          sudo: " M - Umar",
        },
        {
          name: "Ali Hamza",
          Img: "https://ca.slack-edge.com/TGFFD750S-U049NKVSRUH-g1ebd9252638-512",
          status: "offline",
          id: "AH2",
          occopation: "Front End Developer",
          sudo: "A - Hamza",
        },
        {
          name: "Hamza Khan",
          Img: "https://ca.slack-edge.com/TGFFD750S-U01M3G9QNJF-49b73568b2e9-512",
          status: "online",
          id: "HK3",
          occopation: "Word Press Developer",
          sudo: "H - Kahn",
        },
        {
          name: "M Izhan",
          Img: "https://ca.slack-edge.com/TGFFD750S-UGETWMEKT-5f90600653a8-512",
          status: "online",
          id: "MI4",
          occopation: "Back End Developer",
          sudo: "M - Izhan",
          profileLink: "@Mehran",
        },
        {
          name: "Mehran",
          Img: "https://ca.slack-edge.com/TGFFD750S-U01BGV6T1M0-49f86cfc927f-512",
          status: "offline",
          id: "MR5",
          occopation: "Senior Full Stack Developer",
          sudo: "Meh - ran",
        },
        {
          name: "Muhammad Umair You",
          Img: "https://ca.slack-edge.com/TGFFD750S-U03L82UM1A4-20d772342fc4-72",
          status: "online",
          id: "MU6",
          occopation: "Front End Developer",
          sudo: "M - Umair",
        },
      ],
      users: "",
      apps: [
        {
          appName: "SlackBot",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxppenqShuGm97G24op4ZqfdBj_ITS42L4dEPPWgrhXasTbG8dCCpoqqfiqvTCYy0l1So&usqp=CAU",
        },
      ],

      channels: true,
      chatsControl: true,
      appsControls: true,
      firebaseChatsData: "",
      // firebaseData:''
      FirebasefilePath: "",
    };
  },

  methods: {
    channelsControlling() {
      this.channels = !this.channels;
    },

    chattingController() {
      this.chatsControl = !this.chatsControl;
    },
    appsControl() {
      this.appsControls = !this.appsControls;
    },
    chatsControlling(nindex) {
      this.chatssData = this.chats[nindex];

      this.chatssData = JSON.stringify(this.chatssData, null, 2);

      this.$store.dispatch("chatListDetails", this.chatssData);

      //  console.log();
    },
    reloadControler() {
      window.location.reload();
    },
    userClients() {
      this.firebaseChatsData = this.$store.getters.getFirebaseDataFromStore;
      console.log("this is the data : " + this.firebaseChatsData);
    },
    userChecks() {
      if (!this.$store.getters.ActiveUser.accessToken) {
        this.$router.push("/SignupPage");
      }
    },
    logoutLogic() {
      this.$router.push("/SignIn");
    },
    currentActiveUser() {
      const userString = localStorage.getItem("users");
      if (userString) {
        // This checks that userString is not null or undefined
        try {
          console.log(JSON.parse(userString));
          return JSON.parse(userString);
          // Use the user object here
        } catch (e) {
          console.error("Error parsing user data:", e);
          // Handle parsing error (e.g., userString was not valid JSON)
        }
      } else {
        // Handle the case where there is no 'users' item in localStorage
      }
    },

    //  async loadImageFromFirestore() {
    //   // Assuming you have a function to get the image URL, replace this with your logic
    //   this.firebaseData().array.forEach(e => {
    //     this.profileImages = e.profileimage;
    //   });
    //   // Set the imageUrl in your component's data

    // },
    //   async loadImageFromFirestore() {
    //   try {
    //     const imageDataArray = this.firebaseData.map(e => {
    //       console.log("ye hai  : "  +  URL.revokeObjectURL(e.profileimage))
    //       return URL.revokeObjectURL(e.profileimage);
    //     });

    //     // Set the array of image URLs in your component's data
    //     this.profileImageUrls = imageDataArray;
    //   } catch (error) {
    //     console.error('Error loading images from Firestore:', error);
    //   }
    // },
  },
  computed: {
    firebaseData() {
      return this.$store.getters.getFirebaseDataFromStore;
    },
  },
  mounted() {
    this.$store.dispatch("fetchFirebaseDatabase");
    console.log("haya  :: " + this.$store.getters.ActiveUser.accessToken);
    this.currentActiveUser();

    // this.getImageUrl();

    console.log("firebase wala : " + this.firebaseDataImages);
  },

  // mounted() {
  //   const chatElements = document.querySelectorAll(".ActiveTrackerChats");

  //   this.chats.forEach((chat, index) => {
  //     const element = chatElements[index];

  //     if (chat.status === "online") {
  //       element.classList.add("bg-success");
  //     } else if (chat.status === "offline") {
  //       element.classList.add("bg-secondary");
  //     }
  //   });

  // },
};
</script>

<style>
/* body {
  overflow: hidden;
  color: black !important;
} */
#aap {
  padding: 0 !important;
}
.controller ul {
  list-style: none;
  padding: 0 2rem;

  gap: 1rem;
}
.controller ul li span {
  font-size: 0.9rem;
}
.controller ul li i {
  transition: ease 1s;
  padding: 1rem;

  border-radius: 10px;
}
.controller ul li i:hover {
  background-color: #ffffff30;
}
.imageControls {
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 10px;

  /* display: flex!important;
    justify-content: space-between;
    align-items: baseline;
    gap: 2rem; */
}
.col-1 {
  background-color: rgb(111, 54, 122);
}

.profile {
  gap: 1rem;
  margin: 2rem 0;
}
.addingIcon {
  background-color: rgba(255, 255, 255, 0.352);
  padding: 12px;
}
.ActiveTracker {
  padding: 5px;
  position: relative;
  bottom: 1.7rem;
  left: 16px;

  box-shadow: -2px -1px 0px 1px rgb(111, 54, 122);
}
.dropDownButton {
  font-weight: 900;
  font-size: 1.2rem;
  padding: 0 !important;
}
.dropDownButton:focus-visible {
  border: none !important;
  outline: none !important;
}
.iconsWrapper {
  gap: 1.5rem;
}
.col-3 {
  background-color: rgb(53, 31, 59);
  padding: 1rem 0;
  border-radius: 10px 0 0 10px;
  text-align: initial;
  overflow-y: scroll;
}
.OuterColumns {
  height: 95vh;
}
.header {
  padding: 0 1rem;
}
hr {
  background-color: rgb(165 163 163 / 48%);
}
.chatsListWrapper {
  list-style: none;
  text-align: initial;
  padding: 0;
  margin: 0;
}
.chatsListWrapper li {
  display: flex;
  align-items: center;
  gap: 12px;
  border-radius: 10px;
  margin: 1px 2rem;
  padding: 5px;
  transition: eae 0.5s;
  cursor: pointer;
}
.chatsListWrapper li:hover {
  background-color: rgb(92, 41, 100);
}
.channelsDropDown {
  font-weight: 100;
  margin-left: 2rem;
  font-size: 1.1rem;
}
.HASH {
  font-size: 1.3rem;
  font-weight: bold;
}
.hashTagList {
  margin-top: 0px !important;
  padding: 0 5px !important;
}
.addingChannelsIcon {
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 5px !important;
  padding: 0.4rem;
  font-size: 0.6rem;
}
.addChannels {
  gap: 8px;
  padding: 0 2rem;
}
.ActiveTrackerChats {
  position: relative;
  padding: 3px;
  right: 13px;
  top: 10px;
  outline: 2px solid rgb(53, 31, 59);
  border: 1px solid white;
}
.DirectMesseges li {
  margin: 0px 26px;
  gap: 5px !important;
}
.DirectMesseges li img {
  height: 1.5rem;
  width: 1.5rem;
}
</style>
