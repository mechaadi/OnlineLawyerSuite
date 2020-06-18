import { FormClient } from "./config"

export const uploadProductImages = async function(fileImages) {
    let formData = new FormData()

    for (let i = 0; i < fileImages.length; i++) {
        const fileImage = fileImages[i]
        formData.append("file[]", fileImage.file)
    }

    const response = await FormClient.post("/file", formData, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    })

    return response.data
}