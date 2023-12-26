import mongoose from "mongoose";

export const _userdata = mongoose.Schema({
    username: String,
    passwd: String
});