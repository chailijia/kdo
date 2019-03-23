
const kdo = require('../../../lib');

let str = '';

const flow = {
	async f1() {
		str += 1;
	},

	async f2() {
		str += 2;
	},

	async f3() {
		str += 3;
	}
};

const verify = (value) => {
	return value === '231';
};

const run = async () => {

	const k = kdo.new();
	k.use(flow.f2);
	k.use(flow.f3);
	k.use(flow.f1);

	await k.do();
	return str;
};

const info = {verify, run};
module.exports = info;
