import express from 'express'
import  { routes}   from './routes/routes.js';
import mongoose  from 'mongoose';

let app = new express();
app.use(express.json());
app.use('/api/v1', routes);
app.listen(3000, () => { console.log("server started")});