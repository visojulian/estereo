import Document, { Html, Head, Main, NextScript } from 'next/document';

class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="es-ES">
        <Head>
        </Head>
        <body>
          <Main />
          <NextScript />
          <script async src="https://platform.twitter.com/widgets.js"></script>
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
