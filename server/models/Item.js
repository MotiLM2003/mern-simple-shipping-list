import mongoose from 'mongoose';

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

const Item = mongoose.model('Items', ItemSchema);

export default Item;
