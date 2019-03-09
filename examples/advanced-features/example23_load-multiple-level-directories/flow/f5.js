
// Do not use the arrow function here, because
// we need to access "this" inside the function.
const fn = async function({a1, a2, a3}) {
	this.return = a1;
	this.log('this.return = a1');
};

module.exports = fn;
