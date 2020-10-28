<template>
<div id="content">
  <!-- title-->
  <div class="container my-auto text-center animate__animated animate__fadeIn ">

    <!-- Space for Gif Icon-->
    <img src="../../assets/img/success.gif" class="success_image">
    <!-- thank-->
    <h1 class="text-dark font-weight-bold animate__animated animate__fadeIn"> {{ $t("thanks.thanksMessage") }}</h1>
    <h5 class="text-dark font-weight-bold" v-if="isCheck == true">
      Verify the email : NdemeYvan@gmail.com
    </h5>
    <div class="text-center  mid-button animate__animated animate__fadeIn">
      <button class="button success px-4 " @click="goEvaluate">
        <font-awesome-icon size="1x" :icon="['fas', 'redo']" class="" />
         {{ $t("Resultmessage.homeButton") }}
      </button>
      <div></div>
    </div>
    <!-- footer section-->

    <!-- logo-->
    <div class="  foot animate__animated animate__fadeIn">
      <div class="">
        <img src="../../assets/img/logo2.png" alt="logo" width="200px" class="logo" />
      </div>

      <div class="animate__animated animate__fadeIn">
        <p class="foot-text">
          Copyright &copy; SevenGps | {{ $t('footer.copywrite') }}
        </p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import {} from "../../assets/img/success.gif";
export default {
  data() {
    return {
      isCheck : this.$route.query.isCheck,
    }
  },
  methods: {
    goEvaluate: function () {
      
      this.$router.push({
        path: "/start"
      });

    },
  },
  created() {
   
    var actualLanguage = this.$ls.get("language");
    this.language = actualLanguage;
    console.log(actualLanguage)
    this.$i18n.locale = actualLanguage;
  
  },
  
};
</script>

<style scoped>
@media (min-width: 240px) {
  #content .result_text {
    color: #f38016;
    font-size: 35px;
    font-weight: bold;
    font-family: "Montserrat";
  }

  #content .success_image {
    width: 217px;
    height: 157px;
  }

  #content h5 {
    font-size: small;
  }

  #content .price {
    color: #f38016;
    font-size: 45px;
    font-weight: bold;
    font-family: "Montserrat";
  }

  #content .mid-button {
    margin-top: 75px;
  }

  #content .button {
    min-width: 210px;
    margin-bottom: 10px;
  }

  .foot {
    text-align: center;
    margin-top: 55px;
  }

  .logo {
    vertical-align: middle;
    border-style: none;
    /* margin-left: 2rem; */
    text-align: center;
  }

  .social-icon h5 {
    font-size: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
  }

  p {
    text-align: center;
    font-size: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
  }
}

@media (min-width: 280px) {
  #content .result_text {
    color: #f38016;
    font-size: 35px;
    font-weight: bold;
    font-family: "Montserrat";
  }

  #content .price {
    color: #f38016;
    font-size: 45px;
    font-weight: bold;
    font-family: "Montserrat";
  }

  #content .mid-button {
    margin-top: 75px;
  }

  #content .button {
    min-width: 220px;
    margin-bottom: 10px;
  }

  #content .foot {
    text-align: center;
    margin-top: 55px;
  }

  #content .logo {
    vertical-align: middle;
    border-style: none;
    /* margin-left: 2rem; */
    text-align: center;
    margin-bottom: 30px;
  }

  #content .social-icon {
    margin-bottom: 10px;
    min-width: 411px;

  }

  #content .social-icon h5 {
    font-size: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
  }

  #content .foot-text {
    font-size: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
  }

}

@media (min-width: 320px) {
  #content .success_image {
    width: 280px;
    height: 198px;

  }
}

@media (min-width: 600px) {
  #content .mid-button {
    display: flex;
    justify-content: center;
    text-align: center;
  }

  #content .result_text {
    color: #f38016;
    font-size: 45px;
    font-weight: bold;
    font-family: "Montserrat";
  }

  #content .price {
    color: #f38016;
    font-size: 68px;
    font-weight: bold;
    font-family: "Montserrat";
    margin-top: 30px;
  }

  #content .button {
    min-width: 220px;
    margin-bottom: 10px;
  }

  .foot {
    display: flex;
    flex-direction: row;
    text-align: center;
    margin-top: 55px;
    justify-content: space-between;
  }

  .logo {
    width: 153px;
  }

  .social-icon h5 {
    font-size: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
  }

  p {
    text-align: center;
    font-size: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
  }

}

#content {
  background-color: white;
  background-size: cover;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: "Montserrat", sans-serif;
}

h1 h5 h3 {
  font-family: "Montserrat";
}

#content .result_text {
  color: #52898b;
}

#content .footer {
  margin-top: 150px;
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

#content .item {
  color: #1a9e8e;
  cursor: pointer;
}

#content .item:hover {
  color: #f38016;
}

.add-platform {
  transition: transform 0.2s;
  background-color: #f79623;
  transition: transform 0.2s;
}

#content .button:hover {
  transition: transform 0.2s;
}

#content .button:hover {
  background-color: #f79623;
  border: 2px solid #f79623;
  transform: scale(1.1);
  /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
}

@media screen and (max-width: 726) {
  .foot-text {
    display: none;
  }

  .footer img {
    display: none !important;
  }

  #content .success_image {
    width: 350px;
    height: 250px;
  }
}

@media (min-width: 800px) {}
</style>
