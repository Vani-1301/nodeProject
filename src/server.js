const express = require('express');
const app = require('express')();
const bodyParser = require('body-parser')
import initWebRoute from "./routes/web"
import configViewEngine from './config/viewEngine'
// import testConnectdb from "./config/database";
const session = require('express-session');
const server = require('http').createServer(app);
const io = require('socket.io')(server);
// var flash = require('connect-flash');
const filestore = require("session-file-store")(session)
const cookieParser = require('cookie-parser')
// app.use(flash());
var passport = require('passport');
require('dotenv').config();
let port = process.env.PORT;
// app.use(passport.initialize());
// app.use(passport.session());

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cookieParser())
// app.use(session({
//     name: "session-id",
//     secret: 'secret',
//     resave: true,
//     saveUninitialized: true,
//     store: new filestore()
// }));
io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('chat chat', msg => {
        io.emit('init chat', msg);
    })
});
initWebRoute(app)
configViewEngine(app)
app.use((req, res) => {
    return res.render('404NotFound.ejs')
})
// testConnectdb()
server.listen(port, () => {
    console.log('Init port 1313');
});

