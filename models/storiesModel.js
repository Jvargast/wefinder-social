const mongoose = require('mongoose')

const storySchema = new mongoose.Schema({
  user: {type: mongoose.Types.ObjectId, ref: 'user'},
  images: {
    type: Array,
    required: true,
  },
  content: {
    type: String,
    default: '',
  },
  timestamp: {
    type: Date,
    default: new Date(),
  },
});


module.exports = mongoose.model('story', storySchema)