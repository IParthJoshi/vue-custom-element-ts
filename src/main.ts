import Vue, { ComponentOptions } from 'vue'
import VueCustomElement from 'vue-custom-element'
import ExampleComponent from './example-component.vue'

Vue.config.productionTip = false
// Configure Vue to ignore the element name when defined outside of Vue.
Vue.config.ignoredElements = [
  'example-component'
]
Vue.use(VueCustomElement)
Vue.customElement('example-component',ExampleComponent)

// new Vue({
//   render: h => h(MainComponent)
// }).$mount('#app')
