module.exports = (function () {
    'use strict';

    var TubeAppView = require('./views/baseTubeAppView');
    var AppRouter = require('./router');
    var HeaderModule = require('./modules/header');
    var SideBarModule = require('./modules/sidebar/');
    var ContentModule = require('./modules/content/');
    var SearchModule = require('./modules/search/');

    var Module = require('../common/module');

    function init() {

        var app = new Module({
            name:'app',
            layoutView: {
                constructor: TubeAppView,
                options: { onLoadEvent: 'app:loaded' }
            },
            router: {
                constructor: AppRouter,
                options: {}
            },
            modules: [
                {
                    module: HeaderModule,
                    weight: 1
                },
                {
                    module: SideBarModule,
                    weight: 3
                },
                {
                    module: SearchModule,
                    weight: 2
                },
                {
                    module: ContentModule,
                    weight: 2
                }
            ],
        });

        console.log(app);
        //setTimeout(function(){console.log(app)}, 5000);
        Backbone.history.start();
        // Backbone.history.start({pushState: true, root: '/'});
    };

    return init();

})();
