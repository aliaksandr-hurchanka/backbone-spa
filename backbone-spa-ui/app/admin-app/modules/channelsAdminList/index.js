module.exports = (function () {
    'use strict';

    var Module = require('appCommon/');
    var ChannelsAdminView = require('./views/channelsAdminView')

    var ChannelsAdminModule = Module.extend({
        name: 'channelsAdmin',
        layoutView: {
            constructor: ChannelsAdminView,
            options: {}
        },
        switchable: true
    })


    return ChannelsAdminModule;

})();
