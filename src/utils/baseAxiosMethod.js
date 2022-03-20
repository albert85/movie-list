/* eslint-disable no-param-reassign */

import axios from 'axios'
import asyncLocalStorage from './asyncLocalStorage'

const baseAxiosMethod = axios.create({})
baseAxiosMethod.interceptors.request.use(
  config => {
    // Add authorization key to config object if it exist
    return asyncLocalStorage.getItem('token').then(function (token) {
      if (token) {
        config.headers.common.Authorization = `Bearer ${token}`
      }
      return config
    })
  },
  error => Promise.reject(error)
)
export default baseAxiosMethod
