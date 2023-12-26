import mongoose  from "mongoose";
import { _userdata } from '../models/userdata.js';

export async function registration(req, res, next){
    await mongoose.connect(`mongodb://127.0.0.1:27017/tum`)
    const USER = mongoose.model('USER', _userdata);

    if ((await USER.exists({username: req.body["username"]})) === null){
        await new USER({
            username: req.body["username"],
            passwd: req.body["password"]
        }).save();
        res.locals.check = true;
        await mongoose.disconnect();
        next();
        
    }
    else{
        res.locals.check = false;
        await mongoose.disconnect();
        next();
    }
}