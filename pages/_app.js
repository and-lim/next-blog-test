import '../styles/globals.css'
import Nav from '../components/Nav'
import Head from 'next/head'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Next Blog</title>
      </Head>
      <div className="">
        <Nav />
        <main>
          <Component {...pageProps} />
        </main>
        <Footer/>
      </div>
    </>
  )
}

export default MyApp
