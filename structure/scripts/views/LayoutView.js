define(["marionette",
    "collections/FileSystemCollection",
    "views/FileSystemRootCollectionView"], function (Mnt, FileSystemCollection, FileSystemRootCollectionView) {
    return Mnt.LayoutView.extend({
        template: '#mainTemplate',
        regions: {
            main: '#content'
        },
        onRender: function () {
            var that = this;

            var fileSystemCollection = new FileSystemCollection();

            fileSystemCollection.fetch({
                dataType: 'jsonp',
                success: function (collection, response) {
                    that.main.show(
                        new FileSystemRootCollectionView({
                            collection: collection
                        })
                    );
                }
            })
        }
    });
});