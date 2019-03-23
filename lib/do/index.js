
const config = require('../config');
const options = require('../options');

const forModule = require('./forModule');
const execute = require('./execute');
const verify = require('./verify');

const fn = async (obj, args, opt) => {

	// try { // for debugging only

	let result;

	// If the obj is a Node.js module, then require the whole directory
	obj = forModule(obj);

	// Verify args and options
	({args, opt} = verify(args, opt));

	// Init config if needed, for the case:
	// const options = {
	//		kdo: {
	//			isPrintTree: true
	// 		}
	// }
	opt.kdo && config.set(opt.kdo);

	// Init options
	opt = await options.init(obj, opt);

	// Execute all methods in obj by assigned order
	result = await execute(obj, args, opt);

	return result;

	// } catch (e) { console.log(e) }
};

module.exports = fn;