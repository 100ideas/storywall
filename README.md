storyprinter
============
Simple application, overkill stack as a learning exercise: react + next.js + graphql (and rpi + thermal printer)

TODO
----
+ preinstall.sh to install armv7 phantomjs binaries on pi
+ printRender page
+ test phantomjs manually
- figure out simple rest API to trigger server rendering w/ phantonjs

notes
-----
- next v3.0beta
  - fixes trailing slash problem in urls ?
    - https://github.com/zeit/next.js/blob/v3-beta/lib/router/index.js#L100
  - how to use postcss + webpack + babel + next.config.js to load css
    - https://github.com/zeit/next.js/tree/v3-beta/examples/with-global-stylesheet
  - or wrap with styled-jsx
    - https://github.com/zeit/next.js/blob/v3-beta/examples/with-apollo/components/App.js



Thermal Printer Specs
---------------------
"Cashino" A2 Micro Pannel Thermal Printer -  [Adafruit](https://learn.adafruit.com/mini-thermal-receipt-printer?view=all)
- 8 dots/mm
- 384 dots/line (~203 DPI)
- effective printing width: 48mm
- paper type: 57.5± 0.5mm (effectively [ISO 216 C8](https://en.wikipedia.org/wiki/ISO_216#Dimensions_of_A.2C_B_and_C_Series) width-wise)
- paper roll max diameter: 39mm
- power: DC5V-9V
- interface: Serial(RS-232,TTL), Parallel
- [product sheet](http://www.adafruit.com/datasheets/cashino%20thermal%20printer%20a2.pdf), [user manual](https://cdn-shop.adafruit.com/datasheets/CSN-A2+User+Manual.pdf)
