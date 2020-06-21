import {
    JSONClient
} from "./config";

export const getLawyers = async() => {
    const response = await JSONClient.get('/user/lawyers');
    return response.data
}


export const getLawyerByUsername = async(username) => {
    const response = await JSONClient.get(`/user/lawyers/${username}`, {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    });

    return response.data
}


export const addReview = async(id, review, star) => {
    const response = await JSONClient.post(`/review/create`, {
        'lawyer': id,
        'review': review,
        'pub_at': new Date(),
        'stars': star
    }, {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    })

    console.log(response.data)
}

export const getReviews = async(id) => {
    const response = await JSONClient.get(`/review/${id}`, {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    })

    return response.data
}