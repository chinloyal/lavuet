/*
	Run from package.json preinstall script
*/
const log = require('../log');

// Enforces the use of npm
if (process.env.npm_execpath.match(/yarn/)) {
	log.error('Use npm to install your packages, not yarn.');

	process.exit(1);
}
