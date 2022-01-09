import '../styles/globals.css'
import '../styles/index.css'
import { SessionProvider } from "next-auth/react"

function MyApp({ 
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}


  //Component, pageProps }) {
  //   return <Component {...pageProps} />
// }

export default MyApp
