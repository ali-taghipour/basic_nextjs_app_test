import Image from "next/image"
import Head from "next/head"

const Hello = () => {
  return (
    <>
      <Head>
        <title>Hello There :: My Blog</title>
        <meta property="og:title" content="Hello There :: My Blog"/>
      </Head>
      <article>
        <h1>
          Hello There!
        </h1>
        <Image src="/post/hello-there/coffee.jpg" width={640} height={427} />
        <p>Photo have taken by Ali Taghipour</p>
      </article>
    
    </>  
  )
}

export default Hello