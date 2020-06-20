/* eslint-disable no-unused-vars */
import {
    JSONClient,
    FormClient
} from "./config";


export const login = async function(email, password) {
    const response = await JSONClient.post("/user/login", {
        email: email,
        password: password,
    })
    if (response.data.data) {
        window.location.href = "/profile"
        localStorage.setItem("token", response.data.data)

    }
}

export const register = async(email, password, username, user_type, premium, profile_picture, about, name) => {
    console.log(name)
    const resp = await JSONClient.post("/user/register", {
        email: email,
        password: password,
        username: username,
        profile_picture: "",
        user_type: user_type,
        about: "",
        name: name
    });
    console.log(resp.data)
    localStorage.setItem("user", JSON.stringify(resp.data.data))

    return resp.data
}

export const getUser = async() => {
    const userData = localStorage.getItem("user")
    return JSON.parse(userData)
}

export const updateProfile = async() => {
    const userData = localStorage.getItem("user")
    const username = JSON.parse(userData).username
    console.log(username)
    const resp = await JSONClient.get(`/user/${username}`, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    })

    localStorage.setItem("user", JSON.stringify(resp.data.data))
    console.log(resp, " synced user")
}

export const getToken = function() {
    const token = localStorage.getItem('token')
    return token
}