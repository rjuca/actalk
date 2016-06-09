define( [ "marionette", "underscore", "mainLayoutView", "treeCollection", "rootView" ], function( Mnt, _, MainLayoutView, TreeCollection, RootView ) {
    var MainView = Mnt.ItemView.extend({
        template: false,
        initialize: function(options) {
            this.mainLayout = new MainLayoutView({
                el: this.el
            });
            this.mainLayout.render();
        },
        onRender: function() {
            var _this = this,
                rootView,
                treeCollection = new TreeCollection();

            var newCollection = [{
                        'id': 1001,
                        'name': 'funis',
                        'size': 'KB',
                        'children': true
                    }, {
                        'id': 1002,
                        'name': 'stipes',
                        'size': 'KB',
                        'children': true
                    }, {
                        'id': 1003,
                        'name': 'foliolum',
                        'size': 'KB',
                        'children': true
                    }, {
                        'id': 1004,
                        'name': 'caballus',
                        'size': 'KB',
                        'children': true
                    }]
            treeCollection.add(newCollection);

            rootView = new RootView({ collection: treeCollection });

            _this.mainLayout.content.show(rootView);
        }
    });
    return MainView;
});