const bcrypt = require('bcryptjs')
const { Sequelize, Model } = require('sequelize')
const { sequelize } = require('../../core/db')

class User extends Model {
    static async verifyAccountPassword(account, password) {
        const user = await User.findOne({
            where: {
                account
            }
        })
        if (!user) {
            throw new global.errs.NotFound('账号不存在')
        }
        const correct = bcrypt.compareSync(password, user.password)
        if (!correct) {
            throw new global.errs.AuthFailed('密码不正确')
        }
        return user
    }
    static async getUserByOpenid(openid) {
        const user = await User.findOne({
            where: {
                openid
            }
        })
        return user
    }
    static async registerByOpenid(openid) {
        return await User.create({
            openid
        })
    }
}

User.init({
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    account: {
        type: Sequelize.STRING(20),
        unique: true
    },
    password: {
        type: Sequelize.STRING,
        set(val) {
            const salt = bcrypt.genSaltSync(10)
            const psw = bcrypt.hashSync(val, salt)
            this.setDataValue('password', psw)
        }
    },
    phone_number: {
        type: Sequelize.STRING(11),
        unique: true
    },
    nickname: {
        type: Sequelize.STRING(7),
        unique: true
    },
}, {
    sequelize,
    tableName: 'user'
})
module.exports = {
    User
}