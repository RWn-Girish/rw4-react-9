import axios from "axios";

export const uploadFile = async (file) => {
    let uploadData = new FormData();

    uploadData.append("file", file);
    uploadData.append("upload_preset", "product");
    uploadData.append("cloud_name", "dheweokqn");

    let res = await axios.post(`https://api.cloudinary.com/v1_1/dheweokqn/image/upload`, uploadData);
    // console.log("Response: ", res);
    return res.data.secure_url;
}