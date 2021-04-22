import React from 'react'
import { Provider } from 'next-auth/client'
import '../../styles/main.css'
import Layout from '../components/Layout'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Provider session={pageProps.session}>
          <Component {...pageProps} />
        </Provider>
      </Layout>
    </>
  )
}
