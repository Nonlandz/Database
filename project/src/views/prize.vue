<script setup>
import Nav from '../components/Nav.vue'
</script>
<template>
  
  <main>
    <Nav />
  </main>
  <div class="container">
    <div class="card" style="
            width: 100%;
            margin-top: 5%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 3%;
          ">
      <div class="card-body">
        <h5 class="card-title text-center"><strong>หน้าแลกของรางวัล</strong></h5>
        <br /><br />
        <div class="card-container"> 
        <div class="card text-center mr-3" style="width: 18rem; margin-bottom: 5%" v-for="prize in prizes"
          :key="prize.item_id">
          <img :src="'http://localhost:3001' +prize.item_img"
            class="card-img-top object-contain h-48 w-96" alt="..." />
          <div class="card-body">
            <p class="card-text">{{ prize.item_name }}</p>
            <p class="card-text">description : {{ prize.item_des }}</p>
            <p class="card-text">point : {{ prize.point }}</p>

            <a href="#" class="btn btn-primary" @click="change(prize.point, prize.item_id)">แลกของรางวัล</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>


<style>
.card-container {
  display: flex; /* ใช้ Flexbox */
  flex-direction: row; /* กำหนดให้เรียงแนวนอน */
  flex-wrap: wrap; /* ให้การ์ดยาวเมื่อพื้นที่หมด */
  justify-content: center; /* จัดให้อยู่ตรงกลาง */
}
</style>

<script>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import axios from 'axios'

export default {
  data() {
    return {
      prizes: '',
      userinfo: '',
      curent_point: '',
      itemid: ''
    }
  },
  methods: {
    change(point, itemid) {
      if (this.curent_point >= point) {
        this.curent_point -= point
        this.itemid = itemid
        console.log(this.curent_point)
        console.log(this.itemid)
        axios
          .put(`http://localhost:3001/updatepoint/${this.username}/${this.curent_point}`)
          .catch((err) => {
            console.log(err)
          })
          axios
          .post(`http://localhost:3001/addinventory/${this.userinfo.User_id}/${this.itemid}`)
          .catch((err) => {
            console.log(err)
          })
        Swal.fire('Success', 'แลกของรางวัลสำเร็จ', 'success')
        const myTimeout = setTimeout(reload, 1000);

        function reload() {
          location.reload()
        }


      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Point ของคุณไม่เพียงพอ'
        })
      }
    }
  },
  created() {
    this.username = localStorage.getItem('user')
    axios
      .get('http://localhost:3001/prize')
      .then((response) => {
        this.prizes = response.data.prizeinfo
        console.log(this.prizes)
      })
      .catch((err) => {
        console.log(err)
      })

    axios
      .get(`http://localhost:3001/userinfo/${this.username}`)
      .then((response) => {
        this.userinfo = response.data.userinfo[0]
        this.curent_point = response.data.userinfo[0].Point
        console.log(this.curent_point)
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
</script>
