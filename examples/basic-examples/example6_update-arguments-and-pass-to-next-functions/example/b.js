
const lib = require('../lib');

const fn = async ({a1, a2, a3}) => {
	await lib.do(module);

	// The a2 and a3 has new value
	lib.log(a1, a2, a3); // 1, 4, 5
};

module.exports = fn;