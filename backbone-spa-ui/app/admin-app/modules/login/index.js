module.exports = (function () {
    'use strict';

    var LoginView = require('./views/loginView');
    var Module = require('appCommon/');

    var NavigationModule = Module.extend({
        name: 'login',
        layoutView: {
            constructor: LoginView,
            options: {}
        }
    })

    return LoginModule;

})();
