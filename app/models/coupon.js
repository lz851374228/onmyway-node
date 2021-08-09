const bcrypt = require('bcryptjs')
const { Sequelize, Model } = require('sequelize')
const { sequelize } = require('../../core/db')

class Coupon extends Model { }

Coupon.init({
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    coupon_name: {
        type: Sequelize.STRING(7),
        unique: true
    },
    coupon_type: {
        type: Sequelize.INTEGER(1),
        unique: true
    },
    start_time: {
        type: Sequelize.DATE(6),
    },
    end_time: {
        type: Sequelize.DATE(6),
    },
    remaining_quantity: {
        type: Sequelize.INTEGER(19)
    },
    use_requirements: {
        type: Sequelize.STRING(2)
    },
    belong_shop_id: {
        type: Sequelize.INTEGER
    },
}, {
    sequelize,
    tableName: 'coupon'
})
module.exports = {
    Coupon
}