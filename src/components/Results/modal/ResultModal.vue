
<template>
  <div class="" id="content">
    <div class="row ontent-body">
      <div class="col-md-6 first-col">
        <h3 class="text-center pb-3 font-weight-bold animate__fadeIn">
          Send your app info .
        </h3>

        <!-- form-->
        <div class="form animate__animated animate__fadeIn">
          <form>
            <div class="form-group">
              <label> {{ $t("EvaluateModal.email") }}</label>
              <input
                type="email"
                class="form-control text-dark"
                :class="{ 'is-invalid': isEmailInvalid }"
                :placeholder="emailPlaceholder"
                v-model="User[0].email"
                id="email"
                name="email"
              />
            </div>
            <div class="form-group">
              <label> {{ $t("EvaluateModal.name") }}</label>
              <input
                type="text"
                class="form-control text-dark"
                :class="{ 'is-invalid': isInValidName }"
                :placeholder="namePlaceHolder"
                v-model="User[0].name"
                id="name"
                name="name"
                required
                aria-required="true"
              />
            </div>

            <label> {{ $t("EvaluateModal.phone") }}</label>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text tel" id="basic-addon1">+237</span>
              </div>
              <input
                type="text"
                class="form-control text-dark "
                :class="{ 'is-invalid': isInValidPhone } "
                :placeholder="phonePlaceHolder"
                aria-describedby="basic-addon1"
                v-model="User[0].phone"
                id="phone"
                name="phone"
              />
            </div>
            <div class="form-group form-check check">
              <input
                v-model="isChecked"
                type="checkbox"
                class="form-check-input checks"
                id="exampleCheck1"
                @change="checkit"
              />
              <span><small class="form-check-label text-muted" for="exampleCheck1">{{
                $t("EvaluateModal.result")
              }}</small></span>
            </div>
            <button
              class="button button-check  px-4 btn-block  animate__animated animate__pulse"
              v-if="isSubmit == false"
              @click.prevent="
                postData(User[0].name, User[0].email, User[0].phone)
              "
            >
              {{ $t("EvaluateModal.sendButton") }}
              <font-awesome-icon size="1x" :icon="['fas', 'paper-plane']" />
            </button>
            <!-- Loader -->
            <div class=" loader text-center pt-3" v-if="isSubmit == true">
              <div class="spinner-border  " role="status">
                <span class="sr-only">Loading...</span>
              </div>
            </div>
          </form>
        </div>
      
        
      </div>
  <!-- seconf form-->
      <div class="col-md-6 ">
        <!-- image -->
        <div
          class="image"
          style="{ backgroundImage: url('../../../assets/img/bgresult.jpg')}"
        ></div>
      </div>
    </div>
    <div class="row">

    <div class="col-md-12 second-col">
        <h3 class="text-center pb-3 font-weight-bold animate__fadeIn">
          Send your app info .
        </h3>

        <!-- form-->
        <div class="form animate__animated animate__fadeIn">
          <form>
            <div class="form-group">
              <label> {{ $t("EvaluateModal.email") }}</label>
              <input
                type="email"
                class="form-control text-dark"
                :class="{ 'is-invalid': isEmailInvalid }"
                :placeholder="emailPlaceholder"
                v-model="User[0].email"
                id="email"
                name="email"
              />
            </div>
            <div class="form-group">
              <label> {{ $t("EvaluateModal.name") }}</label>
              <input
                type="text"
                class="form-control text-dark"
                :class="{ 'is-invalid': isInValidName }"
                :placeholder="namePlaceHolder"
                v-model="User[0].name"
                id="name"
                name="name"
                required
                aria-required="true"
              />
            </div>

            <label> {{ $t("EvaluateModal.phone") }}</label>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text tel" id="basic-addon1">+237</span>
              </div>
              <input
                type="text"
                class="form-control text-dark "
                :class="{ 'is-invalid': isInValidPhone } "
                :placeholder="phonePlaceHolder"
                aria-describedby="basic-addon1"
                v-model="User[0].phone"
                id="phone"
                name="phone"
              />
            </div>
            <div class="form-group form-check ">
              <input
                v-model="isChecked"
                type="checkbox"
                class="form-check-input checks"
                id="exampleCheck1"
                @change="checkit"
              />
             <span> <small class="form-check-label text-muted" for="exampleCheck1">{{
                $t("EvaluateModal.result")
              }}</small></span>
            </div>
            <button
              class="button button-check  px-4 btn-block  animate__animated animate__pulse"
              v-if="isSubmit == false"
              @click.prevent="
                postData(User[0].name, User[0].email, User[0].phone)
              "
            >
              {{ $t("EvaluateModal.sendButton") }}
              <font-awesome-icon size="1x" :icon="['fas', 'paper-plane']" />
            </button>
            <!-- Loader -->
            <div class=" loader text-center pt-3" v-if="isSubmit == true">
              <div class="spinner-border  " role="status">
                <span class="sr-only">Loading...</span>
              </div>
            </div>
          </form>
        </div>
        <!-- seconf form-->
        
      </div>
