<template>
<div class="" id="content">
  <div class="row first-col p-0 ">
    <div class="col-md-6 p-5">
      <h3 class="text-center pb-3 font-weight-bold font-weight-bold animate__fadeIn">
        {{ $t("contactModal.title") }}
      </h3>
      <!-- form-->
      <div class="form animate__animated animate__fadeIn">
        <form>
          <div class="form-group">
            <label>{{ $t("contactModal.subject") }}</label>
            <input type="text" class="form-control text-dark" :class="{ 'is-invalid': isInValidSubject }" placeholder="Enter subject" v-model="User[0].subject" id="subject" name="subject" />
          </div>
          <div class="form-group">
            <label>{{ $t("contactModal.email") }}</label>
            <input type="email" class="form-control text-dark" :class="{ 'is-invalid': isInValidEmail }" :placeholder="emailPlaceholder" v-model="User[0].email" id="email" name="email" required aria-required="true" />
          </div>
          <label> {{ $t("contactModal.phone") }}</label>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1">+237</span>
            </div>
            <input type="number" class="form-control text-dark" :class="{ 'is-invalid': isInValidPhone }" :placeholder="phonePlaceHolder" aria-describedby="basic-addon1" v-model="User[0].phone" id="phone" name="phone" />
          </div>
          <label>{{ $t("contactModal.message") }}</label>
          <div class="input-group mb-3">
            <textarea type="text" class="form-control text-dark" rows="3" :class="{ 'is-invalid': isInValidDescription }" :placeholder="messagePlaceHolder" aria-describedby="basic-addon1" v-model="User[0].description" id="description" name="description" />
          </div>
          <div v-if="isSubmit == false">
            <button class="button button-check  px-4 btn-block mt-4 animate__animated animate__pulse" @click.prevent="
                  postData(
                    User[0].subject,
                    User[0].email,
                    User[0].description,
                    User[0].phone
                  )
                ">
              {{ $t("contactModal.sendButton") }}
              <font-awesome-icon size="1x" :icon="['fas', 'paper-plane']" />
            </button>
          </div>

          <!-- Loader -->
          <div class=" loader text-center pt-3 animate__animated animate__fadeIn" v-if="isSubmit == true">
            <div class="spinner-border  " role="status">
              <span class="sr-only">Loading...</span>
            </div>
          </div>
        </form>
      </div>
    </div>
 
  <div class="col-md-6">
      <!-- image -->
      <div class="image"></div>
    </div>
  </div>
          <!--second form-->
<div class="row second-col px-5 py-4">
    <div class="col-md-12 second-item">
      <h3 class="text-center pb-3 font-weight-bold font-weight-bold animate__fadeIn">
        {{ $t("contactModal.title") }}
      </h3>
      <!-- form-->
      <div class="form animate__animated animate__fadeIn">
        <form>
          <div class="form-group">
            <label>{{ $t("contactModal.subject") }}</label>
            <input type="text" class="form-control text-dark" :class="{ 'is-invalid': isInValidSubject }" placeholder="Enter subject" v-model="User[0].subject" id="subject" name="subject" />
          </div>
          <div class="form-group">
            <label>{{ $t("contactModal.email") }}</label>
            <input type="email" class="form-control text-dark" :class="{ 'is-invalid': isInValidEmail }" :placeholder="emailPlaceholder" v-model="User[0].email" id="email" name="email" required aria-required="true" />
          </div>
          <label> {{ $t("contactModal.phone") }}</label>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1">+237</span>
            </div>
            <input type="number" class="form-control text-dark" :class="{ 'is-invalid': isInValidPhone }" :placeholder="phonePlaceHolder" aria-describedby="basic-addon1" v-model="User[0].phone" id="phone" name="phone" />
          </div>
          <label>{{ $t("contactModal.message") }}</label>
          <div class="input-group mb-3">
            <textarea type="text" class="form-control text-dark" rows="3" :class="{ 'is-invalid': isInValidDescription }" :placeholder="messagePlaceHolder" aria-describedby="basic-addon1" v-model="User[0].description" id="description" name="description" />
          </div>
          <div v-if="isSubmit == false">
            <button class="button button-check  px-4 btn-block mt-4 animate__animated animate__pulse" @click.prevent="
                  postData(
                    User[0].subject,
                    User[0].email,
                    User[0].description,
                    User[0].phone
                  )
                ">
              {{ $t("contactModal.sendButton") }}
              <font-awesome-icon size="1x" :icon="['fas', 'paper-plane']" />
            </button>
          </div>

          <!-- Loader -->
          <div class=" loader text-center pt-3 animate__animated animate__fadeIn" v-if="isSubmit == true">
            <div class="spinner-border  " role="status">
              <span class="sr-only">Loading...</span>
            </div>
          </div>
        </form>
      </div>
    </div>
</div>


       <!--end of second form-->
    
</div>
</template>

