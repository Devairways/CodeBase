// initialize mongoose and strip off Schema function object
const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String
})

// create a model as 'users' with 'userSchema' parameters
mongoose.model('users', userSchema)