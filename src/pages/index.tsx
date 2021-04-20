import React from 'react'
import { signIn, signOut, useSession } from 'next-auth/client'
import Body from '../components/Body'
import Layout from '../components/Layout'

const Home: React.FC = () => {
  const [session, loading] = useSession()
  return (
    <Layout>
      <Body />
    </Layout>
  )
}

export default Home
