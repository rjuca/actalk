define(["marionette", "handlebars"], function(Mnt, Hbs) {
    var MainLayoutView = Mnt.LayoutView.extend({
        template: Hbs.compile($("#global").html()),
        el: "body",
        regions: {
            header: "#header",
            content: "#content"
        }
    });
    return MainLayoutView;
});