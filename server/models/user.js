import mongoose from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide the name']
  },
  securitycode:{
    type: String,
    required:[true, 'Security code is required']
  },
  email: {
    type: String,
    required:[true, 'Please provide email'],
    validate: [validator.isEmail, 'Please provide correct email'],
    unique:[true, 'This email already exists']
  },
  password:{
    type: String,
    required:[true, 'Please provide password'],
    minlength: 8,
    select: false
  },
  passwordConfirm:{
    type: String,
    required:[true, "Please confirm password"],
    validate: {
      // This works only on CREATE or SAVE
      validator: function(el){
        return el === this.password;
      },
      message: "Password didn't match"
    },
    
  }
});

userSchema.methods.correctPassword = async function(candidatePassword , userPassword){
   return await bcrypt.compare(candidatePassword, userPassword);
}
userSchema.pre('save', async function(next){
  if(!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 12);
  this.passwordConfirm = undefined;
  next();
})

const User = mongoose.model('User', userSchema);
export default User;