import jwt from 'jsonwebtoken';
import { Router } from "express";

import { CONFIGURATION } from '../utility/const.js'
import {registration} from "../middlewares/registration.js";
import {login} from "../middlewares/login.js";
import {getproductdetails} from "../middlewares/getproducts.js";
import { verifyToken } from '../middlewares/authmiddleware.js';


export const routes = Router();

routes.post("/registration", [registration], (req, res, next) => {
    if(res.locals.check === false){
        res.status(409).json({message:"USER IS ALREADY REGISTERED", userreg: false});
    }
    else if(res.locals.check === false){
        res.status(201).json({message: "USER IS REGISTERED", userreg: true});
    }
    else{
        res.status(500).json({message: "SOMETHING WENT WRONG"});
    }
});


routes.get("/login", [login], (req, res, next) => {
    if(res.locals.login === -1){
        res.status(401).json({message:"USER IS NOT EXIST", uservalid: false, token: null});
    }
    else if(res.locals.login === 0){
        res.status(401).json({message:"USER CREDENTIAL IS WRONG", uservalid: false, token: null});
    }
    else if(res.locals.login === 1){
        const token = jwt.sign({username: req.query["username"]}, CONFIGURATION.KEY, { expiresIn: '1h'});
        res.status(200).json({message:"CORRECT CREDENTIALS", uservalid: true, token: token});
    }
    else{
        res.status(500).json({message: "SOMETHING WENT WRONG"});
    }
});


routes.get("/get_products", [verifyToken, getproductdetails], (req, res, next) => {
    if(res.locals.data === undefined){
        res.status(500).json({message: "SOMETHING WENT WRONG"});
    }
    else{
        res.status(200).json(res.locals.data);
    }
    
});


routes.get("/logout", (req, res, next) => {
    res.status(200).send("<html><head>HOME PAGE</head><body><h1>login page</h1></body></html>");
});

