<script setup>
import Nav from '../components/Nav.vue'
</script>
<template>
    <Nav></Nav>
    <div class="container-fluid" style="padding-top:30px; ">
        <div class="d-flex justify-content-center " style="margin:auto">
            <form class="row g-3" style="width:40%">
                <h2 class="text-center">สมัครสมาชิก</h2>

                <!-- fitsname -->
                <div class="col-md-6">
                  <input type="text" class="form-control" placeholder="ชื่อจริง" id="fname_re" name="fname_re">
                </div>
                <!-- lastname -->
                <div class="col-md-6">
                  <input type="text" class="form-control" id="lname-re" name="lname-re" placeholder="นามสกุล">
                </div>
                <!-- username -->
                <div class="col-12">
                    <div class="input-group">
                        <div class="input-group-text"><i class="fa-solid fa-user"></i></div>
                        <input type="text" class="form-control" id="username_re" placeholder="ชื่อผู้ใช้">
                    </div>
                  <!-- email -->
                </div>
                <div class="col-12">
                  <div class="input-group">
                    <div class="input-group-text"><i class="fa-solid fa-envelope"></i></div>
                    <input type="text" class="form-control" id="email_re" placeholder="ที่อยู่อีเมล">
                  </div>
                </div>
                <!-- password -->
                <div class="col-12">
                    <div class="input-group">
                      <div class="input-group-text"><i class="fa-solid fa-key"></i></div>
                      <input type="password" class="form-control" id="password_re" placeholder="รหัสผ่าน">
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="input-group">
                      <div class="input-group-text"><i class="fa-solid fa-key"></i></div>
                      <input type="password" class="form-control" id="confirmpassword_re" placeholder="ยืนยันรหัสผ่าน">
                    </div>
                  </div>
              
                <!-- checkbox  -->
                <div class="col-12">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="gridCheck">
                    <label class="form-check-label" for="gridCheck">
                      ฉันยอมรับว่า Rex Orange County คือศิลปินที่ดีที่สุดในโลกใบนี้
                    </label>
                  </div>
                </div>
                <!-- submit button -->
                <div class="col-12 text-center">
                  <button type="submit" class="btn btn-primary" style="width:100%">สมัครสมาชิก</button>
                </div>
              </form>
        </div>
    </div>
</template>
<style scoped>
    body{
        background-color: black;  
        justify-content:center;
    }
</style>
