
<template>
  <div id="content">
    <!-- title-->
    <div class="container my-auto text-center ">
      <!-- Result-->
      <h1
        class="result_text py-2 font-weight-bold animate__animated animate__fadeIn"
      >
        {{ $t("Resultmessage.resultComment") }}
      </h1>
      <!-- Price-->
      <h1 class="price py-2 animate__animated animate__heartBeat">
        {{ new Intl.NumberFormat().format(this.price) }} XAF
      </h1>
      <!-- thank-->
      <h5 class="text-dark font-weight-bold">
        {{ $t("Resultmessage.thanksComment") }}
      </h5>
      <!-- <h5 class="text-dark font-weight-bold mt-3 link" > {{ $t("convertLink.curency") }} <span><a href="" @click.prevent="currencyConverter">{{ $t("convertLink.link") }}</a></span> </h5> -->
      <div class="text-center text-center mid-button">
        <!-- Buttons-->
        <button class="button button-check success px-4 " @click="showPopup">
          <font-awesome-icon size="1x" :icon="['fas', 'terminal']" />{{
            $t("Resultmessage.buildButton")
          }}
        </button>
        <div class="space ml-3"></div>
        <button class="button success px-4 " @click="goEvaluate">
          <font-awesome-icon size="1x" :icon="['fas', 'redo']" class="" />
          {{ $t("Resultmessage.homeButton") }}
        </button>
        <div></div>
      </div>
      <!-- footer section-->

      <!-- logo-->
      <div class="foot row">
        <div class="col-sm-4 col-md-4 ">
          <img
            src="../../assets/img/logo2.png"
            alt="logo"
            width="200px"
            class="logo animate__animated animate__fadeIn"
          />
        </div>
        <!--social icon-->
        <div class="col-sm-4 col-md-4 social-icon animate__animated animate__fadeIn ">
          <h5 class="font-italic animate__animated animate__fadeIn">
            {{ $t("Resultmessage.shareComment") }}
          </h5>
          <a
            href="https://www.facebook.com/sevenadvancedacademy"
            target="_blank"
          >
            <font-awesome-icon
              size="2x"
              :icon="['fab', 'facebook']"
              class="item"
            />
          </a>
          <a
            href="https://twitter.com/sevenacademy7?lang=en"
            target="_blank"
          >
            <font-awesome-icon
              size="2x"
              :icon="['fab', 'twitter']"
              class="mx-3 item"
              href="https://twitter.com/sevenacademy7?lang=en"
              target="_blank"
            />
          </a>
          <a
          href="https://www.linkedin.com/company/seven-advanced-academy"
            target="_blank"
          >
            <font-awesome-icon
              size="2x"
              :icon="['fab', 'linkedin']"
              class="item"
              target="_blank"
            />
          </a>
        </div>
        <!-- copyright-->
        <div class="col-sm-4 col-md-4 ">
          <p class="foot-text animate__animated animate__fadeIn">
            &copy; {{ new Date().getFullYear() }} SevenGps |
            {{ $t("footer.copywrite") }}
            Cost
          </p>
        </div>
      </div>
     
         <!--elements de bas de page , convertiseur et telechargement-->
   
    </div>

 
  </div>
</template>

<script>
import sectorbacground from "../../assets/img/sectorbg.png";
//import { baseUrl } from "../../global.js";
import ResultModal from "./modal/ResultModal.vue";
import CurrencyModal from "./modal/ConvertModal.vue";
import XLSX from "xlsx";

export default {
  data() {
    return {
      sectorbacground,
      price: 0,
      Datas: {
        // We will make a Workbook contains 2 Worksheets
        responses: [],
      },
    };
  },
  created() {
    this.$confetti.stop();
    var actualLanguage = this.$ls.get("language");
    this.language = actualLanguage;
    console.log(actualLanguage);
    this.$i18n.locale = actualLanguage;
    this.price = this.$ls.get("totalPrice");
    console.log(this.$ls.get("response"));
    var responses = JSON.parse(this.$ls.get("response"));
    if (actualLanguage == "french") {
      for (let index = 0; index < responses.length; index++) {
        this.Datas.responses.push({
          QUESTIONS: responses[index].question,
          REPONSES: responses[index].answer.title,
          PRIX: responses[index].answer.price + " XAF ",
          SECTEURS: this.$ls.get("sectorName"),
          PLATFORM: this.$ls.get("platformName"),
        });
      }
    } else {
      for (let index = 0; index < responses.length; index++) {
        this.Datas.responses.push({
          QUESTIONS: responses[index].question,
          ANSWERS: responses[index].answer.title,
          PRICES: responses[index].answer.price + " XAF ",
          SECTORS: this.$ls.get("sectorName"),
          PLATFORMS: this.$ls.get("platformName"),
        });
      }
    }
  },
  methods: {
    onexport() {
      // On Click Excel download button
      console.log(this.emailXls);

      // export json to Worksheet of Excel
      // only array possible

      var responseWS = XLSX.utils.json_to_sheet(this.Datas.responses);
      // A workbook is the name given to an Excel file
      var wb = XLSX.utils.book_new(); // make Workbook of Excel
      // add Worksheet to Workbook
      // Workbook contains one or more worksheets
      XLSX.utils.book_append_sheet(wb, responseWS, "AppEvaluation"); // sheetAName is name of Worksheet
      // export Excel file
      XLSX.writeFile(wb, "AppEvaluation.xlsx"); // name of the file is 'book.xlsx'
    },
    beforeClose(e) {
      console.log(e);
      this.$modal.hideAll();
    },
    currencyConverter: function() {
      this.$modal.show(
        CurrencyModal,
        {
          text: "Hello",
          price: this.price,
        },
        {
          width: "70%",
          height: "auto",
        }
      );
    },
    showPopup: function() {
      this.$modal.show(
        ResultModal,
        {
          text: "Hello",
        },
        {
          width: "70%",
          height: "auto",
        }
      );
    },

    goEvaluate: function() {
      this.$router.push({
        path: "/start",
      });
    },
  },
};
</script>

