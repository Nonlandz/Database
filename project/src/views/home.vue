
<template>
  <div>
<Nav></Nav>
  <div class="container">
    <div class="booking-form card mt-5">
      <div class="card-header">
        <h2>Train Booking</h2>
      </div>
      <div class="card-body">
        <form @submit.prevent="submitForm">
          <div class="row">
            <div class="col-12 mb-3">
              <label class="mb-1">สายทาง:</label>
              <div>
                <button type="button" class="btn btn-outline-primary" :class="{ 'active': route === 'nort' }" @click="selectRoute(1)">สายเหนือ</button>
                <button type="button" class="btn btn-outline-primary" :class="{ 'active': route === 'northeast' }" @click="selectRoute(3)">สายตะวันออกเฉียงเหนือ</button>
                <button type="button" class="btn btn-outline-primary" :class="{ 'active': route === 'east' }" @click="selectRoute(4)">สายตะวันออก</button>
                <button type="button" class="btn btn-outline-primary" :class="{ 'active': route === 'south' }" @click="selectRoute(2)">สายใต้</button>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 form-group">
              <label for="from">ต้นทาง:</label>
              <input type="text" id="from" v-model="from" placeholder="ป้อนสถานีต้นทาง" class="form-control">
            </div>
            <div class="col-md-6 form-group">
              <label for="to">ปลายทาง:</label>
              <input type="text" id="to" v-model="to" placeholder="ป้อนสถานีปลายทาง" class="form-control">
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 form-group">
              <label for="date">วันที่เดินทาง:</label>
              <input type="date" id="date" v-model="date" class="form-control">
            </div>
            <div class="col-md-6 form-group">
              <label for="passengers">จำนวนผู้โดยสาร:</label>
              <input type="number" id="passengers" v-model="passengers" min="1" class="form-control">
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 form-group">
              <label for="class">ชั้นโดยสาร:</label>
              <select id="class" v-model="ticketClass" class="form-control">
                <option value="">เลือกชั้นโดยสาร</option>
                <option value=1>ชั้นหนึ่ง</option>
                <option value=2>ชั้นสอง</option>
              </select>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <button type="submit" class="btn btn-primary">จองตั๋ว</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import Nav from '../components/Nav.vue';
import axios from 'axios'
export default {
  components: {
    Nav,
  },
  data() {
    return {
      route: '',
      from: '',
      to: '',
      date: '',
      passengers: 1,
      ticketClass: '',
      userinfo:'',
      userid:'',

     
    };
  },
  methods: {
    selectRoute(route) {
      this.route = route;
    },
    submitForm() {
      var dest_name = this.from +" - " + this.to;

      var formData = new FormData();
          formData.append("route", this.route)
          formData.append("userid", this.userid)
          formData.append("dest_name", dest_name);
          formData.append("date", this.date);
          formData.append("passengers", this.passengers);
          formData.append("ticketClass", this.ticketClass)

          // route, userid, from, to, date, passengers, ticketClass
          console.log(formData);
          alert(
        `Booking train ticket:\nRoute: ${this.route}\n Destination: ${dest_name}\nDate: ${this.date}\nPassengers: ${this.passengers}\nTicket class: ${this.ticketClass}`
        
      );
          axios.post('http://localhost:3001/addticket', formData, {
              headers: {
              'Content-Type': 'application/json'
              }
          }).then(response => {
            console.log(response)
          })
          .catch(error => {
              console.log(error.message);
              console.log(error)
          });
    },
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

  } catch (error) {
    console.log(error);
  }
},
};
</script>

