define(["marionette", "mainView"], function ( Mnt, MainView) {
    var app = new Mnt.Application();

	app.addRegions({
		body: "body"
	});

	app.on("start", function() {
        var mainView = new MainView();
        this.body.show(mainView);
	});

	return app;
	}
);
