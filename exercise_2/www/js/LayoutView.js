var LayoutView = Marionette.LayoutView.extend({
    el: 'body',
    regions: {
        header: "#header",
        content: "#content"
    }
});

layout = new LayoutView();

layout.getRegion('content').show(new TreeView({
    collection: new ItemCollection([
        {
            "id": 1001,
            "name": "funis",
            "size": "KB",
            "children": true
        },
        {
            "id": 1002,
            "name": "stipes",
            "size": "KB"
        },
        {
            "id": 1003,
            "name": "foliolum",
            "size": "KB",
            "children": true
        },
        {
            "id": 1004,
            "name": "caballus",
            "size": "KB"
        }
    ])
}));
