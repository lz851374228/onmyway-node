const bcrypt = require('bcryptjs')
const { Sequelize, Model } = require('sequelize')
const { sequelize } = require('../../core/db')

class Shop extends Model { }

Shop.init({
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    shop_name: {
        type: Sequelize.STRING(7),
        unique: true
    },
    shop_logo: {
        type: Sequelize.STRING(255),
        unique: true
    },
    shop_address: {
        type: Sequelize.STRING(255),
    },
    shop_introduction: {
        type: Sequelize.STRING(255),
    },
}, {
    sequelize,
    tableName: 'shop'
})
module.exports = {
    Shop
}