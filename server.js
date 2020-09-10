const morgan = require('morgan');
const express = require('express');
const bodyParser =  require('body-parser');
const cors = require('cors');
const path = require('path');
require('./config/config');
const notes = require('./routes/api/notes.js');
const { request } = require('http');

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

// create build folder if in production i.e npm run build
if(process.env.NODE_ENV == 'production'){
    // loads the build folder 
    app.use(express.static('keep/build'));
    app.get('*', (request, response) => {
        // directing to index.html
        response.sendFile(path.resolve(__dirname, 'keep', 'build', 'index.html'));
    });
}

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

