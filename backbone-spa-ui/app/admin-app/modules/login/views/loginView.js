module.exports = (function () {
    'use strict';

    var CustomView = require('appCommon/customView');
    var loginViewTpl = require('tpl!../templates/login');

    var LoginView = CustomView.extend({
        el: '#login',
        template: loginViewTpl,
        initialize: function (options) {
            _.extend(this,options);
            this.render();
        },
        render: function () {
            this.$el.html(this.template);
            return this;
        }
    });

    return LoginView;

})();