</div>
  </div>
</template>

<script>
import bgresult from "../../../assets/img/bgresult.jpg";
import { baseUrl } from "../../../global.js";
export default {
  data() {
    return {
      isInValidPhone: false,
      isInValidName: false,
      isSubmit: false,
      bgresult,
      isLoading: false,
      isEmailInvalid: false,
      status: false,
      isChecked: false,
      phonePlaceHolder: this.$t("EvaluateModal.placeHolderPhone"),
      namePlaceHolder: this.$t("EvaluateModal.placeHolderName"),
      emailPlaceholder: this.$t("EvaluateModal.placeHolderEmail"),
      isEnglishLanguage:false,
      isFrenchLanguage:false,
      User: [
        {
          name: "",
          email: "",
          phone: "",
        },
      ],
      dataTables: [],
      errors: [],
      isInvalid: false,
      goodRequest: false,
    };
  },
  methods: {
    checkit() {
      console.log("this is the status of the checkBox :" + this.isChecked);
    },
    goHome: function() {
      this.$router.push({
        path: "/",
      });
    },
    postData: function(name, email, phone) {
      this.isSubmit = true;
      console.log(email, "");
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
      if (re.test(email.trim())) {
        this.isEmailInvalid = false;
        if (name == "") {
          this.isInValidName = true;
          this.isSubmit = false;
        } else {
          if (phone == "" || phone.length < 9 || phone.length > 9) {
            this.isInValidPhone = true;
            this.isSubmit = false;
          } else {
            this.isInValidPhone = false;
            phone = "237" + phone;
            this.dataTables = this.$ls.get("response");
            let result = {
              sector: this.$ls.get("sectorName"),
              platform: this.$ls.get("platformName"),
              price: this.$ls.get("totalPrice"),
              email: email,
              name: name,
              phone: phone,
              english: this.isEnglishLanguage,
              french: this.isFrenchLanguage,
              sendtoemailt: this.isChecked,
              response: JSON.parse(this.$ls.get("response")),
            };

            this.$http
              .post(`${baseUrl}/user/results`, result)
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
                  this.$router.push({
                    path: "/thankYou",
                    query: { isCheck: this.isChecked },
                
                  });
                  this.$emit("close");
                }
              });
            console.log(result, "fffds");
          }
          this.isInValidName = false;
        }
      } else {
        this.isSubmit = false;
        this.isEmailInvalid = true;
      }
    },
    //end of the validation and sending of responds
  },
  created() {
    var actualLanguage = this.$ls.get("language");
    this.language = actualLanguage;
    if (actualLanguage =="french") {
        this.isFrenchLanguage = true;
         this.isEnglishLanguage=false;
    } else {
      this.isEnglishLanguage = true;
      this.isFrenchLanguage=false;
    }
    console.log(actualLanguage);
    this.$i18n.locale = actualLanguage;
    console.log("this is the status of the checkBox :" + this.isChecked);
  },
};
</script>

<style scoped>


#content .image {
  height: 105%;
  background-image: url("../../../assets/img/bgresult.jpg");
  background-size: cover;
}
@media (min-width: 240px) {
  #content  {
    overflow-y: auto;
    overflow-x: hidden;
  max-height: 250px;
font-family: "Montserrat";
}
#content input{
  font-size: 10px;
}
#content h3{
  font-size: 13px;
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
  font-size: 8px;
  cursor: pointer;
  font-family: "Montserrat";
  margin-bottom: 73px;
}
}

