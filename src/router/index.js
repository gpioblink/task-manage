import Vue from 'vue'
import Router from 'vue-router'
import Todo from '@/components/Todo'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faTimes)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Todo',
      component: Todo
    }
  ]
})
