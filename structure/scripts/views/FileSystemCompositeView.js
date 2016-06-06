define(["marionette",
    "underscore",
    "collections/FileSystemCollection"], function (Mnt, _, FileSystemCollection) {
    return Mnt.CompositeView.extend({
        template: "#items",
        tagName: "li",
        childViewContainer: ".subcategories",
        initialize: function (options) {
            _.extend(this, options);
            if (_.isEmpty(this.collection)) {
                var children = this.model.get("children");
                this.collection = _.isEmpty(children) ? null : new FileSystemCollection(children)
            }
        },
        onRender: function () {

        }
    });
});