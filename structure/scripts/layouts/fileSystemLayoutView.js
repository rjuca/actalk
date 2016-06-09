define(["marionette", "handlebars"],
	function(Marionette, Handlebars) {
		var FileSystemLayoutView = Marionette.LayoutView.extend({
			template: Handlebars.compile($("#global").html()),
			el: "body",
			regions: {
				header: "#header",
				content: "#content"
			}
		});
		return FileSystemLayoutView;
	}
);
