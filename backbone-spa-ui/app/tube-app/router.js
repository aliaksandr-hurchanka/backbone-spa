module.exports = (function () {
    'use strict';

    var AppRouter = Backbone.Router.extend({
        routes: {
            '': 'index',
//            '*actions': 'defaultAction'
        },
        initialize: function() {
            console.log('Initialize in AppRouter');
            //Backbone.Events.trigger('app:start');
        },
        index: function () {
            console.log('Index in AppRouter');
            Backbone.Events.trigger('page:home');
        },
        defaultAction: function (actions) {
            //this.navigate('#');
            //Backbone.Events.trigger('get:post');
            console.log('DefaultAction in AppRouter');
        }
    });

    return AppRouter;

})();
