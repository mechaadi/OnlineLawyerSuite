import axios from 'axios'

axios.defaults.baseURL = process.env.REACT_APP_API_URL

if (process.env.NODE_ENV === "development") {
    axios.interceptors.request.use(request => {
        console.log('Starting Request', request)
        return request
    })

    axios.interceptors.response.use(response => {
        console.log('Response:', response)
        return response
    })
}

export const JSONClient = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        "Content-Type": "application/json"
    }
})

export const FormClient = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        "Content-Type": "multipart/form-data"
    }
})