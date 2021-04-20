import React, { useEffect, useState } from 'react'
import { useStore } from '../store'
import axios from 'axios'

const Card = (data) => {
  const counter = useStore((state) => state.setCount)
  return (
    <div onClick={counter} className="relative box-border cursor-pointer ">
      <img className="rounded-lg mb-1" src={data.url} alt="" />
      <div className=" absolute bottom-0 rounded-b-lg bg-white px-5 p-6 shadow-md w-full">
        Produto de teste
      </div>
    </div>
  )
}

const Body = () => {
  const [photos, setPhotos] = useState([])

  // useEffect(async () => {
  //   const result = await axios('https://random.imagecdn.app/500/150')
  //   setPhotos(result.data)
  //   console.log(result)
  // }, [])

  return (
    <main className="my-6">
      <div className="container mx-auto px-28">
        <h3 className="text-gray-700 text-2xl font-medium">Nossos produtos</h3>
        <span className="text-gray-400 text-sm">30+ Itens</span>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
          <Card url="https://random.imagecdn.app/400/400" />
          <Card url="https://random.imagecdn.app/400/400" />
          <Card url="https://random.imagecdn.app/400/400" />
          <Card url="https://random.imagecdn.app/400/400" />
          <Card url="https://random.imagecdn.app/400/400" />
          <Card url="https://random.imagecdn.app/400/400" />
          <Card url="https://random.imagecdn.app/400/400" />
          <Card url="https://random.imagecdn.app/400/400" />
        </div>
      </div>
    </main>
  )
}

export default Body
