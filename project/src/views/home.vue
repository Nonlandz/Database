
<template>
  <div>
<Nav></Nav>
  <div class="container">
    <div class="booking-form card mt-5">
      <div class="card-header">
        <h2>Train Booking</h2>
      </div>
      <div class="card-body">
        <form @submit.prevent="searchtrain">
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
          <div class="row" v-if="station!= null">
            <div class="col-md-6 form-group">
              <label for="from">ต้นทาง:</label>
              
              <select id="class" v-model="from" class="form-control" >
                <option value="0" disabled selected>เลือกสถานีต้นทาง</option>
                <option :value="index.station_name" v-for="index in station" :key="index.station_id">{{ index.station_name}}</option>
              </select>
            </div>
            <div class="col-md-6 form-group">
              <label for="to">ปลายทาง:</label>
              <select id="class" v-model="to" class="form-control" >
                <option value="0" disabled selected>เลือกสถานีปลายทาง</option>
                <option :value="index.station_name" v-for="index in station" :key="index.station_id">{{ index.station_name}}</option>
              </select>
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
    <div v-if="this.alltrain.length != null">
      <div class="container" v-for=" train in alltrain" :key="train.train_id">
      <div class="card" style="width: 100%; margin-top: 5%;">
        <div class="card-body">
  
          <div class="container"
            style="display: flex; justify-content: center; align-items: center; margin-top: 3%;">
            <div class="card mb-3" style="max-width: 540px;">
              <div class="row g-0">
                <div class="col-md-4">
                  <img src="https://u7.uidownload.com/vector/301/854/vector-cartoon-steam-train-vector-eps.jpg"
                    class="img-fluid rounded-start" style="height: 100%;">
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">วันที่: {{ train.date }} </h5>
                    <p class="card-text">ทะเบียนรถ: {{ train.train_num }}</p>
                  
                    <p class="card-text"><small class="text-body-secondary">สวัสดีครับสุดหล่อ</small></p>
                    <button type="submit" class="btn btn-primary" @click="submitForm(train.train_id)">จองตั๋ว</button>
                  </div>
                </div>
              </div>
            </div>
  
          </div>
        </div>
  
  
      </div>
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
      station:null,
      alltrain:'',
      price:'',
      current_point:''
      

     
    };
  },
  methods: {
    selectRoute(route) {
      this.route = route;
      this.from = "0"
      this.to = "0"
      axios.get(`http://localhost:3001/station/${this.route}`)
      .then((response) => {
        this.station = response.data.station;
        console.log(this.station);
      })
      .catch((err) => {
        console.log(err);
      });
      


    },
     searchtrain(){
      axios.get('http://localhost:3001/trains',  {params: {
            route: this.route,
            date: this.date
  }
           
 } ).then(response => {
            console.log(response)
            this.alltrain = response.data
            if(this.alltrain == ''){
          alert("ไม่เจอรอบรถไฟ")
        }
          })
          .catch(error => {
              console.log(error.message);
          });

      
    },
   async submitForm(train_id) {
      // /ticketprice/:dest_name
      var dest_name = this.from +" - " + this.to;
      const response1 = await axios.get(`http://localhost:3001/ticketprice/${dest_name}`);
     if(this.ticketClass == 1){
      this.price = Number(response1.data.ticketprice[0].price) *1.7
      console.log(this.price)
     }
     else{
      this.price = Number(response1.data.ticketprice[0].price)
     }
     this.price = this.price*this.passengers

     this.current_point += Math.floor(this.price/2)
      var formData = new FormData();
          formData.append("route", this.route)
          formData.append("userid", this.userid)
          formData.append("dest_name", dest_name);
          formData.append("date", this.date);
          formData.append("passengers", this.passengers);
          formData.append("ticketClass", this.ticketClass)
          formData.append("train_id", train_id )
          formData.append("price", this.price)
        

          // route, userid, from, to, date, passengers, ticketClass
          console.log(formData);
          alert(
        `Booking train ticket:\nRoute: ${this.route}\n Destination: ${dest_name}\nDate: ${this.date}\nPassengers: ${this.passengers}\nTicket class: ${this.ticketClass} \nprice: ${this.price}`
        
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
          axios
          .put(`http://localhost:3001/updatepoint/${this.username}/${this.current_point}`)
          .catch((err) => {
            console.log(err)
          })
          window.location.reload() 
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
    this.current_point = response1.data.userinfo[0].Point
  } catch (error) {
    console.log(error);
  }
},
};
</script>

<style scoped>
/* General styles */
body {
    font-family: Arial, sans-serif;
}

.container {
    max-width: 960px;
    margin: 0 auto;
}

.booking-form {
    background-color: #f8f9fa;
    border: 1px solid #dee2e6;
    border-radius: 5px;
}

.card-header {
    background-color: #343a40;
    color: #fff;
    font-size: 24px;
    font-weight: bold;
    padding: 10px;
}

.card-body {
    padding: 20px;
}

.label {
    font-weight: bold;
    display: block;
    margin-bottom: 5px;
}

.form-control {
    width: 100%;
    height: 40px;
    padding: 0 10px;
    border: 1px solid #ced4da;
    border-radius: 4px;
    font-size: 16px;
    margin-bottom: 10px;
}

.btn {
    cursor: pointer;
    font-weight: bold;
    padding: 10px 20px;
    border-radius: 4px;
    border: none;
    font-size: 16px;
}

.btn-primary {
    background-color: #007bff;
    color: #fff;
}

.btn-outline-primary {
    background-color: transparent;
    color: #007bff;
    border: 1px solid #007bff;
}

.btn-outline-primary.active {
    background-color: #007bff;
    color: #fff;
}

.btn-primary:hover,
.btn-outline-primary:hover {
    background-color: #0056b3;
    color: #fff;
    border-color: #0056b3;
}

.mb-3 {
    margin-bottom: 1rem;
}

.mt-5 {
    margin-top: 3rem;
}



</style>
