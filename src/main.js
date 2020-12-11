import Vue from 'vue'
import App from './App.vue'
import VueCodeMirror from 'vue-codemirror'
import 'codemirror/lib/codemirror.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
Vue.use(VueCodeMirror)
Vue.config.productionTip = false
console.log(VueCodeMirror, 'VueCodeMirror')

new Vue({
  render: h => h(App),
}).$mount('#app')
