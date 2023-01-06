import CRUDservice from '../service/CRUDservice'
const { Sequelize } = require('sequelize');
import User from '../models/users'
import sequelize from '../config/database';
const db = require('../config/database');
let homepage = async (req, res) => {
    return res.render('page.ejs')
}


let appMess = async (req, res) => {
    let user = await req.body.user;
    let password = await req.body.psw;
    const check = await User.findOne({
        where: {
            user: user,
            password: password
        },
        raw: true
    });
    if (check === null) {
        let data = 'User are not existent'
        return res.render('page.ejs', { data })
    } else {
        return res.render('view.ejs', { namename: check.nickname })
    }



}

let createUser = (req, res) => {
    return res.render('createUser.ejs')
}


let success = async (req, res) => {
    let email = await req.body.email;
    let user = await req.body.user;
    let nickname = await req.body.nickname;
    let password = await req.body.psw;
    let Exist = await User.findOne({
        where: { user: user },
        raw: true
    })

    if (!email || !user || !nickname || !password) {
        const data = 'Please fill all'
        return res.render('createUser.ejs', { data })
    }
    else if (Exist) {
        const data2 = 'User are existent'
        return res.render('createUser.ejs', { data2 })
    }
    else { CRUDservice.createUser(email, user, nickname, password) }
    return res.redirect('/home')
}


module.exports = {
    homepage, createUser, appMess, success
}