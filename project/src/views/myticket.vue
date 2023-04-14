<script setup>
import Nav from '../components/Nav.vue';
</script>
<template>
  <main>
    <Nav />
  </main>
  <h1 class="card-title text-center">ตั๋วของฉัน</h1>
  <div v-if="this.ticketinfo.length != 0">
    <div class="container" v-for=" ticket in ticketinfo" :key="ticket.user_id">
    <div class="card" style="width: 100%; margin-top: 5%;">
      <div class="card-body">

        <div class="container"
          style="height: 100%; display: flex; justify-content: center; align-items: center; margin-top: 3%;">
          <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="https://u7.uidownload.com/vector/301/854/vector-cartoon-steam-train-vector-eps.jpg"
                  class="img-fluid rounded-start" style="height: 100%;">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">วัน: เวลา: ที่ผ่านพ้นไปนานเท่าไร</h5>
                  <p class="card-text">ต้นทาง-ปลายทาง ของ 2 เรา</p>
                  <p class="card-text">จำนวนผู้โดยสาร : {{ ticket.amount }}</p>
                  <p class="card-text">ราคา: {{ ticket.price }}</p>
                  <p class="card-text" v-if="ticket.ticket_type == 1">ประเภทตั๋ว: First class </p>
                  <p class="card-text" v-if="ticket.ticket_type == 2">ประเภทตั๋ว: Second class </p>
                  <p class="card-text"><small class="text-body-secondary">สวัสดีครับสุดหล่อ</small></p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>


    </div>
  </div>

  </div>
  <div v-else>
     <h1> ไอสัส ยังไม่มี ticket มึงจะกดเข้ามาเพื่อ</h1>
  </div>
  
</template>
<script>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import axios from 'axios'
export default {
  name: 'Nav',
  data() {
    return {
      username: '',
      userinfo: '',
      userid: '',
      ticketinfo: '',
    }
  },
  computed: {
    route() {
      return useRoute()
    }
  },
  methods: {
    logout() {
      localStorage.clear()
      this.$router.push('/')

    }
  },
  async created() {
  try {
    this.username = localStorage.getItem("user");
    console.log(this.username);

    const response1 = await axios.get(`http://localhost:3001/userinfo/${this.username}`);
    this.userinfo = response1.data.userinfo[0];
    this.userid = this.userinfo.User_id;
    console.log(this.userinfo);
    console.log(this.userid);

    const response2 = await axios.get(`http://localhost:3001/ticket/${this.userid}`);
    this.ticketinfo = response2.data.ticketinfo;
    console.log(response2.data);

  } catch (error) {
    console.log(error);
  }
},



}

</script>
 
