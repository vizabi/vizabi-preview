#!/usr/bin/env bash

(cd ../vizabi; npm run build:prod)
(cd ../vizabi-barrankchart; npm run build)
(cd ../vizabi-bubblechart; npm run build)
(cd ../vizabi-mountainchart; npm run build)
(cd ../vizabi-linechart; npm run build)
(cd ../vizabi-cartogram; npm run build)
(cd ../vizabi-popbyage; npm run build)
(cd ../vizabi-extapimap; npm run build)
(cd ../vizabi-bubblemap; npm run build)
(cd ../vizabi-barchart-ds; npm run build)
(cd ../vizabi-preview)
