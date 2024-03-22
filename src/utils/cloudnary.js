import { v2 as cloudinary } from "cloudinary"

cloudinary.config({
  cloud_name: process.env.CLOUDANARY_CLOUD_NAME,
  api_key: process.env.CLOUDANARY_API_KEY,
  api_secret: process.env.CLOUDANARY_API_SECRET,
})

const uploadFileOnCloudnary = async function (filePath) {
  try {
    if (!filePath) return null

    const response = await cloudinary.uploader.upload(filePath, {
      resource_type: "auto",
    })
    console.log(`File Sploaded Successfully : ${response.url}`)
  } catch (error) {
    console.log(`Error while uploading file ${error}`)
  }
}