<style scoped>
/* this is my media */
@media (min-width: 240px) {
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
  #content .icons {
    display: flex;
    justify-content: center;
  }
  #content .icons ul {
    display: flex;
    justify-content: center;
    margin-right: -13px;
  }
  #content .icons ul > li > a[data-v-ad8508b4] {
    display: block;
    color: white;
    background-color: #1a9e8e;
    border-radius: 100%;
    font-size: 1.5rem;
    line-height: 3rem;
    height: 3rem;
    width: 3rem;
    margin: 10px;
  }
  .link{
  font-size: 12px;
}
}

@media (min-width: 280px) {
  #content .result_text {
    color: #f38016;
    font-size: 34px;
    font-weight: bold;
    font-family: "Montserrat";
  }
  .link{
  font-size: 10px;
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
    min-width: 236px;
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
  }

  #content .social-icon h5 {
    font-size: 14px;
    padding-top: 10px;
    padding-bottom: 10px;
  }

  #content .foot-text {
    font-size: 14px;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  #content .icons ul {
    display: flex;
    justify-content: center;
    margin-right: 9px;
  }
}

@media (min-width: 320px) {
  #content .icons ul {
    display: flex;
    justify-content: center;
    margin-right: 26px;
  }
  #content .icons ul > li > a[data-v-ad8508b4] {
    display: block;
    color: white;
    background-color: #1a9e8e;
    border-radius: 100%;
    font-size: 1.5rem;
    line-height: 3rem;
    height: 3rem;
    width: 3rem;
    margin: 10px;
  }
}
@media (min-width: 360px) {
  #content .icons ul {
    display: flex;
    justify-content: center;
    margin-right: 45px;
  }
  .link{
  font-size: 12px;
}
}
@media (min-width: 375px) {
  #content .icons ul {
    display: flex;
    justify-content: center;
    margin-right: 51px;
  }
}
@media (min-width: 384px) {
  #content .icons ul {
    display: flex;
    justify-content: center;
    margin-right: 62px;
  }
}
@media (min-width: 411px) {
  #content .icons ul {
    display: flex;
    justify-content: center;
    margin-right: 70px;
  }
}
@media (min-width: 412px) {
  #content .icons ul {
    display: flex;
    justify-content: center;
    margin-right: 71px;
  }
}
@media (min-width: 414px) {
  #content .icons ul {
    display: flex;
    justify-content: center;
    margin-right: 76px  ;
  }
}
@media (min-width: 450px) {
  #content .icons ul {
    display: flex;
    justify-content: center;
    margin-right: 93px;
  }
}
@media (min-width: 480px) {
  #content .icons ul {
    display: flex;
    justify-content: center;
    margin-right: 90px;
  }
  #content .icons ul > li > a[data-v-ad8508b4] {
    display: block;
    color: white;
    background-color: #1a9e8e;
    border-radius: 100%;
    font-size: 2rem;
    line-height: 4rem;
    height: 4rem;
    width: 4rem;
    margin: 10px;
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
    width: 167px;
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
  #content .icons {
    display: flex;
    justify-content: right;
  }
  #content .icons ul {
    display: flex;
    justify-content: center;
    margin-right: 121px;
    margin-top: 17px;
  }
    
  }

@media (min-width: 640px){
#content .icons ul{
    display: flex;
    justify-content: center;
    margin-right: 121px;
    margin-top: 17px;
  }
}

@media (min-width: 768px) {
  #content .icons {
    display: flex;
    justify-content: right;
  }
  #content .icons ul {
       display: flex;
    justify-content: center;
    margin-right: 210px;
    margin-top: 24px;
  }
  #content .icons ul > li > a[data-v-ad8508b4] {
    display: block;
    color: white;
    background-color: #1a9e8e;
    border-radius: 100%;
    font-size: 2rem;
    line-height: 4rem;
    height: 4rem;
    width: 4rem;
    margin: 10px;
  }
}
@media (min-width: 800px) {
  .logo[data-v-ad8508b4] {
    width: 206px;
  }
  #content .icons {
    display: flex;
    justify-content: right;
  }
  #content .icons ul {
        display: flex;
    justify-content: center;
    margin-right: 211px;
    margin-top: 42px;
  }
}
@media (min-width: 1024px) {
  #content .icons {
    display: flex;
    justify-content: right;
  }
  #content .icons ul {
        display: flex;
    justify-content: center;
    margin-right: 331px;
    margin-top: 41px;
  }
}
@media (min-width: 1280px) {
  #content .icons {
    display: flex;
    justify-content: right;
  }
  #content .icons ul {
    display: inline-block;
    justify-content: center;
    margin-right: 0px;
    margin-top: 0px !important;
  }
}

@media (min-width: 1440px) {
  #content .icons {
    display: flex;
    justify-content: right;
  }
  #content .icons ul {
    display: inline-block;
    justify-content: center;
    margin-right: 0px;
    margin-top: -45px;
  }
  .link{
  font-size: 12px;
}

}

/*end of my media */
#content {
  background-image: url("../../assets/img/sectorbg.png");
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
  font-size: 12px;
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

@media screen and (max-width: 726px) {
  .footer img {
    display: none !important;
  }
}

/* test*/
#content {
  position: relative;
}

#content .icons ul > li > a {
  display: block;
  color: white;
  background-color: #1a9e8e;
  border-radius: 100%;
  font-size: 2rem;
  line-height: 4rem;
  height: 4rem;
  width: 4rem;
}

span a {
  color: #f79623;
}
</style>
