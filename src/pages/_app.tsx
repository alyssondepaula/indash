//import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import GlobalStyles from '../../styles/GlobalStyles'
import { MenuBar } from '../components/MenuBar';
import { RightBar } from '../components/RightBar';

import { storeWrapper } from "../store";

function MyApp({ Component, pageProps }: AppProps) {
  return <>
  
  <GlobalStyles/>
  <div style={{ display: 'flex', flexDirection: 'row', width: '100vw', height: '100vh'}}>
  <MenuBar/>
  <Component {...pageProps}/>
  <RightBar/>
  </div>
 
  </>
}

export default storeWrapper.withRedux(MyApp);