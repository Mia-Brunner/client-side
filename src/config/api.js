import axios from 'axios'

// Create an axios instance
export default axios.create({
  baseURL: 'https://pacific-woodland-56783.herokuapp.com/',
  timeout: 5000,
  withCredentials: true
})