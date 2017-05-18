// ./pages/_document.js
import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const {html, head, errorHtml, chunks} = renderPage()
    const styles = flush()
    return { html, head, errorHtml, chunks, styles }
  }

  render () {
    return (
     <html>
       <Head>
        <style>{`body { margin: 0 } /* custom! */`}</style>
        <title>set by _document.js</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link rel="stylesheet" href="static/tachyons.min.css"/>

        <style type="text/css">
          {`
            @font-face {
                font-family: "ProFont";
                src: url("static/fonts/profontwindows-webfont.woff");
            }
            @font-face {
                font-family: "ProFont-NF";
                src: url("static/fonts/ProFont_IIx_Nerd_Font_Complete.ttf");
            }
            @media print {
              body {
                background-color: #fff;
                width: 400px;
                overflow: hidden;
                margin: 0 0;
                font-size: 100%;
              }
            }
            .rasterize.story.measure-narrow {
              font-smooth: never !important;
              -webkit-font-smoothing: none !important;
              -webkit-text-stroke: none !important;
              text-shadow: none !important;
              font-family: 'ProFont', monospace;
              font-weight: 400;
              width: 384px;
              max-width: 384px;
              margin: 0 0;
            }
            .rasterize.story textarea {
              -webkit-font-smoothing: none !important;
              -webkit-text-stroke-width: 0 !important;
              text-shadow: none !important;
              font-family: 'ProFont', monaco, monospace;
              font-size: 18px;
              line-height: 22px;
              font-weight: 400;
            }
          `}
        </style>

        <style type="text/css">
          {'body {background:blanchedalmond;}'}
         </style>
       </Head>

       <body className="custom_class">

         <Main />

         <NextScript />

       </body>
     </html>
    )
  }
}
