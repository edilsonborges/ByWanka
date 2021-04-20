import Footer from './Footer'
import Header from './Header'
import Navbar from './Navbar'
import React from 'react'
import Head from 'next/head'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>ByWanka</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="flex flex-col h-screen justify-between">
        <Header />
        {children}
        <Footer />
      </div>
    </>
  )
}
