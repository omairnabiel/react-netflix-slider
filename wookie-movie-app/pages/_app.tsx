import {AppProps} from "next/app"
import { RecoilRoot } from "recoil"

// components
import Header from "../components/header/Header"

import '../styles/globals.css'

function WookieApp({ Component, pageProps }: AppProps) {
  return <RecoilRoot> 
    <Header heading="Wookies Movies"/>

    <Component {...pageProps} />
    </RecoilRoot>
}

export default WookieApp
