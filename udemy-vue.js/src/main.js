import Vue from 'vue';
import App from './App.vue';
import LikeNumber from './Components/LikeNumber.vue';

Vue.config.productionTip = false
Vue.component('LikeNumber', LikeNumber);

new Vue({
  el: "#app",
  render: h => h(App)
});
