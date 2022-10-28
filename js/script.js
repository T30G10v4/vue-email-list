const { createApp } = Vue;

createApp ({

    data(){

        return {
            mailList: [],
            onLoading: ""
        }

    },

    methods : {

        showEmails() {

            if(this.mailList.length !== 0) this.mailList = [];

            this.onLoading = "Caricamento in corso...";

            for(let i = 0; i < 10; i++) {
            
                axios
                .get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then((resp) => {

                    this.mailList.push(resp.data.response);
                    
                });
            
            }
        
        }
    }

}).mount("#app");