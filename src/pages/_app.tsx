import React from 'react'
import { Provider } from 'next-auth/client'
import '../../styles/main.css'
import Layout from '../components/Layout'
import { AppProps } from 'next/app'

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
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
