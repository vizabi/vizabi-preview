/* eslint-disable no-undef */
const path = require("path");

//import babel from "rollup-plugin-babel";
import {eslint} from "rollup-plugin-eslint";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import replace from "rollup-plugin-replace";
import {terser} from "rollup-plugin-terser";
import sass from "rollup-plugin-sass";
import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";
import json from "rollup-plugin-json";
import visualizer from "rollup-plugin-visualizer";
import trash from "rollup-plugin-delete";
import copy from "rollup-plugin-copy";
import pug from 'rollup-plugin-pug';
import url from 'rollup-plugin-url';
import {plugin as globImport} from 'rollup-plugin-glob-import';

import * as meta from "./package.json";

const pugEmitAssets = (plugin) => {
  const pluginTransform = plugin.transform;

  plugin.transform = function(code, id) {
    const result = pluginTransform(code, id);
    if (result !== null) {
      const name = /\/([\w\.-]+)\.pug$/;
      this.emitFile({
        type: 'asset',
        source: JSON.parse(result.code.slice(15, -2)),
        fileName: name.exec(id)[1] + ".html"
      })
      result.dependencies && result.dependencies.forEach(this.addWatchFile);
      return {
        code: "export default 'default'",
        map: null
      };
    }
    return;
  }
  return plugin;
}
const jsonEmitAssets = (plugin) => {
  const pluginTransform = plugin.transform;

  plugin.transform = function(code, id) {
    const result = pluginTransform(code, id);
    if (result !== null) {
      const name = /\/([\w\.-]+)\.json$/;
      this.emitFile({
        type: 'asset',
        source: "var VIZABI_MODEL = " + result.code.slice(15),
        fileName: "assets/js/toolconfigs/" + name.exec(id)[1] + ".js"
      })
      result.dependencies && result.dependencies.forEach(this.addWatchFile);
      return {
        code: "export default 'default'",
        map: null
      };
    }
    return;
  }
  return plugin;
}

const copyright = `// ${meta.homepage} v${meta.version} Copyright ${(new Date).getFullYear()} ${meta.author.name}`;
const __PROD__ = process.env.NODE_ENV === 'production';

const preview = {
  input: {"preview":"src/index.js"},
  output: {
    name: "preview",
    dir: "build",
    format: "umd",
    banner: copyright,
    sourcemap: true
  },
  plugins: [
    (process.env.NODE_ENV === "production" && trash({
      targets: ['build/*', '!build/vizabi*/**']
    })),
    copy({
      targets: [
        { src: "src/assets/js", dest: "build/assets" },
        { src: "src/data", dest: "build" },
      ],
      verbose: true
    }),
    resolve(),
    commonjs(),
    globImport({
      format: 'import'
    }),
    (process.env.NODE_ENV === "production" && eslint()),
    // babel({
    // exclude: "node_modules/**"
    // }),
    pugEmitAssets(pug({
      doctype: 'js',
      pretty: true,
      staticPattern: /\S/
    })),
    jsonEmitAssets(json({
      namedExports:false,
      indent: '  '
    })),
    url({
      limit: 0,
      fileName: "vendor/[dirname][name][extname]",
      include: [
        "**/*.css",
        /\.(otf|eot|svg|ttf|woff2?)$/,
      ],
      destDir: "build/assets"
    }),
    url({
      limit: 0,
      fileName: "vendor/js/[name]/[name][extname]",
      include: [
        /(d3|mobx\.umd|web|reader)\.js$/,
      ],
      destDir: "build/assets"
    }),
    sass({
      output: "build/assets/css/main.css",
    }),
    replace({
      ENV: JSON.stringify(process.env.NODE_ENV || "development")
    }),
    (process.env.NODE_ENV === "production" && terser({output: {preamble: copyright}})),
    (process.env.NODE_ENV === "devserver" && serve("build")),
    (process.env.NODE_ENV === "devserver" && livereload("build")),
    visualizer({
      filename: "./build/stats.html"
    }),
  ]

}

const getRollupConfig = (pkg) => require(`${pkg}/rollup.external`)(path.resolve(__dirname, 'build', pkg));
const dependencies = !__PROD__ ? require('./packages').map(getRollupConfig) : [];

export default [preview, ...(dependencies.flat())];
