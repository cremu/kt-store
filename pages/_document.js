import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang='is'>
        <Head>
          <link rel='preload' href='/fonts/Circular-Book.woff2' as='font' type='font/woff2' crossOrigin='anonymous' />
          <link rel='preload' href='/fonts/Circular-Light.woff2' as='font' type='font/woff2' crossOrigin='anonymous' />
          <link rel='preload' href='/fonts/PermanentMarker.woff2' as='font' type='font/woff2' crossOrigin='anonymous' />
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
