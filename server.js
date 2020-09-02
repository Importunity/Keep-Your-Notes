import morgan from 'morgan';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';
require('./config/config');

const app = express();

// cors
app.use(cors);
// bodyparser
app.use(bodyParser.json());
//logger 
app.use(morgan('dev'));

// routes
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});