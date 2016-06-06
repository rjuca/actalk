define(["marionette",
        "views/LayoutView"],
    function (Mnt, LayoutView) {
        var app = new Mnt.Application();

        app.addRegions({
            body: "#app"
        });

        app.on("start", function () {
            app.body.show(new LayoutView());
        });
        return app;
    }
);
