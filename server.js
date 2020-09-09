const morgan = require('morgan');
const express = require('express');
const bodyParser =  require('body-parser');
const cors = require('cors');
const path = require('path');
require('./config/config');
const notes = require('./routes/api/notes.js');

const app = express();

// cors
//app.use(cors);
// bodyparser
app.use(bodyParser.json());
//logger 
app.use(morgan('dev'));

// routes
//app.use('/api/users', userRoutes);
//app.use('/api/auth', authRoutes);
app.use('/api/notes', notes);


const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

