import { createApp } from "vue";
import router from "./router";
import store from "./store";
import "./style.css";
import App from "./App.vue";
import * as filters from './filters'


const app = createApp(App);
app.use(router).use(store).mount("#app");     //Χρήση της use με σκοπό να επιτραπεί η χρήση του Vue Router και του Vuex store στην εφαρμογή

app.config.globalProperties.$filters = filters    //Επιτρέπεται η χρήση των filters από όλα τα components της εφαρμογής