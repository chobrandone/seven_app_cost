
<template>
  <header>
    <div>
      <div class="overlay"></div>
      <video
        playsinline="playsinline"
        autoplay="autoplay"
        muted="muted"
        loop="loop"
      >
        <source src="../../assets/mp4/bg.mp4" type="video/mp4" />
      </video>

      <div class="masthead">
        <div class="masthead-bg"></div>
        <div class="container h-100">
          <div class="row h-100">
            <div class="col-12 my-auto">
              <div class="masthead-content text-white  py-md-0">
                <div class="content">
                  <h1
                    class="mb-3 question pb-2 animate__animated animate__fadeIn"
                  >
                    {{ $t("homemessage.appName") }}
                  </h1>
                  <p class="mb-5 animate__animated animate__fadeIn">
                    {{ $t("homemessage.homeBody") }}
                  </p>
                  <button
                    class="button submitButton animate__animated animate__rubberBand fas fa-arrow-alt-right"
                    @click="start"
                  >
                   {{ $t("homemessage.homeButton") }} 
                  <i class="fas fa-long-arrow-alt-right">
                  </i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="logo">
          <img
            src="../../assets/img/logo.png"
            alt="logo"
            class="image_logo animate__animated animate__fadeIn"
          />
        </div>
         <h5 class="px-4 text-white font-weight-bold link text-center mt-3">
            {{ $t("languagetLink.language") }}
            <span
              ><a
                style="cursor:pointer"
                href=""
                @click.prevent="changeLanguage"
                >{{ $t("languagetLink.link") }}</a
              ></span
            >
          </h5>
          
          <div class="icon">
          
            <ul
              class="list-unstyled text-center mb-0 list-icon d-flex justify-content-around animate__animated animate__fadeIn"
            >
              <li class="list-unstyled-item ">
                <a href="#">
                  <i>
                    <font-awesome-icon :icon="['fab', 'twitter']" />
                  </i>
                </a>
              </li>
              <li class="list-unstyled-item ">
                <a href="#">
                  <i>
                    <font-awesome-icon :icon="['fab', 'facebook-f']" />
                  </i>
                </a>
              </li>
              <li class="list-unstyled-item instagram">
                <a href="#">
         
                  <i>
                  
                    <font-awesome-icon :icon="['fab', 'linkedin-in']" />
                  </i>
                </a>
              </li>
            </ul>
          </div>
      
      </div>

      <div class="social-icons">
        <ul class="list-unstyled text-center mb-0">
          <li class="list-unstyled-item">
            <a href="#">
              <i>
                <font-awesome-icon :icon="['fab', 'twitter']" />
              </i>
            </a>
          </li>
          <li class="list-unstyled-item ">
            <a href="#">
              <i>
                <font-awesome-icon :icon="['fab', 'facebook-f']" />
              </i>
            </a>
          </li>
          <li class="list-unstyled-item instagram">
            <a href="#">
              <i>
                <font-awesome-icon :icon="['fab', 'linkedin-in']" />
              </i>
            </a>
          </li>
        </ul>
      
      </div>
    </div>
  </header>
</template>

<script>
import video from "../../assets/mp4/bg.mp4";
import logo from "../../assets/img/logo.png";
import Sector from "../Sectors/Sector";

export default {
  data() {
    //this.$i18n.locale = "en";
    return {
      emailCheckerState: false,
      emailCheckerMessage: "Please Enter a Valid Email",
      isSubmit: false,
      video,
      logo,
      Sector,
      User: [
        {
          email: "",
        },
      ],
      errors: [],
      isInvalid: false,
      goodRequest: false,
      isEnglish: true,
    };
  },

  watch: {
    locale(val) {
      this.$i18n.locale = val;
    },
  },
  created() {
    this.$confetti.stop();
    if (this.$ls.get("language") == null) {
      this.$i18n.locale = "english";
      this.$ls.set("language", "english");
    } else {
      this.$i18n.locale = this.$ls.get("language");
    }
  },
  methods: {
    start: function() {
      this.$router.push({
        path: "/start",
        query: { locale: this.$ls.get("language") },
      });
    },
    changeLanguage: function() {
      var actual = this.$t("homemessage.homeButton");
      console.log(actual);
      if (this.isEnglish == true) {
        this.$ls.set("language", "french");
        this.isEnglish = false;
        this.$i18n.locale = "french";
        console.log("the actual language is : french");
      } else {
        this.$i18n.locale = "english";
        this.$ls.set("language", "english");
        this.isEnglish = true;
        console.log("the actual language is : english");
      }
      //statement
    },
  },
};
</script>

