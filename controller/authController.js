const jwt = require('jsonwebtoken') ;
const User = require('./../models/user');


const signToken = id => {
  return jwt.sign({
    id
  }, process.env.SECRET, {
    expiresIn: '90d'
  })
}

export const signup = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    const token = signToken(newUser._id);

    res.status(201).json({
      message: "Success",
      token,
      data: {
        user: newUser
      }
    })
  } catch (err) {
    res.status(500).json({
      message: "Failure",
      error: err
    })
  }
};

export const login = async (req, res, next) => {
  try {
    const {
      email,
      password
    } = req.body;

    if (!email || !password) {
      return next(new Error("Please provide email and password"));
    }
    const user = await User.findOne({
      email
    }).select('+password');

    if (!user || !(await user.correctPassword(password, user.password))) {
      console.log('inside')
      return next(new Error("Incorrect email or password"));
    }
    const token = signToken(user._id);

    res.status(200).json({
      status: "Success",
      token
    })
  } catch (error) {
    res.status(500).json({
      message: 'Faliure',
      error
    });
  }
};