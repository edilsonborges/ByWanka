import Head from 'next/head'
import React from 'react'
import { useStore } from '../store'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'
import Body from '../components/Body'

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <Body />
      </div>
      <Footer />
    </>
  )
}

export default Home
