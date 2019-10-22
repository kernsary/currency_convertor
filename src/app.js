import Vue from 'vue';

document.addEventListener("DOMContentLoaded", () => {
  new Vue({
    el: "#app",
    data: {
      currencies: [],
      euroInputAmount: null,
      currency: null
      // name: null,
      // rate: null,
      // index: null
    },

    mounted() {
      this.fetchRates();
      console.log(this.currencies[1]);
    },

    computed: {

      // name: function() {
      //   return this.currencies[this.index].name
      // },
      //
      // rate: function() {
      //   return this.currencies[this.index].value
      // },

      targetCurrencyValue: function() {
        return this.euroInputAmount * this.rate
      }
    },

    methods: {
      fetchRates: function() {
        fetch("https://api.exchangeratesapi.io/latest")
        .then(response => response.json())
        .then(data => this.currencies = data.rates)
      }
    }
  })
})