<style scoped>

html {
  height: 100%;
}

* {
  font-family: "Montserrat";
}

body {
  height: 100%;
  min-height: 35rem;
  position: relative;
  font-family: "Montserrat";
  font-weight: 300;
}
span a {
  color: #cd9557;
}
.question {
  font-family: "Montserrat";
  font-size: 47px !important;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Montserrat";
  font-weight: 700;
}

video {
  position: fixed;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  transform: translateX(-50%) translateY(-50%);
  z-index: 0;
}

@media (pointer: coarse) and (hover: none) {
  body video {
    display: none;
  }
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: #cd9557;
  opacity: 0.1;
  z-index: 1;
  opacity: 0.7;
  z-index: 1;
}

.masthead .masthead-bg {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;

  background-color: #1a9e8e;
 
  
}

.masthead .masthead-content h1 {
  font-size: 0.5rem;
}

.masthead .masthead-content p {
  font-size: 1.2rem;
}

.masthead .masthead-content p strong {
  font-weight: 700;
}

.masthead {
  position: relative;
  overflow: hidden;
  padding-bottom: 3rem;
  opacity: 0.8;
  z-index: 2;
  top: 12rem;
}

.masthead .masthead-content .input-group-newsletter input {
  height: auto;
  font-size: 1rem;
  padding: 1rem;
}

/*.masthead .masthead-content .input-group-newsletter button {
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 1re m;
}*/

/* this is my media */
.button {
  top: 50%;
  left: 50%;
  transform: translate(-50, -50);
}

.button {
  background: none;
  color: white;
  width: 550px;
  height: 80px;
  border: 1px ;
  background-color: #f79623;
  font-size: 18px;
  border-radius: 4px;
  transition: 0.6s;
  overflow: hidden;
}

.button:hover {
  background: white;
  cursor: pointer;
  color: #1a9e8e;
}


@media (min-width: 240px) {
  .button {
    background: none;
    color: white;
    width: 218px;
    height: 70px;
    background-color: #f79623;
    font-size: 18px;
    border-radius: 4px;
    transition: 0.6s;
    overflow: hidden;
  }
  .link{
     position: relative;
  font-size: 12px;
  color: white!important;
 
 
}


  .image_logo {
    width: 180px;
    margin-bottom: 28px;
      margin-top: 36px;
    margin-left: 31px;
  }

  .social-icons ul[data-v-15737ea2] {
 margin-top: 2rem;
    width: 100%;
    text-align: center;
    display: flex;
    justify-content: space-evenly;
  }

  .social-icons ul > li > a {
    display: block;
    color: #1a9e8e;
    background-color: white;
    border-radius: 100%;
    font-size: 2rem;
    line-height: 3rem;
    height: 3rem;
    width: 3rem;
  }
  .link{
  position: relative;
  font-size: 12px;
  color: white!important;
  
}

  .icon {
    display: none;
  }
  .social-icons ul > li[data-v-15737ea2] {
    margin-left: -1rem;
    margin-right: -1rem;
    display: inline-block;
    margin-top: 20px;
  }

  .masthead {
    position: relative;
    overflow: hidden;
    padding-bottom: 3rem;
    opacity: 0.8;
    z-index: 2;
    top: 5rem;
  }

  .masthead .masthead-content h1 {
    font-size: 0.5rem;
    text-align: center;
  }

  .masthead .masthead-content p {
    font-size: 1.2rem;
    text-align: center;
  }
}

@media (min-width: 280px) {
  .button {
    background: none;
    color: white;
    width: 245px;
    height: 67px;
    background-color: #f79623;
    font-size: 18px;
    border-radius: 4px;
    transition: 0.6s;
    overflow: hidden;
  }

 .link{
     position: relative;
  font-size: 13px;
  color: white!important;
 }

  .image_logo {
    width: 164px;
    margin-bottom: 20px;
    margin-top: 36px;
    margin-left: 49px;
  }

  .social-icons ul[data-v-15737ea2] {
    margin-top: 5rem;
    width: 100%;
    text-align: center;
    display: flex;
    justify-content: space-evenly;
  }

  .icon {
    display: none;
  }
}

