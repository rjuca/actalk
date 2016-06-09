var TreeAndLeafView = Marionette.CompositeView.extend({
    template: "#composite-template",
    //childView: DrawCompositeView,
    childViewContainer: "ul",
    tagName: 'li',
    //el: '.container',
    events: {
        'click span': 'getData'
    },
    initialize: function (options) {
        this.collection = new ItemCollection();
    },
    onRender: function () {
        $(this.$el).addClass('collapsed');
    },
    getData: function (e) {
        e.preventDefault();
        e.stopPropagation();

        if (this.model.get('children') && $(this.$el).hasClass('collapsed')) {
            $(this.$el).removeClass('collapsed').addClass('expanded');
            this.collection.fetch();
        } else {
            $(this.$el).removeClass('expanded').addClass('collapsed');
            this.collection.remove(this.collection.models);
        }

    }
    //sort: false,
    //reorderOnSort: true,
    // viewComparator: 'value',
    // sortData: function (e) {
    //     this.reorder();
    // }


});
