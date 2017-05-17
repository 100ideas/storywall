#!/bin/bash

# OVERVIEW
#
# depending on rpi arch, pick appropriate unoffical phantomjs release
# https://github.com/fg2it/phantomjs-on-raspberry
#
# Are we on RPi, and if so, which architecture / model? rpi1 = armv6 (armel); rpi2 = armv7 (armhf?)
#
#  $ readelf -A /proc/self/exe | grep Tag_ABI_VFP_args
#
# If the Tag_ABI_VFP_args tag is found, then you're running on an armhf system.
# If nothing is returned, then it's armel.
#
# more info:
#  [1]: https://blogs.oracle.com/jtc/entry/is_it_armhf_or_armel
#  [2]: https://learn.adafruit.com/introducing-the-raspberry-pi-2-model-b?view=all#overview

# are we on a pi?
if [[ $(cat cpuinfo | grep 'ARMv') && $(cat cpuinfo | grep 'BCM') ]]; then

  # install phantomjs deps
  sudo apt-get install libfontconfig1 libfreetype6 libpng12-0

  if [ -z "`readelf -A /proc/self/exe | grep Tag_ABI_VFP_args`" ]; then
    # RPi 1 A, A+, B, or B+ (armv6 processor & distro)
    curl -o /tmp/phantomjs_2.1.1_armhf.deb -sSL https://github.com/fg2it/phantomjs-on-raspberry/releases/download/v2.1.1-wheezy-jessie-armv6/phantomjs_2.1.1_armhf.deb
    sudo dpkg -i /tmp/phantomjs_2.1.1_armhf.deb

  else
    # RPi 2 or higher (armhf... or potentially armv7?)
    sudo apt-get install libfontconfig1 libfreetype6 libpng12-0
    curl -o /tmp/phantomjs_2.1.1_armhf.deb -sSL https://github.com/fg2it/phantomjs-on-raspberry/releases/download/v2.1.1-wheezy-jessie/phantomjs_2.1.1_armhf.deb
    sudo dpkg -i /tmp/phantomjs_2.1.1_armhf.deb
  fi

elif [[ "$(uname -s)" =~ [Darwin|Linux|CYGWIN*|MINGW32*|MSYS*] ]]; then
  echo "ARCH: $(uname -s)"
  echo -e "\t'phantomjs-prebuilt' will be installed from stock repo via package.json"
  echo -e "\t...if not, download from http://phantomjs.org/download.html"
fi

# alternative strategy:
#   make phantomjs-prebuilt a required dep in package.json and then in this script
#   set npm_config_phantomjs_cdnurl="<arm repo download>" IFF we detect rpi.
#   phantomjs-prebuilt will switch to the other repo?
#     docs: https://github.com/Medium/phantomjs#deciding-where-to-get-phantomjs
