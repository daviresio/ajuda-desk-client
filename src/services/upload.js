import api from "../config/network";

export const uploadImage = async (file) => {
    try {
    const {data} = await api.post('https://wd2f9ukycg.execute-api.us-east-1.amazonaws.com/dev/upload-image', {filename: file.name, filetype: file.type})
    await api.put(data.url, file)
    return data.url.split('?')[0]
    } catch (e) {
        throw new Error(e)
    }
}