const app = new Vue({

    el: '#app',
    data: {
        mails: [],

    },

    created(){

        for(let i = 0; i < 10; i++){

            axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((res) =>{
                    this.mails.push(res.data.response);
            });

        }    
    },

});