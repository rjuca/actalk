define(["backbone", "underscore", "fileSystemModel"],
	function(Backbone, _, FileSystemModel){
		var fileSystemCollection = Backbone.Collection.extend({
			model: FileSystemModel,
			url: "http://www.mocky.io/v2/57348812110000d22eba0c18",
			parse: function(response) {
				return _.isEmpty(response.data) ? {} : response.data;
			}
		});
        return fileSystemCollection;
	}
);
