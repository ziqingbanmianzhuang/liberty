import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import "./assets/iconfont/iconfont.css";
import echarts from 'echarts';
Vue.prototype.$echarts = echarts;
// import VueAxios from 'vue-axios';
import axios from 'axios';
// Vue.use(VueAxios, axios);
Vue.prototype.$axios = axios;
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/collapse-item.css'
import 'element-ui/lib/theme-chalk/button.css'
import 'element-ui/lib/theme-chalk/button-group.css'
import 'element-ui/lib/theme-chalk/collapse.css'
import 'element-ui/lib/theme-chalk/carousel.css';
import 'element-ui/lib/theme-chalk/carousel-item.css';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI)
Vue.config.productionTip = false


new Vue({
    el: '#app',
    render: h => h(App),
    router,

})
