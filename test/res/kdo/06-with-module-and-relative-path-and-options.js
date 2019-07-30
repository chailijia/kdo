
const kdo = require('../../../src');

const verify = (obj) => {
	return (
		typeof obj.ok === 'string' &&
		typeof obj.hi === 'undefined' &&

	true);
};

const run = async () => {

	// Kdo will requires all files (exclude hi.js) in the directory which "./dir-x/test"
	// relative to this file is located to be an object.

	const relativePath = './dir-x/test';
	const options = {exclude: 'hi.js'};
	const obj = kdo(module, relativePath, options);

	return obj;
};

const info = {verify, run};
module.exports = info;
