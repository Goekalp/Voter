const app = Vue.createApp({
  //Optionen
  data: function () {
    return {
      submissions: submissions, //aus seed.js
    };
  },
  methods: {
    /* upvote: function () {}, */
    upvote(infoText, event) {
      //console.log(this);
      this.submissions[0].votes++;
      console.log(infoText);
      console.log(event);
    },
  },
});

//Liefert die Instanz zur Root-Component zurück
const vm = app.mount("#app");
