define(["marionette", "handlebars", "underscore", "fileSystemCollection"],
	function(Marionette, Handlebars, _, FileSystemCollection) {
		var FileSystemTreeView = Marionette.CompositeView.extend({
			template: Handlebars.compile($("#item").html()),
			tagName: "li",
			childViewContainer: ".subcategories",
			initialize: function(options) {
				_.extend(this, options);
				if (_.isEmpty(this.collection)) {
					var children = this.model.get("children");
					this.collection = _.isEmpty(children) ? null : new FileSystemCollection(children);
				}
			},
			onRender: function() {
				this.$(".subcategories:first").sortable({
					axis: "y"
				});
			}
		});
		return FileSystemTreeView;
	}
);