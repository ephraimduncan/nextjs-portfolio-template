import Head from "next/head";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <Hero />
      </main>

      {/* <footer className="flex items-center justify-center w-full h-24">
        footer
      </footer> */}
    </div>
  );
}
