"use strict"
module.exports = function(sequelize, DataTypes) {
    const Users = sequelize.define('users', {
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
	    email:{type: DataTypes.STRING, allowNull: false},
		password:{type: DataTypes.STRING, allowNull:false},
		address: DataTypes.STRING,
		city: DataTypes.STRING,
		state: DataTypes.STRING,
		zipCode: DataTypes.STRING,
		phone: DataTypes.STRING,
		status: DataTypes.STRING
    });

    return Users;
};