@media (min-width: 280px) {
   #content  {
    overflow-y:unset;
  max-height: unset;
font-family: "Montserrat";
}
#content h3{
  font-size: 16px;
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
  margin-bottom: 0px;
}
  
}

@media (min-width: 320px) {
  #content .second-col{
  padding: 33px;
}
  #content  {
    overflow-y:hidden;
  min-height: 440px;
font-family: "Montserrat";
}
#content input{
  font-size: 10px;
}
#content h3{
  font-size: 15px;
}
#content .checks{
margin-top: 7px !important;
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
@media (min-width: 360px) {
  #content  {
    overflow-y:hidden;
  min-height: 492px;
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
   display: none;
}
#content label{
  font-size: 16px;
}
#content small{
   font-size: 73%;
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
  font-size: 15px;
  cursor: pointer;
  font-family: "Montserrat";
  margin-bottom: 0px;
}
  
}

@media (min-width: 375px) {
  #content h3{
  font-size: 17px;
  
}
 #content  {
    overflow-y:hidden;
  min-height: 433px;
font-family: "Montserrat";
}
#content label{
  font-size: 13px;
}
}

@media (min-width: 425px) {
  .checks{
    margin-top: 7px;
  }
  #content  {
    overflow-y:hidden;
  min-height: 412px;
font-family: "Montserrat";
}
}

@media (min-width: 450px) {
 
}

@media (min-width: 480px) {
  
}

@media (min-width: 600px) {
  #content  {
    overflow-y:hidden;
  min-height: 52px;
font-family: "Montserrat";
}
#content input{
  font-size: 12px;
}
#content h3{
  font-size: 20px;
}
#content .first-col{
   padding: 32px;
   display: none;
}
#content label{
  font-size: 15px;
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

@media (min-width: 640px) {
   #content  {
    overflow-y:auto;
  min-height: 300px;
font-family: "Montserrat";
}
 
}

@media (min-width: 768px) {
  #content  {
      overflow-y: hidden;
    min-height: 457px;
    font-family: "Montserrat"
}
 
  
}

@media (min-width: 800px) {
  #content {
     overflow-y:hidden;
  min-height: 529px;
}
#content h3{
  font-size: 29px;
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
  font-size: 16px;
  cursor: pointer;
  font-family: "Montserrat";
}
  
}
@media (min-width: 1024px) {
  #content .first-col{
    display: none;
  }
  #content label{
  font-size: 15px;
}
#content .checks {
    margin-top: -8px !important;
}
#content h3{
  font-size: 20px;
}
#content input{
  font-size: 12px;
  height: 40px;
}
#content small{
   font-size: 16px;
    font-weight: 400;
    padding-top:30px;
}

  
   #content {
     overflow-y:hidden;
  min-height: 500px;
}
#content .button {
  border: 2px solid #1a9e8e;
  background-color: #1a9e8e;
  color: white;
  padding: 10px 20px;
  font-size: 17px;
  cursor: pointer;
  font-family: "Montserrat";
}
}

@media (min-width: 1028px) {
  #content .first-col{
    display: unset;
  }
   #content .second-col{
    display: none;
  }
  #content h3{
  font-size: 20px;
}
#content input{
      font-size: 12px;
    height: 43px;
}
  #content label{
  font-size: 17px;
}
#content small{
          font-size: 12px;
  }
  
   #content {
     overflow-y:hidden;
  min-height: 520px;
}
#content .button {
  border: 2px solid #1a9e8e;
  background-color: #1a9e8e;
  color: white;
  padding: 10px 20px;
  font-size: 17px;
  cursor: pointer;
  font-family: "Montserrat";
}
}

@media (min-width: 1440px) {
 #content .checks{
    margin-top: -9px !important;
}
   #content {
     overflow-y:hidden;
  min-height: 493px;
}
}



#content .button:hover {
  border: 2px solid #f38016;
  background-color: #f38016;
  color: white;

  cursor: pointer;
  font-family: "Montserrat";
}
</style>
