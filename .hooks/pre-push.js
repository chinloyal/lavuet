const log = require('./log');
const branch = require('./general/branch');
const exec = require('child_process').execSync;

branch.checkName(exec);
branch.upToDate(exec);

log.success('Yuh code up, go through.');
