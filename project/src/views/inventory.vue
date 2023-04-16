<script setup>
import Nav from '../components/Nav.vue'
</script>
<template>
    <main>
        <Nav />
    </main>
    <div class="flex items-center">
    
            <div class="card-body">
                <h5 class="card-title text-center mt-6"><strong>INVENTORY</strong></h5>
                <br /><br />
                <div class="flex p-12 space-x-5 ml-44">
                <div class="card text-center" style="width: 14rem; margin-bottom: 5%" v-for="item in inventoryinfo"
                    :key="item.inventory_id">
                    <img src="https://static.vecteezy.com/system/resources/previews/012/872/323/original/discount-coupon-3d-png.png"
                        class="card-img-top" alt="..." />
                    <div class="card-body">
                        <p class="card-text">{{ item.item_name }}</p>
                        <p class="card-text">{{ item.item_des }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>
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
            itemid: '',
            inventoryinfo: '',
            userid:''
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
        axios.get(`http://localhost:3001/userinfo/${this.username}`)
            .then((response) => {
                this.userinfo = response.data.userinfo[0]
                this.curent_point = response.data.userinfo[0].Point
                this.userid = this.userinfo.User_id
                axios.get(`http://localhost:3001/inventory/${this.userid}`)
            .then((response) => {
                this.inventoryinfo = response.data.inventoryinfo
                console.log(response.data)
            })
            .catch((err) => {
                console.log(err)
            })
            })
            .catch((err) => {
                console.log(err)
            }
            
            )

    }
}
</script>
