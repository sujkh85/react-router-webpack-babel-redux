var webpack = require('webpack');
var path = require('path');
var loaders = require('./webpack.loaders');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var WebpackCleanupPlugin = require('webpack-cleanup-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

loaders.push({
	test: /\.scss$/,
	loader: ExtractTextPlugin.extract('style', 'css?sourceMap&localIdentName=[local]___[hash:base64:5]!sass?outputStyle=expanded'),
	exclude: ['node_modules']
});

module.exports = {
	entry: {
		main:['./src/index.js','./index.scss']
	},
	output: {
		publicPath: './',
		path: path.join(__dirname, 'dist'),
		filename: '[name].bundle.js'
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders
	},
	plugins: [
		new WebpackCleanupPlugin(),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"production"'
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false,
				screw_ie8: true,
				drop_console: true,
				drop_debugger: true
			}
		}),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.optimize.DedupePlugin(),
	    new ExtractTextPlugin("style.css", {
		      allChunks: true
		}),
		new HtmlWebpackPlugin({
			template: './src/template.html',
			files: {
				css: ['style.css'],
				js: [ "bundle.js"],
			}
		}),
		new CopyWebpackPlugin([
            { from: './resources',to:'./resources' }
        ])
	]
};
