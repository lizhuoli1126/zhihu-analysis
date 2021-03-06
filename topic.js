var Sequelize = require('sequelize');
var sequelize = require('./db');
var Question = require('./question');
var config = require('./config');

var Topic = sequelize.define('topic', {
	name: Sequelize.STRING,
	count: {type: Sequelize.INTEGER, defaultValue: 0}
});

Topic.sync({force: config.debug});

module.exports = Topic;