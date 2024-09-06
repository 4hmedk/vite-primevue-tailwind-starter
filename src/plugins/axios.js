import axios from 'axios'

export default function bootAxios(app) {
  app.config.globalProperties.$axios = axios

  // You can also set up axios interceptors or default configuration here
  axios.defaults.baseURL = 'https://api.example.com'
}