<script>
import {
  baseUrl
} from "../../global.js";
export default {
  props: ["modalSubject", "title"],

  data() {
    return {
      isInValidSubject: false,
      isInValidEmail: false,
      isInValidDescription: false,
      isInValidPhone: false,
      isSubmit: false,
      status: false,
      phonePlaceHolder: this.$t("contactModal.placeHolderPhone"),
      messagePlaceHolder: this.$t("contactModal.placeHolderMessage"),
      emailPlaceholder: this.$t("contactModal.placeHolderEmail"),

      User: [{
        email: "",
        subject: this.modalSubject,
        description: "",
        phone: "",
      }, ],
    };
  },
  methods: {
    goHome: function () {
      this.$router.push({
        path: "/"
      });
    },
    postData: function (subject, email, description, phone) {
      this.isSubmit = true;
      console.log(email, "");
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
      if (re.test(email.trim())) {
        this.isInValidEmail = false;
        if (subject == "") {
          this.isInValidSubject = true;
          this.isSubmit = false;
        } else {
          if (phone == "" || phone.length < 9 || phone.length > 9) {
            this.isInValidPhone = true;
            this.isSubmit = false;
          } else {
            this.isInValidPhone = false;
            if (description == "") {
              this.isInValidDescription = true;
              this.isSubmit = false;
            } else {
              this.isInValidDescription = false;
              console.log(description);
              let result = {
                email: email,
                subject: subject,
                message: description,
                phone: phone,
              };

              this.$http
                .post(`${baseUrl}/user/message`, result)
                .then((response) => {
                  return response.json();
                })
                .then((data) => {
                  if (data == true) {
                    //alert("you will be contacted shortly");
                    this.$toast.success("You will be contacted shortly", {
                      position: "top",
                      duration: "3000",
                    });

                    this.isSubmit = false;
                    this.$emit("close");
                  }
                });
              console.log(result, "fffds");
            }
          }
          this.isInValidEmail = false;
        }
      } else {
        this.isSubmit = false;
        this.isInValidEmail = true;
      }
    },
    //end of the validation and sending of responds
  },
};
</script>

<style scoped>

#content {
  
  min-height: 400px;
}


/*media query*/

@media (min-width: 240px) {

#content .second-col{
  display: unset;
}
 #content  {
    overflow-y: auto;
    overflow-x: hidden;
  max-height: 9px;
font-family: "Montserrat";
}
#content input{
  font-size: 10px;
}
#content h3{
  font-size: 19px;
}
#content .first-col{
   padding: 32px;
   display: none;
}
#content .second-col{
  padding: 25px;
}
#content label{
  font-size: 12px;
}
#content small{
   font-size: 60%;
    font-weight: 400;
}
 
 #content .input-group-text {
    display: flex;
    align-items: center;
    padding: .375rem .75rem;
    margin-bottom: 0;
    font-size: 10px;
    font-weight: 400;
    line-height: 0.5;
    color: #495057;
    text-align: center;
    white-space: nowrap;
    background-color: #e9ecef;
    border: 1px solid #ced4da;
    border-radius: .25rem;
}
#content .button {
  border: 2px solid #1a9e8e;
  background-color: #1a9e8e;
  color: white;
  padding: 10px 20px;
  font-size: 8px;
  cursor: pointer;
  font-family: "Montserrat";
  margin-bottom: 73px;
}
#content textarea{
  font-size: 10px;
}

}

@media (min-width: 280px) {
    #content  {
    overflow-y:unset;
  max-height: 9px;
font-family: "Montserrat";
}
#content input{
  font-size: 11px;
}
#content h3{
  font-size: 19px;
}
#content .first-col{
   padding: 32px;
}
#content label{
  font-size: 12px;
}
#content small{
   font-size: 60%;
    font-weight: 400;
}
#content textarea{
  font-size: 12px;
}
 
 #content .input-group-text {
    display: flex;
    align-items: center;
    padding: .375rem .75rem;
    margin-bottom: 0;
    font-size: 12px;
    font-weight: 400;
    line-height: 0.5;
    color: #495057;
    text-align: center;
    white-space: nowrap;
    background-color: #e9ecef;
    border: 1px solid #ced4da;
    border-radius: .25rem;
}
#content .button {
  border: 2px solid #1a9e8e;
  background-color: #1a9e8e;
  color: white;
  padding: 10px 20px;
  font-size: 15px;
  cursor: pointer;
  font-family: "Montserrat";
  margin-bottom: -20px;
}
  
   
  
}
@media (min-width: 320px) {
     #content  {
    overflow-y:unset;
  max-height: 9px;
font-family: "Montserrat";
}
}

@media (min-width: 360px) {
   #content .second-col{
  padding: 50px;
}
  #content  {
    overflow-y:hidden;
  min-height: 559px;
