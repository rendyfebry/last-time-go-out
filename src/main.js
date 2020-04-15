import Vue from "vue";
import App from "./App.vue";
import VueAnalytics from "vue-analytics";

import "bootstrap/dist/css/bootstrap.min.css";

Vue.config.productionTip = false;

Vue.use(VueAnalytics, {
  id: 'UA-163723782-1'
})

new Vue({
  render: h => h(App)
}).$mount("#app");
