
<template>
  <div id="content">
    <!-- Header section-->
    <div class=" pt-3 px-5 text-center my-auto mx-auto  text-center head">
      <!-- Button -->
      <button
        class="button   animate__animated animate__bounceIn "
        @click="goBack"
      >
        <font-awesome-icon size="1x" :icon="['fas', 'chevron-left']" />
        {{ $t("Qustionmessage.platformButton") }}
      </button>

      <!-- Number of Question -->
      <h3 class="pt-2 pages  animate__animated animate__bounceIn">
        {{ index + 1 }} / {{ questionLength + 1 }}
      </h3>
      <!-- Price-->
      <div class="animate__animated animate__headShake">
        <strong class="price">{{
          new Intl.NumberFormat().format(price)
        }}</strong
        ><small class="currency">XAF</small>
      </div>
    </div>
    <hr />
    <!-- choice section-->
    <div class="container my-auto mx-auto text-center pt-3 body">
      <!-- Loader -->
      <div class=" loader " v-if="isLoading">
        <div class="spinner-border  " role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>

      <!-- item-->
      <div class="element " v-if="!isLoading">
        <!-- Question-->
        <h1 class="question  animate__animated animate__pulse ">
          {{ activeQuestion.question }}
        </h1>
        <!-- choices-->
        <div class="row pb-5 ">
          <div
            class="  item animate__animated animate__rubberBand text-center pt-5 pb-5"
            :class="{
              'col-md-4': activeQuestion.answer.length <= 3,
              'col-md-3': activeQuestion.answer.length > 3,
            }"
            v-for="(item, index) in activeQuestion.answer"
            :key="item.id"
            @click="select(index)"
          >
            <div v-html="item.image" :class="{ 'fa fa-7x': true }"></div>
            <h4 class="title mt-4">{{ item.title }}</h4>
          </div>
        </div>
        <h5 class="text-dark font-weight-bold mt-2 text-center">
          {{ $t("Qustionmessage.questionContact") }}
          <a class="link" @click.prevent="showPopup">
            {{ $t("Qustionmessage.contactus") }}</a
          >
        </h5>
      </div>
    </div>

    <!-- footer section-->
    <app-footer class=" px-5 mt-5"></app-footer>
  </div>
</template>

<script>
import sectorbacground from "../../assets/img/sectorbg.png";
// import Item from "./Item.vue";
import Footer from "../footer/Footer";
import ContatModal from "../globalModal/ContactModal.vue";

import { baseUrl } from "../../global.js";

