
const kdo = require('../../src');

const expect = 42;

const flow = {
	async f1({a1, a2, a3}) {
		a1 === 1; // true

		// do something
		const x = a1 + 5; // 6
		a1 = 0;

		// save a1, x to arguments to let kdo
		// pass them to next functions, cool!
		this.save({a1, x});
	},

	async f2({a1, a2, x}) {
		a1 === 0; // true
		x === 6; // true
		a2 = x + 1;

		this.save({a2});
	},

	async f3({a2, x}) {
		a2 === 7; // true
		x === 6; // true

		return a2 * x;
	}
};

const fn = async () => {

	// initialize variables which will be passed to flow
	const args = {a1: 1, a2: 2, a3: 3};

	// execute all functions in flow via kdo
	const result = await kdo.do(flow, args);
	return result === expect;
};

module.exports = fn;
