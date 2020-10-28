/** *this is for the Questions. {@link name} *@author Author/cho brandone
*@dateAug 14/10/2020 *Contibutors : Contributors name, **/
<template>
  <div id="content">
    <!-- Header section-->
    <div
      class="d-flex justify-content-between  pt-3 px-5 text-center my-auto mx-auto  text-center head"
    >
      <!-- Button -->

      <button
        class="button   animate__animated animate__bounceIn"
        @click="goBack"
      >
        <font-awesome-icon size="1x" :icon="['fas', 'chevron-left']" />
        {{ $t("platformmessage.sectorButton") }}
      </button>
    </div>
    <hr />
    <!-- choice section-->
    <div
      class="container  my-auto mx-auto text-center pt-3 body animate__animated animate__fadeIn"
    >
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
          {{ $t("platformmessage.platformQuestion") }}
        </h1>
        <!-- choices-->
        <div class="row pb-5 ">
          <div
            class="  item animate__animated animate__rubberBand text-center pt-5 pb-5"
            v-for="platform in platforms"
             :class="{
              'col-md-4': platforms.length <= 3,
              'col-md-3': platforms.length > 3,
            }"
            :key="platform._id"
            @click="
              gotoQuestions(platform._id, platform.name, platform.base_price)
            "
          >
            <div v-html="platform.image" :class="{ 'fa fa-7x': true }"></div>
            <h4 class="title mt-4">{{ platform.name }}</h4>
          </div>
        </div>
        <h5
          class="text-dark font-weight-bold mt-2 text-center animate__animated animate__fadeIn"
        >
          {{ $t("platformmessage.platformContact") }}
          <a class="link" @click.prevent="showPopup">
            {{ $t("platformmessage.contactus") }}</a
          >
        </h5>
      </div>
    </div>

    <!-- footer section-->
    <app-footer class=" px-5 mt-2"></app-footer>
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
      platforms: [],
      isLoading: true,
      language: "",
      modalSubject: "",
    };
  },
  mounted() {},
  created: function() {
    this.$confetti.stop();
    var actualLanguage = this.$ls.get("language");
    this.language = actualLanguage;
    console.log(actualLanguage);
    this.$i18n.locale = actualLanguage;
    let id = this.$route.params.id;
    this.$http
      .get(`${baseUrl}/user/platforms/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        if (data.message == false) {
          console.log("tag", "");
        } else {
          this.platforms = data;
          this.isLoading = false;
        }
      });
  },
  components: {
    // "app-item": Item,
    "app-footer": Footer,
  },
  methods: {
    gotoQuestions: function(id, name, price) {
      this.$ls.set("platformName", name);
      this.$ls.set("platformBase_price", price);
      console.log("tag", id);
      this.$router.push({
        path: `/question/${id}`,
        params: {
          id: id,
        },
        query: { locale: this.$ls.get("language") },
      });
    },
    nextQuestion: function() {},
    goBack: function() {
      this.$router.go(-1);
    },
    beforeClose(e) {
      console.log(e);
      this.$modal.hideAll();
    },
    showPopup: function() {
      if (this.language == "french") {
        this.modalSubject = "Je veux une Platform specifique";
      } else {
        this.modalSubject = "I want a specific Platform";
      }
      this.$modal.show(
        ContatModal,
        {
          modalSubject: this.modalSubject,
          title: "platform",
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
    min-height: 78vh !important;
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
  padding-top: 20px;
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
