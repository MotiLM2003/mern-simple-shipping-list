const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Create Schema

const ItemSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  Date: {
    type: Date,
    default: Date.now,
  },
});

const Item = mongoose.model('Items', Schema);

export default Item;
