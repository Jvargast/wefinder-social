const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    startupName: {
        type: String,
        required: true,
        trim: true,
        maxlength: 25
    },
    username: {
        type: String,
        required: true,
        trim: true,
        maxlength: 25,
        unique: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    avatar:{
        type: String,
        default: 'https://res.cloudinary.com/devatchannel/image/upload/v1602752402/avatar/avatar_cugq40.png'
    },
    role: {type: String, default: 'user'},
    mobile: {type: String, default: ''},
    contactName: {type: String, default: ''},
    occupation: {type: String, default: ''},
    solutionArea: {type: String, default: ''},
    interest: {type: String, default: ''},
    story: {
        type: String, 
        default: '',
        maxlength: 200
    },
    
    followers: [{type: mongoose.Types.ObjectId, ref: 'user'}],
    following: [{type: mongoose.Types.ObjectId, ref: 'user'}],
    saved: [{type: mongoose.Types.ObjectId, ref: 'user'}]
}, {
    timestamps: true
})


module.exports = mongoose.model('user', userSchema)