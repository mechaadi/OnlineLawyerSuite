import {
    JSONClient
} from "./config";


export const addCase = async(title, body, client) => {
    const response = await JSONClient.post(`/cases/create`, {
        'title': title,
        'description': body,
        'pub_at': new Date(),
        'client': client
    }, {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    })

    console.log(response.data)
}

export const getAllCases = async(id) => {
    const response = await JSONClient.get(`/cases/allCases/${id}`, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    })

    console.log(response)
    return response.data
}