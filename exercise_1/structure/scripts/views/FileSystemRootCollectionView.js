define(["marionette",
    "views/FileSystemCompositeView"], function (Mnt, FileSystemCompositeView) {
    return Mnt.CollectionView.extend({
        childView: FileSystemCompositeView,
        tagName: 'ul'
    });
});