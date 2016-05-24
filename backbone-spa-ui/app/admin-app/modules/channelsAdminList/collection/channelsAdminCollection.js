'use strict'

module.exports = (function () {
    var channelsAdminModel = require('../model/channelsAdminModel');

    var channelsAdminCollection = Backbone.Collection.extend({
        model: channelsAdminModel,
        url: '/channels'
    });

    return channelsAdminCollection;
})();
