const baseConfig = require('./webpack.config.base');
const ParallelUglify = require('webpack-parallel-uglify-plugin');
const DefinePlugin = require('webpack/lib/DefinePlugin');

const minify = new ParallelUglify({
    sourceMap: false,
    cacheDir: './.tmp/uglify',
    test: /\.js(\?|$)/i
});

const define = new DefinePlugin({
    'process-env': {
        'NODE_ENV': JSON.stringify('production')
    }
});

baseConfig.plugins.push(minify, define);
baseConfig.devtool = 'source-map';

module.exports = baseConfig;