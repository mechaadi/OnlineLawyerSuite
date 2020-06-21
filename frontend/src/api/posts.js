import {
    JSONClient
} from "./config";


export const addPost = async(title, body, image) => {
    const response = await JSONClient.post(`/posts/create`, {
        'title': title,
        'content': body,
        'images': image,
        'pub_at': new Date(),
    }, {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    })

    console.log(response.data)
}

export const getAllPosts = async() => {
    const response = await JSONClient.get(`/posts/`)
    console.log(response)
    return response.data
}