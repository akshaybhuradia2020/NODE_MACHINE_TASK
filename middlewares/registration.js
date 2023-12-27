import {dbconnection} from '../utility/dbobject.js';
import { _userdata } from '../models/userdata.js';

export async function registration(req, res, next){
    let get_conn = await dbconnection();
    const USER = get_conn.model('USER', _userdata);

    if ((await USER.exists({username: req.body["username"]})) === null){
        await new USER({
            username: req.body["username"],
            passwd: req.body["password"]
        }).save();
        res.locals.check = true;
        await get_conn.disconnect();
        next();
        
    }
    else{
        res.locals.check = false;
        await get_conn.disconnect();
        next();
    }
}