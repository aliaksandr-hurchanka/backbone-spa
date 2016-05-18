module.exports = (function(){
    'use strict'
    
    var Module = require('appCommon/');
    var AdminAppRouter = require('./router');
    var AdminAppView = require('./views/baseAdminView');
    var AdminNavigationModule = require('./modules/navigation/');
    
    function init() {
        
        var adminApp = new Module({
            name: 'adminApp',
            layoutView: {
                constructor: AdminAppView,
                options: {}
            },
            modules: [
                {
                    module: AdminNavigationModule,
                    weight: 1
                }
            ]
        });
        
    };
    
    return init();
    
})();