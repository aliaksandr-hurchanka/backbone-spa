module.exports = (function () {
    'use strict';

    var CustomView = require('appCommon/customView');
    var navigationViewTpl = require('tpl!../templates/navigation');

    var HeaderView = CustomView.extend({
        el: '#navigation',
        template: navigationViewTpl,
        initialize: function (options) {
            _.extend(this,options);
            this.render();
        },
        render: function () {
            this.$el.html(this.template);
            return this;
        }
    });

    return HeaderView;

})();
