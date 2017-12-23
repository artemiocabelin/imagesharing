const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const Schema = mongoose.Schema

let UserSchema = new Schema({
    email: {
        type: String,
        required: [true, 'Email is required'],
        validate: {
          validator: ( value ) => {
            return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test( value );
          },
          message: "Please enter a valid Email"
        }
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [8, 'Last name must have at least 8 characters']
    },
    media: [{type : Schema.Types.ObjectId, ref: 'Media'}]
}, {timestamps : true})

// On save hook, encrypt password
// Before saving a model, run this function
UserSchema.pre('save', function(next) {
    // get access to the user model
    const user = this;

    // generate a salt then run callback
    bcrypt.genSalt(10, function(err, salt) {
        if (err) { return next(err); }

        // hash (encrypt) our password using the salt
        bcrypt.hash(user.password, salt, null, function(err, hash) {
            if (err) { return next(err); }

            // overwrite plain text password with encrypted password
            user.password = hash;
            next();
        })
    })
})

UserSchema.methods.comparePassword = function(candidatePassword, callback) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) { return callback(err); }

        callback(null, isMatch);
    });
}

const User = mongoose.model('User', UserSchema);