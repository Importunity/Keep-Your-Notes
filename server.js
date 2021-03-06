const morgan = require('morgan');
const express = require('express');
const bodyParser =  require('body-parser');
const cors = require('cors');
const path = require('path');
require('./config/config');
const { request } = require('http');

// routes
const notes = require('./routes/api/notes.js');
const users = require('./routes/api/users.js');
const authentication = require('./routes/api/auth.js')

const app = express();

// cors
//app.use(cors);
// bodyparser -- no need for it anymore as express has a built in body parser
app.use(express.json());
//logger 
app.use(morgan('dev'));

// routes
app.use('/api/notes', notes);
app.use('/api/users', users);
app.use('/api/auth', authentication);

// create build folder if in production i.e npm run build
if(process.env.NODE_ENV === 'production'){
    // loads the build folder 
    app.use(express.static('keep/build'));
    app.get('*', (request, response) => {
        // directing to index.html
        response.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

