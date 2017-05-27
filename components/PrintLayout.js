import Head from 'next/head'

export default ({ children, title = 'default title' }) => (
<div className="printlayout" >
  <Head>
    <title>storyprinter: print view</title>
    <meta charSet='utf-8' />
    <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    <link rel="stylesheet" href="static/tachyons.css"/>
    <link rel="stylesheet" href="static/react-toolbox/theme.css"/>
    <style type="text/css">
      {`
        @font-face {
            font-family: "PixelOperator";
            src: url("static/fonts/PixelOperator.ttf");
        }
        @font-face {
            font-family: "PixelOperator";
            src: url("static/fonts/PixelOperator-Bold.ttf");
            font-weight: bold;
        }
        @font-face {
            font-family: "PixelOperator8";
            src: url("static/fonts/PixelOperator8.ttf");
        }
        @font-face {
            font-family: "PixelOperator8";
            src: url("static/fonts/PixelOperator8-Bold.ttf");
            font-weight: bold;
        }
        @font-face {
            font-family: "Grixel";
            src: url("static/fonts/Acme_9_Regular.ttf");
        }
        @font-face {
            font-family: "Grixel";
            src: url("static/fonts/Acme_9_Regular_Bold.ttf");
            font-weight: bold;
        }
        @font-face {
            font-family: "ProFont";
            src: url("static/fonts/profontwindows-webfont.woff");
        }
        @font-face {
            font-family: "ProFont-NF";
            src: url("static/fonts/ProFont_IIx_Nerd_Font_Complete.ttf");
        }
        @media screen, print {
          body {
            background-color: #fff;
            width: 400px;
            overflow: hidden;
            margin: 0 0;
            font-size: 100%;
          }
          .story.measure-narrow {
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
          .story textarea {
            -webkit-font-smoothing: none !important;
            -webkit-text-stroke-width: 0 !important;
            text-shadow: none !important;
            font-family: 'ProFont', monaco, monospace;
            font-size: 18px;
            line-height: 22px;
            font-weight: 400;
          }
        }
      `}
      {/*

        https://nerdfonts.com/
        understanding freetype glyph sizing https://www.freetype.org/freetype2/docs/glyphs/glyphs-2.html
        - profont has bitmaps at 7,9,10,12,14,18 and 24pt
        - Pixel Operator (16px glyph, 54 char measure)
        - Pixel Operator8 (8px glyph, 53 char measure; 12px glyph, 27 char measure)
        - PF Tempesta Seven Condensed Regular
        - (display) Grixel Acme 9 Regular Bold
      */}
        {/* @media print {
          body {background-color: #fff;}
          .story.measure-narrow {
            max-width: 384px;
          }
        }       */}
    </style>
  </Head>

    { children }

</div>
)
