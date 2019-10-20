const exec = require('child_process').execSync;
const lint = require('./frontend/lint');

lint(exec);
