const log = require('../log');

module.exports = exec => {
	exec('npm run lint', {
		encoding: 'utf8',
	});

	log.info('Project has been linted and passed the lint test.');
};
