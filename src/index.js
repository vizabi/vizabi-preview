import './assets/css/main.scss';

import 'font-awesome/css/font-awesome.min.css';

import 'font-awesome/fonts/FontAwesome.otf';
import 'font-awesome/fonts/fontawesome-webfont.eot';
import 'font-awesome/fonts/fontawesome-webfont.svg';
import 'font-awesome/fonts/fontawesome-webfont.ttf';
import 'font-awesome/fonts/fontawesome-webfont.woff';
import 'font-awesome/fonts/fontawesome-webfont.woff2';

import 'vizabi-ddfcsv-reader/dist/vizabi-ddfcsv-reader';
import 'vizabi-ws-reader/dist/vizabi-ws-reader-web';
import 'vizabi-csv-reader/dist/vizabi-csv-reader';
import 'vizabi-excel-reader/dist/vizabi-excel-reader';
import 'd3/build/d3';

require('url-search-params-polyfill');

var requirePugTemplates = require.context('./tools', false, /\.pug$/);
requirePugTemplates.keys().forEach(requirePugTemplates);

var requireChartConfigs = require.context('vizabi-config-systema_globalis/dist', false, /\.json$/);
requireChartConfigs.keys().forEach(requireChartConfigs);

var requireJsAssets = require.context('./assets/js', true, /\.js$/);
requireJsAssets.keys().forEach(requireJsAssets);

//for ie11
if (!window.Promise) window.Promise = require('promise');