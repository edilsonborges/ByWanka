import React from 'react'
import Body from '../components/Body'
import Header from '../components/Header'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { api } from '../services/api'

type Product = {
  id: string
  createdAt: string
  name: string
  category: string
  price: string
  image: string
}

export type Products = {
  products: Product[]
  page: number
  total: number
}

export default function Home(
  props: Products
): InferGetServerSidePropsType<typeof getServerSideProps> {
  return (
    <>
      <Header />
      <Body products={props.products} page={props.page} total={props.total} />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({
  query: { page = 1 }
}) => {
  const allProducts = await api.get('products')
  // const pagedProducts = await api.get(`products?p=${page}&l=8`)
  return {
    props: {
      products: allProducts.data,
      page: +page,
      total: +allProducts.data.length
    }
  }
}
