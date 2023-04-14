
<template>
  <Nav />
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
                <button type="button" class="btn btn-outline-primary" :class="{ 'active': route === 'north' }" @click="selectRoute('north')">สายเหนือ</button>
                <button type="button" class="btn btn-outline-primary" :class="{ 'active': route === 'northeast' }" @click="selectRoute('northeast')">สายตะวันออกเฉียงเหนือ</button>
                <button type="button" class="btn btn-outline-primary" :class="{ 'active': route === 'east' }" @click="selectRoute('east')">สายตะวันออก</button>
                <button type="button" class="btn btn-outline-primary" :class="{ 'active': route === 'south' }" @click="selectRoute('south')">สายใต้</button>
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
                <option value="first">ชั้นหนึ่ง</option>
                <option value="second">ชั้นสอง</option>
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
</template>

<script>
import Nav from '../components/Nav.vue';

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
    };
  },
  methods: {
    selectRoute(route) {
      this.route = route;
    },
    submitForm() {
      alert(
        `Booking train ticket:\nRoute: ${this.route}\nFrom: ${this.from}\nTo: ${this.to}\nDate: ${this.date}\nPassengers: ${this.passengers}\nTicket class: ${this.ticketClass}`
      );
    },
  },
};
</script>

