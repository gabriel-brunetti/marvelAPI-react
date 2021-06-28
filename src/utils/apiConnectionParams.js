import md5 from 'md5'

const publicKey = process.env.REACT_APP_API_PUBLIC_KEY
const privateKey = process.env.REACT_APP_API_PRIVATE_KEY
const timestamp = Number(new Date())
const hash = md5(timestamp + privateKey + publicKey)
const params = { ts: timestamp, apikey: publicKey, hash: hash }

export default params