@media (min-width: 320px) {
  .button {
    background: none;
    color: white;
    width: 269px;
    height: 70px;
    background-color: #f79623;
    font-size: 18px;
    border-radius: 4px;
    transition: 0.6s;
    overflow: hidden;
  }


.link[data-v-15737ea2] {
    position: relative;
    font-size: 15px;
    color: white!important;
}

 
  .image_logo {
    width: 184px;
    margin-bottom: 29px;
    margin-top: 38px;
    margin-left: 62px;
  }

  .social-icons ul {
    margin-top: 2rem;
    width: 100%;
    text-align: center;
    display: flex;
    justify-content: space-evenly;
  }

  .icon {
    display: none;
  }

  .content {
    text-align: center;
  }
}

@media (min-width: 360px) {
  .button {
    background: none;
    color: white;
    width: 313px;
    height: 65px;
    background-color: #f79623;
    font-size: 18px;
    border-radius: 4px;
    transition: 0.6s;
    overflow: hidden;
  }



  .image_logo {
    width: 203px;
    margin-bottom: 18px;
    margin-top: 31px;
    margin-left: 69px;
  }

  .social-icons ul {
    margin-top: 2rem;
    margin-bottom: 2rem;
    width: 100%;
    text-align: center;
    display: flex;
    justify-content: space-evenly;
  }

  .content {
    text-align: center;
  }

  .icon {
    display: none;
  }

  .social-icons ul > li > a {
    display: inline-block;
    color: #1a9e8e;
    background-color: rgb(226, 223, 223);
    border-radius: 100%;
    font-size: 2rem;
    line-height: 4rem;
    height: 4rem;
    width: 4rem;
  }
}

@media (min-width: 375px) {
  .button {
    background: none;
    color: white;
    width: 313px;
    height: 65px;
    background-color: #f79623;
    font-size: 18px;
    border-radius: 4px;
    transition: 0.6s;
    overflow: hidden;
  }
.link[data-v-15737ea2] {
    position: relative;
    font-size: 16px;
    color: white!important;
}



  .image_logo {
    width: 198px;
    margin-bottom: 20px;
    margin-top: 32px;
    margin-left: 79px;
  }

  .social-icons ul {
    margin-top: 2rem;
    width: 100%;
    text-align: center;
    display: flex;
    justify-content: space-evenly;
  }

  .icon {
    display: none;
  }

  .content {
    text-align: center;
  }
}

@media (min-width: 384px) {
  .button {
    background: none;
    color: white;
    width: 313px;
    height: 65px;
    background-color: #f79623;
    font-size: 18px;
    border-radius: 4px;
    transition: 0.6s;
    overflow: hidden;
  }



  .image_logo {
    width: 200px;
    margin-bottom: 29px;
    margin-top: 40px;
    margin-left: 85px;
  }

  .social-icons ul {
    margin-top: 2rem;
    width: 100%;
    text-align: center;
    display: flex;
    justify-content: space-evenly;
  }

  .icon {
    display: none;
  }

  .content {
    text-align: center;
  }
}

@media (min-width: 411px) {
  .button {
    background: none;
    color: white;
    width: 313px;
    height: 65px;
    background-color: #f79623;
    font-size: 18px;
    border-radius: 4px;
    transition: 0.6s;
    overflow: hidden;
  }
.link[data-v-15737ea2] {
    position: relative;
    font-size: 17px;
    color: white!important;
}


  .image_logo {
    width: 197px;
    margin-bottom: 33px;
    margin-top: 38px;
    margin-left: 102px;
  }

  .social-icons ul {
    margin-top: 2rem;
    width: 100%;
    text-align: center;
    display: flex;
    justify-content: space-evenly;
  }

  .icon {
    display: none;
  }

  .content {
    text-align: center;
  }
}

@media (min-width: 450px) {


  .image_logo {
    width: 180px;
    margin-bottom: 39px;
    margin-top: 36px;
    margin-left: 128px;
  }

  .social-icons ul {
    margin-top: 2rem;
    width: 100%;
    text-align: center;
    display: flex;
    justify-content: space-evenly;
  }

  .icon {
    display: none;
  }

  .content {
    text-align: center;
  }
}

@media (min-width: 480px) {
  .button {
    background: none;
    color: white;
    width: 371px;
    height: 65px;
    background-color: #f79623;
    font-size: 18px;
    border-radius: 4px;
    transition: 0.6s;
    overflow: hidden;
  }



  .image_logo {
    width: 194px;
    margin-bottom: 68px;
    margin-top: 68px;
    margin-left: 133px;
  }

  .social-icons ul {
    margin-top: 2rem;
    width: 100%;
    text-align: center;
    display: flex;
    justify-content: space-evenly;
  }

  .icon {
    display: none;
  }

  .content {
    text-align: center;
  }
}

