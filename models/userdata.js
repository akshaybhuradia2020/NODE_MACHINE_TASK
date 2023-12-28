
import {Schema} from "mongoose";

export const _userdata = new Schema({
    username: { type: String, required:true, trim: true, min : 4} ,
    passwd: { type: String, required:true, trim: true, min: 4}
});