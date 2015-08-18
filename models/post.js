Post = new Meteor.Collection('posts');

Post.publish = function(message, name) {
	this.insert({
		message: message,
		date: new Date(),
		userId: Meteor.userId(),
		name: name
	});
};

Post.list = function(userId) {
	return this.find({userId: userId});
};