module.exports = (function(){
	'use strict'

	var Module = require('appCommon/');
	var AboutChannelView = require('./views/about-channel-view');

	var AboutChannelModule = Module.extend({
		name: 'aboutChannel',
		layoutView: {
			constructor: AboutChannelView,
			options: {}
		},
		switchable: true
	})

	return AboutChannelModule;

})();
