import '../styles/global.scss'
import type { AppProps } from 'next/app';
import Head from "next/head";
// Components
import Layout from '@components/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
          <title>Lista de usuarios</title>
          <meta name="Lista de usuario" content="Lista de usuarios por: Angelo Gaona" />
          <link rel="icon" href="/favicon.png" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp;