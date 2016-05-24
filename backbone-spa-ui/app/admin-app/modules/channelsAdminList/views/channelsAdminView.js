'use strict'

module.exports = (function () {

    var CustomView = require('appCommon/customView');
    var ChannelsAdminCollection = require('../collection/channelsAdminCollection');
    var ChannelAdminTemplate = require('tpl!../templates/channels-admin-item');
    var ChannelsAdminTemplate = require('tpl!../templates/channels-admin-items');

    var ChannelsAdminView = CustomView.extend({
        el: '#admin-channels',
        template: ChannelsAdminTemplate,
        itemTemplate: ChannelAdminTemplate,
        initialize: function (options) {
            _.extend(this,options);
            this.collection = new ChannelsAdminCollection();
            this.listenTo(this.collection, 'sync', this.onCollectionSync);
            this.listenTo(this.collection, 'error', this.onCollectionError);
            this.on('render:complite', this.onRenderComplite, this);
            this.collection.fetch();
        },
        events: {
            'click .edit-link': 'clickEditLink'
        },
        clickEditLink: function (e) {
            //alert('Hello!')
            console.log(e)
        },
        onCollectionSync: function () {
            this.render();
            console.log('Render sync')
        },
        onCollectionError: function (model, xhr) {
            console.error(xhr.statusText + '! ' + xhr.responseText);
        },
        onRenderComplite: function () {
            //this.$el.html(this.template());
            var i = 0;
            this.collection.each(function (item) {
                console.log(item, ' ', i++);
                this.$el.find('#channels-admin-items')
                    .append(this.itemTemplate(item.toJSON()));
            }, this);
        },
        render: function () {
            this.$el.html(this.template());
            this.trigger('render:complite');
            return this;
        }
    });

    return ChannelsAdminView;

})();
