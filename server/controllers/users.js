const Users = require('../models/users');
const JWT = require('jsonwebtoken');
const { JWT_SECRET } = require('../configuration');

/*
1. getUsers     GET/users
2. getUsers     GET/users/:id
3. addUser      POST => /users
4. updateUser   PUT => /users/:id
5. deleteUser   DELETE => /users/:id
6. signUp       GET => /users/signup
7. signIn       
*/

const signToken = user => {
  return JWT.sign(
    {
      iss: 'wpcomtueiomcmi',
      sub: user._id,
      userId: user._id,
      iat: new Date().getTime(),
      exp: new Date().setDate(new Date().getDate() + 1)
    },
    JWT_SECRET
  );
};

module.exports = {
  getUsers: async (req, res) => {
    try {
      const users = await Users.find({}, '-__v');
      res.status(200).json(users);
    } catch (error) {
      res.send(error);
    }
  },

  getUser: async (req, res) => {
    try {
      const user = await Users.findById({ _id: req.params.userId }, '-__v');
      res.status(200).json(user);
    } catch (error) {
      res.send(error);
    }
  },

  signUp: async (req, res) => {
    const foundUser = await Users.findOne({ email: req.body.email });

    if (foundUser) {
      return res.status(201).json({ error: 'Email is already in use' });
    }

    const newUser = new Users(req.body);

    try {
      await newUser.save();
      const foundUser = await Users.findOne({ email: req.body.email });

      console.log(foundUser);
      const token = signToken(newUser);
      return res.status(200).json({ token, id: foundUser.id, message: 'Created successfully' });
    } catch (error) {
      res.send(error);
    }
  },

  signIn: async (req, res, next) => {
    if (!req.body.email) {
      return res.status(200).json({ message: 'Email id is mandatory' });
    }

    if (!req.body.password) {
      return res.status(200).json({ message: 'Password id is mandatory' });
    }

    try {
      const token = signToken(req.user);
      return res.status(200).json({ token, name: res.req.user.name.first });
    } catch (error) {}
  },

  secret: async (req, res, next) => {
    console.log('UsersController.secret() called');
  }
};
