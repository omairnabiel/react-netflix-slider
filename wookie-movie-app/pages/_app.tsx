import {AppProps} from "next/app"

import '../styles/globals.css'

function WookieApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />

}

export default WookieApp
