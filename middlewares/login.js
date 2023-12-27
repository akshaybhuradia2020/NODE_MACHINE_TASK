import {dbconnection} from '../utility/dbobject.js'
import { _userdata } from '../models/userdata.js';

export async function login(req, res, next){
    let get_conn = await dbconnection();
    const USER = get_conn.model('USER', _userdata);

    if ((await USER.exists({username: req.query["username"]})) === null){
        res.locals.login = -1;
        await get_conn.disconnect();
        next();
    }
    else if((await USER.exists({username: req.query["username"], passwd: req.query["passwd"]}))){
        res.locals.login = 1;
        await get_conn.disconnect();
        next();
    }
    else{
        res.locals.login = 0;
        await get_conn.disconnect();
        next();
    }
}