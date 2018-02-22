const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  title: String,
  description: String,
  imageUrl: String,
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  phones: {
    cell: String,
    landline: String
  },
  location: {
    country: String,
    city: String,
    streetName: String,
    streetNumber: Number,
    lat: Number,
    lng: Number
  },
  publishDate: Number,
  lastUpdate: String,
  subCategoryId: String,
  price: Number,
  isActive: Boolean
});

const item = mongoose.model('item', ItemSchema);

module.exports = item;