export default {
  data() {
    return {
      sectorbacground,
      index: 0,
      price: 0,
      questionLength: 0,
      questions: [],
      activeQuestion: [],
      priceArr: [],
      result: [],
      isLoading: true,
      language: "",
      modalSubject: "",
    };
  },
  components: {
    // "app-item": Item,
    "app-footer": Footer,
  },
  created: function() {
    this.$confetti.stop();
    var actualLanguage = this.$ls.get("language");
    this.language = actualLanguage;
    console.log(actualLanguage);
    this.$i18n.locale = actualLanguage;
    console.log(this.$ls.get("platformName"));
    this.price = parseInt(this.$ls.get("platformBase_price"));
    let id = this.$route.params.id;

    console.log(id, "dsdasds");
    this.$http
      .get(`${baseUrl}/user/questions/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        if (data.message == false) {
          console.log("tag", "");
        } else {
          if (this.language == "french") {
            data.forEach((element, index) => {
              console.log(element + " " + index);
              console.log(element);
              this.questions.push(element.answers.fr);
            });
          } else {
            data.forEach((element, index) => {
              console.log(element + " " + index);
              console.log(element);
              this.questions.push(element.answers.en);
            });
          }

          // this.questions = data.answers.en;
          console.log("this is the question bellow");
          this.activeQuestion = this.questions[this.index];
          this.questionLength = this.questions.length - 1;
          this.activeQuestion = this.questions[this.index];
          this.isLoading = false;
          console.log(this.questions);
        }
      });
  },
  methods: {
    select: function(position) {
      console.log("***********************",position);
      console.log(this.activeQuestion.question,"************** active question")
      console.log(this.result);
      this.price += parseInt(this.activeQuestion.answer[position].price);
      this.priceArr.push(parseInt(this.activeQuestion.answer[position].price));
      this.result[this.index] = {
        answer: this.activeQuestion.answer[position],
        question: this.activeQuestion.question,
      };
      if (this.index <= this.questionLength-1 ) {
        this.index += 1;
       this.activeQuestion = this.questions[this.index];
      } else {
        this.$ls.set("totalPrice", this.price);
        this.$ls.set("response", JSON.stringify(this.result));
        this.$router.push({
          path: `/result/`,
        });
      }
    },
    goBack: function() {
      console.log(this.priceArr, "one");
      if (this.index == 0) {
        this.$router.go(-1);
      } else {
        this.index -= 1;
        this.activeQuestion = this.questions[this.index];
        this.price = this.price - this.priceArr[this.priceArr.length - 1];
        this.priceArr.pop();
      }
    },
    beforeClose(e) {
      console.log(e);
      this.$modal.hideAll();
    },
    showPopup: function() {
      if (this.language == "french") {
        this.modalSubject = "j'ai une question specifique";
      } else {
        this.modalSubject = "I have a specific question";
      }
      this.$modal.show(
        ContatModal,
        {
          modalSubject: this.modalSubject,
        },
        {
          width: "75%",
          height: "auto",
        }
      );
    },
  },
};
</script>

<style scoped>
.link {
  cursor: pointer;
}

/**this is the my media */
.link {
  cursor: pointer;
}

@media (min-width: 240px) {
  #content .button {
    width: 100%;
  }

  /*attention*/
  #content .item {
    margin-right: 20px;
    margin-left: 20px;
  }

  #content .loader {
    margin-top: 190px;
  }
}

@media (min-width: 280px) {
  #content .button {
    width: 100%;
  }

  .loader {
    margin-top: 152px;
  }

  /*attention*/
  #content .item {
    margin-right: 20px;
    margin-left: 20px;
  }
}

@media (min-width: 320px) {
  #content .button {
    width: 100%;
  }
#content .question{
  font-size: 25px;
}
  #content .loader {
    margin-top: 190px;
  }

  /*attention*/
  #content .item {
    margin-right: 20px;
    margin-left: 20px;
  }

}

@media (min-width: 360px) {
  #content .button {
    width: 100%;
  }

  #content .loader {
    margin-top: 190px;
  }

  /*attention*/
  #content .item {
    margin-right: 20px;
    margin-left: 20px;
  }

  #content .pages {
    margin-top: 10px;
  }
}

@media (min-width: 375px) {
  #content .button {
    width: 100%;
  }

  .loader {
    margin-top: 249px;
  }
}

@media (min-width: 411px) {
  #content .button {
    width: 100%;
  }

  .loader {
    margin-top: 254px;
  }
}

@media (min-width: 450px) {
  #content .button {
    width: 100%;
  }

  .loader {
    margin-top: 180px;
  }
}

@media (min-width: 480px) {
  #content .button {
    width: 100%;
  }

  .loader {
    margin-top: 263px;
  }
}

@media (min-width: 600px) {
  .loader {
    margin-bottom: 126px;
    margin-top: 100px;
  }

  #content .body {
    min-height: 0vh !important;
  }

  #content .element {
    margin-top: 60px;
  }

  #content .question {
    margin-bottom: 50px;
  }
}

@media (min-width: 640px) {
  .loader {
    margin-top: 90px;
  }
}

@media (min-width: 768px) {
  .loader {
    margin-top: 348px;
  }

  img {
    vertical-align: middle;
    border-style: none;
    width: 216px;
  }

  p {
    text-align: center;
    font-size: 11px;
  }

  /*attention*/
  #content .item {
    margin-right: 0px !important;
    margin-left: 0px !important;
  }
}

@media (min-width: 800px) {
  #content .button {
    width: 100%;
  }

  .loader {
    margin-bottom: 126px;
    margin-top: 100px;
  }

  #content .body {
    min-height: 0vh !important;
  }

  /*attention*/
  #content .item {
    margin-right: 0px !important;
    margin-left: 0px !important;
  }
}

@media (min-width: 1028px) {
  #content .button {
    width: 20%;
  }

  .loader {
    margin-bottom: 126px;
    margin-top: 100px;
  }

  #content .body {
    min-height: 71vh !important;
  }

  #content .element {
    margin-top: 60px;
  }

  #content .question {
    margin-bottom: 50px;
  }

  /*attention*/
  #content .item {
    margin-right: 0px !important;
    margin-left: 0px !important;
  }

  #content .head {
    display: flex;
    justify-content: space-between;
  }
}

@media (min-width: 1440px) {
  #content .button {
    width: 10%;
      font-family: "Montserrat";

  }

  .loader {
    margin-top: 318px;
  }
}

/**this is the end of the media  */

.pages {
  color: #f38016;
  font-weight: bold;
  font-family: "Montserrat";
}

#content .head {
  min-height: 5vh;
}

#content .body {
  min-height: 75vh;
}

#content .body .question {
  font-family: "Montserrat" !important;
}

.price {
  color: #52898b;
  font-size: 35px;
  font-family: "Montserrat";
}

.currency {
  color: #1a9e8e;
  font-weight: bold;
}

.header-btn {
  background-color: #1a9e8e;
  font-size: 20px;
}

#content {
  background-image: url("../../assets/img/sectorbg.png");
  background-size: cover;
  min-height: 800px;
}

.content {
  font-family: "Montserrat";
}

#content .body {
  min-height: 70vh;
}

#content .body .question {
}

.item {
  cursor: pointer;
  font-family: "Montserrat" !important;
}

.button {
  border: 2px solid #1a9e8e;
  background-color: #1a9e8e;
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: transform 0.2s;
    font-family: "Montserrat" !important;

}

#content .button:hover {
  background-color: #f79623;
  border: 2px solid #f79623;
  transform: scale(1.1);
  /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
}

hr {
  background-color: #f79623;
  height: 1px;
}

.question {
  color: #52898b;
  font-weight: bold;
}

#content .item {
  transition: transform 0.2s;
  cursor: pointer;
}

#content .item:hover {
  background-color: #fde8d4;
  border: 2px solid #fff4eb;
  transition: all 500ms ease-in-out;
}
</style>
