module.exports = (function () {
    'use strict';

    var AdminRouter = Backbone.Router.extend({
        routes: {
            '': 'administrator',
        },
        initialize: function () {
            console.log('Initialize in AdminRouter');
        },
        administrator: function () {
            console.log('Index in AdminRouter');
        }
    });

    return AdminRouter;

})();
