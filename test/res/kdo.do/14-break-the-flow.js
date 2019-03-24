
const kdo = require('../../../lib');
const lib = require('../../../test/__lib');

const flow = {
	async f1({a1}) {
		return 'break';
	},

	async f2({a2}) {
		this.args.a2 = 5;
	},

	async f3({a3}) {
		this.args.a3 = 6;
	}
};

const verify = (args) => {
	const compareTo = {a1: 1, a2: 2, a3: 3};
	return lib.isValueEqual(args, compareTo);
};

const run = async () => {
	const args = {a1: 1, a2: 2, a3: 3};

	// make kdo to return all of the values of arguments.
	const options = {return: 'all'};

	await kdo.do(flow, args, options);
	return args;
};

const info = {verify, run};
module.exports = info;