const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	regno: {
		type: String,
		unique: true,
		required: true
	},
	number: {
		type: String,
		unique: true
	},
	email: {
		type: String,
		unique: true,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	orgName: {
		type: String,
		required: true
	},
	domainName: {
		type: String,
		required: true
	},
	slot: {
		type: String,
	}
	// isAdmin: {
	// 	type: Boolean,
	// 	default: false
	// }
})

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;