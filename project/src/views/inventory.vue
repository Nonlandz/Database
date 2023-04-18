<script setup>
import Nav from '../components/Nav.vue'
</script>
<template>
    <main>
        <Nav />
    </main>
    <div class="main">
        <div class="cards-container">
            <div class="card" style="width: 14rem;" v-for="item in inventoryinfo"
                :key="item.inventory_id">
                <img :src="'http://localhost:3001'+item.item_img"
                    class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{{ item.item_name }}</h5>
                    <p class="card-text">{{ item.item_des }}</p>
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

<style scoped>
/* General styles */
body {
    font-family: Arial, sans-serif;
}

.main {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}

/* Card styles */
.card {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
    background-color: #ffffff;
    border-radius: 4px;
    overflow: hidden;
    transition: all 0.15s ease-in-out;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
}

.card-img-top {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.card-title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 16px;
}

.card-text {
    font-size: 16px;
    line-height: 1.5;
    color: #333;
}

/* Grid layout for cards */
.cards-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 16px;
}
</style>
