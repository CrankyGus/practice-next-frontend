import type { NextPage } from 'next'
import Head from 'next/head'
import Hero from '../components/Hero/Hero'
import Navbar from '../components/Navbar/Navbar'


const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <Hero/>
     
    </div>
  )
}

export default Home
