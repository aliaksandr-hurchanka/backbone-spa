var webpack = require('webpack');
//var ExtractTextPlugin = require('extract-text-webpack-plugin');
//var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
var path = require('path');
//var AngularPlugin = require('angular-webpack-plugin');

var ENV_DEV = process.env.NODE_ENV === 'Development';

module.exports = {
    context: __dirname,
    entry: {
        tube: path.resolve(__dirname, './js/tube-app/tube-app.js'),
        admin: path.resolve(__dirname, './js/admin-app/admin-app.js'),
        vendor: [
            'underscore',
            'backbone',
            'jquery',
            'bootstrap'
        ]
    },
    output: {
        path: path.resolve(__dirname, './build/scripts'),
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [
            { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,   loader: "url?limit=10000&mimetype=application/font-woff" },
            { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,  loader: "url?limit=10000&mimetype=application/font-woff" },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&mimetype=application/octet-stream" },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,    loader: "file" },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&mimetype=image/svg+xml" }
        ]
    },
    plugins: [

        new webpack.ProvidePlugin({
            _: 'underscore',
            Backbone: 'backbone',
            bootstrap: 'bootstrap',
            $:'jquery',
            jQuery:'jquery'
        })
    ],
    resolve: {
        root: path.resolve(__dirname, './js'),
        extensions: ['', '.js']
    },
    watch: ENV_DEV,
    watchOptions: {
        aggregateTimeout: 100
    },
    devtool: (ENV_DEV ? 'source-map' : null)
};

if (!ENV_DEV) {
    module.exports.plugins.push(new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        },
        mangle: false,
        exclude: /.\.min\.js$/i
    }));
}