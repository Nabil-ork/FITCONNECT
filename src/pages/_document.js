import { Html, Head, Main, NextScript } from 'next/document';


export default function Document() {
  return (
    <Html lang="en">
      <Head>
      </Head>
      <body>
        <div id='main-container'>
          <Main />
          <NextScript />
        </div>
      </body>
    </Html>
  );
}
