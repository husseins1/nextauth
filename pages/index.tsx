import { signIn, useSession } from "next-auth/react";
import Head from "next/head";

export default function Home() {
  const {data:session}= useSession()
  console.log(session);
  
  return (
    <div style={{ "background":"linear-gradient(0deg, rgba(0,0,0,0.9026961126247374) 0%, rgba(0,0,0,0.2976540958180147) 50%, rgba(0,0,0,0.9026961126247374) 100%),url(/netflix.jpg)"}} className="flex flex-col font-Montserrat items-center justify-center min-h-screen py-2 text-white bg-black">
      <Head>
        <title>Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center ">
        <h1 className="text-5xl max-w-lg font-medium mb-4">
          {session && session.user.name}
          Unlimited movies, TV shows, and more.
        </h1>
        <h2 className="text-2xl mb-4">Watch anywhere. Cancel anytime.</h2>
        <h3 className="font-extralight ">
          Ready to watch? Enter your email to create or restart your membership.
        </h3>
        <div className="flex lg:w-[700px] w-auto mt-8">
          <input placeholder="Email" type="text" className="p-4 bg-white flex-1 outline-0 
          text-gray-800
          " />
          <button onClick={()=>signIn()} className="p-4 text-white bg-red-500 hover:bg-opacity-90">Get Started <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block " viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
            <path fillRule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg></button>
        </div>
      </main>
    </div>
  );
}
