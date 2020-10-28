<template>
<div class="container  ">

  <div class="row justify-content-center">
    <div class="col col-4 text-center">
      <div class="card  fr">
        <div class="card-body">
          <img :src="fr" alt="french">
        </div>
      </div>
    </div>
    <div class="col-md-auto">

    </div>
    <div class="col col-4 text-center ">
      <div class="card   uk">
        <div class="card-body ">
          <img :src="uk" alt="english">
        </div>
      </div>
    </div>
  </div>

</div>
</template>

<script>
import fr from "../../assets/img/fr.png";
import uk from "../../assets/img/uk.png";

export default {
  data() {
    return {
      fr,
      uk,
    }

  },
};
</script>

<style scoped>
.fr {

  background-size: cover;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  font-family: "Montserrat", sans-serif;
}

.uk {

  background-size: cover;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  font-family: "Montserrat", sans-serif;
}
</style>
