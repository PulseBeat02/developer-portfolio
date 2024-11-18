import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  const meta = {
    title: "Brandon Li",
    description: "Brandon Li's Developer Portfolio",
    image: './images/icon.webp'
  }
  return (
    <Html lang="en">
        <Head>
            <meta name="robots" content="follow, index"/>
            <meta name="description" content={meta.description}/>
            <meta property="og:site_name" content={meta.title}/>
            <meta property="og:description" content={meta.description}/>
            <meta property="og:title" content={meta.title}/>
            <meta property="og:image" content={meta.image}/>
            <link rel="icon" href={meta.image}/>
        </Head>
        <body>
        <Main/>
        <NextScript/>
        </body>
    </Html>
  )
}
