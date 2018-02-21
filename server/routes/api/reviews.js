const express = require('express');
const router = require('express-promise-router')();

const ReviewsController = require('../../controllers/reviews');

router
    .route('/')
    .get(ReviewsController.getReviews)
    .post(ReviewsController.addReview)
    .put(() => {})
    .delete(() => {});

router
    .route('/:reviewId')
    .get(ReviewsController.getReview)
    .post(() => {})
    .put(() => {})
    .delete(() => {});

module.exports = router;
