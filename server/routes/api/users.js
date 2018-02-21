const express = require('express');
const router = require('express-promise-router')();
const passport = require('passport');
const passportConf = require('../../passport');
const passportSignIn = passport.authenticate('local', { session: false });
const passportJwt = passport.authenticate('jwt', { session: false });

const UsersController = require('../../controllers/users');
const { validateBody, schemas, isAuthorized } = require('../../helpers/routehelpers.js');

router.route('/').get(UsersController.getUsers).put(() => { }).delete(() => { });

router.route('/signup').post(validateBody(schemas.authSchema), UsersController.signUp);

router.route('/signin').post(passportSignIn, UsersController.signIn);

router.route('/secret').get(passportJwt, UsersController.secret);

router
    .route('/:userId')
    .get(UsersController.getUser)
    .post(passportJwt, isAuthorized, UsersController.getUser)
    .put(() => { })
    .delete(() => { });

module.exports = router;
