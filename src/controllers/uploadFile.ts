export const uploadFile = async (file:any) => {
    const formData = new FormData();
    formData.append("upload_present","react-journal")
    formData.append("file", file)
    const cloudURL = "https://api.cloudinary.com/v1_1/dwa0boye6/upload"
    try {
        const response = await fetch(cloudURL,{
            method: "POST",
            body:formData,
        });
        if(response.ok){
            const {secure_url} = await response.json()
            return secure_url
        }else{
            throw await response.json();
        }
    } catch (error) {
        console.log(error)
    }
}