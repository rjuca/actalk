require.config({
    baseUrl: "scripts",
    paths: { 
        // library
        jquery: "lib/jquery-1.12.0",
    	underscore: "lib/underscore",
        backbone: "lib/backbone",
    	marionette: "lib/backbone.marionette",
        handlebars: "lib/handlebars-v4.0.5",
        // add files here
        fileApp: "fileApp",
        //myView: ".../myView",
    },
    shim: {
    	backbone: {
    		deps: ["jquery", "underscore"],
    		exports: "backbone"
    	}
    }
});
require(["backbone", "marionette", "fileApp"],
    function(Backbone, Mnt, App) {
        App.start();
    }
);