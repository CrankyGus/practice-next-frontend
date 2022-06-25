import type { NextPage } from 'next'
import Head from 'next/head'
import Hero from '../components/Hero/Hero'
import Navbar from '../components/Navbar/Navbar'
import HomePage from '../components/Home/Home'

const Home: NextPage = () => {
  return (
    <div className="h-[1000px]">
      <Head>
        <title>Treehub - Homepages</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />
      <HomePage />
    </div>
  )
}

export default Home
