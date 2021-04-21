import React from 'react'
import { signIn, signOut, useSession } from 'next-auth/client'
import Body from '../components/Body'
import Header from '../components/Header'
import axios from 'axios'
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

type Products = {
  products: Product[]
}

export default function Home(
  props: Products
): InferGetServerSidePropsType<typeof getServerSideProps> {
  return (
    <>
      <Header />
      <Body products={props.products} />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await api.get('products')
  return {
    props: {
      products: response.data
    }
  }
}
