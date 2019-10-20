//No Longer necessary

// const path = require('path');
// const { TsConfigPathsPlugin } = require('awesome-typescript-loader');
// const VueLoaderPlugin = require('vue-loader/lib/plugin');
// const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// const ROOT = path.resolve(__dirname);

// function root(args) {
//     args = Array.prototype.slice.call(arguments, 0);
//     return path.join.apply(path, [ROOT].concat(args));
// }

// const isDevelopment = (process.env.NODE_ENV == 'development');

// module.exports = {
//     mode: process.env.NODE_ENV,
//     entry: {
//         app: ['./resources/js/app.ts', './resources/sass/app.scss']
//     },
//     output: {
//         publicPath: './public',
//         path: path.resolve(__dirname, 'public'),
//         filename: isDevelopment ? 'js/[name].js' : 'js/[name].[hash].js',
//         chunkFilename: isDevelopment ? 'js/chunks/[id].js' : 'js/chunks/[id].[hash].js',
//     },
// 	module: {
// 		rules: [
//             {
//                 test: /\.tsx?$/,
//                 loader: 'ts-loader',
//                 options: {
//                     appendTsSuffixTo: [/\.vue$/]
//                 },
//                 exclude: /node_modules/,
//             },
// 			{
// 				test: /\.vue$/i,
// 				loader: 'vue-loader',
// 			},
// 			{
// 				test: /\.js$/i,
// 				exclude: /node_modules/,
// 				use: {
// 					loader: 'babel-loader',
// 				},
// 			},
// 			{
// 				test: /\.(sc|sa|c)ss$/i,
// 				use: [
//                     MiniCssExtractPlugin.loader,
//                     {
//                         loader: 'css-loader',
//                         options: {
//                             modules: true,
//                             sourceMap: isDevelopment
//                         }
//                     },
// 					{
// 						loader: 'sass-loader',
// 						options: {
// 							implementation: require('sass'),
//                             sassOptions: {
//                                 fiber: require('fibers'),
//                             },
//                             sourceMap: isDevelopment
// 						},
//                     },
// 				],
//             },
// 		],
//     },
//     plugins: [
//         new VueLoaderPlugin(),
//         new VuetifyLoaderPlugin(),
//         new MiniCssExtractPlugin({
//             filename: isDevelopment ? '[name].css' : '[name].[hash].css',
//             chunkFilename: isDevelopment ? '[id].css' : '[id].[hash].css',
//         }),
//     ],
//     resolve: {
//         alias: {
//             vue$: 'vue/dist/vue.esm.js',
//             $axios: root('node_modules/axios/index'),
//             '@': root('resources/js'),
//             axios: root('resources/js/utils/axios-configured')
//         },
//         extensions: ['*', '.js', '.ts', '.tsx', '.vue', '.json'],
//         plugins: [new TsConfigPathsPlugin()],
//     },
// };
