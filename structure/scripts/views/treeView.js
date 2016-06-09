define(["marionette", "handlebars", "underscore", "treeCollection"],
    function(Mnt, Hbs, _, TreeCollection) {
        var TreeView = Mnt.CompositeView.extend({
            template: Hbs.compile($("#item").html()),

            tagName: "li",

            childViewContainer: ".subcategories",

            events: {
                'click .folder-icon': 'toggleFolder'
            },

            initialize: function(options) {
                this.collection = new TreeCollection();
            },

            onRender: function() {
                this.$(".subcategories:first").sortable({
                    axis: "y"
                });
            },

            toggleFolder: function( e ) {
                e.stopPropagation();
                if ( !this.$el.hasClass('expanded')) {
                  this.collection.fetch();
                  this.$el.addClass('expanded');
                } else {
                  this.collection.remove(this.collection.models);
                  this.$el.removeClass('expanded');
                }
                
            }
        });
        return TreeView;
    }
    );