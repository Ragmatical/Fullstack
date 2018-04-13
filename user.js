var mongoose = require('mongoose');

var model = mongoose.model('user', new mongoose.Schema({
	username: {type: String, unique: true}
	, email: {type: String, unique: true}
	, password: {type: String}
  , age: {type: String}
  , phone: {type: String}
  , name: {type: String}
  , hobby: {type: String}
  , salt: {type: String}
}));

exports.getModel = function() {
	return model;
}
