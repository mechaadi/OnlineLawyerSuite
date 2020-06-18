import axios from 'axios'

axios.defaults.baseURL = "http://172.105.153.11/uplaw"

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
    baseURL: process.env.NEXT_SERVER_TEST_1,
    headers: {
        "Content-Type": "application/json"
    }
})

export const FormClient = axios.create({
    baseURL: process.env.NEXT_SERVER_TEST_1,
    headers: {
        "Content-Type": "multipart/form-data"
    }
})