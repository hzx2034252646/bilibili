import Vue from 'vue'
import axios from 'axios'
import API from '@/api'

const http = axios.create({
  baseURL: API.ROOT
})

export default {
  install () {
    Vue.http = http
    Vue.prototype.$http = http
  }
}
