import React from 'react'
import { Provider } from 'next-auth/client'
import '../../styles/main.css'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
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

export default MyApp
