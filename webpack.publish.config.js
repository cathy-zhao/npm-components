var path = require('path');
var webpack = require('webpack');

var config = {
    entry: path.resolve(__dirname, './main.js'),
    output: {
        path: path.resolve(__dirname, './lib'),
        library: 'h5-dumb-lib',
        libraryTarget: 'umd',
        filename: 'index.js'
    },
    devServer: {
        historyApiFallback: true
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ],
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        noParse: [],
        loaders: [
            {
                test: /\.js$|\.jsx$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.less$/,
                exclude: /node_modules/,
                loader: "style-loader!css-loader!less-loader"
            },
            {
                test: /.(svg|png|jpg|otf)$/,
                exclude: /node_modules/,
                loader: 'url-loader'
            }
        ]
    }
};

module.exports = config;
