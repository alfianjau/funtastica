import axios from 'axios'

const BASE_URL = 'https://ghibliapi.herokuapp.com/'
export default axios.create({
  baseUrl: BASE_URL,
  params: {},
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
  },
  timeout: 5000, // request timeout
})
