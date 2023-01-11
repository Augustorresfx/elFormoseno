// pages/_document.js


import { Html, Head, Main, NextScript } from 'next/document'


export default function Document() {
  return (
    <Html lang='es'>
      <Head />
      <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_G}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_G}', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
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