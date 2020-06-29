// user model dec
// DEFINE USE CASE
// IMPORT ANY REQ'D LIBS
'use strict';
const bcrypt = require('bcryptjs')
// DEC USER MODEL FORMAT
module.exports = function(sequelize,DataTypes) {
    //define user object
    const user = sequelize.define('user', {
        email: {
            type: DataTypes.STRING,
            validate: {
                isEmail: {
                    msg: 'Invalid email address'
                }
            }
        },
        name: {
            type: DataTypes.STRING,
            validate: {
                len: {
                    args: [1,99],
                    msg: 'Name must be between 1 and 99 characters'
                }
            }
        },
        password: {
            type: DataTypes.STRING,
            validate: {
                len: {
                    args: [8,99],
                    msg: 'Password must be between 8 and 99 characters.'
                }
            }
        }
    }, {
        hooks: {
            //before record creation
            beforeCreate: function(createdUser, options) {
                if (createdUser && createdUser.password) {
                    let hash = bcrypt.hashSync(createdUser.password, 12);
                    createdUser.password = hash'
                }
            }
            //take inputed password
            //hash password
            // return new pw as pw for new record
        }
    })
    user.associate = function(models) {
        // associations go here
    }

    user.prototype.validPassword = function(passwordTyped) {
        return bcrypt.compareSync(passwordTyped, this.password)
    }

    // remove password before any serialization of user object
    user.prototype.toJSON = function() {
        let userData = this.get();
        delete userData.password;
        return userData;
    }

    return user;
}

