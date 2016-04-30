define(["marionette"],
	function (Mnt) {
		var app = new Mnt.Application();
		app.addRegions({
			body: "body"
		});
		app.on("start", function() {
			Backbone.history.start();
		});
		return app;
	}
);
