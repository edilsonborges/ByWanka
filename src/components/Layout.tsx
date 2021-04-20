import Footer from './Footer'
import Header from './Header'
import Navbar from './Navbar'
import React from 'react'

export default function Layout({ children }) {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Navbar />
      <Header />
      {children}
      <Footer />
    </div>
  )
}
