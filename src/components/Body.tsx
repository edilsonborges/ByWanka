import React, { useEffect, useState } from 'react'
import { useStore } from '../store'
import Image from 'next/image'
import Search from './Search'
import Link from 'next/link'

const Card = ({ product }) => {
  const rand = Math.floor(Math.random() * (420 - 400 + 1) + 400)
  const url = `${product.image}/400/${rand}`

  return (
    <div className="relative box-border cursor-pointer filter hover:brightness-95 transition duration-300 transform hover:scale-105">
      <Image
        className="rounded-lg mb-1 "
        src={url}
        width="400"
        height="400"
        alt={product.name}
      />
      <div className="absolute bottom-0 rounded-b-lg bg-white px-5 p-2 shadow-md w-full grid">
        <span>
          #{product.id} - {product.name}
        </span>
        <div className="text-gray-500">
          <span>{product.category}</span>
          <span className="float-right">R$ {product.price}</span>
        </div>
      </div>
    </div>
  )
}

const Body = ({ products, page, total }) => {
  const lastPage = Math.ceil(total / 8)

  // testing loading all data and slicing
  const startProduct = page * 8 - 7
  products = products.slice(page <= 1 ? 0 : startProduct - 1, 7 + startProduct)

  return (
    <main>
      <Search />
      <div className="mt-4 mb-12">
        <div className="container mx-auto px-6 lg:px-28">
          <h3 className="text-gray-700 text-2xl font-medium">
            Nossos produtos
          </h3>
          <span className="text-gray-400 text-sm">{total} Itens</span>
          <div>
            <Link href={page >= 2 ? `/?page=${page - 1}` : '/'}>
              <button className="bg-gray-600 hover:bg-gray-500 transition duration-300 text-white mt-6 w-8 h-8 cursor-pointer rounded-full outline-none">
                &#8249;
              </button>
            </Link>
            <Link
              href={page < lastPage ? `/?page=${page + 1}` : `/?page=${page}`}
            >
              <button className="bg-gray-600 hover:bg-gray-500 transition duration-300 text-white mt-6 w-8 h-8 cursor-pointer rounded-full float-right outline-none">
                &#8250;
              </button>
            </Link>
          </div>
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
