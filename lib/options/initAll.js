
const requireDirectory = require('rir');
const fs = require('fs');
const path = require('path');
const config = require('../config');
const convertStringToArray = require('./convertStringToArray');

const me = {
	initOptions({opt}, next) {

		// If the opt is a string or an array, then it's order
		if (typeof opt === 'string' || Array.isArray(opt)) {
			opt = {order: opt};
		}

		next({opt});
	},

	saveLidDirNameToOptions({opt}, next) {
		opt.libDirName = config.getLibDirName();

		next();
	},

	convertSortingRulesStringToArray({opt}, next) {
		opt.order = convertStringToArray(opt.order);
		opt.first = convertStringToArray(opt.first);
		opt.last = convertStringToArray(opt.last);
		opt.exclude = convertStringToArray(opt.exclude);

		next();
	},

	fetchDefaultOrderFromObjIfNoOrder({opt, obj}, next) {
		if (!opt.order) {
			const order = Object.keys(obj);
			const libDirName = opt.libDirName;

			opt.order = order.filter(el => el !== '__moduleFilename' && el !== libDirName);
		}

		next();
	},

	attachLibDirNameToExclude({opt}, next) {
		if (opt.libDirName) {
			const exclude = opt.exclude || [];
			const libDirName = opt.libDirName;

			exclude.push(libDirName);
			opt.exclude = exclude;
		}

		next();
	},

	loadLibIfNeeded({opt, obj}, next) {
		const libDirName = opt.libDirName;
		const moduleFilename = obj.__moduleFilename;

		if (!opt.lib && libDirName && moduleFilename) {
			const dirName = path.dirname(moduleFilename);
			const dirPath = path.resolve(dirName, './' + libDirName);

			if (fs.existsSync(dirPath)) {

				// Use {filename} to simulate a node.js Module
				// Attach "/." to specify a directory
				opt.lib = requireDirectory({filename: dirPath + '/.'});
			}
		}

		next();
	}
};

module.exports = me;