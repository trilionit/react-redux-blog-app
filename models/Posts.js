"use strict"
module.exports = function(sequelize, DataTypes) {
    const Posts = sequelize.define('Posts', {
        title:{type: DataTypes.STRING, allowNull: false, unique: true},
        story: DataTypes.TEXT,
        photo:DataTypes.STRING,
	    thumbnail:DataTypes.STRING
    });

    return Posts;
};