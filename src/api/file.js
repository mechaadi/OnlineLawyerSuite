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
    return response.data
}


export const getProfilePicture = function() {
    const profile = localStorage.getItem('user');
    const profilePic = JSON.parse(profile).profile_picture;
    return profilePic;
}