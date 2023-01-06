'use strict';
const { Sequelize, DataTypes } = require('sequelize');

const db = require('../config/database');

let User = db.define('users', {
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    user: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nickname: {
        type: DataTypes.STRING,
        allowNull: true
    },
}, {
    // Other model options go here
});



// db.sync()
module.exports = User;
