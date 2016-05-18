module.exports = (function () {
    'use strict';

    var CustomView = require('appCommon/customView');
    var AdminAppTpl = require('tpl!../templates/admin-app-view');

    var TubeAppView = CustomView.extend({
        el: '#admin-app-view',
        template: AdminAppTpl,
        initialize: function (options) {
            _.extend(this,options);
            this.render();
        },
        render: function () {
            this.$el.html(this.template);
            return this;
        }
    });

    return TubeAppView;

})();
