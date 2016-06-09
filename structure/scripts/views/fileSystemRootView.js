define(["marionette", "handlebars", "fileSystemTreeView"],
	function(Marionette, Handlebars, FileSystemTreeView) {
        Handlebars.registerHelper("addFileSystemStyle", function(context, options) {
	    	var lastLevelOption = $("#topography-level option:last").val(),
	    		bufferSpace = 350;
	    	if (!isNaN(lastLevelOption)) {
	    		bufferSpace = (parseInt(lastLevelOption) * 25) + 25;
	    	}
	    	var leftPadding = this.level * 25,
	    		rightPadding = bufferSpace - leftPadding;
			return "padding: 0 " + rightPadding + "px 0 " + leftPadding + "px";
		});
		var FileSystemRootView = Marionette.CollectionView.extend({
			childView: FileSystemTreeView,
			tagName: "ul"
		});
		return FileSystemRootView;
	}
);
