module.exports = (function(){
    'use strict'
    
    var Module = require('appCommon/');
    var AdminAppRouter = require('./router');
    var AdminAppView = require('./views/baseAdminView');
    var AdminNavigationModule = require('./modules/navigation/');
    var LoginModule = require('./modules/login/');
    var AdminContentModule = require('./modules/adminContent/');
    
    function init() {
        
        var startApp = function () {
            Backbone.history.start();
            console.log('history start');
        };

        Backbone.Events.on('start:app', startApp);
        
        var adminApp = new Module({
            name: 'adminApp',
            layoutView: {
                constructor: AdminAppView,
                options: {}
            },
            router: {
                constructor: AdminAppRouter,
                options: {}
            },
            modules: [
                {
                    module: LoginModule,
                    weight: 1
                },
                {
                    module: AdminNavigationModule,
                    weight: 2
                },
                {
                    module: AdminContentModule,
                    weight: 3
                }
            ]
        });
        
    };
    
    return init();
    
})();