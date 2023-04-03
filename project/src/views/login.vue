<template>
   
   <div class="container" style="height: 100%; display: flex; justify-content: center; align-items: center; margin-top: 9%;">
        <div class="card" style="width: 100%;">
      <div class="row g-0">
        <div class="col-6">
          <div class="p-0"><img src="https://previews.123rf.com/images/analia26/analia261601/analia26160100009/51129935-animal-train-cartoon.jpg"  style="width: 100%; height: 50%;"></div>
        </div>
        <div class="col-6">
          <div class="p-0 ms-5" style="margin-top: 20%;">
           
        <form>
                <div class="mb-5">
                <h3 class="ms-1"><strong>ล็อคอิน</strong></h3>
                </div>
                <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Username</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" style="width:500px">
              
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" style="width:500px">
            </div>
            <button type="submit" class="btn btn-primary mb-3">Submit</button>

            <div class="text sign-up-text ">
                  ยังไม่มีบัญชีใช่ไหม
                  <router-link to="/register"><label for="flip">สร้างบัญชี</label> </router-link>
                </div>
            </form>
        
            </div>  
        </div>
      </div>
    </div>
    </div>


</template>
