'use strict';
module.exports = (function () {

    var ContentRouter = Backbone.Router.extend({
        routes: {
            'channel/:id/videos/:idVideo': 'showVideo',
            'channel/:id/videos': 'showListVideo',
            'channel/:id/about': 'showAboutChannel'
        },
        showVideo: function (id, idVideo) {
            Backbone.Events.trigger('details:load');
        },
        showListVideo: function (id) {
            Backbone.Events.trigger('videoList:load', false, {id: id});
            Backbone.Events.trigger('Channel:video', id, {id: id});
        },
        showAboutChannel: function (id) {
            Backbone.Events.trigger('aboutChannel:load', id, {id: id});
        }
    });

    return ContentRouter;

})();
