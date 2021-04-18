import React from 'react'
import { Provider } from 'next-auth/client'
import '../../styles/main.css'

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
