
// Don't like loading lib in every file? See next example please
const lib = require('../../../examples/__lib');

// Do not use the arrow function here, because
// we need to access "this" inside the function.
const fn = async function() {
	this.log(this.fnName, 'do something');

	await lib.wait();
};

module.exports = fn;
