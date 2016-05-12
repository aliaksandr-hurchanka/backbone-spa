module.exports = (function() {
    'use strict';

    var CustomView = require('appCommon/customView');
    var AboutChannelModel = require('../model/aboutChannelModel');
    var aboutChannelTemplate = require('tpl!../templates/about');

	var AboutChannelView = CustomView.extend({
        el: '#article',
        template: aboutChannelTemplate,
        initialize: function (options) {
        	_.extend(this, options);
            this.model = new AboutChannelModel();
            this.listenTo(this.model, 'sync', this.onModelSync);
            this.listenTo(this.model, 'error', this.onModelError);
            this.model.fetch({
                url: Backbone.history.fragment,
            });
        },
        onModelSync: function () {
            this.render();
        },
        onModelError: function (model, xhr) {
            console.error(xhr.statusText + '! ' + xhr.responseText);
        },
        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }
    });

    return AboutChannelView;
    
})();
