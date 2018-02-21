const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
    title: String,
    content: String,
    rating: Number,
    date: String,
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    reviewee: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true
    }
});

const review = mongoose.model('review', ReviewSchema);

module.exports = review;
