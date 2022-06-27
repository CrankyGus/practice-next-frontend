import { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import RegisterComponent from "../components/Register/Register";

const Register: NextPage = () => {
  return (
    <div className="h-[1000px]">
      <Head>
        <title>Treehub - Homepages</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <RegisterComponent />
    </div>
  );
};

export default Register;
