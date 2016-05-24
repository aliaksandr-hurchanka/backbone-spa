module.exports = (function () {
    'use strict';

    var CustomView = require('appCommon/customView');
    var AdminContentTpl = require('tpl!../templates/admin-content.tpl');
    
    var AdminContentView = CustomView.extend({
        el: '#page',
        template: AdminContentTpl,
        initialize: function (options) {
            _.extend(this,options);
            this.render();
        },
        render: function () {
            this.$el.html(this.template);
            Backbone.Events.trigger('channelsAdmin:load');
            return this;
        }
    });
    
    return AdminContentView;
    
})();