var TreeView = Marionette.CollectionView.extend({
      template: '#collection-template',
      tagName: "ul",
      childView: TreeAndLeafView
  });
