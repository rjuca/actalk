require.config({
    baseUrl: "scripts",
    paths: { 
        // library
        jquery: "lib/jquery-1.12.0",
    	underscore: "lib/underscore",
        backbone: "lib/backbone",
    	marionette: "lib/backbone.marionette",
        handlebars: "lib/handlebars-v4.0.5",
        jqueryUi: "lib/jquery-ui",
        // add files here
        fileApp: "fileApp",
        mainView: "views/mainView",
        rootView: "views/rootView",
        treeView: "views/treeView",
        mainLayoutView: "layouts/mainLayoutView",
        treeModel: "models/treeModel",
        treeCollection: "collections/treeCollection"
    },
    shim: {
    	backbone: {
    		deps: ["jquery", "underscore", "jqueryUi"],
    		exports: "backbone"
    	}
    }
});
require(["backbone", "marionette", "fileApp"],
    function(Backbone, Mnt, App) {
        App.start();
    }
);