@media (min-width: 600px) {
  .button {
    background: none;
    color: white;
    width: 401px;
    height: 70px;
    background-color: #f79623;
    font-size: 18px;
    border-radius: 4px;
    transition: 0.6s;
    overflow: hidden;
  }



  .image_logo {
    width: 239px;
  margin-bottom: 41px;
    margin-top: 55px;
    margin-left: 169px;
  }

  .social-icons ul {
    margin-top: 6rem;
    width: 100%;
    text-align: center;
    display: flex;
    justify-content: space-evenly;
  }

  .icon {
    display: none;
  }

  .content {
    text-align: center;
  }
}

@media (min-width: 640px) {
  .button {
    background: none;
    color: white;
    width: 440px;
    height: 65px;
    background-color: #f79623;
    font-size: 18px;
    border-radius: 4px;
    transition: 0.6s;
    overflow: hidden;
  }



  .image_logo {
    width: 228px;
    margin-bottom: 47px;
    margin-top: 40px;
    margin-left: 203px;
  }

  .social-icons ul {
    margin-top: 2rem;
    width: 100%;
    text-align: center;
    display: flex;
    justify-content: space-evenly;
  }

  .icon {
    display: none;
  }

  .content {
    text-align: center;
  }
}

@media (min-width: 768px) {
  .button {
    background: none;
    color: white;
    width: 513px;
    height: 77px;
    background-color: #f79623;
    font-size: 18px;
    border-radius: 4px;
    transition: 0.6s;
    overflow: hidden;
  }

  .masthead {
    height: 100%;
    min-height: 0;

    padding-bottom: 0;
  }

  

  .masthead .masthead-content {
    text-align: center !important;
  }

  .masthead .masthead-content h1 {
    font-size: 2.5rem;
  }

  .masthead .masthead-content p {
    font-size: 1.3rem;
  }

  .image_logo {
    width: 239px;
    margin-bottom: 61px;
    margin-top: -33px;
    margin-left: -26px;
  }

  .logo {
    /* float: left; */
    /* margin-left: 60px; */
    margin-top: 5rem;
    position: relative;
    width: 100%;
    /* height: auto; */
    text-align: center;
  }

  .social-icons {
    margin: 0;
    margin-top: 58px;
    position: absolute;
    right: 0;
    display: none;
  }

  .icon {
    display: inline;
  }

  .icon ul > li > a {
    display: inline-block;
   color: #1a9e8e;
    background-color: white;
    border-radius: 100%;
    font-size: 2rem;
    line-height: 4rem;
    height: 4rem;
    width: 4rem;
  }
.icon ul {
      margin-top: 90px;
  }
   .image_logo {
    width: 306px;
    margin-bottom: 39px;
   
  }

  .masthead .masthead-bg {
    display: initial;
  }

  .content {
    text-align: center;
  }
}

@media (min-width: 800px) {
  .button {
    background: none;
    color: white;
    width: 546px;
    height: 80px;
    background-color: #f79623;
    font-size: 18px;
    border-radius: 4px;
    transition: 0.6s;
    overflow: hidden;
  }
  


  .masthead {
    height: 100%;
    min-height: 0;

    padding-bottom: 0;
  }
 

  

  .masthead .masthead-content {
    text-align: center !important;
  }

  .masthead .masthead-content h1 {
    font-size: 2.5rem;
  }

  .masthead .masthead-content p {
    font-size: 1.3rem;
  }

  .image_logo {
    width: 306px;
    margin-bottom: 62px;
    margin-top: -33px;
    margin-left: -26px;
  }

  .logo {
    /* float: left; */
    /* margin-left: 60px; */
    margin-top: 5rem;
    position: relative;
    width: 100%;
    /* height: auto; */
    text-align: center;
  }

  .social-icons {
    margin: 0;
    margin-top: 58px;
    position: absolute;
    right: 0;
    display: none;
  }

  .icon {
    display: inline;
  }

  .icon ul > li > a {
    display: inline-block;
    color: #1a9e8e;
    background-color: white;
    border-radius: 100%;
    font-size: 2rem;
    line-height: 4rem;
    height: 4rem;
    width: 4rem;
  
  }
  .icon ul {
      margin-top: 90px;
  }

  .masthead .masthead-bg {
    display: initial;
  }

  .content {
    text-align: center;
  }
}

