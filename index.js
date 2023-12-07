const express = require('express');
const mysql = require('mysql');
const dotenv = require('dotenv');
const tokens = require('./token');

dotenv.config();

const app = express();
const hostname = process.env.HOSTNAME || 'localhost';
const port = process.env.PORT || 8080;
const protocol = process.env.PROTOCOL || 'http'; 

app.listen(port, hostname, (err) => {
    if(err) throw err;
    console.log(`Started server at (${protocol}://${hostname}:${port})`);
});

app.set('view engine', 'ejs');
app.set('/views', './views');

/* ROUTE HANDLERS {START} */

app.get('/:route/:token/:verfier', (req, res) => {
    let route = req.params.route;
    let token = req.params.token;
    let verifier = req.params.verfier;

    let isValidToken = tokens.verifyToken(token);
    let isValidVerifier = tokens.checkVerifier(verifier);

    if(isValidToken && isValidVerifier){
        res.redirect(`/${route}/${token}`);
    }else{
        res.status(498).send('<h1>Invalid Token</h1>');
    }
});

/* ROUTE HANDLERS {END} */

app.get('/', (req, res) => {
    let token = tokens.generateToken();
    res.redirect(`/main/${token.token}/${token.verifier}`);
});

app.get('/main/:token', (req, res) => {
    let token = req.params.token;
    res.render('home', { token: token});
});