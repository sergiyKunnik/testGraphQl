const mongoose = require('mongoose');
module.exports = mongoose.model('Category', mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    require: true
  },
}));
