define([
    'jquery',
    'backbone',
    'yandex_php/examples/Disk/js/application/views/directory'
], function (
    $,
    Backbone,
    DirectoryView
    ) {
    return Backbone.Router.extend({
        'routes': {
            '': 'index',
            'directory/*path': 'directory'
        },
        'index': function () {
            application.views.directoryView = application.views.directoryView || new DirectoryView();
            application.views.directoryView.render('/');
        }
    });
});
