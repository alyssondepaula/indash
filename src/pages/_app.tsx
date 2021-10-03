//import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import GlobalStyles from '../../styles/GlobalStyles'

import { storeWrapper } from "../store";

function MyApp({ Component, pageProps }: AppProps) {
  return <>
  
  <GlobalStyles/>
  <Component {...pageProps}/>
 
  </>
}

export default storeWrapper.withRedux(MyApp);