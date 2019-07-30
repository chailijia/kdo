
const kdo = require('../../../src');
const test03 = require('./03-[parameter]-{filename}');

const verify = (obj) => {
	return test03.verify(obj);
};

const run = async () => {

	// Kdo will requires all files (exclude hi.js) in the directory which
	// "./dir-x/test" relative to this file is located to be an object.

	const obj = kdo('./dir-x/test', {exclude: 'hi.js'});
	return obj;
};

const info = {verify, run};
module.exports = info;
