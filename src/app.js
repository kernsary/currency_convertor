import Vue from 'vue';

document.addEventListener("DOMContentLoaded", () => {
  new Vue({
    el: "#app",
    data: {
      currencies: [],
      euroInputAmount: null,
      currencyInputAmount: null,
      targetCurrencyName: null,
      chosenCurrencyName: null
    },

    mounted() {
      this.fetchRates();
    },

    computed: {

      euroToCurrencyRate: function() {
        return this.currencies[this.targetCurrencyName]
      },

      currencyToEuroRate: function() {
        return 1 / this.currencies[this.chosenCurrencyName]
      },

      targetCurrencyValue: function() {
        return (this.euroInputAmount * this.euroToCurrencyRate).toFixed(2)
      },

      euroCurrencyValue: function() {
        return (this.currencyInputAmount * this.currencyToEuroRate).toFixed(2)
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
