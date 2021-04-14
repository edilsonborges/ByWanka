import React from 'react'
import { signIn, signOut, useSession } from 'next-auth/client'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'
import Body from '../components/Body'

const Home: React.FC = () => {
  const [session, loading] = useSession()
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="flex">
        {!session && (
          <>
            Not signed in <br />
            <button onClick={(): Promise<void> => signIn('auth0')}>
              Sign in
            </button>
          </>
        )}
        {session && (
          <>
            Signed in as {session.user.email} <br />
            <button onClick={(): Promise<void> => signOut('auth0')}>
              Sign out
            </button>
          </>
        )}
        <Sidebar />
        <Body />
      </div>
      <Footer />
    </>
  )
}

export default Home
