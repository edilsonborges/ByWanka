import React from 'react'
// import { useStore } from '../store'
import Image from 'next/image'
import Search from './Search'
import Link from 'next/link'
import { Products } from '../pages/index'

const Card = ({ product, url }) => {
  // const rand = Math.floor(Math.random() * (420 - 400 + 1) + 400)
  // const url = `${product.image}/400/${rand}`

  return (
    <div className="box-border relative transition duration-300 transform cursor-pointer filter hover:brightness-95 hover:scale-105">
      <Image
        className="mb-1 rounded-lg"
        src={product.url}
        width="400"
        height="400"
        alt={product.name}
        objectFit="cover"
      />
      <div className="absolute bottom-0 grid w-full p-2 px-5 bg-white rounded-b-lg shadow-md">
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

const Body = ({ products, page, total, url }: Products): JSX.Element => {
  const lastPage = Math.ceil(total / 8)
  const startProduct = page * 8 - 7
  const productsFiltered = products.slice(
    page <= 1 ? 0 : startProduct - 1,
    7 + startProduct
  )
  const allowBack = page >= 2
  const allowForward = page < lastPage

  return (
    <main>
      <Search />
      <div className="mt-4 mb-12">
        <div className="container px-6 mx-auto lg:px-28">
          <h3 className="text-2xl font-medium text-gray-700">
            Nossos produtos
          </h3>
          <span className="text-sm text-gray-400">{total} Itens</span>
          <div>
            <Link href={allowBack ? `/?page=${page - 1}` : '/'}>
              <button
                disabled={!allowBack}
                className={
                  allowBack
                    ? 'w-8 h-8 mt-6 text-white transition duration-300 bg-gray-600 rounded-full outline-none cursor-pointer hover:bg-gray-500'
                    : 'w-8 h-8 mt-6 text-white bg-gray-200 rounded-full outline-none cursor-default'
                }
              >
                &#8249;
              </button>
            </Link>
            <Link href={allowForward ? `/?page=${page + 1}` : `/?page=${page}`}>
              <button
                disabled={!allowForward}
                className={
                  allowForward
                    ? 'float-right w-8 h-8 mt-6 text-white transition duration-300 bg-gray-600 rounded-full outline-none cursor-pointer hover:bg-gray-500'
                    : 'float-right w-8 h-8 mt-6 text-white bg-gray-200 rounded-full outline-none cursor-default'
                }
              >
                &#8250;
              </button>
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-12 mt-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {productsFiltered.map((product) => {
              return <Card key={product.id} product={product} url={url} />
            })}
          </div>
        </div>
      </div>
    </main>
  )
}

export default Body
