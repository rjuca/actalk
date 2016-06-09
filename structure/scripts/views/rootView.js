define(["marionette", "handlebars", "treeView"],
  function(Mnt, Hbs, TreeView) {
    var RootView = Mnt.CollectionView.extend({
      childView: TreeView,
      tagName: "ul"
    });
    return RootView;
  }
);