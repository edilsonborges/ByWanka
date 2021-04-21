import React, { useEffect, useState } from 'react'
import { useStore } from '../store'
import axios from 'axios'
import Image from 'next/image'
import Search from './Search'

const Card = ({ product }) => {
  const rand = Math.floor(Math.random() * (420 - 400 + 1) + 400)
  const url = `${product.image}/400/${rand}`

  return (
    <div className="relative box-border cursor-pointer filter hover:brightness-80 transition duration-300">
      <Image
        className="rounded-lg mb-1 "
        src={url}
        width="400"
        height="400"
        alt=""
      />
      <div className="absolute bottom-0 rounded-b-lg bg-white px-5 p-2 shadow-md w-full grid">
        <span>{product.name}</span>
        <div className="text-gray-500">
          <span>{product.category}</span>
          <span className="float-right">R$ {product.price}</span>
        </div>
      </div>
    </div>
  )
}

const Body = ({ products }) => {
  return (
    <main>
      <Search />
      <div className="mt-4 mb-12">
        <div className="container mx-auto px-6 lg:px-28">
          <h3 className="text-gray-700 text-2xl font-medium">
            Nossos produtos
          </h3>
          <span className="text-gray-400 text-sm">{products.length} Itens</span>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
            {products.map((product) => {
              return <Card key={product.id} product={product} />
            })}
          </div>
        </div>
      </div>
    </main>
  )
}

export default Body
