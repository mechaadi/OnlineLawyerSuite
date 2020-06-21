import { FormClient } from "./config"
import { updateProfile } from "./user"

export const uploadProfilePicture = async function(fileImage) {
    let formData = new FormData()
    formData.append("file[]", fileImage)
    const response = await FormClient.post("/files/profilePic", formData, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    })
    updateProfile();
    alert("Profile picture saved!!")
    return response.data
}


export const uploadPostPic = async function(fileImage) {
    let formData = new FormData()
    formData.append("file[]", fileImage)
    const response = await FormClient.post("/files/upload", formData, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
        //updateProfile();
    console.log(response.data)
    alert("Profile picture saved!!")
    return response.data
}


export const getProfilePicture = function() {
    const profile = localStorage.getItem('user');
    const profilePic = JSON.parse(profile).profile_picture;
    return profilePic;
}