const chalk = require('../node_modules/chalk');
const emoji = require('../node_modules/node-emoji');

exports.error = message => {
	console.log(
		chalk.red(emoji.get('rotating_light')),
		chalk.red(emoji.get('rotating_light')),
		chalk.bold.white.bgRed('ERROR'),
		chalk.red(emoji.get('rotating_light')),
		chalk.red(emoji.get('rotating_light'))
	);
	console.log(chalk.bold.red(message));
};

exports.success = message => {
	console.log(chalk.bold.white.bgGreen('SUCCESS'), emoji.get('thumbsup'));
	console.log(chalk.bold.green(message));
};

exports.info = message => {
	console.log(
		chalk.bold.white.bgBlue('INFO'),
		emoji.get('information_source')
	);
	console.log(chalk.bold.blue(message));
};
