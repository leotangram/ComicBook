import axios from 'axios'

export const comicVine = axios.create({
  baseURL: 'http://comicvine.gamespot.com/api',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  params: {
    api_key: process.env.API_KEY,
    format: 'json',
    sort: 'cover_date:desc'
  }
})
