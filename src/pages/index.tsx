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
        <title>ByWanka</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col h-screen justify-between">
        <Navbar />
        <Header />
        <Body />
        <Footer />
      </div>
    </>
  )
}

export default Home
