import webpack from 'webpack';
import path from 'path';
import autoprefixer from 'autoprefixer';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin ({name: 'common', minChunks: 2});
var extractTextPlugin = new ExtractTextPlugin("[name].css")

export default {
    plugins: [commonsPlugin, extractTextPlugin],

    entry: {
        "demo": './demo/demo.jsx',
    },

    output: {
        path: './dist/scripts',
        filename: '[name].js',
        publicPath: '/dist/scripts'
    },

    module: {
        loaders: [
            {test: /\.jsx?$/,    exclude: /node_modules/, loader: 'babel-loader'},
            {test: /\.less$/, exclude: /node_modules/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")},
            {test: /.(svg|png|jpg|otf)$/, exclude: /node_modules/, loader: 'url-loader'}
        ]
    },

    postcss: [
        autoprefixer({
          browsers: ['last 3 versions', '> 1%']
        })
    ],

    resolve: {
        extensions: ['', '.js', '.jsx', '.less', '.css']
    }
};
