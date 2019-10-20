const log = require('../log');

exports.checkName = exec => {
	const regExp = /^(feature|hotfix|release|wip)\/[a-z-]+$/;
	const protectedBranches = ['master', 'develop'];
	const branchName = exec('git rev-parse --abbrev-ref HEAD', {
		encoding: 'utf8',
	}).trim();

	if (!protectedBranches.includes(branchName) && !regExp.test(branchName)) {
		log.error(
			'Your branch name is invalid, use the right naming convention.\n' +
				'Valid branch names start with feature/ | hotfix/ | release/ | wip/\n' +
				"and end with the name of the thing you're working on (optionally separated by a dash)\n" +
				'For example: feature/registration-validation (In all common letters)'
		);

		log.info(
			'To rename your branch use this command:\n' +
				'`git branch -m my-Silly-branchname feature/name-of-feature`'
		);

		process.exit(1);
	}
};

// Enforces every branch to be up to date with develop
exports.upToDate = exec => {
	const branchName = exec('git rev-parse --abbrev-ref HEAD', {
		encoding: 'utf8',
	}).trim();

	const fetch_current_updates = exec('git fetch', {
		encoding: 'utf-8',
	});

	const current_remote_develop_head = exec(
		'git rev-parse remotes/origin/develop',
		{
			encoding: 'utf-8',
		}
	);

	const branches_with_id = exec(
		`git branch --contains ${current_remote_develop_head}`,
		{
			encoding: 'utf-8',
		}
	);

	if (branches_with_id.includes(branchName)) {
		log.success('Your branch is up to date with develop');
	} else {
		log.error(
			'Your branch is not up to date with develop.\n' +
				'In order push need to have the latest changes of the develop branch on your branch\n' +
				'just run `git pull origin develop` and fix any potential merge conflicts.' +
				'Now try pushing again.'
		);

		process.exit(1);
	}
};
