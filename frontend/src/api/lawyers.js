import {
    JSONClient
} from "./config";

export const getLawyers = async() => {
    const response = await JSONClient.get('/user/lawyers');
    console.log(response)
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