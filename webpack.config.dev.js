const baseConfig = require('./webpack.config.base');
const DefinePlugin = require('webpack/lib/DefinePlugin');

const define = new DefinePlugin({
    'process-env': {
        'NODE_ENV': JSON.stringify('development')
    }
});

baseConfig.plugins.push(define);
baseConfig.devtool = 'source-map';

module.exports = baseConfig;