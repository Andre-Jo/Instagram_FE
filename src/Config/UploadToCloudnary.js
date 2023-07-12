export const uploadToCloudnary = async (img) => {
    if(img) {
        const data = new FormData();
        data.append("file", img);
        // 클라우드 업로드 폴더명
        data.append("upload_preset", "instagram");
        // 클라우드너리 클라우드명
        data.append("cloud_name", "dgqslvvih");

        // API base URL
        const res = await fetch("https://api.cloudinary.com/v1_1/dgqslvvih/image/upload", {
            method:"POST",
            body:data,
        })
        const fileData = await res.json();

        console.log("fileData :", fileData);

        return fileData.url.toString()
    }
}