font-family: "Montserrat";
}
#content input{
  font-size: 12px;
}
#content h3{
  font-size: 19px;
}
#content .first-col{
   padding: 32px;
}
#content label{
  font-size: 16px;
}
#content small{
   font-size: 11px;
    font-weight: 400;
}
 
 #content .input-group-text {
    display: flex;
    align-items: center;
    padding: .375rem .75rem;
    margin-bottom: 0;
    font-size: 11px;
    font-weight: 400;
    line-height: 0.5;
    color: #495057;
    text-align: center;
    white-space: nowrap;
    background-color: #e9ecef;
    border: 1px solid #ced4da;
    border-radius: .25rem;
}
#content .button {
  border: 2px solid #1a9e8e;
  background-color: #1a9e8e;
  color: white;
  padding: 10px 20px;
  font-size: 15px;
  cursor: pointer;
  font-family: "Montserrat";
  margin-bottom: 0px;
}
  
  
}
@media (min-width: 375px) {
  #content h3{
  font-size: 24px;
  
}
#content label{
  font-size: 18px;
}
@media (min-width: 411px) {
  
}

@media (min-width: 450px) {
 
}

@media (min-width: 480px) {
  
}

@media (min-width: 600px) {
   #content  {
    overflow-y:hidden;
  min-height: 688px;
font-family: "Montserrat";
}
#content textarea{
  font-size: 12px;
}
#content input{
  font-size: 12px;
}
#content h3{
  font-size: 34px;
}
#content .first-col{
   padding: 32px;
   display: none;
}
#content label{
  font-size: 14px;
}
#content small{
   font-size: 80%;
    font-weight: 400;
}
 
 #content .input-group-text {
    display: flex;
    align-items: center;
    padding: .375rem .75rem;
    margin-bottom: 0;
    font-size: 11px;
    font-weight: 400;
    line-height: 0.5;
    color: #495057;
    text-align: center;
    white-space: nowrap;
    background-color: #e9ecef;
    border: 1px solid #ced4da;
    border-radius: .25rem;
}
#content .button {
  border: 2px solid #1a9e8e;
  background-color: #1a9e8e;
  color: white;
  padding: 10px 20px;
  font-size: 15px;
  cursor: pointer;
  font-family: "Montserrat";
  margin-bottom: 0px;
}
} 
}

@media (min-width: 640px) {
  
   #content  {
    overflow-y:auto;
  min-height: 300px;
font-family: "Montserrat";}
#content .first-col{
  display: none;
}
#content .second-item{
  padding: 30px;
}
#content h3{
  font-size: 18px;
}
  
}
@media (min-width: 768px) {
   #content  {
    overflow-y:hidden;
  min-height: 536px;
font-family: "Montserrat";
}
}
@media (min-width: 800px) {
   #content {
     overflow-y:hidden;
  min-height: 690px;
 
}
#content .second-item{
   padding: 20px;
}
#content h3{
  font-size: 35px;
}
#content textarea{
  font-size: 20px;
}
#content input{
  font-size: 20px;
}
#content h3{
  font-size: 34px;
}
#content .first-col{
   padding: 32px;
   display: none;
}
#content label{
  font-size: 24px;
}
#content small{
   font-size: 80%;
    font-weight: 400;
}
#content.input-group-text {
    display: flex;
    align-items: center;
    padding: .375rem .75rem;
    margin-bottom: 0;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    text-align: center;
    white-space: nowrap;
    background-color: #e9ecef;
    border: 1px solid #ced4da;
    border-radius: .25rem;
}
#content .button {
  border: 2px solid #1a9e8e;
  background-color: #1a9e8e;
  color: white;
  padding: 10px 20px;
  font-size: 23px;
  cursor: pointer;
  font-family: "Montserrat";
}
  
}
@media (min-width: 1024px) {
   #content .first-col{
    display: none;
  }
  #content .second-item{
    padding: 50px;
  }
  #content label{
  font-size: 16px;
}
#content textarea{
  font-size: 14px;
}
#content h3{
  font-size: 25px;
}
#content input{
  font-size: 12px;
  height: 40px;
}
#content small{
   font-size: 25px;
    font-weight: 400;
    padding: 30px;
}
  #content .checks{
    width: 50px;
    height: 30px;
  }
  
   #content {
     overflow-y:hidden;
  min-height: 600px;
}
#content .button {
  border: 2px solid #1a9e8e;
  background-color: #1a9e8e;
  color: white;
  padding: 10px 20px;
  font-size: 25px;
  cursor: pointer;
  font-family: "Montserrat";
}
 
}
@media (min-width: 1028px) {
  #content .first-col{
    display: flex;
  }
   #content .second-col{
    display: none;
  }
  #content h3{
  font-size: 26px;
}
#content input{
      font-size: 17px;
    height: 47px;
}
  #content label{
  font-size: 21px;
}
#content small{
          font-size: 19px;
    font-weight: 400;
    padding: 20px;
}
  #content .checks{
       width: 42px;
    height: 20px;
  }
  
   #content {
     overflow-y:hidden;
  min-height: 651px;
}
#content .button {
  border: 2px solid #1a9e8e;
  background-color: #1a9e8e;
  color: white;
  padding: 10px 20px;
  font-size: 21px;
  cursor: pointer;
  font-family: "Montserrat";
}


}

@media (min-width: 1440px) {
 
}



/*end of media*/


#content .image {
  height: 100%;
  background-image: url("../../assets/img/contactBg.jpg");
  background-size: cover;
}

#content .button:hover {
  border: 2px solid #f38016;
  background-color: #f38016;
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  font-family: "Montserrat";
}
</style>
