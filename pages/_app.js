import '@app/styles/globals.css'
import '@app/styles/sass/main.scss'
import '@app/styles/sass/base/index.scss' 

import Navbar from '@app/src/components/navbar.components.js'

 

export default function App({ Component, pageProps }) {
  // return <Component {...pageProps} />
return(
  <div className={'app-main bg-fixed bg-white w-full min-h-screen'}>

  <Navbar logo="/apple.png" />
  <main className={'pt-30'}>
  <Component {...pageProps} /> 
  </main>
  </div>

)

}




