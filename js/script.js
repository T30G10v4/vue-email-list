const { createApp } = Vue;

createApp ({

    data(){

        return {
            mailList: []
        }

    },

    methods : {

        showEmails() {

            for(let i = 0; i < 10; i++) {
            
                axios
                .get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then((resp) => {


                    
                    this.mailList.push(resp.data.response);
                    console.log(resp.data.response);

                });

                console.log(this.mailList);
            
            }
        
        }
    }

}).mount("#app");
