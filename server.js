const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require("bcrypt-nodejs");
const knex = require('knex');
const cors = require('cors');
const morgan = require('morgan');

const register = require('./controllers/register');
const signin = require('./controllers/signin');
const profile = require('./controllers/profile');
const image = require('./controllers/image');
const auth = require('./controllers/authorization');


console.log('yAp!!');
const app = express();
app.use(morgan('combined'));
app.use(cors());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());

// process.env.POSTGES_URI
const db = knex({
    client: 'pg',
    connection: 
    {
        host: process.env.DATABASE_HOST,
        port: 5432,
        user: process.env.DATABASE_USER,
        password: process.env.DATABASE_PW,
        database: process.env.DATABASE_DB,
    },
});



app.get('/', (req, res) => {res.send('sucess')})

app.post('/signin', (req, res) => { signin.signinAuth(req, res, db, bcrypt)})

app.post('/register', (req, res) => {register.handleRegister(req, res, bcrypt, db)} )

app.get('/profile/:id', auth.requireAuth, (req, res) => {profile.handleProfileGet(req, res, db)})

app.post('/profile/:id', auth.requireAuth, (req, res) => {profile.handleProfileUpdate(req, res, db)})

app.put('/image', auth.requireAuth, (req, res) => {image.handleImage(req, res, db)})





app.listen(3000, () => {
    console.log("app running in port 3000")
})
