module.exports = (function () {
    'use strict';

    var LoginView = require('./views/loginView');
    var Module = require('appCommon/');

    var LoginModule = Module.extend({
        name: 'login',
        layoutView: {
            constructor: LoginView,
            options: {}
        },
        switchable: false
    })

    return LoginModule;

})();
