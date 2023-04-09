<template>
    <H1>THIS IS A TEST OF BACKEND => FRONTEND</H1>
    <div v-for="ticket in test" :key="ticket.ticket_id">
        <a> Create Ticket by UserID :{{ ticket.user_id }}</a>
    </div>

</template>

<script>
  import axios from "axios";
import { RouterLink } from "vue-router";
  export default {
    data() {
        return {
            test: null // add blogs variable
        };
    },
    // methods: {
    //     addLike(Boss) {
    //         axios.post(`http://localhost:3000/blogs/addlike/${Boss.id}`).then((response) => {
    //             response;
    //             Boss.like++
    //             // this.$router.push({path: '/'})
    //             // window.location.reload();
    //         });
    //     }
    // },
    created() {
        axios.get("http://localhost:3001/test")
            .then((response) => {
            this.test = response.data.test;
            console.log(this.test);
           
        })
            .catch((err) => {
            console.log(err);
        });
    },
    components: { RouterLink }
}


  </script>
  <style>
</style>
  