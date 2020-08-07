import React from "react";
import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";

class MyDocument extends Document {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render(): JSX.Element {
    return (
      <Html lang="ja">
        <Head>
          {/* google analytics */}
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-171594157-1"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'UA-171594157-1');
              `,
            }}
          />
          {/* twitter */}
          <script
            async
            src="https://platform.twitter.com/widgets.js"
            charSet="utf-8"
          />
          {/* hatena */}
          <script
            async
            type="text/javascript"
            src="https://b.st-hatena.com/js/bookmark_button.js"
            charSet="utf-8"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
