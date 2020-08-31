// Importing required modules
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
// import {env} from '../env.json'
import { uri } from './config/default' 
// import { Mongoose } from 'mongoose';
const mongoose = require('mongoose')
const ShortUrl = require('./models/shortUrl')
const app = express()

// Defining port
const port = process.env.PORT || 9000;

// Use Mongoose to connect to MongoDB
try {
  mongoose.connect(uri, {
    useNewUrlParser: true, useUnifiedTopology: true
  })
  console.log("Connected to MongoDB")
} catch (error) {
  console.log(error)
}

// This is where we pass URLs into body
app.get('/', async (req, res) => {
    const shortUrls = await ShortUrl.find()
    // res.render('index', { shortUrls: shortUrls })
    res.send('index', { shortUrls: shortUrls })
})

// From form post
// Call the fullUrl property in the body of the EJS file
app.post('/shortUrls', async (req, res) => {
    await ShortUrl.create({ full: req.body.fullUrl })
    // Create new Short URL and redirect user home
    res.redirect('/')
})

// get anything after the "/"
app.get('/api/v1/:fullUrl/:shortUrl', async (req, res) => {
    // findOne({Search Query})
    const shortUrl = await ShortUrl.findOne({ short: req.params.shortUrl })
    if (shortUrl == null) return res.sendStatus(404)
    shortUrl.clicks++
    shortUrl.save()
    res.redirect(shortUrl.full)
})

// Static folder
app.use(express.static(__dirname + './views'));

// Defining middlewares
app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

// Routes
// app.use('/api', require('./routes/index'));

// Listening to port
app.listen(port);
console.log(`Listening On http://localhost:${port}/api`);

module.exports = app;
