import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";

export default function index() {
  return (
    <>
      <Head>
        <title>My Next App</title>
        <meta name="description" content="This is my Next.js app" />
      </Head>
      <Navbar />
      <div>index</div>
    </>
  );
}
