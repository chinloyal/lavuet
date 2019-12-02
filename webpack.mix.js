const mix = require('laravel-mix');
const path = require('path');
const { TsConfigPathsPlugin } = require('awesome-typescript-loader');
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin');

const ROOT = path.resolve(__dirname);

function root(args) {
	args = Array.prototype.slice.call(arguments, 0);
	return path.join.apply(path, [ROOT].concat(args));
}
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.webpackConfig({
	mode: process.env.NODE_ENV,
	plugins: [new VuetifyLoaderPlugin()],
	resolve: {
		alias: {
			vue$: 'vue/dist/vue.esm.js',
			$axios: root('node_modules/axios/index'),
			'@': root('resources/js'),
			axios: root('resources/js/utils/axios-configured'),
		},
		extensions: ['*', '.js', '.ts', '.tsx', '.vue', '.json'],
		plugins: [new TsConfigPathsPlugin()],
	},
});

mix.sass('resources/sass/app.scss', 'public/css');

mix.ts('resources/js/app.ts', 'public/js').extract(['vue', 'vuelidate']);

mix.copyDirectory('resources/img', 'public/img');

if (mix.inProduction()) {
	mix.sourceMaps();
	mix.version();
} else {
	// Uncomment if needed
	// mix.browserSync('http://localhost:8000');
}
