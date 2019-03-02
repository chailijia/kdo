
const convertStringToArray = (str) => {

	if (Array.isArray(str)) return str;
	if (typeof str !== 'string') return str;

	// Single line string
	if (!/[\r\n]/.test(str)) return [str];

	// Multiple-line string, like the following:
	// `
	//		f1 // comment
	//		f2 // /* comment */
	// `
	str = str
		.replace(/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/mg, '') // strip comments
		.replace(/\s+/mg, ' ') // remove redundant spaces
		.replace(/,/g, '') // remove commas
		.replace(/(^\s)|(\s$)/g, '') // remove leading and trailing spaces
	;

	return str.split(' ');
};

const me = {
	convertOrderStringToArray({options}, next) {
		options.order = convertStringToArray(options.order);
		next();
	},

	convertFirstStringToArray({options}, next) {
		options.first = convertStringToArray(options.first);
		next();
	},

	convertLastStringToArray({options}, next) {
		options.last = convertStringToArray(options.last);
		next();
	},

	convertExcludeStringToArray({options}, next) {
		options.exclude = convertStringToArray(options.exclude);
		next();
	},

	fetchDefaultOrderFromObjIfNoOrder({options, obj}, next) {
		options.order = options.order || Object.keys(obj);
		next();
	}
};

module.exports = me;