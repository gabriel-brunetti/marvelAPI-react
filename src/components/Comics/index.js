import React, { useState, useEffect } from 'react'
import axios from 'axios'
import md5 from 'md5'

export default function Comics({ url }) {
  const publicKey = 'cbea2d04c5782aaafc323023acea74dd'
  const privateKey = 'ced775d6630c717b4fd6df6633c88184ea89e66b'
  const timestamp = Number(new Date())
  const hash = md5(timestamp + privateKey + publicKey)
  const paramsDefault = { ts: timestamp, apikey: publicKey, hash: hash }
  const [comics, setComics] = useState([])
  const [loading, setLoading] = useState([])

  return <h2>Comics</h2>
}
