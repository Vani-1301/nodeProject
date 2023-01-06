
import User from '../models/users'


let createUser = (email, user, nickname, password) => {
    return new Promise(async (resolve, reject) => {
        try {

            let newUser = await User.create({ email: email, user: user, nickname: nickname, password: password })

            await resolve(newUser)
        } catch (error) {
            reject(error)
        }
    })
}




module.exports = { createUser }