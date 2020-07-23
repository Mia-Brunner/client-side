import axios from 'axios'

// Create an axios instance
export default axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 5000,
  withCredentials: true
})