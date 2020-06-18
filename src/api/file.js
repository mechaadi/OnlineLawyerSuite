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

    console.log(response.data)
    updateProfile();
    return response.data
}