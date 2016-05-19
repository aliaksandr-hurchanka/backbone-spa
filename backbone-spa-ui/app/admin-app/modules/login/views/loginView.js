module.exports = (function () {
    'use strict';

    var CustomView = require('appCommon/customView');
    var loginViewTpl = require('tpl!../templates/login');
    //var router = require('../../../router.js');

    var LoginView = CustomView.extend({
        el: '#login',
        template: loginViewTpl,
        initialize: function (options) {
            _.extend(this,options);
            this.render();
        },
        events: {
            'click .btn-login': 'clickOpenDashboard'
        },
        clickOpenDashboard: function (event) {
            event.preventDefault();
            Backbone.history.navigate('dashboard', {
                trigger: true
            });
        },
        render: function () {
            this.$el.html(this.template);
            return this;
        }
    });

    return LoginView;

})();
