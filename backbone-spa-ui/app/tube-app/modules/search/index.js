module.exports = (function () {
    'use strict';

    var SearchView = require('./views/searchView');
    var Module = require('../../../common/module');

    var SearchModule = Module.extend({
        name: 'search',
        view: {
            constructor: SearchView,
            options: {}
        }
    })

    return SearchModule;

})();
