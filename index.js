import express from 'express';
import cluster from 'cluster';
import {availableParallelism} from 'os';
import { CONFIGURATION } from './utility/const.js';
import  { routes }   from './routes/routes.js';

const app = new express();
const numCPUs = availableParallelism();
if(cluster.isPrimary){
    for(let i =0; i< numCPUs; i++){
        cluster.fork();
    }
    cluster.on('exit', (Worker, code, signal) => {
        console.log(`worker ${worker.process.pid} died`);
    });
}
else{
    app.use(express.json());
    app.use('/api/v1', routes);
    app.listen(CONFIGURATION.PORT,CONFIGURATION.HOST, () => { console.log("server started")});
}
