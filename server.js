const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// import routes
const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');

// express app
const app = express();

// bodyParser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
     .connect(db)
     .then(() => console.log('Mongo Connected'))
     .catch(err => console.log('Data Error', err));

// routes
app.get('/', (req, res) => res.send('hello.....'));

app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

// spin up server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));