 


    export const myMixin = {
        data() {
          return {
            mixinData: 'Hello from mixin!',
          };
        },
        methods: {
            profileDefalut() {
                if (!this.chatListDetails.name) {
                //   alert("Running");
                  this.defaultControler = false;
                } else {
                  // alert("Error: " + this.chatListDetails.name);
                  this.defaultControler = true;
                }
              },
        },
      };