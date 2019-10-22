import Vue from 'vue';

document.addEventListener("DOMContentLoaded", () => {
  new Vue({
    el: "#app",
    data: {
      currencies: [],
      euroInputAmount: null,
      name: null
    },

    mounted() {
      this.fetchRates();
    },

    computed: {

      rate: function() {
        return this.currencies[this.name]
      },

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
