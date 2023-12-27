import express from 'express';
import { CONFIGURATION } from './utility/const.js';
import  { routes }   from './routes/routes.js';

const app = new express();
app.use(express.json());
app.use('/api/v1', routes);
app.listen(CONFIGURATION.PORT,CONFIGURATION.HOST, () => { console.log("server started")});