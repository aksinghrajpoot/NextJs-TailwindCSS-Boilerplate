import Head from 'next/head'

export default function Home() {
  return <>
    <Head>
      <title>Welcome to Next.js with Tailwind</title>
      <meta name="description" content="Welcome to Next.js with Tailwind" />
      <link rel="icon" href="images/favicon.png" />
    </Head>

    <div className='flex flex-col bg-emerald-200 justify-center items-center h-screen'>
      <h2 className='font-serif text-3xl md:text-5xl font-bold text-center'>Welcome to <span className='text-emerald-800'>Next.js</span> with Tailwind</h2>
      <p className='text-lg font-semibold font-mono mt-4 text-center'>Let's have a cup of coffee ☕ </p>
    </div>

  </>
}
