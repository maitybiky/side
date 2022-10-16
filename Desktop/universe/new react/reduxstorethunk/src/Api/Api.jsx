import axios from 'axios'

const API = axios.create({baseURL : "http://localhost:5000" })
export const sign_in = (userData) => API.post("/users/sigin",userData)
export const sign_up = (userData) => API.post("/users/sigin",userData)