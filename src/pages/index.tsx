import React from 'react'
import { signIn, signOut, useSession } from 'next-auth/client'
import Head from 'next/head'
import Body from '../components/Body'
import Layout from '../components/Layout'

const Home: React.FC = () => {
  const [session, loading] = useSession()
  return (
    <>
      <Head>
        <title>ByWanka</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Body />
      </Layout>
    </>
  )
}

export default Home
