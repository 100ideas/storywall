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


Thermal Printer Technical Resources
-----------------------------------
- [Adafruit: Mini Thermal Receipt Printer Overview](https://learn.adafruit.com/mini-thermal-receipt-printer?view=all)
- [Adafruit: Thermal Printer + pi "instant camera"](https://learn.adafruit.com/instant-camera-using-raspberry-pi-and-thermal-printer?view=all)
- [**adafruit/Python-Thermal-Printer**: ](https://github.com/adafruit/Python-Thermal-Printer)
  > "# This is a Python library for the Adafruit Thermal Printer. These printers use TTL serial to communicate, 2 pins are required. IMPORTANT: On 3.3V systems (e.g. Raspberry Pi), use a 10K resistor on the RX pin (TX on the printer, green wire), or simply leave unconnected."
- [**adafruit/zj-58**: CUPS filter for thermal printer Zjiang ZJ-58](https://github.com/adafruit/zj-58)
- [**xseignard/thermalPrinter**: Use node.js to communicate with Adafruit/Sparkfun Thermal Printer](https://github.com/xseignard/thermalPrinter)
- [pbm2lwxl - A driver for the Dymo/CoStar/Avery Label printers](http://web.archive.org/web/20101021114259/http://www.freelabs.com/~whitis/software/pbm2lwxl/) (questionable utility?)
  > "pbm2lwxl is a device driver for the CoStar Labelwriter XL and compatible printers. It takes plain (not raw) pbm files. The PBM file format was popularized by the PBM (aka netbpm, pbmplus, etc) utilities by Jef Poskanzer. There are utilities to convert from almost any image format to PBM/PPM/PGM/PNM, and vice versa. Ghostscript supports pbm output."


Provisioning Pi (WiP)
---------------------
Hopefully this works...

```
sudo mkdir /opt/thermprint; chown pi:www-data /opt/thermprint; cd /opt/thermprint
git clone https://github.com/adafruit/zj-58.git; cd zj-58
sudo apt-get install libcups2-dev libcupsimage2-dev g++ cups cups-client
```
