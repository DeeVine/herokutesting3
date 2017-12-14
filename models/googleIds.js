var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var GoogleIdsSchema = new Schema({
  // `title` is required and of type String
  goName: {
    type: String,
  },
  // `link` is required and of type String
  goPlaceId: {
    type: String,
    unique: true,
  }
});

// This creates our model from the above schema, using mongoose's model method
var GoogleIds = mongoose.model("GoogleIds", GoogleIdsSchema);

// Export the Article model
module.exports = GoogleIds;