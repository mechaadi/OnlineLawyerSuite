import {
    JSONClient,
    FormClient
} from "./config";

export const getLawyers = async() => {
    const response = await JSONClient.get('/user/lawyers');
    console.log(response)
}