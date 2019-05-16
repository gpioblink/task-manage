// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: 'AIzaSyD2eNVsaaaYwBeFBlMGblbFqc8jZRnbRl8',
  authDomain: 'fir-vue-chat-8092e.firebaseapp.com',
  databaseURL: 'https://fir-vue-chat-8092e.firebaseio.com',
  projectId: 'fir-vue-chat-8092e',
  storageBucket: 'fir-vue-chat-8092e.appspot.com',
  messagingSenderId: '373785443513',
  appId: '1:373785443513:web:97f43272560046e4'
}
firebase.initializeApp(firebaseConfig)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
