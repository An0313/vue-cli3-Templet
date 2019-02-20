import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import 'lib-flexible'
import global from './assets/global'
import Loading from './plugins/Loading'
import Alert from './plugins/Alert'

Vue.use(global)
Vue.use(Alert)
Vue.use(Loading)

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
