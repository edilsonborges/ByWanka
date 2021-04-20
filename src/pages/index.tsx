import React from 'react'
import { signIn, signOut, useSession } from 'next-auth/client'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'
import Body from '../components/Body'
import Upload from '../components/Upload'
import Header from '../components/Header'

const Home: React.FC = () => {
  const [session, loading] = useSession()
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      {/* <Header /> */}
      <Body />
      <Footer />
    </>
  )
}

export default Home
