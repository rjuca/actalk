define(["backbone", "underscore", "models/FileSystemModel"], function (Backbone, _, FileSystemModel) {
    return Backbone.Collection.extend({
        model: FileSystemModel,
        url: 'http://www.mocky.io/v2/57348812110000d22eba0c18',
        parse: function (response) {
            return _.isEmpty(response.data) ? {} : response.data
        }
    });
});
