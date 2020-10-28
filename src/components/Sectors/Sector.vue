<template>
  <div id="content">
    <!-- Header section-->
    <div
      class="d-flex justify-content-between  pt-3 px-5 text-center my-auto mx-auto  head"
    >
      <button
        class="button   animate__animated animate__bounceIn"
        @click="goHome"
      >
        <font-awesome-icon size="1x" :icon="['fas', 'home']" />
        {{ $t("sectormessage.homeButton") }}
      </button>

      <div></div>
    </div>
    <hr />
    <!-- choice section-->
    <div class="container  my-auto mx-auto text-center pt-3 body">
      <!-- Loader -->
      <div class=" loader " v-if="isLoading">
        <div class="spinner-border  " role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>

      <!-- item-->
      <!-- Question-->
      <div class="element " v-if="!isLoading">
        <h1
          class="question animate__animated animate__pulse element text-center"
        >
          {{ $t("sectormessage.sectorQuestion") }}
        </h1>

        <div class="row pb-5 ">
          <div
            class=" item animate__animated animate__rubberBand text-center pt-5 pb-5"
            v-for="data in activeData"
            :key="data._id"
            :class="{
              'col-md-4': activeData.length <= 3,
              'col-md-3': activeData.length > 3,
            }"
            @click="gotoPlatform(data._id, data.title)"
          >
            <div v-html="data.image_url" :class="{ 'fa fa-7x': true }"></div>
            <h4 class="title mt-4">{{ data.title }}</h4>
          </div>
        </div>
        <h5
          class="text-dark font-weight-bold mt-2 text-center animate__animated animate__fadeIn"
        >
          {{ $t("sectormessage.sectorContact") }}
          <a class="link" @click.prevent="showPopup">
            {{ $t("sectormessage.contactus") }}</a
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
import { baseUrl } from "../../global.js";
import ContatModal from "../globalModal/ContactModal.vue";

export default {
  data() {
    return {
      sectorbacground,
      isCliked: false,
      question: "",
      isLoading: true,
      activeData: [],
      language: "",
      modalSubject: "",
    };
  },
  components: {
    "app-footer": Footer,
  },
  methods: {
    gotoPlatform: function(id, name) {
      this.$ls.set("sectorName", name);
      console.log("tag", id);
      this.$router.push({
        path: `/platform/${id}`,
        params: {
          id: id,
        },
        query: { locale: this.$ls.get("language") },
      });
    },
    goHome: function() {
      this.$router.push({
        path: "/",
      });
    },
    beforeClose(e) {
      console.log(e);
      this.$modal.hideAll();
    },
    showPopup: function() {
      if (this.$route.query.locale == "french") {
        this.modalSubject = "Je veux un secteur specifique";
        this.$ls.set("language", "french");
      } else {
        this.modalSubject = "I want a specific sector";
        this.$ls.set("language", "english");
      }
      this.$modal.show(
        ContatModal,
        {
          modalSubject: this.modalSubject,
          title: "sector",
        },
        {
          width: "75%",
          height: "auto",
        }
      );
    },
  },

  created() {
    this.$confetti.stop();
    var actualLanguage = this.$ls.get("language");
    this.language = actualLanguage;
    console.log(actualLanguage);
    this.$i18n.locale = actualLanguage;
    console.log(this.$route.query.locale)
    this.$http
      .get(`${baseUrl}/user/sectors`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        this.activeData = data;
        this.isLoading = false;
      });
  },
};
</script>

<style scoped>
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
  #content h5 {
    font-size: 10px;
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
  #content h5 {
    font-size: 11px;
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
  #content h5 {
    font-size: 14px;
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
  #content h5 {
    font-size: 17px;
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
  #content h5 {
    font-size: 14px;
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
  #content h5 {
    font-size: 17px;
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

/* end of my media query  */

.title {
  font-size: 25px;
}

#content {
  background-image: url("../../assets/img/sectorbg.png");
  background-size: cover;
  font-family: "Montserrat";
}

#content .head {
  min-height: 5vh;
}

#content .body {
  min-height: 70vh;
}

#content .button {
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

.header-btn {
  background-color: #1a9e8e;
  font-size: 20px;
}

hr {
  background-color: #f38016;
  height: 0.2px;
}

.question {
  color: #52898b;
  font-weight: bold;
}

#content .item {
  transition: transform 0.2s;

  /*border: 2px solid white;*/
  cursor: pointer;
}

#content .item:hover {
  background-color: #ffdbb9;
  border: 2px solid #fff4eb;
  transition: all 250ms ease-in-out;
}
</style>
