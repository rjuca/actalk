var ItemCollection = Backbone.Collection.extend({
    model: ItemModel,
    //comparator: 'value',
    fetch: function (size, autoSort) {
        //This function could be communicating with a service to fetch data, let's use some local data to make things simple
        // var newCollection = [], counter;
        // for (counter = 0; counter < size; counter++) {
        //     newCollection.push({
        //         value: Math.floor(Math.random() * 10) + 1
        //     })
        // }
        this.add([
            {
                "id": 1001,
                "name": "funis",
                "size": "KB",
                "children": true
            },
            {
                "id": 1002,
                "name": "stipes",
                "size": "KB"
            },
            {
                "id": 1003,
                "name": "foliolum",
                "size": "KB",
                "children": true
            },
            {
                "id": 1004,
                "name": "caballus",
                "size": "KB"
            }
        ]);
    }
});
