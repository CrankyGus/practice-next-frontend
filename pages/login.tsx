import { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import LoginComponent from "../components/Login/Login";

const Login: NextPage = () => {
  return (
    <div className="h-[1000px]">
      <Head>
        <title>Treehub - Homepages</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <LoginComponent />
    </div>
  );
};

export default Login;
