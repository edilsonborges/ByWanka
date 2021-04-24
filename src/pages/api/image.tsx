import AWS from 'aws-sdk'

const S3 = new AWS.S3({
  credentials: {
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY
  }
})
export default async (req, res) => {
  const signedURL = S3.getSignedUrl('getObject', {
    Bucket: 'bywanka',
    Key: 'allan.jpg',
    Expires: 60
  })
  return res.status(200).json({ url: signedURL })
}
