import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head lang="en">
          <meta
            content="Cobaltswap makes buying, selling and swapping FX seamless and affordable."
            name="description"
          />
          <meta
            content="Cobaltswap makes buying, selling and swapping FX seamless and affordable."
            property="og:description"
          />
          <meta content="Buy, Sell and Swap FX - CobaltSwap" property="og:title" />
          <meta content="https://www.cobaltswap.com/assets/social-media.png" property="og:image" />
          {/* bootstrap */}
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
            crossOrigin="anonymous"
          />
          {/* Bootstrap icons */}
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.3/font/bootstrap-icons.css"
          />
          {/* Google fonts */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          {/* <!-- JavaScript Bundle with Popper --> */}
          <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2"
            crossOrigin="anonymous"
            async
          ></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
