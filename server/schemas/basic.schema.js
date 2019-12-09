const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let Basic = new Schema({
    basic_name: {
        type: String
    },
    basic_description: {
        type: String
    },
    basic_number: {
        type: Number
    },
    basic_completed: {
        type: Boolean
    }
});

Basic.methods.toJSON = function() {
	var obj = this.toObject();
	delete obj.password;
	return obj;
}


module.exports = mongoose.model('Basic', Basic);