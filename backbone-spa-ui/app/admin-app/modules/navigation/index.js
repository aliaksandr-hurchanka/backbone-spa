module.exports = (function () {
    'use strict';

    var NavigationView = require('./views/navigationView');
    var Module = require('appCommon/');

    var NavigationModule = Module.extend({
        name: 'navigation',
        layoutView: {
            constructor: NavigationView,
            options: {}
        }
    })

    return NavigationModule;

})();
