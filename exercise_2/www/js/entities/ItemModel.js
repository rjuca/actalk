var ItemModel = Backbone.Model.extend({  
  defaults: {
    //Generates a random number to be the data of this model.
    value: (Math.floor(Math.random() * 10) + 1)
  }
});
