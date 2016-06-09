define(["marionette"],
	function(Marionette) {
		var FileSystemHeaderView = Marionette.ItemView.extend({
			template: false,
			onRender: function() {
				this.$el.append("FileSystem");
			}
		});
		return FileSystemHeaderView;
	}
);