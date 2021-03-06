import './assets/css/main.scss';

import 'font-awesome/css/font-awesome.min.css';

import 'font-awesome/fonts/FontAwesome.otf';
import 'font-awesome/fonts/fontawesome-webfont.eot';
import 'font-awesome/fonts/fontawesome-webfont.svg';
import 'font-awesome/fonts/fontawesome-webfont.ttf';
import 'font-awesome/fonts/fontawesome-webfont.woff';
import 'font-awesome/fonts/fontawesome-webfont.woff2';

import 'vizabi-ddfcsv-reader/dist/vizabi-ddfcsv-reader';
import 'vizabi-csv-reader/dist/vizabi-csv-reader';
import 'vizabi-excel-reader/dist/vizabi-excel-reader';
import 'vizabi-ddfservice-reader/dist/vizabi-ddfservice-reader';
import 'd3/dist/d3';
import 'mobx/lib/mobx.umd';

// require('url-search-params-polyfill');
import 'url-search-params-polyfill';

import './tools/*.pug';
//var requirePugTemplates = require.context('./tools', false, /\.pug$/);
//requirePugTemplates.keys().forEach(requirePugTemplates);

import '../node_modules/vizabi-config-systema_globalis/dist/*.json';
//var requireChartConfigs = require.context('../node_modules/vizabi-config-systema_globalis/dist', false, /\.json$/);
//requireChartConfigs.keys().forEach(requireChartConfigs);

//var requireJsAssets = require.context('./assets/js', true, /\.js$/);
//requireJsAssets.keys().forEach(requireJsAssets);

import urlon from 'urlon';
window.URLON = urlon;

//for ie11
import promise from 'promise';
if (!window.Promise) {
    //window.Promise = require('promise');
    window.Promise = promise;
}