@media (min-width: 1280px) {
  .button {
    background: none;
    color: white;
    width: 600px;
    height: 80px;
    background-color: #f79623;
    font-size: 18px;
    border-radius: 4px;
    transition: 0.6s;
    overflow: hidden;
  }

  .masthead {
    height: 100%;
    min-height: 0;
    padding-bottom: 0;
  }

 
  .masthead .masthead-content {
    text-align: center !important;
  }

  .masthead .masthead-content h1 {
    font-size: 2.5rem;
  }

  .masthead .masthead-content p {
    font-size: 1.3rem;
  }

  .image_logo {
    width: 236px;
    margin-bottom: 61px;
    margin-top: -33px;
    margin-left: -26px;
  }

  .logo {
    /* float: left; */
    /* margin-left: 60px; */
    margin-top: 5rem;
    position: relative;
    width: 100%;
    /* height: auto; */
    text-align: center;
  }

  .social-icons {
    margin: 0;
    margin-top: 58px;
    position: absolute;
    right: 0;
    display: block;
  }

  .social-icons ul[data-v-15737ea2][data-v-15737ea2] {
    margin-top: 2rem;
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin-top: 27px;
  }

  .social-icons[data-v-15737ea2] {
    position: absolute;
    margin-bottom: 2rem;
    width: 10% !important;
    z-index: 2;
  }

  .social-icons ul > li[data-v-15737ea2] {
    margin-left: 1rem;
    margin-right: 1rem;
    display: inline-block;
    margin-top: 20px;
  }

  .icon {
    display: none;
  }

  .masthead .masthead-bg {
    display: initial;
  }

  .content {
    text-align: center;
  }
}

@media (min-width: 1440px) {
  .button {
    background: none;
    color: white;
    width: 600px;
    height: 80px;
    background-color: #f79623;
    font-size: 18px;
    border-radius: 4px;
    transition: 0.6s;
    overflow: hidden;
  }

  .masthead {
    height: 100%;
    min-height: 0;
    padding-bottom: 0;
  }
  

  .masthead .masthead-content {
    text-align: center !important;
  }

  .masthead .masthead-content h1 {
    font-size: 2.5rem;
  }

  .masthead .masthead-content p {
    font-size: 1.3rem;
  }

  .image_logo {
    width: 236px;
    margin-bottom: 61px;
    margin-top: -33px;
    margin-left: -26px;
  }

  .logo {
    /* float: left; */
    /* margin-left: 60px; */
    margin-top: 5rem;
    position: relative;
    width: 100%;
    /* height: auto; */
    text-align: center;
  }

  .social-icons {
    margin: 0;
    margin-top: 58px;
    position: absolute;
    right: 0;
    display: block;
  }

  .social-icons ul[data-v-15737ea2][data-v-15737ea2] {
    margin-top: 2rem;
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin-top: -14px;
  }

  .social-icons[data-v-15737ea2] {
    position: absolute;
    margin-bottom: 2rem;
    width: 10% !important;
    z-index: 2;
  }

  .social-icons ul > li[data-v-15737ea2] {
    margin-left: 1rem;
    margin-right: 1rem;
    display: inline-block;
    margin-top: 20px;
  }

  .icon {
    display: none;
  }

  .masthead .masthead-bg {
    display: initial;
  }

  .content {
    text-align: center;
  }
  .masthead {
    position: relative;
    overflow: hidden;
    padding-bottom: 3rem;
    opacity: 0.8;
    z-index: 2;
    top: 12rem;
  }

  .social-icons ul > li > a {
    display: block;
    color: #1a9e8e;
    background-color: white;
    border-radius: 100%;
    font-size: 2rem;
    line-height: 4rem;
    height: 4rem;
    width: 4rem;
  }
}

/* end of my media */

.social-icons {
  position: absolute;
  margin-bottom: 2rem;
  width: 100%;
  z-index: 2;
}

.social-icons ul {
  margin-top: 2rem;
  width: 100%;
  text-align: center;
}

.social-icons ul > li {
  margin-left: 1rem;
  margin-right: 1rem;
  display: inline-block;
}

.btn-secondary {
  background-color: #f79623;
}

.btn-secondary:active,
.btn-secondary:focus,
.btn-secondary:hover {
  background-color: #f79623 !important;
 
}

.loader {
  width: 22px;
  height: 22px;
}

.submitButton {
  min-width: 70px;
}

.language :hover {
  color: #f79623;
}

</style>
