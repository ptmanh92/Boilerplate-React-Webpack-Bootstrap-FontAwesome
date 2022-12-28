const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const devMode = process.env.NODE_ENV !== "production";
// require("dotenv").config();

module.exports = {
	entry: path.resolve(__dirname, "src", "js", "index.js"),
	module: {
		rules: [
			{
				// Load Babel for modern JS
				test: /\.(jsx|js)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						configFile: path.resolve(__dirname, "conf", "babel.config.json"),
					},
				},
			},
			{
				// Load SASS
				test: /\.(sa|sc|c)ss$/,
				use: [
					MiniCssExtractPlugin.loader,
					{ loader: "css-loader", options: { url: false, sourceMap: true } },
					{
						loader: "postcss-loader",
						options: {
							sourceMap: true,
							postcssOptions: {
								config: path.resolve(__dirname, "conf", "postcss.config.js"),
							},
						},
					},
					{ loader: "sass-loader", options: { sourceMap: true } },
				],
			},
			// {
			// 	test: /\.(jpe?g|png|gif|svg|webp)$/i,
			// 	type: "asset/resource",
			// },
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, "views", "index.html"),
			// inject: "body", // Put js files in <body> instead of <head>
		}),
		new MiniCssExtractPlugin({
			filename: "style.css",
		}),
		new CopyWebpackPlugin({
			patterns: [
				{
					from: "src/assets",
					to: "assets",
				},
			],
		}),
	],
	resolve: {
		extensions: [".js", ".jsx"],
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "app.js",
	},
	stats: {
		errorDetails: "auto",
	},
	devServer: {
		port: 9000,
		client: {
			progress: true,
		},
		// headers: {
		// 	"Access-Control-Allow-Origin": "*",
		// 	"Access-Control-Allow-Methods": "*",
		// 	"Access-Control-Allow-Headers": "*",
		// 	"Access-Control-Allow-Private-Network": "true"
		// },
		// allowedHosts: ["all"],
	},
};
