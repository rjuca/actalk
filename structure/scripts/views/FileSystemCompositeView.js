define(["marionette",
    "underscore",
    "collections/FileSystemCollection"], function (Mnt, _, FileSystemCollection) {
    return Mnt.CompositeView.extend({
        template: "#items",
        tagName: "li",
        className: "folder-icon",
        childViewContainer: ".subcategories",
        initialize: function (options) {
            _.extend(this, options);

			var children = this.model.get("children");

			if (_.isEmpty(this.collection) && !_.isEmpty(children)) {
				this.collection = new FileSystemCollection(children);
            } else {
				this.$el.removeClass('folder-icon').addClass('file-icon');
			}
        }
    });
});
