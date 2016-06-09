define(['backbone', 'underscore', 'treeModel'], function(Backbone, _, TreeModel) {
    var TreeCollection = Backbone.Collection.extend({
        model: TreeModel,

        fetch: function(response) {
            var newCollection = [{
                        'id': 1001,
                        'name': 'funis',
                        'size': 'KB',
                        'children': true
                    }, {
                        'id': 1002,
                        'name': 'stipes',
                        'size': 'KB'
                    }, {
                        'id': 1003,
                        'name': 'foliolum',
                        'size': 'KB',
                        'children': true
                    }, {
                        'id': 1004,
                        'name': 'caballus',
                        'size': 'KB'
                    }]
            this.add(newCollection);
        }
    });
    return TreeCollection;
});