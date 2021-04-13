import React, { useEffect, useState } from 'react'
import { useStore } from '../store'
import axios from 'axios'

const Card = (data) => {
  const counter = useStore((state) => state.setCount)
  return (
    <div onClick={counter} className="bg-gray-500 w-52 border cursor-pointer">
      {console.log('url: ', data.url)}
      <img src={data.url} alt="" />
    </div>
  )
}

const Body = () => {
  const [photos, setPhotos] = useState([])

  useEffect(async () => {
    const result = await axios('https://random.imagecdn.app/500/150')
    setPhotos(result.data)
    console.log(result)
  }, [])

  return (
    <div className="flex-grow grid grid-cols-4 p-6 gap-6">
      <Card url="https://random.imagecdn.app/400/400" />
      <Card url="https://random.imagecdn.app/400/400" />
      <Card url="https://random.imagecdn.app/400/400" />
      <Card url="https://random.imagecdn.app/400/400" />
      <Card url="https://random.imagecdn.app/400/400" />
      <Card url="https://random.imagecdn.app/400/400" />
      <Card url="https://random.imagecdn.app/400/400" />
      <Card url="https://random.imagecdn.app/400/400" />
    </div>
  )
}

export default Body
