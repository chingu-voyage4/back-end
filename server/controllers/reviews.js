const Reviews = require('../models/reviews');
// const Items = require('../models/items');
const Users = require('../models/users');

module.exports = {
	getReviews: async (req, res) => {
		try {
			const reviews = await Reviews.find({}, '-__v').populate('item').populate('userId');
			res.status(200).json(reviews);
		} catch (error) {
			res.send(error);
		}
	},

	getReview: async (req, res) => {
		try {
			const review = await Reviews.findById({ _id: req.params.reviewId }, '-__v');
			await res.status(200).json(review);
		} catch (error) {
			res.send(error);
		}
	},

	addReview: async (req, res) => {
		if (!req.body.userId) {
			return res.status(200).json({ message: 'User id is mandatory' });
		}

		const newReview = new Reviews(req.body);

		console.log(newReview);

		try {
			const review = await newReview.save(); // wait for review to be saved
			const user = await Users.findOne({ _id: req.body.userId }); // find the user
			const reviewee = await Users.findOne({ _id: req.body.reviewee }); // find the reviewee

			user.reviews.push(review._id); // push review into user array
			reviewee.receivedReviews.push(review._id); // push receivedReview into user array
			await user.save(); // no need to wait for the save here as we dont use it after save
			await reviewee.save(); // no need to wait for the save here as we dont use it after save


			res.status(200).json({ review, message: 'Review added Successfully' });
		} catch (error) {
			throw new Error(error);
		}
		//////////////////////////
		// try {
		//     const review = await newReview.save();
		//     res.status(200).json({ review, message: 'Review added Successfully' });
		// } catch (error) {
		//     res.send(error);
		// }
	}
};
