
const kdo = require('../../../src');
const test01 = require('./01-require-current-directory-to-be-an-object');

const verify = (obj) => {
	return test01.verify(obj);
};

const run = async () => {

	// Kdo will requires all files in the directory
	// which module.filename is located to be an object.

	// Note that this file self will not be required.

	const obj = kdo(module);
	return obj;
};

const info = {verify, run};
module.exports = info;
