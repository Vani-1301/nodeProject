import express, { Router } from 'express';
import homecontroller from '../controllers/homcontroller'
const router = express.Router()

let initWebRoute = (app) => {
    router.get('/home', homecontroller.homepage)
    router.post('/home', homecontroller.appMess)
    router.get('/create', homecontroller.createUser)
    router.post('/create', homecontroller.success)

    return app.use('/', router)
}

module.exports = initWebRoute;