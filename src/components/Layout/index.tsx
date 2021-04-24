import React from 'react'
import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>ByWanka</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="flex flex-col justify-between overflow-y-auto content-area">
        {children}
        <Footer />
      </div>
    </>
  )
}
