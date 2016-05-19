module.exports = (function () {
    'use strict';

    var AdminRouter = Backbone.Router.extend({
        routes: {
            '': 'login',
            'dashboard': 'loadDashboard'
        },
        initialize: function () {
            console.log('Initialize in Login form');
        },
        administrator: function () {
            console.log('Index in Login');
        },
        loadDashboard: function () {
            Backbone.Events.trigger('login:destroy');
            Backbone.Events.trigger('navigation:load');
            Backbone.Events.trigger('adminContent:load');
        }
    });

    return AdminRouter;

})();
