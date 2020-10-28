<template>
<div class="container mt-0 p-5" id="app">

  <!-- Loader -->
  <div class=" loader text-center" v-if="isFecthCurrencyLoading">
    <div class="spinner-border  " role="status">
      <span class="sr-only">Loading...</span>
    </div>
  </div>
  <div class="bodyConverter mx-5" v-if="!isFecthCurrencyLoading">
    <header>
      <h1 class="text-center my-3">
        Convert {{ new Intl.NumberFormat().format(this.price) }} XAF to :
      </h1>
    </header>
    <div class="row">
      <div class="input-group col-md-12 mb-4  ">
        <div class="input-group-append">
          <label class="input-group-text" for="convertTo">Convert To</label>
        </div>
        <select class="custom-select" id="convertTo" v-model="to">
          <option v-for="(curruncy, index) in receivedData" v-bind:key="index">{{ curruncy.id }}</option>
        </select>
        <div class="input-group-append">
          <label class="input-group-text" for="convertTo">{{ toSymbol }}</label>
        </div>
      </div>
    </div>
    <button type="button" class="btn btn-primary btn-block " @click.prevent="convert">
      {{ loading ? "Converting..." : "Convert" }}
    </button>
    <div class=" loader text-center mt-5" v-if="isFetchConverted == true">
      <div class="spinner-border  " role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
    <div class="result text-center font-weight-bold mt-5" v-if="isFetchConverted == false">
      <h1> &#8776; {{ new Intl.NumberFormat().format(this.result) }}
        {{ toSymbol }}
      </h1>
    </div>
  </div>

</div>
</template>

<script>
export default {
  props: ["price"],
  data() {
    return {
      receivedData: "",
      to: "USD",
      from: "XAF",
      fromSymbol: "$",
      toSymbol: "₪",
      result: 0,
      isBTNdisabled: false,
      loading: false,
      isFecthCurrencyLoading: true,
      isFetchConverted: false,

    };
  },

  methods: {
    convert: function () {
      this.isFetchConverted = true;
      var key = `${this.from}_${this.to}`;
      this.loading = true;
      console.log("this is the key: " + key);
      console.log("from: " + this.from);
      console.log(key);
      this.$http
        .get(
          `https://free.currconv.com/api/v7/convert?q=${this.from}_${this.to}&apiKey=c55f51e750d88ac85a14`
        )
        .then((resp) => resp.json())
        .then((reponse) => {
          console.log(reponse);
          this.loading = false;
          this.isFetchConverted = false;
          this.result = (this.price * reponse.results[key].val);
          this.toSymbol = reponse.results[key].fr;
        });
    },
  },
  mounted: function () {
    this.$http
      .get(
        "https://free.currconv.com/api/v7/currencies?apiKey=c55f51e750d88ac85a14"
      )
      .then((resp) => resp.json())
      .then((data) => {
        console.log("first response");
        console.log(data);
        this.isFecthCurrencyLoading = false;
        this.receivedData = data.results;
      });
  },
};
</script>

<style scoped>
* {
  font-family: "Source Sans Pro", sans-serif;
}

.container {
  background-image: url("../../../assets/img/sectorbg.png");
  background-size: contain;

  font-family: "Montserrat";
}

h1 {
  font-weight: 700;
  letter-spacing: -1px;
  position: relative;
  color: #985809;
}

body {
  background-color: black;
}

.BTNdisabled {
  cursor: not-allowed;
}

.alert {
  background-color: #985809;
  border: 0;
  color: #ccc;
}
</style>
