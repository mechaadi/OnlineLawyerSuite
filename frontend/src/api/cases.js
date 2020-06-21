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