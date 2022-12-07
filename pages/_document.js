// pages/_document.js


import { Html, Head, Main, NextScript } from 'next/document'


export default function Document() {
  return (
    <Html lang='es'>
      <Head />
      <title>El Formoseño</title>
      <link href='https://fonts.googleapis.com/css?family=Merriweather' rel='stylesheet'></link>
      <body>
        {/* 👇 Here's the script */}
   
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}