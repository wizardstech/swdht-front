import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.VUE_APP_BACKEND_PROXY_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + localStorage.token
  }
})

export default instance
