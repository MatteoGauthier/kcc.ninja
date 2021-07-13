import Document, { Html, Head, Main, NextScript } from "next/document"
import Script from "next/script"
class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <meta name="msapplication-config" content="/browserconfig.xml" />
          <meta name="msapplication-TileColor" content="#00003e" />
          <meta name="theme-color" content="#00003e" />
          <meta name="description" content="Looking for a DEX, a swaping platform on the Kucoin Community Chain ? Find out KCC dApps of your need :D" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-VPKNXPXVTQ"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
 							 function gtag(){dataLayer.push(arguments);}
 							 gtag('js', new Date());

 							 gtag('config', 'G-VPKNXPXVTQ');
								`,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
