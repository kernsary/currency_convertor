import Vue from 'vue';

document.addEventListener("DOMContentLoaded", () => {
  new Vue({
    el: "#app",
    data: {
      rates: []
    },

    mounted() {
      this.fetchRates();
    },

    methods: {
      fetchRates: function() {
        fetch("https://api.exchangeratesapi.io/latest")
        .then(response => response.json())
        .then(data => this.rates = data.rates)
      }
    }
  })
})
