import React from 'react'
import Body from '../components/Body'
import Header from '../components/Header'
import {
  // GetStaticProps,
  // InferGetStaticPropsType,
  GetServerSideProps,
  InferGetServerSidePropsType
} from 'next'
import { api } from '../services/api'
import AWS from 'aws-sdk'

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
  url: string
}

export default function Home(
  props: Products
  // ): InferGetStaticPropsType<typeof getStaticProps> {
): InferGetServerSidePropsType<typeof getServerSideProps> {
  return (
    <>
      <Header />
      <Body
        products={props.products}
        page={props.page}
        total={props.total}
        url={props.url}
      />
    </>
  )
}

export const getImageFromS3 = (): string => {
  const S3 = new AWS.S3({
    credentials: {
      accessKeyId: process.env.ACCESS_KEY_ID,
      secretAccessKey: process.env.SECRET_ACCESS_KEY
    }
  })
  const photoID = Math.floor(Math.random() * (31 - 10 + 1) + 10)

  const signedURL = S3.getSignedUrl('getObject', {
    Bucket: 'bywanka',
    Key: `${photoID}.jpg`,
    Expires: 60
  })
  return signedURL
}

export const getServerSideProps: GetServerSideProps = async ({
  query: { page = 1 }
}) => {
  const allProducts = await api.get('products')
  const products = allProducts.data.map((product) => {
    return { ...product, url: getImageFromS3() }
  })
  const url = ''

  return {
    props: {
      products,
      page: +page,
      total: +allProducts.data.length,
      url
    }
  }
}

// export const getStaticProps: GetStaticProps = async () => {
//   const allProducts = await api.get('products')
//   const products = allProducts.data.map((product) => {
//     return { ...product, url: getImageFromS3() }
//   })
//   console.log(products)
//   const url = ''
//   const page = 1
//   return {
//     props: {
//       products,
//       page: +page,
//       total: +allProducts.data.length,
//       url
//     }
//   }
// }
