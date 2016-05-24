module.exports = (function () {
    'use strict';

    var Module = require('appCommon/');
    var AdminContentView = require('./views/adminContentView')
    var ChannelsAdminModule = require('../channelsAdminList')

    var AdminContentModule = Module.extend({
        name: 'adminContent',
        layoutView: {
            constructor: AdminContentView,
            options: {}
        },
        modules: [
             {
                 module: ChannelsAdminModule,
                 weight: 8
             }
         ],
        switchable: true
    })


    return AdminContentModule;

})();
