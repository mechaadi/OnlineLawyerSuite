/* eslint-disable no-unused-vars */
import {
    JSONClient,
    FormClient
} from "./config";


export const login = async function(email, password) {
    try {
        const response = await JSONClient.post("/user/login", {
            email: email,
            password: password,
        })
        if (response.data.status) {
            localStorage.setItem("token", response.data.data.token)
            localStorage.setItem("user", JSON.stringify(response.data.data.user))
        }

        return response.data
    } catch (e) {
        console.log(e)
        if (e.response.status === 401) {
            return e.response
        }
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
    const resp = await updateProfile()
    console.log(resp)
    return JSON.parse(userData)
}

export const updateProfile = async() => {
    const userData = localStorage.getItem("user")
    const username = JSON.parse(userData).username
    const resp = await JSONClient.get(`/user/user/${username}`, {
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

export const updateProfileData = async(about, name) => {
    var userData = await getUser();
    console.log(userData)
    if (name !== "") {
        userData.name = name;
    }
    if (about !== "") {
        userData.about = about;
    }

    const resp = await JSONClient.post(`/user/update/${userData.username}`, {
        userData
    }, {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    })
    localStorage.setItem("user", JSON.stringify(resp.data.data))
}