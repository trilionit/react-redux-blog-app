"use strict"
module.exports = function(sequelize, DataTypes) {
    const Comments = sequelize.define('comments', {
        text: DataTypes.TEXT,
        status: DataTypes.INTEGER
    });

    return Comments;
};
