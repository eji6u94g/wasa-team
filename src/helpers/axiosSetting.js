// const axios = require("axios");
import axios from 'axios'

//axios
const baseURL = 'https://mocki.io/v1/4d44b0ff-8338-46aa-b738-d0b6f6bc3c13'
const axiosInstance = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json'
  }
});

export const apiHelper = axiosInstance