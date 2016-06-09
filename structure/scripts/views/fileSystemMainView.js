define([
	"marionette",
	"underscore",
	"fileSystemLayoutView",
	"fileSystemHeaderView",
	"fileSystemRootView",
	"fileSystemCollection"
	],
	function(
		Marionette,
		_,
		FileSystemLayoutView,
		FileSystemHeaderView,
		FileSystemRootView,
		FileSystemCollection
	) {
		var FileSystemMainView = Marionette.ItemView.extend({
			template: false,
			initialize: function(options) {
				_.extend(this, options);
				this.mainLayout = new FileSystemLayoutView({
					el: this.el
				});
				this.mainLayout.render();
			},
			onRender: function() {
				var _this = this;
				var fileSystemCollection = new FileSystemCollection();
				this.mainLayout.header.show(new FileSystemHeaderView());
				fileSystemCollection.fetch({
					dataType: "jsonp",
					success: function(col, response) {
						var fileSystemRootView = new FileSystemRootView({
							collection: col
						});
						_this.mainLayout.content.show(fileSystemRootView);
					}
				});
			}
		});
		return FileSystemMainView;
	}
);
