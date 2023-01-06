const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');

require('dotenv').config()
require('./config/database')
//running this will connect our database to our MERN app

const app = express();


// Configure to use port 3001 instead of 3000 during
// development to avoid collision with React's dev server
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use((req, res, next) => {
    res.locals.data = {}
    next()
})
app.use(logger('dev'));
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

// Check if token and create req.user
app.use(require('./config/checkToken'))

// Put API routes here, before the "catch all" route

app.use('/api/chats', require('./routes/api/chats'))

app.get('*', (req, res) => {
    res.sendFile(path.join(_dirname, 'build', 'index.html'))
})

app.listen(PORT, () => {
    console.log(`I am listening on ${PORT}.`)
})